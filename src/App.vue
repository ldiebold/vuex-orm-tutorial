<template>
  <div id="app">
    <h1>{{ user.name }}</h1>

    <input v-model="form.title" />
    <button @click="addList">Add List</button>
    
    <List
      v-for="list in user.lists"
      :key="list.id"
      :list="list"
    />
  </div>
</template>

<script>
import User from './classes/User'
import ListComponent from './components/List'
import List from './classes/List'

export default {
  name: 'app',

  components: {
    List: ListComponent,
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
        list_ids: [62, 56, 92]
      },
    })
  },

  computed: {
    user() {
      return User.query()
        .with('lists.items')
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
