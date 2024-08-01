document.addEventListener('DOMContentLoaded', () => {
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

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Obtener el valor del dólar blue de la API de BlueLytics
    axios.get('https://api.bluelytics.com.ar/v2/latest')
        .then(response => {
            const valorDolarBlue = response.data.blue.value_buy;
            document.getElementById('dolarValue').innerText = `Valor del Dólar Blue Hoy: $${valorDolarBlue}`;
        })
        .catch(error => {
            document.getElementById('dolarValue').innerText = 'Error al cargar el valor del dólar blue.';
            console.error('Error al obtener el valor del dólar blue:', error);
        });
});
