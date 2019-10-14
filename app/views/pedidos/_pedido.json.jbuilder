json.extract! pedido, :id, :person, :quant, :when, :created_at, :updated_at
json.url pedido_url(pedido, format: :json)
