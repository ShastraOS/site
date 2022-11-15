import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const Avatars = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://github.com/vivekpal1.png"
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        Vivek Pal
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://github.com/akshatcoder-hash.png"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        Akshat Sharma
      </Avatar.Fallback>
    </Avatar.Root>
    {/* <Avatar.Root className="AvatarRoot">
      <Avatar.Fallback className="AvatarFallback"></Avatar.Fallback>
    </Avatar.Root> */}
  </div>
);

export default Avatars;