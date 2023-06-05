

async function teste() {

  const url = 'data/flowers.json'
  const fetching = await fetch(url)
  const products = await fetching.json()
  return await products.flores
}

console.log(teste())

