import { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';
import Image from 'next/image';
import ModifyButton from './ModifyButton';

export default function ReviewCard(film: any) {
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
      <div className=" mt-3  border-slate-300 shadow-xl rounded-lg grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, _movie) => (
          <div key={review.id}>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image
                  className="object-cover w-full "
                  src={`https://image.tmdb.org/t/p/w500${review.moviePoster}`}
                  layout="fill"
                  
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="">
                      {review.title}
                      {review.description}

                      <p>{review.review}</p>
                      <p>{review.ratings}</p>
                      <p>{review.movieTitle}</p>
                      <p>{review.createdAt}</p>
                    </a>
                  </p>
                  {/* <ModifyButton /> */}
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
             
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReviewForm movie={film} />
    </div>
  );
}
