
let meme = document.getElementById("meme")
let title = document.getElementById("title")
let getMemeBtn = document.getElementById("get_meme_btn")



let url = "https://meme-api.com/gimme/"

let subreddits = ["catmemes","wholesomemes","dogmemes","me_irl"]


let getMeme = () =>{
    let randomreddits = subreddits[Math.floor(Math.random()*subreddits.length)]
    
    fetch(url+randomreddits).then(resp => resp.json())
    .then(data => {

           let memeImg = new Image()
           memeImg.onload = () => {
            meme.src = data.url
            title.innerHTML = data.title
           }
           memeImg.src = data.url
    })
}

getMeme()  

getMemeBtn.addEventListener("click", getMeme)
window.addEventListener("load", getMeme)
