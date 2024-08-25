import { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  }
}

export const generateMetadata = ({params}: Props) : Metadata => {
  return {
    title: `Product ${params.productsId}`
  }
}

export default function Details({ params }: Props) {
  return (
    <h1>Details about product {params.productsId}</h1>
  );
}