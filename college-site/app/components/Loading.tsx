// Спільний індикатор завантаження для всіх loading.tsx
export default function Loading({ text }: { text: string }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="spinner" />
      <p>{text}</p>
    </div>
  );
}
