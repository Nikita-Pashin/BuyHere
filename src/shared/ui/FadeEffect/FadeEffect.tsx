import { FC, useRef } from 'react';
import { Transition } from 'react-transition-group';

interface FadeEffectProps {
  timeout: number,
  inn: boolean,
  left: number,
  top: number,
}

export const FadeEffect: FC<FadeEffectProps> = ({
  inn, left, top, timeout, children,
}) => {
  const nodeRef = useRef(null);

  const duration = 250;

  const transitionStyles = {
    entering: { opacity: 1, top, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    entered: { opacity: 1, top, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    exiting: { opacity: 0, top: top - 4, transition: `opacity ${duration}ms ease-out, top ${duration}ms ease-out` },
    exited: { opacity: 0, top: top - 4 },
  };

  return (
    <Transition
      nodeRef={nodeRef}
      timeout={timeout}
      in={inn}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            left,
            top,
            opacity: 1,
            // eslint-disable-next-line
            // @ts-ignore
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
