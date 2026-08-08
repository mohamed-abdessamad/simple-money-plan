const updateBtn = document.getElementById('btn');
const balances = document.querySelectorAll('.balance');
const expenses = document.querySelectorAll('.enpence');
const earns = document.querySelectorAll('.earn');

function updateDashboard() {
    for (let i = 0; i < 3; i++) {
        let newBal = prompt("Enter Balance:");
        let newExp = prompt("Enter Expenses:");

        let balNum = Number(newBal);
        let expNum = Number(newExp);

        let calculatedEarn = balNum - expNum;

        balances[i].textContent = newBal + '$';
        expenses[i].textContent = newExp + '$';
        earns[i].textContent = calculatedEarn + '$';
    }
}

updateBtn.addEventListener('click', updateDashboard);