import { useState } from 'react'

function NavItem({ 
  to, 
  icon, 
  label, 
  children, 
  trigger = 'hover', // 'hover' or 'click'
  className = '',
  ...props 
}) {
  const [open, setOpen] = useState(false);

  // For hover menus
  const hoverProps = trigger === 'hover' ? {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
  } : {}

  // For click menus
  const clickProps = trigger === 'click' ? {
    onClick: () => setOpen(o => !o),
  } : {}

  return (
    <li 
      className="relative hover:text-gray-100"
      {...hoverProps}
    >
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
        <div className="fixed left-0 w-screen z-50" style={{ top: '44px' }}>
          {children}
        </div>
      )}
    </li>
  )
}

export default NavItem