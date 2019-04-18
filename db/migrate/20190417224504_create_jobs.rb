class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :customer, null: false
      t.date :date, null: false
      t.time :start_time, null: false
      t.time :estimated_end_time, null: false
      t.timestamps
    end
  end
end
