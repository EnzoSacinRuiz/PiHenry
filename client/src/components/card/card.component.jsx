import "./card.styles.css"

function Card({user}) {
    const {name,id} = user
    return(
        <div className="card-container">
            <h2>{name.forename}</h2>
            <h2>{name.surname}</h2>
            <p>{id}</p>
        </div>
    );    
}

export default Card;