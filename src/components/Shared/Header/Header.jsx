import React from "react";
import { Continer } from "./../../index.js";
import { NavLink } from "react-router-dom";
import loginStore from "../../../features/LoginStore";

const Header = () => {

  const userLoginStatus = loginStore((state) => state.loginStatus);

  // navbar items
  const navItems = [
    {
      name: "Login",
      slug: "/login",
      show: !userLoginStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      show: !userLoginStatus,
    },
  ];

  return (
    <nav className="w-full bg-[#0b2a3a] text-white shadow">
      <Continer>
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <div className="text-green-400 font-bold text-lg">
            PassOP/
          </div>

          {/* Nav Links */}
          <ul className="flex items-center gap-6">

            {navItems.map(
              (item) =>
                item.show && (
                  <li key={item.name}>
                    <NavLink
                      to={item.slug}
                      className={({ isActive }) =>
                        `px-3 py-1 rounded transition ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "hover:bg-green-600 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}

            {/* GitHub Button */}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-600"
              >
                GitHub
              </a>
            </li>

          </ul>

        </div>
      </Continer>
    </nav>
  );
};

export default Header;