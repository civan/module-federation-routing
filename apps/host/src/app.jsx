import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import PageA from './pages/page-a';
import PageB from './pages/page-b';
import Home from './pages/home';
import './styles.css';

const RemoteRootApp = React.lazy(() => import('remote/RemoteRootApp'))

export default function App() {
  return (
    <div className="app">
      <header>
      <h1>HxPoc</h1>
      <h2>This the root App in Hxp platform</h2>
      </header>
      <nav className="horizontal-nav">
        <Link to="/page-a">HXP/Page A</Link>
        <Link to="/page-b">HXP/Page B</Link>
        <Link to="/remote">Remote Analytics</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
          <Route path="/remote/*" element={<RemoteRootApp />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
