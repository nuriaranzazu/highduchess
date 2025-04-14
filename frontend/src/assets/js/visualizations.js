// 3D Globe Visualization
export function initializeWorldMap() {
    const container = document.getElementById('world-map-3d');
    if (!container) return;
    
    // Configuración básica de Three.js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x141414);
    
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 2;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    // Añadir controles de órbita
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Crear el globo terráqueo
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Usar un material simple para el ejemplo
    const globeMaterial = new THREE.MeshPhongMaterial({
        color: 0x4A6741,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Añadir iluminación
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    scene.add(light1);
    
    const light2 = new THREE.DirectionalLight(0x7A4E99, 0.5);
    light2.position.set(-1, -1, -1);
    scene.add(light2);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    // Añadir puntos de interés (regiones cannábicas)
    addRegionMarkers(scene);
    
    // Función de animación
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        globe.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    
    // Iniciar animación
    animate();
    
    // Adaptación responsive
    window.addEventListener('resize', function() {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

function addRegionMarkers(scene) {
    // Definir regiones importantes para el cannabis
    const regions = [
        { name: "Afganistán", lat: 33.93911, lon: 67.709953, color: 0xCD9B4A },
        { name: "Hindu Kush", lat: 36.14, lon: 71.84, color: 0xCD9B4A },
        { name: "Tailandia", lat: 15.870032, lon: 100.992541, color: 0xCD9B4A },
        { name: "Acapulco", lat: 16.853, lon: -99.823, color: 0x7A4E99 },
        { name: "Jamaica", lat: 18.109581, lon: -77.297508, color: 0x7A4E99 },
        { name: "Durban", lat: -29.85, lon: 31.02, color: 0x7A4E99 },
        { name: "Ámsterdam", lat: 52.37, lon: 4.89, color: 0x4A6741 },
        { name: "California", lat: 36.77, lon: -119.41, color: 0x4A6741 },
        { name: "Oaxaca", lat: 17.06, lon: -96.72, color: 0x7A4E99 }
    ];
    
    // Crear marcadores para cada región
    regions.forEach(region => {
        const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({ color: region.color });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        
        // Convertir coordenadas a posición 3D
        const phi = (90 - region.lat) * (Math.PI / 180);
        const theta = (region.lon + 180) * (Math.PI / 180);
        
        marker.position.x = -1.05 * Math.sin(phi) * Math.cos(theta);
        marker.position.y = 1.05 * Math.cos(phi);
        marker.position.z = 1.05 * Math.sin(phi) * Math.sin(theta);
        
        scene.add(marker);
    });
}

// Chart.js Visualizations
export function initializeCharts() {
    // Gráfico de indica
    initIndicaChart();
    
    // Gráfico de sativa
    initSativaChart();
    
    // Gráfico de híbrida
    initHybridChart();
    
    // Gráfico de cannabinoides
    initCannabinoidChart();
    
    // Gráfico de terpenos
    initTerpenesChart();
}

function initIndicaChart() {
    const indicaCtx = document.getElementById('indica-chart');
    if (!indicaCtx) return;
    
    new Chart(indicaCtx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Relajación', 'Alivio Dolor', 'Sueño', 'Apetito', 'Ánimo'],
            datasets: [{
                label: 'Perfil de Efectos',
                data: [9, 8, 9, 7, 4],
                backgroundColor: 'rgba(74, 103, 65, 0.2)',
                borderColor: 'rgba(74, 103, 65, 1)',
                pointBackgroundColor: 'rgba(74, 103, 65, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

function initSativaChart() {
    const sativaCtx = document.getElementById('sativa-chart');
    if (!sativaCtx) return;
    
    new Chart(sativaCtx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Relajación', 'Alivio Dolor', 'Sueño', 'Apetito', 'Ánimo'],
            datasets: [{
                label: 'Perfil de Efectos',
                data: [5, 6, 3, 5, 9],
                backgroundColor: 'rgba(122, 78, 153, 0.2)',
                borderColor: 'rgba(122, 78, 153, 1)',
                pointBackgroundColor: 'rgba(122, 78, 153, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

function initHybridChart() {
    const hybridCtx = document.getElementById('hybrid-chart');
    if (!hybridCtx) return;
    
    new Chart(hybridCtx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Relajación', 'Alivio Dolor', 'Sueño', 'Apetito', 'Ánimo'],
            datasets: [{
                label: 'Perfil de Efectos',
                data: [7, 7, 6, 6, 7],
                backgroundColor: 'rgba(205, 155, 74, 0.2)',
                borderColor: 'rgba(205, 155, 74, 1)',
                pointBackgroundColor: 'rgba(205, 155, 74, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

function initCannabinoidChart() {
    const cannabinoidCtx = document.getElementById('cannabinoid-chart');
    if (!cannabinoidCtx) return;
    
    new Chart(cannabinoidCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Acapulco Gold', 'OG Kush', 'CBD Therapy', 'White Widow', 'Northern Lights'],
            datasets: [
                {
                    label: 'THC %',
                    data: [18, 23, 0.5, 20, 16],
                    backgroundColor: 'rgba(122, 78, 153, 0.7)'
                },
                {
                    label: 'CBD %',
                    data: [0.1, 0.3, 18, 0.1, 0.2],
                    backgroundColor: 'rgba(74, 103, 65, 0.7)'
                },
                {
                    label: 'CBN %',
                    data: [0.2, 0.1, 0.3, 0.1, 0.3],
                    backgroundColor: 'rgba(205, 155, 74, 0.7)'
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Perfiles de Cannabinoides por Cepa'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Porcentaje (%)'
                    }
                }
            }
        }
    });
}

function initTerpenesChart() {
    const terpenesCtx = document.getElementById('terpenes-chart');
    if (!terpenesCtx) return;
    
    new Chart(terpenesCtx.getContext('2d'), {
        type: 'polarArea',
        data: {
            labels: ['Limoneno', 'Mirceno', 'Pineno', 'Linalool', 'Cariofileno', 'Terpinoleno'],
            datasets: [{
                data: [12, 19, 8, 15, 10, 5],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(74, 103, 65, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Terpenos en Cepas Populares'
                }
            }
        }
    });
}

// Initialize interactive elements
export function initializeInteractiveElements() {
    // Mobile menu toggle
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.querySelector('nav.hidden');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('w-full');
            mobileMenu.classList.toggle('bg-dark');
            mobileMenu.classList.toggle('p-4');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-dark', 'p-4');
                }
            }
        });
    });
}

window.initializeWorldMap = initializeWorldMap;
window.initializeCharts = initializeCharts;
