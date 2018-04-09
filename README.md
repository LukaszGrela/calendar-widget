# Calendar Widget
Code Exercise for JS/React Developer

## Specification
Build a Calendar that shows all dates in a month in a grid, like a typical wall calendar. There
should be a dropdown for changing the month and another for changing the year. There should
also be previous/next arrows for moving between months.
The Calendar must show “overflow” dates - this means if the 1st of the month is on a
Wednesday, you should show the last 2 dates from the previous month in the Monday/Tuesday
boxes before the 1st. These “overflow” dates should be styled in such a way that makes it clear
they are not a part of the current month.

## Requirements
- View must be built in React (any other libraries you chose to use are up to you)
- Must show overflow dates at the start and end of the month, if applicable
- Must have dropdown for changing the month
- Must have dropdown for changing the year
- Must have previous + next arrows for moving between months
- Must default to the current month
- After changing the month and refreshing the page, the same month should be shown (so
you must update the URL on moving between months)
- Must send us the full source and host it somewhere so the functionality can be tested

## What we’re looking for
- Clean, readable and well thought out code
- Simple, small, self-contained and composable React Components
- Good data flow and careful state management