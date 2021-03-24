import React from "react";

const Relected = ({ posts }) => {
  const htmlData = (post) => {
   
      return (
        <div className="col-12">
          <span>
            {post?.data[0]?.keywords?.map((elem) => (
              <span>{elem},</span>
            ))}
          </span>
        </div>
      );
  
  };

  return (
    <>
      {posts.map((post) => (
        <>{htmlData(post)}</>
      ))}
    </>
  );
};

export default Relected;
