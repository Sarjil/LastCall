class CreateToasts < ActiveRecord::Migration[5.2]
  def change
    create_table :toasts do |t|
      t.integer :checkin_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :toasts, [:user_id, :checkin_id], unique: true
  end
end
