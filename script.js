//For Color Selection
const swatches = document.querySelectorAll('.color-swatch');
        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                // Add your logic here for handling the click event
                console.log(`Selected color: ${swatch.style.backgroundColor}`);
            });
        });
 


        //For Product Quantity
var numberElement = document.getElementById("number");
var currentNumber = 1;

  function increment() {
    currentNumber++;
    numberElement.textContent = currentNumber;
  }

  
  function decrement() {
    if (currentNumber > 1) {
      currentNumber--;
      numberElement.textContent = currentNumber;
    }
  }

  
  document.getElementById("plusBtn").addEventListener("click", function() {
    increment();
  });

 
  document.getElementById("minusBtn").addEventListener("click", function() {
    decrement();
  });


  //For add to cart button
  function addToCart() {
    alert("Item added to cart successfully!");
}



function changeMainImage(clickedImage) {
    var mainImage = document.getElementById("mainImage");
    mainImage.src = clickedImage.src;
}