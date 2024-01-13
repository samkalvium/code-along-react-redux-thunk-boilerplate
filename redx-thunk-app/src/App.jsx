import './App.css'
import { useEffect, useState } from 'react';
import store from './redux/Store';
import actionProvider from './redux/Action';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    store.subscribe(() => {
      setData(store.getState().data.data);
    });
  }, []);


  return (
    <>
      <button onClick={() => store.dispatch(actionProvider())} >Fetch data</button>
      {data.map((i) => (
        <div className='data'>
          <div className='flex'>
          <h1>Name of the user:- </h1> <h3>{i.name}</h3>
          </div>
          <div className='flex'>
            <h1>E-mail Id of the user:-</h1>  <h3>{i.email}</h3>
          </div>
        </div>
      ))}

    </>
  )
}

export default App
