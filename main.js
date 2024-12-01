class Toast {
  positions = ["top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"];
  wrapper = document.body;
  max = 5;
  gap = 6;
  position = "top";
  hideAfter = 3000;
  hash = "aa81d3cfb";
  constructor({ wrapper = document.body, max = 5, gap = 6, position = "top", hideAfter = 3000 } = {}) {
    this.wrapper = wrapper;
    this.max = max;
    this.gap = gap;
    this.hideAfter = hideAfter;

    if (!this.positions.includes(position)) {
      this.position = "top";
    } else {
      this.position = position;
    }
  }

  show(message, { className = "" } = {}) {
    const wrapper = this.wrapper || document.body;
    const max = this.max || 5;
    const gap = this.gap || 6;
    const position = this.position || "top";

    const toast = document.createElement("div");
    toast.classList.add("toast-" + this.hash);
    toast.classList.add(position + "-" + this.hash);
    if (className) {
      toast.classList.add(className);
    }
    toast.innerHTML = message;

    const allToasts = document.querySelectorAll(".toast-" + this.hash);
    const id = Date.now();
    toast.setAttribute("data-id", id);
    toast.setAttribute("data-position", position);

    wrapper.appendChild(toast);
    allToasts.forEach((t, i) => {
      const index = allToasts.length - i;
      if (index === max - 1) {
        const id = t.getAttribute("data-id");
        this.remove(id);
        return;
      }
      const value = t.style.transform.split("translateY(")[1].split("px)")[0];
      if (position.includes("top")) {
        t.style.top = index * gap + 20 + "px";
        t.style.transform = `translateX(-50%) translateY(${parseInt(value) + toast.offsetHeight}px)`;
      } else {
        t.style.bottom = index * gap + 20 + "px";
        t.style.transform = `translateX(-50%) translateY(${parseInt(value) - toast.offsetHeight}px)`;
      }
    });
    setTimeout(() => {
      toast.style.transform = "translateX(-50%) translateY(0)";
    }, 0);
    setTimeout(() => {
      this.remove(id);
    }, this.hideAfter);
  }

  remove(id) {
    const toast = document.querySelector(`.toast-${this.hash}[data-id="${id}"]`);
    if (!toast) return;
    const value = toast.style.transform.split("translateY(")[1].split("px)")[0];
    const position = toast.getAttribute("data-position");
    let offest = 48;
    if (position.includes("top")) {
      offest = -48;
    }
    toast.style.transform = `translateX(-50%) translateY(${parseFloat(value) + offest}px) scale(0.7)`;
    toast.style.opacity = 0;
    setTimeout(() => {
      if (!toast) return;
      const wrapper = this.wrapper || document.body;
      wrapper.removeChild(toast);
    }, 300);
  }
}
