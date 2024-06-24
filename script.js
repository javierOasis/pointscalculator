function calculatePoints() {
    const amount = document.getElementById('amount').value;
    const migration = document.getElementById('migration').value.trim().toLowerCase();

    const basePoints = (amount / 10000) * 690;
    const migrationBonus = (migration === "yes") ? basePoints * 0.20 : 0;
    const totalPoints = basePoints + migrationBonus;

    document.getElementById('basePoints').textContent = basePoints.toFixed(2);
    document.getElementById('migrationBonus').textContent = migrationBonus.toFixed(2);
    document.getElementById('totalPoints').textContent = totalPoints.toFixed(2);
}
