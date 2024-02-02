import Visa from './pics/visa.png'
import Master from './pics/mastercard.png'
const Creditcard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '10px',
       
    };
    
    const cardTypeStyle = {
        width: '500px',

      };
const cardNames = {
      display: 'flex',
      marginLeft: '10px'
}
const cardName = {
      display: 'flex',
      marginLeft: '10px',
      marginBottom: '10px'
   
}

    return (
        <div style={cardStyle}>
          <div style={cardTypeStyle}>
            {type === 'Visa' ? (
              <img style={{ width: '50px', margin: ''}} src={Visa} alt={`kuva`}></img>
            ) : (
              <span><img style={{ width: '50px'}} src={Master} alt={`kuva`}></img></span>
            )}
          </div>
          <div>{'●●●●  ●●●●  ●●●● ' + number.slice(-4)}</div>
          <div style={cardNames}>
            <span>Expires {expirationMonth}/{expirationYear}</span>
            <span>{bank}</span>
          </div>
          <div style={cardName}>{owner}</div>
          </div>
       
      );
};

export default Creditcard;