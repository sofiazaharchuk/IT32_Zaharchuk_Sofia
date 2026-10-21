"use client"; // error.tsx завжди клієнтський компонент

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// Показується, якщо під час рендеру розділу «Спеціальності» сталася помилка.
export default function SpecialtiesError({ error, reset }: ErrorProps) {
  return (
    <div className="error-box" role="alert">
      <h2>Щось пішло не так 😕</h2>
      <p>{error.message || "Не вдалося завантажити інформацію про спеціальності."}</p>
      <button className="btn" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
