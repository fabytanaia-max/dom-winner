/* global document, window */

const WHATSAPP_NUMBER = '5511967969322';

// ⚠️ Atualize a data abaixo pro deadline real do drop atual
const DROP_END_DATE = new Date('2026-06-15T23:59:59-03:00');

// ============================================================
// CONTENT
// ============================================================
const content = {
  categories: ['Todos', 'Jaquetas', 'Bonés', 'Meias', 'Lançamentos'],

  products: [
    {
      id: 'casaco-winner',
      category: 'Jaquetas',
      title: 'Jaqueta Winner Black',
      summary: 'Conforto térmico com visual premium para o dia a dia.',
      description:
        'Jaqueta com foco em conforto, presença e autoestima. Ideal para quem quer uma peça versátil com identidade forte. Tecido selecionado, acabamento premium, modelagem que veste em qualquer corpo.',
      price: 'R$ 299',
      oldPrice: 'R$ 379',
      stock: 12, // ⚠️ Atualize estoque real
      details: [
        'Tecido selecionado, acabamento premium',
        'Tamanhos P / M / G / GG sob consulta',
        'Envio em 3-5 dias úteis para todo o Brasil',
        'Pagamento: PIX, cartão até 6x sem juros'
      ],
      combine: ['Boné Winner Black', 'Meia Winner Black'],
      media: [
        { type: 'image', src: 'assets/produto-casaco.webp', alt: 'Jaqueta Dom Winner - visão do produto' },
        { type: 'image', src: 'assets/modelo-homem-casaco.webp', alt: 'Modelo masculino usando a jaqueta Dom Winner' },
        { type: 'image', src: 'assets/modelo-mulher-casaco.webp', alt: 'Modelo feminina usando a jaqueta Dom Winner' },
      ],
    },
    {
      id: 'bone-winner',
      category: 'Bonés',
      title: 'Boné Winner Black',
      summary: 'Estilo urbano com acabamento premium e assinatura da marca.',
      description:
        'Boné preto com logo em destaque para completar o visual com atitude. Modelo pensado para uso diário e combinações versáteis.',
      price: 'R$ 89',
      oldPrice: null,
      stock: 24,
      details: [
        'Tecido firme com bordado de qualidade',
        'Ajuste traseiro regulável',
        'Tamanho único',
        'Envio em 3-5 dias úteis'
      ],
      combine: ['Jaqueta Winner Black', 'Meia Winner White'],
      media: [
        { type: 'image', src: 'assets/produto-bone.webp', alt: 'Boné Dom Winner - visão do produto' },
        { type: 'image', src: 'assets/modelo-homem-bone.webp', alt: 'Modelo masculino usando o boné Dom Winner' },
        { type: 'image', src: 'assets/modelo-mulher-bone.webp', alt: 'Modelo feminina usando o boné Dom Winner' },
      ],
    },
    {
      id: 'meia-winner-branca',
      category: 'Meias',
      title: 'Meia Winner White',
      summary: 'Visual clean com identidade forte para completar o fit premium.',
      description:
        'Meia branca Dom Winner com proposta streetwear para elevar o visual com contraste, conforto e assinatura da marca.',
      price: 'R$ 39',
      oldPrice: null,
      stock: 30,
      details: [
        'Algodão de alta gramatura, conforto duradouro',
        'Tamanho 39-43 (uni-tamanho)',
        'Envio em 3-5 dias úteis'
      ],
      combine: ['Jaqueta Winner Black', 'Boné Winner Black'],
      media: [
        { type: 'image', src: 'assets/produto-meia-branca.webp', alt: 'Meia branca Dom Winner - visão do produto' },
        { type: 'image', src: 'assets/modelo-meia-branca.webp', alt: 'Modelo usando a meia branca Dom Winner' },
      ],
    },
    {
      id: 'meia-winner-preta',
      category: 'Meias',
      title: 'Meia Winner Black',
      summary: 'Base essencial para um look urbano com acabamento premium.',
      description:
        'Meia preta Dom Winner desenvolvida para combinar com peças da marca e reforçar um estilo seguro no dia a dia.',
      price: 'R$ 39',
      oldPrice: null,
      stock: 30,
      details: [
        'Algodão de alta gramatura, conforto duradouro',
        'Tamanho 39-43 (uni-tamanho)',
        'Envio em 3-5 dias úteis'
      ],
      combine: ['Jaqueta Winner Black', 'Boné Winner Black'],
      media: [
        { type: 'image', src: 'assets/produto-meia-preta.webp', alt: 'Meia preta Dom Winner - visão do produto' },
        { type: 'image', src: 'assets/modelo-meia-preta.webp', alt: 'Modelo usando a meia preta Dom Winner' },
      ],
    },
    {
      id: 'relogio-winner',
      category: 'Lançamentos',
      title: 'Relógio Winner Black',
      summary: 'Em breve: acessório premium para completar o visual.',
      description:
        'Relógio Dom Winner em desenvolvimento com identidade urbana e acabamento elegante para elevar o estilo no dia a dia.',
      price: 'Em breve',
      oldPrice: null,
      stock: 0,
      details: ['Em desenvolvimento', 'Lista de espera no WhatsApp', 'Lançamento previsto para 2026'],
      combine: ['Jaqueta Winner Black', 'Boné Winner Black'],
      comingSoon: true,
      media: [
        { type: 'image', src: 'assets/produto-relogio.webp', alt: 'Relógio Dom Winner - visão do produto' },
      ],
    },
  ],

  // Hormozi value stack — combos com desconto real
  combos: [
    {
      id: 'kit-essencial',
      title: 'Kit Essencial',
      tagline: 'Boné + Meia: comece sem errar',
      items: [
        { name: 'Boné Winner Black', price: 89 },
        { name: 'Meia Winner Black', price: 39 },
      ],
      bundlePrice: 119,
      featured: false,
      ctaMessage: 'Olá%2C%20quero%20o%20Kit%20Essencial%20%28Boné%20%2B%20Meia%29%20da%20Dom%20Winner.',
    },
    {
      id: 'kit-vencedor',
      title: 'Kit Vencedor',
      tagline: 'Jaqueta + Boné + Meia: o uniforme completo',
      items: [
        { name: 'Jaqueta Winner Black', price: 299 },
        { name: 'Boné Winner Black', price: 89 },
        { name: 'Meia Winner Black', price: 39 },
      ],
      bundlePrice: 379,
      featured: true,
      ctaMessage: 'Olá%2C%20quero%20o%20Kit%20Vencedor%20%28Jaqueta%20%2B%20Boné%20%2B%20Meia%29%20da%20Dom%20Winner.',
    },
    {
      id: 'kit-duplo',
      title: 'Kit Duo',
      tagline: 'Jaqueta + Boné: o combo clássico',
      items: [
        { name: 'Jaqueta Winner Black', price: 299 },
        { name: 'Boné Winner Black', price: 89 },
      ],
      bundlePrice: 339,
      featured: false,
      ctaMessage: 'Olá%2C%20quero%20o%20Kit%20Duo%20%28Jaqueta%20%2B%20Boné%29%20da%20Dom%20Winner.',
    },
  ],

  metrics: [
    { value: '200+', label: 'clientes Dom Winner' },
    { value: '4.8/5', label: 'média de satisfação' },
    { value: '7 dias', label: 'garantia de troca' },
    { value: 'Brasil', label: 'envio nacional' },
  ],

  benefits: [
    {
      title: 'Acabamento Premium',
      description: 'Tecidos selecionados e controle de qualidade em cada detalhe — sem corte de canto.',
    },
    {
      title: 'Identidade Forte',
      description: 'Visual reconhecível, sem ser óbvio. Streetwear que conversa com você.',
    },
    {
      title: 'Conforto + Presença',
      description: 'Peças feitas pra vestir bem. Você esquece que tá usando, mas todo mundo nota.',
    },
    {
      title: 'Atendimento Direto',
      description: 'WhatsApp do fundador, não chatbot. Tira dúvidas em minutos, não em horas.',
    },
  ],

  trustPoints: [
    { title: 'Envio Brasil', text: '3-5 dias úteis pra todo o país' },
    { title: 'Pagamento seguro', text: 'PIX e cartão até 6x sem juros' },
    { title: '7 dias garantia', text: 'Troca grátis sem perguntas' },
    { title: 'Atendimento humano', text: 'Direto no WhatsApp do fundador' },
  ],

  drop: {
    main: {
      title: 'Drop Black Confidence',
      text: 'Lote especial com peças premium em estoque limitado. Quando termina o tempo OU vende, sai do ar até o próximo drop.',
    },
    side: {
      title: 'Próximo drop em planejamento',
      text: 'Entre na lista VIP no WhatsApp pra ter acesso 24h antes do público.',
    },
  },

  // ⚠️ SUBSTITUA estes depoimentos por screenshots reais de WhatsApp dos clientes (com autorização)
  testimonials: [
    {
      title: '"Vesti e mudou meu jeito de andar"',
      description:
        'Comprei a jaqueta achando que era só roupa. Não é. Veste e sente diferente. — Lucas R., São Paulo',
    },
    {
      title: '"Atendimento que eu não vejo em loja grande"',
      description:
        'Tinha dúvida do tamanho, mandaram fotos do meu corpo no manequim. Acertei de primeira. — Bruna M., Recife',
    },
    {
      title: '"Marca pequena, qualidade gigante"',
      description:
        'Acabamento melhor que muita marca de R$ 800. Vou voltar. — André F., Belo Horizonte',
    },
  ],
};

// ============================================================
// HELPERS
// ============================================================
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function formatPrice(value) {
  if (typeof value === 'number') {
    return `R$ ${value}`;
  }
  return value;
}

function getOriginalTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function getDiscount(combo) {
  const original = getOriginalTotal(combo.items);
  const savings = original - combo.bundlePrice;
  const percent = Math.round((savings / original) * 100);
  return { original, savings, percent };
}

let activeCategory = 'Todos';

// ============================================================
// COUNTDOWN
// ============================================================
function updateCountdown() {
  const now = new Date();
  const diff = DROP_END_DATE - now;

  const els = [document.getElementById('countdown'), document.getElementById('countdown-inline')];

  if (diff <= 0) {
    els.forEach((el) => { if (el) el.textContent = 'Drop encerrado'; });
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const text = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  els.forEach((el) => { if (el) el.textContent = text; });
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================
function renderCategoryNav() {
  const container = document.getElementById('category-nav');
  if (!container) return;
  container.innerHTML = content.categories
    .map((cat) => `<button class="cat-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`)
    .join('');
  container.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-cat') || 'Todos';
      renderCategoryNav();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  if (activeCategory === 'Todos') return content.products;
  return content.products.filter((item) => item.category === activeCategory);
}

function getStockBadge(stock, comingSoon) {
  if (comingSoon) return '<span class="product-badge product-badge--soon">Em Breve</span>';
  if (stock <= 0) return '<span class="product-badge product-badge--out">Esgotado</span>';
  if (stock <= 5) return `<span class="product-badge product-badge--low">Apenas ${stock} restantes</span>`;
  return '';
}

function renderProducts() {
  const container = document.getElementById('products');
  if (!container) return;
  const list = getFilteredProducts();
  container.innerHTML = list
    .map((item) => `
      <article class="product-card" data-product-id="${item.id}">
        ${getStockBadge(item.stock, item.comingSoon)}
        <img src="${item.media[0].src}" alt="${item.media[0].alt}" loading="lazy" decoding="async" />
        <div class="product-info">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="product-price">
            ${item.oldPrice ? `<span class="price-old">${item.oldPrice}</span>` : ''}
            <span class="price-new">${formatPrice(item.price)}</span>
          </div>
        </div>
      </article>
    `)
    .join('');
  container.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.getAttribute('data-product-id');
      openProductModal(productId);
    });
  });
}

function renderCombos() {
  const container = document.getElementById('combos');
  if (!container) return;
  container.innerHTML = content.combos
    .map((combo) => {
      const { original, savings, percent } = getDiscount(combo);
      const itemsHtml = combo.items.map((i) => `<li>${i.name} — R$ ${i.price}</li>`).join('');
      return `
        <article class="combo-card ${combo.featured ? 'combo-card--featured' : ''}">
          ${combo.featured ? '<span class="combo-badge">Mais escolhido</span>' : ''}
          <h3>${combo.title}</h3>
          <p class="combo-tagline">${combo.tagline}</p>
          <ul class="combo-items">${itemsHtml}</ul>
          <div class="combo-price-block">
            <span class="combo-original">de R$ ${original}</span>
            <span class="combo-bundle">por R$ ${combo.bundlePrice}</span>
            <span class="combo-savings">você economiza R$ ${savings} (${percent}%)</span>
          </div>
          <a class="btn btn-light combo-cta" href="${buildWhatsAppUrl(combo.ctaMessage)}" target="_blank" rel="noopener">
            Pedir ${combo.title} no WhatsApp
          </a>
        </article>
      `;
    })
    .join('');
}

function renderMetrics() {
  const container = document.getElementById('metrics');
  if (!container) return;
  container.innerHTML = content.metrics
    .map((item) => `<article class="metric"><strong>${item.value}</strong><span>${item.label}</span></article>`)
    .join('');
}

function renderBenefits() {
  const container = document.getElementById('benefits');
  if (!container) return;
  container.innerHTML = content.benefits
    .map((item) => `<article class="bullet"><h3>${item.title}</h3><p>${item.description}</p></article>`)
    .join('');
}

function renderTrustPoints() {
  const container = document.getElementById('trust-points');
  if (!container) return;
  container.innerHTML = content.trustPoints
    .map((item) => `<article class="trust-item"><strong>${item.title}</strong><span>${item.text}</span></article>`)
    .join('');
}

function renderWeeklyDrop() {
  const container = document.getElementById('weekly-drop');
  if (!container) return;
  container.innerHTML = `
    <article class="drop-main">
      <h3>${content.drop.main.title}</h3>
      <p>${content.drop.main.text}</p>
      <a class="btn btn-light btn-sm" href="${buildWhatsAppUrl('Olá%2C%20quero%20saber%20o%20que%20ainda%20tem%20no%20Drop%20Black%20Confidence.')}" target="_blank" rel="noopener">
        Ver o que ainda tem no drop
      </a>
    </article>
    <article class="drop-side">
      <h3>${content.drop.side.title}</h3>
      <p>${content.drop.side.text}</p>
      <a class="btn btn-ghost btn-sm" href="${buildWhatsAppUrl('Olá%2C%20quero%20entrar%20na%20lista%20VIP%20do%20próximo%20drop%20Dom%20Winner.')}" target="_blank" rel="noopener">
        Entrar na lista VIP
      </a>
    </article>
  `;
}

function renderTestimonials() {
  const container = document.getElementById('testimonials');
  if (!container) return;
  container.innerHTML = content.testimonials
    .map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.description}</p></article>`)
    .join('');
}

function renderMarquee() {
  const container = document.getElementById('marquee');
  if (!container) return;
  const base = 'DOM WINNER · STREETWEAR PREMIUM · A MARCA DOS VENCEDORES · ';
  container.textContent = base.repeat(12);
}

// ============================================================
// MODAL
// ============================================================
function renderModalMainMedia(item) {
  if (!item) return '';
  if (item.type === 'video') {
    return `<video controls src="${item.src}" aria-label="${item.alt || 'Video do produto'}"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt || 'Imagem do produto'}" loading="lazy" decoding="async" />`;
}

function renderModalGallery(mediaItems) {
  const media = document.getElementById('modal-media');
  if (!media || !Array.isArray(mediaItems) || mediaItems.length === 0) return;
  let activeIndex = 0;
  const render = () => {
    media.innerHTML = `
      <div class="modal-viewer" id="modal-viewer">
        ${renderModalMainMedia(mediaItems[activeIndex])}
      </div>
      <div class="modal-thumbs" id="modal-thumbs">
        ${mediaItems.map((item, index) => {
          const thumbInner = item.type === 'video'
            ? `<video muted playsinline src="${item.src}" aria-hidden="true"></video>`
            : `<img src="${item.src}" alt="${item.alt || 'Miniatura'}" loading="lazy" />`;
          return `<button type="button" class="thumb-btn ${index === activeIndex ? 'active' : ''}" data-thumb-index="${index}" aria-label="Mídia ${index + 1}">${thumbInner}</button>`;
        }).join('')}
      </div>
    `;
    media.querySelectorAll('.thumb-btn').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const nextIndex = Number(thumb.getAttribute('data-thumb-index'));
        if (Number.isNaN(nextIndex)) return;
        activeIndex = nextIndex;
        render();
      });
    });
  };
  render();
}

function openProductModal(productId) {
  const product = content.products.find((item) => item.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');
  const category = document.getElementById('modal-category');
  const price = document.getElementById('modal-price');
  const stock = document.getElementById('modal-stock');
  const details = document.getElementById('modal-details');
  const combine = document.getElementById('modal-combine');
  const ctaBuy = document.getElementById('modal-cta-buy');
  const ctaInfo = document.getElementById('modal-cta-info');
  const ctaSize = document.getElementById('modal-cta-size');

  if (!modal || !title) return;

  title.textContent = product.title;
  if (category) category.textContent = product.category;
  description.textContent = product.description;

  if (price) {
    const oldHtml = product.oldPrice ? `<span class="price-old">${product.oldPrice}</span>` : '';
    price.innerHTML = `${oldHtml}<span class="price-new">${formatPrice(product.price)}</span>`;
  }

  if (stock) {
    if (product.comingSoon) {
      stock.textContent = '🕐 Em desenvolvimento — entre na lista de espera';
      stock.className = 'modal-stock modal-stock--soon';
    } else if (product.stock <= 0) {
      stock.textContent = '❌ Esgotado neste drop — fale com a gente para o próximo';
      stock.className = 'modal-stock modal-stock--out';
    } else if (product.stock <= 5) {
      stock.textContent = `⚡ Apenas ${product.stock} unidades restantes neste drop`;
      stock.className = 'modal-stock modal-stock--low';
    } else {
      stock.textContent = `✓ ${product.stock} unidades disponíveis · envio em 3-5 dias úteis`;
      stock.className = 'modal-stock';
    }
  }

  renderModalGallery(product.media);

  details.innerHTML = product.details.map((item) => `<li>${item}</li>`).join('');
  combine.innerHTML = product.combine.map((item) => `<div class="combine-item">${item}</div>`).join('');

  // CTAs variadas (Cardone)
  const titleEnc = encodeURIComponent(product.title);
  if (ctaBuy) {
    const buyMsg = product.comingSoon
      ? `Olá%2C%20quero%20entrar%20na%20lista%20de%20espera%20do%20${titleEnc}`
      : `Olá%2C%20quero%20pedir%20o%20${titleEnc}.%20Pode%20me%20mandar%20as%20formas%20de%20pagamento%3F`;
    ctaBuy.textContent = product.comingSoon ? 'Entrar na lista de espera' : 'Pedir no WhatsApp';
    ctaBuy.href = buildWhatsAppUrl(buyMsg);
  }
  if (ctaInfo) {
    ctaInfo.href = buildWhatsAppUrl(`Olá%2C%20pode%20me%20mandar%20mais%20fotos%20do%20${titleEnc}%3F`);
  }
  if (ctaSize) {
    ctaSize.href = buildWhatsAppUrl(`Olá%2C%20pode%20me%20mandar%20a%20tabela%20de%20tamanhos%20do%20${titleEnc}%3F`);
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function setupModalClose() {
  const modal = document.getElementById('product-modal');
  const closeButtons = [
    document.getElementById('modal-close'),
    document.getElementById('modal-close-secondary'),
  ].filter(Boolean);
  if (!modal || closeButtons.length === 0) return;
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

function setupCtaLink() {
  const links = [document.getElementById('cta-link'), document.getElementById('floating-cta')];
  const message = encodeURIComponent('Olá, quero conhecer os produtos da Dom Winner.');
  links.forEach((link) => {
    if (!link) return;
    link.href = buildWhatsAppUrl(message);
  });
}

function setYear() {
  const el = document.getElementById('year');
  if (!el) return;
  el.textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
renderCategoryNav();
renderProducts();
renderCombos();
renderMetrics();
renderBenefits();
renderTrustPoints();
renderWeeklyDrop();
renderTestimonials();
renderMarquee();
setupModalClose();
setupCtaLink();
setYear();

// Countdown updates every second
updateCountdown();
setInterval(updateCountdown, 1000);
