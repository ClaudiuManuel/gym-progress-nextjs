'use client';

import { BarChart, Dumbbell, Calendar, ClipboardList, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/', icon: BarChart, label: 'Dashboard' },
  { href: '/workouts', icon: ClipboardList, label: 'Workouts' },
  { href: '/exercises', icon: Dumbbell, label: 'Exercises' },
  { href: '/schedule', icon: Calendar, label: 'Schedule' },
];

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <nav className="hidden space-x-4 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${pathName === item.href ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:bg-gray-100'} dark:text-gray-300 dark:hover:bg-gray-700`}
        >
          <item.icon className="mr-2 h-5 w-5" />
          {item.label}
        </a>
      ))}
    </nav>
  );
};
export default NavMenu;
