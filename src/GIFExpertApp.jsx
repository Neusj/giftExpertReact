import {React, useState} from 'react'
import { AddCategories, GifGrid } from './components';


export const GIFExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>{/* este fragmento se usa 
        para tene una sola etiqueta y destro todas las necesarias*/}

        {/*Título */}
            <h1>GIFExpertApp</h1>
        {/*Input */}
        <AddCategories
            onNewCategory={event => onAddCategory(event)}
        ></AddCategories>
        {/*<button onClick={onAddCategory}>Agregar</button>*/}

        {/* listado */}
   
                {
                    categories.map(category => (
                        <GifGrid key={ category } category={category}/>
                    ))
                }

        </>
    )
}
