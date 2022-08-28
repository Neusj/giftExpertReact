export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nbnVV2E996e3rcVUxKnoAbl66MckmVkH&q=${category}&limit=20`
    const resp = await fetch(url);

    //desestructuracion de la data
    const { data } = await resp.json();

    const gifs = data.map ( img  => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}