import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      setShowSubNav(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subNavItems = [
    { name: "Leadership & Mission", hasDropdown: true },
    { name: "Our Business", hasDropdown: true },
    { name: "Brand Identity", hasDropdown: true },
    { name: "Careers", link: "/career" },
    { name: "Investor Relations", link: "#" },
    { name: "Newsroom", link: "#", external: true },
    { name: "Corporate Citizenship", hasDropdown: true },
    { name: "Digital Responsibility", link: "#" },
  ];
  const businessUnits = [
    {
      title: "Mobile eXperience",
      description: "Mobile communications devices and solutions",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop",
    },
    {
      title: "Visual Display",
      description: "TVs, monitors and digital signage",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=500&fit=crop",
    },
    {
      title: "Digital Appliances",
      description: "Home appliances for modern living",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    },
    {
      title: "Networks",
      description: "5G and network infrastructure solutions",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    },
    {
      title: "Device Solutions",
      description: "Memory, system LSI and foundry",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    },
    {
      title: "Harman",
      description: "Connected car and audio solutions",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white w-screen">
      <Navbar isTransparent={false} />

      { }
      <div
        className={`fixed top-16 left-0 w-full z-40 transition-all duration-300 ${
          showSubNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-center">
          { }
          <div className="hidden lg:block w-20 xl:w-32 h-14 bg-transparent" />

          { }
          <div className="flex-1 max-w-7xl bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center px-6 md:px-8">
              { }
              <span className="font-semibold text-black py-4 pr-8 border-r border-gray-200 text-base whitespace-nowrap">
                About Us
              </span>

              {/* Nav Items */}
              <div className="flex items-center overflow-x-auto hide-scrollbar">
                {subNavItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || "#"}
                    className="flex items-center gap-1 px-4 py-4 text-sm text-gray-600 hover:text-black whitespace-nowrap transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    {item.external && <ExternalLink className="w-4 h-4" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          { }
          <div className="hidden lg:block w-20 xl:w-32 h-14 bg-transparent" />
        </div>
      </div>

      { }
      <section className="relative h-[450px] md:h-[550px] mt-16">
        <img
          src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&h=800&fit=crop"
          alt="Samsung Innovation"
          className="w-full h-full object-cover"
        />
        { }
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <span className="text-white/90 text-sm md:text-base font-medium mb-3">
            Our Business
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl drop-shadow-lg">
            Taking the lead in tech innovation
          </h1>
        </div>
      </section>

      { }
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Samsung Electronics is a global leader in technology, opening new possibilities for people everywhere.
            Through relentless innovation and discovery, we are transforming the worlds of TVs, smartphones,
            wearable devices, tablets, cameras, digital appliances, network systems, medical devices,
            semiconductors and LED solutions.
          </p>
        </div>
      </section>

      {/* Consumer Electronics Banner */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=800&fit=crop"
          alt="Consumer Electronics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-16 left-8 md:left-16 lg:left-24 max-w-lg">
          <span className="text-white/90 text-sm font-medium">Consumer Electronics</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight italic">
            Brilliant innovation you never expected
          </h2>
          <button
            className="mt-8 px-6 py-3 text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            Learn more
          </button>
        </div>
      </section>

      {/* IT & Mobile Communications Section - Black Background */}
      <section className="bg-black py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Quote Text */}
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-medium text-center leading-relaxed mb-16 italic">
            We create a culture of infinite possibilities. The deep trust and loyalty of our customers drives us to continually grow and lead innovation.
          </p>

          {/* Mobile Communications Card */}
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1600&h=800&fit=crop"
                alt="IT & Mobile Communications"
                className="w-full h-full object-cover"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-12 left-8 md:left-12 max-w-md">
              <span className="text-white/70 text-sm font-medium">IT & Mobile Communications</span>
              <h2 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
                We strive to maximize value and convenience for our customers
              </h2>
              <button
                className="mt-6 px-6 py-2.5 border text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'white' }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Device Solutions Section - Gray Background */}
      <section className="bg-gray-100 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Quote Text */}
          <p className="text-black text-2xl md:text-3xl lg:text-4xl font-medium text-center leading-relaxed mb-16 italic">
            We are expanding our highly differentiated mobile devices, as well as working hard to develop next-generation innovation.
          </p>

          { }
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=1600&h=800&fit=crop"
              alt="Device Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/80 to-transparent" />
            <div className="absolute bottom-12 left-8 md:left-12 max-w-md">
              <span className="text-gray-600 text-sm font-medium">Device Solutions</span>
              <h2 className="text-black text-2xl md:text-3xl font-bold mt-2 leading-tight">
                Developing next-generation products for a better tomorrow
              </h2>
              <button
                className="mt-6 px-6 py-2.5 text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units Grid */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Our Business Units
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{unit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
