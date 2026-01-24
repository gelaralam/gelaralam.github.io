// Timeline Module
export class Timeline {
    constructor(onDataLoaded = null) {
        this.timelineContainer = document.getElementById('timeline-container');
        this.onDataLoaded = onDataLoaded;
        // URL Google Sheets (Format CSV)
        this.sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXXXXXXXX/pub?output=csv';

        // Data Cadangan (Fallback)
        this.fallbackData = [
            { id: 1, date: '1 PEBRUARI', title: 'PANGANGGOAN 14 NA RUAH', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
            { id: 2, date: '4 PEBRUARI', title: 'SIDKAH RUAH REBO 16 RUAH', description: 'Upacara adat yang berkaitan dengan aspek keagamaan' },
            { id: 3, date: '11 PEBRUARI', title: 'TUTUP NYAMBUT 23 RUAH', description: 'Tutup nyambut dilaksanakan untuk menjadi tanda atau sandi kasepuhan.' },
            { id: 4, date: '24 PEBRUARI', title: 'PAMAGERAN SALASA 7 PUASA', description: 'Pamageran dilaksanakan untuk memagari seluruh kegiatan pertanian.' },
            { id: 5, date: '2 MARET', title: 'PANGANGGOAN 14 NA PUASA', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
            { id: 6, date: '5 MARET', title: 'PANYIRAMAN KEMIS 16 PUASA', description: 'Panyiraman atau Salamet Mapag Paré Nyiram dilakukan ketika padi sudah mulai tumbuh bulir atau nyiram (Paré Beukah) baik di huma dan disawah, dilaksanakan selametan atau syukuran agar padi tumbuh dengan baik dan terhidar dari hama.' },
            { id: 7, date: '23 MARET', title: 'PANYIMURAN SENEN 4 SAWAL', description: 'Kegiatan nyimur dilakukan untuk inisiasi bayi baru lahir.' },
            { id: 8, date: '31 MARET', title: 'BEBERES PANYIMURAN SALASA 12 SAWAL', description: 'Kegiatan nyimur dilakukan untuk inisiasi bayi baru lahir.' },
            { id: 9, date: '1 APRIL', title: 'PANGANGGOAN 14 NA SAWAL', description: 'Panganggoan Hajat keinginan Abah hendak mengkhitanan (sunatan)' }
        ];

        this.timelineData = [];
        this.init();
    }

    async init() {
        try {
            await this.fetchData();
        } catch (error) {
            console.warn('Gagal mengambil data online, menggunakan data cadangan:', error);
            this.timelineData = this.fallbackData;
        } finally {
            this.render();
            this.setupAnimation();
            if (this.onDataLoaded) {
                this.onDataLoaded(this.timelineData);
            }
        }
    }

    async fetchData() {
        const response = await fetch(this.sheetUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.text();
        this.timelineData = this.parseCSV(data);
    }

    parseCSV(csvText) {
        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        return lines.slice(1).map((line, index) => {
            const columns = line.split(',').map(col => col.trim().replace(/^"|"$/g, ''));
            return {
                id: index + 1,
                date: columns[0] || '',
                title: columns[1] || '',
                description: columns[2] || ''
            };
        });
    }

    render() {
        if (!this.timelineContainer) return;
        this.timelineContainer.innerHTML = '';

        this.timelineData.forEach((item) => {
            const timelineItem = this.createTimelineItem(item);
            this.timelineContainer.appendChild(timelineItem);
        });
    }

    createTimelineItem(item) {
        const div = document.createElement('div');
        div.className = 'timeline__item';

        div.innerHTML = `
            <div class="timeline__content">
                <h3 class="timeline__title">${item.title}</h3>
                <p class="timeline__description">${item.description}</p>
            </div>
            <div class="timeline__date">${item.date}</div>
        `;

        return div;
    }

    setupAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.2 });

        const items = this.timelineContainer.querySelectorAll('.timeline__item');
        items.forEach(item => observer.observe(item));
    }
}

export default Timeline;
