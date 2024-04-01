const projectItems = document.querySelectorAll('.work-grid li');
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Function to filter projects
function filterProjects(category) {
    projectItems.forEach(item => {
        const itemCategory = item.dataset.category;
        item.style.display = category === 'all' || itemCategory === category ? 'block' : 'none';
    });
}

// Add click event listener to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterProjects(filter);
    });
});

// Show all projects by default
filterProjects('all');
document.addEventListener("DOMContentLoaded", function () {
    filterButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedCategory = this.getAttribute("data-category");

            filterButtons.forEach((btn) => {
                btn.classList.add("bg-light");
                btn.classList.add("text-black");
                btn.classList.remove("bg-black");
                btn.classList.remove("btn-primary");
                btn.classList.remove("text-light");
            });
            this.classList.remove("bg-light");
            this.classList.remove("text-black");
            this.classList.add("text-light");
            this.classList.add("btn-primary");
            this.classList.add("bg-black");
        });
    });
    filterButtons.item(0).click();
});