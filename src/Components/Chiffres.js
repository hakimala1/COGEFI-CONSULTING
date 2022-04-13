import React, { useEffect, useRef, useState } from 'react'
import './Home.css'


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
function Chiffres() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, 30);
    // console.log(window.innerWidth)
    return (
        <div className='chiffres'>
            <div className='chif'>
                <span><h2>+{count < 400? count : 400}</h2></span>
                <h3>CLIENTS SATISFAITS</h3>
            </div>
            <div className='chif'>
                <span><h2>+{count < 10 ? count : 10}</h2></span>
                <h3>ANS D'EXPERIENCES</h3>
            </div>
            <div className='chif'>
                <span><h2>+{count < 130 ? count : 130}</h2></span>
                <h3>MISSIONS ACHEVÉES</h3>
            </div>
        
        </div>

    );



}

export default Chiffres