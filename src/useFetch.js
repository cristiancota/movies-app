import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  // const isMountedRef = useRef(null);

  useEffect(() => {
    // isMountedRef.current = true;
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        // if (isMountedRef.current) {
          setResponse(json);
        // }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

    return () => {
      // isMountedRef.current = false;
    };
  }, []);

  return { response, error };
}

export default useFetch;
