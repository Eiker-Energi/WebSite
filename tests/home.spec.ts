import { expect, test } from "@playwright/test";

test("home page renders hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Kom i gang med Norgespris" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Allerede kunde" })).toBeVisible();
});
