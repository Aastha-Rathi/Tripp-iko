import React, { useState } from "react";
import SearchResultCard from "../components/SearchResultCard";
// TODO: Import and use searchService for searching

const Explore = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Call search API here
    // setResults(response.data)
  };

  return (
    <div>
      <h1 className="text-2xl font-heading text-trippiko-accent mb-4">Explore Destinations</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by destination..." className="p-2 rounded bg-trippiko-light flex-1" />
        <button type="submit" className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded">Search</button>
      </form>
      <div className="grid gap-4">
        {results.map((profile) => (
          <SearchResultCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
