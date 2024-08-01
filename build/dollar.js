document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://api.bluelytics.com.ar/v2/latest')
        .then(response => {
            const data = response.data;
            const selectElement = document.getElementById('currencySelect');

            // Function to update the values on screen
            const updateValues = (key) => {
                const valorCompra = data[key].value_buy;
                const valorVenta = data[key].value_sell;
                const currencyNameFix = key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
                document.getElementById('dolarValue').innerText = `${currencyNameFix}: Buy $${valorCompra} - Sell $${valorVenta}`;
            };

            // Display initial blue dollar value
            updateValues('blue');

            // Populate the dropdown with other currencies
            Object.keys(data).forEach(key => {
                if (key !== 'last_update') {
                    const option = document.createElement('option');
                    option.value = key;
                    option.text = key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
                    selectElement.appendChild(option);
                }
            });

            // Initialize the select with MaterializeCSS
            M.FormSelect.init(selectElement);

            // Handle the change of selected currency
            selectElement.addEventListener('change', function() {
                updateValues(this.value);
            });
        })
        .catch(error => {
            document.getElementById('dolarValue').innerText = 'Error loading values.';
            console.error('Error fetching values from the API:', error);
        });
});
