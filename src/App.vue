<template>
  <div className="min-h-screen bg-gray-100">
    <Header
      :navItems="navItems"
      :headerColor="'bg-blue-600'"
      :headerTextColor="'text-white'"
      :headerTitle="'Freelance Web Pro'"
    />
    <transition name="fade">
      <router-view v-if="isVisible" />
    </transition>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';
import { GlobeAltIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});

const navItems = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
    children: [
      {
        name: "Starter Website",
        href: "/products/starter-sites",
        description: "Perfect for small businesses",
        icon: GlobeAltIcon,
      },
      {
        name: "E-Commerce Package",
        href: "/products/e-commerce-sites",
        description: "Complete online store solution",
        icon: ShoppingCartIcon,
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
</script>

<style>
.fade-enter-active {
  transition: opacity 1s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>