const DEFAULT_SIZE = 16;

function setupGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover');
        grid.appendChild(gridElement);
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}