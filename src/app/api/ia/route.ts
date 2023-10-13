import { boardNumericEntry } from "@/reducers/game/reducer";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export type IARequestBody = {
  board: string;
  playerSymbol: boardNumericEntry;
  iaSymbol: boardNumericEntry;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body: IARequestBody = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Você é um jogador do jogo da velha, considerando que o jogo é formado por uma matriz numérica, 
            ao qual ${body.iaSymbol} é o seu símbolo, ${body.playerSymbol} é o simbolo do adversário e 0 indica espaço ainda não preenchido. 
            A matriz atual está preenchida da seguinte forma board=${body.board} \n
            Retorne qual espaço da matriz você irá preencher no próximo passo objetivando ganhar o jogo, 
            no formato json {line:linha da matriz, column:coluna da matriz}, 
            não quero que crie nenhuma função, apenas responda como se você fosse um jogador, tente ganhar ou empatar o jogo`,
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0,
  });

  const strignifyResponse = chatCompletion.choices[0].message.content;
  if (strignifyResponse) {
    const response = JSON.parse(strignifyResponse);
    return NextResponse.json(response);
  }

  return NextResponse.json({});
}
