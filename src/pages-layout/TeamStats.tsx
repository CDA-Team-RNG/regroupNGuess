import React, {useState} from 'react'
import TeamEncounter from '../components/TeamEncounter'
import {lastMatchsData} from '../models/Stats'

function TeamStats() {
  const [stats, setStats] = useState(lastMatchsData)

  return (
    <>
      <div className='last-match-stat'>
        {stats.map((match, index) => 
          <TeamEncounter key={index} data={match}/>
        )}
      </div>
    </>
  )
}

export default TeamStats