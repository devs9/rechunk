import {CaretRightIcon} from '@radix-ui/react-icons';
import {NavLink, useLocation} from '@remix-run/react';
import {type PropsWithChildren, useEffect, useState} from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '~/components/ui/sidebar';
import {
  type DocsMenuItemType,
  docsSidebar,
  type DocsSidebarType,
} from '~/docs/menu';
import {useDoc} from '~/hooks/useDoc';

function DocsSideBarMenu({items = []}: {items: DocsSidebarType}) {
  return (
    <>
      {items.map(({id, title, items}) => (
        <DocsSidebarMenuItem id={id} key={id} title={title}>
          <DocsSidebarMenuContent items={items} />
        </DocsSidebarMenuItem>
      ))}
    </>
  );
}

function DocsSidebarMenuItem({
  id,
  title,
  children,
}: PropsWithChildren<{id: string; title: string}>) {
  const [, , category] = useLocation().pathname.split('/');

  return (
    <SidebarMenuItem className="list-none py-1">
      <Collapsible className="group/collapsible" defaultOpen={category === id}>
        <CollapsibleTrigger className="w-full" asChild>
          <SidebarMenuButton className="[&>svg]:size-6">
            <SidebarGroupLabel className="font-pixelify text-lg tracking-tight text-primary">
              {title}
            </SidebarGroupLabel>
            <CaretRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {children}
      </Collapsible>
    </SidebarMenuItem>
  );
}

function DocsSidebarMenuContent({items = []}: {items: DocsMenuItemType[]}) {
  return (
    <CollapsibleContent>
      <SidebarMenuSub>
        {items.map(({id, title, pathname}) => (
          <SidebarMenuSubItem key={id}>
            <SidebarMenuSubButton
              asChild
              className="rounded-s border-transparent hover:bg-blue-100">
              <NavLink to={pathname}>{title}</NavLink>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        ))}
      </SidebarMenuSub>
    </CollapsibleContent>
  );
}

function DocsSidebarDesktopView({children}: PropsWithChildren) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky bottom-0 top-[var(--header-height)] -ml-3 hidden h-[calc(100vh-var(--header-height))] w-[--sidebar-width] flex-col gap-3 self-start overflow-auto pb-10 lg:flex">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{children}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function DocsSidebarMobileView({children}: PropsWithChildren) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const doc = useDoc();

  useEffect(() => {
    setIsOpen(false);
  }, [location.key]);

  return (
    <details
      open={isOpen}
      onToggle={event => {
        if (event.defaultPrevented) return;
        setIsOpen(event.currentTarget.open);
      }}
      className="group sticky top-[var(--header-height)] flex h-full w-full flex-col lg:hidden">
      <summary className="flex cursor-pointer select-none items-center gap-2 border-b-2 border-gray-50 bg-white px-2 py-3 text-sm font-medium hover:bg-gray-50 active:bg-gray-100">
        <div className="whitespace-nowrap font-bold">{doc?.title}</div>
      </summary>
      <div className="absolute min-h-[30vh] w-full overflow-auto overscroll-contain rounded-b-3xl bg-white p-3 shadow-2xl">
        {children}
      </div>
    </details>
  );
}

export function DocsSidebar() {
  return (
    <>
      <DocsSidebarMobileView>
        <DocsSideBarMenu items={docsSidebar} />
      </DocsSidebarMobileView>
      <DocsSidebarDesktopView>
        <DocsSideBarMenu items={docsSidebar} />
      </DocsSidebarDesktopView>
    </>
  );
}
