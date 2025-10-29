import { ListProducts } from "../routes/product.routes";
import openAi from "../services/openAi";

type askVerificationProps = {
  text: string;
  product: ListProducts;
};

export const AskVerification = async ({
  text,
  product,
}: askVerificationProps) => {
  return await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Você deve verificar se a pergunta do usuário está relacionada ao produto fornecido. Responda apenas com "Sim" ou "Não"(nao use ponto ou virgulas nem nenhum simbulo) Aqui está o produto em formato JSON: ${JSON.stringify(
          product
        )}`,
      },
      {
        role: "user",
        content: text,
      },
    ],
  });
};
