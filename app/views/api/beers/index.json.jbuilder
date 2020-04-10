@beers.each do |beer|
    json.set beer.id do
        json.extract! :name, :style, :description, :abv, :id 
        json.breweryId beer.brewery_id 
    end
end
