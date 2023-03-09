import { TwitterFollowCard } from './components/TwitterFollowCard'

export const App = () => {
  const format = (userName) => `@${userName}`

  return (
    <div className='container-app'>
      <h1 className='container-app-text'>A quién seguir</h1>
      <section className='twitter-card-container'>
        <TwitterFollowCard
          userName="Daniel"
          formatUserName={format}
        >
          Daniel
        </TwitterFollowCard>
        <TwitterFollowCard
          userName="Jose"
          formatUserName={format}
        >
          José
        </TwitterFollowCard>
        <TwitterFollowCard
          userName="peluches"
          formatUserName={format}
        >
          Peluches
        </TwitterFollowCard>
      </section>
    </div>
  )
}