import { test, expect } from "@playwright/test";

test.describe("Flight Booker Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/6");
  });
  test("has title, form and button", async ({ page }) => {
    await expect(page).toHaveTitle(/Flight Booker/);

    await expect(page.getByText("Flight type")).toBeVisible();

    await expect(page.getByLabel("Flight type")).toBeVisible();

    await expect(page.getByText("Departure Date")).toBeVisible();

    await expect(page.getByLabel("Departure Date")).toBeVisible();

    await expect(page.getByRole("button", { name: "book" })).toBeVisible();
  });

  test("books one way flight", async ({ page }) => {
    await page.getByLabel("Flight type").selectOption("oneWay");
    await expect(page.getByLabel("Flight type")).toHaveValue("oneWay");

    await page.getByLabel("Departure Date").fill("2030-10-22");
    await expect(page.getByLabel("Departure Date")).toHaveValue("2030-10-22");

    await page.getByRole("button", { name: "book" }).click();

    const dialog = page.getByRole("dialog", {
      name: "Your flight summary",
    });

    await expect(dialog).toHaveAccessibleDescription(
      "You have booked a one-way flight on 2030-10-22",
    );
  });

  test("books round trip flight", async ({ page }) => {
    await page.getByLabel("Flight type").selectOption("roundTrip");
    await expect(page.getByLabel("Flight type")).toHaveValue("roundTrip");

    await page.getByLabel("Departure Date").fill("2030-10-22");
    await expect(page.getByLabel("Departure Date")).toHaveValue("2030-10-22");

    await expect(page.getByLabel("Return Date")).toBeVisible();
    await page.getByLabel("Return Date").fill("2030-10-25");
    await expect(page.getByLabel("Return Date")).toHaveValue("2030-10-25");

    await page.getByRole("button", { name: "book" }).click();

    const dialog = page.getByRole("dialog", {
      name: "Your flight summary",
    });

    await expect(dialog).toHaveAccessibleDescription(
      "You have booked a round-trip flight on 2030-10-22 and return on 2030-10-25",
    );
  });

  test("closes dialog on Escape", async ({ page }) => {
    await page.getByRole("button", { name: "book" }).click();

    const dialog = page.getByRole("dialog");

    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(dialog).not.toBeVisible();
  });

  test("closes dialog when clicking outside", async ({ page }) => {
    await page.getByRole("button", { name: "book" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await page.mouse.click(5, 5);

    await expect(dialog).not.toBeVisible();
  });
});
