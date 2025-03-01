import { removeMovie } from '@/actions/movie/add';
import Movie from '@/models/movies';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async() => {
  const movies = (await Movie.find());
  return (
   <>
   <div className='flex justify-between mb-5'>
   <h1>Movies List</h1>

   <Link href={"/movie/add"}><Button  variant="outlined">Add Movie</Button></Link>
   </div>
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell align="left">Poster</TableCell>
              <TableCell align="right">Ticket Price</TableCell>
              <TableCell align="right">Is Active</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.movieName}
                </TableCell>
                <TableCell align="left">
                {row.poster && <Image src={row.poster} alt={row.movieName} width="100" height="100" />}
                  </TableCell>
                <TableCell align="right">{row.ticketPrice}</TableCell>
                <TableCell align="right">
                 {row.isActive}
               </TableCell>
                <TableCell align="right"> 
                  <Button type="submit" variant="contained" >Edit</Button>
                </TableCell>

                <TableCell align="right">
                  <form action={removeMovie} className="inline">
                    <input type="hidden" value={row.id} name="id" />
                    <Button type="submit" variant="contained">Delete</Button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></>
  )
}

export default page