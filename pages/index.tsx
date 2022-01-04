import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';
import { mainnet as Mainnet } from '@/assets/networks';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to UI Template app
        </Typography>
        <Mainnet />
      </Box>
    </Container>
  );
};

export default Home;
