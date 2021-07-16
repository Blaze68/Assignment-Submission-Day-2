import React, { useState } from "react"
import "./style.css"


const App =()=> {

    let[score, setScore] = useState(0)
    return(
        <div>
            <h1> Hello this is 2nd Day</h1>
            <h2> this is my counter Application </h2>
            <h3> the Value of Score is {score}</h3>
            <button onClick={()=>(score<25)? setScore(score+1):''}> Increment </button>
            <button onClick={()=>(score>0)? setScore(score-1):''}> Decrement </button>
            <button onClick={()=>{ setScore(0)}}> Reset </button>
        </div>
    )
}

export default App
