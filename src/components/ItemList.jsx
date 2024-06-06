import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress, Container, Typography } from '@mui/material';

const ItemList = ({ searchQuery }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container >
      <List className='text-3xl'>
        {filteredItems.map((item) => (
          <ListItem key={item.id}  >
             <ListItemText
              primary={
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
              }
              secondary={item.body}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;
