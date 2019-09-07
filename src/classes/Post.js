import { Model } from '@vuex-orm/core'
import Image from './Image'
import Comment from './Comment'

export default class Post extends Model {
  static entity = 'posts'

  static fields() {
    return {
      id: this.increment(),
      title: this.attr(null),
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
      // relationships
      comments: this.morphMany(Comment, 'commentable_id', 'commentable_type'),
    }
  }
}