import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Quote from '../components/Quote'
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
      <Quote />
      <h1 className={defstyles.defaultText}>Home</h1>
      <div className={defstyles.flashcard}>
        <p className={defstyles.flashcardtext}>idk this thing still under construction</p>
      </div>
      <Footer />
    </div></>
  )
}
