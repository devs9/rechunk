import {json, Outlet, useLoaderData} from '@remix-run/react';

import {
  DocsDesktopView,
  DocsMobileView,
  DocsSidebar,
} from '~/components/DocsSidebar';
import {Header} from '~/components/Header';
import {docsSidebar} from '~/docs/menu';

export const loader = async () => {
  return json({docsMenu: docsSidebar});
};

export default function DocsLayout() {
  const {docsMenu} = useLoaderData<typeof loader>();

  return (
    <>
      <Header>
        <DocsMobileView>
          <DocsSidebar menu={docsMenu} />
        </DocsMobileView>
      </Header>

      <div className="block [--nav-width:theme(spacing.72)] lg:flex">
        <DocsDesktopView>
          <DocsSidebar menu={docsMenu} />
        </DocsDesktopView>
        <div className="mt-2 flex min-h-[80vh] flex-col py-2 lg:ml-3 lg:w-[calc(100%-var(--nav-width))] lg:pl-6 xl:pl-10 2xl:pl-12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
