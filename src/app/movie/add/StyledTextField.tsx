'use client'

import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
    '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type="number"]': {
      MozAppearance: 'textfield',
    },
  });