"use client"; // Цей компонент виконується в браузері: тут працюють useState і обробники подій

import { useState } from "react";
import type { Lesson } from "./page";

const DAYS = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

export default function InteractiveList({ lessons }: { lessons: Lesson[] }) {
  // Стан 1: вибраний день ("all" — усі дні)
  const [selectedDay, setSelectedDay] = useState<string>("all");
  // Стан 2: чи показувати аудиторії
  const [showRooms, setShowRooms] = useState<boolean>(true);

  // Фільтрація відбувається в браузері, без запиту до сервера
  const shown =
    selectedDay === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.day === selectedDay);

  return (
    <div>
      <div className="practice-controls">
        <label className="practice-field">
          День тижня:
          <select
            className="practice-select"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="all">Усі дні</option>
            {DAYS.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <button className="practice-button" onClick={() => setShowRooms((prev) => !prev)}>
          {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
        </button>
      </div>

      <p className="practice-counter">Показано занять: {shown.length}</p>

      {shown.length === 0 ? (
        <p className="practice-empty">Нічого не знайдено</p>
      ) : (
        <ul className="practice-list">
          {shown.map((lesson) => (
            <li key={lesson.id} className="practice-item">
              <span className="practice-day">{lesson.day}</span>
              <span className="practice-subject">{lesson.subject}</span>
              {showRooms && <span className="practice-room">{lesson.room}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
