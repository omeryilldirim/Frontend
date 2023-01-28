//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

// .env (environment) -> .gitignore

const getNews = async ()=> {
    const API_KEY = "ef6060af1c7b47d2904024c39d2ecc23"
    const URL = `https://newsapi.org/v2/everything?q=nl&apiKey=${API_KEY}`
    
    try {
        const res = await fetch(URL)
        if(!res.ok){
            throw new Error("something wrong")
        }
        const data = await res.json()
        // console.log(data);
        renderNews(data.articles)

    } catch (error) {
        renderError(error);
    }
}

const renderError = (err) => {
    console.log(err)
    const newsDiv = document.getElementById("news")
    newsDiv.innerHTML = 
    `<h2>${err}</h2>
    <img src="./img/404.png" alt="" />`
}

const renderNews = (articles)=>{
    const newsDiv = document.getElementById("news")
    // console.log(articles);
    
    articles.forEach(item =>{
        const {title, urlToImage, description, url} = item
        newsDiv.innerHTML += 
        `<div  class="col col-md-6 col-lg-4 col-xl-3">
        <div class="card">
        <img src="${urlToImage}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="${url}" target="_blank" class="btn btn-warning">Details</a>
        </div>
        </div>
        </div>`
    })
}
getNews()