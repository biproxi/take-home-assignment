import axios from 'axios';
import Router from 'next/router';
import { useState, useEffect } from 'react';

export function ReviewForm({ movie }) {
  enum MovieRating {
    FiveStars = '*****',
    FourStars = '****',
    ThreeStars = '***',
    TwoStars = '**',
    OneStar = '*',
    Terrible = '👎',
  }

  const [form, setForm] = useState({
    name: '', // string
    movieId: movie.id, // number
    movieTitle: movie.title, // string
    ratings: '*****', // enum
    review: '', // string
    createdAt: new Date(), // date
    modified: false, // boolean
  });


  

  const [isSubmitting, setIsSubmitting] = useState(false);
  // we want to declare the errors as well as the tyoes 
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createReview();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createReview = async () => {
    const res = await axios
      .post('http://localhost:4200/api/controller/reviews', form)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Router.push(`/`);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
    }
    if (!form.ratings) {
    }
    return err;
  };

  // if the actor is named "Tom Hanks" then the movie is rated terrible
  if (form.name === 'Tom Hanks') {
    form.ratings = '👎';
  }
  

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-center">Write a Review</h1>
      <form className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="name" className="text-lg font-semibold">
            Title
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-96 h-10 border-2 border-slate-400 rounded-md"
            onChange={handleChange}
            value={form.name}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="flex flex-col items-center justify-center">
          <label htmlFor="ratings" className="text-lg font-semibold">
            Ratings
          </label>
          <select
            name="ratings"
            id="ratings"
            className="w-96 h-10 border-2 border-slate-400 rounded-md"
            onChange={handleChange}
            value={form.ratings}
          >
            <option value={MovieRating.FiveStars}>
              {MovieRating.FiveStars}
            </option>
            <option value={MovieRating.FourStars}>
              {MovieRating.FourStars}
            </option>
            <option value={MovieRating.ThreeStars}>
              {MovieRating.ThreeStars}
            </option>
            <option value={MovieRating.TwoStars}>{MovieRating.TwoStars}</option>
            <option value={MovieRating.OneStar}>{MovieRating.OneStar}</option>
            <option value={MovieRating.Terrible}>{MovieRating.Terrible}</option>
          </select>
          {errors.ratings && <p className="text-red-500">{errors.ratings}</p>}
        </div>

        <div className="flex flex-col items-center justify-center">
          <label htmlFor="review" className="text-lg font-semibold">
            Review
          </label>
          <textarea
            name="review"
            id="review"
            className="w-96 h-40 border-2 border-slate-400 rounded-md"
            onChange={handleChange}
            value={form.review}
          />
        </div>

        <button
          type="submit"
          className="w-96 h-10 mt-4 text-lg font-semibold text-white bg-slate-400 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
