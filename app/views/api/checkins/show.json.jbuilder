json.checkin do
  json.extract! @checkin, :id, :body
  json.createdAt @checkin.created_at
  json.beerId @checkin.beer_id
  json.beerName @checkin.beer.name
  json.beerImgUrl url_for(@checkin.beer.photo)
  json.breweryId @checkin.beer.brewery_id
  json.breweryName @checkin.beer.brewery.name
  json.authorId @checkin.author_id
  json.authorName @checkin.author.username
end

# @checkin.comments.each do |comment|
#   json.comments do 
#     json.set! comment.id do
#       json.extract! comment, :id, :body
#       json.checkinId comment.checkin_id
#       json.authorId comment.author_id
#      end
#   end
# end