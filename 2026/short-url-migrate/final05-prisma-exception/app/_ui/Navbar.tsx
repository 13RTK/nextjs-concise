import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className='navbar shadow-sm bg-primary text-primary-content'>
      <div className='navbar-start'>
        <Link className='btn btn-ghost text-xl' href='/'>
          Alex Short URL
        </Link>
      </div>

      <div className='navbar-end'>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
