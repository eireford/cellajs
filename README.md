# CellaML

CellaML is a web application that visualizes the Game of Life using React and D3. The application allows users to iterate through generations of the Game of Life grid.

## Features

- Visualize the Game of Life grid
- Iterate through generations with a button click
- Uses React for the UI and D3 for rendering the grid

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cellaml.git
    cd cellaml
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.jsx`

The main component that renders the `GameOfLifeGrid` component and includes a button to iterate through generations.

### `GameOfLifeGrid.jsx`

A component that fetches the grid data from the server and renders it using D3.

## API

The application communicates with a backend server to fetch the next generation of the grid. The server should expose an endpoint at `http://127.0.0.1:8000/iterate` that accepts a POST request with the current grid state and returns the next generation.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.