// Тип даних, які повертає JSONPlaceholder для користувача (беремо лише потрібні поля)
type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

const API_URL = "https://jsonplaceholder.typicode.com/users?_limit=8";

// Це async Server Component: у ньому можна використовувати await безпосередньо.
export default async function UsersPage() {
  // Щоб побачити loading.tsx, розкоментуйте наступний рядок (штучна затримка 1,5 с):
  // await new Promise((resolve) => setTimeout(resolve, 1500));

  // ===== ЕКСПЕРИМЕНТ З КЕШУВАННЯМ =====
  // Залишайте активним ТІЛЬКИ ОДИН варіант другого аргументу fetch().

  // Режим 1: без кешу — нова відповідь під час кожного запиту
  const res = await fetch(API_URL, { cache: "no-store" });

  // Режим 2: кешування — відповідь береться з кешу (замініть рядок вище на цей)
  // const res = await fetch(API_URL, { cache: "force-cache" });

  // Режим 3: оновлення за часом — кеш перевіряється після 60 секунд
  // const res = await fetch(API_URL, { next: { revalidate: 60 } });

  // Перевірка відповіді: якщо статус не 2xx, кидаємо помилку, яку перехопить error.tsx
  if (!res.ok) {
    throw new Error(`Не вдалося завантажити користувачів (статус ${res.status})`);
  }

  const users: User[] = await res.json();

  // Час формування сторінки на сервері — допомагає побачити роботу кешу
  const renderedAt = new Date().toLocaleTimeString("uk-UA", { timeZone: "Europe/Kyiv" });

  return (
    <main className="page">
      <h1 className="title">Список користувачів</h1>
      <p className="lead">Дані отримано із зовнішнього API через fetch() у Server Component.</p>

      <div className="badge-row">
        <span className="badge">Користувачів: {users.length}</span>
        <span className="badge badge-time">Сторінку сформовано о {renderedAt}</span>
      </div>

      <section className="grid">
        {users.map((user) => (
          <article key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>✉️ {user.email}</p>
            <p>📍 {user.address.city}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
