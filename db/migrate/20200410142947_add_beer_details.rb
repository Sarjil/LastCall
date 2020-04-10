class AddBeerDetails < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :description, :text, null: false
    add_column :breweries, :description, :text, null: false   
    add_column :beers, :abv, :string, null: false
    add_column :beers, :style, :string, null: false
  end
end
