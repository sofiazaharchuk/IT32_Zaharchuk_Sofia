const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Сторінка «Програмування» (маршрут "/specialties/programming")
export default async function ProgrammingPage() {
  await delay(1200);

  return (
    <>
      <h1 className="page-title">💻 Програмування</h1>
      <p className="page-lead">
        Підготовка розробників, які створюють сучасні вебсайти, застосунки та сервіси.
      </p>

      <div>
        <span className="badge">3 роки 10 місяців</span>
        <span className="badge">Денна форма</span>
        <span className="badge">Бюджет / контракт</span>
      </div>

      <h3>Що вивчатимете</h3>
      <ul className="info-list">
        <li>HTML, CSS, JavaScript та TypeScript</li>
        <li>Фреймворки Angular, React та Next.js</li>
        <li>Бази даних і серверна розробка</li>
        <li>Git, командна робота та тестування</li>
      </ul>

      <h3>Кваліфікація</h3>
      <p>Фаховий молодший бакалавр, розробник програмного забезпечення.</p>
    </>
  );
}
