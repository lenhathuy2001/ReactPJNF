import { FaHome, FaHotjar, FaStar} from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import { GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll } from "react-icons/gi";
import styled from "styled-components";
import MenuItems from "./MenuItems";


function Menu(props) {
  return (
    <MenuWindow>
      <MenuItems name="Netflix" Icon={SiNetflix} to='netflix'/>
      <MenuItems name="Trending" Icon={FaHotjar} to='trending'/>
      <MenuItems name="Top Rated" Icon={FaStar} to='topRated'/>
      <MenuItems name="Actions Movies" Icon={GiNinjaHeroicStance} to='actionMovies'/>
      <MenuItems name="Comedy Movies" Icon={MdTheaterComedy} to='comedyMovies'/>
      <MenuItems name="Horror Movies" Icon={GiGhost} to='horrorMovies'/>
      <MenuItems name="Romance Movies" Icon={GiRomanToga} to='romanceMovies'/>
      <MenuItems name="Doctumentaries" Icon={GiBandageRoll} to='documentaries'/>
    </MenuWindow>
  )
}
export default Menu

const MenuWindow = styled.div`
  position : fixed;
  left : 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  &:hover{
    width: 180px;
    background: rgba(0, 0, 0, 0.5)
  }

  .subMenu{
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor:pointer;

    .IconMenu{
      font-size: 30px;
      margin-right: 8px;
    }

    span{
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      &:hover{
        color: #fff;
      }
    }
  }

`