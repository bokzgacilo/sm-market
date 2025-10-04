// components/ModelViewer.js
'use client';
import React, { useEffect } from 'react';
import '@google/model-viewer';

export default function ModelViewer(props) {
  useEffect(() => {
    // Ensure the custom element is defined on client
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
      {...props}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
