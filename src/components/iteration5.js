
const Creditcard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    };
    
    const cardTypeStyle = {
        width: '40px',
      };

    return (
        <div style={cardStyle}>
          <div style={cardTypeStyle}>
            {type === 'Visa' ? (
              <span>Visa</span>
            ) : (
              <span>Mastercard</span>
            )}
          </div>
          <div>{'●●●● ' + number.slice(-4)}</div>
          <div>
            <span>Expires {expirationMonth}/{expirationYear}</span>
            <span>{bank}</span>
          </div>
          <div>{owner}</div>
        </div>
      );
};

export default Creditcard;