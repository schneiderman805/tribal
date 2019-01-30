class PriceTable < ApplicationRecord
    validates_presence_of :trainees, :price_point

    enum price: { low: 0, medium: 1, high: 2 }
end
