<template>
  <div id="app">
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

export default {
  name: 'app',

  data() {
    return {
      form: {
        body: ''
      }
    }
  },

  computed: {
    items() {
      return Item.all()
    }
  },

  methods: {
    addItem() {
      Item.insert({ data: this.form })
    }
  }
}
</script>