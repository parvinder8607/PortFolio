import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" class="py-16 bg-gray-800 text-white">
    <div class="max-w-screen-lg mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-8">Let's Discuss Your Project</h2>
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" class="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400" />
          <input type="email" placeholder="Your Email" class="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400" />
        </div>
        <input type="text" placeholder="Budget" class="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400" />
        <textarea placeholder="Your Message" class="w-full p-3 bg-gray-700 rounded-lg text-gray-300 placeholder-gray-400"></textarea>
        <button type="submit" class="bg-green-600 px-6 py-2 rounded-lg text-white hover:bg-green-700">Submit Message</button>
      </form>
    </div>
  </section>
  

  
  )
}

export default ContactSection
