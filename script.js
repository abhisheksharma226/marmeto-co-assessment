//For Color Selection
const swatches = document.querySelectorAll('.color-swatch');
        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                // Add your logic here for handling the click event
               
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


 









//Discount

const priceElement = document.querySelector('.price');
const priceTagElement = document.querySelector('.price-tag span');
const discountElement = document.querySelector('.discount');

// Extract prices from the elements
const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g,""));
const priceTag = parseFloat(priceTagElement.textContent.replace(/[^0-9.-]+/g,""));

// Calculate the discount percentage
const discountPercentage = ((priceTag - price) / priceTag) * 100;

// Update the text of the discount element
discountElement.textContent = `${Math.round(discountPercentage)}% Off`;



//color
// Get all color swatches
const colorSwatches = document.querySelectorAll('.color-swatch');

// Add click event listener to each color swatch
colorSwatches.forEach(colorSwatch => {
    colorSwatch.addEventListener('click', () => {
        // Remove check symbol from all color swatches
        colorSwatches.forEach(sw => {
            sw.innerHTML = ''; // Clear previous content
          });
          
        // Add check symbol to the clicked color swatch
        const checkSymbol = document.createElement('span');
        checkSymbol.innerHTML = '&#10003;'; // Unicode for check symbol
        colorSwatch.appendChild(checkSymbol);
      });
});




//image selection
function changeMainImage(clickedImage) {
  var mainImage = document.getElementById("mainImage");
  
  // Remove border from all images
  var images = document.querySelectorAll('.img img');
  images.forEach(img => {
      img.style.border = 'none';
  });
  
  // Set border to the clicked image
  clickedImage.style.border = '2px solid #6c5b9e'; // Adjust border color and width as needed
  
  // Set the clicked image as the main image
  mainImage.src = clickedImage.src;
}






// Function to gather selected color, size, and quantity information
function getSelectedDetails() {
  const selectedColor = document.querySelector('.color-swatch span')?.parentElement?.style.backgroundColor ?? 'Not selected';
  const selectedSize = document.querySelector('input[name="size"]:checked')?.nextElementSibling?.textContent ?? 'Not selected';
  const selectedQuantity = document.getElementById('number').textContent;

  return {
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity
  };
}

// Function to display selected details in a box
function displaySelectedDetails(details) {
  const detailsBox = document.createElement('div');
  detailsBox.classList.add('details-box');
  detailsBox.innerHTML = `
      <p>Embrace Sideboard with color ${details.color} and Size ${details.size} and quantity ${details.quantity} added to Cart</p>
  `;
  // Get the container after which you want to insert the details box
  const btnsContainer = document.querySelector('.btns');
  // Insert the details box after the btns container
  btnsContainer.insertAdjacentElement('afterend', detailsBox);
}

// Add click event listener to the "Add to Cart" button
document.querySelector('.add-button').addEventListener('click', () => {
  const selectedDetails = getSelectedDetails();
  displaySelectedDetails(selectedDetails);
});
