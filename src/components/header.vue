<template>
    <header class="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <a href="#">  
            <div class="text-xl font-bold text-gray-800">
                <img src="../assets/logo.png" alt="Logo" class="h-10" />
            </div>
        </a> 

        <nav class="space-x-6 text-gray-700 font-medium flex flex-row gap-4">
            <a href="#projects" class="relative inline-block px-1 py-1 text-base font-semibold text-gray-600 hover:text-black group">
                projects
                <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" class="relative inline-block px-1 py-1 text-base font-semibold text-gray-600 hover:text-black group">
                about me
                <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" class="relative inline-block px-1 py-1 text-base font-semibold text-gray-600 hover:text-black group">
                contact
                <span class="absolute left-0 bottom-0 h-[0.3rem] w-3 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
        </nav>
    </header>
</template>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>