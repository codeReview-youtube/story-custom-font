import React from 'react';
import '../styles/app.scss';
import Button from '../components/Button';
import Title from '../components/Title';

function App() {
  return (
    <div className='app'>
      <Button title='Click meeee ǀ' style={{ fontSize: 20 }} />
      <Title title='This is a title send by Props' />
    </div>
  );
}

export default App;
