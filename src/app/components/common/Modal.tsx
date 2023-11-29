import React from 'react'

interface ModalProps {
  readonly id : string
  readonly title : string
  readonly body : string
  readonly footer : string
}

function Modal({id, title, body, footer} : ModalProps) : React.JSX.Element {
  // if (footer && footer.length > 0)
  return (
    <dialog id={id} className='modal'>
      <div className='modal-box'>

        <h3 className='font-bold text-lg'>{title}</h3>

        <p className='py-4'>{body}</p>
        
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn'>{footer}</button>
          </form>
        </div>
        
      </div>
    </dialog>
  )
  // else
  // 	return (
  // 		<dialog id={id} className='modal'>
  // 			<div className='modal-box'>
  // 				<h3 className='font-bold text-lg'>{title}</h3>
  // 				<p className='py-4'>{body}</p>
  // 			</div>
        
  // 			<form method='dialog' className='modal-backdrop'>
  // 				<button>This should not be rendered.</button>
  // 			</form>
  // 		</dialog>
  // 	)
}

export default Modal
