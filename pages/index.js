import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import defstyles from '../styles/GlobalStyles.module.css'


export default function Home() {
  return (
    <>
    <head>
        <title>U.S. Route 9</title>
    </head>
    <div className={defstyles.dark}>
      <style jsx global>{`
        body {
          background-color: darkred;
        }`}
      </style>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>Home</h1>
      <p className={defstyles.defaultText}>[ Content Deleted ]</p>
      <Footer />
    </div></>
  )
}
