<template>
  <section class="mt-12 relative bg-gray-200">
    <SlopeSeparator direction="asc" fill-color="text-gray-200" />
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full -mt-40 mb-20 xl:mb-40">
          <div class="container mx-auto px-6 relative">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <div
                class="w-full max-w-sm lg:max-w-none mx-auto rounded-md shadow-md overflow-hidden bg-white lg:col-span-2 lg:row-span-2 transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700"
              >
                <a href="./blog/2020-11-14-digitizing-paper-based-processes.html">
                  <div
                    class="flex items-end justify-end w-full bg-cover h-56 featured-post-cover"
                    style="background-image: url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80')"
                  />
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">Digitizing Paper Based Processes</h3>
                    <div class="text-gray-500 mt-2">
                      Digitizing processes can be very difficult. Tools have for a long time helped us gain efficiencies
                      and in many cases, those tools have shaped our procedures...
                    </div>
                  </div>
                </a>
              </div>
              <!--
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700">
                  <a href="./blog/post.html">
                    <div class="flex items-end justify-end h-56 w-full bg-cover"
                      style="background-image: url('https://images.unsplash.com/photo-1605260125832-164cd0222e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80')">
                    </div>
                    <div class="px-5 py-3">
                      <h3 class="text-gray-700 uppercase">Secondary Post</h3>
                      <span class="text-gray-500 mt-2">Sunt sunt amet deserunt consequat voluptate qui eiusmod labore
                        dolor dolore qui.</span>
                    </div>
                  </a>
                </div>

                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700">
                  <a href="./blog/post.html">
                    <div class="flex items-end justify-end h-56 w-full bg-cover"
                      style="background-image: url('https://images.unsplash.com/photo-1605295717073-219dd927d9bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
                    </div>
                    <div class="px-5 py-3">
                      <h3 class="text-gray-700 uppercase">Secondary Post</h3>
                      <span class="text-gray-500 mt-2">Ut aliquip irure ad irure ullamco ad in laboris nulla ex.</span>
                    </div>
                  </a>
                </div>

                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700">
                  <a href="./blog/post.html">
                    <div class="flex items-end justify-end h-56 w-full bg-cover"
                      style="background-image: url('https://images.unsplash.com/photo-1605285865703-6d61e3ac381e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')">
                    </div>
                    <div class="px-5 py-3">
                      <h3 class="text-gray-700 uppercase">Secondary Post</h3>
                      <span class="text-gray-500 mt-2">Reprehenderit excepteur ipsum do eiusmod Lorem.</span>
                    </div>
                  </a>
                </div>
              -->
            </div>
            <!--
              <div class="flex justify-center">
                <div class="flex rounded-md mt-8">
                  <a href="#"
                    class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</a></a>
                  <a href="#"
                    class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                  <a href="#"
                    class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                  <a href="#"
                    class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
                  <a href="#"
                    class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
              </div>
              -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlopeSeparator from './SlopeSeparator.vue'

export default {
  name: 'BlogListing',
  components: {
    SlopeSeparator
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
