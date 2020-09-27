<template>
  <Layout>

    <Header/>
    <Projects/>
    <AboutMe />
    <WhatIOffer />

    <ParticlesJS/>

  </Layout>
</template>

<script>
  import ParticlesJS from "../components/gui-elements/Particles";
  import Header from "../components/gui-elements/Header";
  import Projects from "../components/projects/Projects"
  import AboutMe from "../components/about-me/AboutMe";
  import WhatIOffer from "../components/what-i-offer/WhatIOffer"
  import AOS from "aos";

  export default {
    components: {ParticlesJS, Header, Projects, AboutMe, WhatIOffer},
    metaInfo: {
      title: 'Hi! EricHier'
    },
    mounted() {
      AOS.init();
    }
}
</script>