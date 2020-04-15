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

export const createBeer = (beer) => {
    return $.ajax({
        url: "/api/beers",
        method: "POST",
        data: {beer}
    });
};


export const updateBeer = (beer) =>(
    $.ajax({
        method: "PATCH",
        url: `/api/beers/${beer.id}/`,
        data: {beer} 
    })
)

// export const fetchBreweryBeers = (breweryId) =>(
//     $.ajax({
//         method: "GET",
//         url: `/api/breweries/${breweryId}/beers`
//     })
// )