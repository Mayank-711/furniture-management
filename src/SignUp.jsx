import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setError("Invalid email address");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Call API to signup
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold mb-4 text-[#333333]">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-[#333333] border border-[#CCCCCC] rounded"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-[#333333] border border-[#CCCCCC] rounded"
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-[#333333] border border-[#CCCCCC] rounded"
            />
          </label>
          <label className="block mb-2">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-[#333333] border border-[#CCCCCC] rounded"
            />
          </label>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-[#8B9467] hover:bg-[#8B9467] text-white font-bold py-2 px-4 rounded"
          >
            Sign up
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#8B9467] hover:text-[#8B9467]">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
