<template>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    
  </template>
  
  <script>
  
  import Navbar from '../components/Navbar.vue'
  import Hero from '../components/Hero.vue'
  import About from '../components/About.vue'
  import Projects from '../components/Projects.vue'
  import Contact from '../components/Contact.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'App',
    components: { Navbar, Hero, About, Projects, Contact, Footer },
    setup() {
      return {  }
    }
  }
  </script>
  
  <style lang="scss">
  // lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D 
  // lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717 
  </style>
  