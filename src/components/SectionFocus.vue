<template>
  <section id="myfocus" class="mt-40 relative bg-gray-200">
    <div class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute" style="height:80px;transform:translateZ(0)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-20">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-900">
            <img alt="Guillaume's Profile"
              src="../assets/img/profile.jpg"
              class="w-full align-middle rounded-t-lg" />
            <blockquote class="relative p-8 mb-4">
              <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                class="absolute left-0 w-full block" style="height:95px;top:-94px">
                <polygon points="-30,95 583,95 583,65" class="text-gray-900 fill-current"></polygon>
              </svg>
              <p class="text-xl font-bold text-white">What I do best.</p>
              <p class="text-md font-light mt-2 text-white">
                As a technical leader, I ensure the success of projects and engagements from qualification to delivery and post-delivery by managing diverse and cross-functional technical teams.
              </p>
            </blockquote>
          </div>
        </div>
        <div class="w-9/12 md:w-5/12 ml-auto mr-auto px-4 pt-16 sm:pt-0">
          <div class="md:pr-12">
            <div class="text-blue-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
              <i class="fas fa-briefcase text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">My Focus.</h3>
            <p class="mt-4 text-md leading-relaxed text-gray-700">
              I spend most of my time applying my technical and management skills to larger teams to efficiently develop and deliver scalable solutions using iterative methodologies.
            </p>
            <ul class="list-none mt-6">
              <li class="py-1">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
                      <i class="fas fa-user-tie fa-fw"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-gray-700">
                      Technical Leadership
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-1">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
                      <i class="fas fa-rocket fa-fw"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-gray-700">
                      Product & Solution Development
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-1">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
                      <i class="fas fa-redo fa-fw"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-gray-700">
                      AGILE Project & Program Management
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-1">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
                      <i class="fas fa-code fa-fw"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-gray-700">
                      Full-Stack Technical Implementation & Architecture
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-1">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-400 mr-3">
                      <i class="fas fa-handshake fa-fw"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-gray-700">
                      Professional Development
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionFocus',
  components: {
  },
  data: function () {
    return {
      socialIcons: [
        { href: 'https://www.linkedin.com/in/guillaumecleme', label: 'LinkedIn', icon: ['fab', 'linkedin-in'] },
        { href: 'https://twitter.com/guillaumecleme', label: 'Twitter', icon: ['fab', 'twitter'] },
        { href: 'https://www.facebook.com/guillaume.e.clement', label: 'FaceBook', icon: ['fab', 'facebook-f'] },
        { href: 'https://www.instagram.com/guillaumecle.me/', label: 'Instagram', icon: ['fab', 'instagram'] },
        { href: 'https://m.me/guillaume.e.clement', label: 'Messenger', icon: ['fab', 'facebook-messenger'] },
        { href: 'https://github.com/guillaumecleme', label: 'GitHub', icon: ['fab', 'github'] },
        { href: 'https://stackoverflow.com/users/3308078/guillaumecle.me', label: 'Stack Overflow', icon: ['fab', 'stack-overflow'] },
        { href: 'https://www.youracclaim.com/users/guillaumecleme', label: 'Adobe/Acclaim', icon: ['fab', 'adobe'] },
        { href: 'https://www.goodreads.com/guillaumecleme', label: 'Goodreads', icon: ['fab', 'goodreads'] }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
