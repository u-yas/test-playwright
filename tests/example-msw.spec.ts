import { test, expect, rest } from "./test-msw";
test("use msw default handler", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("C shoe")).toBeVisible();
});

test("use msw override", async ({ page, msw }) => {
  msw.use(
    rest.get("http://localhost:8080", (req, res, ctx) => {
      return res.once(
        ctx.status(200),
        ctx.json({
          title: "D shoe",
        })
      );
    })
  );

  await page.goto("/");

  await expect(page.getByText("D shoe")).toBeVisible();
});
