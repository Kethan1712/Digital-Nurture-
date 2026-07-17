import React from "react";

export const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!"
  },
  {
    id: 2,
    title: "Installation",
    author: "Schwezdenier",
    content: "You can install React from npm."
  }
];

function BlogDetails(props) {

  const content = (
    <ul>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="box">
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}

export default BlogDetails;