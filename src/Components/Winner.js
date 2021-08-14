import "./style.css";

function Winner(props) {
    const {winner, reload} = props
    return(
        <div className="winner">
            <div>
                <h1>Game Over</h1>
                <h1>{winner}</h1>
            </div>
            
            <button className="reloadBtn" onClick={()=>{
                reload();
            }}>Start again</button>
        </div>
    );

}
export default Winner;