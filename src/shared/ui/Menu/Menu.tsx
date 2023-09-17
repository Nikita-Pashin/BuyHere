import {
  FC, ReactNode, useEffect, useRef, useState,
} from 'react';
import { Transition } from 'react-transition-group';
import { Portal } from 'shared/ui/Portal/Portal';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import s from './Menu.module.scss';

interface MenuProps {
  children: ReactNode
}

interface Coords {
  x: number,
  y: number,
}

export const Menu: FC<MenuProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({
    x: 0,
    y: 0,
  });

  const targetRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => {
    setIsOpen(false);
  };

  useClickOutside({ mainRef: menuRef, onClickOutside, subRefs: [targetRef] });

  const onClickTarget = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (targetRef.current && menuRef.current) {
      const target = targetRef.current;
      const { bottom, right } = target.getBoundingClientRect();
      const offsetWidthMenu = menuRef.current.offsetWidth;
      setCoords({ x: right - offsetWidthMenu, y: bottom + 4 });
    } else if (targetRef.current) {
      const target = targetRef.current;
      const { bottom } = target.getBoundingClientRect();
      setCoords((prev) => ({ ...prev, y: bottom + 4 }));
    }
  }, [isOpen]);

  const duration = 250;

  const transitionStyles = {
    entering: { opacity: 1, top: coords.y, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    entered: { opacity: 1, top: coords.y, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    exiting: { opacity: 0, top: coords.y - 4, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    exited: { opacity: 0, top: coords.y - 4 },
  };

  return (
    <div className={s.menuWrapper}>
      {/* TODO: */}
      {/* eslint-disable-next-line */}
      <div
        onClick={onClickTarget}
        ref={targetRef}
      >
        {children}
      </div>
      <Portal>
        <Transition
          nodeRef={menuRef}
          timeout={duration}
          in={isOpen}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              ref={menuRef}
              className={s.menu}
              style={{
                left: coords.x,
                top: coords.x - 4,
                opacity: 1,
                // eslint-disable-next-line
                // @ts-ignore
                ...transitionStyles[state],
              }}
            >
              123
            </div>
          )}
        </Transition>
      </Portal>
    </div>
  );
};
