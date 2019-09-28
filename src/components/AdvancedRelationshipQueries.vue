<template>
  <div>
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import insertUsers from '../insertUsers'
import User from '../classes/User'
import Post from '../classes/Post'

export default {
  props: {

  },

  components: {

  },

  mounted() {
    insertUsers()
  },

  computed: {
    results() {
      return Post.query()
        .whereHasNot('comments', query => {
          query.where('user_id', 2)
        })
        .get()
    }
  },

  methods: {
    
  },

  data() {
    return {
      
    }
  },
}

</script>