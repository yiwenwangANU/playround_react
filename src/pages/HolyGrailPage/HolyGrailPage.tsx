import type { FC } from "react";

const HolyGrailPage: FC = () => (
  <div className="fixed inset-0 flex flex-col text-center">
    <header className="h-12 bg-orange-600">Header</header>
    <div className="flex grow">
      <nav className="w-25 bg-orange-500">Navigation</nav>
      <main className="grow bg-orange-200">Main</main>
      <aside className="w-25 bg-orange-400">SideBar</aside>
    </div>
    <footer className="h-25 bg-gray-700">Footer</footer>
  </div>
);

export default HolyGrailPage;
