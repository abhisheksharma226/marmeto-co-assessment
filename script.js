//For Increase or decrease bar
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

const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g,""));
const priceTag = parseFloat(priceTagElement.textContent.replace(/[^0-9.-]+/g,""));

const discountPercentage = ((priceTag - price) / priceTag) * 100;

discountElement.textContent = `${Math.round(discountPercentage)}% Off`;



//color
const colorSwatches = document.querySelectorAll('.color-swatch');


colorSwatches.forEach(colorSwatch => {
    colorSwatch.addEventListener('click', () => {
     
        colorSwatches.forEach(sw => {
          sw.innerHTML = ''; 
          });
          
        const checkSymbol = document.createElement('span');
        checkSymbol.innerHTML = '&#10003;'; 
        colorSwatch.appendChild(checkSymbol);
      });
});




//image selection
function changeMainImage(clickedImage) {
  var mainImage = document.getElementById("mainImage");
  
  
  var images = document.querySelectorAll('.img img');
  images.forEach(img => {
      img.style.border = 'none';
  });
  

  clickedImage.style.border = '2px solid #6c5b9e';
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

function displaySelectedDetails(details) {
  const detailsBox = document.createElement('div');
  detailsBox.classList.add('details-box');
  detailsBox.innerHTML = `
      <p><b>Embrace Sideboard with color ${details.color} and Size ${details.size} and quantity ${details.quantity} added to Cart</b></p>
  `;
 
  const btnsContainer = document.querySelector('.btns');

  btnsContainer.insertAdjacentElement('afterend', detailsBox);

  setTimeout(() => {
    detailsBox.remove();
  }, 3000);

}

document.querySelector('.add-button').addEventListener('click', () => {
  const selectedDetails = getSelectedDetails();
  displaySelectedDetails(selectedDetails);
});


  //For Color Selection
  const swatches = document.querySelectorAll('.color-swatch');
          swatches.forEach(swatch => {
              swatch.addEventListener('click', () => { 
              });
          });