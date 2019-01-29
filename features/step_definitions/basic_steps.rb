Given("I visit the site") do
  visit root_path
end

Given("the following sessions exist") do |table|
  table.hashes.each do |session|
		create(:session, session)
	end
end
