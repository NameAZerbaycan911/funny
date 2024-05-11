const right = document.querySelector("#right")
const carvagal = document.querySelector(".carvagal")
const fabars = document.querySelector(".fa-bars")
const leftt = document.querySelector(".leftt")






// async function picture12(){
//     const pict = await fetch("./photo1.json")
//     const picture = await pict.json()
//     if(picture){
//         right.innerHTML =""

//         picture.forEach((item)=>{
//             const a = document.createElement("div")
//             a.id.add("right")
//             a.dataset.id = item.id
//             a.innerHTML = `
//             <img src=${item.picture1} alt="" class="emirates">
//             <img src="adidas_gray.jpg" alt="" class="adidas">
//             <button class="btn">
//                 <i class="fa-solid fa-user"></i>
//                 <span style="font-weight: 500; color: blue;">Sign in</span>
//             </button>
//         </div>
//             `
//             right.appendChild(a)
//         })
//     }
// }
// picture12()


async function carv(){
    const addphoto = await fetch("./photo.json")
    const addd = await addphoto.json()
    if(addd){
        carvagal.innerHTML = ""

        addd.forEach((item)=>{
            const div = document.createElement("div")
            div.classList.add("imgside")
            div.dataset.id = item.id
            div.innerHTML = `
            <img src=${item.picture5} alt="">
            <a href="">Directors' lunch</a>
            `
            carvagal.appendChild(div)
        })
    }
}

carv()



