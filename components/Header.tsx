
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../App';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: 'ฟาร์มของเรา', path: '/about' },
        { name: 'สินค้าของเรา', path: '/products' },
        { name: 'วิธีการปลูก', path: '/how-to' },
        { name: 'โปรโมชั่น', path: '/promotions' },
        { name: 'ติดต่อเรา', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-3 text-[#111811] dark:text-white">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                        <span className="material-symbols-outlined font-bold">eco</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight">Hydro<span className="text-primary">Farm</span></h2>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-primary' : 'hover:text-primary text-slate-600 dark:text-slate-300'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link to="/cart" className="relative p-2 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-background-dark text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </Link>
                    <Link to="/products" className="hidden sm:flex min-w-[110px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        เลือกซื้อเลย
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-slate-900 dark:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-2 w-full flex items-center justify-center bg-primary text-background-dark font-bold py-3 rounded-xl"
                    >
                        เลือกซื้อเลย
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
