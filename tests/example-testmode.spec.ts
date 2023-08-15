import { test, expect } from "./test";

test("next/experimental/testmode/playwright", async ({ page, next }) => {
  next.onFetch((req) => {
    if (req.url === "http://localhost:8080/") {
      return new Response(
        JSON.stringify({
          title: "A shoe",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(
      JSON.stringify({
        title: "B shoe",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
  await page.goto("/");

  await expect(page.getByText("A shoe")).toBeVisible();
});
