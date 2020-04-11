json.brewery do 
    json.extract! @brewery, :id. :name, :location, :description
    json.numBeers @brewery.beers.length
    json.beerIds @brewery.beer_ids
    json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached? 
end

@brewery.beers.each do |beer|
    json.beers do 
        json.set! beer.id do
            json.extract! beer, :id, :name, :abv, :style, :description
            json.breweryId beer.breweryId 
            json.imgUrl url_for(beer.photo) if beer.photo.attached? 
        end
    end
end
