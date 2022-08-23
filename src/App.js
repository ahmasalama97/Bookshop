import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Screen from "./components/MainScreen/Screen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-6 py-4 bg-[#f3e7dd]">
        <Screen />
      </div>
    </QueryClientProvider>
  );
}
export default App;
