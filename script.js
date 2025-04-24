fetch('partners.csv')
    .then(res => res.text())
    .then(data => {
        const rows = data.split('\n').slice(1);
        const container = document.getElementById('logo-track');
        rows.forEach(row => {
            const [href, imgUrl, altTxt] = row.split(',');
            if (href && imgUrl) {
                const a = document.createElement('a');
                a.href = href.trim();
                a.target = '_blank';
                a.rel = 'noopener';

            const img = document.createElement('img');
            img.src = imgUrl.trim();
            img.alt = 'Partner logo';

            a.appendChild(img);
            container.appendChild(a);
            }
      });
});
