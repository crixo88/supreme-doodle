document.addEventListener('DOMContentLoaded', () => {
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