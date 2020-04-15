json.checkin do
  json.extract! @checkin, :id, :bod  json.toastIds @checkin.toast_ids
  json.commentIds @checkin.comment_ids
  json.beerId @checkin.beer_id
  json.beerName @checkin.beer.name
  json.beerImgUrl url_for(@checkin.beer.photo)
  json.breweryId @checkin.beer.brewery_id
  json.breweryName @checkin.beer.brewery.name
  json.authorId @checkin.author_id
end

@checkin.comments.each do |comment|
  json.comments do 
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.checkinId comment.checkin_id
      json.authorId comment.author_id
     end
  end
end