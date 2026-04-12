function Toggle({ mode, setMode }) {
  return (
    <div className="toggle">
      <button 
        className={mode === "frontend" ? "active" : ""}
        onClick={() => setMode("frontend")}
      >
        Frontend
      </button>

      <button 
        className={mode === "soc" ? "active" : ""}
        onClick={() => setMode("soc")}
      >
        SOC Analyst
      </button>
    </div>
  );
}

export default Toggle;