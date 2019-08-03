import { Model } from '@vuex-orm/core'

export default class RoleUser extends Model {
  static entity = 'role_user'

  static primaryKey = ['role_id', 'user_id']

  static fields() {
    return {
      id: this.increment(),
      user_id: this.attr(),
      role_id: this.attr(),
    }
  }
}