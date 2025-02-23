export const metadata = {
  title: "Admin page",
  description: "Admin page",
}

import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./action";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default async function Admin() {
  const client = await clerkClient();

  debugger

  const users = (await client.users.getUserList()).data;

  return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Make Admin</TableCell>
            <TableCell align="right">Make Moderator</TableCell>
            <TableCell align="right">Remove Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.firstName} {row.lastName}
              </TableCell>
              <TableCell align="right">{
                row.emailAddresses.find(
                  (email) => email.id === row.primaryEmailAddressId
                )?.emailAddress}</TableCell>
              <TableCell align="right">{row.publicMetadata.role as string}</TableCell>
              <TableCell align="right"> <form action={setRole} className="inline">
                <input type="hidden" value={row.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Make Admin
                </button>
              </form></TableCell>
              <TableCell align="right"> <form action={setRole} className="inline">
                <input type="hidden" value={row.id} name="id" />
                <input type="hidden" value="moderator" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Make Moderator
                </button>
              </form></TableCell>

              <TableCell align="right"> 
              <form action={removeRole} className="inline">
                <input type="hidden" value={row.id} name="id" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Remove Role
                </button>
              </form>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );
}