import Intl from "intl";

export default function formatPrice(price: number) {
  if (typeof price !== "number") {
    throw new Error("Price is not a number!");
  }

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}
