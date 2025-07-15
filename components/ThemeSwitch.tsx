'use client' // Client-side component for theme switching

// React hooks and Next.js theme utilities
import { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes' // Theme management hook
// Headless UI components for accessible dropdown menu
import {
  Menu, // Dropdown menu container
  MenuButton, // Menu trigger button
  MenuItem, // Individual menu item
  MenuItems, // Menu items container
  Radio, // Radio button for theme selection
  RadioGroup, // Radio button group
  Transition, // Animation wrapper
} from '@headlessui/react'

// Icon components for different theme states
// Sun icon - represents light theme
const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

// Moon icon - represents dark theme
const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

// Monitor icon - represents system theme (follows OS preference)
const Monitor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
    <line x1="7" y1="17" x2="13" y2="17"></line>
    <line x1="10" y1="13" x2="10" y2="17"></line>
  </svg>
)

// Blank placeholder - prevents layout shift during hydration
const Blank = () => <svg className="h-6 w-6" />

// Theme switcher component with dropdown menu
const ThemeSwitch = () => {
  // Track component mount state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)
  // Get theme state and setter from next-themes
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Set mounted to true after component mounts on client
  // This prevents hydration mismatch between server and client
  useEffect(() => setMounted(true), [])

  return (
    <div className="flex items-center">
      {/* Dropdown menu for theme selection */}
      <Menu as="div" className="relative inline-block text-left">
        {/* Menu trigger button with theme icon */}
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center">
          <MenuButton aria-label="Theme switcher">
            {/* Show appropriate icon based on current theme, or blank during SSR */}
            {mounted ? resolvedTheme === 'dark' ? <Moon /> : <Sun /> : <Blank />}
          </MenuButton>
        </div>
        
        {/* Animated dropdown menu */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100" // Enter animation
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75" // Exit animation
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Menu items container */}
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black focus:outline-hidden dark:bg-gray-800">
            {/* Radio group for theme selection */}
            <RadioGroup value={theme} onChange={setTheme}>
              <div className="p-1">
                {/* Light theme option */}
                <Radio value="light">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        className={`${focus ? 'bg-primary-600 text-white' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Sun />
                        </div>
                        Light
                      </button>
                    )}
                  </MenuItem>
                </Radio>
                
                {/* Dark theme option */}
                <Radio value="dark">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        className={`${
                          focus ? 'bg-primary-600 text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Moon />
                        </div>
                        Dark
                      </button>
                    )}
                  </MenuItem>
                </Radio>
                
                {/* System theme option (follows OS preference) */}
                <Radio value="system">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        className={`${
                          focus ? 'bg-primary-600 text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Monitor />
                        </div>
                        System
                      </button>
                    )}
                  </MenuItem>
                </Radio>
              </div>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
