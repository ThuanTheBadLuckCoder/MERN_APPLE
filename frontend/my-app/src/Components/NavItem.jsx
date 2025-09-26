import { useState } from 'react'

function NavItem({ 
  to, 
  icon, 
  label, 
  children, 
  trigger = 'hover', // 'hover' or 'click'
  ...props 
}) {
  const [open, setOpen] = useState(false)

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
      className="relative"
      {...hoverProps}
    >
      {to ? (
        <a href={to} {...clickProps} {...props}>
          {icon && <img src={icon} alt={label} />}
          {label}
        </a>
      ) : (
        <button type="button" {...clickProps} {...props}>
          {icon && <img src={icon} alt={label} />}
          {label}
        </button>
      )}
      {open && children && (
        <div className="absolute left-0 top-full z-50">
          {children}
        </div>
      )}
    </li>
  )
}

export default NavItem