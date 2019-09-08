import { Model } from '@vuex-orm/core'
import Video from './Video'
import Taggable from './Taggable'
import Post from './Post'

export default class Tag extends Model {
  static entity = 'tags'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(null),
      // relationships
      videos: this.morphedByMany(Video, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
      posts: this.morphedByMany(Post, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
    }
  }
}