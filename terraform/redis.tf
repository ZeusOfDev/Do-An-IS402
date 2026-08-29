resource "azurerm_redis_cache" "metrics" {
  name                = "${var.project_name}-redis-metrics-${var.environment}"
  location            = data.azurerm_resource_group.main.location
  resource_group_name = data.azurerm_resource_group.main.name

  capacity             = 0
  family               = "C"
  sku_name             = "Standard"
  minimum_tls_version  = "1.2"
  non_ssl_port_enabled = false


  public_network_access_enabled = true

  redis_configuration {
    maxmemory_policy                = "allkeys-lru"
    maxmemory_reserved              = 30
    maxfragmentationmemory_reserved = 30
  }

  patch_schedule {
    day_of_week    = "Sunday"
    start_hour_utc = 2
  }

  tags = local.common_tags
}


resource "azurerm_private_endpoint" "redis" {
  name                = "${var.project_name}-redis-pe-${var.environment}"
  location            = data.azurerm_resource_group.main.location
  resource_group_name = data.azurerm_resource_group.main.name
  subnet_id           = azurerm_subnet.aks.id

  private_service_connection {
    name                           = "${var.project_name}-redis-psc-${var.environment}"
    private_connection_resource_id = azurerm_redis_cache.metrics.id
    is_manual_connection           = false
    subresource_names              = ["redisCache"]
  }
  
  private_dns_zone_group {
    name                 = "redis-dns-zone-group"
    private_dns_zone_ids = [azurerm_private_dns_zone.redis.id]
  }
}


resource "azurerm_private_dns_zone" "redis" {
  name                = "privatelink.redis.cache.windows.net"
  resource_group_name = data.azurerm_resource_group.main.name
}


resource "azurerm_private_dns_zone_virtual_network_link" "redis" {
  name                  = "redis-vnet-link"
  resource_group_name   = data.azurerm_resource_group.main.name
  private_dns_zone_name = azurerm_private_dns_zone.redis.name
  virtual_network_id    = azurerm_virtual_network.main.id
}
