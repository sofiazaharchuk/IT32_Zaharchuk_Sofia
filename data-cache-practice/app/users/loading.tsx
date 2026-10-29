// Next.js показує цей компонент, поки async-сторінка чекає на дані
export default function Loading() {
  return (
    <div className="center-box" role="status" aria-live="polite">
      <div className="spinner" />
      <p>Завантаження даних...</p>
    </div>
  );
}
