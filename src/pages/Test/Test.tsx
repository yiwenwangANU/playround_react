import type { FC } from "react";

const Test: FC = () => (
  <div className="fixed inset-0 flex flex-col text-center">
    <header className="h-12 bg-orange-700">Header</header>
    <div className="flex grow">
      <nav className="w-20 bg-orange-500">Navigation</nav>
      <main className="grow bg-orange-200">Main</main>
      <aside className="w-20 bg-amber-400">Sidebar</aside>
    </div>
    <footer className="h-20 bg-gray-600">Footer</footer>
  </div>
);

export default Test;
