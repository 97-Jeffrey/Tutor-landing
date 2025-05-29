import styles from './mainService.module.css'
import Content from './content';

export default function Page () {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <Content />
                </div>
 
            </div>
        </>
    )
}