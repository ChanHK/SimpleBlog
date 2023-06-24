const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    authorId: ID!
  }
  
  type Comment {
    id: ID!
    content: String!
    authorId: User!
    postId: ID!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User!]

    getPost(id: ID!): Post
    getAllPosts: [Post!]
    getPostsByAuthorId(authorId: ID!): [Post!]
    
    getComment(id: ID!): Comment
    getAllComments: [Comment!]
    getCommentsByPostId(postId: ID!): [Comment!]
  }

  type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String, email: String): User!
  deleteUser(id: ID!): User!

  createPost(title: String!, content: String!, authorId: ID!): Post!
  updatePost(id: ID!, title: String, content: String, authorId: ID): Post!
  deletePost(id: ID!): Post!

  createComment(content: String!, authorId: ID!, postId: ID!): Comment!
  updateComment(id: ID!, content: String): Comment!
  deleteComment(id: ID!): Comment!
}
`;

export default typeDefs;
