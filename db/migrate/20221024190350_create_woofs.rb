class CreateWoofs < ActiveRecord::Migration[7.0]
  def change
    create_table :woofs do |t|
      t.string :image_url
      t.string :woof_content

      t.timestamps
    end
  end
end
