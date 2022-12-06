import { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';

export default function Reviews(film: any) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch('/api/controller/reviews');
      const { data } = await res.json();
      setReviews(data);
    }
    fetchReviews();
  }, []);

  return (
    <div>
      <h1 className=' font-bold text-center underline '>Reviews - Read Only</h1>
      <div className=" mt-3  border-slate-300 shadow-xl rounded-lg grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.name}</h2>
          <p>{review.review}</p>
          <p>{review.ratings}</p>
          <p>{review.movieTitle}</p>
          <p>{review.createdAt}</p>
        </div>
        
      ))}
      </div>
    </div>
  );
}
