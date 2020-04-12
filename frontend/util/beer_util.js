export const fetchBeers = (beers) =>(
    $.ajax({
        method: "GET",
        url: "/api/beers",
        data: {beers}
    })
)

export const fetchBeer = (beerId) =>(
    $.ajax({
        method: "GET",
        url: `/api/beers/${beerId}`
    })
)

export const createBeer = (beer) =>(
    $.ajax({
        method: "POST",
        url: "/api/beers",
        data: {beer}
    })
)

export const updateBeer = (beer) =>(
    $.ajax({
        method: "PATCH",
        url: `/api/beers/${beer.id}`,
        data: {beer} 
    })
)

export const fetchBreweryBeers = (breweryId) =>(
    $.ajax({
        method: "GET",
        url: `/api/breweries/${breweryId}/beers`
    })
)