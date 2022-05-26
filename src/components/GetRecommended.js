import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function GetRecommended() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
      .then((res) => {
        setRecommended(res.data.recommended);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="datacontainer">
      {recommended?.length &&
        recommended.map((song, index) => {
          return (
            <Card className="cardcontainer" sx={{ maxWidth: 200 }}>
              <CardMedia>
                <img className="cardimg" src={song.images[0].url} alt="for use" />
              </CardMedia>
              <Typography variant="body2" color="text.secondary">
                <h4>{song.owner.display_name}</h4>
                <h5>{song.description}</h5>
              </Typography>
            </Card>
          );
        })}
    </div>
  );
}

export default GetRecommended;
