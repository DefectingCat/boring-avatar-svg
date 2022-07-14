import { Button } from 'ui';
import hello from 'boring-avatar-svg';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <h2>{hello()}</h2>
      <Button />
    </div>
  );
}
