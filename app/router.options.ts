import type { RouterOptions } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
  routes: (_routes) => [
    {
      name: 'blog-post-html',
      path: '/blog/:post([a-zA-Z0-9-]*.html)',
      redirect: to => {
        const post = to.params.post.toString();
        return { name: 'blog-post', params: { post:  post.substring(0, post.indexOf('.html'))} }
      }
    },
    {
        name: 'blog-post',
        path: '/blog/:post',
        component: () => import('@/pages/blog/[blog].vue'),
    },
    {
        name: 'blog',
        path: '/blog',
        component: () => import('@/pages/blog/index.vue'),
    },
    {
        name: 'index',
        path: '/:pathMatch(.*)',
        component: () => import('@/pages/index.vue'),
    },
  ],
};
