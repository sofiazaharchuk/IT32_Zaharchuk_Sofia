import Link from "next/link";
import ErrorTrigger from "../components/ErrorTrigger";

// Штучна затримка, щоб було видно loading.tsx
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Серверний компонент: Next.js показує loading.tsx, доки ця функція не завершиться.
export default async function SpecialtiesPage() {
  await delay(2000);

  return (
    <>
      <p className="page-lead">
        У коледжі доступні два напрями підготовки. Натисніть на картку, щоб дізнатися більше.
      </p>

      <div className="grid">
        <article className="card">
          <h3>💻 Програмування</h3>
          <p>Розробка вебзастосунків, мобільних додатків і програмного забезпечення.</p>
          <Link href="/specialties/programming" className="btn">
            Детальніше
          </Link>
        </article>

        <article className="card">
          <h3>🎨 Дизайн</h3>
          <p>Графічний та UI/UX дизайн, робота з візуальними системами та брендингом.</p>
          <Link href="/specialties/design" className="btn">
            Детальніше
          </Link>
        </article>
      </div>

      <div className="demo-box">
        <p>
          <strong>Демонстрація error.tsx:</strong> натисніть кнопку, щоб навмисно викликати помилку, а потім
          перевірте кнопку «Спробувати ще раз».
        </p>
        <ErrorTrigger />
      </div>
    </>
  );
}
