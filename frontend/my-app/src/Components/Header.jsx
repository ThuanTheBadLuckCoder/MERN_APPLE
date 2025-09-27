import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Apple from '../assets/apple.svg'
import SearchIcon from '../assets/search.svg'
import BagIcon from '../assets/bag.svg'
import NavItem from './NavItem'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  // Set your header heights here (adjust if your header is taller/shorter)
  const mobileHeaderHeight = 56 // px
  const desktopHeaderHeight = 44 // px

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`bg-stone-900 text-white flex justify-center relative z-50 transition-opacity duration-300 sticky top-0 ${isTop ? 'opacity-100' : 'opacity-100'}`}
      >
        <nav className="w-full mx-auto text-xs relative flex flex-col items-center px-2 mx-auto max-w-[1024px]">
          {/* Mobile header */}
          <div className="mobile-nav flex items-center justify-between h-[56px] w-full">
            <Link to="/">
              <img
                src={Apple}
                alt="Apple Logo"
                className="w-8 h-8"
                style={{ filter: 'invert(1)' }}
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
                  className="w-8 h-8"
                  style={{ filter: 'invert(1)' }}
                />
              </button>
              <Link to="#" onClick={() => {
                setBagOpen(!bagOpen)
                setSearchOpen(false)
                setMenuOpen(false)
              }}>
                <img
                  src={BagIcon}
                  alt="Bag"
                  className="w-8 h-8"
                  style={{ filter: 'invert(1)' }}
                />
              </Link>
              <button
                className="text-white focus:outline-none w-12 h-12"
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
          <ul className="desktop-nav hidden lg:flex justify-between items-center w-full text-gray-300" style={{ minHeight: '44px' }}>
            <NavItem to="/" icon={Apple} label="" className="invert-[1]"/>
            <NavItem to="/store" label="Cửa Hàng" />
            <NavItem to="/mac" label="Mac">
              <div className="bg-stone-900 text-white px-8 py-8 shadow-xl">
                <div className="max-w-[1400px] mx-auto flex flex-row justify-between">
                  {/* Column 1 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Khám Phá Mac</div>
                    <a href="/mac" className="block font-bold text-2xl mb-2 hover:underline">Khám Phá Tất Cả Mac</a>
                    <a href="/macbook-air" className="block font-bold text-2xl mb-2 hover:underline">MacBook Air</a>
                    <a href="/macbook-pro" className="block font-bold text-2xl mb-2 hover:underline">MacBook Pro</a>
                    <a href="/imac" className="block font-bold text-2xl mb-2 hover:underline">iMac</a>
                    <a href="/mac-mini" className="block font-bold text-2xl mb-2 hover:underline">Mac mini</a>
                    <a href="/mac-studio" className="block font-bold text-2xl mb-2 hover:underline">Mac Studio</a>
                    <a href="/mac-pro" className="block font-bold text-2xl mb-2 hover:underline">Mac Pro</a>
                    <a href="/man-hinh" className="block font-bold text-2xl mb-2 hover:underline">Màn Hình</a>
                    <a href="/so-sanh-mac" className="block font-semibold text-base mt-4 hover:underline">So Sánh Mac</a>
                    <a href="/chuyen-tu-pc" className="block font-semibold text-base hover:underline">Chuyển Từ PC Sang Mac</a>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Mua Mac</div>
                    <a href="/mua-mac" className="block font-semibold hover:underline">Mua Mac</a>
                    <a href="/phu-kien-mac" className="block font-semibold hover:underline">Phụ Kiện Mac</a>
                    <a href="/apple-trade-in" className="block font-semibold hover:underline">Apple Trade In</a>
                    <a href="/tai-chinh" className="block font-semibold hover:underline">Tài Chính</a>
                    <a href="/uu-dai-sinh-vien" className="block font-semibold hover:underline">Ưu Đãi Dành Cho Sinh Viên Đại Học</a>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Tìm Hiểu Thêm Về Mac</div>
                    <a href="/ho-tro-mac" className="block font-semibold hover:underline">Hỗ Trợ Mac</a>
                    <a href="/applecare" className="block font-semibold hover:underline">AppleCare</a>
                    <a href="/macos-tahoe" className="block font-semibold hover:underline">macOS Tahoe</a>
                    <a href="/apple-intelligence" className="block font-semibold hover:underline">Apple Intelligence</a>
                    <a href="/ung-dung-apple" className="block font-semibold hover:underline">Các Ứng Dụng Của Apple</a>
                    <a href="/tinh-lien-tuc" className="block font-semibold hover:underline">Tính Liên Tục</a>
                    <a href="/icloud" className="block font-semibold hover:underline">iCloud+</a>
                    <a href="/mac-doanh-nghiep" className="block font-semibold hover:underline">Mac Cho Doanh Nghiệp</a>
                    <a href="/giao-duc" className="block font-semibold hover:underline">Giáo Dục</a>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem to="/ipad" label="iPad">
              <div className="bg-stone-900 text-white px-8 py-8 shadow-xl">
                <div className="max-w-[1400px] mx-auto flex flex-row justify-between">
                  {/* Column 1 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Khám Phá Mac</div>
                    <a href="/mac" className="block font-bold text-2xl mb-2 hover:underline">Khám Phá Tất Cả iPad</a>
                    <a href="/macbook-air" className="block font-bold text-2xl mb-2 hover:underline">iPad Air</a>
                    <a href="/iPadbook-pro" className="block font-bold text-2xl mb-2 hover:underline">iPad Pro</a>
                    <a href="/iiPad" className="block font-bold text-2xl mb-2 hover:underline">iPad</a>
                    <a href="/mac-mini" className="block font-bold text-2xl mb-2 hover:underline">iPad mini</a>
                    <a href="/mac-studio" className="block font-bold text-2xl mb-2 hover:underline">Apple Pencil</a>
                    <a href="/mac-pro" className="block font-bold text-2xl mb-2 hover:underline">Bàn Phím</a>
                    <a href="/man-hinh" className="block font-bold text-2xl mb-2 hover:underline">Màn Hình</a>
                    <a href="/so-sanh-mac" className="block font-semibold text-base mt-4 hover:underline">So Sánh iPad</a>
                    <a href="/chuyen-tu-pc" className="block font-semibold text-base hover:underline">Tại sao nên dùng iPad</a>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Mua iPad</div>
                    <a href="/mua-mac" className="block font-semibold hover:underline">Mua iPad</a>
                    <a href="/phu-kien-mac" className="block font-semibold hover:underline">Phụ Kiện iPad</a>
                    <a href="/apple-trade-in" className="block font-semibold hover:underline">Apple Trade In</a>
                    <a href="/tai-chinh" className="block font-semibold hover:underline">Tài Chính</a>
                    <a href="/uu-dai-sinh-vien" className="block font-semibold hover:underline">Ưu Đãi Dành Cho Sinh Viên Đại Học</a>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Tìm Hiểu Thêm Về iPad</div>
                    <a href="/ho-tro-mac" className="block font-semibold hover:underline">Hỗ Trợ iPad</a>
                    <a href="/applecare" className="block font-semibold hover:underline">AppleCare</a>
                    <a href="/macos-tahoe" className="block font-semibold hover:underline">iPadOS 26</a>
                    <a href="/apple-intelligence" className="block font-semibold hover:underline">Apple Intelligence</a>
                    <a href="/ung-dung-apple" className="block font-semibold hover:underline">Các Ứng Dụng Của Apple</a>
                    <a href="/icloud" className="block font-semibold hover:underline">iCloud+</a>
                    <a href="/giao-duc" className="block font-semibold hover:underline">Giáo Dục</a>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem to="/iphone" label="iPhone">
              <div className="bg-white text-black p-4 shadow-lg">
                <div className="max-w-[1400px] mx-auto">
                  <a href="/iphone/15" className="block py-1 px-2 hover:bg-gray-100 rounded">iPhone 15</a>
                  <a href="/iphone/14" className="block py-1 px-2 hover:bg-gray-100 rounded">iPhone 14</a>
                </div>
              </div>
            </NavItem>
            <NavItem to="/watch" label="Watch" />
            <NavItem to="/airpods" label="AirPods" />
            <NavItem to="/tvhome" label="TV & Nhà" />
            <NavItem to="/services" label="Giải Trí" />
            <NavItem to="/accessories" label="Phụ Kiện" />
            <NavItem to="/support" label="Hỗ Trợ" />
            <NavItem to="/" icon={SearchIcon} label="" className="invert-[1]"/>
            <NavItem to="/" icon={BagIcon} label="" className="invert-[1]"/>
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
    </>
  )
}

export default Header