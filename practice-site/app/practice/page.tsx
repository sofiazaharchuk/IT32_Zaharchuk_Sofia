import InteractiveList from "./InteractiveList";
import "./practice.css";

// Тип одного заняття. Експортуємо, щоб клієнтський компонент використовував той самий тип.
export type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

// Це Server Component: тут НЕМАЄ директиви "use client".
// async-функція виконується на сервері, тому тут можна "чекати" дані (бази даних, API тощо).
export default async function PracticePage() {
  // Імітація отримання даних із сервера (у реальному проєкті тут був би запит до БД чи API)
  const lessons: Lesson[] = await Promise.resolve([
    { id: 1, day: "Понеділок", subject: "Вебпрограмування", room: "ауд. 101" },
    { id: 2, day: "Понеділок", subject: "Англійська мова", room: "ауд. 205" },
    { id: 3, day: "Вівторок", subject: "Бази даних", room: "ауд. 112" },
    { id: 4, day: "Середа", subject: "Основи дизайну", room: "ауд. 301" },
    { id: 5, day: "Середа", subject: "Алгоритми та структури даних", room: "ауд. 108" },
    { id: 6, day: "Четвер", subject: "Next.js та React", room: "ауд. 101" },
  ]);

  return (
    <div className="practice-page">
      <div className="practice-container">
        <h1 className="practice-title">Розклад занять</h1>
        {/* Кількість рахується на сервері й одразу потрапляє в HTML */}
        <p className="practice-lead">Усього занять у розкладі: {lessons.length}</p>

        {/* Масив передаємо в Client Component через props */}
        <InteractiveList lessons={lessons} />
      </div>
    </div>
  );
}
