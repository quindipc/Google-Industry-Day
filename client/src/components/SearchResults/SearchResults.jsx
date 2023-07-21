import React from "react";
import { useState } from "react";
import "./SearchResults.scss"

const SearchResults = () => {
  const dummyResults = [
    {
      id: 1,
      title: "What is AI?",
      url: "https://www.google.ca",
      comments:
        "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making. ",
      img: "https://picsum.photos/id/123/200/300",
    },
    {
      id: 2,
      title: "How does AI contribute to this product? ",
      url: "https://www.lipsum.com/",
      comments:
        "AI plays a significant role in enhancing this product's capabilities. It helps improve search results, provides personalized recommendations, and optimizes user experiences by analyzing patterns and data",
      img: "https://picsum.photos/id/452/200/300",
    },
    {
      id: 3,
      title: "Our Vision",
      url: "https://www.lipsum.com/",
      comments:
        "Our vision centers around training or fine-tuning a sophisticated Large Language Model, such as Google's LaMDA, using Google product documentation and AI-related knowledge. This process allows us to develop an advanced widget that seamlessly interacts with Google's AI-powered tools, providing users with a clear understanding of AI's workings behind the scenes.",
      img: "https://picsum.photos/id/412/200/300",
    },
    {
      id: 4,
      title: "Google Insights Out Now!",
      url: "https://www.lipsum.com/",
      comments:
        'We are thrilled to introduce "Insights," a powerful widget integrated into the Google platform. "Insights" provides users with a unique glimpse behind the curtain, offering clear explanations on how AI enhances their experience, utilizes their data, and delivers the results they receive. With "Insights," we aim to foster transparency and empower users to confidently embrace AI-related features.',
      img: "https://picsum.photos/id/892/200/300",
    },
    {
      id: 5,
      title: "Who is our target audience?",
      url: "https://www.lipsum.com/",
      comments:
        "Meet Emily Thompson, a 37-year-old female accountant with over 10 years of finance experience. Meticulous and analytical, she's known for her reliability and efficiency. Juggling work and family, Emily resides in a suburban area with her husband and two children. In her leisure time, she indulges in mystery novels and local art events.",
      img: "https://picsum.photos/id/932/200/300",
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
