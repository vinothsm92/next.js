'use server';

import connectToDatabase from "@/lib/mongodb";
import { Movie } from "@/models/movies";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    state.movieName = movieName;
    state.ticketPrice = ticketPrice;
    state.poster = poster;
    state.isActiveValue = isActiveValue;
    if (!movieName) {
      errors.movieName = "Movie Name is required";
     
    }
  
    if (!ticketPrice) {
      errors.ticketPrice = "Ticket Price is required";
     
    }
  
    if (!poster) {
      errors.poster = "Poster is required";
     
    }
  
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
        const movies = new Movie(movie);
        await movies.save();
        redirect("/movie/movies-list")
}


export async function removeMovie(formData: FormData) {
    const movieId = formData.get("id") as string;
    await connectToDatabase();
    await Movie.findByIdAndDelete(movieId); 
    revalidatePath("/movie/movies-list"); // Revalidate the admin page to reflect the changes

}