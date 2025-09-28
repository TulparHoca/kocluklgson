import { Toaster as SonnerToaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout, { useAppContext } from "./pages/AppLayout";
import Index from "./pages/Index";
import ProgramimSayfasi from "./pages/ProgramimSayfasi";
import NotFound from "./pages/NotFound";
import Statistics from "@/components/Statistics";
import AchievementsList from "@/components/AchievementsList";
import PracticePage from "./pages/PracticePage";
import { MarketPage } from "./pages/MarketPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
// YENİ SAYFANIN IMPORT'U EKLENDİ
import GecmisKayitlarSayfasi from "./pages/GecmisKayitlarSayfasi";

const queryClient = new QueryClient();

const StatisticsPage = () => {
  const { subjects, sessions } = useAppContext();
  return <Statistics subjects={subjects} sessions={sessions} />;
};
const AchievementsPage = () => {
  const { achievements } = useAppContext();
  return <AchievementsList achievements={achievements} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "program", element: <ProgramimSayfasi /> },
      { path: "practice", element: <PracticePage /> },
      { path: "statistics", element: <StatisticsPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "market", element: <MarketPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "settings", element: <SettingsPage /> },
      // YENİ SAYFANIN YOLU (ROUTE) EKLENDİ
      { path: "gecmis", element: <GecmisKayitlarSayfasi /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SonnerToaster position="top-center" />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;