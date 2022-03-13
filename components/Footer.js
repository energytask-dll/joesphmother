import styles from '../styles/GlobalStyles.module.css'
import Quote from './Quote'

export default function Footer()
{
    return (
        <div className={styles.defaultText}>
            <hr />
            <p>Copyright &copy; 2022 energytask.dll. No, we will not sue you if you decide to take anything from here because we do not have lawyers because this is a personal site, also we do not give a shit.</p>
            <p className={styles.comiksand}>powered by Brazilian server on 4000ms ping</p>
        </div>
    )
}