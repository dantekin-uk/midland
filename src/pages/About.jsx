import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary to-steel-grey text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Midland Geosystems</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Technically Advanced, Commercially Balanced Surveying Solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Midland Geosystems was established with a vision to provide exceptional surveying 
                services that combine technical excellence with commercial pragmatism. Over the years, 
                we have grown to become one of Kenya's most trusted surveying firms.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous investment in technology, talent development, 
                and a steadfast commitment to quality and precision in every project we undertake.
              </p>
              <p className="text-gray-600">
                We pride ourselves on understanding the unique challenges of the Kenyan landscape 
                and delivering solutions that meet both international standards and local requirements.
              </p>
            </div>
            <div className="bg-steel-grey/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver accurate, reliable, and timely surveying services that enable our clients 
                to make informed decisions and achieve their project objectives with confidence.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading surveying firm in Kenya, recognized for our technical expertise, 
                innovation, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Our Approach: Technically Advanced, Commercially Balanced
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure every deliverable meets the highest 
                standards of accuracy and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-steel-grey/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-steel-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Value for Money</h3>
              <p className="text-gray-600">
                We balance technical excellence with cost-effectiveness to deliver solutions 
                that provide maximum value to our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Continuous Learning</h3>
              <p className="text-gray-600">
                We stay updated with the latest technologies and methodologies to provide 
                cutting-edge solutions to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Our Team & Qualifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Accreditation</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>Surveyors Board of Kenya</strong> - Fully registered and licensed surveyors
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>Institution of Surveyors of Kenya (ISK)</strong> - Active members in good standing
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>International Standards</strong> - Compliance with global surveying standards
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>Land Surveying</strong> - Boundary determination and title surveys
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>Engineering Surveying</strong> - Construction and infrastructure projects
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <p className="text-gray-600">
                    <strong>Photogrammetry</strong> - Aerial imaging and 3D modeling
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="mb-6 opacity-90">
              Every member of our team is dedicated to maintaining the highest standards of 
              professionalism, accuracy, and client service. We combine decades of experience 
              with modern technology to deliver solutions that exceed expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B05B43] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our expertise can benefit your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-white text-[#B05B43] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#B05B43] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
