import { supabase } from "./client";

export async function saveUserProgress(
  name: string,
  xp: number,
  lessonsCompleted: number
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    name,
    xp,
    level: Math.floor(xp / 100) + 1,
    lessons_completed: lessonsCompleted,
  });

  if (error) {
    console.error(error);
  }
}