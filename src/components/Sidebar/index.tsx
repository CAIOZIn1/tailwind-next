import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { SlSettings } from 'react-icons/sl';

import Logo from "./Logo";
import MainNavigation from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import UsedSpaceWidget from './UsedSpaceWidget';
import Profile from './Profile';
import { InputControl, InputPrefix, InputRoot } from '../Input';

const Sidebar = () => {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-6 overflow-x-hidden'>
      <Logo />

      <InputRoot>
        <InputPrefix>
          <AiOutlineSearch className='h-5 w-5 text-zinc-500' />
        </InputPrefix>
        <InputControl placeholder='Search' />
      </InputRoot>

      <MainNavigation />

      <div className='mt-auto flex flex-col gap-9'>
        <nav>
          <NavItem title='Support' icon={MdOutlineSupportAgent}/>
          <NavItem title='Settings' icon={SlSettings}/>
        </nav>

        <UsedSpaceWidget />

        <div className='h-px bg-zinc-200'>
          <Profile />
        </div>
      </div>
    </aside>
   );
}

export default Sidebar;
