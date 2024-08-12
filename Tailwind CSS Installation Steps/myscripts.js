function copyToClipboard(text, button) {
  // Create a temporary element to hold the text
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);

  // Select and copy the text
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');

  // Remove the temporary element
  document.body.removeChild(tempTextArea);

  // Show tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = 'Copied ✔';
  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = button.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

  // Hide tooltip after 0.9 seconds
  setTimeout(() => {
    tooltip.remove();
  }, 900);
}
//  <!-- Tailwind CSS Configuration -->
document.getElementById("copyTailwindConfig").addEventListener("click", function () {
  const textToCopy = `/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  extend: {},
  },
  plugins: [],
  }
  `;
  copyToClipboard(textToCopy, this);
});

//  <!-- Add the build script to package.json -->
document.getElementById("copyBuildScript").addEventListener("click", function () {
  const textToCopy = `"scripts": {
  "build:css": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
  `;
  copyToClipboard(textToCopy, this);
});