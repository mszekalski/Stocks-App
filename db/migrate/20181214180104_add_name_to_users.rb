class AddNameToUsers < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :f_name, :string, null:false
      add_column :users, :l_name, :string, null:false
  end
end
