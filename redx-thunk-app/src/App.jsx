import './App.css'
import { useEffect, useState } from 'react';
import store from './redux/Store';
import actionProvider from './redux/Action';


function App() {

  const [data, setData] = useState([]);
  const [clear, setClear] = useState(false)

  useEffect(() => {
    store.subscribe(() => {
      setData(store.getState().data.data);
      setClear(true)
    });
  }, []);

  const handleClearData = () => {
    setData([]);
    setClear(false);
  };

  return (
    <>
      <button onClick={() => store.dispatch(actionProvider())} >Fetch data</button>
      {data.map((i,ind) => (
        <div className='data' key={ind}>
          <div className='flex'>
            <h1>Name of the user:- </h1> <h3>{i.name}</h3>
          </div>
          <div className='flex'>
            <h1>E-mail Id of the user:-</h1> <h3>{i.email}</h3>
          </div>
        </div>
      ))}
      {clear && <button onClick={handleClearData}>Clear</button>}


    </>
  )
}

export default App
