class CreateCoaches < ActiveRecord::Migration[5.2]
  def change
    create_table :coaches do |t|
      t.string :first_name
      t.string :last_name
      t.integer :user_id

      t.timestamps
    end
    add_index :coaches, :user_id
  end
end
