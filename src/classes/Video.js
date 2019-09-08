import { Model } from '@vuex-orm/core'
import Comment from './Comment'
import Tag from './Tag'
import Taggable from './Taggable'

export default class Video extends Model {
  static entity = 'videos'

  static fields() {
    return {
      id: this.increment(),
      url: this.attr(null),
      // relationships
      comments: this.morphMany(Comment, 'commentable_id', 'commentable_type'),
      tags: this.morphToMany(Tag, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
    }
  }
}