'use server';

import connectToDatabase from "@/lib/mongodb";
import { Movie } from "@/models/movies";

export type Errors = {
    movieName?: string;
    poster?: string;
    ticketPrice?: string;
    isActiveValue?: string;
  };

export type FormState = {
    errors: Errors;
    state: Errors;
  };

export async function addMovie(prevState: FormState, formData: FormData) {
    const movieName = formData.get('movie-name') as string;
    const poster = formData.get('poster') as string;
    const ticketPrice = formData.get('ticket-price') as string;
    const isActiveValue = formData.get('is-active') as string;
    const errors: Errors = {};
    const state: Errors = {};

    if (!movieName) {
      errors.movieName = "Movie Name is required";
      state.movieName = movieName;
    }
  
    if (!ticketPrice) {
      errors.ticketPrice = "Ticket Price is required";
      state.ticketPrice = ticketPrice;
    }
  
    if (!poster) {
      errors.poster = "Poster is required";
      state.movieName = movieName;
    }
    state.isActiveValue = isActiveValue;
  
    if (Object.keys(errors).length > 0) {
      return { errors, state };
    }
        await connectToDatabase();
        const movie = {
            movieName,
            poster,
            ticketPrice,
            isActive: isActiveValue === 'on',  // Ensure you convert 'on' or 'off' to boolean
        };
        console.log(movie);
        const movies = new Movie(movie);
        await movies.save();
}