import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import virtual from "../assets/virtual.svg";
import alterR from "../assets/AlterR.svg"
import { navItems } from "../constants";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { user, logout } = useUser();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const NavItemClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ReturnHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLoginForm = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const openRegisterForm = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const closeForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 py-3 border-b border-neutral-700/80 ${mobileDrawerOpen ? 'bg-gray-800' : 'backdrop-blur-lg'}`}>
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={ReturnHome}>
              <img className="h-12 w-10 mr-2 mb-2" src={alterR} alt="logo" />
              <span className="text-xl tracking-tight text-white">AlterR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index} className="hover:text-orange-600 transition duration-200">
                  <a href={item.href} onClick={(e) => NavItemClick(e, item.href)} className="text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-10 items-center">
              {user && user.Nome ? (
                <div className="flex items-center space-x-4">
                  <span className="text-lg text-white">{user.Nome}</span>
                  <button
                    onClick={logout}
                    className="py-2 px-4 border border-orange-500 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200 text-white"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={openRegisterForm}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md border border-transparent hover:border-orange-500 hover:bg-none text-white"
                  >
                    Cadastrar
                  </button>
                  <button
                    onClick={openLoginForm}
                    className="py-2 px-7 border border-orange-500 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200 text-white"
                  >
                    Entrar
                  </button>
                </>
              )}
            </div>
            <div className="block lg:hidden">
              <button
                className="p-2 text-white"
                onClick={toggleNavbar}
              >
                {mobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          <div
            className={`lg:hidden fixed inset-0 bg-gray-950/90 z-50 p-4 transition-transform transform ${mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col space-y-8 items-center justify-center h-full relative">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={toggleNavbar}
              >
                <X size={24} />
              </button>
              <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={ReturnHome}>
                <img className="h-full w-10 mr-2 mb-4" src={alterR} alt="logo" />
                <span className="text-xl tracking-tight text-white">AlterR</span>
              </div>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    NavItemClick(e, item.href);
                    setMobileDrawerOpen(false);
                  }}
                  className="text-white text-lg"
                >
                  {item.label}
                </a>
              ))}
              {user && user.Nome ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileDrawerOpen(false);
                  }}
                  className="py-2 px-4 border border-orange-500 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200 text-white"
                >
                  Sair
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      openRegisterForm();
                      setMobileDrawerOpen(false);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md border border-transparent hover:border-orange-500 hover:bg-none text-white"
                  >
                    Cadastrar
                  </button>
                  <button
                    onClick={() => {
                      openLoginForm();
                      setMobileDrawerOpen(false);
                    }}
                    className="py-2 px-7 border border-orange-500 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200 text-white"
                  >
                    Entrar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showLoginForm && <LoginForm closeForm={closeForm} />}
      {showRegisterForm && <RegisterForm closeForm={closeForm} />}
    </>
  );
};

export default Navbar;
