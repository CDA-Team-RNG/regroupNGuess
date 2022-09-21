import { type } from 'os'
import React, {useState} from 'react'
import TeamEncounter from '../components/TeamEncounter'




function TeamStats( props: any) {
  // const [stats, setStats] = useState(lastMatchsData)

  return (
    <>
      <div className='last-match-stat'>
        {props.stats.map((match: any, index: number) => 
          <TeamEncounter key = {index} data={match}/>
        )}
      </div>
    </>
  )
}

export default TeamStats