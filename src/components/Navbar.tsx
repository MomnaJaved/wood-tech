import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About US", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow py-2 px-4 flex justify-between items-center h-22">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center px-10">
        <img
          src="./src/assets/header/logo.webp"
          alt="Logo"
          className="w-24 h-auto"
        />
      </Link>

      {/* Nav items in the center */}
      <div className="flex gap-8 text-[16px] font-comicsans">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative group ${
              location.pathname === item.path
                ? "text-[#db9f27]"
                : "text-black hover:text-[#db9f27]"
            }`}
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#db9f27] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Cart on the right */}
      <Link to="/cart" className="flex items-center px-10 py-4">
        <img
          src="./src/assets/header/cart.png"
          alt="Cart"
          className="w-6 h-auto"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
