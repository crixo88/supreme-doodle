document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab a').forEach(tabLink => {
        tabLink.addEventListener('click', function(event) {
            event.preventDefault();
            const hrefValue = this.getAttribute('href');

            if (hrefValue) {
                const tabId = hrefValue.substring(1); // Obtener el id del tab

                document.querySelectorAll('.tab a').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

                this.classList.add('active');
                const contentTab = document.getElementById(tabId);
                if (contentTab) {
                    contentTab.classList.add('active');
                }
            }
        });
    });
});
