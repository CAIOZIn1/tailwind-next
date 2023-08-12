import {AiOutlineHome} from 'react-icons/ai';
import {SlGraph} from 'react-icons/sl';
import {
  BsStack,
   BsCheck2Square,
    BsFlag,
} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import { NavItem } from './NavItem';

const MainNavigation = () => {
  const navbar = [
    {
      title: 'Home',
      icon: AiOutlineHome
    },
    {
      title: 'Dashboard',
      icon: SlGraph
    },
    {
      title: 'Projcts',
      icon: BsStack
    },
    {
      title: 'Tasks',
      icon: BsCheck2Square
    },
    {
      title: 'Reporting',
      icon: BsFlag
    },
    {
      title: 'Users',
      icon: FiUsers
    },
  ]

  return (
    <nav className="space-y-0.5">
      {navbar.map((args)=>(
        <NavItem title={args.title} icon={args.icon}/>
      ))}
    </nav>
   );
}

export default MainNavigation;
