import './Home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  const addChannel = () => {
    history.push('/add/channel')
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src="/chatlogo.png"/>
        <h1>Welcome to Thapar Chat</h1>
        <p>
          Thapar Chat brings all your group communication into one place, makes it all
          instantly searchable and available wherever you go.
        </p>

        <p>
          Our aim is to make your academic and working life simpler, more pleasant and more
          productive.
        </p>

        <Button onClick={addChannel}>Create Channel</Button>
      </div>
    </div>
  )
}

export default Home
