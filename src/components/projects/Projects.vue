<template>
    <section class="has-caro-background">
        <div class="bg-white p-10 -pb-30" data-aos="fade" id="projects">

            <ProjectContainer v-for="(project, index) in $t('projects.projects')" :key="index" :href="project.href" :title="project.title"
                class="last:mb-0" :data-aos="index % 2 ? 'fade-right' : 'fade-left'" data-aos-offset="150">
                <ProjectImage :project="project" :class="{'row-start-1 col-start-2' : index % 2 === 1}" />
                <ProjectsTextBlock :title="project.title" :role="project.role">
                    <VueMarkdown :source="project.description" />
                </ProjectsTextBlock>
            </ProjectContainer>

        </div>
    </section>
</template>
<script>
    import ProjectContainer from "./ProjectContainer";
    import ProjectsTextBlock from "./ProjectsTextBlock";
    import ProjectImage from "./ProjectImage";
    import VueMarkdown from 'vue-markdown';

    export default {
        components: {ProjectImage, ProjectContainer, ProjectsTextBlock, VueMarkdown}
    }
</script>