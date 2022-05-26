import { SidebarStyled } from './styles/Sidebar.styled';
import { ReactComponent as Home } from '../Svg/Home.svg';
import { ReactComponent as Logo } from '../Svg/Logo.svg';
import { ReactComponent as Search } from '../Svg/Search.svg';
import { ReactComponent as Library } from '../Svg/Library.svg';
import GetData from './GetData';

export default function Sidebar() {
  return (
    <SidebarStyled>
      <div className="logo">
        <Logo />
      </div>
      <div className="icon">
        <div>
          <Home />
          <span>Giriş</span>
        </div>

        <div>
          <Search />
          <span>Gözat</span>
        </div>
        <div>
          <Library />
          <span>Kitaplık</span>
        </div>
      </div>
      <div className="playlisttext">
        <span>ÇALMA LİSTELERİN</span>
        <input className="searchinput" placeholder="Ara" />
      </div>
      <div>
        <GetData />
      </div>
    </SidebarStyled>
  );
}
