const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    // Get mouse position relative to the viewport
    const xPos = event.pageX;
    const yPos = event.pageY;

    // Create a new span element
    const spanE1 = document.createElement("span");

    // Set the position of the span
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";

    // Randomize the size of the span
    const size = Math.random() * 100 + 10; // Minimum size of 10px
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";

    // Add a CSS class for styling (optional)
    spanE1.classList.add("circle");

    // Append the span to the body
    bodyE1.appendChild(spanE1);

    // Remove the span after 3 seconds
    setTimeout(() => {
        spanE1.remove();
    }, 6000);
});
