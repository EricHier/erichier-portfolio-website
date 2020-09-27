<template>
  <Layout>

    <Header/>
    <Projects/>
    <AboutMe />

    <ParticlesJS/>

  </Layout>
</template>

<script>
  import ParticlesJS from "../components/gui-elements/Particles";
  import Header from "../components/home/Header";
  import Projects from "../components/projects/Projects"
  import AboutMe from "../components/about-me/AboutMe";
  import AOS from "aos";

  export default {
    components: {ParticlesJS, Header, Projects, AboutMe},
    metaInfo: {
      title: 'Hi! EricHier'
    },
    mounted() {
      AOS.init();
    }
}
</script>