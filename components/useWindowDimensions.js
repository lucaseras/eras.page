import {useState, useEffect} from 'react';

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(0);
    
    useEffect(() => {
        setWindowDimensions({height: window.innerHeight, width: window.innerWidth});
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({height: window.innerHeight, width: window.innerWidth});
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
