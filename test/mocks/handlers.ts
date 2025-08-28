import { db } from "./db";

export const handlers = [
  // http.get("/categories", () => {
  //   return HttpResponse.json([
  //     { id: 1, name: "Electronics" },
  //     { id: 2, name: "Beauty" },
  //     { id: 3, name: "Garderning" },
  //   ]);
  // }),

  // http.get("/products", () => {
  //   return HttpResponse.json(products);
  // }),

  // http.get("/products/:id", ({ params }) => {
  //   const id = parseInt(params.id as string);
  //   const product = products.find((p) => p.id === id);
  //   if (!product) return new HttpResponse(null, { status: 404 });
  //   return HttpResponse.json(product);
  // }),

  // The above method we always have to create an endpoint
  ...db.product.toHandlers("rest"),
];
