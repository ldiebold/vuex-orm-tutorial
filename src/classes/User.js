import { Model } from '@vuex-orm/core'
import Profile from './Profile'
import List from './List'
import Item from './Item';
import Role from './Role';
import RoleUser from './RoleUser';

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      email: this.attr(''),
      // relationships
      profile: this.hasOne(Profile, 'user_id'),
      lists: this.hasMany(List, 'user_id'),
      items: this.hasManyThrough(Item, List, 'user_id', 'list_id'),
      roles: this.belongsToMany(Role, RoleUser, 'user_id', 'role_id'),
    }
  }
}