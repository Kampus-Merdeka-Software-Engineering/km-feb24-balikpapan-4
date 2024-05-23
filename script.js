document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const topMachineCtx = document.getElementById('topMachineChart').getContext('2d');
    const transactionTypeCtx = document.getElementById('transactionTypeChart').getContext('2d');
    const salesTrendCtx = document.getElementById('salesTrendChart').getContext('2d');

    new Chart(topMachineCtx, {
        type: 'bar',
        data: {
            labels: ['GuttenPlans x1367', 'EB Public Library x1380', 'Earle Asphalt x1371', 'BSQ Mall x1364 - Zales', 'BSQ Mall x1366 - ATT'],
            datasets: [{
                label: 'Sales',
                data: [3600, 3100, 1000, 950, 850],
                backgroundColor: '#6d9773',
                borderColor: '#388e3c',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(transactionTypeCtx, {
        type: 'pie',
        data: {
            labels: ['Cash', 'Credit'],
            datasets: [{
                label: 'Transaction Type',
                data: [64.9, 35.1],
                backgroundColor: ['#6d9773', '#bc8b51'],
                borderColor: ['#388e3c', '#f57c00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    new Chart(salesTrendCtx, {
        type: 'line',
        data: {
            labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [1200, 1500, 1800, 2000, 2300, 2500, 2200, 2100, 1900, 1700, 1600, 1500],
                    borderColor: '#6d9773',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true
                },
                {
                    label: 'Sales',
                    data: [800, 900, 1000, 1200, 1500, 1700, 1600, 1500, 1400, 1300, 1200, 1100],
                    borderColor: '#ff9800',
                    backgroundColor: '#bc8b51',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});