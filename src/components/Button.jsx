export default function Button(props){
    // const buttonStyle = {
    //     backgroundColor:props.color,
    // }
    const buttonClass = ["rounded ", " px-2 "," "+props.color+" "," "+props.textColor+" "]
    return(
        <button className={buttonClass}>{props.text}</button>
    )
}