import CenterFeed from "./components/CenterFeed";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto min-h-screen flex gap-5 bg-gray-500">
      <Menu />
      <CenterFeed />
      <Sidebar />
    </div>
  );
}

export default App;
