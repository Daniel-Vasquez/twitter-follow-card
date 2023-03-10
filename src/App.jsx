import { useState, useEffect } from 'react';

import { TwitterFollowCard } from './components/TwitterFollowCard'
import IsLoading from './components/IsLoading'
import USERS from './User'

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const format = (userName) => `@${userName}`

  const letterCapitalized = text => text.charAt(0).toUpperCase() + text.slice(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-app'>
      <h1 className='container-app-text'>A quién seguir</h1>
      <section className='twitter-card-container'>
        {
          isLoading
            ? <IsLoading />
            : <>
                {USERS.map(({ name, userName, isFollowing }, index) => (
                <TwitterFollowCard
                  key={ index }
                  userName={userName}
                  formatUserName={format}
                  initialIsFollowing={ isFollowing }
                >
                  {letterCapitalized(name)}
                </TwitterFollowCard>
                ))}
              </>
        }
      </section>
    </div>
  )
}