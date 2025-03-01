'use client'

import { Button, Switch, TextField } from '@mui/material';
import React, { useActionState } from 'react';
import { StyledTextField } from './StyledTextField';
import { addMovie, FormState } from '@/actions/movie/add';

const Page = () => {
    const initialState: FormState = {
        errors: {},
        state: {}
      };

    const [state, formAction] = useActionState(addMovie, initialState);

    return (
        <>
            <h1>Add Movies</h1>
            <div>
                <form action={formAction}>
                    <div className='mb-5 mt-5'>
                        <TextField id="movie-name"  defaultValue={state?.state.movieName} label="Movie Name" variant="outlined" name='movie-name' fullWidth />
                        {state?.errors.movieName && (
                            <p className="text-red-500">{state.errors.movieName}</p>
                        )}
                    </div>
                    <div className='mb-5'>
                        <TextField id="poster" label="Movie Image URL" variant="outlined" name='poster' fullWidth />
                        {state?.errors.poster && (
                            <p className="text-red-500">{state.errors.poster}</p>
                        )}
                    </div>
                    <div className='mb-5'>
                        <StyledTextField slotProps={{
                            htmlInput: {
                                max: 1000,
                                min: 0
                            }
                        }} id="ticket-price" label="Ticket price" type="number" variant="outlined" name='ticket-price' fullWidth />
                        {state?.errors.ticketPrice && (
                            <p className="text-red-500">{state.errors.ticketPrice}</p>
                        )}
                    </div>
                    <div className='mb-5'>
                        <Switch
                            inputProps={{ 'aria-label': 'Switch demo' }}
                            name='is-active'
                            color="secondary"
                        />
                    </div>
                    {/* Hidden field to ensure the Switch value is included */}
                    <input type="hidden" name="is-active" value="off" /> {/* Default value */}
                    <div className='mb-5 flex'>
                        <div className='mr-5'>
                            <Button variant="outlined" color='secondary'>Clear</Button>
                        </div>
                        <Button type='submit' variant="outlined">Save</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Page;
