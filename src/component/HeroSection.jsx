import React from 'react'

const HeroSection = () => {
  return (
    <section class="flex flex-col items-center justify-center bg-white text-gray-800 min-h-screen px-6 py-12">
    <header class="flex justify-between items-center w-full max-w-screen-lg fixed top-0 z-10">
      <h1 class="text-3xl font-bold text-green-600">Agency</h1>
      <nav class="space-x-4">
        <a href="#about" class="text-gray-600 hover:text-green-600">About</a>
        <a href="#skills" class="text-gray-600 hover:text-green-600">Skills</a>
        <a href="#portfolio" class="text-gray-600 hover:text-green-600">Portfolio</a>
        <a href="#testimonial" class="text-gray-600 hover:text-green-600">Testimonials</a>
      </nav>
      <button class="bg-green-600 text-white px-6 py-2 rounded-lg">Download CV</button>
    </header>
  
    <div class="text-center mt-16">
      <p class="text-green-600 font-semibold text-lg">Welcome</p>
      <h1 class="text-5xl font-bold mb-4">I have <span class="text-green-600">Creative Design</span> Experience</h1>
      <p class="text-lg text-gray-600 mb-6">I'm Tanvir, a creative Product Designer. I've been helping businesses solve their problems with my design for 2 years.</p>
      <div class="space-x-4">
        <button class="bg-green-600 text-white px-6 py-2 rounded-lg">Contact Me</button>
        <button class="bg-gray-200 text-green-600 px-6 py-2 rounded-lg">View Portfolio</button>
      </div>
    </div>
  </section>
  
  
  )
}

export default HeroSection
