import axios from 'axios';
import Link from 'next/link';
import styles from './index.module.css';

export function Edit({ reviews }) {
  console.log(reviews);
  return (
    <div className={styles['container']}>
      <h1>Edit Reviews</h1>
      <div className={styles['reviews-list']}>
        {reviews.data.map((review) => {
          return (
            <div key={review._id} className={styles['review-details']}>
              <h4 className="edit-title">
                {review.name} - {review.movieTitle}
              </h4>
              <p className="edit-created">
                <b>Created:</b>{' '}
                <em>{new Date(review.createdAt).toLocaleDateString()}</em>
              </p>
              <p className="edit-rating">
                <b>Rating:</b> {review.ratings}
              </p>
              <p className="edit-review">
                <b>Description: </b>
                {review.review}
              </p>
              <Link href={`/edit/${review._id.toString()}`}>
                <a className={`${review.name} edit-btn`}>Edit</a>
              </Link>
              <Link href={`/edit/remove/${review._id.toString()}`}>
                <a className={`${review.name} delete-btn`}>Delete</a>
              </Link>
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

export default Edit;
