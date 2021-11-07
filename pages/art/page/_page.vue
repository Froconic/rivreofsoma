<template>
<!-- Left Off Fixing artwork display -->
  <div>
    <section class="bg-primary-2 text-dark">
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <h2 class="display-3 mb-5">Art </h2>
            <p class="lead">Action <br> Reaction <br> Translation</p>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
        <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
      </div> -->
    </section>
    <section class="bg-black text-white pt-5">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <Search></Search>
          </div>
          <div class="row">
            <div v-for="artwork of artworks" :key="artwork.slug" class="col-sm-6 col-lg-4 mb-4">
              <NuxtLink :to="{name:'art-slug', params: { slug: artwork.slug }} ">
                <img :src="artwork.img" :alt="artwork.alt" class="rounded mb-3">
                <h4 class="mb-1"> {{artwork.title}} </h4>
              </NuxtLink>
            </div>
          </div>

          <div class="row">
            <ArtworkList :artwork="paginatedArtworks" :total="allArtworks.length" />
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import getArtwork from '~/utils/getArtwork';
  export default {

    name: 'ArtworkListPage',
    components: {},

    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getArtwork($content, params, error);
      return {
        allArtworks: content.allArtworks,
        paginatedArtworks: content.paginatedArtworks,
      };
    },
    head() {
      return {
        title: `Artworks Page ${this.$route.params.page}`,
        link: [{
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/art/${this.$route.params.page}`,
        }, ],
      };
    },
  };

</script>
