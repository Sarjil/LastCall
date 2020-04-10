json.beer do 
    json.extract! @beer, :id, :name, :style, :abv, :description
    json.breweryId @beer.brewery_id
end

json.brewery do
    json.extract! @beer.brewery, :id, :name, :location, :description
end 