// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer

let imageContainer = document.querySelector("imageContainer");

// 2. Add at least four image urls to the imageUrls array
let imageUrls = [

    "https://happymag.tv/wp-content/uploads/2021/08/F-14.jpg"
    ,"https://ih1.redbubble.net/image.4964964197.2169/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    ,"https://i.pinimg.com/originals/b4/7f/f3/b47ff37ece33345b4149bd450ba741e7.gif"
    ,"https://ih1.redbubble.net/image.2058563599.0985/flat,750x1000,075,t.jpg"
];


// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(imageUrl){

let image = document.createElement("img");
image.src = imageUrl;
imageContainer.appendChild(image);

})

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
