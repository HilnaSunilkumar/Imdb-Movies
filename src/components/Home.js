import React, { Component } from "react";
import API from "../API";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useGetHome } from "../hooks/useGetHome";

import NoImg from "../images/no_image.jpg";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { HeroImage } from "./Hero";
import { SearchBar } from "./SearchBar";
import Spinner from "./Spinner";
import { Thumb } from "./Thumb";

const initialState = {
  page: 0,
  results: [],
  tot_pages: 0,
  tot_results: [],
};

export class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: "",
    IsLoadingMore: false,
    loading: false,
    error: false,
  };

  fetchMovies = async (page, searchTerm = "") => {
    try {
      this.setState({ error: false, loading: true });
      const movies = await API.fetchMovies(page, searchTerm);

      this.setState((prev) => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results],
        },
        loading:false
      }));
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ movies: initialState, searchTerm }, () =>
      this.fetchMovies(1, this.state.searchTerm)
    );
  };

  handleLoadMore = () =>{
    console.log('clicked')
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
  }
  
  componentDidMount() {
    this.fetchMovies(1);
  }

  render() {
    const { searchTerm, movies, loading, error } = this.state;
    if (error) {
      return <h2> Something went wrong !</h2>;
    }
    return (
      <>
        {!searchTerm && movies.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview}
          />
        ) : null}
        <SearchBar setSearchTerm={this.handleSearch} />
        <Grid header={searchTerm ? "Search List" : "Popular Movies"}>
          {movies.results.map((movies) => (
            <Thumb
              key={movies.id}
              clickable
              movieId={movies.id}
              image={
                movies.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movies.poster_path
                  : NoImg
              }
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
          <Button text="Load More" callback={this.handleLoadMore} />
        )}
      </>
    );
  }
}
