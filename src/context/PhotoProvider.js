import {useState} from 'react'
import PhotoContext from './PhotoContext'
import {apiKey} from './config'

function PhotoProvider({children}) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = query => {

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => {
                setImages(data.photos.photo);
                setLoading(false)
            })
            .catch(error => {
                console.log(
                  "Encountered an error with fetching and parsing data",
                  error
                );
            });
    }

    const value = {
        images,
        loading,
        runSearch
    }

    return (
        <PhotoContext.Provider value={value}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoProvider;