<template>
    <section class="has-caro-background">
        <div class="bg-white text-black p-10" data-aos="fade" id="projects">

            <ProjectContainer v-for="(project, index) in $static.projects.edges" :key="project.node.id" :href="project.node.href" :title="project.node.title">
                <ProjectImage :project="project" :class="{'row-start-1 col-start-2' : index % 2 === 1}" />
                <ProjectsTextBlock :title="project.node.title">
                    <div v-html="project.node.content"/>
                </ProjectsTextBlock>
            </ProjectContainer>

        </div>
    </section>
</template>
<script>
    import ProjectContainer from "../projects/ProjectContainer";
    import ProjectsTextBlock from "../projects/ProjectsTextBlock";
    import ProjectImage from "../projects/ProjectImage";

    export default {
        components: {ProjectImage, ProjectContainer, ProjectsTextBlock}
    }
</script>
<static-query>
query {
    projects: allProject {
        edges {
            node {
                title
                href
                img
                content
            }
        }
    }
}
</static-query>