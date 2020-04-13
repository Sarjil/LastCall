json.beer do 
    json.extract! @beer, :id, :name, :style, :abv, :description
    json.breweryId @beer.brewery_id
    json.breweryName @beer.brewery.name
    json.name @beer.name
    json.style @beer.style
    json.abv @beer.abv
    json.description @beer.description
    json.imgUrl url_for(@beer.photo)
end

json.brewery do
    json.extract! @beer.brewery, :id, :name, :location, :description
end 