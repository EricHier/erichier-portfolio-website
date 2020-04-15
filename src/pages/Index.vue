<template>
  <Layout>

    <Header/>
    <Projects/>

    <ParticlesJS/>

  </Layout>
</template>

<script>
  import ParticlesJS from "../components/gui-elements/Particles";
  import Header from "../components/home/Header";
  import Projects from "../components/home/Projects"
  import AOS from "aos";

  export default {
    components: {ParticlesJS, Header, Projects},
    metaInfo: {
      title: 'Hi! EricHier'
    },
    mounted() {
      AOS.init();
    }
}
</script>