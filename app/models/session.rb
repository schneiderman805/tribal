class Session < ApplicationRecord
	validates_presence_of :title, :start_date

	enum status: { available: 0, booked: 1, full: 2 }
end
