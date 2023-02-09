<template>
  <section id="experience" class="pb-10">
    <div class="relative py-10">
      <SlopeSeparator direction="desc" fill-color="text-white" />
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap mb-24 justify-around">
        <div class="w-9/12 lg:w-4/12 my-4 md:my-auto">
          <h3 class="text-3xl font-semibold mb-2">
            My Experience.
          </h3>
          <p class="text-md leading-relaxed text-gray-700 my-4">
            Over the course of my career I have had the chance to work on and develop technical solutions both personally and by leading technical teams for several years. I currently lead a team of technical resources engaged in the delivery of enterprise solutions for public and private sector companies.
          </p>
          <!-- <DownloadResumeButton href="/pdf/Guillaume Clement - Resume 6.0 - 2021.pdf" /> -->
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative m-8">
            <div class="border-r-2 border-blue-400 absolute h-full top-0" style="left: 15px" />
            <ul class="list-none m-0 p-0">
              <ExperienceTimelineItem
                v-for="(position, index) in experiences"
                :key="index"
                :index="index"
                :title="position.title"
                :timeline="position.timeline"
                :desc="position.desc"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import DownloadResumeButton from '@/components/Actions/DownloadResumeButton.vue'
import SlopeSeparator from '@/components/Sections/Fragments/SlopeSeparator.vue'
import ExperienceTimelineItem from '@/components/Sections/Fragments/ExperienceTimelineItem.vue'
import { processExpression } from '@vue/compiler-core';

export default {
  name: 'SectionExperience',
  components: {
    SlopeSeparator,
    // DownloadResumeButton,
    ExperienceTimelineItem
  },
  data () {
    return {
      experiences: [
        { title: 'Director, Product & Engineering', timeline: 'Dec. 2021 - Now', desc: 'I am responsible for the company\'s overall technical direction and product development efforts. I work closely with the Product Marketing and Management team that I lead. Together, we created and launched productivity products that are used by customers and partners to optimize their business processes.' },
        { title: 'Principal Technical Program Manager', timeline: 'Feb. 2021 - Dec. 2021', desc: 'I oversaw the technical delivery aspects of all Enterprise projects and was responsible for the implementation and enforcement of best practices, code reviews, testing, requirements gathering and ellicitation, and the definition of product specifications.' },
        { title: 'Director, Solution Delivery', timeline: 'Apr. 2017 - Jan. 2021', desc: 'In this role I ensured the success and impact of client engagements from qualification to delivery and post-delivery while managing a cross-functional team distributed across North America.' },
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
