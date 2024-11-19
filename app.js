const products = [
  {
    "name": "Shirt",
    "attributes": {
      "price_1": 70,
      "price_2": 10,
      "price_3": 195,
    }
  },
  {
    "name": "Shirt2",
    "attributes": {
      "price_1": 59,
      "price_2": 5,
      "price_3": 145, 
    }
  },
  {
    "name": "Shirt3",
    "attributes": {
      "price_1": 41,
      "price_2": 98,
      "price_3": 100, 
    }
  }
]

function getLowestPrice(prod) {

  let prices = Object.values(prod["attributes"])
  
  if(!prices.length) return 'For price inquiries, please contact us.'

  prices = prices.filter(price => typeof price === 'number' && !Number.isNaN(price) && Number.isFinite(price))

  const lowestPrice = Math.min(...prices)

  return `from ${lowestPrice} Kč`
}

const price = products.forEach(function(prod) {
  console.log(getLowestPrice(prod))
})
