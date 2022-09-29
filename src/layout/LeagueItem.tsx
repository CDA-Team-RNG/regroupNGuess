export const LeagueItems = (props : any) => {
    return(
        <li className={props.selected === props.data.title ? 'category-item selected' : 'category-item'}
            
            >
            <figure>
                <img className="gameLogo" src={props.data.img} />
            </figure>
            <p>
                {props.data.abr} 
                <span className="italic"> ({props.data.title})</span>
            </p>
        </li>
    )
}