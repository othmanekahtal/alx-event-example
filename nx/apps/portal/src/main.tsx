import { StrictMode } from 'react';
import './styles.css';

import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Badge } from '@org/ui';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Badge variant="active" label="active" />
              This is the generated root route.{' '}
              <Link to="/page-2" className="underline">
                Click here for page 2.
              </Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div className="underline">
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </BrowserRouter>
  </StrictMode>
);
