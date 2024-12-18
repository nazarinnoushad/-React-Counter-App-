import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export default function App() {
  const [count, setCount] = useState(0)

return (
<div className ="bg-slate-800 flex flex-col items-center justify-center min-h-screen text-white">
  <h1 className ="text-7xl mb-4 font-bold">
    {count}
  </h1>
   
<div className = "flex space-x-8 ">
  <button onClick = {() =>{setCount(count<10 ? count+1 : count) }}  className ="p-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
    <AddIcon/>
  </button>
  <button onClick = {() =>{setCount(count>0 ? count-1 : count) }} className ="p-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
    <RemoveIcon/>
  </button>
  <button onClick = {() =>{setCount(0)}} className ="p-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
  <RestartAltIcon/>
  </button>
</div>
</div>

)}

