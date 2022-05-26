import styled from 'styled-components';

export const ContainerStyled = styled.div`
  position: absolute;
  height: 90vh;
  left: 248px;
  right: 0px;
  top: 0px;
  overflow-y: scroll;
  border-radius: 0px;
  background: linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%);
  .header {
    color: white;
    margin-bottom: 100px;
    margin-left: 90px;

    .profilebtn {
      float: right;
      margin-right: 6%;
    }

    .iconclass {
      margin-top: 20px;
    }
    .searchinput {
      width: 256.77px;
      height: 34.87px;
      opacity: 0.15;
      border-radius: 18px;
      margin-top: 10px;
    }
    .iconbtnprofile {
      margin-left: 840px;
      color: white;
    }
  }

  .container {
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 50px;

    .datacontainer {
      display: flex;
      float: left;
      gap: 50px;
    }

    .MuiPaper-root {
      width: 100%;
      padding: 25px;
    }
    .cardcontainer {
      float: left;
      width: 20%;
    }
    .cardimg {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .MuiPaper-root {
    background-color: #202020;
    border-radius: 10px;
    padding: 10px;
  }
  .MuiCardMedia-root {
    text-align: center;
  }

  .MuiTypography-root {
    color: white;
    h4 {
      font-size: 14px;
    }
    h5 {
      font-family: 'Lato';
      font-size: 12px;
      opacity: 0.6;
    }
  }
  h1 {
    color: white;
    margin-left: 90px;
  }
  h3 {
    color: white;
    font-family: 'Lato';
    font-size: 14px;
    opacity: 0.6;
    margin-left: 100px;
  }
`;
