import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';

import { Shop } from './shop';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<Shop />);
