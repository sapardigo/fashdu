import { MdMenu, MdAccountCircle } from "react-icons/md";
import "@/components/NavBar.css";

export default function NavBar() {
    return (

<body>
  <div className="menu">
    {/* <!-- Logo --> */}
    <div className="logo">FASHDU</div>

    {/* <!-- Search Bar --> */}
    <div className="search">
      <input type="text" placeholder="Search..." />
    </div>

    {/* <!-- User Menu (icon only) --> */}
    <div className="user-menu">
       <MdAccountCircle size={28} />
    </div>

    {/* <!-- Hamburger Toggle --> */}
    <input type="checkbox" id="menu" />
    <label htmlFor="menu" className="hamburger"><MdMenu size={28} /></label>

    {/* <!-- Navigation Items --> */}
    <div className="items">
      <a href="#" className="item">Home</a>
      <a href="#" className="item">About</a>
      <a href="#" className="item">Features</a>
      <a href="#" className="item">Profile</a>
      
    </div>
  </div>
</body>

    )
};




