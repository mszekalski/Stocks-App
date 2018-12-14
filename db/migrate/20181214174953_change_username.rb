class Changeemail < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :email, :email
  end
end
