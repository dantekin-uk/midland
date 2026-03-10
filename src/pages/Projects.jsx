import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Nairobi Highway Expansion",
      category: "engineering",
      description: "Construction layout and monitoring for the Thika Superhighway expansion project.",
      image: "🏗️",
      status: "completed",
      year: "2023",
      client: "Ministry of Transport",
      features: ["50km highway", "Construction layout", "Progress monitoring", "Quality control"]
    },
    {
      id: 2,
      title: "Kisumu Industrial Park",
      category: "cadastral",
      description: "Large-scale land subdivision and title survey for industrial development.",
      image: "🏭",
      status: "completed",
      year: "2023",
      client: "Kisumu County Government",
      features: ["200 hectares", "Land subdivision", "Title surveys", "Beacon establishment"]
    },
    {
      id: 3,
      title: "Mombasa Port 3D Mapping",
      category: "photogrammetry",
      description: "Aerial photogrammetry and 3D modeling of the Mombasa Port facilities.",
      image: "🚢",
      status: "completed",
      year: "2023",
      client: "Kenya Ports Authority",
      features: ["3D modeling", "Volume calculations", "Progress monitoring", "Asset documentation"]
    },
    {
      id: 4,
      title: "Nakuru Water Treatment Plant",
      category: "engineering",
      description: "Engineering survey for water treatment plant construction and infrastructure.",
      image: "💧",
      status: "ongoing",
      year: "2024",
      client: "Nakuru Water Company",
      features: ["Site layout", "Infrastructure surveying", "As-built documentation", "Quality assurance"]
    },
    {
      id: 5,
      title: "Eldoret Agricultural Mapping",
      category: "photogrammetry",
      description: "Large-scale agricultural mapping using drone photogrammetry for precision farming.",
      image: "🌾",
      status: "completed",
      year: "2023",
      client: "Agricultural Development Corporation",
      features: ["10,000 hectares", "Crop monitoring", "Irrigation planning", "Yield analysis"]
    },
    {
      id: 6,
      title: "Kitale Land Consolidation",
      category: "cadastral",
      description: "Land consolidation and boundary determination for agricultural development.",
      image: "🗺️",
      status: "completed",
      year: "2023",
      client: "Kitale Farmers Cooperative",
      features: ["Land consolidation", "Boundary disputes", "Title regularization", "Legal documentation"]
    },
    {
      id: 7,
      title: "Nairobi CBD Deformation Monitoring",
      category: "engineering",
      description: "Structural deformation monitoring for high-rise buildings in Nairobi CBD.",
      image: "🏢",
      status: "ongoing",
      year: "2024",
      client: "Various Building Owners",
      features: ["Deformation monitoring", "Structural analysis", "Safety assessment", "Regular reporting"]
    },
    {
      id: 8,
      title: "Lamu Port Infrastructure",
      category: "cadastral",
      description: "Land survey and boundary determination for Lamu Port-South Sudan-Ethiopia Transport Corridor.",
      image: "⚓",
      status: "completed",
      year: "2022",
      client: "LAPSSET Authority",
      features: ["Port infrastructure", "Boundary surveys", "Land acquisition", "Legal compliance"]
    },
    {
      id: 9,
      title: "Mount Kenya Forest Mapping",
      category: "photogrammetry",
      description: "Environmental mapping and monitoring of Mount Kenya forest ecosystem.",
      image: "🏔️",
      status: "completed",
      year: "2023",
      client: "Kenya Forest Service",
      features: ["Forest mapping", "Environmental monitoring", "Conservation planning", "Change detection"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'cadastral', name: 'Cadastral', count: projects.filter(p => p.category === 'cadastral').length },
    { id: 'engineering', name: 'Engineering', count: projects.filter(p => p.category === 'engineering').length },
    { id: 'photogrammetry', name: 'Photogrammetry', count: projects.filter(p => p.category === 'photogrammetry').length }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getStatusColor = (status) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
  }

  const getCategoryColor = (category) => {
    const colors = {
      cadastral: 'bg-blue-100 text-blue-800',
      engineering: 'bg-green-100 text-green-800',
      photogrammetry: 'bg-purple-100 text-purple-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary to-steel-grey text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Showcasing our expertise across diverse surveying projects throughout Kenya
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">47</div>
              <div className="text-gray-600">Counties Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-0 z-10 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {project.client}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B05B43] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can support your next surveying project
          </p>
          <button className="bg-white text-[#B05B43] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}

export default Projects
