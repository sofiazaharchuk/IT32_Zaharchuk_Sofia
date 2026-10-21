// Сторінка «Контакти» (маршрут "/contacts")
export default function ContactsPage() {
  return (
    <>
      <h1 className="page-title">Контакти</h1>
      <p className="page-lead">Зв'яжіться з приймальною комісією — ми допоможемо з вибором спеціальності.</p>

      <div className="grid">
        <article className="card">
          <h3>📍 Адреса</h3>
          <p>м. Луцьк, вул. Навчальна, 1</p>
        </article>
        <article className="card">
          <h3>📞 Телефон</h3>
          <p>+38 (0332) 00-00-00</p>
        </article>
        <article className="card">
          <h3>✉️ Електронна пошта</h3>
          <p>info@progress-college.example</p>
        </article>
        <article className="card">
          <h3>🕘 Години роботи</h3>
          <p>Пн–Пт: 9:00–17:00</p>
        </article>
      </div>
    </>
  );
}
