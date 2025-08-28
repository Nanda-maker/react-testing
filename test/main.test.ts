import { describe, it } from "vitest";
import { db } from "./mocks/db";

// describe("group", () => {
//   it("should work", async () => {
//     const response = await fetch("/categories");
//     const data = await response.json();
//     console.log(data);
//     expect(data).toHaveLength(3);
//   });
// });
describe("group", () => {
  it("should", () => {
    const product = db.product.create({ name: "APPLE" });
    // console.log(product);
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
