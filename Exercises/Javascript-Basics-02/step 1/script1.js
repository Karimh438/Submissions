var a = document.querySelector("img");

a.onmouseover = () => {
    a.src = "images/image1_2.jpg";
}

a.onmouseout = () => {
    a.src = "images/image1.jpg";
}