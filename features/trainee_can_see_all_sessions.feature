@javascript
Feature: Trainee can see all sessions

	As a Trainee
	In order to be able to choose the session I want
	I would like to see all the available sessions on the home page

	Background:
		Given the following sessions exist
			| title    | start_date          | end_date            |
			| Crossfit | 2019-02-01 15:00:00 | 2019-02-01 15:30:00 |

	Scenario: Trainee can view all sessions on the Home Page
		Given I visit the site
		Then I should see 'Crossfit'
		And I should see '2/1/2019, 4:00:00 PM'
		And I should see '2/1/2019, 4:30:00 PM'
