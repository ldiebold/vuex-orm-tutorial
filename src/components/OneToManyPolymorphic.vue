<template>
  <div>
    <h2>Comments</h2>
    
    <div v-for="comment in comments" :key="comment.id">
      {{ comment.body }}
      <strong>{{ comment.commentable.constructor.entity }}</strong>
    </div>
  </div>
</template>

<script>
import Video from '../classes/Video'
import Post from '../classes/Post'
import Comment from '../classes/Comment';

export default {
  props: {

  },

  components: {

  },
  
  mounted() {
    Video.insert({
      data: [
        {
          id: 12,
          url: 'https://www.youtube.com/watch?v=J-BijDwr1r0',
          comments: [
            {
              id: 23,
              body: 'man, this vid so cool!'
            },
            {
              id: 26,
              body: 'Loved it bro!'
            }
          ]
        },
        {
          id: 22,
          url: 'https://www.youtube.com/watch?v=Bk-SkkkyOVA',
          comments: [
            {
              id: 56,
              body: 'That is funny!'
            },
          ]
        }
      ]
    })

    Post.insert({
      data: [
        {
          id: 12,
          title: 'something controversial',
          comments: [
            {
              id: 45,
              body: "I can't believe you said that!!"
            },
            {
              id: 67,
              body: 'I totally agree'
            }
          ]
        }
      ]
    })
  },

  computed: {
    videos() {
      return Video.query()
        .with('comments')
        .get()
    },

    posts() {
      return Post.query()
        .with('comments')
        .get()
    },

    comments() {
      return Comment.query()
        .with('commentable')
        .get()
    }
  },

  methods: {
    
  },

  data() {
    return {
      
    }
  },
}

</script>

// Video -> comments
// Post -> comments

Video
Comment

// Video -> Comments
// Comment -> video