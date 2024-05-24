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

    // CHART DASHBOARD //
    var dashboard = new XMLHttpRequest();
    var url = "https://api.jsonbin.io/v3/b/66503f4bacd3cb34a84cbce2"
    dashboard.open('GET', url, true);
    dashboard.send();
    dashboard.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var month = data.record.cleaning.map(e => e.Month).filter(Boolean);
        var revenue = data.record.cleaning.map(e => e.Revenue).filter(Boolean);
        var sales = data.record.cleaning.map(e => e.Sales).filter(Boolean);
        var machine = data.record.cleaning.map(e => e.Machine).filter(Boolean);
        var sale = data.record.cleaning.map(e => e.Sale).filter(Boolean);
        var tipe = data.record.cleaning.map(e => e.Type).filter(Boolean);
        var count = data.record.cleaning.map(e => e.Count).filter(Boolean);
        
    const topMachineCtx = document.getElementById('topMachineChart');
    const transactionTypeCtx = document.getElementById('transactionTypeChart');
    const salesTrendCtx = document.getElementById('salesTrendChart');
    
    // Top Machine Used //
    new Chart(topMachineCtx, {
        type: 'bar',
        data: {
            labels: machine,
            datasets: [{
                label: 'Sales',
                data: sale,
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

    // Transaction Type //
    const transactionTypePie = new Chart(transactionTypeCtx, {
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

    // Sales Trend //
    const salesTrendMixed = new Chart(salesTrendCtx, {
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
    }};
    
});