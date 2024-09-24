# HW3: Using JS Frameworks

## Objective
To better understand how developers take advantage of the functionality JavaScript frameworks provide, in this assignment, you will be recreating HW2 using our JavaScript framework from lecture.

Note: You do not need to choose the same game you made for HW2. Feel free to choose any game from the list provided in HW2. Just make sure all required functionality is present.

## Requirements

## Components (6 points)
- Usage: Create at least 2 components. All of your components should extend our library's Component class (2 points)
- Nesting: Render one of your components within another. If your game has tiles, I recommend making a component to render the entire board and a component to render each tile. (1 point)
- Props: Pass down data from a parent component to a child component. I recommend storing all game states in the root component, and passing them down to child components as needed. (1 point)
- Mounting: Specify an onMount method in one of your components. You might consider adding one in your root component to attach the window's onkeypress event handler for restarting the game. (1 point)
- Destroying: Specify an onDestroy method in one of your components. You might consider adding it in the same component to remove said event listener. (1 point)

### Reactivity (6 points)
- States:
    - Use at least 2 states to hold all non-constant data in your application. This might include the player's turn, the board state, the score, etc. All states should be made using the createState function. (2 points)
    - Call setValue on each state to update their values when appropriate. (1 point)
- Effects: Use at least 1 effect that does anything you like. This might include logging states or derived values when they update. All effects should be made using the createEffect function. (1 points)
- Derived Value: Use at least 1 derived value that does anything you like. All derived values should be made using the createDerived function (1 point)
- DOM Updates: Use at least 2 states or derived values as prop values for elements in your components' render functions. (1 points)

### Code Readability (2 points)
- Proper indentation of JS (1 point)
- Meaningful variable names (1 points)

### Code Correctness (4 points)
- Game does not crash while playing, and functions as expected. (4 points)

### Extra Features (5 bonus points)
Implement any additional features specified in HW2.

## Submission Guidelines

1. An HTML file named `index.html` which contains the game.
2. A JS file named `framework.js` which contains the framework's code.
3. A JS file named `script.js` which contains your game's code.

Feel free to copy `framework.js` from our lecture code repository, and update it as lecture progresses.
