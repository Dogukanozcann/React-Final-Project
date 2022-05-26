import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SearchFilter() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    axios.get(`http://zmdp.cloud/iseAlim/spotify.json`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(APIData, 'başarılı');
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(setFilteredResults(filteredData));
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
      <input className="searchinput" icon="search" placeholder="Search..." onChange={(e) => searchItems(e.target.value)} />
      <div className="datacontainer" style={{ padding: 20 }}>
        <div className="container">
          {searchInput.length > 0 &&
            filteredResults?.allPlaylists.map((item) => {
              return (
                <Card className="cardcontainer" sx={{ maxWidth: 200 }}>
                  <CardMedia>
                    <img className="cardimg" src={item.images[0].url} alt="for use" />
                  </CardMedia>
                  <Typography variant="body2" color="text.secondary">
                    <h4>{item.owner.display_name}</h4>
                    <h5>{item.description}</h5>
                  </Typography>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}
