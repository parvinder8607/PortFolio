import React from 'react'

const ProjectSection = () => {
  return (
    <section id="portfolio" class="py-16 bg-gray-50 text-gray-800">
    <div class="max-w-screen-lg mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8">My Creative Works - Latest Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img src="project-image1.jpg" alt="Project 1" class="rounded-lg mb-4" />
          <h3 class="text-lg font-bold">Project Name</h3>
          <p class="text-gray-600">Brief project description.</p>
        </div>
     
      </div>
    </div>
  </section>
  

  

  )
}

export default ProjectSection
