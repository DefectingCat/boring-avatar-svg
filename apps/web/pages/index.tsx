import { css } from '@emotion/css';
import avatar from 'boring-avatar-svg';
import { useCallback, useState } from 'react';
import Button from '../components/Button';

export default function Web() {
  const [pic, setPic] = useState(
    avatar({
      variant: 'bauhaus',
    })
  );
  const [beam, setBeam] = useState(
    avatar({
      variant: 'beam',
    })
  );
  const [marble, setMarble] = useState(
    avatar({
      variant: 'marble',
    })
  );
  const [pixel, setPixel] = useState(
    avatar({
      variant: 'pixel',
    })
  );
  const [ring, setRing] = useState(
    avatar({
      variant: 'ring',
    })
  );
  const [sunset, setSunset] = useState(
    avatar({
      variant: 'sunset',
    })
  );

  const handleClick = useCallback((size: number) => {
    setPic(
      avatar({
        variant: 'bauhaus',
        size,
      })
    );
    setBeam(
      avatar({
        variant: 'beam',
        size,
      })
    );
    setMarble(
      avatar({
        variant: 'marble',
        size,
      })
    );
    setPixel(
      avatar({
        variant: 'pixel',
        size,
      })
    );
    setRing(
      avatar({
        variant: 'ring',
        size,
      })
    );
    setSunset(
      avatar({
        variant: 'sunset',
        size,
      })
    );
  }, []);

  return (
    <div>
      <h1>Web</h1>

      <div
        className={css`
          display: flex;
          align-items: center;
          margin-bottom: 1rem;

          & button {
            flex: 0 1;
            margin-right: 1rem;
          }
        `}
      >
        <Button onClick={() => handleClick(40)}>small</Button>
        <Button onClick={() => handleClick(80)}>medium</Button>
        <Button onClick={() => handleClick(128)}>large</Button>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: pic,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: beam,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: marble,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: pixel,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: ring,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: sunset,
        }}
      ></div>
    </div>
  );
}
