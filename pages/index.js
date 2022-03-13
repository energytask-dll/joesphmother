import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import defstyles from '../styles/GlobalStyles.module.css'


export default function Home() {
  return (
    <>
    <head>
        <title>josephmother</title>
    </head>
    <div className={defstyles.dark}>
      <style jsx global>{`
        body {
          background-color: #39A254;
        }`}
      </style>
      <Header />
      <Logo />
      <Quote />
      <h1 className={defstyles.defaultText}>Home</h1>
      <div className={defstyles.flashcard}>
        <p className={defstyles.defaultText}>idk this thing still under construction</p>
      </div>
      <Footer />
    </div></>
  )
}
