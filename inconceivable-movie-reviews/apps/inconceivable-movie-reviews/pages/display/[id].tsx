// import Image from "next/image";
// import React from "react";

// export function MovieShow(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     props.onUpdateMovie(props.movie.id, params);
//     event.target.reset();
//   };

//   const handleClick = () => {
//     props.onDestroyMovie(props.movie);
//   };

//   return (
//     <div>
//       <h1>{props.movie.title}</h1>
//       <Image src={props.movie.image} alt={""}></Image>
//       <p>Movie Rating: {props.movie.movieRating}</p>
//       <p>Tagline: {props.movie.tagline}</p>
//       <p>Star Actor: {props.movie.starActor}</p>

//       <button onClick={handleClick}>Destroy movie</button>

//       <h2>Update Mobie</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name: <input type="text" name="name" defaultValue={props.movie.name} />
//         </div>
//         <div>
//           Price: <input type="number" name="price" defaultValue={props.movie.price} />
//         </div>
//         <div>
//           Description: <input type="text" name="description" defaultValue={props.movie.description} />
//         </div>
//         <button type="submit">Update movie</button>
//       </form>
//     </div>
//   )
// }
