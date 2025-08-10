import React, { useState, useContext } from "react";
import "./Leetcode.css";
import  { StoreContext } from "../../context/StoreContext";

const Leetcode = () => {
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const {url} = useContext(StoreContext);


  const fetchStats = async () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${url}/leetcode/${username}`);
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">LeetCode Stats</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter LeetCode Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchStats}>
          {loading ? "Loading..." : "Get Stats"}
        </button>
      </div>

      {stats && stats.status !== "error" && (
        <div className="card">
          <p className="total">Total Solved: {stats.totalSolved}</p>
          <p className="easy">Easy: {stats.easySolved}</p>
          <p className="medium">Medium: {stats.mediumSolved}</p>
          <p className="hard">Hard: {stats.hardSolved}</p>
        </div>
      )}

      {stats && stats.status === "error" && (
        <p className="error">User not found</p>
      )}
    </div>
  );
};

export default Leetcode;
