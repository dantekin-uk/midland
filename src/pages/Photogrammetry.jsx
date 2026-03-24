import { Link } from 'react-router-dom'

const Photogrammetry = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Link to="/services" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl font-bold mb-4">Photogrammetry Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Advanced aerial imaging, 3D modeling, and mapping solutions using cutting-edge technology
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Advanced Photogrammetric Solutions</h2>
              <p className="text-slate-700 mb-4">
                Our photogrammetry services transform aerial and ground-based imagery into precise, 
                measurable 3D data and maps. Using state-of-the-art drone technology and photogrammetric 
                software, we deliver high-resolution spatial data for a wide range of applications.
              </p>
              <p className="text-slate-700 mb-4">
                From large-scale topographic mapping to detailed 3D modeling of structures and sites, 
                our photogrammetric solutions provide cost-effective alternatives to traditional surveying 
                methods while maintaining exceptional accuracy.
              </p>
              <p className="text-slate-700">
                Our team combines technical expertise with practical experience to deliver solutions 
                that meet the specific needs of engineering, construction, environmental, and planning projects.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Key Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-700">High-resolution aerial imagery</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-700">Centimeter-level accuracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-700">Rapid data acquisition</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-700">Cost-effective large area coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Photogrammetry Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Aerial Surveying</h3>
              <p className="text-slate-700">
                High-resolution drone-based aerial surveys for topographic mapping and site analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3D Modeling</h3>
              <p className="text-slate-700">
                Detailed 3D models of buildings, infrastructure, and terrain for visualization and analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Orthophoto Mapping</h3>
              <p className="text-slate-700">
                Geometrically corrected aerial photographs for accurate measurement and mapping.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Volume Calculations</h3>
              <p className="text-slate-700">
                Precise volume measurements for stockpiles, excavations, and earthworks planning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Progress Monitoring</h3>
              <p className="text-slate-700">
                Regular aerial surveys to monitor construction progress and site changes over time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">LiDAR Integration</h3>
              <p className="text-slate-700">
                Combined photogrammetric and LiDAR data for enhanced accuracy and detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Our Technology & Equipment
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Drone Fleet</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Fixed-Wing Drones</h4>
                    <p className="text-slate-700">For large area mapping and long flight times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Multi-Rotor Drones</h4>
                    <p className="text-slate-700">For detailed site mapping and 3D modeling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">VTOL Drones</h4>
                    <p className="text-slate-700">Vertical take-off and landing for versatile operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Camera Systems</h3>
              <div className="bg-slate-50/50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-600">High-resolution RGB cameras (up to 100MP)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-600">Multispectral imaging systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-600">Thermal imaging capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-slate-600">LiDAR integration options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Applications & Industries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-slate-900 mb-2">Construction</h3>
              <p className="text-slate-700 text-sm">Site planning and progress monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="font-bold text-slate-900 mb-2">Agriculture</h3>
              <p className="text-slate-700 text-sm">Crop monitoring and precision farming</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">⛏️</div>
              <h3 className="font-bold text-slate-900 mb-2">Mining</h3>
              <p className="text-slate-700 text-sm">Volume calculations and site mapping</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-bold text-slate-900 mb-2">Environment</h3>
              <p className="text-slate-700 text-sm">Environmental monitoring and analysis</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="font-bold text-slate-900 mb-2">Urban Planning</h3>
              <p className="text-slate-700 text-sm">City mapping and development planning</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🛣️</div>
              <h3 className="font-bold text-slate-900 mb-2">Transportation</h3>
              <p className="text-slate-700 text-sm">Road and infrastructure mapping</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Utilities</h3>
              <p className="text-slate-700 text-sm">Power line and pipeline inspection</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-slate-900 mb-2">Heritage</h3>
              <p className="text-slate-700 text-sm">Historical site documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Our Photogrammetry Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Planning</h3>
              <p className="text-gray-600 text-sm">Flight planning and site assessment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Data Capture</h3>
              <p className="text-gray-600 text-sm">Aerial imagery acquisition</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Processing</h3>
              <p className="text-gray-600 text-sm">Image processing and analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Modeling</h3>
              <p className="text-gray-600 text-sm">3D model generation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Delivery</h3>
              <p className="text-gray-600 text-sm">Final deliverables and reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B05B43] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Leverage Aerial Technology?</h2>
          <p className="text-xl mb-8 text-white/90">
            Discover how our photogrammetry services can benefit your project
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-[#B05B43] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Photogrammetry
