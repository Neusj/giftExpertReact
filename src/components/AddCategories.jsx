import { useState } from "react"

export const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmint = (event)=>{
        event.preventDefault();//mantiene los cambios a recargar
        const newInputValue = inputValue.trim()
        if ( newInputValue.length === 0){
            setInputValue('');
            return;
        }
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(newInputValue)
        setInputValue('');        
    }
    return (
        <form onSubmit={onSubmint}>
            <input
                type="text"
                placeholder='Bucar Gif'
                value={ inputValue}
                onChange= {(event) => onInputChange(event)}
            />
        </form>
    )
}
