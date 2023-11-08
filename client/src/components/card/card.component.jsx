import "./card.styles.css";

function Card({ user }) {
  if (!user || !user.image ) {
    return <div>Image not available</div>;
  }

  const { name, lastName, image, nationality } = user;

  return (
    <div className="card-container">
      <div className="card-content">
        <img
          src={image}
          alt={`${name} ${lastName}`}
          className="card-image"
        />
        <div className="card-text">
          <h2>{name} {lastName}</h2>
          <p>{nationality}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
