import { Button } from 'ui';
import avatar from 'boring-avatar-svg';

export default function Web() {
  const defaultAvatar = avatar({
    variant: 'bauhaus',
  });

  return (
    <div>
      <h1>Web</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: defaultAvatar,
        }}
      ></div>
      <Button />
    </div>
  );
}
