import FooterStyle from "../sass/footer.module.scss"

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <p>Copyright by Clarusway {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
