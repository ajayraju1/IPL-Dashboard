import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="team-match-container">
        <div className="team-logo-container">
          <div className="team-text-con">
            <p className="team-match-name">{competingTeam}</p>
            <p className="team-match-date">{date}</p>
            <p className="team-match-venue-result">{venue}</p>
            <p className="team-match-venue-result">{result}</p>
          </div>

          <img
            src={competingTeamLogo}
            className="team-match-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="hr-line" />
        <div className="match-data-text-con">
          <p className="match-data-sub-heading">First Innings</p>
          <p className="match-data-response">{firstInnings}</p>
          <p className="match-data-sub-heading">Second Innings</p>
          <p className="match-data-response">{secondInnings}</p>
          <p className="match-data-sub-heading">Man Of The Matach</p>
          <p className="match-data-response">{manOfTheMatch}</p>
          <p className="match-data-sub-heading">Umpires</p>
          <p className="match-data-response">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
