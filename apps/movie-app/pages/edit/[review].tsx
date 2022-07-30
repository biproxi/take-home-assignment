import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import styles from './index.module.css';

export function Moviecard({ review }) {
  const { data } = review;

  enum MovieRating {
    FiveStars = '*****',
    FourStars = '****',
    ThreeStars = '***',
    TwoStars = '**',
    OneStar = '*',
    Terrible = '👎',
  }

  const [form, setForm] = useState({
    name: data.name,
    movieId: data.id,
    movieTitle: data.movieTitle,
    ratings: data.ratings,
    review: '',
    createdAt: data.createdAt,
    modifiedAt: new Date(),
    modified: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        editReview();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  // modify this to editing the post
  const editReview = async () => {
    const res = await axios
      .put(`http://localhost:4200/api/controller/${data._id}`, form)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Router.push(`/edit`);
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
    if (!form.ratings) {
      err.ratings = 'Ratings is required!';
    }
    if (!form.review) {
      err.review = 'Please enter description or cancel.';
    }
    return err;
  };
  return (
    <div className="container">
      <div className={styles['previous-data']}>
        <h1>
          Movie: {data.movieTitle} - {data.movieId} (MovieID)
        </h1>
        <h2>
          <b>review by: </b>
          {data.name}
        </h2>
        <p>
          <b>Created at: </b>
          <em>{new Date(data.createdAt).toLocaleDateString()}</em>
        </p>
        {data.modified ? (
          <p>
            <b>Modified at: </b>
            <em>{data.modifiedAt}</em>
          </p>
        ) : null}
      </div>
      <div className={styles['edit-form']}>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit} size="big">
            <h1>Modify Review</h1>
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
              error={
                errors.review
                  ? { content: 'Please describe the review', pointing: 'below' }
                  : null
              }
              label="Description"
              placeholder="Enter description"
              name="review"
              onChange={handleChange}
            />
            <Button type="submit">Create</Button>{' '}
            <Link href="/edit">
              <Button>Cancel</Button>
            </Link>
          </Form>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // grab review id
  const id = context.params.review;

  // review
  const reviews = await axios.get(`http://localhost:4200/api/controller/${id}`);

  return {
    props: {
      review: reviews.data,
    },
  };
}

export default Moviecard;
