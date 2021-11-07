export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = 6;

  const allArticles = await $content("articles").fetch();
  const allArtworks = await $content("artworks").fetch();

  const totalArticles = allArticles.length;
  const totalArtworks = allArtworks.length;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage);
  const lastPage2 = Math.ceil(totalArtworks / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % perPage;
  const lastPageCount2 = totalArtworks % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return totalArticles - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedArticles = await $content("articles")
    .only(["title", "description", "img","cover", "slug", "createdAt"])
    .sortBy("createdAt", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: "No articles found!" });
  }

  return {
    allArticles,
    paginatedArticles,
  };

    const paginatedArtworks = await $content("artworks")
    .only(["title", "description", "img","cover", "slug", "createdAt"])
    .sortBy("createdAt", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArtworks.length) {
    return error({ statusCode: 404, message: "No articles found!" });
  }

  return {
    allArtworks,
    paginatedArtworks,
  };

};