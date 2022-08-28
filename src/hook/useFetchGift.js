import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";


export const useFetchGift = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //para que no se ejecute cada vez que haya un cambio
    useEffect(() => {
        getImages();
    }, [ ])

    return {
        images,
        isLoading
    }
}
