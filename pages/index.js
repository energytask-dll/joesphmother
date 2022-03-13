import Footer from '../components/Footer'
import Logo from '../components/Logo'
import defstyles from '../styles/GlobalStyles.module.css'

export default function Home() {
  return (
    <>
    <head>
        <title>4flashcards</title>
    </head> 
    <div className={defstyles.dark}>
      <style jsx global>{`
        body {
          background-color: #39A254;
        }`}
      </style>
      <Logo />
      <h1 className={defstyles.defaultText}>Home</h1>
      <div className={defstyles.flashcard}>
        <p className={defstyles.flashcardtext}>idk this thing still under construction</p>
        <p className={defstyles.flashcardtext}>but you can go and check zak's and rasbi's sites instead for now</p>
      </div>
      <Footer />
    </div></>
  )
}
