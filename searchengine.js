// Sample data to search
const data = [
    "JavaScript tutorial",
    "Learn HTML",
    "CSS styling guide",
    "Introduction to Web Development",
    "Python programming basics",
    "JavaScript functions and methods",
    "Responsive design in CSS",
    "DOM manipulation with JavaScript",
    "HTML Forms",
    "CSS Grid and Flexbox",
    "Getting started with React"
];

function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // Clear results container if the input is blank
    if (query === "") {
        resultsContainer.innerHTML = "";
        return;
    }

    resultsContainer.innerHTML = "";  // Clear previous results

    // Filter data based on the query
    const results = data.filter(item => item.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.className = "result-item";
            resultElement.textContent = result;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = "<p class='no-results'>No results found</p>";
    }
}
