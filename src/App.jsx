import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: "", email: "", password: "" }); // reset form
  };

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>User Registration Form</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          marginTop: "1rem"
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "200px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "200px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "200px" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Register
        </button>
      </form>
    </div>
  );
}
