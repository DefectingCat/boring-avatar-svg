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

  const handleClick = useCallback((size: number) => {
    setPic(
      avatar({
        variant: 'bauhaus',
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
        <Button onClick={() => handleClick(120)}>large</Button>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: pic,
        }}
      ></div>
    </div>
  );
}
