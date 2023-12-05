import React from "react"

interface SubSidebarItemProps {
  readonly label : string
  readonly onClick : () => void
}

const SubSidebarItem : React.FC<SubSidebarItemProps> = ({ label }) => (
  <div className='flex items-center space-x-2'>
    <span className='text-lg whitespace-nowrap'>{label}</span>
  </div>
)

interface SubSidebarProps {
  items : SubSidebarItemProps[]
  position : number | string
  shown : boolean
  onMouseEnter? : () => void
  onMouseLeave? : () => void
}

const SubSidebar : React.FC<SubSidebarProps> = ({ items, position, shown, onMouseEnter, onMouseLeave }) => {
  const duration = 200
  const width = 48
  
  return (
    <div className={`absolute top-0 left-${position} h-screen bg-pink-150 ease-in-out duration-${duration} w-${shown ? width : 0}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        shown && items.map((item, index) => (
          <div key={index} className=''>
            <button className='btn btn-block btn-ghost text-left hover:bg-pink-200'
                onClick={item.onClick}>
              <div className='flex-grow'>
                <SubSidebarItem label={item.label} onClick={item.onClick}/>
              </div>
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default SubSidebar
