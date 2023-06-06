
const getFlowers = async () => {
    const t = await flowesAPI()
    t.map((e) => {
        console.log(e)
    })
}

getFlowers()