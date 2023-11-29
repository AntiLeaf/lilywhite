import React from 'react'

function onClickHide(id : string) : React.MouseEventHandler<HTMLButtonElement> {
  return (event) => {
    event.preventDefault()
    const hero = document.getElementById(id)
    if (hero)
      hero.classList.add('hidden')
  }
}

interface HeroProps {
  readonly id : string
  readonly body : React.JSX.Element
  readonly button_text? : string
}

function CenteredHero({ id, body, button_text } : HeroProps) : React.JSX.Element {
  if (button_text && button_text.length > 0)
    return (
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            {body}
            <button className='btn btn-primary' onClick={() => onClickHide(id)}>{button_text}
              {button_text}
            </button>
          </div>
        </div>
      </div>
    )
  else // TODO: Click anywhere to hide the hero.
    return (
      <div className='hero min-h-screen bg-base-200' onClick={() => onClickHide(id)}>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            {body}
          </div>
        </div>
      </div>
    )
}

export default CenteredHero
