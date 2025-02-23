###### RANDOM ANIME QUOTE REACT APP
==============================================================

### Steps to Run this App on your local system:
--------------------------------------------------------------------
1. Pull from GitHub repository "https://github.com/im-HabibKhan/Interactive-Random-Quote-React-App.git" in your Root(working) directory.
    OR
   You may also download the Zip Folder of this repository.

2. On your root(workibng) directory, open VS Code.
      |-- Under the View Tab: Open Terminal.

3. On VS Code Terminal, write:
  ## npm i
#This will install the reuired dependencies and will create 'node_modules' folder in your root(working) directory

4. Hold this Terminal. and Open new Terminal in VS code.

5. Here write:
  ## cd backend
#This will move to our backend sub-folder. Now for our server.js required dependencies, You have to again install node_modules folder as well.

6. In this second Terminal, write:
    ## npm i
#This will install the reuired dependencies for backend folder and will create 'node_modules' folder in your backend folder.

7. After setting up the backend, start the server. Write on the 2nd Terminal:
    ## node server.js
  You should see: Server running on port 5000
------------------------------------------------------------------------

8. Return to Step (4). Welcome Back to your 1st Terminal. Here, write:
    ##  npm run dev

9. Your React APP is now running locally @  http://localhost:5173/

=============================================================================================================================================

### App Description:
""""""""""""""""""""""""""""""""""""""""""
## Objective:
Build a single-page web application using React or Angular that fetches and displays
random anime quotes from the Animechan API
#(https://animechan.io/docs/quote/random),
and maintains a history of the last 10
quotes displayed using browser storage.

## Requirements:
'''''''''''''''''''''''''''''''''''''''''''

1. Fetching Quotes:

-> Fetch a random quote from the provided API endpoint when the page
loads and when the user interacts with the displayed button (e.g., clicks
on it).


2. Quote Display:

-> Display the current random quote prominently in the center of the
screen. Include the quote content, anime name, and character name.
Ensure the quote display is responsive and looks good on different
screen sizes (desktop, tablet, mobile).


3. Quote History:

-> Maintain a list of the last ten displayed quotes using browser storage
(localStorage).
-> Display this list in a scrollable section at the bottom of the page.
-> When a new quote is fetched, add the previous quote to the history list
in browser storage.
-> Ensure the history list never exceeds ten quotes (oldest quote should
be removed if the list is full).


4. Styling:

-> The design is clean and simple but visually appealing.


### Bonus:
-----------------
● Implement error handling for API requests (e.g., display an error message if
the API is unavailable).

● Allow users to select favorite quotes and store them in a separate list.
