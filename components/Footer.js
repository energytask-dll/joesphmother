import styles from '../styles/GlobalStyles.module.css'
import Quote from './Quote'

export default function Footer()
{
    return (
        <div className={styles.defaultText}>
            <hr />
            <p>Copyright &copy; 2022 Amongsauce, Inc. All rights not reserved.</p>
            <p className={styles.comiksand}>Hosted on a Pakistani server in Lahore with 96853ms ping</p>
            <p><a href="https://www.youtube.com/c/Ragarnoky">YouTube</a> - <a href="https://github.com/Ragarnoky">GitHub</a> - <a href="https://replit.com/@Ragarnoky">Replit</a> </p>
            <Quote />
        </div>
    )
}