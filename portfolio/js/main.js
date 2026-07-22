// JavaScript source code

// header 
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
      <nav class="header">
        <div class="container">
          <div class="logo">
            <i class="fas fa-certificate"></i> Portfolio
          </div>
          <div class="nav-links">
            <a href="#about">Обо мне</a>
            <a href="#skills">Навыки</a>
            <a href="#projects">Проекты</a>
            <a href="#testimonials">Отзывы</a>
            <a href="#footer">Контакты</a>
          </div>
        </div>
      </nav>
    `;
    }

    // footer 
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
      <div class="footer">
        <div class="container">
          <div class="copy">
            <i class="fas fa-copyright"></i> 2026 · Портфолио верстальщика
          </div>
          <div>
            <a href="https://www.fl.ru/users/blackshadow1609/portfolio/" class="fl-link"><i class="fas fa-briefcase"></i> Профиль на Fl.ru</a>
          </div>
          <div class="social">
            
            <a href="https://github.com/blackshadow1609/Portfolio" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://vk.ru/of_chaos" aria-label="Вконтакте"><i class="fab fa-vk"></i></a>
          </div>
        </div>
      </div>
    `;
    }
});
