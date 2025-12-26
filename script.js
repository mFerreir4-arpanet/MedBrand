/**
 * ============================================
 * SISTEMA DE TROCA DE PALETAS DE CORES MÉDICAS
 * ============================================
 * Este script controla a troca dinâmica de paletas de cores
 * aplicando CSS Variables em tempo real
 */

// Definição das paletas de cores médicas
const palettes = {
    'azul-medico': {
        name: 'Azul Médico Premium',
        primary: '#0A2540',
        secondary: '#E6F0FA',
        accent: '#0A2540',
        backgroundLight: '#F5F7FA',
        textPrimary: '#0A2540',
        textSecondary: '#334155',
        textLight: '#64748B',
        surface: '#FFFFFF',
        surfaceHover: '#E6F0FA',
        borderColor: '#E2E8F0',
        goldColor: '#C9A24D'
    },
    'verde-saude': {
        name: 'Verde Saúde Moderna',
        primary: '#0F3D2E',
        secondary: '#E8F5F0',
        accent: '#0F3D2E',
        backgroundLight: '#F4F6F5',
        textPrimary: '#0F3D2E',
        textSecondary: '#065F46',
        textLight: '#047857',
        surface: '#FFFFFF',
        surfaceHover: '#E8F5F0',
        borderColor: '#A7F3D0',
        goldColor: '#C9A24D'
    },
    'cinza-elegante': {
        name: 'Cinza Elegante Profissional',
        primary: '#2B2E34',
        secondary: '#EDEDED',
        accent: '#3A7CA5',
        backgroundLight: '#EDEDED',
        textPrimary: '#2B2E34',
        textSecondary: '#475569',
        textLight: '#64748B',
        surface: '#FFFFFF',
        surfaceHover: '#F1F5F9',
        borderColor: '#E2E8F0',
        goldColor: '#C9A24D'
    },
    'azul-dourado': {
        name: 'Azul + Dourado Sofisticado',
        primary: '#0B1F36',
        secondary: '#F2F2F2',
        accent: '#C9A24D',
        backgroundLight: '#F2F2F2',
        textPrimary: '#0B1F36',
        textSecondary: '#334155',
        textLight: '#64748B',
        surface: '#FFFFFF',
        surfaceHover: '#F8F8F8',
        borderColor: '#E2E8F0',
        goldColor: '#C9A24D'
    },
    'roxo-clinico': {
        name: 'Roxo Clínico Contemporâneo',
        primary: '#4A148C',
        secondary: '#F3E5F5',
        accent: '#7B1FA2',
        backgroundLight: '#F8F5F9',
        textPrimary: '#4A148C',
        textSecondary: '#6A1B9A',
        textLight: '#8E24AA',
        surface: '#FFFFFF',
        surfaceHover: '#F3E5F5',
        borderColor: '#E1BEE7',
        goldColor: '#C9A24D'
    },
    'bege-verde-oliva': {
        name: 'Bege + Verde Oliva Natural',
        primary: '#556B2F',
        secondary: '#F5F5DC',
        accent: '#6B8E23',
        backgroundLight: '#FAF9F6',
        textPrimary: '#556B2F',
        textSecondary: '#6B8E23',
        textLight: '#8B9A5B',
        surface: '#FFFFFF',
        surfaceHover: '#F5F5DC',
        borderColor: '#D4D4AA',
        goldColor: '#C9A24D'
    },
    'azul-claro-cinza': {
        name: 'Azul Claro + Cinza Neutro',
        primary: '#4A90E2',
        secondary: '#F5F7FA',
        accent: '#5BA3F5',
        backgroundLight: '#F8F9FA',
        textPrimary: '#2C3E50',
        textSecondary: '#4A90E2',
        textLight: '#7F8C8D',
        surface: '#FFFFFF',
        surfaceHover: '#F5F7FA',
        borderColor: '#E1E8ED',
        goldColor: '#C9A24D'
    },
    'terracota-branco': {
        name: 'Terracota + Branco Clínico',
        primary: '#C85A19',
        secondary: '#FFF8F5',
        accent: '#E67E22',
        backgroundLight: '#FDF5F0',
        textPrimary: '#8B4513',
        textSecondary: '#C85A19',
        textLight: '#A0522D',
        surface: '#FFFFFF',
        surfaceHover: '#FFF8F5',
        borderColor: '#F4D4C1',
        goldColor: '#C9A24D'
    },
    'azul-petroleo': {
        name: 'Azul Petróleo Moderno',
        primary: '#1B4D3E',
        secondary: '#E8F4F1',
        accent: '#2D7A5F',
        backgroundLight: '#F0F7F5',
        textPrimary: '#1B4D3E',
        textSecondary: '#2D7A5F',
        textLight: '#4A7C6A',
        surface: '#FFFFFF',
        surfaceHover: '#E8F4F1',
        borderColor: '#B8D4C8',
        goldColor: '#C9A24D'
    },
    'branco-cinza-minimal': {
        name: 'Branco + Cinza Minimal',
        primary: '#2C2C2C',
        secondary: '#F8F8F8',
        accent: '#4A4A4A',
        backgroundLight: '#FAFAFA',
        textPrimary: '#2C2C2C',
        textSecondary: '#4A4A4A',
        textLight: '#6B6B6B',
        surface: '#FFFFFF',
        surfaceHover: '#F8F8F8',
        borderColor: '#E0E0E0',
        goldColor: '#C9A24D'
    }
};

/**
 * Aplica uma paleta de cores ao site
 * @param {string} paletteKey - Chave da paleta
 */
function applyPalette(paletteKey) {
    const palette = palettes[paletteKey];
    
    if (!palette) {
        console.error('Paleta não encontrada:', paletteKey);
        return;
    }

    // Obtém o elemento root para aplicar as variáveis CSS
    const root = document.documentElement;

    // Aplica todas as variáveis CSS da paleta selecionada
    root.style.setProperty('--primary-color', palette.primary);
    root.style.setProperty('--secondary-color', palette.secondary);
    root.style.setProperty('--accent-color', palette.accent);
    root.style.setProperty('--background-light', palette.backgroundLight);
    root.style.setProperty('--text-primary', palette.textPrimary);
    root.style.setProperty('--text-secondary', palette.textSecondary);
    root.style.setProperty('--text-light', palette.textLight);
    root.style.setProperty('--surface', palette.surface);
    root.style.setProperty('--surface-hover', palette.surfaceHover);
    root.style.setProperty('--border-color', palette.borderColor);
    root.style.setProperty('--gold-color', palette.goldColor);
    
    // Atualiza o overlay do hero com a cor primária
    updateHeroOverlay(palette.primary);

    // Salva a paleta selecionada no localStorage
    localStorage.setItem('selectedPalette', paletteKey);

    // Adiciona feedback visual na paleta selecionada
    updateActivePalette(paletteKey);
}

/**
 * Atualiza o overlay do hero com a cor primária
 * @param {string} hexColor - Cor em formato hexadecimal
 */
function updateHeroOverlay(hexColor) {
    const heroOverlay = document.querySelector('.hero-overlay');
    const heroElement = document.querySelector('.hero');
    
    if (heroOverlay && heroElement) {
        // Converte hex para rgba para criar overlay
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        const overlayGradient = `linear-gradient(247deg, rgba(${r}, ${g}, ${b}, 0.1) 0%, rgba(${r}, ${g}, ${b}, 0.88) 75%)`;
        heroOverlay.style.background = overlayGradient;
        
        // Atualiza também o ::before do hero
        heroElement.style.setProperty('--hero-overlay', overlayGradient);
    }
}

/**
 * Atualiza o estado visual da paleta ativa
 * @param {string} activeKey - Chave da paleta ativa
 */
function updateActivePalette(activeKey) {
    // Remove a classe 'active' de todas as paletas
    document.querySelectorAll('.palette-card').forEach(card => {
        card.classList.remove('active');
    });

    // Adiciona a classe 'active' na paleta selecionada
    const activeCard = document.querySelector(`[data-palette="${activeKey}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

/**
 * Inicializa o sistema de paletas
 */
function initPaletteSystem() {
    // Adiciona event listeners aos botões de paleta
    document.querySelectorAll('.btn-palette').forEach(button => {
        button.addEventListener('click', function() {
            const paletteCard = this.closest('.palette-card');
            const paletteKey = paletteCard.getAttribute('data-palette');
            
            if (paletteKey) {
                applyPalette(paletteKey);
                
                // Scroll suave para o topo para melhor visualização
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carrega a paleta salva ou aplica a padrão (azul-medico)
    const savedPalette = localStorage.getItem('selectedPalette');
    if (savedPalette && palettes[savedPalette]) {
        applyPalette(savedPalette);
    } else {
        applyPalette('azul-medico'); // Paleta padrão
    }
}

/**
 * ============================================
 * MENU MOBILE
 * ============================================
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Anima o ícone do menu
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Fecha o menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

/**
 * ============================================
 * SCROLL SUAVE E HEADER
 * ============================================
 */
function initScrollEffects() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Adiciona classe 'scrolled' ao header
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * ============================================
 * FORMULÁRIO DE CONTATO
 * ============================================
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula envio do formulário
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Feedback visual
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simula delay de envio
            setTimeout(() => {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

/**
 * ============================================
 * ANIMAÇÕES DE SCROLL REVEAL (DESATIVADAS)
 * ============================================
 */
function initScrollReveal() {
    // Função desativada - animações removidas para melhor performance
    // e experiência do usuário
    console.log('✨ Scroll reveal desativado para melhor experiência');
}

/**
 * ============================================
 * EFEITO PARALLAX NO HERO (SIMPLIFICADO)
 * ============================================ */
function initParallaxHero() {
    // Parallax desativado para evitar problemas de performance
    console.log('✨ Parallax desativado');
}

/**
 * ============================================
 * SMOOTH SCROLL APRIMORADO
 * ============================================
 */
function initSmoothScroll() {
    // Adiciona smooth scroll para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * ============================================
 * CARROSSEL
 * ============================================
 */
function initCarousel() {
    const carouselSections = document.querySelectorAll('.carousel-section');
    
    carouselSections.forEach((section, sectionIndex) => {
        const wrapper = section.querySelector('.carousel-wrapper');
        const slides = section.querySelectorAll('.carousel-slide');
        const prevBtn = section.querySelector('.carousel-prev');
        const nextBtn = section.querySelector('.carousel-next');
        const dots = section.querySelectorAll('.dot');
        
        let currentSlide = 0;
        let autoPlayInterval;
        
        // Função para mostrar slide específico
        function showSlide(index) {
            // Remove active de todos os slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Adiciona active no slide atual
            if (slides[index]) {
                slides[index].classList.add('active');
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
            
            currentSlide = index;
        }
        
        // Função para próximo slide
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        // Função para slide anterior
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }
        
        // Event listeners para botões
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Event listeners para dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Auto-play (muda a cada 5 segundos)
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Pausa auto-play ao passar o mouse
        section.addEventListener('mouseenter', stopAutoPlay);
        section.addEventListener('mouseleave', startAutoPlay);
        
        // Inicia auto-play
        startAutoPlay();
    });
}

/**
 * ============================================
 * INICIALIZAÇÃO
 * ============================================
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todos os sistemas
    initPaletteSystem();
    initMobileMenu();
    initScrollEffects();
    initContactForm();
    initSmoothScroll();
    initCarousel();

    console.log('✅ Sistema médico inicializado com sucesso!');
    console.log('🎨 Paletas disponíveis:', Object.keys(palettes).join(', '));
});
