<template>
  <Layout>

    <Header/>
    <Projects/>

    <ParticlesJS/>

  </Layout>
</template>

<script>
  import ParticlesJS from "../components/Particles";
  import Header from "../components/home/Header";
  import Projects from "../components/home/Projects"
  import AOS from "aos";
  import 'aos/dist/aos.css'

  export default {
    components: {ParticlesJS, Header, Projects},
    metaInfo: {
      title: 'EricHier'
    },
    mounted() {
      AOS.init();
      window.aos = AOS;
    }
}
</script>

<style>

</style>
