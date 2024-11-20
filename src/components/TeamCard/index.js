import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <li className="team-card-link">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="team-card-con">
          <img src={teamImageUrl} className="team-img" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
