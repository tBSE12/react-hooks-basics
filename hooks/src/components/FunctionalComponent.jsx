import React, { useState, useEffect, useContext} from "react";
import './FunctionalComponent.css';

// PROGRESSION 1 | UPDATE STATE USING useState
function FirstComponent()
{
    const[age, setAge] = useState(19);
    const handleClick=()=> setAge(age + 1);

    return(
        <div>
            <p>Today I am {age} Years of Age</p>
            <div>
                <button onClick={handleClick}>Get older!</button>
            </div>
        </div>
    )
}

// PROGRESSION 2 | MULTIPLE STATE
function SecondComponent()
{
    const[age, setAge]=useState(19);
    const[siblingsNum, setSiblingsNum]=useState(10);

    const handleClick=()=> setAge(age+1);
    const handleSiblingsNum = () => setSiblingsNum(siblingsNum+1);

    return(
        <div>
            <p>Today I am {age} Years of Age</p>
            <p>I have {siblingsNum} siblings</p>

            <div id='secondbutton'>
                <button onClick={handleClick}>Get older!</button>
                <button onClick={handleSiblingsNum}>More siblings!</button>
            </div>
        </div>
    )
}

// PROGRESSION 3 | USE OBJECT STATE
function ThirdComponent()
{
    const [state, setState] = useState({ age: 19, siblingsNum: 10});

    const handleClick= val =>
    setState
    ({
        ...state,
        [val]: state[val] + 1
    })
    const { age, siblingsNum } = state

    return(
        <div>
            <p>Today I am {age} Years of Age</p>
            <p>I have {siblingsNum} siblings</p>

            <div id='secondbutton'>
                <button onClick={handleClick}>Get older!</button>
                <button onClick={handleClick}>More siblings!</button>
            </div>
        </div>
    )
}

// PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION
function ForthComponent() {
    const [count, setCount] = useState(0)
    return (
        <div>
            Count value is: {count}
            <div id='secondbutton'>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count => count + 1)}>Plus +</button>
                <button onClick={() => setCount(count => count - 1)}>Minus -</button>
            </div>
        </div>
    )
}

// PROGRESSION 5 | useEffect
function FifthComponent()
{
    const[age, setAge] = useState(19);
    const handleClick=()=> setAge(age + 1);

    useEffect(() => {
        document.title = 'You are ' + age + 'years old!'
    })

    return(
        <div>
            <p> Look at the title of the current tab in your browser </p>
            <div>
                <button onClick={handleClick}>Update Title!</button>
            </div>
        </div>
    )
}

// PROGRESSION 6 | useContext
function SixthComponent()
{
    const ThemeContext = React.createContext('light');
    const Display = () => {
        const theme = useContext(ThemeContext);
        return <>
        <div 
        style={{
                background: theme === 'dark' ? 'black' : 'lightyellow',
                color: theme === 'dark' ? 'white' : 'rgb(90, 89, 89)',
                width: '100%',
                minHeight: '200px'
            }}
        id='boldy'>
            {'The theme here is ' + theme}
        </div>
        </>
    }
    return(
    <>
      <Display />
    </>  
    )
}

export {FirstComponent, SecondComponent, ThirdComponent, ForthComponent, FifthComponent, SixthComponent}