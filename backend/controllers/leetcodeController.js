import fetch from "node-fetch";

export const getLeetcodeStats = async (req, res) => {
  const { username } = req.params;

  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    const data = await response.json();

    if (data.status === "error") {
      return res.json({ status: "error", message: "User not found" });
    }

    res.json({
      totalSolved: data.totalSolved,
      easySolved: data.easySolved,
      mediumSolved: data.mediumSolved,
      hardSolved: data.hardSolved,
      status: "success"
    });
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
