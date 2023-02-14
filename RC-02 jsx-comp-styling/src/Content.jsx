//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler import suz bir şekilde
//? erişilebilir.
import magnolia from "./img/magnolia.jpg"

//?Harici stillendirme dosyasi
import "./Content.css"

const Content = () => {
  //? Local Style Object
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  }

  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  }

  return (
    <div className="content-div">
      {/* JSX */}
      {/* Inline Styling */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>

      {/* Local or global variables */}
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aperiam.
      </p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718__340.jpg"
        alt="spring-img1"
      />

      <img style={imgStyle} src={magnolia} alt="magnolia-img" />

      {/* <img src="./img/magnolia.jpg" alt="magnolia-img" /> */}

      <p className="par">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
        reiciendis ipsa est, doloremque eum vitae dolor assumenda repellat et
        eaque consequatur voluptatibus iusto perferendis provident ex! Labore et
        eaque earum.
      </p>

      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa,
        magni quidem ex sunt autem repudiandae pariatur aliquid atque ratione!
      </p>
    </div>
  )
}

export default Content
