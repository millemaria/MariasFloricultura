

async function flowersAPIIngles() {

  const urlIngles = 'https://raw.githubusercontent.com/millemaria/MariasFloricultura/main/data/flowersEUA.json'
  const fetching = await fetch(urlIngles)
  const response = await fetching.json()
  return await response.flores

}
