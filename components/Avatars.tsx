import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Avatars = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      <div style={{ display: 'flex', gap: 10, marginTop: 10, alignItems: 'center' }}>
      <span style={{ marginRight: 10 }}>Vivek</span>
        <a href="https://github.com/vivekpal1" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com/vivekpal1" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
      {/* <Flex css={{ justifyContent: 'center', mb: '$1', marginTop: 8 }}>
        <Separator size="2" />
      </Flex>
      <span style={{ fontSize: 15 }}>Founder</span> */}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      <div style={{ display: 'flex', gap: 10, marginTop: 10, alignItems: 'center' }}>
        <span style={{ marginRight: 10 }}>Akshat</span>
        <a href="https://github.com/akshatcoder-hash" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com/akshatwts" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
      {/* <Flex css={{ justifyContent: 'center', mb: '$1', marginTop: 8 }}>
        <Separator size="2" />
      </Flex>
      <span style={{ fontSize: 15 }}>DevOps Lead</span> */}
    </div>
  </div>
);

export default Avatars;