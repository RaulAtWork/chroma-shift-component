import { useEffect, useState } from "react";

const systemPreferenceMq = window.matchMedia("(prefers-color-scheme: dark)");

const useSystemTheme = () => {
  const [isSystemDarkPreference, setIsSystemDarkPreference] = useState(
    systemPreferenceMq.matches
  );

  useEffect(() => {
    const mqListener = (e) => {
      setIsSystemDarkPreference(e.matches);
    };
    //set up the listener for the user changes
    systemPreferenceMq.addEventListener("change", mqListener);
    return () => systemPreferenceMq.removeEventListener("change", mqListener);
  }, []);
  return [isSystemDarkPreference];
};

export default useSystemTheme;
