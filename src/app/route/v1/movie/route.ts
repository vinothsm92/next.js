import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";
import Movie from "../../../../models/movies";

export async function GET() {
    try {
        await connectToDatabase();
        const movies = await Movie.find();
        return Response.json({ data: movies, status: 200})
        
    } catch (error) {
        console.log("error -> ", error);
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const movieName = formData.get('movie-name') as string;
        const poster = formData.get('poster') as string;
        const ticketPrice = formData.get('ticket-price') as string;
        const isActiveValue = formData.get('is-active') as string;
    
        if (movieName && poster && ticketPrice && isActiveValue !== null) {
            // Connect to DB and save the movie
            await connectToDatabase();
            const movie = {
                movieName,
                poster,
                ticketPrice,
                isActive: isActiveValue === 'on', // Convert switch value
            };
    
            // Save movie to the database
            const movies = new Movie(movie);
            await movies.save();
    
            // Return a success message in response
            return NextResponse.json({ message: 'Movie saved successfully!', status: 201 });
        } else {
            return NextResponse.json({ message: 'Invalid data provided.', status: 400 });
        }
    }
    catch(error){
        console.log(error);
    }
}