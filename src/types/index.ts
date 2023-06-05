import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  [key: string]: any;
};
