let lineChart = document.getElementById('traffic-chart').getContext('2d');
let barChart = document.getElementById('daily-chart').getContext('2d');


// Four Data presets to be used in each traffic breakdown

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

let dataPreset2 = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [2500, 5000, 8000, 9000, 8500, 6000, 2000, 9000, 7500, 7000, 9500],
            backgroundColor: 'rgba(211,212,234,.3)',
            tension: 0.4,
            borderWidth: 1,
            fill: true
        }]

};

// Data Preset 3

let dataPreset3 = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [2000, 2500, 1000, 4000, 6000, 3000, 5000, 9000, 8000, 10000, 9500],
            backgroundColor: 'rgba(211,212,234,.3)',
            tension: 0.4,
            borderWidth: 1,
            fill: true
        }]

};

// Data Preset 4

let dataPreset4 = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [1000, 2500, 1000, 3000, 5000, 2000, 5000, 9000, 8000, 10000, 9500],
            backgroundColor: 'rgba(211,212,234,.3)',
            tension: 0.4,
            borderWidth: 1,
            fill: true
        }]
};

// Chart Options

let chartOptions = {
    aspectRatio: 2.5,
    responsive: true,
    animation: {
        duration: 600,
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

// Traffic Chart configuration

let trafficChart = new Chart(lineChart, {
    type: 'line',
    data: dataPreset1,
    options: chartOptions,
    
});

// Daily Chart Configuration

let dailyChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['S','M','T','W','T','F','S'],
        datasets: [{
            data: [50, 20, 30, 50, 80, 90, 100],
            backgroundColor: '#7477bf',
            borderWidth: 1
        }]
    },
    options: { 
        responsive: true,
        aspectRatio: 3,
        scales: {
            y: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            }
        }
    } 
});