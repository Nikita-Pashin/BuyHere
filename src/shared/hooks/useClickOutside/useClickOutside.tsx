import { MutableRefObject, useEffect } from 'react';

interface useClickOutsideParams {
  mainRef: MutableRefObject<any>,
  subRefs?: MutableRefObject<any>[],
  onClickOutside: () => void,
  onClickInside?: () => void,
}

export const useClickOutside = ({
  mainRef, subRefs, onClickOutside, onClickInside,
}: useClickOutsideParams) => {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      const stop = !!subRefs && subRefs.some((_ref) => {
        if (
          _ref.current
          && _ref.current instanceof HTMLElement
          && _ref.current.contains(target as any)
        ) {
          return true;
        }

        return false;
      });

      if (stop) {
        return;
      }

      if (mainRef.current && mainRef.current.contains(target)) {
        onClickInside?.();
      } else {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mainRef, onClickInside, onClickOutside, subRefs]);
};
