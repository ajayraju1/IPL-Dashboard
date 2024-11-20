import './index.css'

const MatchCard = props => {
  const {matchCardData} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchCardData

  return (
    <li className="match-card-li-container">
      <div className="match-card-container">
        <img
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
          className="match-card-team-logo"
        />
        <p className="match-card-heading">{competingTeam}</p>
        <p className="match-card-result">{result}</p>

        <p className={`match-card-status ${matchStatus.toLowerCase()}`}>
          {matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
