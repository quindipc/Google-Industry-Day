import React from "react";
import { useState } from "react";
import "./SearchResults.scss"

const SearchResults = () => {
  const dummyResults = [
    {
      id: 1,
      title: "Lorem42",
      url: "https://www.google.ca",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: " where does it come from?",
      url: "https://www.lipsum.com/",
      comments:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Why do we use it?",
      url: "https://www.lipsum.com/",
      comments:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Why do we use it?",
      url: "https://www.lipsum.com/",
      comments:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Why do we use it?",
      url: "https://www.lipsum.com/",
      comments:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ",
      img: "https://via.placeholder.com/150",
    },
    
  ];
  return (
    <div>
      {dummyResults.map((results, index) => (
        <div className="search" key={index}>
          <div className="search__info">
            <a href={results.url} target="_blank">
              {results.url}
            </a>
            <h3 className="search__title">{results.title}</h3>

            <p>{results.comments}</p>
          </div>
          {results.img && <img src={results.img} alt={results.title} />}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
