import {Outlet} from '@remix-run/react';

import {Header} from "~/components/Header";

export default function DocsLayout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header/>
      <Outlet/>
    </div>
  );
}
