document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = document.getElementById('expense-amount').value;

        // Add expense to list
        addExpense(expenseName, expenseAmount);

        // Clear form fields
        expenseForm.reset();
    });

    function addExpense(name, amount) {
        // Create a new row
        const row = document.createElement('tr');

        // Create cells
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        
        const amountCell = document.createElement('td');
        amountCell.textContent = `${amount}`;

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => row.remove();
        actionCell.appendChild(deleteButton);

        // Append cells to the row
        row.appendChild(document.createElement('td')); // For numbering, can be adjusted later
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(actionCell);

        // Append row to the expense list
        expenseList.appendChild(row);

        // Update numbering
        updateRowNumbers();
    }

    function updateRowNumbers() {
        const rows = expenseList.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            rows[i].firstElementChild.textContent = i + 1;
        }
    }
});
