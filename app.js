let ctx = document.getElementById('traffic-chart').getContext('2d');


// Data Preset 1

let dataPreset1 = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [800, 1500, 1000, 2000, 1800, 1900, 1300, 1700, 2300, 2200, 2500],
            backgroundColor: 'rgba(211,212,234,.3)',
            tension: 0.4,
            borderWidth: 1,
            fill: true
        }]

};

// Data Preset 2

// Data Preset 3

// Data Preset 4

// Chart Options

let chartOptions = {
    aspectRatio: 2.5,
    responsive: true,
    animation: {
        duration: 1000 * 1,
        easing: 'linear'
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};

let trafficChart = new Chart(ctx, {
    type: 'line',
    data: dataPreset1,
    options: chartOptions,
    
});
