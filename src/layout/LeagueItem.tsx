export const LeagueItems = (props : any) => {
    return(
        <ul>
            {props.data.map((item: any, index: number) => (
                <li key={index} 
                    className={props.selected === item.region ? 'category-item selected' : 'category-item'}
                    onClick={() => props.changeLeague(item.region)}
                    >
                    <figure>
                        <img className="gameLogo" src={item.img} />
                    </figure>
                    <p>
                        {item.region} 
                        <span className="italic"> ({item.title})</span>
                    </p>
                </li>
            ))}
        </ul>
    )
}