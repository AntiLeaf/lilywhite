import React, { Ref, useState } from 'react'

interface SidebarItemProps {
  readonly icon : React.JSX.Element
  readonly label : string
  onClick? : () => void
  showText? : boolean
  onMouseEnter? : () => void
  onMouseLeave? : () => void
}

const SidebarItem : React.FC<SidebarItemProps> = ({ icon, label, showText, onMouseEnter, onMouseLeave }) => (
  <div className='flex items-center space-x-2'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className='text-2xl'>{icon}</div>
    { showText && <span className='text-lg whitespace-nowrap'>{label}</span>}
  </div>
)

interface SidebarProps {
  items : SidebarItemProps[]
}

const Sidebar : React.FC<SidebarProps> = ({ items }) => {
  const duration = 200
  const width = 48

  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className={`absolute top-0 left-0 h-screen bg-pink-100 ease-in-out duration-${duration} w-${expanded ? width : 16}`}
      onMouseEnter={() => {
        setExpanded(true)
      }}
      onMouseLeave={() => {
        setExpanded(false)
      }}
    >
      {
        items.map((item, index) => (
          <div key={index} className=''>
            <button className='btn btn-block btn-ghost text-left hover:bg-pink-200'
                onClick={item.onClick}>
              <div className='flex-grow'>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  onClick={item.onClick}
                  showText={expanded}
                  onMouseEnter={item.onMouseEnter}
                  onMouseLeave={item.onMouseLeave}
                />
              </div>
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar
