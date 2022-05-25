# Vanilla Dice Tower
## Relevant journal entries 
- [May 24, 2022](https://github.com/acidtone/code-journal#may-24-2022)
  - Added support for numeric dice
- [May 23, 2022](https://github.com/acidtone/code-journal#may-23-2022)
  - project creation

## Usage
Note: work-in-progress; only logs to the console right now.

On [Line 3 of `/js/app.js`](https://github.com/acidtone/dice-tower-vanilla/blob/2cc8b7d9cef1659410c3f661195f0ccf0fdb030e/js/app.js#L3):
- Pass an isohedral integer `x` to `drop()` an `x`-sided die.
    - `6` -> random `[1-6]`
    - `5` -> `null` (not a valid die; not isohedral)
- Pass an `Array` of isohedral integers `n` to roll and sum each `n`-sided die
    - `[4,6,10]` -> random `[3-20]`
    - `[4,5,10]` -> random `[2-14]` because `5` is not valid
- Pass a string that matches rpg die notation to roll a set of like-sided dice. RegExp -> `/^(\d*)d(\d+)$/`
    - `2d6` -> random `[2-12]`
    - `d4` -> random `[1-4]`
    - `2dTwenty` -> `null`