import { useEffect, useState } from 'react';
import Axios from 'axios';
// import { useStore } from '../store/Store';

function GetData() {
  const [data, setData] = useState([]);
  // const { apiLink } = useStore();

  useEffect(() => {
    // Axios.get({ apiLink })
    Axios.get('http://zmdp.cloud/iseAlim/spotify.json')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.allPlaylists?.map((playlist, index) => {
    return (
      <tr>
        <td>{playlist.name}</td>
      </tr>
    );
  });

  return (
    <div className="datacontainer">
      <table className="datatable">{arr}</table>
    </div>
  );
}

export default GetData;
