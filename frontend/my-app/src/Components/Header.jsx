import { useState } from 'react'
import { Link } from 'react-router-dom'
import Apple from '../assets/apple.svg'
import SearchIcon from '../assets/search.svg'
import BagIcon from '../assets/bag.svg'
import NavButton from '../assets/navbutton.svg'
import Search from './Search'
import Bag from './Bag'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)

  // Set your header heights here (adjust if your header is taller/shorter)
  const mobileHeaderHeight = 56 // px
  const desktopHeaderHeight = 44 // px

  return (
    <>
      <header className="bg-stone-800 text-white flex justify-center relative">
        <nav className="w-full max-w-5xl bg-stone-800 text-xs relative lg:px-[22px] px-[2px]">
          {/* Mobile header */}
          <div className="flex items-center justify-between lg:hidden" style={{ height: `${mobileHeaderHeight}px` }}>
            <Link to="/">
              <img
                src={Apple}
                alt="Apple Logo"
                style={{ width: 48, height: 48, filter: 'invert(1)' }}
              />
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Open search"
                className="focus:outline-none"
              >
                <img
                  src={SearchIcon}
                  alt="Search"
                  style={{ width: 48, height: 48, filter: 'invert(1)' }}
                />
              </button>
              {/* Mobile Bag icon */}
              <Link to="#" onClick={() => {
                setBagOpen(!bagOpen)
                setSearchOpen(false)
                setMenuOpen(false)
              }}>
                <img
                  src={BagIcon}
                  alt="Bag"
                  style={{ width: 48, height: 48, filter: 'invert(1)' }}
                />
              </Link>
              <button
                className="text-white focus:outline-none w-[48px] h-[48px]"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  style={{ display: 'block', margin: 'auto', filter: 'invert(0)' }}
                  className={menuOpen ? 'menu-icon open' : 'menu-icon'}
                >
                  <line
                    x1="3" y1="5" x2="15" y2="5"
                    className="menu-line menu-line-top"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3" y1="13" x2="15" y2="13"
                    className="menu-line menu-line-bottom"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Desktop menu */}
          <ul className="hidden lg:flex justify-between items-center tracking-[-0.01em]" style={{ height: `${desktopHeaderHeight}px` }}>
            <li className="opacity-80 hover:opacity-100 h-fit">
              <Link to="/">
                <img
                  src={Apple}
                  alt="Apple Logo"
                  style={{ width: 30, height: 44, filter: 'invert(1)' }}
                />
              </Link>
            </li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/store">Cửa Hàng</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/mac">Mac</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/ipad">iPad</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/iphone">iPhone</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/watch">Watch</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/airpods">AirPods</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/tvhome">TV & Nhà</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/services">Giải Trí</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/accessories">Phụ Kiện</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit"><Link to="/support">Hỗ Trợ</Link></li>
            <li className="opacity-80 hover:opacity-100 h-fit">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Open search"
                className="focus:outline-none"
              >
                <img
                  src={SearchIcon}
                  alt="Search"
                  style={{ width: 30, height: 44, filter: 'invert(1)' }}
                />
              </button>
            </li>
            {/* Desktop Bag icon */}
            <li className="opacity-80 hover:opacity-100 h-fit">
              <button
                onClick={() => {
                  setBagOpen(!bagOpen)
                  setSearchOpen(false)
                  setMenuOpen(false)
                }}
                aria-label="Open bag"
                className="focus:outline-none"
              >
                <img
                  src={BagIcon}
                  alt="Bag"
                  style={{ width: 30, height: 44, filter: 'invert(1)' }}
                />
              </button>
            </li>
          </ul>
          {/* Mobile menu overlay */}
          {menuOpen && (
            <ul className="flex flex-col lg:hidden bg-stone-800 text-white absolute left-0 w-full z-50 shadow-lg animate-fade-in text-2xl pb-24">
              <li className="py-3 pl-12 font-bold"><Link to="/store" onClick={() => setMenuOpen(false)}>Cửa Hàng</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/mac" onClick={() => setMenuOpen(false)}>Mac</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/ipad" onClick={() => setMenuOpen(false)}>iPad</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/iphone" onClick={() => setMenuOpen(false)}>iPhone</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/watch" onClick={() => setMenuOpen(false)}>Watch</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/airpods" onClick={() => setMenuOpen(false)}>AirPods</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/tvhome" onClick={() => setMenuOpen(false)}>TV & Nhà</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/services" onClick={() => setMenuOpen(false)}>Giải Trí</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/accessories" onClick={() => setMenuOpen(false)}>Phụ Kiện</Link></li>
              <li className="py-3 pl-12 font-bold"><Link to="/support" onClick={() => setMenuOpen(false)}>Hỗ Trợ</Link></li>
            </ul>
          )}
        </nav>
      </header>
      {/* Search dropdown (full width, right below header, no gap) */}
      {searchOpen && (
        <>
          {/* Mobile */}
          <div
            className="fixed left-0 right-0 z-50 bg-stone-900 animate-fade-in lg:hidden w-full"
            style={{ top: `${mobileHeaderHeight}px` }}
          >
            <Search />
          </div>
          {/* Desktop */}
          <div
            className="hidden lg:block fixed left-0 right-0 z-50 bg-stone-900 animate-fade-in w-full"
            style={{ top: `${desktopHeaderHeight}px` }}
          >
            <Search />
          </div>
        </>
      )}
      {bagOpen && (
        <>
          {/* Mobile */}
          <div
            className="fixed left-0 right-0 z-50 bg-stone-900 animate-fade-in lg:hidden w-full"
            style={{ top: `${mobileHeaderHeight}px` }}
          >
            <Bag />
          </div>
          {/* Desktop */}
          <div
            className="hidden lg:block fixed left-0 right-0 z-50 bg-stone-900 animate-fade-in w-full"
            style={{ top: `${desktopHeaderHeight}px` }}
          >
            <Bag />
          </div>
        </>
      )}
    </>
  )
}

export default Header