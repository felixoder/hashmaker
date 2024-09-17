"use client";
import { createHash } from "crypto";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [inputValue, setInputValue] = useState("")
  const[hashedValue, setHashedValue] = useState("")
  function formHash(string: string){
    return createHash("sha256").update(string).digest("hex")
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



   </div>
  );
}
