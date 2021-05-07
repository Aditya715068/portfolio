var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['JavaScript','Python', 'NodeJS', 'React', 'SQL', 'HTML', 'CSS', 'Boothstrap', 'MongoDB', 'PowerBI', 'VBA'],
        datasets: [{
            label: '# of Votes',
            data: [16, 13, 16, 15, 17, 18, 17, 15, 16, 17, 18],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
                borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});