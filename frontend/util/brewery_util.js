export const fetchBreweries = () =>(
    $.ajax({
        method: "GET",
        url: "/api/breweries"
    })
)

export const fetchBrewery = (breweryId) =>(
    $.ajax({
        method: "GET",
        url: `/api/breweries/${breweryId}`
    })
)

export const createBrewery = (brewery) => {
    return $.ajax({
        url: "/api/breweries",
        method: "POST",
        data: { brewery }
    });
};

export const updateBrewery = (brewery) => (
    $.ajax({
        method: "PATCH",
        url: `/api/breweries/${brewery.id}/`,
        data: { brewery }
    })
)