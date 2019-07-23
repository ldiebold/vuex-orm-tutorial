<template>
  <div id="app">
    <h1>{{ user.name }}</h1>

    <div v-for="list in user.lists" :key="list.id">
      {{ list.title }}
      <ul>
        <li v-for="item in list.items" :key="item.id">
          {{ item.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from './classes/List'
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
      data: {
        id: 28,
        name: 'luke',
        email: 'luke@ldiebold.com',
        list_ids: [62, 56, 92]
      },
    })

    List.insert({
      data: [
        {
          id: 62,
          title: 'shopping',
        },
        {
          id: 56,
          title: 'favourite things'
        },
        {
          id: 92,
          title: 'todo'
        }
      ]
    })
  },

  computed: {
    user() {
      return User.query()
        .with('lists.items')
        .find(28)
    },

    items() {
      return Item.all()
    }
  },

  methods: {
    addItem() {
      Item.save()
    },
  }
}
</script>

// User
//   id - 22
//   email
//   name

// List
//  id - 44
//  title - shopping
//  user_id - 22

// List
//  id - 55
//  title - life goals
//  user_id - 22

