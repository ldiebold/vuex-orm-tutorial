import { Model } from '@vuex-orm/core'
import User from './User'

export default class Comment extends Model {
  static entity = 'comments'

  static fields() {
    return {
      id: this.increment(),
      body: this.attr(null),
      commentable_id: this.attr(null),
      commentable_type: this.attr(null),
      type: this.attr('review'),
      user_id: this.attr(null),
      // relationships
      user: this.belongsTo(User, 'user_id'),
      commentable: this.morphTo('commentable_id', 'commentable_type'),
    }
  }
}