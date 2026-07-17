import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { message } = await req.json();


    if(!message){

      return NextResponse.json({
        reply:"Please write something."
      });

    }



    const prompt = `
You are GermanMaster AI, a friendly German language tutor.

User sentence:
${message}

Rules:
- Correct German mistakes
- Explain in simple English
- Give better German sentence
- Encourage learner
`;



    // AI connection will be added here
    // OpenAI/Gemini API call



    return NextResponse.json({

      reply:
      `Your sentence: "${message}"\n\nGood attempt! Keep practicing German 🇩🇪`

    });



  } catch(error){


    return NextResponse.json({

      reply:"AI service error."

    });


  }

}