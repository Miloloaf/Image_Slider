var image2 ="https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"

const images = {
    image1: "https://images.unsplash.com/photo-1589045662554-85bd4ab083a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    image2: "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
}


function nextImg() {

    document.body.style.backgroundImage = "url("+image2+")";
}