'use strict'

const Post = use('App/Models/Post')

class PostController {
    index = async ({ view }) => {
        const posts = Post.all()

        return view.render('posts.index', { posts: posts.rows })
    }
}

module.exports = PostController
