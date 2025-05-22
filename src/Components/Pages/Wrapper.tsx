import Footer from "../Navigation/Footer"
import Navigation from "../Navigation/Navigation"
import Content from "./Content"

const Wrapper = () => {
  return (
    <>
    <main className="h-dvh bg-purple-100">
        <Navigation/>
        <Content/>
        <Footer/>
    </main>
    </>
  )
}

export default Wrapper