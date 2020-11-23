<template>
  <section id="experience" class="pb-10">
    <SlopeSeparator direction="desc"/>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap mb-24 justify-around">
        <div class="w-9/12 lg:w-4/12 my-4 md:my-auto">
          <h3 class="text-3xl font-semibold mb-2">My Experience.</h3>
          <p class="text-md leading-relaxed text-gray-700 my-4">
            Over the course of my career I have had the chance to work on and develop technical solutions both personally and by leading technical teams for several years. I currently lead a team of technical resources engaged in the delivery of enterprise solutions for public and private sector companies.
          </p>
          <DownloadResumeButton href="/pdf/Guillaume Clément Resume 6.0 - 2020.pdf"/>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative m-8">
            <div class="border-r-2 border-blue-400 absolute h-full top-0" style="left: 15px"></div>
            <ul class="list-none m-0 p-0">
              <ExperienceTimelineItem v-for="(position, index) in experiences"
                  v-bind:key="index"
                  v-bind:index="index"
                  v-bind:title="position.title"
                  v-bind:timeline="position.timeline"
                  v-bind:desc="position.desc"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DownloadResumeButton from './DownloadResumeButton.vue'
import SlopeSeparator from './SlopeSeparator.vue'
import ExperienceTimelineItem from './ExperienceTimelineItem.vue'

export default {
  name: 'SectionExperience',
  components: {
    SlopeSeparator,
    DownloadResumeButton,
    ExperienceTimelineItem
  },
  data: function () {
    return {
      experiences: [
        { title: 'Director, Solution Delivery', timeline: 'Apr. 2017 - Now', desc: 'In this role I ensure the success and impact of client engagements from qualification to delivery and post-delivery while managing a cross-functional team distributed across North America.' },
        { title: 'Senior Systems Analyst', timeline: 'Feb. 2015 – Apr. 2017', desc: 'As part of this technical role I excelled at navigating both business and technical challenges while quickly providing value to team members and customers alike.' },
        { title: 'Systems Analyst', timeline: 'Nov. 2014 – Feb. 2015', desc: 'My duties involved managing and delivering professional services engagements through the delivery of enterprise solutions and industry best-practices.' },
        { title: 'Technical Support Consultant', timeline: 'Aug. 2012 – Oct. 2014', desc: 'This role provided me with the ultimate foundation required to expand my technical skills and gain a deep understanding and familiarity with full-stack development and applications.' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
