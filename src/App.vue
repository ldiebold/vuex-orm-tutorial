<template>
  <div id="app">
    <div v-for="profile in profiles" :key="profile.id">
      <h1 style="color: orange">{{ profile.user.name }}</h1>
      <p>{{ profile.bio }}</p>
    </div>

    <input v-model="form.body" />

    <button @click="addItem">Add Item</button>

    <li
      v-for="item in items"
      :key="item.$id"
      v-text="item.body"
    />
  </div>
</template>

<script>
import Item from './classes/Item'
import User from './classes/User'
import Profile from './classes/Profile'

export default {
  name: 'app',

  data() {
    return {
      form: {
        body: ''
      }
    }
  },

  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'luke',
          email: 'luke@ldiebold.com',
          profile: {
            id: 55,
            bio: 'Luke is a web developer!',
            life_goal: 'have my own team of developers that create products that help change the world for the better',
          }
        },

        {
          id: 27,
          name: 'Shannen',
          email: 'shannen@example.com',
          profile: {
            id: 65,
            bio: 'Shannen is awesome',
            life_goal: 'Join the UN and help change the world!!!',
          }
        },
      ]
    })
  },

  computed: {
    profiles() {
      return Profile.query()
        .with('user')
        .get()
    },

    items() {
      return Item.all()
    }
  },

  methods: {
    addItem() {
      Item.save()
    }
  }
}
</script>

// User
//   id - 22
//   email
//   name

// Profile
//   id
//   bio
//   life_goal
//   user_id - 22

// User
{
  id: 22,
  name: 'luke',
  email: 'luke@ldiebold.com',
  profile: {
    bio: '',
    life_goal: '',
    user_id: 22
  }
}