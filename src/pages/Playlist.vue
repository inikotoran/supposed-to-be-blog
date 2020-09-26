<template>
  <Layout>
    <h1>Playlist</h1>
    <p>Find my favorite albums here!</p>
    <div class="albums-grid">
      <div v-for="edge in $page.albums.edges" :key="edge.node.title">
        <a :href=edge.node.url target="_blank">
          <img class="album-thumb" :src="edge.node.image" v-bind:alt="edge.node.title">
        </a>
        <p class="album-desc">{{ edge.node.title }} by {{ edge.node.artist }}</p>
      </div>
    </div>
    <p class="album-footer">and many more</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'My Playlist'
  }
}
</script>

<style>
.albums-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.album-thumb {
  width: 15em;
  height: 15em;
}

.album-desc {
  margin-top: 0;
  margin-bottom: 2em;
}

.album-footer {
  text-align: center;
}

</style>

<page-query>
  query Albums {
    albums: allAlbums(sortBy: "artist", order: ASC) {
      edges {
        node {
          title
          artist
          url
          image
        }
      }
    }
  }
</page-query>
