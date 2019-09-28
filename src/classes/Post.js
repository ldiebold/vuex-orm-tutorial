import { Model } from '@vuex-orm/core'
import Image from './Image'
import Comment from './Comment'
import Tag from './Tag'
import Taggable from './Taggable'
import User from './User'

export default class Post extends Model {
  static entity = 'posts'

  static fields() {
    return {
      id: this.increment(),
      title: this.attr(null),
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
      user_id: this.attr(null),
      published: this.boolean(false),
      // relationships
      user: this.belongsTo(User, 'user_id'),
      comments: this.morphMany(Comment, 'commentable_id', 'commentable_type'),
      tags: this.morphToMany(Tag, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
    }
  }
}