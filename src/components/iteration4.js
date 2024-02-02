
const BoxColor = ({ r, g, b }) => {
    const boxStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: '200px',
      height: '100px',
      border: '1px solid #000',
      margin: '10px',
    };
  
    return <div style={boxStyle}></div>;
  };
  
  export default BoxColor;