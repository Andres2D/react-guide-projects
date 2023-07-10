const ReactAppFromCDN = () => {
  const [ counter, setCounter ] = React.useState(0);
  const handleClick = (operation) => {
    setCounter(counter + operation);
  };
  return (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
      <button onClick={() => handleClick(1)}>+</button>
      <h1>{counter}</h1>  
      <button onClick={() => handleClick(-1)}>-</button>
    </div>
  )
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<ReactAppFromCDN />);
