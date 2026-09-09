import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  Gamepad2,
  Menu,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from 'lucide-react'

const searchPhrases = [
  'азино777 официальный',
  'азино мобайл',
  'азино777 официальный сайт',
  'азино',
  'азино777',
  'азино 777',
  'azino777 официальный',
  'azino777',
  'azino 777',
  'азино777 казино',
  'азино казино',
]

const benefits = [
  {
    icon: Gamepad2,
    number: '01',
    title: 'Игровой каталог',
    text: 'Слоты, live-игры и популярные форматы собраны в одном интерфейсе без лишних переходов.',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Азино мобайл',
    text: 'Официальный сайт адаптирован под смартфоны: откройте страницу в браузере и играйте без установки.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Понятный доступ',
    text: 'Регистрация, вход и навигация по кабинету сделаны коротко и прозрачно на каждом экране.',
  },
]

const steps = [
  ['01', 'Откройте официальный сайт', 'Используйте актуальный адрес Azino777 и проверьте, что соединение защищено.'],
  ['02', 'Создайте аккаунт', 'Заполните форму регистрации, подтвердите данные и войдите в личный кабинет.'],
  ['03', 'Выберите способ', 'В разделе кассы доступны пополнение и вывод — условия зависят от региона и метода.'],
]

const faqs = [
  {
    question: 'Где найти Azino777 официальный сайт?',
    answer:
      'Используйте актуальный адрес из проверенного источника и убедитесь, что домен совпадает с официальным. Доступность сайта и отдельных функций может зависеть от страны.',
  },
  {
    question: 'Работает ли Azino777 на мобильном телефоне?',
    answer:
      'Да, версия Azino мобайл открывается в браузере смартфона. Отдельное приложение не требуется: интерфейс автоматически подстраивается под размер экрана.',
  },
  {
    question: 'Как пройти регистрацию в Azino777?',
    answer:
      'Нажмите кнопку регистрации, укажите запрашиваемые данные и подтвердите создание аккаунта. Перед началом ознакомьтесь с правилами платформы и требованиями к возрасту.',
  },
  {
    question: 'Как вывести деньги из казино Azino777?',
    answer:
      'Откройте раздел кассы в личном кабинете, выберите доступный метод и следуйте инструкции. Сроки и лимиты зависят от выбранного способа, верификации и региона.',
  },
]

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span>A</span>
      <span>7</span>
    </span>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Azino777 — на главную">
          <BrandMark />
          <span className="brand-name">azino<span>777</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#about">Обзор</a>
          <a href="#benefits">Возможности</a>
          <a href="#how-it-works">Как начать</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small header-cta" href="#registration">
          Перейти на сайт <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Открыть меню">
            <Menu size={21} aria-hidden="true" />
          </summary>
          <nav aria-label="Мобильная навигация">
            <a href="#about">Обзор</a>
            <a href="#benefits">Возможности</a>
            <a href="#how-it-works">Как начать</a>
            <a href="#faq">FAQ</a>
            <a className="button button-small" href="#registration">Перейти на сайт</a>
          </nav>
        </details>
      </div>
    </header>
  )
}

function MetricBoard() {
  return (
    <div className="metric-board" aria-label="Ключевые показатели страницы">
      <div className="board-header">
        <span>AZINO / ACCESS BOARD</span>
        <span className="board-status"><i /> онлайн</span>
      </div>
      <div className="board-row board-labels">
        <span>Показатель</span>
        <span>Текущее значение</span>
      </div>
      <div className="board-row">
        <span>Визиты</span>
        <strong>30 547</strong>
      </div>
      <div className="board-row">
        <span>Регистрации</span>
        <strong>28</strong>
      </div>
      <div className="board-row">
        <span>Конверсия в первый депозит</span>
        <strong>21,43%</strong>
      </div>
      <div className="board-row board-total">
        <span>Валюта</span>
        <strong>RUB <ArrowUpRight size={16} aria-hidden="true" /></strong>
      </div>
      <div className="board-footer">
        <span>Средний первый депозит</span>
        <strong>1 843,36 ₽</strong>
      </div>
    </div>
  )
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default function AzinoLandingPage() {
  return (
    <main id="top">
      <Header />
      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> официальный ориентир / 2026</div>
            <h1>Azino777 — официальный сайт без лишнего шума</h1>
            <p className="hero-lead">Азино777 казино в удобном формате: быстрый вход, азино мобайл для смартфона и понятная навигация от регистрации до кассы.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#registration">Открыть Azino777 <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="text-link" href="#about">Посмотреть обзор <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-note"><Check size={15} aria-hidden="true" /> 18+ · играйте ответственно · условия зависят от региона</div>
          </div>
          <MetricBoard />
        </div>
      </section>

      <section id="about" className="section-shell section-light">
        <div className="container intro-layout">
          <SectionIntro eyebrow="01 / Обзор" title="Ищете азино777 официальный сайт? Начните с ясной информации.">
            <p>Эта страница помогает быстро сориентироваться в возможностях Azino777: от мобильного доступа до регистрации и базовых действий в личном кабинете.</p>
          </SectionIntro>
          <div className="phrase-panel">
            <div className="phrase-panel-heading"><span>Поисковые формулировки</span><span>11 вариантов</span></div>
            <div className="phrase-list">
              {searchPhrases.map((phrase, index) => (
                <div className="phrase-row" key={phrase}>
                  <span className="phrase-index">{String(index + 1).padStart(2, '0')}</span>
                  <span>{phrase}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-shell section-ink">
        <div className="container">
          <SectionIntro eyebrow="02 / Возможности" title="Собрано для тех, кто ценит короткий путь до игры.">
            <p>Без обещаний гарантированного результата — только понятная структура, мобильный доступ и важные детали перед стартом.</p>
          </SectionIntro>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, number, title, text }) => (
              <article className="benefit-card" key={number}>
                <div className="benefit-card-top"><span className="card-number">{number}</span><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#registration" aria-label={`Подробнее: ${title}`}><ArrowUpRight size={18} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell section-light">
        <div className="container how-layout">
          <SectionIntro eyebrow="03 / Как начать" title="Регистрация Azino777 — три последовательных шага.">
            <p>Проверьте возрастные ограничения и правила в вашей стране, затем следуйте стандартному сценарию.</p>
          </SectionIntro>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <div className="step-row" key={number}>
                <span className="step-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Check className="step-check" size={19} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="registration-band">
        <div className="container registration-inner">
          <div><span className="eyebrow eyebrow-dark">готовы проверить?</span><h2>Azino777 официальный сайт — в одном клике от вашего экрана.</h2></div>
          <a className="button button-dark" href="#top">Перейти к Azino777 <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="faq" className="section-shell section-light faq-section">
        <div className="container faq-layout">
          <SectionIntro eyebrow="04 / FAQ" title="Ответы на частые вопросы про Azino777.">
            <p>Сохраните страницу, если хотите быстро вернуться к основным условиям доступа.</p>
          </SectionIntro>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="faq-item">
                <summary><span>{question}</span><CircleHelp size={20} aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><BrandMark /><span>azino<span>777</span></span></div>
          <p>Информационный обзор. Не является публичной офертой.</p>
          <span className="age-mark">18+</span>
        </div>
      </footer>
    </main>
  )
}
