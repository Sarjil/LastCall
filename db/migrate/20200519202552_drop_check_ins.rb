class DropCheckIns < ActiveRecord::Migration[5.2]
  def change
    drop_table :check_ins
  end
end
