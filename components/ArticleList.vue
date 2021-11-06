<template>
<div class="article-list">
  <div class="row mb-4">
    <div v-for="article of articles" :key="article.slug" class="col-md-6 col-lg-4">
      <NuxtLink class="card card-body justify-content-between" :to="{name: 'blog-slug', params: { slug: article.slug }}">
        <div class="text-small d-flex">
          <div class="mr-2">
            <NuxtLink to='/'>{{ article.category }}</NuxtLink>
            <span class="text-muted">{{ formatDate(article.createdAt) }}</span>
            <span class="badge badge-primary-alt text-primary"><img src="../assets/img/icons/interface/heart.svg" alt=""></span>
          </div>
        </div>
        <img :src="article.cover" alt="">
        <div>
          <h4>{{ article.title }}</h4>
          <p class="flex-grow"> {{ article.description }}</p>
          <div class="d-flex align-items-center mt-3">
            <span class="text-small text-muted">by </span> <span class="text-small ml-1"> {{ article.author }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
    </div>
  </div>
<div class="row mb-4 justify-content-center">
      <Pagination v-if="total > 5" :total="total" />
</div>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination';
  export default {
    name: 'ArticleList',
    components: {
      Pagination,
    },
    props: {
      articles: {
        type: Array,
        default: Array,
      },
      total: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      }
    },

  };

</script>
