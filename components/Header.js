import { useRouter } from 'next/router'
import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/" ><a className={styles.defaultLinkButton}>🏠 Home</a></Link>
      |
      <Link href="roads"><a className={styles.defaultLinkButton}>🛣 Roadsigns</a></Link>
      |
      <Link href="https://ragarnoky.github.io/toastergiveaway/"><a className={styles.defaultLinkButton}>🍞 Toaster Giveaway</a></Link>
      |
      <Link href="https://uvrays.majdeeganexpwy.repl.co"><a className={styles.defaultLinkButton}>Alwakil</a></Link>
      <hr />
    </div>
  )
}