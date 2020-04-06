class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false 
      t.integer :brewery_id, null: false 
      t.string :type

      t.timestamps
    end

    add_index(:beers, [:name, :brewery_id])
  end
end
