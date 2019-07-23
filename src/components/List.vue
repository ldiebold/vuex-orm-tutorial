<template>
  <div>
    <h2>{{ list.title }}</h2>
    
    <input v-model="form.body" />
    <button @click="addItem">Add Item</button>

    <ul>
      <li
        v-for="item in filledList.items"
        :key="item.id"
      >
        {{ item.body }}
        <button @click="deleteItem(item)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import List from '../classes/List'
import Item from '../classes/Item'

export default {
  props: {
    list: {
      required: true,
      type: List,
    }
  },

  computed: {
    filledList() {
      return List.query()
        .with('items')
        .find(this.list.id)
    }
  },

  data() {
    return {
      form: {
        body: '',
        list_id: this.list.id
      }
    }
  },

  methods: {
    addItem() {
      Item.insert({ data: this.form })
    },

    deleteItem(item) {
      Item.delete({
        where: item.id
      })
    }
  }
}
</script>