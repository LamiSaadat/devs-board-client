# Dev's Board
***Dev's Board is the app that makes a developer's life a teensy bit easier!***

This is my capstone project for BrainStation's full-stack bootcamp. The task was to ideate, plan, and execute a full-stack application within two weeks. Dev's Board was made using React, React Router, and SASS for the front end, a Node/Express backend API, and Knex to query a MySQL database. 

Dev's Board is a mood board creator where users can select a keyword from a list that describes their project and the program will display a color palette and set of pictures for insipiration. If they're happy with the board, users can save them. They can also retrieve and delete them as needed.

## Project Screenshot

<img width="954" alt="Screen Shot 2023-04-23 at 3 15 49 PM" src="https://user-images.githubusercontent.com/69886705/233860284-0db5276c-380f-4820-a603-514bfb4b1175.png">

## :running: Run Locally

Follow these steps to run a local instance of Dev's Board. You will also need to install the [backend](https://github.com/LamiSaadat/devs-board-server):  
(You'll need node and npm already installed.)

<!-- Run Locally -->
### Installation

1. Clone the project

```bash
  git clone https://github.com/LamiSaadat/devs-board-client.git
```

2. Go to the project directory

```bash
  cd devs-board-client
```

3. Install dependencies

```bash
npm install
```
4. Set environment variables:  
   
Rename `.env_sample` to `.env` and change the placeholder value to the port you set for the server.
```shell
REACT_APP_API_KEY=<your API key from pexels.com/api>
REACT_APP_API_URL=http://localhost:<PORT SET IN /devs-board-server/.env>
```

5. Start the app

```bash
  npm start
```

<!-- TechStack -->
## :space_invader: Tech Stack
- React.js
- React Router
- SASS

<!-- Roadmap -->
## :compass: Roadmap

* [ ] User Sign Up/Login
* [ ] Color Changer
* [ ] Update board
* [ ] Add notes
* [ ] Share boards

<!-- Acknowledgments -->
## :gem: Acknowledgements

 - [Bootstrap](https://getbootstrap.com/)
 - [Chakra](https://chakra-ui.com/)
 - [Styled Components](https://styled-components.com/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
