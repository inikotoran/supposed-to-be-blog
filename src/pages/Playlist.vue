<template>
  <Layout>
    <h1>Playlist</h1>
    <p>Find my favorite albums here! (sorted by artist name ascending)</p>
    <div class="albums-grid">
      <div v-for="edge in $page.albums.edges" :key="edge.node.title">
        <a :href=edge.node.url target="_blank">
          <img class="album-thumb" :src="edge.node.image" v-bind:alt="edge.node.title">
        </a>
        <p class="album-desc">{{ edge.node.title }} by {{ edge.node.artist }}</p>
      </div>
    </div>
    <p class="album-footer">more will be added</p>
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
  grid-gap: 0.5rem;
}

.album-thumb {
  display: block;
  max-width: 100%;
  height: auto;
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
