import NotFoundPage from "./Style"
import notFound from "../../assets/404.gif"
import Navbar from "../../components/navbar/Navbar"

const NotFound = () => {
  return (
    <NotFoundPage>
        <Navbar />
        <img src={notFound} alt="404-not-found" />
    `</NotFoundPage>
  )
}

export default NotFound