import Link from "next/link";

// Головна сторінка: лише посилання на сторінку з даними
export default function HomePage() {
  return (
    <div className="center-box">
      <h1>Завантаження даних і кешування</h1>
      <p>Практична робота з fetch() у Server Component. Варіант 2: список користувачів.</p>
      <Link href="/users" className="btn">
        Відкрити список користувачів
      </Link>
    </div>
  );
}
