@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :body
    json.beerId checkin.beer_id
    json.beerName checkin.beer.name
    json.createdAt checkin.created_at
    json.beerImgUrl url_for(checkin.beer.photo)
    json.commentIds checkin.comment_ids
    json.breweryId checkin.beer.brewery_id
    json.breweryName checkin.beer.brewery.name
    json.authorId checkin.author_id
    json.authorName checkin.author.username
    json.toastIds checkin.toast_ids
  end
end