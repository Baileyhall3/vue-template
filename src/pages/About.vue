<template>
  <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          We are a team of passionate web developers and designers dedicated to creating exceptional digital experiences. With years of experience in the industry, we understand what it takes to build websites that not only look great but also perform exceptionally well.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to help businesses succeed online by providing them with custom, high-performing websites that drive results. We believe in combining beautiful design with powerful functionality to create websites that work as good as they look.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Expert team with years of experience</li>
          <li>Custom solutions tailored to your needs</li>
          <li>Focus on performance and SEO</li>
          <li>Ongoing support and maintenance</li>
          <li>Commitment to client satisfaction</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import SearchBar from '../components/UI/SearchBar.vue';

// SEO optimization
useHead({
  title: 'About Us - Freelance Web Pro',
  meta: [
    {
      name: 'description',
      content: 'Learn about our professional web development team and our commitment to creating exceptional digital experiences for businesses.'
    }
  ]
})
</script>
