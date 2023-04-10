import './Task.css';
import React, {Component, useState, useEffect} from 'react'
import luckyCat from '../../icons/prufen.svg'
import sadCat from '../../icons/kreuz.svg'

function Task(props) {

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(false);

    useEffect(()=>{
        setCorrect(props.answers.includes(answer.toLowerCase().trim()))
    }, [props.tries])
    
  return (
    <li className="task-container">
        <input type="text" value={answer} onChange={e => setAnswer(e.target.value)}></input>
        <p>{props.description}</p>
        <div className="status">
                    {correct ? <img src={luckyCat} className="correct"></img> : <img src={sadCat} className="wrong"></img>}
        </div>
    </li>
  );
}

export default Task;