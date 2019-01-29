Then("I should see {string}") do |content|
  expect(page).to have_content content
end

Then('I am on Sign up page') do
  expect(current_path).to eq new_user_registration_path
end