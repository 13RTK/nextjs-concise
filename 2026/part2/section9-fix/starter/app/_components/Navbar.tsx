'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { UserButton } from '@/components/auth/user/user-button';

export function Navbar() {
  return (
    <NavigationMenu className='bg-blue-100'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href='/'>Home</Link>}
          ></NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className='col-start-8'>
          <UserButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
