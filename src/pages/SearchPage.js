import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Relected from "./Relected";
import axios from "axios";
// import "./App.css";
const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [querySearch, setQuerySearch] = useState([]);

  const handleSearch = (e) => {
    const fetchPosts = async () => {
      setLoading(true);
      // console.log("teste",querySearch)
      const res = await axios.get(
        `https://images-api.nasa.gov//search?q=${querySearch}`
      );
      console.log(res.data.collection.items);

      setPosts(res.data.collection.items);
      setLoading(false);
    };
    try {
      fetchPosts();
    } catch (error) {
      alert("Not Found");
    }
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <input
            type="text"
            placeholder="Search for Nasa Media"
            className="form-control"
            onChange={(e) => setQuerySearch(e.target.value)}
            value={querySearch}
          />
          <br />
          <button className=" btn btn-primary" onClick={handleSearch}>
            {" "}
            Search
          </button>
          <br />
          <br />
        </div>

        <div className="col-2"></div>

        <div className="col-12">
          <div className="row">
            <Posts posts={currentPosts} loading={loading} />
            <div className="col-12">
              <br />
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            <div className="col-12">
              <br />

              <h2>Releted Search</h2>

              <Relected posts={currentPosts} />

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
