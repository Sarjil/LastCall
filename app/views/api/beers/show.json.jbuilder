json.beer do 
    json.extract! @beer, :id, :name, :style, :abv, :description
    json.breweryId @beer.brewery_id
    json.imgUrl url_for(@beer.photo)
end

json.brewery do
    json.extract! @beer.brewery, :id, :name, :location, :description
end 