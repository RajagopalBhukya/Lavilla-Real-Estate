export function calculateInvestment(index, rate, occupancy) {
    const safe = (value, min, max, fallback) => Number.isFinite(Number(value)) ? Math.min(max, Math.max(min, Number(value))) : fallback;
    const villaPrice = [198000, 285000, 365000][Math.round(safe(index, 0, 2, 1))];
    const occupiedNights = Math.round(365 * safe(occupancy, 55, 92, 78) / 100);
    const grossRevenue = occupiedNights * safe(rate, 180, 750, 340);
    const managementFee = grossRevenue * .18;
    const operationalReserve = grossRevenue * .06;
    const netIncome = grossRevenue - managementFee - operationalReserve;
    return { villaPrice, occupiedNights, grossRevenue, managementFee, operationalReserve, netIncome, netYield: (netIncome / villaPrice * 100).toFixed(1), paybackYears: (villaPrice / netIncome).toFixed(1) };
}
