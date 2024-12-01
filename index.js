const employeeList = document.getElementById("employeeList");
const pageNumber = document.getElementById("pageNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const searchInput = document.getElementById("search");
const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar-menu");

let employees = JSON.parse(localStorage.getItem("employee")) || [];
const rowPerPage = 5;
let currentPage = 1;

// onclick Toggle Menu click hamburger and  show Employee Registration Employee Listing  

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});




function toggleMenu() {
    navbarMenu.classList.toggle("show");
}

// --- 1. Handle Form Submission ---
hamburger.addEventListener("click", toggleMenu);

// Form Submission (Handled on register.html)
if (document.getElementById("employeeForm")) {
    document.getElementById("employeeForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const position = document.getElementById("position").value;
        const about = document.getElementById("about").value;
        const joining_date = document.getElementById("joining_date").value;

        const newEmployee = {
            id: Date.now(),
            name,
            position,
            about,
            joining_date,
        };

        employees.push(newEmployee);
        localStorage.setItem("employee", JSON.stringify(employees));

        window.location.href = "list.html";
    });
}

// Render Employee List
function renderEmployee() {
    employeeList.innerHTML = "";

    // Filter employees based on search
    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    // Paginate employees
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

    // Render rows
    paginatedEmployees.forEach((employee) => {
        const employeeHTML = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.about}</td>
                <td>${new Date(employee.joining_date).toDateString()}</td>
                <td><button class="button-delete" onclick="deleteEmployee(${employee.id})">Delete</button></td>
            </tr>
        `;
        employeeList.innerHTML += employeeHTML;
    });

    // Update pagination
    const totalPages = Math.ceil(filteredEmployees.length / rowPerPage);
    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// Delete Employee
function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees = employees.filter((employee) => employee.id !== id);
        localStorage.setItem("employee", JSON.stringify(employees));
        renderEmployee();
    }
}

// Pagination Controls
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderEmployee();
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage * rowPerPage < employees.length) {
        currentPage++;
        renderEmployee();
    }
});

// Search Functionality
searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderEmployee();
});

// Initial Render
if (employeeList) {
    renderEmployee();
}