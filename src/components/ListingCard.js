import React, { useState } from "react";

function ListingCard({ price, imageSrc, description, location }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDeleteClick = () => {
    // Handle delete button click
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={imageSrc} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;