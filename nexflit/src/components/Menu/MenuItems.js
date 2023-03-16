import { randomRgbaColor } from '../../utils';
import { Link } from 'react-scroll';

function MenuItems(props) {
  const {name, Icon, to} = props;
  return(
    <Link className="subMenu"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={700}
    activeClass="active"
    >
    <Icon className="IconMenu" style={{color: randomRgbaColor(1)}}/>
      <span>{name}</span>
    </Link>
  );
}

export default MenuItems