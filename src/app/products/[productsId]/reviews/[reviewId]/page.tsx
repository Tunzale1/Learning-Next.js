import { notFound } from "next/navigation";
export default function ReviewDetail( {params}: {
    params: {
        productsId: string;
        reviewId : string;
    };
}) {
  if (parseInt(params.reviewId) > 1000){
    notFound();
  }
  return (
   <h1>
    Review {params.reviewId} for product {params.productsId}
   </h1>
  )
}
