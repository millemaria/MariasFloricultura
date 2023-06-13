

async function flowesAPI() {

  const url = '../data/flowers.json'
  const fetching = await fetch(url)
  const response = await fetching.json()
  return await response.flores
  
}
