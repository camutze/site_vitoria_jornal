/* =====================================================
   ILHA SEM ESTADO? — interações (Vanilla JS)
   Edite os blocos de CONFIGURAÇÃO abaixo para trocar
   conteúdos sem mexer no resto do código.
   ===================================================== */

/* ---------------------- CONFIGURAÇÃO ---------------------- */

// Imagem padrão (troque por ./arquitetura/foto_1.jpg, ./galeria/foto_1.jpg etc. quando tiver as fotos)
const IMG = './foto_exempo.jpg';

// Vídeo de destaque (yt_01): cole o ID do YouTube. Ex.: "dQw4w9WgXcQ"
const YT_DESTAQUE = 'VIDEO_ID_01';

// Entrevistas (yt_02 ... yt_06): troque o ID de cada vídeo do YouTube
const MORADORES = [
  { yt: 'VIDEO_ID_02', titulo: 'Entrevista 01' },
  { yt: 'VIDEO_ID_03', titulo: 'Entrevista 02' },
  { yt: 'VIDEO_ID_04', titulo: 'Entrevista 03' },
  { yt: 'VIDEO_ID_05', titulo: 'Entrevista 04' },
  { yt: 'VIDEO_ID_06', titulo: 'Entrevista 05' }
];
const TEXTO_ENTREVISTA = [
  'Jéssica Ritta, sua mãe e sua avó compartilham histórias, memórias e experiências de vida na Ilha das Peças. Por meio das lembranças de três gerações de mulheres, a conversa percorre as transformações da comunidade, os desafios de viver em uma ilha e as mudanças que marcaram o cotidiano de seus moradores ao longo do tempo.',
  'A entrevista resgata a história familiar e a relação das entrevistadas com o lugar onde vivem. Da infância às experiências da vida adulta, passando pela formação de suas famílias e pela criação dos filhos, as três mulheres ajudam a compreender o papel dos vínculos familiares, da convivência comunitária e dos conhecimentos transmitidos entre gerações, que contribuem para manter viva a memória e a identidade caiçara.'
];

// Podcast: cole o ID do episódio do Spotify (a parte final da URL do episódio)
const PODCASTS = [
  { spotify: 'EPISODE_ID_01', titulo: 'A história antes do descobrimento' },
  { spotify: 'EPISODE_ID_02', titulo: 'Episódio 02' },
  { spotify: 'EPISODE_ID_03', titulo: 'Episódio 03' },
  { spotify: 'EPISODE_ID_04', titulo: 'Episódio 04' },
  { spotify: 'EPISODE_ID_05', titulo: 'Episódio 05' }
];
const TEXTO_PODCAST = 'Jéssica Ritta, sua mãe e sua avó compartilham histórias, memórias e experiências de vida na Ilha das Peças. Por meio das lembranças de três gerações de mulheres, a conversa percorre as transformações da comunidade.';

// Quantidade de fotos do carrossel e da galeria (n)
const CAROUSEL_COUNT = 6;
const GALERIA_COUNT = 9;
const LEGENDA_FOTO = 'Jéssica Ritta, sua mãe e sua avó compartilham histórias, memórias e experiências de vida na Ilha das Peças.';

// Linha do tempo (REVISE datas e textos com o conteúdo final do projeto)
const TIMELINE = [
  { ano: '7 a 3 mil anos atrás', titulo: 'Presença de sambaquis', texto: 'Os sambaquis registram a presença dos primeiros povos no litoral.' },
  { ano: '1800', titulo: 'Uso dos rios navegáveis', texto: 'Os rios passam a ser utilizados como vias de navegação e de acesso ao território.' },
  { ano: '1850 a 1930', titulo: 'Migração interna', texto: 'Famílias migram para a região da Ponta das Peças.' },
  { ano: '1880', titulo: 'Construção da 1ª igreja', texto: 'A primeira igreja marca a organização da vida comunitária.' },
  { ano: '1905', titulo: '1ª Festa de São Sebastião', texto: 'Realização da primeira festa religiosa da comunidade.' },
  { ano: '1930', titulo: 'Primeiro barco a motor', texto: 'A chegada do primeiro barco a motor transforma o deslocamento e a pesca.' },
  { ano: '1936', titulo: 'Campo de futebol', texto: 'Construção do campo de futebol, espaço de encontro da comunidade.' },
  { ano: '1948', titulo: 'Abertura do Canal do Varadouro', texto: 'O canal altera as rotas de navegação da região.' },
  { ano: '1970', titulo: 'Mudanças na pesca', texto: 'A atividade pesqueira passa por transformações importantes.' },
  { ano: '1980', titulo: 'Casas de veraneio', texto: 'Início da construção das casas de veraneio.' },
  { ano: '1982', titulo: 'Escola Municipal', texto: 'Oficialização da escola municipal da comunidade.' },
  { ano: '1985', titulo: 'Aparelhos telefônicos', texto: 'Instalação dos primeiros aparelhos telefônicos.' },
  { ano: '1989', titulo: 'Parque Nacional de Superagui', texto: 'Criação do Parque Nacional de Superagui, que preserva a Mata Atlântica e os modos de vida tradicionais.' },
  { ano: '1994', titulo: 'Chegada da energia elétrica', texto: 'A energia elétrica chega à comunidade; é criada a Associação de Moradores da Vila das Peças.' },
  { ano: '1997', titulo: 'Clube de Mulheres', texto: 'Criação do Clube de Mulheres da Vila das Peças.' },
  { ano: '2000', titulo: 'Casas de alvenaria', texto: 'Construção das novas casas de alvenaria.' },
  { ano: '2003', titulo: 'Novas atividades', texto: 'Início de novas atividades comunitárias e de turismo.' },
  { ano: '2007', titulo: 'Posto de Saúde', texto: 'Abertura do Posto de Saúde e chegada da internet via rádio.' },
  { ano: '2022', titulo: 'Comunidade de Vila das Peças', texto: 'Criação da Comunidade de Vila das Peças.' }
];

/* ---------------------- FUNÇÕES AUXILIARES ---------------------- */

const $ = (sel, root = document) => root.querySelector(sel);

/** Player do YouTube. Se o ID ainda for o de exemplo, mostra um espaço reservado. */
function youtubeEmbed(id, titulo = 'Vídeo') {
  if (!id || id.startsWith('VIDEO_ID')) {
    return `<div class="video-box">
      <img src="${IMG}" alt="" />
      <div class="video-placeholder">
        <span class="play-icon"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
        <span>Troque <b>${id || 'VIDEO_ID'}</b> pelo ID do YouTube em js/main.js</span>
      </div></div>`;
  }
  return `<div class="video-box"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${titulo}"
    loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
}

/** Player do Spotify. */
function spotifyEmbed(id, titulo = 'Episódio') {
  if (!id || id.startsWith('EPISODE_ID')) {
    return `<div class="video-box" style="aspect-ratio:auto;height:232px">
      <img src="${IMG}" alt="" />
      <div class="video-placeholder">
        <span class="play-icon"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
        <b>${titulo}</b>
        <span>Troque <b>${id || 'EPISODE_ID'}</b> pelo ID do episódio do Spotify em js/main.js</span>
      </div></div>`;
  }
  return `<iframe class="w-full rounded-2xl" style="border:0" height="232" loading="lazy" title="${titulo}"
    src="https://open.spotify.com/embed/episode/${id}" allow="encrypted-media; clipboard-write; fullscreen"></iframe>`;
}

/* ---------------------- MENU / CABEÇALHO ---------------------- */

const header = $('#header');
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');

function onScrollHeader() { header.classList.toggle('is-solid', window.scrollY > 60); }
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(open));
  header.classList.add('is-solid');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* ---------------------- LINHA DO TEMPO ---------------------- */

const track = $('#timelineTrack');
const panel = $('#timelinePanel');

function showTimeline(i) {
  track.querySelectorAll('.tl-item').forEach((el, idx) => el.classList.toggle('active', idx === i));
  const t = TIMELINE[i];
  panel.innerHTML = `<p class="text-sm font-bold uppercase tracking-widest text-amber-dark">${t.ano}</p>
    <h3 class="mt-1 text-xl font-bold text-forest">${t.titulo}</h3>
    <p class="mt-2 leading-relaxed text-ink/80">${t.texto}</p>`;
}

TIMELINE.forEach((t, i) => {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'tl-item';
  el.innerHTML = `<span class="tl-dot"></span><span class="tl-year">${t.ano}</span><span class="tl-title">${t.titulo}</span>`;
  el.addEventListener('click', () => {
    showTimeline(i);
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
  el.addEventListener('mouseenter', () => showTimeline(i));
  track.appendChild(el);
});
showTimeline(0);

$('#tlPrev').addEventListener('click', () => track.scrollBy({ left: -320, behavior: 'smooth' }));
$('#tlNext').addEventListener('click', () => track.scrollBy({ left: 320, behavior: 'smooth' }));

/* ---------------------- CARROSSEL ---------------------- */

const carousel = $('#carousel');
for (let x = 1; x <= CAROUSEL_COUNT; x++) {
  // Ideal: `./arquitetura/foto_${x}.jpg`
  carousel.insertAdjacentHTML('beforeend',
    `<div class="car-slide"><img src="${IMG}" alt="Arquitetura e cultura local — foto ${x}" class="aspect-[4/3] w-full object-cover" loading="lazy" /></div>`);
}

const slideStep = () => (carousel.firstElementChild?.getBoundingClientRect().width || 300) + 16;
const nextSlide = () => {
  const end = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
  end ? carousel.scrollTo({ left: 0, behavior: 'smooth' }) : carousel.scrollBy({ left: slideStep(), behavior: 'smooth' });
};
$('#carNext').addEventListener('click', nextSlide);
$('#carPrev').addEventListener('click', () => carousel.scrollBy({ left: -slideStep(), behavior: 'smooth' }));

// Autoplay suave (pausa quando o mouse está em cima)
let carTimer = setInterval(nextSlide, 4500);
carousel.addEventListener('mouseenter', () => clearInterval(carTimer));
carousel.addEventListener('mouseleave', () => { carTimer = setInterval(nextSlide, 4500); });

/* ---------------------- VÍDEO DE DESTAQUE + MORADORES + PODCAST ---------------------- */

$('#ytDestaque').innerHTML = youtubeEmbed(YT_DESTAQUE, 'Entrevista com professor e historiador');

const moradoresList = $('#moradoresList');
MORADORES.forEach((m, i) => {
  const reverse = i % 2 === 1 ? 'md:flex-row-reverse' : '';
  moradoresList.insertAdjacentHTML('beforeend', `
    <article class="reveal flex flex-col items-center gap-8 md:flex-row ${reverse}">
      <div class="w-full md:w-1/2">${youtubeEmbed(m.yt, m.titulo)}</div>
      <div class="w-full space-y-4 text-justify leading-relaxed text-ink/85 md:w-1/2">
        <h3 class="text-sm font-bold uppercase tracking-widest text-amber-dark">${m.titulo}</h3>
        <p>${TEXTO_ENTREVISTA[0]}</p>
        <p>${TEXTO_ENTREVISTA[1]}</p>
      </div>
    </article>`);
});

const podcastList = $('#podcastList');
PODCASTS.forEach(p => {
  podcastList.insertAdjacentHTML('beforeend', `
    <article class="reveal rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      ${spotifyEmbed(p.spotify, p.titulo)}
      <p class="mt-4 text-sm leading-relaxed text-white/80">${TEXTO_PODCAST}</p>
    </article>`);
});

/* ---------------------- GALERIA + LIGHTBOX ---------------------- */

const grid = $('#galeriaGrid');
for (let x = 1; x <= GALERIA_COUNT; x++) {
  // Ideal: `./galeria/foto_${x}.jpg`
  grid.insertAdjacentHTML('beforeend', `
    <figure class="gal-card reveal">
      <button type="button" data-src="${IMG}" data-cap="${LEGENDA_FOTO}" aria-label="Ampliar foto ${x}">
        <img src="${IMG}" alt="Galeria — foto ${x}" loading="lazy" />
      </button>
      <figcaption class="p-4 text-sm leading-relaxed text-ink/80">${LEGENDA_FOTO}</figcaption>
    </figure>`);
}

const lb = $('#lightbox');
const openLb = (src, cap) => {
  $('#lbImg').src = src; $('#lbCap').textContent = cap;
  lb.classList.remove('hidden'); lb.classList.add('flex');
  document.body.style.overflow = 'hidden';
};
const closeLb = () => {
  lb.classList.add('hidden'); lb.classList.remove('flex');
  document.body.style.overflow = '';
};
grid.addEventListener('click', e => {
  const btn = e.target.closest('button[data-src]');
  if (btn) openLb(btn.dataset.src, btn.dataset.cap);
});
$('#lbClose').addEventListener('click', closeLb);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

/* ---------------------- ANIMAÇÕES DE ENTRADA (scroll) ---------------------- */

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .reveal-left').forEach(el => io.observe(el));

/* ---------------------- TEXTO "ESCRITA JORNALÍSTICA" ---------------------- */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-typewriter]').forEach(el => {
  const full = el.textContent.trim().replace(/\s+/g, ' ');
  el.setAttribute('aria-label', full);
  if (reduceMotion) { el.textContent = full; return; }
  el.textContent = '';
  const typeIO = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    typeIO.disconnect();
    el.classList.add('typing');
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = full.slice(0, ++i);
      if (i >= full.length) { clearInterval(timer); el.classList.remove('typing'); }
    }, 14);
  }, { threshold: 0.4 });
  typeIO.observe(el);
});

/* ---------------------- VÍDEO CENTRALIZA AO ROLAR ---------------------- */

const pv = $('.parallax-video');
let ticking = false;
function updateParallax() {
  const r = pv.getBoundingClientRect();
  const vh = window.innerHeight;
  // progresso 0 → 1 enquanto a seção sobe até o centro da tela
  const p = Math.min(1, Math.max(0, 1 - (r.top + r.height / 2 - vh / 2) / vh));
  pv.style.transform = reduceMotion ? 'none' : `translateY(${(1 - p) * 50}px) scale(${0.9 + p * 0.1})`;
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; } }, { passive: true });
updateParallax();