'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isDashboardRoute = pathname.startsWith("/dashboard");

  if (isDashboardRoute) {
    return null; // Do not render the header if on a dashboard route
  }

  return (
    <>
      <nav className="w-screen shadow-md z-50 bg-background fixed top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-6  lg:px-8 z-50">
          <div className=" relative flex h-20 items-center justify-between">
            <div className="flex flex-1  items-center justify-between md:items-stretch md:justify-between">
              {/* <!-- Logo --> */}
              <Link className="flex flex-shrink-0 items-start" href="/">
                <div>
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="w-24 h-12"
                  />
                </div>
              </Link>
              {/* <!-- Desktop Menu Hidden below md screens --> */}
              <div className="hidden md:ml-6  md:text-sm items-center md:flex">
                <div className="flex space-x-2 items-center">

                  <Link
                    href='/'
                    className={`${
                      pathname === '/' ? 'text-primary' : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Home
                  </Link>
                  <Link
                    href='/about'
                    className={`${
                      pathname === '/about'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md py-2`}
                  >
                    About
                  </Link>
                  <Link
                    href='/find-influencer'
                    className={`${
                      pathname === '/find-influencer'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Find Influencer
                  </Link>
                  <Link
                    href='/post-need'
                    className={`${
                      pathname === '/post-need'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Post a Need
                  </Link>
                  <Link
                    href='/pricing'
                    className={`${
                      pathname === '/pricing'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Pricing
                  </Link>
                  <Link
                    href='/services'
                    className={`${
                      pathname === '/services'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Services
                  </Link>
                  <Link
                    href='/e-magazine'
                    className={`${
                      pathname === '/e-magazine'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    E-Magazine
                  </Link>
                  <Link
                    href='/contact-us'
                    className={`${
                      pathname === '/contact-us'
                        ? 'text-primary'
                        : 'text-textPrimary'
                    } hover:text-primary rounded-md px-3 py-2`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center gap-4' onClick={openModal}>
                <Button btnStyle='btn-primary' onClick={openModal}>
                  Join
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
              {!isMobileMenuOpen ? (
                <MdMenu
                  size={24}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              ) : (
                <MdClose
                  size={24}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-0 right-0 bg-background transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } md:hidden`}
        >
          <div className='flex flex-col space-y-1 px-2 pb-3 pt-2'>
            <Link
              href='/'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Home
            </Link>
            <Link
              href='/about'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/about' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              About
            </Link>
            <Link
              href='/find-influencer'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/find-influencer'
                  ? 'text-primary'
                  : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Find Influencer
            </Link>
            <Link
              href='/post-need'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/post-need' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Post a Need
            </Link>
            <Link
              href='/pricing'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/pricing' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Pricing
            </Link>
            <Link
              href='/services'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/services' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Services
            </Link>
            <Link
              href='/e-magazine'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/e-magazine' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              E-Magazine
            </Link>
            <Link
              href='/contact-us'
              onClick={closeMobileMenu}
              className={`${
                pathname === '/contact-us' ? 'text-primary' : 'text-textPrimary'
              } hover:text-primary rounded-md px-3 py-2`}
            >
              Contact Us
            </Link>

            <div className='block md:ml-6 md:hidden'>
              <div className='flex items-center justify-evenly'>
                <Button btnStyle='btn-primary'>Join As Brand</Button>
                <Button btnStyle='btn-secondary'>Join As Creator</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-bgSecondary rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Join Us</h2>
              <button
                onClick={closeModal}
                className="text-gray-200 hover:text-primary text-2xl focus:outline-none"

              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <p className="mt-2 text-sm text-gray-300">
              Choose how youd like to join our platform.

            </p>

            <div className='flex gap-4 mt-6'>
              <Button btnStyle='btn-primary'>Join As Brand</Button>
              <Button btnStyle='btn-secondary'>Join As Creator</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
