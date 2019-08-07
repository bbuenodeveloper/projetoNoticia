//Para pegar o click do botão
let btnNoticia = document.querySelector('#pegarNoticias')
let noticias = ""
let container = document.querySelector('.row')

btnNoticia.onclick = ()=>{
//Fazendo chamada na API
fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=1bbfd60fb8bc4f9a9628265b4bad4fef')
.then(resposta => resposta.json())
.then(listaNoticias =>{
    console.log(listaNoticias)

    listaNoticias.articles.forEach((noticia, index) => {
        let card = `
        <div class="col-md-3 p-3 mt-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=" ${noticia.urlToImage} " alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title"> ${noticia.title} </h5>
                <p class="card-text"> ${noticia.description} </p>
                <a href=" ${noticia.url} " class="btn btn-primary">Link da noticia</a>
                </div>
            </div>
        </div>
        `;

        //+= serve para salvar o que vem do card na variavel noticias
        noticias += card

    })
    container.innerHTML = noticias
})
}