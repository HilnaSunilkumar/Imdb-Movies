import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { Grid } from "./Grid";
import Spinner from "./Spinner";

import  NoImg from '../images/noimage.png'
import { useGetMovie } from "../hooks/useGetMovie";
import { useParams } from "react-router";
import { BreadCrumb } from "./BreadCrumb";
import { MovieDetail } from "./MovieDetail";
import { MovieDetailBar } from "./MovieDetailBar";
import { Actors } from "./Actors";

export const Movie = () => {
   /*  useParams() 
    return  movieId as object {movieId: 126262} 
     */
    const movieId = useParams().movieId;
    const {state: movie ,loading, error} = useGetMovie(movieId);
    if(loading) return <Spinner />
    if(error) return <h3> Something went wrong !</h3>

    return (
        <>
        <BreadCrumb  movieTitle= {movie.original_title}/>
        <MovieDetail movie={movie} />
        <MovieDetailBar 
        time= {movie.runtime} 
        budget={movie.budget} 
        revenue={movie.revenue}
         />
         <Grid header='Cast'>
            {movie.actors.map(actor =>(
                <Actors 
                key={actor.credit_id} 
                name={actor.name} 
                character={actor.character} 
                imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImg }
                /> 
            )) }
         </Grid>
        </>
    );

}

