import { useState, useEffect } from 'react';

const useInitialState = ( API ) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json()) /* TRANSFORMO LA DATA A JSON */
            .then(data => setVideos(data))
    }, []);
    return videos;
}

export default useInitialState;