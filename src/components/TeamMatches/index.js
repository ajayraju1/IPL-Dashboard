import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchDetails: {}}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.teamColor = id.toLowerCase()

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatches: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatches, recentMatches} = formattedData

    const updatedLatestMatch = {
      umpires: latestMatches.umpires,
      result: latestMatches.result,
      manOfTheMatch: latestMatches.man_of_the_match,
      id: latestMatches.id,
      date: latestMatches.date,
      venue: latestMatches.venue,
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      firstInnings: latestMatches.first_innings,
      secondInnings: latestMatches.second_innings,
      matchStatus: latestMatches.match_status,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    const matchDetails = {
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatch,
      recentMatchDetails: updatedRecentMatches,
    }

    this.setState({isLoading: false, matchDetails})
  }

  render() {
    const {isLoading, matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatchDetails} = matchDetails
    return (
      <div className={`match-container ${this.teamColor}`}>
        {isLoading ? (
          <Loader type="Oval" color="#fff" height={50} width={50} />
        ) : (
          <div className="team-match-body-container">
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />

            <h4 className="team-match-sub-heading">Latest Matches</h4>

            <LatestMatch latestMatchDetails={latestMatchDetails} />

            <ul className="match-cards-container">
              {recentMatchDetails.map(eachItem => (
                <MatchCard matchCardData={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
