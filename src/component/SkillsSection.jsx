import React from 'react'

const SkillsSection = () => {
  return (
    <section id="skills" class="py-16 bg-white text-gray-800">
  <div class="max-w-screen-lg mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-8">Why Hire Me For Your Next Project?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-6 bg-gray-50 rounded-lg shadow">
        <h3 class="text-xl font-semibold text-green-600">Visual Design</h3>
        <p class="text-gray-600">Creating unique and modern design experiences.</p>
      </div>
      <div class="p-6 bg-gray-50 rounded-lg shadow">
        <h3 class="text-xl font-semibold text-green-600">UX Research</h3>
        <p class="text-gray-600">Building user-centric designs based on solid research.</p>
      </div>
      <div class="p-6 bg-gray-50 rounded-lg shadow">
        <h3 class="text-xl font-semibold text-green-600">Design Prototype</h3>
        <p class="text-gray-600">Creating accurate and efficient prototypes with Figma.</p>
      </div>
    </div>
  </div>
</section>

  


  )
}

export default SkillsSection
