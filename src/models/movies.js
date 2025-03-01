import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  movieName: String,
  ticketPrice: Number,
  isActive: Boolean,
  poster: String,
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedBy: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);
export default Movie;

