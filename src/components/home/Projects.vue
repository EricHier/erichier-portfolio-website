<template>
    <section class="has-caro-background">
        <div class="bg-white text-black p-10" data-aos="fade" id="projects">

            <!-- Vehikeling -->
            <ProjectContainer href="https://vehikeling.de" title="vehikeling">
                <g-image src="~/assets/img/vehikeling.png" width="600" class="shadow-2xl rounded mx-auto"/>
                <ProjectsTextBlock title="vehikeling">
                    Eine <b>Web-Plattform um dein(e) Fahrzeuge zu verwalten</b>. Du kannst ganz komfortabel
                    deine Services eintragen und Benachrichtigungen zu anstehenden Wartungen bekommen -
                    und all dies jederzeit auf der Webseite oder in der App.
                </ProjectsTextBlock>
            </ProjectContainer>

            <!-- PlottrOrganizr -->
            <ProjectContainer href="https://github.com/EricHier/PlottrOrganizr" title="PlottrOrganizr">
                <ProjectsTextBlock title="PlottrOrganizr">
                    Eine Software um deine <b>Plotter-Datein ganz einfach in einer Web-App zu verwalten</b>.
                    Es wird automatisch dein PC durchgegangen und nach Designs gescannt. Diese werden übersichtlich
                    in einer Liste angezeigt, du kannst diese dann auch einfach öffnen.
                </ProjectsTextBlock>
                <g-image src="~/assets/img/vehikeling.png" width="600" class="shadow-2xl rounded mx-auto"/>
            </ProjectContainer>


        </div>
    </section>
</template>
<script>
    import ProjectContainer from "../projects/ProjectContainer";
    import ProjectsTextBlock from "../projects/ProjectsTextBlock";

    export default {
        components: {ProjectContainer, ProjectsTextBlock}
    }
</script>