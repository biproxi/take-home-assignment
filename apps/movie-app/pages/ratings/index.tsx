import axios from 'axios';
import styles from './index.module.css';

export function Ratings({ reviews }) {
  return (
    <div className={styles['container']}>
      <h1>View Reviews - READ ONLY</h1>
      <div className={styles['reviews-list']}>
        {reviews.data.map((review) => {
          return (
            <div key={review._id} className={styles['review-details']}>
              <div className="display-container">
                <h4 className="review-title">
                  {review.name} - {review.movieTitle}
                </h4>
                <p className="review-created">
                  <b>Created:</b>{' '}
                  <em>{new Date(review.createdAt).toLocaleDateString()}</em>
                </p>
                <p className="reivew-rating">
                  <b>Rating:</b> {review.ratings}
                </p>
                <p className="review-description">
                  <b>Description: </b>
                  {review.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// get movie data and reviews
export async function getServerSideProps() {
  // reviews
  const review = await axios.get(
    'http://localhost:4200/api/controller/reviews'
  );

  return {
    props: {
      reviews: review.data,
    },
  };
}

export default Ratings;
