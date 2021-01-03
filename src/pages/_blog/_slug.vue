
<template>
  <div>
    <NavBar />
    <main>
      <section class="relative block" style="height: 500px;">
        <CoverImage
          :cover="post.cover"
        />
        <SlopeSeparator direction="desc" fill-color="text-gray-300" />
      </section>
      <section class="relative py-24 bg-gray-300">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <ProfileImage />
              <ProfileHeader
                share-url="https://twitter.com/intent/tweet?url=https%3A%2F%2Fguillaumecle.me%2Fblog%2F2020-11-14-digitizing-paper-based-processes.html&via=GuillaumeCleme&text=I%20just%20read%20a%20post%20about%20digitizing%20paper-based%20processes%21%20"
              />
              <div class="mt-6 py-10 border-t border-gray-300">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <nuxt-content class="text-gray-800" :document="post" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import SlopeSeparator from '../../components/SlopeSeparator.vue'
import MainFooter from '../../components/MainFooter.vue'
import ProfileHeader from '../../components/ProfileHeader.vue'
import ProfileImage from '../../components/ProfileImage.vue'

export default {
  name: 'BlogPost',
  components: {
    NavBar,
    SlopeSeparator,
    MainFooter,
    ProfileHeader,
    ProfileImage
  },
  async asyncData ({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  }
}

</script>

<style>
.nuxt-content h1 {
  /* text-3xl */
  font-size: 1.875rem;
  line-height: 2.25rem;
  /* font-semibold */
  font-weight: 600;
  /* leading-normal */
  line-height: 1.5;
  /* mb-2 */
  margin-bottom: 0.5rem;
}

.nuxt-content h2 {
  /* text-2xl */
  font-size: 1.5rem;
  line-height: 2rem;
  /* leading-normal */
  line-height: 1.5;
  /* mb-2 */
  margin-bottom: 0.5rem;
}

.nuxt-content p {
  /* text-lg */
  font-size: 1.125rem;
  line-height: 1.75rem;
  /* leading-relaxed */
  line-height: 1.625;
  /* mb-4 */
  margin-bottom: 1rem;
}
</style>
