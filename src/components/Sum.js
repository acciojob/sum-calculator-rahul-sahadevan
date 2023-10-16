import React ,{useState} from "react";

function Sum(){
    let [count,setCount] = useState(0);
    function handleSum(val){
        let prev = 0;
        let curr = val;
        if(prev !== curr){
            setCount(count + Number(val));
            prev = curr;
        }
        
    }

    return (
        <>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e)=>{
            handleSum(e.target.value)
        }}></input>

        <p>Sum: {count}</p>
        </>
    )
}

export default Sum;