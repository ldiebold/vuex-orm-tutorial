<template>
  <div>
    <button @click="offset = offset - 2">Previous</button>
    <button @click="offset = offset + 2">Next</button>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
import User from '../classes/User'

export default {
  props: {

  },

  mounted() {
    User.insert({
      data: [
        {
          id: 1,
          first_name: 'Luke',
          last_name: 'Diebold',
          age: 28,
        },
        {
          id: 2,
          first_name: 'Shannen',
          last_name: 'Higginson',
          age: 27,
        },
        {
          id: 3,
          first_name: 'Joanna',
          last_name: 'Diebold',
          age: 34,
        },
        {
          id: 4,
          first_name: 'Prince',
          last_name: 'Henry',
          age: 14,
        }
      ]
    })
  },

  components: {

  },

  computed: {
    result() {
      return User.query()
        .sum('age')
    }
  },

  methods: {
    
  },

  data() {
    return {
      offset: 0
    }
  },
}

</script>