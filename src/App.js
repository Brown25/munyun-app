
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = 'http://localhost:4040/api/transaction'; // Corrected URL Line
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, dateTime }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log('result', json);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input 
            type="text" 
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder="+200 cartier buffs" 
          />
          <input 
            type="datetime-local"
            value={dateTime}
            onChange={ev => setDateTime(ev.target.value)} 
          />
        </div>
        <div className="description">
          <input 
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder="description"
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New designer glasses</div>
            <div className="description">Needed something for the fits</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">
              <div className="date">2024-08-14</div>
              <div className="time">12:00 PM</div>
            </div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Concert tickets</div>
            <div className="description">Bought for the weekend</div>
          </div>
          <div className="right">
            <div className="price green">$400</div>
            <div className="datetime">
              <div className="date">2024-08-15</div>
              <div className="time">6:00 PM</div>
            </div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Grocery shopping</div>
            <div className="description">Weekly groceries</div>
          </div>
          <div className="right">
            <div className="price red">$900</div>
            <div className="datetime">
              <div className="date">2024-08-16</div>
              <div className="time">10:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
