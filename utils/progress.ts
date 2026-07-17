export interface UserProgress {
  xp: number;
  streak: number;
  completedLessons: number;
  level: string;
}


const defaultProgress: UserProgress = {
  xp: 0,
  streak: 1,
  completedLessons: 0,
  level: "A1 Beginner",
};



export function getProgress(): UserProgress {

  if (typeof window === "undefined") {
    return defaultProgress;
  }


  const saved = localStorage.getItem("germanMasterProgress");


  if(saved){

    return JSON.parse(saved);

  }


  localStorage.setItem(
    "germanMasterProgress",
    JSON.stringify(defaultProgress)
  );


  return defaultProgress;

}





export function saveProgress(
  progress: UserProgress
){

  if(typeof window !== "undefined"){

    localStorage.setItem(
      "germanMasterProgress",
      JSON.stringify(progress)
    );

  }

}





export function addLessonReward(){

  const progress = getProgress();


  const updatedProgress = {

    ...progress,

    xp: progress.xp + 50,

    completedLessons:
    progress.completedLessons + 1,

  };


  saveProgress(updatedProgress);


  return updatedProgress;

}