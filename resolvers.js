import { users, posts, comments } from "./data.js";

const resolvers = {
  Query: {
    getUser: (_, { id }) => users.find((user) => user.id === id),
    getAllUsers: () => users,

    getPost: (_, { id }) => posts.find((post) => post.id === id),
    getAllPosts: () => posts,
    getPostsByAuthorId: (_, { authorId }) =>
      posts.filter((post) => post.authorId === authorId),

    getComment: (_, { id }) => comments.find((comment) => comment.id === id),
    getAllComments: () => comments,
    getCommentsByPostId: (_, { postId }) =>
      comments.filter((comment) => comment.postId === postId),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, name, email }) => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        throw new Error("User not found");
      }
      if (name) {
        user.name = name;
      }
      if (email) {
        user.email = email;
      }
      return user;
    },
    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const deletedUser = users.splice(userIndex, 1);
      return deletedUser[0];
    },
    createPost: (_, { title, content, authorId }) => {
      const newPost = {
        id: String(posts.length + 1),
        title,
        content,
        authorId,
      };
      posts.push(newPost);
      return newPost;
    },
    updatePost: (_, { id, title, content, authorId }) => {
      const post = posts.find((post) => post.id === id);
      if (!post) {
        throw new Error("Post not found");
      }
      if (title) {
        post.title = title;
      }
      if (content) {
        post.content = content;
      }
      if (authorId) {
        post.authorId = authorId;
      }
      return post;
    },
    deletePost: (_, { id }) => {
      const postIndex = posts.findIndex((post) => post.id === id);
      if (postIndex === -1) {
        throw new Error("Post not found");
      }
      const deletedPost = posts.splice(postIndex, 1);
      return deletedPost[0];
    },
    createComment: (_, { content, authorId, postId }) => {
      const newComment = {
        id: String(comments.length + 1),
        content,
        authorId,
        postId,
      };
      comments.push(newComment);
      return newComment;
    },
    updateComment: (_, { id, content }) => {
      const comment = comments.find((comment) => comment.id === id);
      if (!comment) {
        throw new Error("Comment not found");
      }
      if (content) {
        comment.content = content;
      }
      return comment;
    },
    deleteComment: (_, { id }) => {
      const commentIndex = comments.findIndex((comment) => comment.id === id);
      if (commentIndex === -1) {
        throw new Error("Comment not found");
      }
      const deletedComment = comments.splice(commentIndex, 1);
      return deletedComment[0];
    },
  },
};

export default resolvers;
