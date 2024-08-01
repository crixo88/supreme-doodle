function resizeChart() {
    const chart = document.getElementById('radarChart');
    const windowWidth = window.innerWidth;

    if (windowWidth < 600) { // Umbral para dispositivos móviles
        chart.style.width = '50%';
        chart.style.height = '50%';
    } else {
        chart.style.width = '10%';
        chart.style.height = '10%';
    }
}

window.addEventListener('resize', resizeChart);
window.addEventListener('load', () => {
    resizeChart();
    var ctx = document.getElementById('radarChart').getContext('2d');
    var windowWidth = window.innerWidth; // Definimos windowWidth aquí para usarla en pointLabels

    var radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'knowledge',
                'TeamWork',
                'Curiosity',
                'Resolver',
                'Creativity',
                'Adaptability'
            ],
            datasets: [{
                data: [75, 90, 100, 85, 95, 90],
                backgroundColor: 'rgba(0, 123, 255, 0.4)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Skills',
                    padding: {
                        bottom: 10
                    },
                    font: {
                        size: 18
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: 'rgba(0, 123, 255, 0.5)',
                        lineWidth: 1.5
                    },
                    angleLines: {
                        color: 'rgba(0, 123, 255, 0.5)',
                        lineWidth: 1.5
                    },
                    pointLabels: {
                        color: 'black',
                        font: {
                            size: windowWidth < 600 ? 12 : 16 // Ajuste de tamaño del texto
                        }
                    }
                }
            }
        }
    });
});
