@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :style, :abv, :description
        json.breweryId beer.brewery_id 
        json.imgUrl url_for(beer.photo)
    end
end
