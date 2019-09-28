import User from './classes/User'

export default () => {
  // Luke
  User.insertOrUpdate({
    data: {
      id: 1,
      first_name: 'Luke',
      age: 28,
      posts: [
        {
          published: true,
          id: 1,
          title: 'Vue Stuff',
          tags: [
            {
              id: 1,
              name: 'vue'
            },
            {
              id: 2,
              name: 'tutorials'
            }
          ],
          comments: [
            {
              user_id: 2,
              id: 1,
              body: 'Cool post bro!'
            },
            {
              user_id: 3,
              id: 2,
              body: 'I thought it was terrible'
            }
          ]
        },
        {
          id: 2,
          title: 'Piano Stuff',
          tags: [
            {
              id: 3,
              name: 'piano',
            }
          ],
          comments: [
            {
              user_id: 3,
              id: 3,
              body: 'mmm, I love piano!',
            }
          ]
        },
        {
          id: 3,
          title: 'boring post'
        }
      ]
    }
  })

  // Shannen
  User.insertOrUpdate({
    data: {
      id: 2,
      first_name: 'Shannen',
      age: 27,
      posts: [
        {
          id: 4,
          title: 'Nutrition Stuff',
          tags: [
            {
              id: 2,
              title: 'tutorials'
            }
          ],
          comments: [
            {
              user_id: 3,
              id: 4,
              body: 'I love to eat healthy!'
            }
          ]
        }
      ]
    }
  })

  // Prince
  User.insertOrUpdate({
    data: {
      id: 3,
      first_name: 'Prince',
      age: 14,
    }
  })

}