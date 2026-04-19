const express = require("express");
const cors = require("cors");

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* =========================
   BASIC LOGGER (Cloud-friendly)
========================= */
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} | ${req.method} ${req.url}`);
    next();
});

/* =========================
   MCP TOOL SIMULATION
========================= */
function getCrowdDensity(location) {
    return location === "Gate B" ? "high" : "low";
}

function getQueueTime(vendor) {
    return vendor === "Burger" ? 20 : 5;
}

/* =========================
   AI LOGIC ENGINE
========================= */
function processGateQuery() {
    const crowd = getCrowdDensity("Gate B");

    if (crowd === "high") {
        return "🚨 Gate B is congested. Redirect to Gate D for faster entry.";
    }

    return "✅ Gate B is clear. Proceed normally.";
}

function processFoodQuery() {
    const burger = getQueueTime("Burger");
    const pizza = getQueueTime("Pizza");

    if (pizza < burger) {
        return "🍕 Pizza queue is shorter (5 mins). Recommended choice.";
    }

    return "🍔 Burger queue is acceptable.";
}

function processExitQuery() {
    return "➡️ Use nearest exit with lowest congestion based on routing intelligence.";
}

function aiAgent(query) {
    if (!query) return "⚠️ No query provided.";

    const q = query.toLowerCase();

    if (q.includes("gate")) return processGateQuery();
    if (q.includes("food")) return processFoodQuery();
    if (q.includes("exit")) return processExitQuery();

    return "ℹ️ System operating normally. No issues detected.";
}

/* =========================
   ROUTES
========================= */

// HEALTH CHECK (VERY IMPORTANT)
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// AI QUERY ENDPOINT
app.post("/ask", (req, res) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({
                error: "Query is required"
            });
        }

        const response = aiAgent(query);

        res.json({
            success: true,
            response
        });
    } catch (error) {
        console.error("Error in /ask:", error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// SIMULATION ENDPOINT
app.get("/simulate", (req, res) => {
    try {
        const crowd = (req.query.crowd || "").toLowerCase();

        if (!crowd) {
            return res.status(400).json({
                error: "Crowd level is required (high, medium, low)"
            });
        }

        let decision;

        switch (crowd) {
            case "high":
                decision = {
                    status: "Severe congestion detected",
                    action: "Redirect to Gates B & C",
                    priority: "CRITICAL",
                    wait_time: "15+ mins"
                };
                break;

            case "medium":
                decision = {
                    status: "Moderate congestion",
                    action: "Open auxiliary lanes",
                    priority: "MEDIUM",
                    wait_time: "5–10 mins"
                };
                break;

            case "low":
                decision = {
                    status: "Smooth flow",
                    action: "Maintain current routing",
                    priority: "LOW",
                    wait_time: "< 2 mins"
                };
                break;

            default:
                return res.status(400).json({
                    error: "Invalid crowd level. Use high, medium, or low."
                });
        }

        res.json({
            success: true,
            crowd_level: crowd,
            decision
        });

    } catch (error) {
        console.error("Error in /simulate:", error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);

    res.status(500).json({
        error: "Something went wrong"
    });
});

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});