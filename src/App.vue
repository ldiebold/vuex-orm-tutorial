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


    <!-- Item Input -->
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
        lists: [
          {
            id: 34,
            title: 'shopping list',
            body: 'My shopping list',
            user_id: 28,
            items: [
              {
                id: 57,
                body: 'banana',
                list_id: 34,
              },
              {
                id: 62,
                body: 'cucumber',
                list_id: 34,
              },
              {
                id: 102,
                body: 'zucchini',
                list_id: 34,
              },
            ]
          },

          {
            id: 35,
            title: 'life goals',
            body: 'things I want to do with my life!',
            user_id: 28,
          }
        ]
      },
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

