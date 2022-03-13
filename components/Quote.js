import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Quote() {
    const quotes = [
        ["do the fortnite!", "Ragarnoky"]
        ["sussy balls", "Ragarnoky"]
    ]
    let random = quotes[Math.floor(Math.random()*quotes.length)]
    return (
        <div>
            <p className={styles.defaultText}>"{random[0]}"</p>
        </div>
    )
}