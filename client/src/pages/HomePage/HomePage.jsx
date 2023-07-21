// Dependancies
import React from "react";
import "./HomePage.scss";

// Assets

// Components
import AIWidget from "../../components/AIWidget/AIWidget";

import SearchResults from "../../components/SearchResults/SearchResults";

// Pages

export default function HomePage() {
  return (
    <div className="homepage">
      <SearchResults />
      <AIWidget />
    </div>
  );
}
