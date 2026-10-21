const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Сторінка «Дизайн» (маршрут "/specialties/design")
export default async function DesignPage() {
  await delay(1200);

  return (
    <>
      <h1 className="page-title">🎨 Дизайн</h1>
      <p className="page-lead">
        Підготовка дизайнерів, які створюють зручні інтерфейси та впізнавані візуальні стилі.
      </p>

      <div>
        <span className="badge">3 роки 10 місяців</span>
        <span className="badge">Денна форма</span>
        <span className="badge">Бюджет / контракт</span>
      </div>

      <h3>Що вивчатимете</h3>
      <ul className="info-list">
        <li>Композиція, колір і типографіка</li>
        <li>UI/UX дизайн та прототипування у Figma</li>
        <li>Графічний дизайн і брендинг</li>
        <li>Основи вебверстки для дизайнерів</li>
      </ul>

      <h3>Кваліфікація</h3>
      <p>Фаховий молодший бакалавр, дизайнер.</p>
    </>
  );
}
