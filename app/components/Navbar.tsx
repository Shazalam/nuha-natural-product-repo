'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Static data
    const user = {
        name: "John Doe",
        role: "customer",
        email: "john@example.com"
    };

    const cartItemsCount = 3;
    const isLoggedIn = false;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/account", label: "Tracking" },
        { href: "/about", label: "About" }
    ];

    const isActiveLink = (href: string) => pathname === href;

    return (
        <nav className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'shadow-lg border-b border-gray-200' : 'border-b border-gray-100'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                                src="/ship-icon.png"
                                alt="Nuha Shipping Logo"
                                width={24}
                                height={24}
                                className="filter brightness-0 invert"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900 leading-tight">Nuha</span>
                            <span className="text-xs text-gray-600 leading-tight font-medium">Global Shipping</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                                    isActiveLink(item.href)
                                        ? 'text-green-700 font-semibold'
                                        : 'text-gray-600 hover:text-green-700'
                                }`}
                            >
                                {item.label}
                                <div className={`absolute bottom-0 left-3 right-3 h-0.5 bg-green-600 transform origin-left transition-transform duration-200 ${
                                    isActiveLink(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></div>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center space-x-3">
                        {/* Track Button */}
                        <Link
                            href="/tracking"
                            className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
                        >
                            <span className="text-sm">Track</span>
                        </Link>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative p-2.5 text-gray-600 hover:text-green-700 transition-colors rounded-lg hover:bg-gray-50 group"
                        >
                            <span className="text-lg">🛒</span>
                            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm">
                                {cartItemsCount}
                            </span>
                        </Link>

                        {/* Auth Section */}
                        {isLoggedIn ? (
                            <div className="hidden sm:flex items-center space-x-3">
                                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm">
                                        {user.name?.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 leading-none">{user.name}</span>
                                        <span className="text-xs text-gray-500 leading-none">{user.role}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden sm:flex items-center space-x-3">
                                <Link 
                                    href="/auth/login"
                                    className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                                        pathname === '/auth/login'
                                            ? 'text-green-700 bg-green-50 border-green-200 shadow-sm'
                                            : 'text-gray-600 border-gray-300 hover:text-green-700 hover:border-green-300 hover:bg-green-50'
                                    }`}
                                >
                                    Login
                                </Link>
                                <Link 
                                    href="/auth/register"
                                    className="bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
                                >
                                    Register
                                </Link>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg">
                        <div className="py-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-4 py-3 mx-2 rounded-lg transition-all duration-200 font-medium ${
                                        isActiveLink(item.href)
                                            ? 'text-green-700 bg-green-50 border border-green-200'
                                            : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                            {/* Mobile Track Button */}
                            <div className="px-4 pt-2">
                                <Link
                                    href="/tracking"
                                    className="block text-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Track Your Shipment
                                </Link>
                            </div>

                            {/* Mobile Auth Buttons */}
                            {!isLoggedIn && (
                                <div className="flex space-x-3 px-4 pt-4 border-t border-gray-200">
                                    <Link 
                                        href="/auth/login"
                                        className="flex-1 text-center px-4 py-3 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:text-green-700 hover:border-green-300 transition-all duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        href="/auth/register"
                                        className="flex-1 text-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}