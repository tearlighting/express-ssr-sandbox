import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="home-container">
      <h1>Homes</h1>
      <div
        style={{
          height: "20%",
        }}
      >
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} className=" bg-red-200">
          Increment
        </button>
      </div>
    </div>
  )
}
