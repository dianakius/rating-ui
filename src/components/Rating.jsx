import { useState } from "react";

const Rating = ({heading = 'Rate Your Experience', color= 'gold'}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  return (
    <div className="rating-container">
      <h2>{ heading}</h2>

      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className='star'
            style={{
              color: star <= (hover || rating) ? color: '#ccc', }}
            
          >
            {"\u2605"}
          </span> // Unicode for star character
        ))}
      </div>
      {rating > 0 && (
        <p className="feedback"> {feedbackMessages[rating - 1]} </p>
      )}
    </div>
  );
};

export default Rating;
