//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.

//*Footer comp.
export const Footer = () => {
  return (
    <footer>
      <p>Copyright by Clarusway {new Date().getFullYear()}</p>
    </footer>
  )
}
