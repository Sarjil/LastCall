class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.integer :author_id, null: false 
      t.integer :beer_id, null: false 
      t.text :body, null: false 

      t.timestamps
    end

    add_index(:check_ins, [:author_id, :beer_id])
  end
end
