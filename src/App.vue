<template>
  <div id="app">
    <OneToOnePolymorphic />
    <!-- <div style="float: left">
      <h1>{{ user.name }}</h1>

      <input v-model="form.title" />
      <button @click="addList">Add List</button>
      
      <List
        v-for="list in user.lists"
        :key="list.id"
        :list="list"
      />
    </div>

    <div style="float: right">
      <ul>
        <li
          v-for="item in user.items"
          v-text="item.body"
          :key="item.id"
        />
      </ul>
    </div> -->
  </div>
</template>

<script>
import User from './classes/User'
import ListComponent from './components/List'
import List from './classes/List'
import ManyToMany from './components/ManyToMany.vue'
import OneToOnePolymorphic from './components/OneToOnePolymorphic.vue'

export default {
  name: 'app',

  components: {
    List: ListComponent,
    ManyToMany,
    OneToOnePolymorphic,
  },

  data() {
    return {
      form: {
        title: '',
        user_id: 28,
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
            id: 22,
            title: 'shopping',
            items: [
              {
                id: 62,
                body: 'banana'
              }
            ]
          },

          {
            id: 19,
            title: 'todo',
            items: [
              {
                id: 56,
                body: 'computer'
              }
            ]
          }
        ]
      },
    })
  },

  computed: {
    user() {
      return User.query()
        .with('lists.items')
        .with('items')
        .find(28)
    },
  },

  methods: {
    addList() {
      List.insert({ data: this.form })
    }
  }
}
</script>

// User -> roles
// User -> role_user -> roles
//  Roles -> role_user -> User
// user->roles