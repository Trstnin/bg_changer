import { useState } from 'react'


function App() {
  let [color, setColor] = useState('olive')
  return(
     <div className='w-full h-screen  '
     style={{backgroundColor : color}}>
      <div className='fixed bottom-12 left-1/3 gap-3 space-x-2 bg-white px-2 py-2 rounded-lg'> 
     
      <button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'Black' , color: 'white'}}
      onClick={() => setColor('Black')}
      >Black</button> 

     
    
      
      <button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'red' , color:'white'}}
      onClick={() => setColor('red')}
      >Red</button> 

<button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'grey' , color:'white'}}
      onClick={() => setColor('grey')}
      >grey</button> 

<button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'blue' , color:'white'}}
      onClick={() => setColor('blue')}
      >Blue</button> 

<button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'purple' , color:'white'}}
      onClick={() => setColor('purple')}
      >Purple</button> 

<button 
      className='outline-none  rounded-xl px-2 py-2'
      style={{backgroundColor : 'green' , color:'white'}}
      onClick={() => setColor('green')}
      >Green</button> 
       </div>
      </div>
    
  )

}

export default App
