import axios from 'axios';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import styles from './review-form.module.css';

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
    name: '',
    movieId: movie.id,
    movieTitle: movie.title,
    ratings: '*****',
    review: '',
    createdAt: new Date(),
    modifiedAt: null,
    modified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(form);
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
    Router.push(`/ratings`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      err.name = 'Title is required!';
    }
    if (!form.ratings) {
      err.ratings = 'Ratings is required!';
    }
    return err;
  };

  return (
    <div className={`${styles['review-form']} ${styles['flex']}`}>
      {isSubmitting ? (
        <Loader active inline="centered" />
      ) : (
        <Form onSubmit={handleSubmit} size="big">
          <h1>Create Review</h1>

          <Form.Input
            error={
              errors.name
                ? { content: 'Please enter a title', pointing: 'below' }
                : null
            }
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <Form.Field
            error={
              errors.ratings
                ? { content: 'Please rate the movie', pointing: 'below' }
                : null
            }
            control="select"
            label="Rating"
            placholder="Choose Rating"
            name="ratings"
            defaultValue={form.ratings}
            onChange={handleChange}
          >
            <option value="*****">{MovieRating.FiveStars}</option>
            <option value="****">{MovieRating.FourStars}</option>
            <option value="***">{MovieRating.ThreeStars}</option>
            <option value="**">{MovieRating.TwoStars}</option>
            <option value="*">{MovieRating.OneStar}</option>
            <option value="👎">{MovieRating.Terrible}</option>
          </Form.Field>
          <Form.TextArea
            label="Description"
            placeholder="Description"
            name="review"
            onChange={handleChange}
          />
          <Button type="submit">Create</Button>
        </Form>
      )}
    </div>
  );
}

export default ReviewForm;
