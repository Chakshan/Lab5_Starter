# Expand

1. The IDs and Classes are the intersection between HTML, CSS, and Javascript. Having thought-out IDs and classes will make the code more maintainable and organized and easier to manipulate.
2. Data attributes store custom data directly on HTML elements. They can store config info without cluttering the DOM. They can also be easily accessed with javascript without relying on class names.
3. DOM fragment is a temporary container to hold DOM nodes. One can do operations on a fragment before adding that fragment to the real DOM all at once. This is more efficient and offers better performance than adding to the DOM directly.
4. A Virtual DOM is a lightweight in-memory representatin of real DOM. IT offers more efficiency and abstraction. But you might lose direct control and introduce more overhead.
5. This is because class is keyword in Javascript so className is used to avoid the naming confict.
6. addEventListener() can be used in a Javascript file. It offers more flexibility and complexity. One can also add multiple event listeners using it. onClick() is used in for inline JS. It is less flexible but quicker to use and implement.