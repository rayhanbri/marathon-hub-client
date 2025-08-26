import { Link, Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Sidebar from "../DashBoard/Sidebar"
import { Helmet } from '@dr.pogodin/react-helmet';
import Footer from '../Header/Footer';


const DashBoardLayout = () => {

  const links = <>
    <li> <Link to="add-marathon" className="block text-blue-600 hover:underline">Add Marathon</Link></li>
    <li><Link to="my-marathons" className="block text-blue-600 hover:underline">My Marathon List</Link></li>
    <li><Link to="apply-list" className="block text-blue-600 hover:underline">My Apply List</Link></li>
  </>


  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* Top Navbar */}
      <Navbar />

      {/* board section here  */}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
         <div>
             <div className="flex-none navbar-start lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            
            </div>
         </div>
              <Link to='/' className="mx-2 font-bold  px-2">Marathon Hub</Link>
            <div className="hidden navbar-center  lg:block">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                {
                  links 
                }
              </ul>
            </div>
          </div>
          {/* Page content here */}
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
           {
            links
           }
          </ul>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashBoardLayout;