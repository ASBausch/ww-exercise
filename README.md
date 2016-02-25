NPM install required

Base requirements:

1. Sticky header stays at the top as user scrolls.
2. Content is centered horizontally and vertically.
3. On mobile content stacks and remains centered.
4-5. Accordion collapsed on initial load, opens downward and closes open items.
6. Employees drawn from 4 on desktop, 3 on tablet, 2 on mobile.
7. On click groups of 4 employees are drawn, button disappears when the end of the array is reached.

A grid was not implemented to avoid extra weight in the css, native css flexbox was used for positioning.
This posed some challenges and a grid may have been an equally effective system.

Tested on latest versions of Safari, Chrome and Firefox.

Technology used, Sass, Gulp, Node, Angular, Express