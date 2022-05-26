import { ContainerStyled } from './styles/Container.styled';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as Left } from '../Svg/Left.svg';
import { ReactComponent as Right } from '../Svg/Right.svg';
import { ReactComponent as Profile } from '../Svg/Profile.svg';
import GetRecentlyPlayed from './GetRecentlyPlayed';
import GetRecommended from './GetRecommended';
// import SearchFilters from './SearchFilters';

export default function Container() {
  return (
    <ContainerStyled>
      <div className="header">
        <div className="iconclass">
          <IconButton className="iconbtnleft">
            <Left />
          </IconButton>
          <IconButton className="iconbtnright">
            <Right />
          </IconButton>

          <IconButton className="iconbtnprofile profilebtn">
            <Profile />
          </IconButton>

          {/* <SearchFilters /> */}
        </div>
      </div>
      <h1>Yakında Çalanlar</h1>
      <div className="container">
        <GetRecentlyPlayed />
      </div>
      <h1>Tavsiye Edilenler</h1>
      <h3>Sevdiğin her şeyden biraz dinle.</h3>
      <div className="container">
        <GetRecommended />
      </div>
    </ContainerStyled>
  );
}
