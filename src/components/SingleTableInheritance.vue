<template>
  <div>
    <div>
      <h2>Users</h2>
      <div v-for="user in users" :key="user.id">
        {{ user.first_name }}
      </div>
    </div>

    <div>
      <h2>Publishers</h2>
      <div v-for="publisher in publishers" :key="publisher.id">
        {{ publisher.first_name }}
      </div>
    </div>

    <div>
      <h2>Admins</h2>
      <div v-for="admin in admins" :key="admin.id">
        {{ admin.first_name }}
      </div>
    </div>

    <div>
      <h2>Super Admins</h2>
      <div v-for="super_admin in super_admins" :key="super_admin.id">
        {{ super_admin.first_name }}
      </div>
    </div>
  </div>
</template>

<script>
import { User, Admin, Publisher, SuperAdmin } from '../classes/UserHierarchy'

export default {
  props: {

  },

  mounted() {
    User.insert({
      data: [
        {
          id: 1,
          first_name: 'Aaron',
          type: 'PUBLISHER'
        },
        {
          id: 2,
          first_name: 'Luke',
          type: 'ADMIN'
        },
        {
          id: 3,
          first_name: 'Shannen',
          type: 'SUPER_ADMIN'
        }
      ]
    })
  },

  components: {

  },

  computed: {
    users() {
      return User.all()
    },

    publishers() {
      return Publisher.all()
    },

    admins() {
      return Admin.all()
    },

    super_admins() {
      return SuperAdmin.all()
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

User.$create(form)