export async function getCars() {
   
    const res = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: {
            'X-RapidAPI-Key': '92a53137f1mshb67166f0ffbacc3p12ab5djsn9d36deb9e5a9',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    })

    const result = await res.json()

    return result
}