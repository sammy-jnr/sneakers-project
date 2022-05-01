let shoeimgs = document.getElementsByClassName("shoeimgs")
let shoeimg1 = document.getElementById("shoeimg1")
let shoeimg2 = document.getElementById("shoeimg2")
let shoeimg3 = document.getElementById("shoeimg3")
let shoeimg4 = document.getElementById("shoeimg4")

let currentimg = 0

function chooseImg(){
    if (currentimg === 1){
        shoeimg1.style.display = "none"
        shoeimg2.style.display = "block"
        shoeimg3.style.display = "none"
        shoeimg4.style.display = "none"
    }
    else if (currentimg === 2){
        shoeimg1.style.display = "none"
        shoeimg2.style.display = "none"
        shoeimg3.style.display = "block"
        shoeimg4.style.display = "none"
    }
    else if (currentimg === 3){
        shoeimg1.style.display = "none"
        shoeimg2.style.display = "none"
        shoeimg3.style.display = "none"
        shoeimg4.style.display = "block"
    }
    else if (currentimg >= 4){
        currentimg = 0;
        shoeimg1.style.display = "block"
        shoeimg2.style.display = "none"
        shoeimg3.style.display = "none"
        shoeimg4.style.display = "none"
    }
    else if (currentimg < 0){
        currentimg = 3;
        shoeimg1.style.display = "none"
        shoeimg2.style.display = "none"
        shoeimg3.style.display = "none"
        shoeimg4.style.display = "block"
    }
    else {
        shoeimg1.style.display = "block"
        shoeimg2.style.display = "none"
        shoeimg3.style.display = "none"
        shoeimg4.style.display = "none"
    }
}


let nextbutton = document.getElementById("nextbutton")
let previousbutton = document.getElementById("previousbutton")

nextbutton.addEventListener("click", ()=>{
    currentimg += 1
    chooseImg()
})
previousbutton.addEventListener("click", ()=>{
    currentimg -= 1
    chooseImg()
})

// number of products
let increaseItems = document.getElementById("increaseItems")
let showItems = document.getElementById("showItems")
let decreaseItems = document.getElementById("decreaseItems")
let item_count = 0

increaseItems.addEventListener("click", ()=>{
    item_count += 1;
    showItems.innerHTML = item_count
})

decreaseItems.addEventListener("click", ()=>{
    if(item_count < 1)
    { return}
    item_count -= 1;
    showItems.innerHTML = item_count
})
//tooglecart view

let cartimg = document.getElementById("cartimg")
let cart_section = document.getElementById("cart_section")

cartimg.addEventListener("click", ()=>{
    if (cart_section.style.display === "block"){
        cart_section.style.display ="none"
    }
    else{cart_section.style.display ="block"}
})



//opening side nav
let sidenav = document.getElementById("sidenav")

let menu_icon = document.getElementById("menu_icon")
menu_icon.addEventListener("click", () => {
 sidenav.style.display = "block"
})
let close_icon = document.getElementById("close_icon")
close_icon.addEventListener("click", () => {
    sidenav.style.display = "none"
   })


let choosenitem = document.getElementById("choosenitem")



function AddItemsToCart(){
    let EachItemDiv = document.createElement("DIV")
    EachItemDiv.classList.add("EachItemDiv")
    choosenitem.appendChild(EachItemDiv)


    let productImage = document.createElement('IMG')
    productImage.setAttribute("width", "50px")
    productImage.setAttribute("height", "50px")
    productImage.setAttribute("src", "images\\image-product-1-thumbnail.jpg")
    EachItemDiv.appendChild(productImage) 

    let producttext = document.createElement("DIV")
    producttext.setAttribute("width", "100px")
    producttext.setAttribute("height", "50px")
    producttext.setAttribute("margin-left", "10px")
    producttext.innerHTML = `Autumn Limited Edition.........  $125.00 * ${item_count} $${item_count*125}`
    EachItemDiv.appendChild(producttext)

    let deletebutton = document.createElement("DIV")
    deletebutton.innerHTML = "DEL"
    EachItemDiv.appendChild(deletebutton)
    
    deletebutton.addEventListener("click",()=>{
    deletebutton.parentElement.style.display = 'none'
    })  
}   




const addToCartButton = document.getElementById("addToCartButton")
addToCartButton.addEventListener("click", ()=>{
    if(showItems.innerHTML < 1)
    {return}
    AddItemsToCart()
    alert("added to cart")
    document.getElementById("checkout").style.display = "block"
})