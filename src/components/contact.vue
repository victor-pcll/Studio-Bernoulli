<template>
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="flex flex-col items-center gap-16 w-full max-w-md">
            <!-- Titre -->
            <div class="items-center flex flex-col ">
                <h1 class="text-xl font-semibold text-center">Contact me</h1>
                <div class="bg-black w-1/4 sm:w-[5rem] h-[5px]"></div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex items-center justify-center gap-20">
                <a href="https://www.linkedin.com/in/victor-peucelle-521910275/">
                   <img class="w-9 h-9 md:w-10 md:h-10" :src="linkedin" alt="Linkedin" />
                </a>
                <a href="https://github.com/victor-pcll">
                    <img class="w-9 h-9 md:w-10 md:h-10" :src="github" alt="Github" />
                </a>
                <a href="https://www.instagram.com/victor_pcll/">
                    <img class="w-9 h-9 md:w-10 md:h-10" :src="instagram" alt="Instagram" />
                </a>
            </div>

            <!-- Bouton -->
            <a href="mailto:victor.peucelle@epfl.ch" class="inline-block group relative px-4 py-2 text-xl font-semibold text-gray-600 hover:text-black">
                Order of service
                <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
        </div>
    </div>
  </template>
  
  <script>
  import github from "../assets/github.svg";
  import instagram from "../assets/instagram.svg";
  import linkedin from "../assets/linkedin.svg";
  
  export default {
    name: "Box",
    data() {
      return {
        github,
        instagram,
        linkedin,
      };
    },
  };
  </script>