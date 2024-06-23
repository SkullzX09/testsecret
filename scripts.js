// script.js

document.addEventListener('DOMContentLoaded', () => {
    const examples = [
        { topic: 'Quadratic Equations', content: 'Solved example for quadratic equations...' },
        { topic: 'Trigonometry', content: 'Solved example for trigonometry...' },
        { topic: 'Probability', content: 'Solved example for probability...' },
        // Add more examples here
    ];

    const content = document.getElementById('content');
    const searchBar = document.getElementById('searchBar');

    const displayExamples = (filteredExamples) => {
        content.innerHTML = '';
        filteredExamples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.classList.add('example');
            exampleDiv.innerHTML = `<h2>${example.topic}</h2><p>${example.content}</p>`;
            content.appendChild(exampleDiv);
        });
    };

    searchBar.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredExamples = examples.filter(example =>
            example.topic.toLowerCase().includes(searchString)
        );
        displayExamples(filteredExamples);
    });

    // Initial display of examples
    displayExamples(examples);
});
