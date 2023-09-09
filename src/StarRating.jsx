// import { range } from './utils';

function StarRating({ rating }) {
  const ratingArray = Array.from({ length: rating });

  return (
    <>
      <div className="star-wrapper">
        {ratingArray.map((index) => (
          <img 
            key={index}
            alt="gold-star"
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
      </div>
    </>
  );

}

export default StarRating;
