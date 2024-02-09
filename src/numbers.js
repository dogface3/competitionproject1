
const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table">
      <ul style={{display: 'flex', flexWrap: 'wrap', width: '300px' }}>
        {numbers.map((number) => (
          <li
            key={number}
            style={{
              backgroundColor: number % 2 === 0 ? 'red' : 'white',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid black',
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumbersTable;
