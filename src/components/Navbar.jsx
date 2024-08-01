import React from "react";
import {Menu, X} from "lucide-react"
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen)
        }

        const NavItemClick = (e, href) => {
            e.preventDefault()
            const targetElement = document.querySelector(href)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" })
            }
        }

        const ReturnHome = () => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg
         borderb-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={ReturnHome}>
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="hover:text-orange-600 transition duration-200">
                                <a href={item.href} onClick={(e) => NavItemClick(e, item.href)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-10 items-center">
                        <a href="#" className="bg-gradient-to-r from-orange-500
                         to-orange-800 py-2 px-3 rounded-md border
                             border-transparent hover:border-orange-500 hover:bg-none">
                            Cadastrar
                    </a>
                    <a href="#" className="py-2 px-7 border border-orange-500 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200">
                            Entrar
                        </a>
                    </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-30px p-14
                     flex flex-col justify-center items-end lg:hidden border border-orange-700 rounded-md">
                        <div className="flex flex-col space-y-4 mb-6">
                            <a href="#" className="py-2 px-6 border border-orange-500 rounded-md 
                            hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 transition duration-200">
                                Entrar
                                </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 border
                             border-transparent hover:border-orange-500 hover:bg-none">
                                Cadastrar
                                </a>
                        </div>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 hover:text-orange-600 transition duration-200">
                                    <a href={item.href} onClick={(e) => NavItemClick(e, item.href)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        
                     </div>
                )}
            </div>
         </nav>
    );
};

export default Navbar