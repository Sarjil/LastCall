json.checkin do
  json.extract! @checkin, :id, :body
  json.createdAt @checkin.created_at
  json.toastIds @checkin.toast_ids
  json.beerId @checkin.beer_id
  json.beerName @checkin.beer.name
  json.beerImgUrl url_for(@checkin.beer.photo)
  json.breweryId @checkin.beer.brewery_id
  json.breweryName @checkin.beer.brewery.name
  json.authorId @checkin.author_id
  json.authorName @checkin.author.username
  json.commentIds @checkin.comment_ids
end

@checkin.comments.each do |comment|
  json.comments do 
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.checkinId comment.checkin_id
      json.authorId comment.author_id
      json.authorName comment.author.username 
      json.updatedAt comment.updated_at
     end
  end
end

@checkin.toasts.each do |toast|
  json.toasts do 
    json.set! toast.id do
      json.id toast.id
      json.checkinId toast.checkin_id
      json.userId toast.user_id
    end
  end
end