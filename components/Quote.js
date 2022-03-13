import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Quote() {
    const quotes = [
        ["√584 = banana"],
        ["PAKISTAN ZINDABAD"],
        ["supreme brick"],
        ["ca"],
        ["NEW JERSEY MID!!!!"],
        ["Maryland, New York, Pennsylvania, Delaware, West Virginia, Virginia, Washington D.C., Colorado, California, New J*rs*y"],
        ["U.S. Route 15 (Catoctin Mountain Highway) - Frederick, Maryland"],
        ["U.S. Route 40 (Baltimore National Pike) - Frederick, Maryland"],
        ["U.S. Route 50 (Ocean Gateway) - Ocean City, Maryland"],
        ["Interstate 95 (New Jersey Turnpike) - Edison, New Jersey"],
        ["Interstate 495 (Capital Beltway) - Alexandria, Virginia"],
        ["It will always be unsafe to turn off your computer."],
        ["Ali Mamu has 7 apples. His train is 256 minutes early. Calculate the mass of the sun?"],
        ["It was 6am when I went to the store, I didn't have no money, cause I was poor."],
        ["the masculine, feminine, and androgynous urge to eat 8piece mozzarella sticks from Burger King"],
        ["McDonald's always lacking on my order"]
    ]
    let random = quotes[Math.floor(Math.random()*quotes.length)]
    return (
        <div>
            <p className={styles.defaultText}>"{random[0]}"</p>
        </div>
    )
}