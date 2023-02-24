// import React from 'react'

// const Book = () => {
//   return (
//     <div>Book</div>
//   )
// }

// export default Book
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 520,
        },
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={16}>
        heu
      </Paper>
    </Box>
  );
}
