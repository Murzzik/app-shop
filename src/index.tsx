import React from 'react';
import { createRoot } from 'react-dom/client';

export const Shop: React.FC = () => <p>log</p>;

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<Shop />);
