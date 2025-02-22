<template>
    <header :class="[props.headerColor, props.sticky ? 'sticky top-0' : '', 'z-50', props.headerTextColor]" 
        class="w-full py-4 px-6 flex justify-between items-center shadow-lg"
    >
        <router-link to="/" className="text-2xl font-bold">{{ props.headerTitle }}</router-link>
        <nav class="flex max-w-7xl items-center justify-between lg:px-8 p-2" aria-label="Global">
            <!-- Mobile Menu Button -->
            <div class="flex lg:hidden">
                <button 
                    type="button" 
                    class="relative z-50 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-300 ease-in-out" 
                    @click="mobileMenuOpen = !mobileMenuOpen"
                >
                    <span class="sr-only">Toggle main menu</span>
                    <Bars3Icon v-if="!mobileMenuOpen" class="size-6 transition-transform duration-300 ease-in-out transform rotate-0" aria-hidden="true" />
                    <XMarkIcon v-else class="size-6 transition-transform duration-300 ease-in-out transform rotate-180" aria-hidden="true" />
                </button>
            </div>
            <!-- Desktop Navigation -->
            <PopoverGroup class="hidden lg:flex lg:gap-x-12 flex-1 items-center justify-end" :class="navAlignmentClass">
                <template v-for="item in props.navItems" :key="item.name">
                    <!-- Dropdown for items with children -->
                    <Popover v-if="item.children" class="relative">
                        <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold focus:outline-none focus:ring-0">
                            {{ item.name }}
                            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </PopoverButton>
                        <transition
                            enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-y-1"
                            enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0"
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <PopoverPanel class="absolute left-0 md:left-auto md:right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                                v-slot="{ close }">
                                <div class="p-4">
                                    <div
                                        v-for="child in item.children"
                                        :key="child.name"
                                        class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                                        @click="close()"
                                    >
                                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <component :is="child.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div class="flex-auto">
                                            <router-link :to="child.href" class="block font-semibold text-gray-900">
                                                {{ child.name }}
                                                <span class="absolute inset-0" />
                                            </router-link>
                                            <p class="mt-1 text-gray-600">{{ child.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                    <!-- Simple Link for items without children -->
                    <router-link v-else :to="item.href" class="text-sm font-semibold" :class="props.headerItemHover">
                        {{ item.name }}
                    </router-link>
                </template>
            </PopoverGroup>
        </nav>
        <!-- Mobile Navigation -->
        <transition
            enter-active-class="transition-transform duration-300 ease-in-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-300 ease-in-out"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <Dialog 
                class="fixed top-[72px] right-0 z-50 w-full bg-gray-100 shadow-lg transform transition-all" 
                @close="mobileMenuOpen = false" 
                :open="mobileMenuOpen"
            >
                <DialogPanel class="min-h-[calc(100vh-72px)] flex flex-col py-6 px-6">
                    <nav class="flex flex-col space-y-2">
                        <div v-for="item in props.navItems" :key="item.name" class="w-full">
                            <!-- Mobile Dropdown -->
                            <Disclosure v-if="item.children" v-slot="{ open }">
                                <DisclosureButton class="w-full text-left px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 flex justify-between items-center">
                                    {{ item.name }}
                                    <ChevronDownIcon class="h-5 w-5 transition-transform duration-300 ease-in-out" :class="{'rotate-180': open}" />
                                </DisclosureButton>
                                <DisclosurePanel class="pl-6 space-y-2">
                                    <router-link
                                        v-for="child in item.children"
                                        :key="child.name"
                                        :to="child.href"
                                        class="block py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 w-full"
                                        @click="mobileMenuOpen = false"
                                    >
                                        {{ child.name }}
                                    </router-link>
                                </DisclosurePanel>
                            </Disclosure>

                            <!-- Simple Link for items without children -->
                            <router-link 
                                v-else 
                                :to="item.href" 
                                class="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 w-full"
                                @click="mobileMenuOpen = false"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </nav>
                </DialogPanel>
            </Dialog>
        </transition>
  </header>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Component } from 'vue';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

interface NavItem {
    name: string,
    href: string,
    description: string,
    icon: Component,
    children: Array<NavItem>
}

export interface IProps {
    navItems: Array<NavItem>
    headerColor?: string
    sticky?: boolean
    navAlignment?: 'left' | 'center' | 'right';
    headerTextColor?: string
    headerItemHover?: string
    headerTitle: string
};

const props = withDefaults(defineProps<IProps>(), {
    headerColor: 'bg-white',
    sticky: true,
    navAlignment: 'center',
    headerTextColor: 'text-gray-900',
    headerItemHover: 'hover:underline'
});

const navAlignmentClass = computed(() => {
  switch (props.navAlignment) {
    case 'center':
      return 'justify-center';
    case 'right':
      return 'justify-end';
    default:
      return 'justify-start';
  }
});
  
const mobileMenuOpen = ref(false)
</script>
