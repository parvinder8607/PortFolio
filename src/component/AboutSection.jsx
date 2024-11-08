import React from 'react'

const AboutSection = () => {
  return (
    <section class="py-16 bg-gray-100 text-gray-800 relative">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-bold mb-4">About Me</h2>
    <p class="text-lg mb-8 text-gray-600">
      I’m a passionate developer with a knack for creating efficient, engaging applications. With experience in Laravel, PHP, and JavaScript, I’m committed to crafting high-quality software.
    </p>
    <button class="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800">Contact Me</button>
  </div>
  <div class="absolute top-0 right-0 w-24 h-24 bg-yellow-500 transform rotate-45 -translate-y-12"></div>
</section>

  )
}

export default AboutSection
