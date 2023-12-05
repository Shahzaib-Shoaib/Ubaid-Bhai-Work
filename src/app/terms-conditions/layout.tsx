import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default HomeLayout;