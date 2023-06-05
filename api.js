

async function teste() {

  const url = 'data/flowers.json'
  const fetching = await fetch(url)
  const products = await fetching.json()
  return await products.flores
}

const t = async () => {
  const flores = await teste()


  flores.map((e) => {
    
    console.log(e.nome + e.valor)

  })
}

t()