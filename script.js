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
});

// CHART DASHBOARD //

// Top Machine Used //
var dashboard = new XMLHttpRequest();
dashboard.open('GET', 'Resources/filejson/topUsedMachine.json', true);
dashboard.send();
dashboard.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var mesin = JSON.parse(this.responseText);
        var machine = mesin.map(e => e.Machine);
        var salesMachine = mesin.map(e => e.Sales);

        const topMachineCtx = document.getElementById('topMachineChart');
        new Chart(topMachineCtx, {
            type: 'bar',
            data: {
                labels: machine,
                datasets: [{
                    label: 'Sales',
                    data: salesMachine,
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
    }
};

// Transaction Type //
var dashboard = new XMLHttpRequest();
dashboard.open('GET', 'Resources/filejson/transactionType.json', true);
dashboard.send();
dashboard.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var transType = JSON.parse(this.responseText);
        var tipe = transType.map(e => e.Type);
        var count = transType.map(e => e.Count);

        const transactionTypeCtx = document.getElementById('transactionTypeChart');
        new Chart(transactionTypeCtx, {
            type: 'pie',
            data: {
                labels: tipe,
                datasets: [{
                    label: 'Transaction Type',
                    data: count,
                    backgroundColor: ['#6d9773', '#bc8b51'],
                    borderColor: ['#388e3c', '#f57c00'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });
    }
};

// Sales Trend //
var dashboard = new XMLHttpRequest();
dashboard.open('GET', 'Resources/filejson/salesTrend.json', true);
dashboard.send();
dashboard.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var saleTrend = JSON.parse(this.responseText);
        var month = saleTrend.map(e => e.Month);
        var revenue = saleTrend.map(e => e.Revenue);
        var sales = saleTrend.map(e => e.Sales);

        const salesTrendCtx = document.getElementById('salesTrendChart');
        new Chart(salesTrendCtx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Sales',
                    data: sales,
                    backgroundColor: '#6d9773',
                    borderColor: '#388e3c',
                    borderWidth: 1,
                    order: 2
                }, {
                    label: 'Revenue',
                    data: revenue,
                    type: 'line',
                    backgroundColor: '#bc8b51',
                    borderColor: '##f57c00',
                    borderWidth: 1,
                    order: 1
                }],
                labels: month
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
    }
};


// Tabel Produk //
const tabel = new XMLHttpRequest();
tabel.open('GET', 'Resources/filejson/websitetable.json', true);
tabel.send();
tabel.onreadystatechange = function () {
    if (tabel.readyState == 4 && this.status == 200) {
        let tabelData = JSON.parse(this.responseText).map(e => e);
        console.log(tabelData);
        let value = tabelData.map(e => [e.Product, e.Sales, e.Revenue]);
        function handleData(value) {
            console.log(value);
            if (Array.isArray(value)) {
                console.log("Length:", value.length);
            } else if (typeof value === 'object' && value !== null) {
                console.log("Length:", Object.keys(value).length);
            } else {
                console.log("Data is not an array or object.");
            }
        }
        new gridjs.Grid({
            columns: ["Product", "Revenue", "Sales"],
            data: value,
            pagination: {
                limit: 5,
                summary: false
            },
            search: true,
            sort: true,
            resizable: true,
            style: {
                table: {
                    border: '3px solid #ccc'
                },
                th: {
                    'background-color': '#6d9773',
                    color: '#000',
                    'border-bottom': '3px solid #ccc',
                    'text-align': 'center'
                },
                td: {
                    'text-align': 'center'
                }
            }
        }).render(document.getElementById("productTable"));
    }
};
