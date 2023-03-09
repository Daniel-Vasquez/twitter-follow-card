import { useState } from 'react';
import './styles/TwitterFollowCard.css'


export const TwitterFollowCard = ({ children, userName, formatUserName }) => {
  const [isFollowing, setIsFollowing] = useState(false)

  const textBtn = isFollowing ? 'Siguiendo' : 'Seguir'
  
  const buttonClassName = isFollowing 
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button'
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img
          className='tw-follow-card-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='lion'
        />
        <div className='tw-follow-card-info'>
          <strong>
            {children}
          </strong>
          <span
            className='tw-follow-card-infoUserName'
          >
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={ handleClick }>
          {textBtn}
        </button>
      </aside> 
    </article>
  )
}