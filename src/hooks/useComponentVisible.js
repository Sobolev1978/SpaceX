import {useState, useEffect, useRef} from 'react';

const useComponentVisible = (initialIsVisible, dataAuto, constanta, onClose) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);
  const element =
    typeof window !== 'undefined' &&
    (document.querySelector(`[data-auto="${dataAuto}"]`));

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (e) => {
    if (constanta && element && !element.contains(e.target)) {
      onClose && onClose();
      return;
    }
    if (
      element &&
      !element.contains(e.target) &&
      ref.current &&
      !ref.current.contains(e.target)
    ) {
      setIsComponentVisible(false);
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return {ref, isComponentVisible, setIsComponentVisible};
}

export default useComponentVisible;
