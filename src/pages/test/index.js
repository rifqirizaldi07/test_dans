import React, { useState, useEffect } from "react";

const Test = ()  => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= 5) {
      window.location.reload();
    }
  }, [seconds]);

  return (
    <div className="container">
    Timer mundur: {seconds} detik
    </div>
  )
}
 
export default Test