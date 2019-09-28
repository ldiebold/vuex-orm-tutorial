import { Model } from '@vuex-orm/core'
import Profile from './Profile'
import List from './List'
import Item from './Item'
import Role from './Role'
import RoleUser from './RoleUser'
import Image from './Image'
import moment from 'moment'
import Post from './Post'
import Comment from './Comment'

export default class User extends Model {
  static entity = 'users'

  get full_name() {
    return `${this.first_name} ${this.last_name}`
  }

  static mutators() {
    return {
      date_born(value) {
        return moment(value)
      }
    }
  }

  static fields() {
    return {
      id: this.increment(),
      first_name: this.attr(''),
      last_name: this.attr(''),
      email: this.attr(''),
      date_born: this.attr(null),
      age: this.attr(null),
      // relationships
      posts: this.hasMany(Post, 'user_id'),
      comments: this.hasMany(Comment, 'user_id'),
      profile: this.hasOne(Profile, 'user_id'),
      lists: this.hasMany(List, 'user_id'),
      items: this.hasManyThrough(Item, List, 'user_id', 'list_id'),
      roles: this.belongsToMany(Role, RoleUser, 'user_id', 'role_id'),
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
    }
  }
}
