const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MCP TOOL SIMULATION
function getCrowdDensity(location) {
    return location === "Gate B" ? "high" : "low";
}

function getQueueTime(vendor) {
    return vendor === "Burger" ? 20 : 5;
}

// AI AGENT (PROMPT-STYLE LOGIC)
function aiAgent(query) {
    if (query.includes("gate")) {
        const crowd = getCrowdDensity("Gate B");
        if (crowd === "high") {
            return "Gate B is crowded. Use Gate D instead.";
        }
    }

    if (query.includes("food")) {
        const burger = getQueueTime("Burger");
        const pizza = getQueueTime("Pizza");

        return pizza < burger
            ? "Pizza is faster (5 mins)"
            : "Burger is fine";
    }

    return "All systems normal.";
}

// API
app.post("/ask", (req, res) => {
    const response = aiAgent(req.body.query);
    res.json({ response });
});

// IMPORTANT FOR GOOGLE CLOUD
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});