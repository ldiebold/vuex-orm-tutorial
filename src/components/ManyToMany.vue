<template>
  <div>
    <ul v-for="role in roles" :key="role.id">
      <h1>{{ role.title }}</h1>
      <li
        v-for="user in role.users"
        :key="user.id"
        v-text="user.name"
      />
    </ul>

    <button @click="changeName">change name</button>
  </div>
</template>

<script>
import User from '../classes/User'
import Role from '../classes/Role';

export default {
  mounted() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'luke',
          email: 'luke@ldiebold.com',
          roles: [
            {
              id: 43,
              title: 'admin'
            },
            {
              id: 47,
              title: 'designer'
            }
          ]
        },

        {
          id: 22,
          name: 'aaron',
          email: 'aaron@example.com',
          roles: [
            {
              id: 47,
              title: 'designer'
            }
          ]
        }
      ]
    })
  },

  props: {

  },

  components: {

  },

  computed: {
    roles() {
      return Role.query()
        .with('users')
        .get()
    }
  },

  methods: {
    changeName() {
      User.update({
        where: 28,
        data: { name: 'Lucas' }
      })
    }
  }
}

</script>