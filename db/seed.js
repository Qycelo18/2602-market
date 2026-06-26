import db from "#db/client";

import { createUser } from "#db/queries/users";
import { createOrder } from "#db/queries/orders";
import { createProduct } from "#db/queries/products";
import { createOrderProduct } from "#db/queries/orders_products";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 10; i++) {
    await createProduct("Product " + i, "Description " + i, i * 5);
  }

  for (let i = 1; i < 2; i++) {
    const user = await createUser("Account " + i, "password123");
    await createOrder("2026-6-18", "Note " + i, i);
    for (let j = 1; j <= 5; j++) {
      await createOrderProduct(i, j, j * 2);
    }
  }
}
