'use client'

import { TablePagination } from '@mui/material'
import React from 'react'

const TablePaginations = ({rows}:{rows: number}) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TablePagination
    rowsPerPageOptions={[1,5, 10, 25]}
    component="div"
    count={rows}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  )
}

export default TablePaginations