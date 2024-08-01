function resizeChart() {
    const chart = document.getElementById('radarChart');
    chart.style.width = '50%'; /* Ajusta este valor según sea necesario */
    chart.style.height = '50%'; /* Mantiene la proporción */
}

window.addEventListener('resize', resizeChart);
window.addEventListener('load', () => {
    resizeChart();
    var ctx = document.getElementById('radarChart').getContext('2d');
    var radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Conocimientos',
                'Trabajo en Equipo',
                'Curiosidad',
                'Resolución de Problemas',
                'Creatividad',
                'Adaptabilidad'
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
                    text: 'Habilidades de Cristian Casale',
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
                            size: 16
                        }
                    }
                }
            }
        }
    });
});