# Personal Website

This is the source code for my personal website.

## Features

- Responsive design
- Navigation menu with links to different sections
- GitHub icon with link to profile
- Dark theme using Tailwind CSS

## GitHub Icon

The GitHub icon is displayed in both desktop and mobile views. In the desktop view, it is part of the navigation menu. In the mobile view, it is displayed next to the menu button.

### Desktop View
```html
<a href="https://github.com/albrightraj2021" className="px-3" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-github text-2xl px-3"></i>
</a>
```

### Mobile View
```html
<div className="md:hidden flex items-center">
  <a href="https://github.com/albrightraj2021" className="px-3" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github text-2xl pr-2"></i>
    Github
  </a>
  <button className="px-3" onClick={() => setIsOpen(!isOpen)}>
    <i className="fa-solid fa-bars pr-4 text-2xl"></i>
  </button>
</div>
```

## Theme

The website uses a dark theme with Tailwind CSS classes. The background color is set to `bg-zinc-800` and the text color is set to `text-zinc-50`.

### Example
```html
<div className="flex justify-between xl:py-5 py-4 bg-zinc-800 font-medium pl-3 text-zinc-50 xl:text-2xl text-xl fixed top-0 left-0 right-0 w-full z-10">
  <!-- ...existing code... -->
</div>
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/albrightraj2021/personal-website.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## License

This project is licensed under the MIT License.

