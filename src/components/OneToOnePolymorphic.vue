<template>
  <div>
    <div v-for="image in images" :key="image.id">
      {{ image.imageable.constructor.entity }}
    </div>
  </div>
</template>

<script>
import User from '../classes/User'
import Image from '../classes/Image'
import Post from '../classes/Post'

export default {
  props: {

  },

  created() {
    User.insert({
      data: [
        {
          id: 27,
          name: 'luke',
          image: {
            id: 65,
            url: 'https://yt3.ggpht.com/a/AGF-l79-43xTxCMEbx4hlWF2S_4LXHJ9Sl_COh3h5Q=s900-c-k-c0xffffffff-no-rj-mo'
          }
        }
      ]
    })

    Post.insert({
      data: [
        {
          id: 34,
          title: 'Awesome Post',
          image: {
            id: 22,
            url: 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM_R.jpg?auto=webp&quality=60'
          }
        }
      ]
    })
  },

  components: {

  },

  computed: {
    user() {
      return User.query()
        .with('image')
        .find(27)
    },

    post() {
      return Post.query()
        .with('image')
        .find(34)
    },

    images() {
      return Image.query()
        .with('imageable')
        .get()
    }
  },

  methods: {
    
  }
}

</script>

// image -> post
// image -> user
// image -> video