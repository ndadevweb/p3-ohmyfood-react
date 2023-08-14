import { useEffect, useState } from "react";

export default function useLoadImage(imageUrls) {
  const [loadedImages, setLoadedImages] = useState([])

  useEffect(() => {
    const urlsToLoad = Array.isArray(imageUrls) ? imageUrls : [imageUrls]

     const imagesToLoad = urlsToLoad.map(imageUrl => {
      const image = new Image()
      image.src = imageUrl
      image.onload = () => setLoadedImages((prevLoadedImages) => [...prevLoadedImages, imageUrl])

      return image
    })

    return () => imagesToLoad.forEach(image => image.onload = null)
  }, [imageUrls])

  const isLoadedImage = (url) => {
    return loadedImages.includes(url)
  }

  return [loadedImages, isLoadedImage]
}