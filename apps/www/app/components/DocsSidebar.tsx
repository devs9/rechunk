import {CaretDownIcon, CaretRightIcon} from '@radix-ui/react-icons';
import {NavLink, useLocation} from '@remix-run/react';
import {type PropsWithChildren, useEffect, useState} from 'react';

import {type DocsSidebarType} from '~/docs/menu';
import {useDoc} from '~/hooks/useDoc';
import {cn} from '~/lib/utils';

type DocsSidebarProps = {
  menu: DocsSidebarType;
};

export function DocsSidebar({menu}: DocsSidebarProps) {
  return (
    <nav>
      {menu.map((category, index) => {
        return (
          <DocsSidebarItem key={index} id={category.id}>
            <DocsSidebarHeader>{category.title}</DocsSidebarHeader>
            {category.items.map(it => {
              return (
                <NavLink
                  key={it.id}
                  to={it.pathname}
                  className={({isActive}) =>
                    cn(
                      'relative flex items-center justify-between rounded-md px-3 py-2 lg:text-sm',
                      isActive
                        ? 'bg-blue-200 text-black'
                        : 'text-gray-600 hover:bg-blue-100',
                    )
                  }>
                  {it.title}
                </NavLink>
              );
            })}
          </DocsSidebarItem>
        );
      })}
    </nav>
  );
}

export function DocsMobileView({children}: PropsWithChildren) {
  const {title} = useDoc() ?? {};
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
      className="group relative flex h-full flex-col lg:hidden">
      <summary className="_no-triangle flex cursor-pointer select-none items-center gap-2 border-b-2 border-gray-50 bg-white px-2 py-3 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 dark:active:bg-gray-700">
        <div className="flex items-center gap-2">
          <CaretRightIcon aria-hidden className="size-5 group-open:hidden" />
          <CaretDownIcon
            aria-hidden
            className="hidden size-5 group-open:block"
          />
        </div>
        <div className="whitespace-nowrap font-bold">{title}</div>
      </summary>
      <div className="absolute min-h-[30vh] w-full overflow-auto overscroll-contain rounded-b-3xl bg-white p-3 shadow-2xl dark:border-gray-700 dark:bg-gray-900 dark:shadow-black">
        {children}
      </div>
    </details>
  );
}

export function DocsDesktopView({children}: PropsWithChildren) {
  return (
    <div className="mt-2 hidden w-[--nav-width] flex-col self-start overflow-auto py-2 pl-6 lg:flex">
      {children}
    </div>
  );
}

function DocsSidebarHeader({children}: PropsWithChildren) {
  return (
    <summary
      className={cn(
        '_no-triangle block cursor-pointer select-none rounded-md px-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-100',
        'hover:bg-gray-100 active:bg-gray-200',
      )}>
      <div className="flex h-5 w-full items-center justify-between px-2 font-bold">
        {children}
        <CaretRightIcon aria-hidden className="size-5 group-open:hidden" />
        <CaretDownIcon aria-hidden className="hidden size-5 group-open:block" />
      </div>
    </summary>
  );
}

function DocsSidebarItem({children, id}: PropsWithChildren<{id: string}>) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [, , category] = location.pathname.split('/');
  const isActive = category === id;

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  return (
    <details
      open={isOpen}
      className="group relative flex flex-col"
      onToggle={e => setIsOpen(e.currentTarget.open)}>
      {children}
    </details>
  );
}
