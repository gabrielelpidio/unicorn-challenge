import { useEffect, useState } from 'react';
import { useSpring, config } from 'react-spring';

export const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    if (!target) {
      console.error('Inteception Observer needs a target to work');
      return;
    }

    const newRoot = root ? root.current : root;

    const observer = new IntersectionObserver(onIntersect, {
      newRoot,
      rootMargin,
      threshold,
    });

    observer.observe(target.current);
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [root, target, onIntersect, threshold, rootMargin]);
};

export const useOnScrollFade = ({
  root = null, target, threshold = 1.0, rootMargin = '0px',
}) => {
  const [isIntersected, toggle] = useState();

  const fade = useSpring({
    opacity: isIntersected ? 1 : 0,
    config: config.molasses,
  });

  const handleObserver = (entries) => {
    entries.map(entry => (entry.isIntersecting ? toggle(true) : toggle(false)));
  };

  useIntersectionObserver({
    root,
    target,
    onIntersect: handleObserver,
    threshold,
    rootMargin,
  });

  return fade;
};
