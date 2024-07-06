# Tic Tac Toe Game

This is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript.

## How to Play

- Open `index.html` in a web browser to start the game.
- Click on any empty cell in the 3x3 grid to place your 'X' or 'O'.
- The game alternates between two players.
- The game ends when one player achieves three marks in a row, column, or diagonal, or when all cells are filled without a winner.

## Features

- Responsive design for desktop and mobile devices.
- New Game button to start a fresh game.
- Reset Game button to clear the current game progress.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Structure

The main structure includes:
- `index.html`: Contains the game board and buttons.
- `style.css`: Styles the game layout and responsiveness.
- `app.js`: Manages game logic, including player turns, win detection, and button functionalities.

### HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TIC_TAC_TOE</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1 id="heading">TIC TAC TOE</h1>
        <div class="msg-container hide">
            <button id="new">New Game</button>
            <p class="msg"></p>
        </div>
        <div id="container">
            <div id="game">
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
            </div>
        </div>
        <button id="reset">Reset Game</button>
    </main>
    <script src="app.js"></script>
</body>
</html>
