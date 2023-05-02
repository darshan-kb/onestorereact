
function counter(){
    console.log("Clickeed");
}

function MyButton(){
    return(
        <button onClick={counter}>Click Me!</button>
    )
}

export default MyButton;