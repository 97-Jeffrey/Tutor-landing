'use client'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import styles from './routeButton.module.css'
import { useRouter } from 'next/navigation'


interface RouteButtonInterface {
    text: string
    url: string
    back: boolean
}

const RouteButton : React.FC<RouteButtonInterface> =({ text, url, back }) =>{
    const router = useRouter();

    return (
        <>
            <button 
                className={back? styles.back_button: styles.button }
                onClick={()=> router.push(url)}
            >
               {back? <MdKeyboardArrowLeft/>:""} {text}
            </button>
        </>
    )
}


export default RouteButton