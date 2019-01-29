class Session < ApplicationRecord
	validates_presence_of :title, :start_date
end
