import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/listedBooks'>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to='/pagesToRead'>Pages to read</NavLink>
      </li>
      <li>
        <NavLink to='/category'>Category</NavLink>
      </li>
      <li>
        <NavLink to='/bookmarks'>Bookmarks</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl fixd">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg  rounded-box w-52 gap-1 bg-base-100"
          >
            {links}
          </ul>
        </div>
        <a className="btn  text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-[#23BE0A] text-white hover:bg-[#59C6D2] mr-2">Sign In</a>
        <a className="btn bg-[#23BE0A] text-white hover:bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
