import { TwitterFollowCard } from './components/TwitterFollowCard'
import USER from './User'

export const App = () => {
  const format = (userName) => `@${userName}`

  const letterCapitalized = text => text.charAt(0).toUpperCase() + text.slice(1)

  return (
    <div className='container-app'>
      <h1 className='container-app-text'>A quién seguir</h1>
      <section className='twitter-card-container'>
        {USER.map(({name, userName}, index) => {
          return (
            <TwitterFollowCard
              userName={userName}
              formatUserName={format}
              key={ index }
            >
              {letterCapitalized(name)}
            </TwitterFollowCard>
          )
        })}
      </section>
    </div>
  )
}