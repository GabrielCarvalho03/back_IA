import { ListProducts } from "../routes/product.routes";

type TrainingProps = {
  product: ListProducts;
};

export const training = ({ product }: TrainingProps) => {
  return `Voce é um assistente que ajuda os usuarios respondendo algumas perguntas sobre o produto em si. aqui está o produto inteiro em formato JSON.${JSON.stringify(
    product
  )}

  
  
  `;
};
