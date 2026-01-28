
## Data Model (Minimal & Resilient)

**Design principle:** store *last‑known signals*, not truth. No quantities, no consumption tracking.

### User

```
User {
  id
  name
}
```

---

### GroceryListItem (Persistent Intent)

```
GroceryListItem {
  id
  userId
  name
  status: "pending" | "bought"
  createdAt
  updatedAt
}
```

- Represents intent
- Never auto‑deleted
- Survives failed or partial trips

---

### PurchaseEvent (Shopping Trip)

```
PurchaseEvent {
  id
  userId
  note?: string
  createdAt
}
```

- Created when user starts a shopping flow
- Anchors inventory updates to a real‑world event

---

### PurchasedItem (What Entered the Apartment)

```
PurchasedItem {
  id
  purchaseEventId
  userId
  name
  isSharedStaple: boolean
  createdAt
}
```

- Represents confirmed purchases only
- Separate from grocery list intent

---

### InventoryMemory (Directional Memory)

```
InventoryMemory {
  id
  ownerType: "user" | "shared"
  ownerId
  name
  lastConfirmedAt
  source: "purchase" | "manual"
}
```

- Means “someone reasonably believed this existed at this time”
- Powered entirely by timestamps
