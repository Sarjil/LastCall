# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Beer.destroy_all
Brewery.destroy_all
User.destroy_all

#Users 
demoUser = User.create!(username:"BeerLover", email:"BeerLover@gmail.com", password:"password")
user1 = User.create!(username:"BeerFan4Ever", email:"beerfan@gmail.com", password:"password")
user2 = User.create!(username:"BeerBeerBeer", email:"beerbeerbeer@gmail.com", password:"password")
user3 = User.create!(username:"ILoveBeer", email:"ilovebeer@aol.com", password:"password")
user4 = User.create!(username:"CoorsLite4Lyfe", email:"coorsfan@coors.com", password:"password")
user5 = User.create!(username:"Hoptastic", email:"hop@hop.com", password:"password")
user6 = User.create!(username:"YumBeer", email:"mmmburrr@netscape.net", password:"password")

#Breweries

stone = Brewery.create!(name:"Stone Brewing Co.", location:"Escondido, California", description:" Stone Brewing is a brewery headquartered in Escondido, California, USA. Founded in 1996 in San Marcos, California, it is the largest brewery in Southern California. Based on 2016 sales volume it is the eighth largest craft brewery in the United States. ")
alchemist = Brewery.create!(name:"The Alchemist", location:"Stowe,Vermont", description:"The Alchemist is a family run brewery specializing in fresh, unfiltered IPA. John and Jen Kimmich originally opened The Alchemist as a 60 seat brew pub in the village of Waterbury in 2003. After eight years of success and growing popularity, they decided to open a small seedsuction brewery. Today The Alchemist currently operates two breweries in Vermont and distributes Heady Topper and Focal Banger throughout the state.")
samadams = Brewery.create!(name:"Samuel Adams Boston Brewery ", location:"Boston, Massachussets", description:"Well-known brewery with a long history lures locals & visitors with tours, tastings & a gift shop.")
bluepoint = Brewery.create!(name:"Blue Point", location:"Patchogue, NY", description:"At Blue Point, we brew beer that stands up to New York's standards. We know it’s good, they know it’s good, and if someone disagrees, f*** ‘em. We first and foremost brew beer that we want to drink. If there’s some leftover, we’ll sell it. ")
singlecut = Brewery.create!(name:"SingleCut Beersmiths", location:"Queens, NY", description:"Brewing all beers on site, this taproom offers live music, outdoor seating, and facility tours")
hill  = Brewery.create!(name:"Hill Farmstead Brewery", location:"Greensboro, VT", description:"Microbrewery shop offering bottles & growlers of its rustic farmhouse ales, plus tastings ")
whiteclaw  = Brewery.create!(name:"White Claw", location:"USA", description:"White Claw Hard Seltzer is an alcoholic seltzer water beverage owned by Mark Anthony Brands. The beverage was introduced in 2016 It is sold under nine different 100-calorie, 5% ABV flavors that include Black Cherry, Ruby Grapefruit, Natural Lime, Raspberry, Mango, Lemon, Tangerine, Watermelon and Pure Hard Seltzer.")
#   = Brewery.create!(name:" ", location:" ", description:" ")
#   = Brewery.create!(name:" ", location:" ", description:" ")



#Brewery Photos
samadams.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/samadamslogo.png'), filename: 'samadamslogo.png')
alchemist.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/alchemistlogo.jpg'), filename: 'alchemistlogo.jpg')
stone.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/stonelogo.png'), filename: 'stonelogo.png')
bluepoint.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/bluepointlogo.png'), filename: 'bluepointlogo.png')
singlecut.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/singluecutlogo.png'), filename: 'singluecutlogo.png')
hill.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/hill.png'), filename: 'hill.png')
whiteclaw.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/whiteclaw.png'), filename: 'whiteclaw.png')






#Beers
stone1 = Beer.create!(name: "Stone IPA", brewery_id: stone.id , style:"IPA", abv:"6.9%", description:"By definition, an India pale ale is hoppier and higher in alcohol than its little brother, pale ale—and we deliver in spades. One of the most well-respected and best-selling IPAs in the country, this golden beauty explodes with tropical, citrusy, piney hop flavors and aromas, all perfectly balanced by a subtle malt character. This crisp, extra hoppy brew is hugely refreshing on a hot day, but will always deliver no matter when you choose to drink it.")
stone2 = Beer.create!(name: "Fear Movie Lions", brewery_id: stone.id , style:"Double IPA", abv:"8.5%", description:"New England-Style IPAs are all the rage. Fans of Stone repeatedly ask for our take on the style, which can be met with some criticism. Rooted in West-Coast style IPAs for decades, how would we do it? Fear no more. Our brewers took the approach to deliver incredibly hoppy and aromatic flavor while keeping it very balanced, and upping the alcohol unnoticeably - nailing this astounding one-of-a-kind creation. Overall this unfiltered double IPA is juiced up with massive tropical & citrus notes. The mild bitterness and relatively dry body compliment the style, and the residual maltiness nicely rounds it out. Lingering lime peel and tropical fruit derived from the hops stand out on the finish, begging one to seek out more. What 3 words pinpoint where this beast was born? The location is printed on the can.")
stone3 = Beer.create!(name: "Buenaveza Salt & Lime Lager", brewery_id: stone.id , style:"Lager", abv:"4.7%", description:"In 1996, Stone Brewing was founded in San Diego County, just minutes from the border. Since then, influence from our southern neighbors has enriched and inspired us on our undying mission to brew bold, flavorful beers. One such inspiration is Stone Xocoveza, our imperial stout originally released in 2014 to bring the rich, complex flavors of Mexican hot chocolate to beer. It’s with mucho gusto that we now follow with our take on a classic lager that is similarly inspired (and tasty) - Stone Buenaveza Salt & Lime Lager.")
stone1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/stone_ipa.jpeg'), filename: 'stone_ipa.jpeg')
stone2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/fear_movie_lions.jpeg'), filename: 'fear_movie_lions.jpeg')
stone3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/buenaviza.jpg'), filename: 'buenaviza.jpg')

alchemist1 = Beer.create!(name: "Heady Topper", brewery_id: alchemist.id, style:"Double IPA", abv:"8.0%", description: "We love hops – that’s why our flagship Double IPA, Heady Topper, is packed full of them. Heady Topper was designed to showcase the complex flavors and aromas these flowers seedsuce. The Alchemist has been brewing Heady Topper since 2003. This Double IPA is not intended to be the strongest or most bitter DIPA. It is brewed to give you wave after wave of hop flavor without any astringent bitterness. We brew Heady Topper with a proprietary blend of six hops – each imparting its own unique flavor and aroma. Take a big sip of Heady and see what hop flavors you can pick out. Orange? Tropical Fruit? Pink Grapefruit? Pine? Spice? There is just enough malt to give this beer some backbone, but not enough to take the hops away from the center stage.")
alchemist2 = Beer.create!(name: "Focal Banger", brewery_id: alchemist.id, style:"American IPA", abv:"7.0%", description:"American IPA with Citra & Mosaic hops.")
alchemist3 = Beer.create!(name: "Luscious", brewery_id: alchemist.id, style:"Stout", abv:"9.0%", description:"British-style imperial stout")
alchemist1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/headytopper.jpg'), filename: 'headytopper.jpg')
alchemist2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/focalbanger.png'), filename: 'focalbanger.png')
alchemist3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/luscious.jpg'), filename: 'luscious.jpg')

sam1 = Beer.create!(name: "Boston Lager", brewery_id: samadams.id, style:"Lager", abv:"5.0%", description:"Samuel Adams Boston Lager helped lead the American beer revolution, reviving a passion for full-flavored brews.")
sam2 = Beer.create!(name: "Octoberfest", brewery_id: samadams.id, style:"Marzen", abv:"5.3%", description:"In 1810, the Oktoberfest tradition was born when Munich celebrated the Crown Prince's wedding with a special beer and 16-day party. Our version of this classic style blends hearty malts for a deep, smooth flavor with notes of caramel, creating a brew that’s perfect for the season, or whatever you're celebrating")
sam3 = Beer.create!(name: "Cherry Wheat", brewery_id: samadams.id, style:"American Wheat Ale", abv:"5.3%", description:"Distinct Cherry Tartness with a Touch of Sweet Honey.")
sam1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/bostonlager.jpeg'), filename: 'bostonlager.jpeg')
sam2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/octoberfest.jpg'), filename: 'octoberfest.jpg')
sam3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/cherrywheat.jpeg'), filename: 'cherrywheat.jpeg')


bluepoint1 = Beer.create!(name: "Toasted Lager", brewery_id: bluepoint.id , style:"Lager", abv:"5.5%", description:"Toasted Lager was originally named for the “toasted” characteristics of our original direct-fire brick kettle. Our World Beer Cup gold medal winning flagship brew is brewed with a blend of six specialty malts for a flavor as rich and unique as the town it’s from. Toasted Lager’s balanced flavor of malt and hops makes for easy drinking and our special proprietary lager yeast seedsuces an exceptional, long-lasting smooth finish.")
bluepoint2 = Beer.create!(name: "Imperial Sunhine", brewery_id: bluepoint.id , style:"Blonde Ale", abv:"9.6%", description:"Our Imperial Sunshine is a bright, refreshing brew with a `bit of punch` - not for the faint hearted. Brewed with orange peel, this strong blonde ale packs a nose reminiscent of orange Tic Tacs, hard candy and our favorite non-alcoholic drink, Tang. But don't get it twisted... the drinkability on this one will have you waking up wondering how you lost your shoe. Enjoy the trip!")
bluepoint3 = Beer.create!(name: "Hoptical Illusion", brewery_id: bluepoint.id , style:"IPA", abv:"7.0%", description:"Plenty of hops are added to this brew in 5 different ways, which allows the “Essence of the Hop” to burst through and give that signature resiny, citrus-filled flavor for which Hoptical Illusion is known. This award-winning IPA is truly a hop lover’s dream.")
bluepoint1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/toasted_lager.png'), filename: 'toasted_lager.png')
bluepoint2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/imperial_sunshine.png'), filename: 'imperial_sunshine.png')
bluepoint3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/hoptical_illusion.png'), filename: 'hoptical_illusion.png')


singlecut1 = Beer.create!(name: "Jan Alpine White Lager", brewery_id: singlecut.id , style:"Lager", abv:"5.2%", description:"THE OLFACTORY IS working overtime, noting the distinct sweet citrus, delicate flowery herbal and complex citrus spice aromas and flavors of this lager. Smooth soft light malt, finishes very dry and clean with an orange zest bitterness. Perhaps our ultimate patio brew.")
singlecut2 = Beer.create!(name: "ERIC MORE COWBELL! CHOCOLATE MILK STOUT NITRO", brewery_id: singlecut.id , style:"Stout", abv:"6.0%", description:"WE’VE GOT A FEVER – And there is only one cure: a lusciously creamy, slightly sweet Stout that sits atop a roast malt base and huge cocoa infusion that will rock all night long.")
singlecut3 = Beer.create!(name: "Half-Stack IPA", brewery_id: singlecut.id , style:"IPA", abv:"6.6%", description:"CRANK THE HOPS to the point right before tastebuds bleed with a PNW / Aussie blend. Super smooth malt base, pine resin, bright tangerine and pineapple hop flavor and aromatics.  At 105 IBU’s, “Half-Stack” is a relative term – As we like to say, “If it’s too hoppy, you’re too old!”")
singlecut4 = Beer.create!(name: "Kim Hisbiscus Sour", brewery_id: singlecut.id , style:"Sour", abv:"4.2%", description:"THE ORIGINAL IN OUR “KIM” LINE-UP –  Refreshingly tart and infused with hibiscus for a pleasing round herbal flavor and gorgeous pink hue. Blackcurrants are also added to give a complementary deep fruit flavor and aroma. Wheat malt provides a sweet and dry template and finally we ferment using our house lager yeast for an exceptional clean and dry finish.")
singlecut5 = Beer.create!(name: "Weird & Gilly IPA", brewery_id: singlecut.id , style:"IPA", abv:"6.6%", description:"SOME CAT FROM JAPAN suggested we do an IPA that is J-U-I-C-Y. So we packed up a pack horse and made it happen! Soft doughy and slightly tangy malt lies under bright citrus, round tropical fruit and mild pine resin hop aromatics that underscore the waves of flavors to come.")
singlecut1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/janbeer.png'), filename: 'janbeer.png')
singlecut2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/ericbeer.png'), filename: 'ericbeer.png')
singlecut3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/halfstack.png'), filename: 'halfstack.png')
singlecut4.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/kimhibiscus.png'), filename: 'kimhibiscus.png')
singlecut5.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/weirdgilly.png'), filename: 'weirdgilly.png')


hill1 = Beer.create!(name: "Amarillo Single Hop IPA", brewery_id: hill.id, style:"IPA", abv:"6.0%", description:"Single Hop India Pale Ale with Amarillo")


whiteclaw1 = Beer.create!(name: "Pure", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Pure Hard Seltzer")
whiteclaw2 = Beer.create!(name: "Lemon", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Lemon Flavored Hard Seltzer")
whiteclaw3 = Beer.create!(name: "Mango", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Mango Flavored Hard Seltzer")
whiteclaw4 = Beer.create!(name: "Black Cherry", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Black Cherry Flavored Hard Seltzer")
whiteclaw5 = Beer.create!(name: "Watermelon", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Watermelon Flavored Hard Seltzer")
whiteclaw6 = Beer.create!(name: "Tangerine", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Tangerine Flavored Hard Seltzer")
whiteclaw7 = Beer.create!(name: "Natural Lime", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Lime Flavored Hard Seltzer")
whiteclaw8 = Beer.create!(name: "Ruby Grapefruit", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Grapefruit Flavored Hard Seltzer")
whiteclaw9 = Beer.create!(name: "Raspberry", brewery_id: whiteclaw.id, style:"Hard Seltzer", abv:"5%", description:"Crisp Raspberry Flavored Hard Seltzer")
whiteclaw1.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/pure.png'), filename: 'pure.png')
whiteclaw2.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/lemon.png'), filename: 'lemon.png')
whiteclaw3.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/mango.png'), filename: 'mango.png')
whiteclaw4.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/blackcherry.png'), filename: 'blackcherry.png')
whiteclaw5.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/watermelon.png'), filename: 'watermelon.png')
whiteclaw6.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/tangerine.png'), filename: 'tangerine.png')
whiteclaw7.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/lime.png'), filename: 'lime.png')
whiteclaw8.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/grapefruit.png'), filename: 'grapefruit.png')
whiteclaw9.photo.attach(io: open('https://lastcall-seeds.s3.amazonaws.com/raspberry.png'), filename: 'raspberry.png')


#  = Beer.create!(name: "", brewery_id: , style:"", abv:"", description:"")
#  = Beer.create!(name: "", brewery_id: , style:"", abv:"", description:"")
#  = Beer.create!(name: "", brewery_id: , style:"", abv:"", description:"")
#  = Beer.create!(name: "", brewery_id: , style:"", abv:"", description:"")