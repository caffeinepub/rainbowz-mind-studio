import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurMethodPage from './pages/OurMethodPage';
import ProgramsPage from './pages/ProgramsPage';
import ResultsOutcomesPage from './pages/ResultsOutcomesPage';
import ParentsGuidePage from './pages/ParentsGuidePage';
import ContactBookDemoPage from './pages/ContactBookDemoPage';

// Root route with layout
const rootRoute = createRootRoute({
  component: SiteLayout,
});

// Define all page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const methodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-method',
  component: OurMethodPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/programs',
  component: ProgramsPage,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/results',
  component: ResultsOutcomesPage,
});

const parentsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/parents-guide',
  component: ParentsGuidePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactBookDemoPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  methodRoute,
  programsRoute,
  resultsRoute,
  parentsGuideRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Scroll to top on navigation
function ScrollToTop() {
  const location = window.location;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  );
}
