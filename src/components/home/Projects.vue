<template>
    <section class="has-caro-background">
        <div class="bg-white text-black p-10 -pb-30" data-aos="fade" id="projects">

            <ProjectContainer v-for="(project, index) in $static.projects.edges" :key="project.node.id" :href="project.node.href" :title="project.node.title"
                class="last:mb-0">
                <ProjectImage :project="project" :class="{'row-start-1 col-start-2' : index % 2 === 1}" />
                <ProjectsTextBlock :title="project.node.title" :role="project.node.role">
                    <div v-html="project.node.content" />
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
    projects: allProject(sortBy: "id", order: ASC) {
        edges {
            node {
                title
                id
                href
                img
                content
                role
            }
        }
    }
}
</static-query>