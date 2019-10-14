class CreatePedidos < ActiveRecord::Migration[6.0]
  def change
    create_table :pedidos do |t|
      t.string :person
      t.integer :quant
      t.date :when

      t.timestamps
    end
  end
end
