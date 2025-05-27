import styles from './mainService.module.css'


export default function Page () {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.title_container}>
                        <div className={styles.title}>Main Service</div>
                        <div className={styles.underline}></div>
                    </div>
                </div>
 
            </div>
        </>
    )
}