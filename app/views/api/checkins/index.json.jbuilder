@checkins.each do |checkin|
    json.set! checkin.id do 
    json.extract! checkin, :id, :body 
    json.beerId checkin.beer_id 
    json.beerName checkin.beer.name
    json.commentIds checkin.comment_ids 
    json.breweryId checkin.beer.brewery_id
    json.breweryName checkin.beer.brewery.name
    json.authorId checkin.author_id
    end 
end 