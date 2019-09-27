<template>
  <div>
    {{ user.date_born.add(5, 'year') }}
  </div>
</template>

<script>
import User from '../classes/User'

export default {
  props: {

  },

  mounted() {
    User.insert({
      data: {
        id: 28,
        date_born: '1991-04-27T14:00:00.000Z',
        first_name: 'Luke',
        last_name: 'Diebold',
      }
    })
  },

  components: {

  },

  computed: {
    user() {
      return User.find(28)
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