
<template>
  <div>
    <NavBar />
    <main>
      <section class="relative block" style="height: 500px;">
        <CoverImage
          :cover="post.cover"
        />
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      <section class="relative py-24 bg-gray-300">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <ProfileImage />
              <ProfileHeader
                :share-url="post.shareUrl"
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
import NavBar from '@/components/Nav/NavBar.vue'
import MainFooter from '@/components/Sections/MainFooter.vue'
import ProfileHeader from '@/components/Sections/Fragments/ProfileHeader.vue'
import ProfileImage from '@/components/Images/ProfileImage.vue'

export default {
  name: 'BlogPost',
  components: {
    NavBar,
    MainFooter,
    ProfileHeader,
    ProfileImage
  },
  async asyncData ({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  },
  head () {
    return {
      title: 'Guillaume Clement | Blog | ' + this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        { name: 'og:title', content: this.post.title },
        { name: 'og:description', content: this.post.description },
        { name: 'og:image', content: this.post.cover },
        { name: 'og:image:secure_url', content: this.post.cover },
        { name: 'og:image:alt', content: this.post.title },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.description },
        { name: 'twitter:image', content: this.post.cover }
      ]
    }
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

.nuxt-content h3 {
  /* text-xl */
  font-size: 1.25rem;
  line-height: 1.75rem;
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

.nuxt-content a {
  /* font-bold */
  font-weight: 700;
}
.nuxt-content a:hover {
  /* text-gray-400 */
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}

.nuxt-content blockquote  {
  --tw-text-opacity: 1;
  border-left: 10px solid rgba(229, 231, 235, var(--tw-text-opacity));
  margin: 1.5em;
  padding: 0.5em;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.nuxt-content blockquote p  {
  margin-bottom: 0;
}
</style>
