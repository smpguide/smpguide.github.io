    document.getElementById('searchInput').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const details = document.querySelectorAll('details');
        let found = false;

        details.forEach(detail => {
            const summaryText = detail.querySelector('summary').textContent.toLowerCase();
            if (summaryText.includes(filter)) {
                detail.style.display = '';
                found = true;
            } else {
                detail.style.display = 'none';
            }
        });

        if (!found) {
            document.getElementById('nothing-found').style.display = 'block';
        } else {
            document.getElementById('nothing-found').style.display = 'none';
        }
    });