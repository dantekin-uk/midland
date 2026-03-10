import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "Cadastral Surveying",
      description: "Professional land boundary determination, title surveys, and property registration services with legal compliance.",
      icon: "🗺️",
      color: "blue",
      link: "/services/cadastral",
      features: [
        "Land boundary determination",
        "Title surveys and registration",
        "Beacon establishment and maintenance",
        "Subdivision and consolidation surveys",
        "Legal compliance documentation"
      ]
    },
    {
      title: "Engineering Surveying",
      description: "Comprehensive construction layout, deformation monitoring, and infrastructure surveying for engineering projects.",
      icon: "🏗️",
      color: "green",
      link: "/services/engineering",
      features: [
        "Construction layout surveys",
        "Deformation monitoring",
        "Infrastructure surveying",
        "As-built surveys",
        "Setting out and control surveys"
      ]
    },
    {
      title: "Photogrammetry",
      description: "Advanced aerial imaging, 3D modeling, and mapping services using cutting-edge photogrammetric techniques.",
      icon: "📸",
      color: "purple",
      link: "/services/photogrammetry",
      features: [
        "Aerial imaging and mapping",
        "3D modeling and visualization",
        "Drone surveying services",
        "Orthophoto generation",
        "Volume calculations"
      ]
    }
  ]

  const additionalServices = [
    {
      title: "Topographic Surveys",
      description: "Detailed mapping of land features, contours, and terrain characteristics for planning and design purposes.",
      icon: "⛰️"
    },
    {
      title: "GIS Services",
      description: "Geographic Information System solutions for spatial data management and analysis.",
      icon: "🌍"
    },
    {
      title: "Hydrographic Surveys",
      description: "Underwater mapping and depth measurements for marine and freshwater projects.",
      icon: "💧"
    },
    {
      title: "Control Surveys",
      description: "Establishment of precise reference points for large-scale surveying projects.",
      icon: "🎯"
    },
    {
      title: "Consultation Services",
      description: "Expert advice and consultation on surveying matters and project requirements.",
      icon: "💼"
    },
    {
      title: "Expert Witness Services",
      description: "Professional testimony and expert opinion in legal matters related to surveying.",
      icon: "⚖️"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        hover: 'hover:bg-primary',
        border: 'border-primary'
      },
      green: {
        bg: 'bg-steel-grey/10',
        text: 'text-steel-grey',
        hover: 'hover:bg-steel-grey',
        border: 'border-steel-grey'
      },
      purple: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        hover: 'hover:bg-primary',
        border: 'border-primary'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary to-steel-grey text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive surveying solutions delivered with precision and expertise
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color)
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`p-8 ${colors.bg} rounded-t-lg`}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.link}
                      className={`inline-block ${colors.text} ${colors.border} border-2 px-6 py-3 rounded-lg font-semibold ${colors.hover} text-white transition-colors w-full text-center`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Technology & Equipment
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Advanced Technology</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">GPS/GNSS Technology</h4>
                    <p className="text-gray-600">High-precision satellite positioning systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Drone Technology</h4>
                    <p className="text-gray-600">UAV-based aerial imaging and mapping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">3D Laser Scanning</h4>
                    <p className="text-gray-600">High-density point cloud data collection</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Quality Assurance</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Our commitment to quality is reflected in our rigorous processes and state-of-the-art equipment:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Regular equipment calibration and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Multiple quality control checks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Compliance with international standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Detailed documentation and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B05B43] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your specific surveying requirements
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-[#B05B43] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
