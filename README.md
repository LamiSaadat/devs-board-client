# Dev's Board
***Dev's Board is the app that makes a developer's life a teensy bit easier!***

This is my capstone project for BrainStation's full-stack bootcamp. The task was to ideate, plan, and execute a full-stack application within two weeks. Dev's Board was made using React, React Router, and SASS for the front end, a Node/Express backend API, and Knex to query a MySQL database. 

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

<!-- Contact -->
## :handshake: Contact

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lamisaadat/)

<!-- Acknowledgments -->
## :gem: Acknowledgements

 - [Bootstrap](https://getbootstrap.com/)
 - [Chakra](https://chakra-ui.com/)
 - [Styled Components](https://styled-components.com/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
