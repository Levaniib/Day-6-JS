let container = document.querySelector(".container")
// let card = document.createElement("div")
// card.classList.add("card")
// container.appendChild(card)
// card.style.width = "320px"
// card.style.height = "200px"
// card.style.backgroundColor = "rgb(87,161,2)"
// card.style.borderRadius = "20px"
// card.style.margin = "50px"
// card.style.boxShadow = "0px 0px 40px rgb(87,161,2)"

container.style.display = "flex"
container.style.justifyContent = "space-between"
container.style.alignItems = "center"
container.style.flexWrap = "wrap"

// let left = document.createElement("div")
// left.classList.add("left")
// card.appendChild(left)

// let right = document.createElement("div")
// right.classList.add("right")
// card.appendChild(right)

function createCard(name,url){
    // ქმნის ქარდს
    let card = document.createElement("div")
    card.classList.add("card")
    container.appendChild(card)
    card.style.width = "320px"
    card.style.height = "200px"
    card.style.backgroundColor = "rgb(87,161,2)"
    card.style.borderRadius = "20px"
    card.style.margin = "50px"
    card.style.boxShadow = "0px 0px 40px rgb(87,161,2)"
    // ქმნის მარცხენა დივს
    let left = document.createElement("div")
    left.classList.add("left")
    card.appendChild(left)
    left.style.backgroundImage = `url(${url})`
    // ქმნის მარჯვენა დივს
    let right = document.createElement("div")
    right.classList.add("right")
    card.appendChild(right)
    right.innerText = name

}

// for(i = 0; i < 10; i++){
//     createCard();
// }


let products= [["Beef Enchiladas","https://images-gmi-pmc.edge-generalmills.com/8ba62fee-ecf3-4360-8b7f-ae7cbf7c6d74.jpg"],
               ["Kielbasa", "https://www.budgetbytes.com/wp-content/uploads/2021/10/Bratwurst-and-Sauerkraut-2.jpg"],
               ["Shrimp with Mango", "https://www.carolinescooking.com/wp-content/uploads/2018/12/baked-coconut-shrimp-mango-sauce-photo.jpg"],
               ["Crab Cakes", "https://amandascookin.com/wp-content/uploads/2022/07/Crab-Cakes-RCSQ-500x500.jpg"],
               ["Favorite Meatloaf","https://assets.epicurious.com/photos/58c956ec1c37a669031b2fdf/master/pass/Frankenrecipe-Meatloaf-recipe-03022017tif.jpg"]
            ]

for(let i=0; i < products.length; i++){
    console.log(products[i]);
    createCard(products[i][0],products[i][1])
    // for(let o = 0; o < products[i].length; o++){
    //     console.log(products[i][o]);
    //     createCard(products[i][0],products[i][1])
    // }
}

