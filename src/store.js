import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Item from './classes/Item'
import Profile from './classes/Profile'
import List from './classes/List'
import Role from './classes/Role'
import RoleUser from './classes/RoleUser'
import Image from './classes/Image'
import Post from './classes/Post'
import Video from './classes/Video'
import Comment from './classes/Comment'
import Tag from './classes/Tag'
import Taggable from './classes/Taggable'
import { User, Publisher, Admin, SuperAdmin } from './classes/UserHierarchy'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)
database.register(Role)
database.register(RoleUser)
database.register(Image)
database.register(Post)
database.register(Video)
database.register(Comment)
database.register(Tag)
database.register(Taggable)
database.register(Publisher)
database.register(Admin)
database.register(SuperAdmin)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})