import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lighttheme, darktheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { useEffect, useState } from "react";

function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || "light");//kullanıcı seçimi için. eğer başlangıçta storage da veri varsa onu getir yoksa light olarak initial değerini belirle

  const [themes, setThemes] = useState(lighttheme);//Themeprovidera vereceğimiz theme statei. başlangiç  için lightheme yi tercih ettik

  useEffect(() => {
    sessionStorage.setItem("theme", myTheme);//kullanıcı refresh atsa bile theme seçimi değişmeyecek
    setThemes(myTheme === "light" ? lighttheme : darktheme);
  }, [myTheme]);//myTheme değiştikçe storage ve themes güncellenecek. Böylelikle Themeprovidera verdiğimiz theme güncellenmiş olacak. Ve syfa refresh olduğunda kullanıcın theme tercihi değişmemesi için storage da güncellenmiş oluyor.

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />{/* statelerimizi approuter aracılığıyla footer a yollayacağız */}
    </ThemeProvider>
  );
}

export default App;
