@breweries.each do |brewery|
    json.set! brewery.id do
        json.extract! brewery, :id, :name, :location, :description, :beer_ids
        json.numBeers brewery.beers.size
        json.imgUrl url_for(brewery.photo)
    end
end
