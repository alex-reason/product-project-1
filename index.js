//////////////////////////////////
// sort items in shop
const arrShopItemsPrices = [80, 101, 50, 35, 100, 99];
const idName = 'shop-item';
const sortButton = document.querySelector('.sort__button');

const sortDivs = (arr, sortButtonText) => {
    for (let i = 0; i < arr.length; i++) {
        let itemId = document.querySelector(`#${idName}-${arr[i]}`);
        itemId.style.order = i;
    }
    sortButton.innerText = `${sortButtonText}`;
}

// sort featured 
const sortFeatured = document.querySelector('#sort-featured');
sortFeatured.addEventListener('click', () => {sortDivs(arrShopItemsPrices, 'Sort')});

// sort low to high
const sortLowHigh = document.querySelector('#sort-low-high');
const lowHighArr = arrShopItemsPrices.slice('').sort((a, b) => { return a - b });
sortLowHigh.addEventListener('click', () => {sortDivs(lowHighArr, 'Sorted: Prices Ascending')});

// sort high to low
const sortHighLow = document.querySelector('#sort-high-low');
const highLowArr = arrShopItemsPrices.slice('').sort((a, b) => { return b - a });
sortHighLow.addEventListener('click', () => {sortDivs(highLowArr, 'Sorted: Prices Descending')});

//////////////////////////////////
// Add to Cart changes cart count
let counter = 0;
const cartCount = document.querySelector('#cart-count');
const addToCartBtn = document.querySelectorAll('.shop__add-button');
for (const btn of addToCartBtn){
    btn.addEventListener('click', () => {
        counter +=1;
        cartCount.innerText = counter;
    })
}