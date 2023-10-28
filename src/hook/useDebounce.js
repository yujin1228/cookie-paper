import { useEffect, useState } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }; //value 변경 시점에 clearTimeout을 해줘야함.
  }, [value, delay]);

  function cancel() {
    setDebouncedValue(value);
  }

  return { debouncedValue, cancel };
}
