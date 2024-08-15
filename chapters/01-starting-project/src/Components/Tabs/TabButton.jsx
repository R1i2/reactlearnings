export function TabButton(props){
    return(
        <li>
            <button className= {props.isSelected?"active":""}onClick={props.onSelect}>{props.children}</button>
        </li>
    )
}
export function Menu({onSelect,setState,currState}){
    return(
        <>
            {/* <TabButton onSelect={()=>{onSelect("Components",setState)}}>Components</TabButton>
            <TabButton onSelect={()=>onSelect("JSX",setState)}>JSX</TabButton>
            <TabButton onSelect={()=>onSelect("Props",setState)}>Props</TabButton>
            <TabButton onSelect={()=>onSelect("React",setState)}>React</TabButton> */}
            <TabButton isSelected={currState==="components"} onSelect={()=>setState("components")}>Components</TabButton>
            <TabButton isSelected={currState==="jsx"} onSelect={()=>setState("jsx")}>JSX</TabButton>
            <TabButton isSelected={currState==="props"} onSelect={()=>setState("props")}>Props</TabButton>
            <TabButton isSelected={currState==="state"} onSelect={()=>setState("state")}>State</TabButton>
        </>
    )
}