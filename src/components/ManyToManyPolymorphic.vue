<template>
  <div>
    <div v-for="tag in tags" :key="tag.id">
      <h2>{{ tag.name }}</h2>
      <div style="margin-left: 12px;">
        <h3>Videos</h3>
        <div v-for="video in tag.videos" :key="video.id">
          {{ video.url }}
        </div>
      </div>

      <div style="margin-left: 12px;">
        <h3>Posts</h3>
        <div v-for="post in tag.posts" :key="post.id">
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from '../classes/Video'
import Post from '../classes/Post'
import Tag from '../classes/Tag'

export default {
  props: {

  },

  mounted() {
    Video.insert({
      data: [
        {
          id: 22,
          url: 'youtube.com/funny-video',
          tags: [
            {
              id: 12,
              name: 'funny'
            },
            {
              id: 14,
              name: 'cringy'
            }
          ]
        }
      ]
    }),

    Post.insert({
      data: [
        {
          id: 22,
          title: 'funny post',
          tags: [
            {
              id: 12,
              name: 'super funny'
            },
            {
              id: 27,
              name: 'Rude'
            }
          ]
        }
      ]
    })
  },

  components: {

  },

  computed: {
    videos() {
      return Video.query()
        .with('tags')
        .get()
    },

    posts() {
      return Post.query()
        .with('tags')
        .get()
    },

    tags() {
      return Tag.query()
        .with('videos')
        .with('posts')
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

// Tag -> videos | posts
// Video -> tags
// Post -> tags

// Taggable