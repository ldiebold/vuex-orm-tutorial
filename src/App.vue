<template>
  <div id="app">
    <SingleTableInheritance />
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
import { User } from './classes/UserHierarchy'
import SingleTableInheritance from './components/SingleTableInheritance.vue'

export default {
  name: 'app',

  components: {
    SingleTableInheritance,
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