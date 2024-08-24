interface ParamsType {
  productsId: string;
}

export default function Details({ params }: { params: ParamsType }) {
  return (
    <h1>Details about product {params.productsId}</h1>
  );
}