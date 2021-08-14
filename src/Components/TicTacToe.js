import {useState} from "react";
import Block from "./Block";
import Winner from "./Winner";
import "./style.css";

let Id = 0;
let arr = new Array(9).fill("");


function TicTacToe(){

    let [isCross, setIsCross] = useState(true);
    let [winMessage, setWinMessage] = useState("");

    function reload(){
        setIsCross(true);
        setWinMessage("");
        arr.fill("");
    }

    let checkWinner = ()=>{

        if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== "" ){
            setWinMessage(`The winner is ${arr[0]}`)
        }
        else if(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== "" ){
            setWinMessage(`The winner is ${arr[3]}`)
        }
        else if(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== "" ){
            setWinMessage(`The winner is ${arr[6]}`)
        }
        else if(arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== "" ){
            setWinMessage(`The winner is ${arr[0]}`)
        }
        else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== "" ){
            setWinMessage(`The winner is ${arr[1]}`)
        }
        else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== "" ){
            setWinMessage(`The winner is ${arr[2]}`)
        }
        else if(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== "" ){
            setWinMessage(`The winner is ${arr[0]}`)
        }
        else if(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== "" ){
            setWinMessage(`The winner is ${arr[2]}`)
        }
        else if(arr.indexOf('') === -1){
            setWinMessage(" Game is draw")
        }

    }

    return(<div className="tictactoe">

            <h1 className="head">Tic Tac Toe</h1>
            <h3 className="head">{isCross ? `X turn` : `O turn`}</h3>

            {winMessage? <Winner reload={reload} winner = {winMessage}/> : ``};

            <div className="app" onClick={
                (event) => {
                    //console.log(event.target.id);

                    if(event.target.className === "edit"){

                        arr[parseInt(event.target.id)] = isCross ? "X" : "O";
                        //console.log(arr);

                        checkWinner();
                        setIsCross(!isCross);
                    }
                }
            }>
                
                {arr.map((val, index)=>{
                    return (<Block key={Id++} index = {index} move = {arr[index]}/>);
                })}
            </div>
            
        </div>
    );
}


export default TicTacToe;