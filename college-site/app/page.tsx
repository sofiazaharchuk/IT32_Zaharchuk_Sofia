import Link from "next/link";

// Головна сторінка (маршрут "/")
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Ласкаво просимо до коледжу «Прогрес»</h1>
        <p>
          Ми готуємо сучасних фахівців у сфері інформаційних технологій та цифрового
          дизайну. Обирайте спеціальність і починайте свій шлях у професію.
        </p>
        <Link href="/specialties" className="btn btn-light">
          Переглянути спеціальності
        </Link>
      </section>

      <section className="grid">
        <article className="card">
          <h3>💻 Практичне навчання</h3>
          <p>Понад половину часу студенти працюють над реальними проєктами.</p>
        </article>
        <article className="card">
          <h3>👩‍🏫 Досвідчені викладачі</h3>
          <p>Заняття проводять практики з IT-компаній та студій дизайну.</p>
        </article>
        <article className="card">
          <h3>🚀 Допомога з працевлаштуванням</h3>
          <p>Партнерські стажування та консультації з кар'єри для випускників.</p>
        </article>
      </section>
    </>
  );
}
