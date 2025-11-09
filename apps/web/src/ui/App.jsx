import React, { useState } from "react";

export default function App() {
  const [q, setQ] = useState("");
  return (
    <div className="wrap">
      <nav className="nav">
        <div className="brand">StreamStats</div>
        <div className="search">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search streamer or paste URL (kick/twitch/youtube)…"
          />
          <button onClick={() => alert(`Search for: ${q}`)}>Search</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Compare Streamers Across <span className="pill">Kick</span> <span className="pill">Twitch</span> <span className="pill">YouTube</span></h1>
        <p className="muted">Side-by-side metrics with avatars, live status, average viewers, followers, categories, and trends.</p>
        <div className="cards">
          <div className="card">
            <h3>Recent Searches</h3>
            <p className="muted">Try: <a href="#">xqc</a>, <a href="#">ishowspeed</a>, <a href="#">kai cenat</a></p>
          </div>
          <div className="card">
            <h3>Quick Compare</h3>
            <p className="muted">Build a comparison and bookmark it.</p>
          </div>
          <div className="card">
            <h3>Live Now</h3>
            <p className="muted">See who’s trending live across platforms.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
