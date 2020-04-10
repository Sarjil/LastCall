@breweries.each do |brewery|
    json.set! brewery.id do
        json.extract! brewery, :id, :name, :location, :description, :beer_ids
        json.numBeers brewery.beers.size
    end
end
