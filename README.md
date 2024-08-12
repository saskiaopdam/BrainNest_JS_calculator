# JavaScript Calculator
2023 - JavaScript applicatie met basale rekenfuncties. Je kunt met de calculator optellen, aftrekken, vermenigvuldigen en delen. Je kunt ook het percentage berekenen, het display resetten met AC en de invoer verwijderen met DEL.

## Opdrachtomschrijving
De calculator was een oefenopdracht die ik maakte tijdens een *Frontend Industry Training* bij Brainnest. De uitgebreide instructies inclusief bonuspunten staan hieronder. [Deze UI diende als voorbeeld.](https://mrbuddh4.github.io/calculator/)

## Bug
Er zit nog een kleine bug in de applicatie. Als je na een berekening het display reset met AC en vervolgens op een cijferknop klikt, dan gebeurt iets onverwachts. De 0 verdwijnt maar het gekozen cijfer verschijnt niet op het display.

### Instructies - samenvatting in het Nederlands
1. De calculator moet kunnen optellen, aftrekken, vermenigvuldigen en delen.
2. De calculator moet ook een display hebben en een clear knop.
3. Zorg ervoor dat een lang getal op het display past.
4. Zorg ervoor dat je niet kunt delen door 0. Toon dan een foutmelding.

### Instructies - volledig in het Engels
1. Your calculator is going to contain functions for all of the basic math operators you typically
find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
    - add
    - subtract
    - multiply
    - divide
2. Create a new function **operate** that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    - There should also be a display for the calculator
    - Add a “clear” button.
4. Create the functions that populate the display when you click the number buttons... you should be storing the ‘display value’ in a variable somewhere for use in the next step.
5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then **operate()** on them when the user presses the “=” key.
    - You should already have the code that can populate the display, so once **operate()** has been called, update the display with the ‘solution’ to the operation.
    - Figure out how to store all the values and call the operate function with them.
6. Gotchas: watch out for and fix these bugs if they show up in your code:
    - Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, **12 + 7 - 5 * 3 =** should yield **42**. [Here’s a good example of how it should look like.](https://mrbuddh4.github.io/calculator/)
    - Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (**12**), followed by an operator button (**+**), a second number button (**7**), and finally a second operator button (**-**). Your calculator should then do the following: first, evaluate the first pair of numbers (**12 + 7**), second, display the result of that calculation (**19**), and finally, use that result (**19**) as the first number in your new calculation, along with the next operator (**-**).
    - You should round answers with long decimals so that they don’t overflow the screen.
    - Pressing = before entering all of the numbers or an operator could cause problems!
    - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    - Display a snarky error message if the user tries to divide by 0... don’t let it crash your calculator!
7. Advanced: Users can get floating point numbers if they do the math required to get one, but
they can’t type them in yet. Add a **.** button and let users input decimals! Make sure you don’t let them type more than one though: **12.3.56.5**. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
8. Advanced: Add a “backspace” button, so the user can undo if they click the wrong number.
9. Advanced: Add keyboard support!
