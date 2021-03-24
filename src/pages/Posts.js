import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post) => (
        <>
          <div className="col-4">
            <img
              src={post.links[0].href}
              alt=""
              srcset=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>

          <div className="col-8">
            <p>{post.data[0].date_created}</p>
            <p>{post.data[0].title}</p>
            <p>{post.data[0].description_508}</p>
          </div>

          <div className="col-12">
            <br/>

          </div>
        </>
      ))}
    </>
  );
};

export default Posts;
