import "./styles.css";

const rows = 5;
const cols = 10;

const app = document.getElementById("app");
const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");

    // Sneak peek at what's coming next!
    // After creating an element, it needs
    // to be added to the DOM tree.
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);