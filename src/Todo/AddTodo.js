import React,{useState} from "react";
import PropTypes from "prop-types";

//новый хук 
function useInputValue(defaultValue="") {
    const [value,setValue]=useState(defaultValue)//логика по определению value

    //в качестве значения возвращяем объект
    return{
        bind:{
            value,
            onChange : event=>setValue(event.target.value),
        },
        clear:()=>setValue(''),
        value: () =>value,

    }

}

function AddTodo({onCreate}) {
    const input=useInputValue('')

    function submitHandler(event) {
        event.preventDefault()


        if(input.value().trim()){
           onCreate (input.value())
           input.clear()
           /* setValue('') */
           
        }
    }


    return(
        <form style={{marginBottom:'1rem'}} onSubmit={submitHandler}>
            <input {...input.bind}></input>
            <button type="submit">Add todo</button>
        </form>
    )
    
}

AddTodo.propTypes={
    onCreate:PropTypes.func.isRequired,
}

export default AddTodo