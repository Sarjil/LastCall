class AddCheckinToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :checkin_id, :integer, null: false
  end
end
