import styles from '../styles/Logo.module.css';
import Image from 'next/image'

export default function Logo() {
    return (
        <div>
            <div className={styles.logoContainer}>
                <Image src="/iconDark.png" width="84" height="64" className={styles.logoMarginned} />
                &nbsp;<p className={styles.logoText}>4FlashCards.ml</p>
                <div>
                <Link href="/" ><a className={styles.defaultLinkButton}>🏠 Home</a></Link>
                <hr />
                </div>
            </div>
            <hr />
        </div>
    )
}