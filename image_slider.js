var image2 ="https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"

let imageNum = 1

const images = {
    image1: "https://images.unsplash.com/photo-1589045662554-85bd4ab083a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    image2: "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    image3: "https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    image4: "https://images.unsplash.com/photo-1562436261-3d97e9e237c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1318&q=80",
    image5: "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",

}


function nextImg() {
    imageNum+= 1

    if (imageNum > Object.keys(images).length) {
        imageNum = 1
    }

    let n = imageNum.toString()
    let newImg = "image"+ n

    document.getElementById("bgImg").style.backgroundImage = "url("+images[newImg]+")";
    document.getElementById("slider").style.backgroundImage = "url("+images[newImg]+")";
}

function previousImg() {
    imageNum -= 1
    if (imageNum < 1) {
        imageNum = Object.keys(images).length
    }


    let newImg = "image" + imageNum.toString()

    document.getElementById("bgImg").style.backgroundImage = "url("+images[newImg]+")";
    document.getElementById("slider").style.backgroundImage = "url("+images[newImg]+")";
}

function transition() {
    document.getElementById("slider").style.transition = "1s";
    
    

}