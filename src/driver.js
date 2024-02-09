
import  './App.css'

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  const stars = Math.round(rating);
  const filledStars = '★'.repeat(stars);
  const emptyStars = '☆'.repeat(5 - stars);

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <div>
          <span>{filledStars}</span>
          <span>{emptyStars}</span>
        </div>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
