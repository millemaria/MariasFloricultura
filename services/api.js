

async function flowesAPI() {

  const url = 'https://raw.githubusercontent.com/millemaria/MariasFloricultura/main/data/flowers.json'
  const fetching = await fetch(url)
  const response = await fetching.json()
  return await response.flores
  
}
