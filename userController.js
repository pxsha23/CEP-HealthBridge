//C:\Users\Name\OneDrive\Desktop\CEPHealthBridge\backend\controllers\userController.js

const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Simple mock check
  if (email === "admin@clinic.com" && password === "admin123") {
    res.status(200).json({ message: "Login successful", user: { email } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { loginUser };
