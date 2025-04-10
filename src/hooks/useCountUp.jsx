import { useEffect, useState } from "react";

const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;

    if (target <= 0) return;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const current = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
};
export default useCountUp;
