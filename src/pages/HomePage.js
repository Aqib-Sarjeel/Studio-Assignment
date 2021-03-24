import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomePage = () => {
  const [pic, setPic] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [discription, setDiscription] = React.useState([]);
  const [date, setdate] = React.useState([]);
  const [copyright, setCopyright] = React.useState([]);

  const getPicofDay = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2vSVmXEuph4ALssZxhOjuDS10bKwm6XSRN3JKvy8"
      )
      .then((res) => {
        setPic(res.data.hdurl);
        setTitle(res.data.title);
        setDiscription(res.data.explanation);
        setdate(res.data.date);
        setCopyright(res.data.copyright);

        console.log("response in here==>", res);
      });
  };

  useEffect(() => {
    getPicofDay();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Nasa Media Search</h1>
      <hr />
      <h2 className="text-left">{title}</h2>
      <div className="card" style={{ width: "100%" }}>
        <img
          height="350px"
          width="100%"
          src={pic}
          className="card-img-top cardStyle"
          alt="Pic of The Day"
        />

        <div className="card-body">
          <p className="card-text text-muted text-center">
            <span style={{ color: "black" }}>Image Description</span>
            <hr />
            {discription}
          </p>
          <hr />
          <p className="text-center">
            <span>Date</span>
            <br />

            <p className="text-muted">{date}</p>
          </p>
          <hr />
          <p className="text-center">
            @ copyright info <span className="text-info">{copyright}</span>
          </p>
        </div>
      </div>
      <Link to="/search">
        <p className="text-right">Navigate to Search Page</p>
      </Link>
    </div>
  );
};

export default HomePage;
