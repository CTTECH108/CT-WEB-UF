/// <reference types="react" />

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements extends React.IntrinsicElements {}
    interface IntrinsicAttributes extends React.Attributes {}
  }
}