<template>
  <Layout>

    <Header/>
    <Projects/>
    <Characteristics/>

    <ParticlesJS/>

  </Layout>
</template>

<script>
  import ParticlesJS from "../components/gui-elements/Particles";
  import Header from "../components/home/Header";
  import Projects from "../components/home/Projects"
  import Characteristics from "../components/home/Characteristics";
  import AOS from "aos";

  export default {
    components: {ParticlesJS, Header, Projects, Characteristics},
    metaInfo: {
      title: 'Hi! EricHier'
    },
    mounted() {
      AOS.init();
    }
}
</script>