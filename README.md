 ## 1.Difference between Selectors
​getElementById: Selects a single element by its unique ID.
​getElementsByClassName: Selects all elements with a specific class (returns an HTMLCollection).
​querySelector: Selects the first element that matches a CSS selector (ID, class, or tag).
​querySelectorAll: Selects all elements matching a CSS selector (returns a static NodeList).

## 2. Creating and Inserting Elements
​Create: Use document.createElement('tagName').
​Insert: Use parentElement.appendChild(newElement) or parentElement.prepend(newElement) to add it to the DOM.

## 3. Event Bubbling
​What it is: It is a process where an event starts from the target element and then propagates (bubbles up) to its parent elements in the DOM tree.
​How it works: If you click a button inside a div, the click event fires on the button first, then on the div, then on the body.

## 4. Event Delegation
​What it is: A technique of adding a single event listener to a parent element instead of adding multiple listeners to each child.
​Why it's useful: It improves performance and allows you to handle events for dynamically added elements (elements added to the page later).


## 5.preventDefault() vs stopPropagation()
​preventDefault(): Stops the default action of the browser (e.g., stops a link from opening or a form from submitting).
​stopPropagation(): Stops the event from bubbling up to parent elements, preventing their event handlers from firing.