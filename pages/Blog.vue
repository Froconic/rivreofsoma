<template>
  <div class="blog">
    <section class="text-light bg-primary" data-speed="0.5" data-overlay>
      <!-- <img src="../assets/img/misc/BOG line.svg" alt="" class="jarallax-img opacity-50"> -->
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <h1 class="display-3 text-light mb-5">Blog</h1>
            <p class="lead ">Thoughts on <br>Magic | Mystery | Mysticism</p>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
      <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
    </div> -->
    </section>
    <section class="bg-black blog-posts">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <Search></Search>
          </div>
        </div>
        <!-- <Category :category="category"></Category> -->
        <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
        <InfiniteLoading v-if="list.length" spinner="spiral" @infinite="infiniteScroll"></InfiniteLoading>
      </div>
    </section>
  </div>
</template>

<script>
  import getContent from '@/utils/getContent';

  export default {
    data() {
      return {
        page: 1,
        list: [],
      };
    },
    components: {

    },

        created() {
      this.fetchData
    },

    async asyncData({
      $content,
      params
    }) {
      const articles = await $content('articles').only(['title', 'description', 'category', 'img', 'cover', 'slug', 'author', 'createdAt']).sortBy('createdAt', 'asc').fetch()

      return {
        articles
      }
    },
    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getContent($content, params, error);
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      };
    },
    async fetchData() {
      const response = await axios.get(this.url)
      this.list = response.data
    },

    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      },
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++
          axios.get(this.url)
            .then((response) => {
              if (response.data.length > 1) {
                this.list.push(...response.data.hits)
                response.data.forEach((item) => this.list.push(item))
                $state.loaded()
              } else {
                $state.complete()
              }
            }).catch((err) => {
              console.log(err)
            })
        }, 500)
      }
    },

  }

</script>

<style>

</style>
