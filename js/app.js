// ==================== FALLBACK DATA (para apertura local sin servidor) ====================
const FALLBACK_DATA = {
  centro_operaciones: {
    id: 'ucv-ciencias',
    nombre: 'Facultad de Ciencias — UCV (Centro de Operaciones)',
    region: 'Caracas',
    direccion: 'Paseo Los Ilustres, Ciudad Universitaria de Caracas, Caracas 1040, Distrito Capital',
    lat: 10.48667,
    lng: -66.89083,
    armados: 600,
    rol: 'Recepción de insumos, armado del 100% de los kits (600) y distribución.'
  },
  sedes_entrega: [
    {
      id: 'fe-alegria-abraham-reyes',
      sede: 'Colegio Fe y Alegría Abraham Reyes',
      tipo: 'Centro Educativo',
      region: 'Caracas',
      parroquia: 'Parroquia 23 de Enero',
      direccion: 'Zona Central, detrás del Bloque 29, Calle Cristo Rey, Parroquia 23 de Enero, Caracas 1030, Distrito Capital',
      lat: 10.50838,
      lng: -66.93725,
      entregados: 184,
      permisos: 'Verificados'
    },
    {
      id: 'polideportivo-jmv',
      sede: 'Refugio Polideportivo José María Vargas',
      tipo: 'Refugio',
      region: 'La Guaira',
      parroquia: 'Maiquetía (Parroquia Carlos Soublette)',
      direccion: 'Avenida Soublette, Parroquia Carlos Soublette, Maiquetía 1161, Estado La Guaira',
      lat: 10.60013,
      lng: -66.97062,
      entregados: 171,
      permisos: 'Verificados'
    },
    {
      id: 'uen-republica-panama',
      sede: 'Refugio Colegio UEN República de Panamá',
      tipo: 'Refugio / Centro Educativo',
      region: 'La Guaira',
      parroquia: 'La Guaira',
      direccion: 'Sector Avenida Soublette del Cardonal, frente a la Av. Soublette, La Guaira 1160, Estado La Guaira',
      lat: 10.60188,
      lng: -66.92612,
      entregados: 129,
      permisos: 'Verificados'
    },
    {
      id: 'iglesia-universal-lg',
      sede: 'Refugio Iglesia Universal',
      tipo: 'Refugio',
      region: 'La Guaira',
      parroquia: 'Maiquetía / La Guaira',
      direccion: 'Calle San Sebastián esquina Calle Navarrete, Maiquetía 1161, Estado La Guaira',
      lat: 10.59425,
      lng: -66.9525,
      entregados: 25,
      permisos: 'Verificados'
    },
    {
      id: 'club-campo-golf',
      sede: 'Refugio Club Campo de Golf',
      tipo: 'Refugio',
      region: 'La Guaira',
      parroquia: 'Caraballeda',
      direccion: 'Avenida José María España / Avenida Charama, Urbanización Caraballeda 1165, Estado La Guaira',
      lat: 10.61375,
      lng: -66.8415,
      entregados: 91,
      permisos: 'Verificados'
    }
  ],
  galeria_ilustrada: [
  {
    "archivo": "./assets/ilustraciones/armado_mesa_qr.jpg",
    "titulo": "Armado y rotulado QR (UCV)",
    "descripcion": "Mesa de preparación de kits con códigos QR en Facultad de Ciencias."
  },
  {
    "archivo": "./assets/ilustraciones/voluntaria_recorte_qr.jpg",
    "titulo": "Etiquetado de trazabilidad",
    "descripcion": "Voluntaria recortando etiquetas QR para control de entregas."
  },
  {
    "archivo": "./assets/ilustraciones/equipo_armado_ucv.jpg",
    "titulo": "Equipo en Facultad de Ciencias UCV",
    "descripcion": "Voluntarios organizando los 600 kits en el centro de operaciones."
  },
  {
    "archivo": "./assets/ilustraciones/voluntarios_empacando_ucv.jpg",
    "titulo": "Empaque de lotes (UCV)",
    "descripcion": "Preparación de bolsas individuales con útiles y libretas."
  },
  {
    "archivo": "./assets/ilustraciones/etiquetas_qr_ucv.jpg",
    "titulo": "Control de inventario QR",
    "descripcion": "Preparación de códigos para seguimiento de cada kit."
  },
  {
    "archivo": "./assets/ilustraciones/cajas_kits_empacados.jpg",
    "titulo": "Cajas listas para despacho",
    "descripcion": "Lotes sellados y clasificados para Caracas y La Guaira."
  },
  {
    "archivo": "./assets/ilustraciones/entrega_carpa_01.jpg",
    "titulo": "Entrega en refugio (La Guaira)",
    "descripcion": "Voluntarios entregando kits educativos a familias y niños."
  },
  {
    "archivo": "./assets/ilustraciones/equipo_voluntarios.jpg",
    "titulo": "Equipo de logística en campo",
    "descripcion": "Voluntarios organizando las mesas de entrega en refugio."
  },
  {
    "archivo": "./assets/ilustraciones/entrega_carpa_02.jpg",
    "titulo": "Distribución comunitaria",
    "descripcion": "Jornada de entrega en carpa comunitaria."
  },
  {
    "archivo": "./assets/ilustraciones/ninos_carpa_kits.jpg",
    "titulo": "Explorando los kits en carpa",
    "descripcion": "Niños y familias revisando sus cuadernos y colores."
  },
  {
    "archivo": "./assets/ilustraciones/jovenes_revisando_kits.jpg",
    "titulo": "Materiales de dibujo",
    "descripcion": "Jóvenes estrenando sus libretas para el concurso de dibujo."
  },
  {
    "archivo": "./assets/ilustraciones/mesa_kits_escuela.jpg",
    "titulo": "Mesa de kits · UEN República de Panamá",
    "descripcion": "Lotes clasificados y listos para los estudiantes."
  },
  {
    "archivo": "./assets/ilustraciones/comunidad_republica_panama.jpg",
    "titulo": "Complejo Educativo República de Panamá",
    "descripcion": "Encuentro comunitario durante la entrega en La Guaira."
  },
  {
    "archivo": "./assets/ilustraciones/entrega_general_panama.jpg",
    "titulo": "Jornada en UEN República de Panamá",
    "descripcion": "Entrega masiva verificada en el patio del plantel."
  },
  {
    "archivo": "./assets/ilustraciones/fila_entrega_panama.jpg",
    "titulo": "Distribución ordenada en plantel",
    "descripcion": "Familias recibiendo sus kits educativos en La Guaira."
  },
  {
    "archivo": "./assets/ilustraciones/entrega_bajo_arbol.jpg",
    "titulo": "Jornada al aire libre",
    "descripcion": "Entrega directa a familias en espacio abierto."
  },
  {
    "archivo": "./assets/ilustraciones/bolsas_kits_detalle.jpg",
    "titulo": "Detalle de los kits armados",
    "descripcion": "Bolsas preparadas en la Facultad de Ciencias UCV."
  },
  {
    "archivo": "./assets/ilustraciones/estudiantes_con_kits.jpg",
    "titulo": "Estudiantes con sus kits",
    "descripcion": "Estudiantes recibiendo sus materiales educativos."
  }
]
};

const DRAWINGS = [
  { id: 'DIB-S01', title: 'Mi escuela solar', bg: '#fef3c7', accent: '#f59e0b', shape: 'sun', c1: 5, c2: 5, c3: 4, note: 'Uso expresivo del color y mensaje sobre energía limpia.' },
  { id: 'DIB-S02', title: 'El Ávila y los libros', bg: '#dcfce7', accent: '#10b981', shape: 'mountain', c1: 5, c2: 4, c3: 5, note: 'Excelente integración del paisaje local con la lectura.' },
  { id: 'DIB-S03', title: 'Barco de papel en La Guaira', bg: '#dbeafe', accent: '#3b82f6', shape: 'wave', c1: 4, c2: 5, c3: 4, note: 'Representación clara de la comunidad costera.' },
  { id: 'DIB-S04', title: 'Árbol del conocimiento', bg: '#fce7f3', accent: '#ec4899', shape: 'tree', c1: 4, c2: 4, c3: 4, note: 'Buen simbolismo educativo.' },
  { id: 'DIB-S05', title: 'Cohete de colores', bg: '#ede9fe', accent: '#8b5cf6', shape: 'star', c1: 5, c2: 3, c3: 4, note: 'Muy creativo en trazos y formas.' },
  { id: 'DIB-S06', title: 'Biblioteca compartida', bg: '#ffedd5', accent: '#f97316', shape: 'house', c1: 4, c2: 5, c3: 4, note: 'Destaca el valor de compartir materiales.' },
  { id: 'DIB-S07', title: 'Mariposa de papel', bg: '#ccfbf1', accent: '#14b8a6', shape: 'sun', c1: 4, c2: 4, c3: 3, note: 'Trazos limpios y alegres.' },
  { id: 'DIB-S08', title: 'Puente entre montañas', bg: '#e0e7ff', accent: '#6366f1', shape: 'mountain', c1: 4, c2: 4, c3: 4, note: 'Buen detalle geométrico.' },
  { id: 'DIB-S09', title: 'Olas y cuadernos', bg: '#f1f5f9', accent: '#0284c7', shape: 'wave', c1: 3, c2: 4, c3: 4, note: 'Refleja entusiasmo por el kit.' },
  { id: 'DIB-S10', title: 'Jardín de letras', bg: '#fef9c3', accent: '#ca8a04', shape: 'tree', c1: 4, c2: 4, c3: 3, note: 'Composición equilibrada.' },
  { id: 'DIB-S11', title: 'Estrellas de la tarde', bg: '#fae8ff', accent: '#c026d3', shape: 'star', c1: 3, c2: 3, c3: 4, note: 'Buen uso de contraste.' },
  { id: 'DIB-S12', title: 'Casa de pinturas', bg: '#fee2e2', accent: '#ef4444', shape: 'house', c1: 3, c2: 3, c3: 3, note: 'Ejemplo base para recalibración de rúbrica.' }
];

let OPERATIONS_HUB = FALLBACK_DATA.centro_operaciones;
let SITES_DATA = FALLBACK_DATA.sedes_entrega;
let GALLERY_DATA = FALLBACK_DATA.galeria_ilustrada;

let state = {
  activeTab: 'public',
  regionFilter: 'Todas',
  selectedDrawingId: 'DIB-S01',
  auditLog: [
    { ts: '2026-11-22 15:40', jury: 'Jurado-A (Educación)', id: 'DIB-S01', score: 14, hash: 'a9f3c2' },
    { ts: '2026-11-22 15:45', jury: 'Jurado-B (Arte Comunitario)', id: 'DIB-S02', score: 14, hash: 'b71e04' },
    { ts: '2026-11-22 15:52', jury: 'Jurado-C (CC Venezuela)', id: 'DIB-S03', score: 13, hash: 'c42d91' }
  ]
};

let mapInstance = null;
let mapLayerGroup = null;
let siteMarkers = {};
let chartInstance = null;

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.add('hidden'), 3200);
}

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
  return Math.abs(h).toString(16).slice(0, 6).padStart(6, '0');
}

function getFilteredSites() {
  if (state.regionFilter === 'Todas') return SITES_DATA;
  return SITES_DATA.filter(s => s.region === state.regionFilter);
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function drawingSVG(d) {
  const shapes = {
    sun: `<circle cx="50" cy="42" r="16" fill="${d.accent}"/><path d="M20 75 Q50 58 80 75" stroke="#1e293b" stroke-width="3" fill="none"/>`,
    mountain: `<polygon points="15,78 45,28 75,78" fill="${d.accent}" opacity="0.85"/><polygon points="45,78 68,40 90,78" fill="#0f172a" opacity="0.25"/>`,
    wave: `<path d="M10 62 Q30 45 50 62 T90 62" stroke="${d.accent}" stroke-width="5" fill="none"/><polygon points="42,48 58,48 50,30" fill="#0f172a" opacity="0.7"/>`,
    tree: `<rect x="46" y="55" width="8" height="24" fill="#78350f"/><circle cx="50" cy="40" r="18" fill="${d.accent}"/>`,
    star: `<polygon points="50,18 58,38 80,38 62,52 68,72 50,60 32,72 38,52 20,38 42,38" fill="${d.accent}"/>`,
    house: `<rect x="28" y="45" width="44" height="32" fill="${d.accent}" opacity="0.85"/><polygon points="22,45 50,20 78,45" fill="#1e293b"/>`
  };
  return `<svg viewBox="0 0 100 90" class="w-full h-20 rounded-lg border border-slate-200" style="background:${d.bg}">${shapes[d.shape] || shapes.sun}</svg>`;
}

function focusMapOnSite(siteId) {
  const marker = siteMarkers[siteId];
  if (marker && mapInstance) {
    mapInstance.setView(marker.getLatLng(), 14, { animate: true });
    marker.openPopup();
    document.getElementById('safeMap').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = GALLERY_DATA.map(item => `
    <figure class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col">
      <img src="${item.archivo}" alt="${item.titulo}" class="w-full h-44 object-cover" loading="lazy" />
      <figcaption class="p-3 text-xs text-slate-700 flex-1 flex flex-col justify-between gap-2">
        <div>
          <p class="font-bold text-slate-900">${item.titulo}</p>
          <p class="text-slate-600 mt-0.5">${item.descripcion}</p>
        </div>
        <span class="self-start px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Estilo Dibujo · Privacidad OK</span>
      </figcaption>
    </figure>
  `).join('');
}

function renderPublic() {
  const sites = getFilteredSites();
  const entregados = sites.reduce((s, x) => s + x.entregados, 0);
  const pctOfTotal = ((entregados / 600) * 100).toFixed(1);

  document.getElementById('kpiArmados').textContent = '600';
  document.getElementById('kpiEntregados').textContent = entregados;
  document.getElementById('kpiPorcentaje').textContent = state.regionFilter === 'Todas'
    ? '100.0% completado en 5 sedes'
    : `${pctOfTotal}% del total (${sites.length} sede${sites.length > 1 ? 's' : ''})`;
  document.getElementById('kpiSaldo').textContent = '0';
  document.getElementById('kpiDibujos').textContent = '60';

  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = sites.map(s => `
    <tr data-site="${s.id}" class="site-row hover:bg-teal-50/50 cursor-pointer transition">
      <td class="px-4 py-3 font-semibold text-slate-900">
        ${s.sede}
        <div class="text-[11px] font-normal text-slate-500">${s.tipo} · ${s.parroquia}</div>
      </td>
      <td class="px-4 py-3 text-slate-700 font-medium">${s.region}</td>
      <td class="px-4 py-3 text-xs text-slate-600 max-w-xs">${s.direccion}</td>
      <td class="px-4 py-3 text-right font-bold text-teal-700">${s.entregados}</td>
      <td class="px-4 py-3 text-right font-medium text-slate-700">${((s.entregados / 600) * 100).toFixed(1)}%</td>
      <td class="px-4 py-3"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">${s.permisos}</span></td>
    </tr>
  `).join('');

  document.querySelectorAll('.site-row').forEach(row => {
    row.addEventListener('click', () => focusMapOnSite(row.dataset.site));
  });

  document.getElementById('tableFoot').innerHTML = `
    <tr>
      <td class="px-4 py-3" colspan="3">Total Entregado (${state.regionFilter}) — Armado 100% en Fac. Ciencias UCV</td>
      <td class="px-4 py-3 text-right text-teal-700">${entregados}</td>
      <td class="px-4 py-3 text-right">${pctOfTotal}%</td>
      <td class="px-4 py-3 text-xs text-emerald-700">Saldo: 0</td>
    </tr>
  `;

  const ctx = document.getElementById('reconciliationChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sites.map(s => s.sede.replace('Refugio ', '').replace('Colegio ', '')),
      datasets: [{
        label: 'Kits entregados',
        data: sites.map(s => s.entregados),
        backgroundColor: sites.map(s => s.region === 'Caracas' ? '#4f46e5' : '#0d9488'),
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
        y: { beginAtZero: true }
      },
      plugins: { legend: { display: false } }
    }
  });

  if (!mapInstance) {
    mapInstance = L.map('safeMap').setView([10.55, -66.91], 11);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri'
    }).addTo(mapInstance);
    mapLayerGroup = L.layerGroup().addTo(mapInstance);
  }
  mapLayerGroup.clearLayers();
  siteMarkers = {};
  const bounds = [];

  const hubMarker = L.circleMarker([OPERATIONS_HUB.lat, OPERATIONS_HUB.lng], {
    radius: 10,
    color: '#312e81',
    weight: 3,
    fillColor: '#6366f1',
    fillOpacity: 0.9
  }).bindPopup(`
    <div style="min-width:210px">
      <span style="display:inline-block;padding:2px 6px;border-radius:4px;background:#e0e7ff;color:#3730a3;font-size:10px;font-weight:700;margin-bottom:4px">CENTRO DE OPERACIONES</span><br/>
      <strong>${OPERATIONS_HUB.nombre}</strong><br/>
      <span style="font-size:11px;color:#475569">${OPERATIONS_HUB.direccion}</span><br/>
      <hr style="margin:6px 0;border-color:#e2e8f0"/>
      <span style="font-size:12px"><strong>Armados:</strong> 600 kits (100%)</span><br/>
      <span style="font-size:11px;color:#334155">${OPERATIONS_HUB.rol}</span>
    </div>
  `);
  hubMarker.addTo(mapLayerGroup);
  siteMarkers[OPERATIONS_HUB.id] = hubMarker;
  bounds.push([OPERATIONS_HUB.lat, OPERATIONS_HUB.lng]);

  sites.forEach(s => {
    const marker = L.circleMarker([s.lat, s.lng], {
      radius: Math.max(8, Math.min(16, Math.round(s.entregados / 14))),
      color: '#0f766e',
      weight: 2.5,
      fillColor: '#14b8a6',
      fillOpacity: 0.85
    }).bindPopup(`
      <div style="min-width:210px">
        <span style="display:inline-block;padding:2px 6px;border-radius:4px;background:#ccfbf1;color:#115e59;font-size:10px;font-weight:700;margin-bottom:4px">${s.tipo.toUpperCase()} · ${s.region.toUpperCase()}</span><br/>
        <strong>${s.sede}</strong><br/>
        <span style="font-size:11px;color:#475569">${s.direccion}</span><br/>
        <hr style="margin:6px 0;border-color:#e2e8f0"/>
        <span style="font-size:12px"><strong>Entregados:</strong> ${s.entregados} kits (${((s.entregados / 600) * 100).toFixed(1)}%)</span><br/>
        <span style="font-size:11px;color:#047857">Armados en Fac. Ciencias UCV · Permisos: ${s.permisos}</span>
      </div>
    `);
    marker.addTo(mapLayerGroup);
    siteMarkers[s.id] = marker;
    bounds.push([s.lat, s.lng]);
  });

  if (bounds.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [35, 35], maxZoom: 12 });
  }
}

function renderJury() {
  const grid = document.getElementById('drawingsGrid');
  grid.innerHTML = DRAWINGS.map(d => {
    const total = d.c1 + d.c2 + d.c3;
    const active = d.id === state.selectedDrawingId;
    return `
      <button type="button" data-draw="${d.id}" class="draw-card text-left p-2.5 rounded-xl border transition ${active ? 'border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50/40' : 'border-slate-200 hover:border-slate-300 bg-white'}">
        ${drawingSVG(d)}
        <div class="mt-2 flex items-center justify-between gap-1">
          <span class="text-xs font-bold text-slate-900">${d.id}</span>
          <span class="text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800">${total}/15</span>
        </div>
        <p class="text-[11px] text-slate-600 truncate">${d.title}</p>
      </button>
    `;
  }).join('');

  document.querySelectorAll('.draw-card').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedDrawingId = btn.dataset.draw;
      loadSelectedDrawingToForm();
      renderJury();
    });
  });

  const sorted = [...DRAWINGS].sort((a, b) => (b.c1 + b.c2 + b.c3) - (a.c1 + a.c2 + a.c3));
  document.getElementById('top10List').innerHTML = sorted.map((d, idx) => {
    const total = d.c1 + d.c2 + d.c3;
    const isSelected = idx < 10;
    return `
      <div class="flex items-center justify-between p-2.5 rounded-xl border ${isSelected ? 'bg-emerald-50/60 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-65'}">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'}">${idx + 1}</span>
          <div class="min-w-0">
            <p class="text-xs font-bold text-slate-900 truncate">${d.id} · ${d.title}</p>
            <p class="text-[11px] text-slate-500 truncate">${d.note}</p>
          </div>
        </div>
        <div class="text-right shrink-0 ml-2">
          <span class="text-xs font-extrabold text-slate-900">${total}/15</span>
          <p class="text-[10px] font-semibold ${isSelected ? 'text-emerald-700' : 'text-slate-500'}">${isSelected ? 'Kit Ampliado' : 'En espera'}</p>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('auditLog').innerHTML = state.auditLog.map(item => `
    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
      <div>
        <p class="font-semibold text-slate-800">${item.id} → ${item.score}/15 pts <span class="font-normal text-slate-500">por ${item.jury}</span></p>
        <p class="text-[10px] text-slate-500">${item.ts}</p>
      </div>
      <code class="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">#${item.hash}</code>
    </div>
  `).join('');
}

function loadSelectedDrawingToForm() {
  const d = DRAWINGS.find(x => x.id === state.selectedDrawingId);
  if (!d) return;
  document.getElementById('evalTitle').textContent = `${d.id} — ${d.title}`;
  document.getElementById('rangeC1').value = d.c1;
  document.getElementById('rangeC2').value = d.c2;
  document.getElementById('rangeC3').value = d.c3;
  document.getElementById('evalNote').value = d.note;
  updateLiveScoreBadge();
}

function updateLiveScoreBadge() {
  const c1 = Number(document.getElementById('rangeC1').value);
  const c2 = Number(document.getElementById('rangeC2').value);
  const c3 = Number(document.getElementById('rangeC3').value);
  document.getElementById('valC1').textContent = c1;
  document.getElementById('valC2').textContent = c2;
  document.getElementById('valC3').textContent = c3;
  document.getElementById('evalTotalBadge').textContent = `${c1 + c2 + c3} / 15 pts`;
}

document.getElementById('btnTabPublic').addEventListener('click', () => {
  state.activeTab = 'public';
  document.getElementById('viewPublic').classList.remove('hidden');
  document.getElementById('viewJury').classList.add('hidden');
  document.getElementById('btnTabPublic').className = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition bg-teal-500 text-slate-950 shadow';
  document.getElementById('btnTabJury').className = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-slate-300 hover:text-white';
  document.getElementById('privacyBanner').className = 'bg-teal-50 border-b border-teal-200 px-4 py-2 text-xs text-teal-900';
  document.getElementById('privacyText').innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-teal-600 mr-1.5"></span><strong>Límite de Privacidad · Entorno Público:</strong> Muestra totales conciliados (600/600), sedes verificadas e ilustraciones estilizadas para proteger identidades.';
  setTimeout(() => { if (mapInstance) mapInstance.invalidateSize(); }, 100);
});

document.getElementById('btnTabJury').addEventListener('click', () => {
  state.activeTab = 'jury';
  document.getElementById('viewPublic').classList.add('hidden');
  document.getElementById('viewJury').classList.remove('hidden');
  document.getElementById('btnTabJury').className = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition bg-amber-400 text-slate-950 shadow';
  document.getElementById('btnTabPublic').className = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-slate-300 hover:text-white';
  document.getElementById('privacyBanner').className = 'bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-950';
  document.getElementById('privacyText').innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-amber-600 mr-1.5"></span><strong>Límite de Privacidad · Entorno Restringido:</strong> Acceso exclusivo para jurado humano. Usa dibujos sintéticos anónimos; nunca expone contactos ni pruebas de permiso.';
  renderJury();
});

document.getElementById('btnFocusUCV').addEventListener('click', () => focusMapOnSite(OPERATIONS_HUB.id));

document.querySelectorAll('.region-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.regionFilter = btn.dataset.region;
    document.querySelectorAll('.region-btn').forEach(b => {
      b.className = b === btn
        ? 'region-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white'
        : 'region-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200';
    });
    renderPublic();
  });
});

['rangeC1', 'rangeC2', 'rangeC3'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateLiveScoreBadge);
});

document.getElementById('btnSaveVote').addEventListener('click', () => {
  const d = DRAWINGS.find(x => x.id === state.selectedDrawingId);
  if (!d) return;
  d.c1 = Number(document.getElementById('rangeC1').value);
  d.c2 = Number(document.getElementById('rangeC2').value);
  d.c3 = Number(document.getElementById('rangeC3').value);
  const note = document.getElementById('evalNote').value.trim();
  if (note) d.note = note;

  const jury = document.getElementById('juryMemberSelect').value;
  const now = new Date().toISOString().slice(0, 16).replace('T', ' ');
  const total = d.c1 + d.c2 + d.c3;
  const hash = simpleHash(`${now}-${jury}-${d.id}-${total}`);

  state.auditLog.unshift({ ts: now, jury, id: d.id, score: total, hash });
  renderJury();
  showToast(`Evaluación guardada para ${d.id} (${total}/15 pts · #${hash})`);
});

document.getElementById('btnExportCSV').addEventListener('click', () => {
  const sites = getFilteredSites();
  const header = 'sede,tipo,region,parroquia,direccion,kits_entregados,porcentaje_total,centro_armado,permisos\n';
  const rows = sites.map(s => `"${s.sede}","${s.tipo}","${s.region}","${s.parroquia}","${s.direccion}",${s.entregados},${((s.entregados / 600) * 100).toFixed(1)},"Facultad de Ciencias UCV","${s.permisos}"`).join('\n');
  downloadFile('entregas_600_kits_ucv_ccvzla.csv', header + rows, 'text/csv;charset=utf-8;');
  showToast('CSV público descargado con las sedes verificadas.');
});

document.getElementById('btnExportJSON').addEventListener('click', () => {
  const payload = {
    proyecto: 'Del kit al impacto — Reto 04 CoAfina 2026',
    licencia: 'CC BY 4.0',
    centro_operaciones: OPERATIONS_HUB,
    totales_conciliados: { armados: 600, entregados: 600, saldo: 0, dibujos_recibidos: 60 },
    sedes_entrega: getFilteredSites()
  };
  downloadFile('datos_abiertos_600_kits_ccvzla.json', JSON.stringify(payload, null, 2), 'application/json');
  showToast('JSON abierto CC BY 4.0 descargado.');
});

document.getElementById('btnExportActa').addEventListener('click', () => {
  const sorted = [...DRAWINGS].sort((a, b) => (b.c1 + b.c2 + b.c3) - (a.c1 + a.c2 + a.c3));
  const acta = {
    entorno: 'RESTRINGIDO — EJEMPLOS SINTÉTICOS (DE 60 DIBUJOS RECIBIDOS)',
    top_10_seleccionados: sorted.slice(0, 10).map((d, i) => ({
      posicion: i + 1,
      codigo_anonimo: d.id,
      puntaje_total: d.c1 + d.c2 + d.c3,
      rubrica: { creatividad: d.c1, mensaje: d.c2, expresion: d.c3 },
      justificacion: d.note
    })),
    bitacora_trazable: state.auditLog
  };
  downloadFile('acta_jurado_trazable_sintetica.json', JSON.stringify(acta, null, 2), 'application/json');
  showToast('Acta trazable del jurado exportada.');
});

document.getElementById('btnPrintReport').addEventListener('click', () => window.print());

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('./data/entregas_publico.json');
    if (res.ok) {
      const data = await res.json();
      if (data.centro_operaciones) OPERATIONS_HUB = data.centro_operaciones;
      if (data.sedes_entrega) SITES_DATA = data.sedes_entrega;
      if (data.galeria_ilustrada) GALLERY_DATA = data.galeria_ilustrada;
    }
  } catch (e) {
    // Fallback local si se abre sin servidor HTTP
  }
  renderPublic();
  renderGallery();
  loadSelectedDrawingToForm();
});
