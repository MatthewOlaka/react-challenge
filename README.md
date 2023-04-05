# React Coding Challenge

## Requirements:

- [x] Create state and controls for each of the 6 attributes (Strength, Dexterity…) so they can be incremented/decremented independently. These 6 attributes make a character.

- [x] Display classes on the screen (Fighter, Wizard…) and visually change the UI when the character meets the minimum requirements for that class (all attributes are greater than or equal to the class minimums)

- [x] When clicking on a class, display the minimum required statistics for that class

- [x] Add an “ability modifier” to each attribute row, this is calculated as +1 for each 2 points above 10, for example…

- 7 -> -2
- 9 -> -1
- 10 -> 0
- 11 -> 0
- 12 -> 1
- 14 -> 2
- 20 -> 5

- [x] Implement skills feature, but didnt finish due to time constraint: Implement skills. Characters have 10 + (4 * int modifier) points to spend on skills. A skill is the sum of points spent and the skill’s corresponding ability modifier (see SKILL_LIST for what ability modifier affects each skill). Display each skill in a row in a separate section. For example, Acrobatics for a character with 12 dexterity may look like
Acrobatics - points: 2 [+] [-] modifier: 1 total: 3 

- [x] Save the character(s) to an API so they can be retrieved when the app starts next time. Make a post request with a JSON payload to https://recruiting.verylongdomaintotestwith.ca/api/{{github_username}}/character to save data, and a get request to https://recruiting.verylongdomaintotestwith.ca/api/{{github_username}}/character to retrieve the data. It will accept any valid JSON blob and return the most recent version

- [x] Implement a maximum on all attributes of 70. For example, if a character has 20 strength and 10 for all other attributes, they must decrease one before they can increase another

- [ ] Add the ability to edit multiple characters simultaneously with the same rules above

## How to Run the Application

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open a web browser and navigate to http://localhost:3000.
6. Follow the on-screen instructions to create a character.

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Node.js
- npm

## Contributors

This project was created by Matthew Olaka.
