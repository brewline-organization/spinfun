// Shared functions can go here
// Currently all game logic is in the individual HTML files

// Back button styling
const backBtn = document.createElement('style');
backBtn.textContent = `
  .back-btn {
    display: inline-block;
    margin: 20px 0;
    padding: 8px 15px;
    background: #5f6caf;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .back-btn:hover {
    background: #4a5691;
  }
`;
document.head.appendChild(backBtn);
