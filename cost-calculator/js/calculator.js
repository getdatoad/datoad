// Elementos del DOM
const monthlySpendInput = document.getElementById('monthly-spend');
const simpleSlider = document.getElementById('simple-queries');
const mediumSlider = document.getElementById('medium-queries');
const complexSlider = document.getElementById('complex-queries');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results');

// Elementos de visualización de valores
const simpleValue = document.getElementById('simple-value');
const mediumValue = document.getElementById('medium-value');
const complexValue = document.getElementById('complex-value');

// Elementos de resultados
const savingsAmount = document.getElementById('savings-amount');
const savingsPercentage = document.getElementById('savings-percentage');
const currentCost = document.getElementById('current-cost');
const projectedCost = document.getElementById('projected-cost');
const annualSavings = document.getElementById('annual-savings');

// Actualizar valores de los sliders
simpleSlider.addEventListener('input', (e) => {
    simpleValue.textContent = `${e.target.value}%`;
    balanceSliders('simple');
});

mediumSlider.addEventListener('input', (e) => {
    mediumValue.textContent = `${e.target.value}%`;
    balanceSliders('medium');
});

complexSlider.addEventListener('input', (e) => {
    complexValue.textContent = `${e.target.value}%`;
    balanceSliders('complex');
});

// Balancear los sliders para que sumen 100%
function balanceSliders(changedSlider) {
    const simple = parseInt(simpleSlider.value);
    const medium = parseInt(mediumSlider.value);
    const complex = parseInt(complexSlider.value);
    const total = simple + medium + complex;

    if (total > 100) {
        const excess = total - 100;

        if (changedSlider === 'simple') {
            const mediumReduction = Math.min(excess / 2, medium);
            const complexReduction = excess - mediumReduction;

            mediumSlider.value = Math.max(0, medium - mediumReduction);
            complexSlider.value = Math.max(0, complex - complexReduction);
        } else if (changedSlider === 'medium') {
            const simpleReduction = Math.min(excess / 2, simple);
            const complexReduction = excess - simpleReduction;

            simpleSlider.value = Math.max(0, simple - simpleReduction);
            complexSlider.value = Math.max(0, complex - complexReduction);
        } else {
            const simpleReduction = Math.min(excess / 2, simple);
            const mediumReduction = excess - simpleReduction;

            simpleSlider.value = Math.max(0, simple - simpleReduction);
            mediumSlider.value = Math.max(0, medium - mediumReduction);
        }

        simpleValue.textContent = `${simpleSlider.value}%`;
        mediumValue.textContent = `${mediumSlider.value}%`;
        complexValue.textContent = `${complexSlider.value}%`;
    }
}

// Calcular ahorros
calculateBtn.addEventListener('click', calculateSavings);

function calculateSavings() {
    const monthlySpend = parseFloat(monthlySpendInput.value);

    if (!monthlySpend || monthlySpend <= 0) {
        alert('Por favor ingresa un gasto mensual válido');
        return;
    }

    const simple = parseInt(simpleSlider.value);
    const medium = parseInt(mediumSlider.value);
    const complex = parseInt(complexSlider.value);

    // Verificar que sumen aproximadamente 100%
    const total = simple + medium + complex;
    if (total !== 100) {
        alert('La distribución de consultas debe sumar 100%');
        return;
    }

    // Calcular porcentaje de ahorro basado en la distribución
    // Queries simples pueden ahorrar más (pueden usar modelos más baratos)
    // Queries complejas ahorran menos (ya requieren modelos premium)
    const simpleSavings = 0.50; // 50% de ahorro en queries simples
    const mediumSavings = 0.35; // 35% de ahorro en queries medias
    const complexSavings = 0.20; // 20% de ahorro en queries complejas

    const weightedSavings = (
        (simple / 100) * simpleSavings +
        (medium / 100) * mediumSavings +
        (complex / 100) * complexSavings
    );

    // Calcular costos
    const savingsPercent = weightedSavings * 100;
    const monthlySavings = monthlySpend * weightedSavings;
    const newMonthlyCost = monthlySpend - monthlySavings;
    const annualSavingsAmount = monthlySavings * 12;

    // Mostrar resultados
    savingsAmount.textContent = formatCurrency(monthlySavings);
    savingsPercentage.textContent = `${savingsPercent.toFixed(1)}% de ahorro`;
    currentCost.textContent = formatCurrency(monthlySpend);
    projectedCost.textContent = formatCurrency(newMonthlyCost);
    annualSavings.textContent = formatCurrency(annualSavingsAmount);

    // Mostrar sección de resultados con animación
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Formatear moneda
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Permitir calcular con Enter en el input
monthlySpendInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        calculateSavings();
    }
});
