const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Michael Johnson", email: "michael@example.com" },
  { id: "4", name: "Emily Davis", email: "emily@example.com" },
  { id: "5", name: "David Wilson", email: "david@example.com" },
  { id: "6", name: "Olivia Brown", email: "olivia@example.com" },
  { id: "7", name: "William Taylor", email: "william@example.com" },
  { id: "8", name: "Sophia Anderson", email: "sophia@example.com" },
  { id: "9", name: "James Martinez", email: "james@example.com" },
  { id: "10", name: "Emma Thomas", email: "emma@example.com" },
];

const posts = [
  {
    id: "1",
    title: "First Post",
    content: "Lorem ipsum dolor sit amet",
    authorId: "1",
  },
  {
    id: "2",
    title: "Second Post",
    content: "Consectetur adipiscing elit",
    authorId: "2",
  },
  {
    id: "3",
    title: "Third Post",
    content: "Pellentesque ac bibendum ex",
    authorId: "3",
  },
  {
    id: "4",
    title: "Fourth Post",
    content: "Vestibulum ante ipsum primis",
    authorId: "4",
  },
  {
    id: "5",
    title: "Fifth Post",
    content: "Maecenas dictum nisl eu lacus",
    authorId: "5",
  },
  {
    id: "6",
    title: "Sixth Post",
    content: "Fusce condimentum mi eget",
    authorId: "6",
  },
  {
    id: "7",
    title: "Seventh Post",
    content: "Cras commodo tortor eget",
    authorId: "7",
  },
  {
    id: "8",
    title: "Eighth Post",
    content: "Etiam nec ullamcorper risus",
    authorId: "8",
  },
  {
    id: "9",
    title: "Ninth Post",
    content: "Suspendisse potenti. Nulla",
    authorId: "9",
  },
  {
    id: "10",
    title: "Tenth Post",
    content: "Curabitur interdum ante sit",
    authorId: "10",
  },
];

const comments = [
  { id: "1", content: "Great post!", authorId: "2", postId: "1" },
  { id: "2", content: "Nice job!", authorId: "1", postId: "2" },
  { id: "3", content: "Well said!", authorId: "3", postId: "3" },
  { id: "4", content: "I totally agree!", authorId: "4", postId: "4" },
  { id: "5", content: "Thanks for sharing!", authorId: "5", postId: "5" },
  { id: "6", content: "Good point!", authorId: "6", postId: "6" },
  { id: "7", content: "Interesting perspective!", authorId: "7", postId: "7" },
  { id: "8", content: "I learned something new!", authorId: "8", postId: "8" },
  { id: "9", content: "Keep up the great work!", authorId: "9", postId: "9" },
  {
    id: "10",
    content: "Looking forward to more!",
    authorId: "10",
    postId: "10",
  },
];

export { users, posts, comments };
