// import icon from '@/assets/icon.png';
export const metadata = {
  title: "Home page",
  description: "Home page",
}


import { TextField } from "@mui/material";

// import Image from 'next/image';
export default function Home() {
  return (
    <div>

<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
     Hi

    </div>
  );
}
