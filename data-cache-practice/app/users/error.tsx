"use client"; // error.tsx завжди клієнтський компонент

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// Показується, якщо в page.tsx сталася помилка (наприклад, response.ok === false)
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="center-box error-box" role="alert">
      <h2>Не вдалося отримати дані 😕</h2>
      <p>{error.message}</p>
      <button className="btn" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
