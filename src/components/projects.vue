<script setup>
    import FadeInOnScroll from './FadeInOnScroll.vue'
</script>

<template>
    <div class="w-full max-w-7xl mx-auto p-4 grid gap-8">

        <div class="w-full flex flex-col items-end mb-6">
            <h2 class="text-xl font-extrabold">personal projects</h2>
            <div class="bg-black w-1/4 sm:w-[6rem] h-[5px]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Projet HCine -->
            <FadeInOnScroll :delay="300" from="left">
                <div class="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row gap-6 place-items-center">

                    <!-- Miniature -->
                    <div class="relative w-fit aspect-video bg-cover bg-center rounded overflow-hidden grid place-items-center">
                        <img :src="screenHcine" alt="Screenshot HCine" class="w-full h-auto object-cover" />
                        <div class="flex flex-wrap gap-2 m-auto justify-between">
                            <p class="h-6">Js</p>
                            <p class="h-6">HTML</p>
                            <p class="h-6">CSS</p>
                            <p class="h-6">PHP</p>
                            <p class="h-6">MySQL</p>
                        </div>
                    </div>
            
                    <!-- Infos -->
                    <div class="flex-1 flex flex-col justify-between gap-2 grid md:min-h-full content-between">

                        <div class="flex items-center gap-4 mb-4">
                            <img :src="logoHcine" alt="Logo Hcine" class="w-10 h-10" />
                            <div class="flex flex-col h-fit">
                                <h1 class="text-lg font-bold">Hcine</h1>
                                <p class="text-sm">Learning Platform</p>
                            </div>
                        </div>

                        <p class="text-sm text-gray-600 my-auto">Hcine is a platform that explores the historical accuracy of movies. <br>  <br>
                            For each film, expert historians analyze what’s true, what’s false, and where filmmakers took creative liberties. No movie ratings or reviews, just a deep dive into real history. Whether you’re checking facts or learning history through cinema, Hcine helps you see films in a whole new light.
                        </p>
            
                        <!-- Bouton / icône -->
                        <a href="https://hcine.fr" class="relative inline-block px-1 py-1 text-base font-semibold text-gray-600 hover:text-black group w-fit h-fit">
                            see project
                            <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </FadeInOnScroll>
    
            <!-- Projet USC -->
            <FadeInOnScroll :delay="650" from="right">
                <div class="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row gap-4 place-items-center h-full">

                    <!-- Miniature -->
                    <div class="relative w-fit aspect-video bg-cover bg-center rounded overflow-hidden my-auto grid place-items-center">
                        <img :src="screenUsc" alt="Screenshot USC" class="w-full h-auto object-cover" />
                        <div class="flex flex-wrap gap-2 m-auto justify-between">
                            <p class="h-6">Js</p>
                            <p class="h-6">HTML</p>
                            <p class="h-6">CSS</p>
                            <p class="h-6">PHP</p>
                            <p class="h-6">MySQL</p>
                        </div>
                    </div>
            
                    <!-- Infos -->
                    <div class="flex-1 flex flex-col justify-between gap-2 grid md:min-h-full content-between">
            
                        <div class="flex items-center gap-4 mb-2">
                            <img :src="logoUsc" alt="Logo USC" class="w-10 h-10" />
                            <div class="flex flex-col h-fit">
                                <h1 class="text-lg font-bold">USC Lausanne</h1>
                                <p class="text-sm">Association Platform</p>
                            </div>
                        </div>

                        <p class="text-sm text-gray-600 my-auto">USC Lausanne is a student-run surf club bringing the spirit of surfing to the university community. <br>  <br>
                            Founded in 2024 by surfers from EPFL and UNIL, the club offers surf trips, training, and events for all levels. As a non-profit association, we’re all about sharing the stoke, building community, and making surfing accessible to everyone.
                        </p>
            
                        <!-- Bouton / icône -->
                        <a href="https://usclausanne.ch" class="relative inline-block px-1 py-1 text-base font-semibold text-gray-600 hover:text-black group w-fit h-fit">
                            see project
                            <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div> 
            </FadeInOnScroll>


        </div>
    </div>
</template>


<script>
import logoHcine from "../assets/logo_Hcine.png";
import logoUsc from "../assets/logo_USC.png";
import screenHcine from "../assets/screen_H.png";
import screenUsc from "../assets/screen_U.png"
import line2 from "../assets/line_2.svg"

export default {
  name: "Box",
  data() {
    return {
      logoHcine,
      logoUsc,
      screenHcine,
      screenUsc,
      line2,
    };
  },
};
</script>