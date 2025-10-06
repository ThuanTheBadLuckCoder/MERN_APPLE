import { useState, useEffect, useRef } from 'react'

function NavItem({ 
  to, 
  icon, 
  label, 
  children, 
  trigger = 'hover',
  className = '',
  onSubMenu,
  ...props 
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const submenuRef = useRef(null)

  useEffect(() => {
    if (typeof onSubMenu === 'function') {
      onSubMenu(open)
    }
  }, [open, onSubMenu])

  useEffect(() => {
    if (trigger !== 'hover') return
    function handleMouseMove(e) {
      if (!open) return
      const wrapper = wrapperRef.current
      const submenu = submenuRef.current
      // Check if mouse is inside either the menu item or the submenu
      if (
        wrapper &&
        submenu &&
        !wrapper.contains(e.target) &&
        !submenu.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [open, trigger])

  const hoverProps = trigger === 'hover' ? {
    onMouseEnter: () => setOpen(true),
    // Don't close on mouse leave, let document mousemove handle it
  } : {}

  const clickProps = trigger === 'click' ? {
    onClick: () => setOpen(o => !o),
  } : {}

  return (
    <li className="relative hover:text-gray-100">
      <div ref={wrapperRef} {...hoverProps}>
        {to ? (
          <a href={to} className={className} {...clickProps} {...props}>
            {icon && <img src={icon} alt={label} />}
            {label}
          </a>
        ) : (
          <button type="button" className={className} {...clickProps} {...props}>
            {icon && <img src={icon} alt={label} />}
            {label}
          </button>
        )}
        {open && children && (
          <div
            ref={submenuRef}
            className="fixed left-0 w-screen z-50"
            // Add mouseEnter/mouseLeave to keep submenu open
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {children}
          </div>
        )}
      </div>
    </li>
  )
}

export default NavItem