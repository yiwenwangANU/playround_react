import type { FC } from "react";

const HolyGrailPage: FC = () => (
  <div className="fixed inset-0 flex flex-col text-center">
    <header className="h-15 bg-orange-500">Header</header>
    <div className="flex grow">
      <nav className="w-25 bg-orange-400">Navigation</nav>
      <main className="grow bg-orange-200">Main</main>
      <aside className="w-25 bg-orange-300">Sidebar</aside>
    </div>
    <footer className="h-25 bg-gray-500">Footer</footer>
  </div>
);

export default HolyGrailPage;
