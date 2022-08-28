import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";
import { useFetchGift } from "../hook/useFetchGift"
import { GiftItem } from "./GiftItem";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGift( category );
    console.log(images, isLoading)

    return (
        <>
            <h3>{ category }</h3>
            {
               isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((images) => (
                        <GiftItem key={images.id}
                        {...images}/>
                    ))
                }
            </div>
        </>
    )
}
