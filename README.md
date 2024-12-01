This project is a simple Employee Management System built using HTML, CSS, and JavaScript. The system allows users to register employees, view a list of employees, perform search and delete operations, and paginate through the employee records.

Features
1. Employee Registration
A user-friendly form to add new employees.
Fields include:
Name
Position
About
Joining Date
Data is stored in the browser's localStorage.
2. Employee Listing
Displays all registered employees in a table format.
Features:
Search: Filter employees by name.
Delete: Remove an employee from the list.
Pagination: View employees in pages of 5 records each.
3. Responsive Design
The interface is responsive and adapts to various screen sizes.
Includes a hamburger menu for smaller screens.
4. Footer
Contains links to social media profiles with icons.

Demo
Home Page
The home page includes a search bar, navigation menu, and options to navigate to the registration and listing pages.

Employee Registration Page
A form to register new employees with validations.

Employee List Page
Displays the employee table with search, delete, and pagination functionalities.

File Structure
├── index.html        # Main entry file
├── register.html     # Employee registration page
├── list.html         # Employee listing page
├── index.css         # Stylesheet for the application
├── index.js          # JavaScript for functionalities
├── assets/
│   ├── facebook.png  # Social media icon
│   ├── twitter.png   # Social media icon
│   ├── instagram.png # Social media icon
│   └── linkedin.png  # Social media icon
└── README.md         # Project documentation
Installation and Usage
Clone the Repository

git clone https://github.com/<your-username>/manage-employees.git
Open in Browser

Open the index.html file in your preferred browser.
Navigate

Use the navigation bar to switch between Employee Registration and Employee Listing pages.


How It Works
Adding an Employee
Navigate to the Employee Registration page.
Fill in the required fields and click Submit.
The employee data is saved to localStorage and redirected to the listing page.
Viewing Employees
Navigate to the Employee List page.
Search for employees by name using the search bar.
Use the pagination buttons to navigate through records.
Deleting an Employee
Click the Delete button for an employee.
The employee is removed from the list and localStorage.
Technologies Used
HTML5: Markup for the structure.
CSS3: Styling and responsiveness.
JavaScript: Functionality and dynamic rendering.
LocalStorage: Storing employee data.
