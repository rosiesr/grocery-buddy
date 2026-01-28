**Prompt:**

> You are building the first MVP of a grocery‑planning app designed for people living with roommates. The app explicitly does NOT track accurate inventory, quantities, or consumption. It stores last‑known signals with timestamps.
>
> Build a simple web app that supports the following:
>
> **Core concepts:**
> - A persistent personal grocery list that survives sessions
> - A “ready to shop” flow that includes a pre‑purchase check‑in (meal count + optional note)
> - A subtraction pass that flags items likely already available using last‑confirmed timestamps
> - A shopping mode where items are checked off
> - A post‑purchase confirmation step that updates inventory memory
>
> **Data model requirements:**
> - GroceryListItem (intent)
> - PurchaseEvent (shopping trip)
> - PurchasedItem (confirmed purchases)
> - InventoryMemory (directional, timestamp‑based)
>
> Do NOT include:
> - Quantities
> - Expiration dates
> - Consumption tracking
> - Recipes or meal planning
> - Real‑time inventory accuracy
>
> The UI should be simple, text‑forward, and forgiving of stale data. Confidence should be expressed using language like “likely” and “uncertain,” based solely on how recently an item was last confirmed.
>
> Start by implementing the Grocery List screen and underlying data model first. Then layer in the shopping flow vertically. Explain any tradeoffs you make.

---