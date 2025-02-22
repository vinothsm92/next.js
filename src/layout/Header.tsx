import icon from '@/assets/images/icon.png';
import DarkmodeIcon from '@/assets/images/DarkmodeIcon.jpg';
import Image from 'next/image';
import { Navigation } from './Component/Navigation/Navigation';
import HoverMenu from './Component/HoverMenu/page';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch Theme' } };

interface HeaderProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const Header = ({ toggleTheme, mode }: HeaderProps) => {
  console.log('header')
  return (
    <>
      <div className="text-white px-6 flex justify-between items-center">
        <div className='mr-[5%]'>
          <Image src={mode !== 'dark' ? icon: DarkmodeIcon} width='200' height='10' alt="icon" />
        </div>
        <div></div>
        <div className='flex'>
          {/* Switch component to toggle the theme */}
          <Switch
            {...label}
            checked={mode === 'dark'} // Set the state of the switch based on the theme mode
            onChange={toggleTheme}   // Handle the theme toggle when the switch is clicked
          />
          <Navigation />
        </div>
      </div>
      <HoverMenu />
    </>
  );
}

export default Header;
