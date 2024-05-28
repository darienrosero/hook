import { useCatImage } from "../hooks/iseCatImage"

useCatImage
export function Otro () {
    const { imageUrl } = useCatImage({ fact: 'random fact' })
    return (
        <>
        {imageUrl && <img src={imageUrl} />}
        </>
    )
}