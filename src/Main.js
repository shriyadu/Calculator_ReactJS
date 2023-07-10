import React,{useState} from 'react';

function Main(){

    const [inputItem,setItem]=useState('');

    function display(val){
        setItem(inputItem+val);
    }
    function evaluate(){
        setItem(eval(inputItem))
    }
    function clear(){
        setItem('');
    }
    return(
       <div className="row justify-content-center">
           <h1>React Calculator</h1>
           <table col>
           <tr>
               <td colSpan='3'><input type="text" value={inputItem}/></td>
               <td><button onClick={clear}>C</button></td>
           </tr>
           <tr>
               <td><button onClick={()=>{display('1')}}>1</button></td>
               <td><button onClick={()=>{display('2')}}>2</button></td>
               <td><button onClick={()=>(display('3'))}>3</button></td>
               <td><button onClick={()=>{display('/')}}>/</button></td>
           </tr>
           <tr>
            <td><button onClick={()=>{display('4')}}>4</button></td>
            <td><button onClick={()=>{display('5')}}>5</button></td>
            <td><button onClick={()=>(display('6'))}>6</button></td>
            <td><button onClick={()=>{display('-')}}>-</button></td>
           </tr>
           <tr>
           <td><button onClick={()=>{display('7')}}>7</button></td>
            <td><button onClick={()=>{display('8')}}>8</button></td>
            <td><button onClick={()=>(display('9'))}>9</button></td>
            <td><button onClick={()=>{display('+')}}>+</button></td>
           </tr>
           <tr>
           <td><button onClick={()=>{display('.')}}>.</button></td>
            <td><button onClick={()=>{display('0')}}>0</button></td>
            <td><button onClick={evaluate}>=</button></td>
            <td><button onClick={()=>{display('*')}}>*</button></td>
           </tr>
       </table>
       </div>
    );
}
export default Main;