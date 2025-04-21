<script setup>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  import Title from './components/title.vue'
  import About from './components/about.vue'
  import Contact from './components/contact.vue'
  import Project from './components/projects.vue'
  import BoxPlus from './components/boxplus.vue'
</script>

<template>
  <Header />

  <main class="pt-20 w-full">
    <Title />

    <section id="projects" class="min-h-screen bg-gray-100 p-8">
      <Project />
      <BoxPlus />
    </section>

    <section id="about" class="min-h-screen bg-white p-8">
      <About />
    </section>

    <section id="contact" class="min-h-screen bg-gray-100 p-8">
      <Contact />
    </section>
  </main>

  <Footer />
</template>