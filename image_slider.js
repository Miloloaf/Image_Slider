
const navPips = document.querySelectorAll(".navPips")
const images = {
    image1: "https://images.unsplash.com/photo-1589045662554-85bd4ab083a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    image2: "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
    image3: "https://images.unsplash.com/photo-1559329255-2e7cb2e21ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    image4: "https://images.unsplash.com/photo-1562436261-3d97e9e237c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1318&q=80",
    image5: "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",

}

let imageNum = 1

function nextImg() {

    transitionOut("-800px", "800px")

    imageNum+= 1
    //Loops around if last image
    if (imageNum > Object.keys(images).length) {
        imageNum = 1
    }
    let newImg = "image"+ imageNum.toString()

    updateIn(newImg)
    updatePips(imageNum)

}

function previousImg() {

    transitionOut("800px", "-800px")

    imageNum -= 1
    // Loops around if first image
    if (imageNum < 1) {
        imageNum = Object.keys(images).length
    }
    let newImg = "image" + imageNum.toString()

    updateIn(newImg)
    updatePips(imageNum)

}

function transitionOut(flyOut, flyIn) {
    document.getElementById("slider").style.transition = "0.5s ease";
    document.getElementById("slider").style.left = flyOut;
    setTimeout(function() {
        document.getElementById("slider").style.transition = null;
        document.getElementById("slider").style.left = flyIn;
    }, 100)
}

function transitionIn() {
    document.getElementById("slider").style.transition = "0.5s ease";
    document.getElementById("slider").style.left = "0px";
}

function bgFade(timer) {
    document.getElementById("bgImg").style.opacity = "0";

    setTimeout(function() {
        document.getElementById("bgImg").style.opacity = "1";
    }, timer)
    
}

function pipClick() {
    // Removes previously selected pip Fill
    navPips.forEach(pip => pip.classList.remove("filledin"));

    let previousNum = imageNum
    imageNum = Number(this.getAttribute("image-index"));
    let newImg = "image" + imageNum.toString()
    navPips[imageNum -1].classList.add("filledin");

    // No Effects if selecting same pip
    if (previousNum == imageNum) {
        return
    }

    // Pip Animations
    if (previousNum < imageNum){
            transitionOut("-800px", "800px")
    }  else {
            transitionOut("800px", "-800px")
    }

    updateIn(newImg)
}

function updateIn(newImg) {
    bgFade(300)

    setTimeout(function() {
    document.getElementById("bgImg").style.backgroundImage = "url("+images[newImg]+")";
    document.getElementById("slider").style.backgroundImage = "url("+images[newImg]+")";
    }, 200)

    setTimeout(function() {
        transitionIn()
    }, 300)
}

function updatePips(imageNum) {
    navPips.forEach(pip => pip.classList.remove("filledin"))
    navPips[imageNum -1].classList.add("filledin")
}

navPips.forEach(pip => pip.addEventListener("click", pipClick));
