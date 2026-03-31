// ============================================
// DRILL CALCULATOR APP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initTapDrill();
    initDecimal();
    initPipe();
    initSearch();
});

// === TAB NAVIGATION ===
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

// === TAP DRILL TAB ===
function initTapDrill() {
    const typeSelect = document.getElementById('thread-type');
    const sizeSelect = document.getElementById('thread-size');
    const resultCard = document.getElementById('tap-result');

    function populateSizes() {
        const type = typeSelect.value;
        let data;
        if (type === 'unc') data = UNC_TAPS;
        else if (type === 'unf') data = UNF_TAPS;
        else data = METRIC_TAPS;

        sizeSelect.innerHTML = '<option value="">— Select size —</option>';
        data.forEach((item, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = item.size;
            sizeSelect.appendChild(opt);
        });
        resultCard.classList.add('hidden');
    }

    function showResult() {
        const type = typeSelect.value;
        const idx = sizeSelect.value;
        if (idx === '') {
            resultCard.classList.add('hidden');
            return;
        }

        let data;
        if (type === 'unc') data = UNC_TAPS;
        else if (type === 'unf') data = UNF_TAPS;
        else data = METRIC_TAPS;

        const item = data[idx];
        document.getElementById('tap-drill-size').textContent = item.tapDrill;
        document.getElementById('tap-drill-decimal').innerHTML =
            `<strong>Decimal:</strong> ${item.tapDrillDecimal.toFixed(4)}" (${(item.tapDrillDecimal * 25.4).toFixed(2)}mm)`;
        document.getElementById('tap-drill-percent').innerHTML =
            `<strong>Thread:</strong> ${item.size} · ${item.tpi} TPI · ~${item.percentThread}% thread`;
        resultCard.classList.remove('hidden');
    }

    typeSelect.addEventListener('change', populateSizes);
    sizeSelect.addEventListener('change', showResult);
    populateSizes();
}

// === DECIMAL EQUIVALENTS TAB ===
function initDecimal() {
    const typeSelect = document.getElementById('drill-type');
    const fractionGroup = document.getElementById('fraction-input-group');
    const numberGroup = document.getElementById('number-input-group');
    const letterGroup = document.getElementById('letter-input-group');
    const metricGroup = document.getElementById('metric-input-group');
    const resultCard = document.getElementById('decimal-result');

    // Populate fraction select
    const fracSelect = document.getElementById('fraction-size');
    fracSelect.innerHTML = '<option value="">— Select —</option>';
    FRACTION_DRILLS.forEach((item, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = item.frac + '"';
        fracSelect.appendChild(opt);
    });

    // Populate number select
    const numSelect = document.getElementById('number-size');
    numSelect.innerHTML = '<option value="">— Select —</option>';
    Object.keys(NUMBER_DRILLS).forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = '#' + n;
        numSelect.appendChild(opt);
    });

    // Populate letter select
    const letSelect = document.getElementById('letter-size');
    letSelect.innerHTML = '<option value="">— Select —</option>';
    Object.keys(LETTER_DRILLS).forEach(l => {
        const opt = document.createElement('option');
        opt.value = l;
        opt.textContent = l;
        letSelect.appendChild(opt);
    });

    function toggleInputs() {
        const type = typeSelect.value;
        fractionGroup.classList.toggle('hidden', type !== 'fraction');
        numberGroup.classList.toggle('hidden', type !== 'number');
        letterGroup.classList.toggle('hidden', type !== 'letter');
        metricGroup.classList.toggle('hidden', type !== 'metric-mm');
        resultCard.classList.add('hidden');
    }

    function showDecimal(inches) {
        if (isNaN(inches) || inches <= 0) {
            resultCard.classList.add('hidden');
            return;
        }
        document.getElementById('decimal-value').textContent = inches.toFixed(4) + '"';
        document.getElementById('decimal-mm').innerHTML =
            `<strong>Metric:</strong> ${(inches * 25.4).toFixed(3)}mm`;
        resultCard.classList.remove('hidden');
    }

    typeSelect.addEventListener('change', toggleInputs);

    fracSelect.addEventListener('change', () => {
        if (fracSelect.value === '') return resultCard.classList.add('hidden');
        showDecimal(FRACTION_DRILLS[fracSelect.value].decimal);
    });

    numSelect.addEventListener('change', () => {
        if (numSelect.value === '') return resultCard.classList.add('hidden');
        showDecimal(NUMBER_DRILLS[numSelect.value]);
    });

    letSelect.addEventListener('change', () => {
        if (letSelect.value === '') return resultCard.classList.add('hidden');
        showDecimal(LETTER_DRILLS[letSelect.value]);
    });

    document.getElementById('metric-size').addEventListener('input', (e) => {
        const mm = parseFloat(e.target.value);
        if (mm > 0) {
            showDecimal(mm / 25.4);
        } else {
            resultCard.classList.add('hidden');
        }
    });
}

// === PIPE THREAD TAB ===
function initPipe() {
    const typeSelect = document.getElementById('pipe-type');
    const sizeSelect = document.getElementById('pipe-size');
    const resultCard = document.getElementById('pipe-result');

    function populateSizes() {
        const data = typeSelect.value === 'npt' ? NPT_SIZES : NPS_SIZES;
        sizeSelect.innerHTML = '<option value="">— Select pipe size —</option>';
        data.forEach((item, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = item.size + '"';
            sizeSelect.appendChild(opt);
        });
        resultCard.classList.add('hidden');
    }

    function showResult() {
        const data = typeSelect.value === 'npt' ? NPT_SIZES : NPS_SIZES;
        const idx = sizeSelect.value;
        if (idx === '') return resultCard.classList.add('hidden');

        const item = data[idx];
        document.getElementById('pipe-drill-size').textContent = item.tapDrill;
        document.getElementById('pipe-tpi').innerHTML =
            `<strong>TPI:</strong> ${item.tpi} · <strong>Decimal:</strong> ${item.tapDrillDecimal.toFixed(4)}"`;
        document.getElementById('pipe-od').innerHTML =
            `<strong>Pipe OD:</strong> ${item.od}" (${(item.od * 25.4).toFixed(1)}mm)`;
        resultCard.classList.remove('hidden');
    }

    typeSelect.addEventListener('change', populateSizes);
    sizeSelect.addEventListener('change', showResult);
    populateSizes();
}

// === SEARCH TAB ===
function initSearch() {
    const input = document.getElementById('search-input');
    const resultsDiv = document.getElementById('search-results');

    function buildSearchIndex() {
        const items = [];

        // Number drills
        Object.entries(NUMBER_DRILLS).forEach(([num, dec]) => {
            items.push({
                name: `#${num} Drill`,
                detail: `${dec.toFixed(4)}" · ${(dec * 25.4).toFixed(2)}mm`,
                search: `#${num} ${num} number`,
                decimal: dec
            });
        });

        // Letter drills
        Object.entries(LETTER_DRILLS).forEach(([letter, dec]) => {
            items.push({
                name: `Letter ${letter} Drill`,
                detail: `${dec.toFixed(4)}" · ${(dec * 25.4).toFixed(2)}mm`,
                search: `${letter} letter`,
                decimal: dec
            });
        });

        // Fraction drills
        FRACTION_DRILLS.forEach(f => {
            items.push({
                name: `${f.frac}" Drill`,
                detail: `${f.decimal.toFixed(4)}" · ${(f.decimal * 25.4).toFixed(2)}mm`,
                search: `${f.frac} fraction`,
                decimal: f.decimal
            });
        });

        // UNC taps
        UNC_TAPS.forEach(t => {
            items.push({
                name: `${t.size} UNC`,
                detail: `Tap drill: ${t.tapDrill} (${t.tapDrillDecimal.toFixed(4)}") · ${t.tpi} TPI`,
                search: `${t.size} unc coarse ${t.tapDrill}`,
                decimal: t.tapDrillDecimal
            });
        });

        // UNF taps
        UNF_TAPS.forEach(t => {
            items.push({
                name: `${t.size} UNF`,
                detail: `Tap drill: ${t.tapDrill} (${t.tapDrillDecimal.toFixed(4)}") · ${t.tpi} TPI`,
                search: `${t.size} unf fine ${t.tapDrill}`,
                decimal: t.tapDrillDecimal
            });
        });

        // Metric taps
        METRIC_TAPS.forEach(t => {
            items.push({
                name: `${t.size}`,
                detail: `Tap drill: ${t.tapDrill} (${t.tapDrillDecimal.toFixed(4)}") · Metric`,
                search: `${t.size} metric mm`,
                decimal: t.tapDrillDecimal
            });
        });

        // Pipe threads
        NPT_SIZES.forEach(p => {
            items.push({
                name: `${p.size}" NPT`,
                detail: `Tap drill: ${p.tapDrill} · ${p.tpi} TPI · OD ${p.od}"`,
                search: `${p.size} npt pipe tapered`,
                decimal: p.tapDrillDecimal
            });
        });

        return items;
    }

    const index = buildSearchIndex();

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 1) {
            resultsDiv.innerHTML = '';
            return;
        }

        const matches = index.filter(item =>
            item.search.toLowerCase().includes(query) ||
            item.name.toLowerCase().includes(query)
        ).slice(0, 20);

        if (matches.length === 0) {
            resultsDiv.innerHTML = '<div class="search-item"><div class="size-name">No results</div><div class="size-detail">Try a different search term</div></div>';
            return;
        }

        resultsDiv.innerHTML = matches.map(m => `
            <div class="search-item">
                <div class="size-name">${m.name}</div>
                <div class="size-detail">${m.detail}</div>
            </div>
        `).join('');
    });
}
