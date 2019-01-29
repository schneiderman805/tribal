@javascript
Feature: Trainee can see all sessions

	As a Trainee
	In order to be able to choose the session I want
	I would like to see all the available sessions on the home page

	Background:
		Given the following sessions exist
			| title     | start_date          | end_date            | status    |
			| Crossfit  | 2019-02-01 15:00:00 | 2019-02-01 15:30:00 | available |
			| Yoga      | 2019-02-01 19:00:00 | 2019-02-01 19:30:00 | booked    |
			| Body Pump | 2019-02-01 21:00:00 | 2019-02-01 21:30:00 | full      |

	Scenario: Trainee can view all sessions on the Home Page
		Given I visit the site
		Then I should see 'Crossfit' in 'available'
		And I should see '01/02/2019, 16:00:00' in 'available'
		And I should see '01/02/2019, 16:30:00' in 'available'
		Then I should see 'Yoga' in 'booked'
		And I should see '01/02/2019, 20:00:00' in 'booked'
		And I should see '01/02/2019, 20:30:00' in 'booked'
		Then I should see 'Body Pump' in 'full'
		And I should see '01/02/2019, 22:00:00' in 'full'
		And I should see '01/02/2019, 22:30:00' in 'full'
