import styled from 'styled-components';

export const SidebarStyled = styled.div`
  width: 224px;
  height: 90vh;
  left: 0px;
  top: 0px;
  background-color: #030303;
  border-radius: 0px;
  padding-left: 24px;
  .logo {
    width: 100px;
    height: 100px;
    margin-left: -10px;
    svg {
      width: 145.91px;
      height: 43.35px;
      margin-left: 20px;
      margin-top: 30px;
    }
  }

  .icon {
    div {
      padding: 8px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      margin-right: 140px;
      line-height: 30px;

      svg {
        width: 50px;
        height: 16px;
        /* path {
          fill: blue;
        } */
      }
      span {
        color: white;
        font-size: 13px;
      }
    }
  }
  .playlisttext {
    color: white;

    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.15em;
    opacity: 0.6;
    margin-top: 81px;
  }
  .searchinput {
    width: 176.77px;
    height: 34.87px;
    left: 20px;
    opacity: 0.15;
    border-radius: 18px;
    margin-top: 10px;
  }
  .datacontainer {
    .datatable {
      color: white;
      line-height: 40px;
      opacity: 0.6;
    }
  }
`;
