"use client";

import LessonNode from "./LessonNode";

const lessons = [
  { title: "Greetings", xp: 20, completed: true },
  { title: "Family", xp: 25, completed: true },
  { title: "Numbers", xp: 20, active: true },
  { title: "Colors", xp: 25, locked: true },
  { title: "Food", xp: 30, locked: true },
  { title: "Animals", xp: 30, locked: true },
  { title: "Travel", xp: 40, locked: true },
];

export default function LessonPath() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 py-12">
      {lessons.map((lesson, index) => (
        <div
          key={lesson.title}
          className={`flex w-full ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <LessonNode
            title={lesson.title}
            xp={lesson.xp}
            completed={lesson.completed}
            active={lesson.active}
            locked={lesson.locked}
          />
        </div>
      ))}
    </div>
  );
}