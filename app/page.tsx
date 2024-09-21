"use client";


import { useState } from "react";
import { SHA256 } from "felixhash";
export default function Home() {

  const [inputValue, setInputValue] = useState("")
  const[hashedValue, setHashedValue] = useState("")
  function formHash(string: string){
   return SHA256.hash(string)
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setInputValue(value)

    if(value){
      const hashed = formHash(value)
      setHashedValue(hashed)

    }
    else{
      setHashedValue("")
    }


  }


  return (
    
   <div className="flex flex-col px-10 py-10 gap-5 ">
   <h1 className="text-center font-bold underline">This is the Implementation of SHA256 by FelixHash</h1>
    <input 
    type="text"
    id="input"
    placeholder="Enter the hash value"
    className="px-5 py-5 shadow"
    value={inputValue}
    onChange={handleInputChange}
    
    />

<input 
    type="text"
    id="hashedOutput"
    readOnly
    className="shadow px-5 py-5"
    placeholder="This will be the hashed value"
    value={hashedValue}
    
    
    />
      <h1 className="text-center font-bold underline">This is the Implementation of Keccak256 by FelixHash</h1>
      <p className="text-red-600 text-center">We are working on it!</p>



   </div>
  );
}
