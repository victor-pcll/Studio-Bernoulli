<script setup>
    import FadeInOnScroll from './FadeInOnScroll.vue'
</script>

<template>
    <div class="w-full min-h-screen p-4 bg-white grid ">
        
        <div class="w-full flex flex-col items-start mb-6">
            <h2 class="text-xl font-extrabold">about me</h2>
            <div class="bg-black w-1/4 md:w-[3rem] w-[2rem] h-[5px]"></div>
        </div>

        <!-- Contact & Bio -->
        <div class="mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] items-center text-sm text-gray-800">
            <img src="../assets/dev_img.png" alt="Element" class="mx-auto w-[100%] place-self-center max-w-[20rem]" />

            <div class="p-8 grid gap-4">
                <div class="text-lg font-bold m-4">Victor Peucelle</div>
                <p class="text-sm m-2">I'm a passionate Full-Stack Developer based in Lausanne, Switzerland. <br>
                With a strong eye for design and a solid foundation in both front-end and back-end technologies, I build seamless digital
                experiences from start to finish. My background in interface design has made me highly attentive to detail—whether it's
                pixel-perfect layouts, clean architecture, or optimized performance.
                </p>
                <div class="my-4 font-semibold">INSTAGRAM&nbsp;&nbsp; GITHUB&nbsp;&nbsp; EMAIL</div>
            </div>
        </div>

        <!-- Grid container for 4 boxes -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
        <!-- Interface Design box -->
        <FadeInOnScroll :delay="150">
            <div class="relative bg-cover bg-center rounded-lg shadow-md p-4 h-[6rem]">
                <div class="flex items-center justify-left gap-4">
                    <img :src="illu_1" alt="Website" class="w-7 h-7" />
                    <div class="bg-gray-600 w-1/4 w-[0.1rem] h-[4rem]"></div>
                    <div>
                        <div class="text-base font-bold">Interface & Design</div>
                        <p class="text-sm text-gray-600">Briefing, wireframe, UX, UI and branding.</p>
                    </div>
                </div>
            </div>
        </FadeInOnScroll>
  
        <!-- HTML box -->
        <FadeInOnScroll :delay="550">
            <div class="relative bg-cover bg-center rounded-lg shadow-md p-4 h-[6rem]">
                <div class="flex items-center justify-left gap-4">
                    <img :src="illu_2" alt="Web design" class="w-7 h-7" />
                    <div class="bg-gray-600 w-1/4 w-[0.1rem] h-[4rem]"></div>
                    <div>
                        <h1 class="text-base font-bold">html & css & JS</h1>
                        <p class="text-sm text-gray-600">Responsive websites with fast loading.</p>
                    </div>
                </div>
            </div>
        </FadeInOnScroll>
  
        <!-- React / Vue box -->
        <FadeInOnScroll :delay="350">
            <div class="relative bg-cover bg-center rounded-lg shadow-md p-4 h-[6rem]">
                <div class="flex items-center justify-left gap-4">
                    <img :src="illu_3" alt="Intelligent" class="w-7 h-7" />
                    <div class="bg-gray-600 w-1/4 w-[0.1rem] h-[4rem]"></div>
                    <div>
                        <h1 class="text-base font-bold">Vue.js & tailwindcss</h1>
                        <p class="text-sm text-gray-600">Build your system with node.js.</p>
                    </div>
                </div>
            </div>
        </FadeInOnScroll>
  
        <!-- PHP / MySQL box -->
        <FadeInOnScroll :delay="750">
            <div class="relative bg-cover bg-center rounded-lg shadow-md p-4 h-[6rem]">
                <div class="flex items-center justify-left gap-4">
                    <img :src="illu_4" alt="Internet" class="w-7 h-7" />
                    <div class="bg-gray-600 w-1/4 w-[0.1rem] h-[4rem]"></div>
                    <div>
                        <h1 class="text-base font-bold">php & MySQL</h1>
                        <p class="text-sm text-gray-600">Connect with Database</p>
                    </div>
                </div>
            </div>
        </FadeInOnScroll>

      </div>
    </div>
</template>

<script>
import illu_1 from "../assets/illu_1.svg";
import illu_2 from "../assets/illu_2.svg";
import illu_3 from "../assets/illu_3.svg";
import illu_4 from "../assets/illu_4.svg";
import line from "../assets/Line.svg"

export default {
  name: "Box",
  data() {
    return {
      illu_1,
      illu_2,
      illu_3,
      illu_4,
      line,
    };
  },
};
</script>