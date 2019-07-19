import { Model } from '@vuex-orm/core'
import Profile from './Profile'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      email: this.attr(''),
      // relationships
      profile: this.hasOne(Profile, 'user_id')
    }
  }
}