// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const albums = require('./src/data/albums.json')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'Albums'
    })

    for (const album of albums) {
      if (album.image !== "") {
        contentType.addNode({
          title: album.title,
          artist: album.artist,
          url: album.url,
          image: album.image,
        })
      }
    }
  })
}
