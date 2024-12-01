# Vanilla Toast

**Vanilla Toast** is a lightweight JavaScript library for displaying simple and elegant toast notifications. It requires no external dependencies and is perfect for projects where performance and minimalism matter.

---

## 🎯 **Features**
- 🚀 Lightweight and fast.
- 🛠 Customizable notification positions.
- 🕐 Auto-hide after a configurable timeout.
- 📐 Set the maximum number of visible notifications.
- 🎨 Fully customizable styles via CSS.

---

## 🚀 **Installation**

Download or include the library directly via HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/ewqwdd/vanila-toast@main/main.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ewqwdd/vanila-toast@main/style.min.css" />
```

---

## ⚙️ **Usage**

### 1. Initialization
Create a new `Toast` instance with the desired options:

```javascript
const toast = new Toast({
  wrapper: document.body, // Parent container for notifications
  max: 5,                // Maximum number of visible notifications
  gap: 10,               // Spacing between notifications (in px)
  position: "top-right", // Notification position
  hideAfter: 5000        // Auto-hide time (in ms)
});
```

### 2. Display a Notification
Use the `show` method to display a message:

```javascript
toast.show("This is a notification!");
```

### 3. Remove a Notification (Optional)
The `remove` method removes a notification by its ID:

```javascript
const id = 12345; // Notification ID
toast.remove(id);
```

---

## 🔧 **Options**

| Option       | Type       | Description                                            | Default Value        |
|--------------|------------|--------------------------------------------------------|----------------------|
| `wrapper`    | `Element`  | Parent element where notifications will be appended    | `document.body`      |
| `max`        | `number`   | Maximum number of visible notifications                | `5`                  |
| `gap`        | `number`   | Spacing between notifications (in px)                  | `6`                  |
| `position`   | `string`   | Notification position (`top`, `bottom`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | `top`          |
| `hideAfter`  | `number`   | Auto-hide time for notifications (in ms)               | `3000`               |

---

## 🎨 **Styling**

You can customize the appearance of notifications by adding your own CSS:

```css
.toast-aa81d3cfb {
  position: absolute;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0.9;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.top-aa81d3cfb {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.bottom-aa81d3cfb {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
```

---

## 🔍 **Examples**

### Basic Notification:
```javascript
toast.show("Welcome!");
```

### Notification with Custom Hide Time:
```javascript
const customToast = new Toast({ hideAfter: 10000 });
customToast.show("This notification will disappear after 10 seconds.");
```

### Notification in a Corner:
```javascript
const cornerToast = new Toast({ position: "top-right" });
cornerToast.show("Notification in the top-right corner!");
```

---


Enjoy using Vanilla Toast! 🎉
