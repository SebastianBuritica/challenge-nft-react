import './app.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Punklist from './components/Punklist';

 

function App() {
  

  return (
    <>
    
    <div className="app">
      < Header />
      <CollectionCard 
        id={0} 
        name={'Gekko test'} 
        traits={[{'value': 7}]} 
        image='https://opensea.mypinata.cloud/ipfs/QmNosQUMy8CLTn4BnM95yVLWLTrEzZW3cMSFozsGrMDgTY/0.png' 
      />
      {/* < Punklist punkListData={punkListData} /> */}
      
    </div>

    </>
  );
}

export default App;
