"use client";

import { useState } from "react";

// Тестова кнопка для демонстрації error.tsx.
// Помилка кидається під час рендеру, тому її перехоплює error boundary (error.tsx).
export default function ErrorTrigger() {
  const [shouldFail, setShouldFail] = useState(false);

  if (shouldFail) {
    throw new Error("Тестова помилка: не вдалося завантажити дані про спеціальності");
  }

  return (
    <button className="btn btn-danger" onClick={() => setShouldFail(true)}>
      Викликати тестову помилку
    </button>
  );
}
