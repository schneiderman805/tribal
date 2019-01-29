When("I fill in {string} with {string}") do |element, value|
	fill_in element, with: value
end

When("I click {string}") do |element|
	click_on element
end