import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => {
        setListings(data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error:', error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <ul className="cards">
        {filteredListings.map(listing => (
          <ListingCard
            key={listing.id}
            price={listing.price}
            imageSrc={listing.imageSrc}
            description={listing.description}
            location={listing.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;