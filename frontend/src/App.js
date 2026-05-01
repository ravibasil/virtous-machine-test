import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const API = 'http://localhost:5000/items'

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [selected, setSelectedItem] = useState(null);

  // Fetch Items
  const fetchItems = async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setItems(data);
      setError('');
    }catch(error){
      setError("API failed")
    }
  };

  useEffect(() => {
    fetchItems()
  },[])

  // Create
  const addOrUpdateItem = async () => {
    if(!title){
      setError("Title required")
      return;
    }
    
  try{
    let res;
    if(selected){
      res = await fetch(`${API}/${selected.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, desc })
      })
    }else {
       res = await fetch(API,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ title, desc })
        })
      }

      if (!res.ok) throw new Error('API request failed');

      setTitle('')
      setDesc('')
      setSelectedItem(null)
      fetchItems()
    }catch(error){
      setError("API failed")
    }

  }

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {method:'DELETE'})
      if (!res.ok) throw new Error('API request failed');
      fetchItems()
     }catch(error){
      setError("API failed")
    }
  }

  const handleUpdateItemCta = (item) => {
    setSelectedItem(item)
    setTitle(item.title)
    setDesc(item.desc)
  }

  return (
    <div className="App">
      <h2> CRUD App </h2>

      <div className='form-container'>
      {/* Form */}
        <input 
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          placeholder='Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={addOrUpdateItem} data-testid="add-update-cta" >{ selected ? "Update": "Add"}</button>
        <p style={{ color:'red' }}>{error}</p>
      </div>
      
      {/* List */}
      <ul className='items-container'>
        {
          items.map(item => {
            return(
            <li className='list-item' key={item.id}>
              <b>{item.title}</b> - {item.desc}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <button onClick={() => handleUpdateItemCta(item)}>Update</button>
            </li>)
          })
        }
      </ul>

    </div>
  );
}

export default App;
