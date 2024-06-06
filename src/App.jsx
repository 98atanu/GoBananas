import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='bg-zinc-100 '>
      <AppBar position="static">
        <Toolbar className='bg-gradient-to-l from-purple-400 to-purple-700'>
          <Typography variant="h6" className=' px-6 py-2 bg-gradient-to-l from-purple-800 to-purple-900 rounded-md shadow-md shadow-purple-400'>
            GoBananas
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ItemList searchQuery={searchQuery} />
      </Container>
    </div>
  );
};

export default App;
