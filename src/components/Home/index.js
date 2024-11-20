import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
    site: 'https://ipldshboard.ccbp.tech',
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="home-container">
        <div className="home-responsive-container">
          <div className="home-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />

            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>

          <div className="home-body-container">
            {isLoading ? (
              <Loader type="Oval" color="#fff" height={50} width={50} />
            ) : (
              <ul className="team-card-container">
                {teamsList.map(eachItem => (
                  <TeamCard teamData={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
