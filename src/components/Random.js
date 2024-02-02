const Random = ({ min, max }) => {
  
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  
    return (
      <div>
        Random value between {min} and {max}: {randomInt}
      </div>
    );
  };

  export default Random;