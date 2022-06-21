import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='nav_bar'>
      <ul className='nav_links'>
        <li>
          <Link href='#'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Resume</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;