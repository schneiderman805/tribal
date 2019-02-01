class CreateTrainees < ActiveRecord::Migration[5.2]
  def change
    create_table :trainees do |t|
      t.string :first_name
      t.string :last_name
      t.integer :user_id

      t.timestamps
    end
    add_index :trainees, :user_id
  end
end
