import { test, expect, rest } from "next/experimental/testmode/playwright/msw";

test.use({
  mswHandlers: [
    rest.get("http://localhost:8080/", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          title: "C shoe",
        })
      );
    }),
    rest.get("http://localhost:8080/a", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
});

export { test, expect, rest };
