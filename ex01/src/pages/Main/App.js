import './App.css';
import { useEffect, useState } from 'react';
import Notify from '../../components/Notify';

function App() {
  const [inputName, setInputName] = useState("");
  const [users, setUsers] =useState([]);
  const [showNotify, setShowNotify] = useState(false);

  useEffect(() => {
    if(users.length){
      setShowNotify(true);
    }
  }, [users]);

  function handleAddNewUser (){
    setUsers([...users, inputName]);

    setInputName("")

  }

  return (
    <div className="container">
      <div className='left'>
        <input 
        placeholder='Name'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleAddNewUser}>Insert</button>

      </div>
      <div className='right'>
        <h1 className='title_right'>User list</h1>
        <div className='div_items'>
          {users.map((user) => (
            <h4 key={user}>{user}</h4>
          ))}
        </div>

      </div>
      <Notify
        show={showNotify} 
        text="New user added!"
        handleClose={() => setShowNotify(false)}/>
    </div>
  );
}

export default App;
