# HW3: Using Our JS Framework

## Objective
Recreate the web game you made for HW2, or a another one from the list we provided.

## Requirements

## Components (8 points)
- Nesting: Create at least 2 components. (4 points)
    - Both should extend our library's Component class. (1 point)
    - One must be rendered within another. If your game has tiles, I recommend making a component to render the entire board and a component to render each tile. (3 points)
- Props: Pass data down from a parent component instance to a child component instance. I recommend storing all game states in the root component, and passing them down to child components as needed. (2 point)
- Mounting: Specify an onMount method in one of your components. You might consider adding one in your root component to attach the window's onkeypress event handler for restarting the game. (1 point)
- Destroying: Specify an onDestroy method in one of your components. You might consider adding it in the same component to remove said event listener. (1 point)

### Reactivity (6 points)
- States: Use at least 2 states to hold all non-constant data in your application. This might include player's turn, the board state, score, etc. (2 points)
- Effects: Use at least 2 effects that do anything you like. This might include logging states or derived values. (2 points)
- Derived Value: Use at least 1 derived value that does anything you like. (1 point)
- DOM Updates: Use at least 2 state or derived value as a prop values for elements in your components' render functions. (1 points)

### Code Readability (2 points)
- Proper indentation of JS (1 point)
- Meaningful variable names (1 points)

### Code Correctness (4 points)
- Game does not crash while playing (4 points)

### Extra Features (5 bonus points)
Implement any additional features specified in HW2.

## Game-Specific Notes
As a reminder, here were the game-specific requirements from HW2:
- Whack-a-Mole: Have an element that periodically moves around the page. If the player manages to hit the element, increment their score.
- Tic-Tac-Toe: Create a 3x3 grid where players take turns selecting empty boxes to place an "X" or "O" on. You are NOT expected to detect when a player wins.
- Chess: Create an 8x8 grid with chess pieces players take turns moving by clicking a from square, then a to square. You are NOT expected to check move legality or write special logic for checkmate, check, castling, en-passant, etc.
- Snake: Create a snake that periodically moves forward and changes direction when arrow keys are pressed. You are NOT expected to place apples (or squares) for the snake to eat and grow in size.
- Connect 4: Create a grid where players take turns placing chips into columns. You are NOT expected to detect when a player wins.

## Submission Guidelines

1. An HTML file named `index.html` which contains the game.
2. A JS file named `framework.js` which contains the framework's code.
3. A JS file named `script.js` which contains your game's code.

Feel free to copy `framework.js` from our lecture code repository, and update it as lecture progresses.