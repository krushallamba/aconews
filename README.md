ACONEWS is a responsive news app powered by the gnews.io API. It provides the latest news headlines and articles on various topics.

Table of Contents
1.Project Setup
2.Project Overview
3.Approach
4.Challenges Faced & Solutions
5.Technologies Used


Project Setup
1. Prerequisites
Before you start, ensure that you have the following installed on your machine:
	Node.js (v14+ recommended)
	Firebase CLI for deployment
	A gnews.io API key
2. Installation Steps
	Clone the Repository
	Run the Application Locally
3. Firebase Deployment
	Login to Firebase: firebase login
	Deploy to Firebase Run the following command to deploy the app to Firebase: firebase deploy


Project Overview
ACONEWS is a news app that allows users to:
	Fetch the latest news headlines from the gnews.io API.
	Search for specific topics or keywords.
	View the app on mobile, tablet, and desktop devices (fully responsive design).


1. Frontend (React)
	Responsive Design: Ensured that the app works flawlessly across different devices by using CSS grid, flexbox, and media queries 	                   for responsiveness.
	State Management: Managed the news data and pagination using React hooks (useState, useEffect).
	Search Functionality: Integrated a search bar to allow users to search for news articles based on specific keywords, with results 			      dynamically loaded via the gnews.io API.
2. Firebase Hosting
	Deployed the project to Firebase’s Free Tier for hosting and ensured that the app runs seamlessly in production.


Challenges Faced and Solutions
1. API Rate Limiting
	Challenge: The gnews.io free tier imposes limits on the number of API requests.
	Solution: Limited the number of articles fetched at once to avoid hitting the rate limit too quickly.

2. Responsive Design
	Challenge: Ensuring that the app looks good on all devices, from mobile phones to desktops.
	Solution: Used CSS grid and flexbox for layout, combined with media queries to make the design fluid and responsive across screen 		  sizes.
3. Firebase Deployment Issues
	Challenge: Encountered issues with Firebase scripts being blocked due to PowerShell execution policies on Windows.
	Solution: Adjusted the PowerShell execution policy to RemoteSigned to allow Firebase scripts to run.


How to Use
	Search for News: Use the search bar at the top to enter a keyword. The app will display news articles related to your search.
	Responsive: View the app on any device, and the layout will adjust automatically to fit the screen size.


Future Improvements
	User Authentication: Add user authentication for personalized news feeds.


Contributing
	Feel free to fork the project, make improvements, and submit pull requests. All contributions are welcome!
