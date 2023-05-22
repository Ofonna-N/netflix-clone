# Netflix Clone Project



https://user-images.githubusercontent.com/108894366/223868685-550dd567-7572-4dc9-ac3b-da13ad94a004.mp4

[View Demo](https://netflix-clone-780a5.web.app/)

>**__Note that this would trigger a security warning for phishing, so just ignore it and view to view the website, you can use the demo email and passowrd below if you dont want to create an account__**
<br>
Email: netflixclone@yahoo.com <br>
pasword: netflixclone
<br>
<br>
I wanted to challenge myself by creating a clone of one of the most popular streaming services, Netflix. My Netflix clone project is a responsive web application that replicates the core features of the original Netflix user interface from the home page to the signup and login pages. The project demonstrates my skills in creating modular and scalable web applications., including movie and TV show listings, and user authentication.

## Technologies Used
 <details>
  <summary> <h3> React</h3> </summary>
In my Netflix clone project, I utilized React's features to create a modular and scalable web application. I used functional components and hooks like useState, useRef, and useEffect to manage the state of the application and enable dynamic rendering.<br><br>

<strong>Functional Components</strong>: I utilized functional components to modularize the application and create reusable components, such as the navigation bar and movie listing components. Functional components are lightweight and efficient, which made them an ideal choice for this project.

<strong>Hooks</strong>: I used React hooks like useState, useRef, and useEffect to manage the state of the application and enable dynamic rendering. useState enabled me to update the application's state in response to user interactions, while useRef enabled me to access and modify the application's DOM elements. Finally, useEffect enabled me to manage side effects, such as fetching data from the TMDB API.

Overall, my use of React in this project demonstrates my understanding of creating modular and scalable web applications using functional components and hooks, as well as my ability to manage the state of the application and enable dynamic rendering.
</details>

 <details>
  <summary> <h3> SASS </h3></summary> 
I chose to use Sass for my Netflix clone project. Sass is a CSS preprocessor that enables me to write cleaner, more maintainable code.

Here are some of the Sass features I used:

**Mixins**: I used mixins to define reusable styles that I could apply to multiple elements throughout the application. This made my code more efficient and helped me avoid repetition.

**Base Classes**: I used base classes to define global styles that applied to multiple elements throughout the application. This helped me maintain consistency in the application's design.

Variables: I used variables to define reusable values, such as colors and font sizes, which I could easily change and apply throughout the application.

**@use and @forward**: I used @use and @forward to import Sass modules and share styles between different files. This helped me keep my code organized and avoid duplication.

**7-1 Sass Pattern**: I followed the 7-1 Sass pattern, which is a common organizational structure for Sass projects. This pattern helped me organize my code into seven different folders, each with a specific purpose, making it easier to navigate and maintain.

**Nesting**: I used nesting to write more efficient and readable code. Nesting allowed me to group related styles together, making it easier to understand the hierarchy of the code.

**Partials**: I used partials to break up my Sass code into smaller, more manageable files. This made it easier to organize my code and avoid duplication.

Overall, my use of Sass in the Netflix clone project demonstrates my understanding of the importance of writing organized, efficient CSS code. By using features like mixins, base classes, variables, @use, @forward, the 7-1 Sass pattern, nesting, and partials, I was able to create a more maintainable and scalable codebase.
</details>
<details>
<summary> <h3> Vanilla JavaScript </h3> </summary> 
I used Vanilla JavaScript in my Netflix clone project to handle various functionalities of the application, such as handling form submissions. By using Vanilla JavaScript instead of relying on libraries or frameworks, I was able to strengthen my understanding of core JavaScript concepts and improve my ability to write clean and efficient code.

In addition to using Vanilla JavaScript, I have also started exploring TypeScript, a typed superset of JavaScript that adds static typing and other features to the language. My experience with Vanilla JavaScript has given me a solid foundation for learning TypeScript and other advanced JavaScript concepts, which I plan to continue to develop as an aspiring front-end developer.
</details>

<details>
<summary> <h3> Firebase Authentication</h3> </summary> 
I used Firebase for user authentication in my Netflix clone project. With Firebase, I was able to handle user sign-up, login, and logout functionalities easily. Firebase also provided me with the ability to check if a user is still logged in or not, making the user experience more seamless.

To make testing the login feature easier for others, I created a credential that anyone can use to log in to the application without having to provide their email address. 
The credentials are: 
  <h4>email: netflixclone@yahoo.com</h4>
  <h4>password: netflixclone</h4>

Firebase Authentication was a great tool to use in my project, as it enabled me to focus on other aspects of the application without having to worry about implementing a complex user authentication system.
</details>

<details>
<summary> <h3>TMDB API Integration</h3> </summary> 
I integrated the TMDB API to fetch movie data such as title, description, and images. This allowed me to display a selection of movies for users to browse when they sign up for the application.

To fetch data from the TMDB API, I used the Fetch API, which allowed me to make HTTP requests to the API and receive JSON data in response. I also had to include my API key as a query parameter in the request URL to authenticate my requests to the API.

During the integration process, I gained a better understanding of working with APIs that require API keys, managing environment variables, and handling asynchronous programming with Promises. I also learned how to manipulate JSON data and extract the information that I needed to display movie listings on the application.

Overall, integrating the TMDB API was a valuable learning experience that allowed me to enhance my skills as a front-end developer and gain a deeper understanding of working with APIs and HTTP requests.
</details>

<details>
 <summary> <h3>Navigation with React Router</h3> </summary> 
I used React Router in my Netflix clone project to enable client-side routing and enable the user to switch between different pages, such as the signup and login pages. Using React Router allowed me to mimic Netflix's navigation style and keep the user experience consistent with the original platform.

One of the main benefits of using React Router was the ability to keep track of navigation history. This feature allowed users to navigate back and forth between pages, just like they would on a regular website. Additionally, I learned about the history API React Router uses and better understood the need for client-side routing.

Overall, React Router was an essential tool in the creation of my Netflix clone project, and I believe that my use of it demonstrates my understanding of the importance of client-side routing and the benefits it provides in terms of user experience.
</details>

<details>
<summary> <h3>Redux</h3> </summary> 
I used Redux to manage the application's state, which allowed me to maintain a single source of truth for the data in the application. One of the main benefits of using Redux was that it enabled me to remember the user's email when navigating between different pages containing the signup form or login form, as well as the get-started call-to-action form.

In the application, the user's email is an important piece of data that is required for authentication and personalization. By using Redux, I was able to store this data in a global state object, which made it easily accessible from any component in the application. This ensured that the user's email was always available and up-to-date, even when navigating between different pages.
</details>

## Features
My Netflix clone project includes the following features:

#### Home Page: 
The home page features a replica of Netflix's UI, including the main navigation bar, movie listings, and a call-to-action button.

#### Signup and Login Pages:
Users can create an account, log in, and log out of the application using Firebase for user authentication.

#### Navigation: 
The application uses React Router for client-side routing, enabling the user to switch between different pages.

#### Movie Listings: 
The application lists movies using the TMDB API integration, enabling users to browse a selection of movies with titles, descriptions, and images.

<br><br>
My Netflix clone project was an exciting and challenging experience that allowed me to showcase my skills as a front-end developer. I believe that this project demonstrates my ability to create modular and scalable web applications using React, Sass, and other front-end technologies, as well as integrate third-party APIs like TMDB. I look forward to continuing to improve upon this project and working on future projects that challenge me as a developer.
