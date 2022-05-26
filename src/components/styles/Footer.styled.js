import styled from 'styled-components';

export const FooterStyled = styled.div`
  position: absolute;
  height: 10vh;
  width: 100vw;
  background: #282828;
  box-shadow: 0px -1px 0px #000000;
  border-radius: 0px;
  .music {
    padding: 20px;
    display: flex;
    align-items: center;
    .playerbtn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .playerfull {
      text-align: -webkit-center;
    }
    .top-player {
      display: flex;
      width: 30%;
      justify-content: space-evenly;

      .player {
      }
      .skipback {
        margin-top: 10px;
      }
      .skip {
        margin-top: 10px;
      }
    }
  }
`;
