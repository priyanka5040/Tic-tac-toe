import "./style.css";

function Block(props) {
    let {move, index} = props;

    if(move !== ""){
        return(
            <div id={index} className={move}>
                {move}
            </div>
        );
    }
    else{
        return(
            <div id={index} className="edit">
                
            </div>
        );

    }
    
    
}
export default Block;