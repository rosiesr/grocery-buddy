# Shared Grocery Planning Overview

This document consolidates the agreed product scope, user flows, data model, and an implementation prompt for building the first usable MVP.

The goal of this MVP is **to help individuals living with roommates plan groceries more confidently under uncertainty**, reducing duplicate purchases and food waste without requiring accurate inventory tracking or full participation.

---

## 1. Final MVP Screens & Flows

The product is built around a single persistent grocery list, with explicit transitions into planning, shopping, and post-purchase confirmation. There will also be a screen that shows existing shared and personal inventory in the kitchen at a high level.

---

### Screen 1: My Grocery List (Persistent Home Screen)

**Purpose**  
The primary working surface. This list persists across sessions and shopping trips.

**UI / Actions**  
- List of items with:
  - Checkbox
  - Editable name
  - Remove action
- Always‑visible add‑item input
- CTA: “Ready to shop” (enabled when list is non‑empty)

**Behavior**  
- Items are added, edited, or removed manually
- Items are not auto‑cleared

**Output State**  
- Persistent grocery list items with status = `pending`

---

### Screen 2: Subtraction Pass (Triggered by “Ready to Shop”)

**Purpose**  
Remove items that are *probably unnecessary* before shopping, without claiming accuracy based on what the user already has in the hosuehold.

**UI Structure**  
Header: “You may not need to buy these”

**Sections**  
- Shared staples (advisory)
- Personal existing items (private)

Each item shows:
- Item name
- Confidence label (Likely / Uncertain)
- “Last confirmed ~X days ago”

Actions per item:
- Keep on list
- Remove from list
- Mark “check at home”

**Completion**  
CTA: “Update my list” → returns to Grocery List with items removed.

---

### Screen 3: Grocery List (Shopping Mode)

**Purpose**  
Support in‑store execution.

**Differences from normal list**  
- Items can be checked off as bought
- Item editing disabled
- CTA: “I bought groceries”

**Behavior**  
- Checked state is temporary until confirmation

---

### Screen 4: Post‑Purchase Confirmation

**Purpose**  
Capture what actually entered the apartment and update memory.

**UI / Actions**  
- List of grocery items
  - Pre‑checked = bought
  - Unchecked = not bought / out of stock
- Optional ability to add 1–2 extra items
- CTA: “Confirm purchases”

**Critical Behavior**  
- Checked items move into inventory memory
- Unchecked items remain on the grocery list (status resets to pending)

---

### Screen 5: Inventory / Memory View (Support View)

**Purpose**  
Provide directional memory to power future subtraction passes. This should be a different tab than the first 4 screens, which are part of the same flow.

**Sections**  
- Shared staples
- My items (private)

Each item shows:
- Name
- Confidence / age indicator
- Last confirmed timestamp

Actions:
- Confirm still present
- Mark gone (remove memory)

This is not a pantry view and does not aim for completeness.

---

This MVP is intentionally narrow. It is designed to test whether **approximate shared context is better than no shared context** when planning groceries. Accuracy is explicitly out of scope; learning and usability are the priority.