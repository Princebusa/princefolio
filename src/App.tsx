import Home from "./pages/home";
import Header from "./components/header";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-4 px-4 py-4 pb-28 sm:px-0 sm:pb-32">
      <Header />
      <Home />
    </div>
  );
}
