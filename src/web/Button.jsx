export default function Button({btnName, btnEvent})
{ 
    return <button onClick={btnEvent} > {btnName} </button>
}
