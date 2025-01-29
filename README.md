# iLang

The landing page for my german-teaching business. It's an Astro-based web project featuring reusable components and a clean design.

## Features

- Built with [Astro](https://astro.build/)
- Integrated with [Tailwind CSS](https://tailwindcss.com/) for styling
- Uses [Astro Icon](https://www.npmjs.com/package/astro-icon) for icons
- TypeScript support with strict configuration
- Modular and reusable components
- Responsive design

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/repository-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd repository-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Development

Run the project in development mode:

```sh
npm run dev
```

The site will be available at `http://localhost:4321/` (default Astro dev server port).

### Build

To generate the production-ready build:

```sh
npm run build
```

The built files will be located in the `dist` directory.

## Configuration

### Astro Configuration

The project is configured via `astro.config.mjs`:

```js title:"astro.config.mjs"
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://ilang.kerschbaumer",
  base: "/",
});
```

### Tailwind Configuration

The project uses a customized Tailwind CSS setup in `tailwind.config.mjs`, which includes:

- Fluid typography
- Custom color themes
- Dynamic level-based styles

```js title:"tailwind.config.mjs"
export default {
  content: {
    files: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./public/**/*.{html,js}",
    ],
  },
  plugins: [fluid],
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--bkg))",
        "txt-header": "hsl(var(--txt-header))",
        "txt-body": "hsl(var(--txt-body))",
        accent1: "hsl(var(--accent1))",
        accent2: "hsl(var(--accent2))",
      },
      fontFamily: {
        sans: ["lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

### TypeScript Configuration

The project follows Astro's strict TypeScript configuration defined in `tsconfig.json`:

```json title:"tsconfig.json"
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

## Project Structure

```
📦 src
 ┣ 📂 assets        # Contains images, icons, and other static assets
 ┣ 📂 components    # Reusable UI components for the project
 ┣ 📂 data          # JSON data files used throughout the project
 ┣ 📂 layouts       # Layout components for structuring pages
 ┣ 📂 pages         # The main pages of the application
 ┣ 📂 icons         # SVG icons used across the project
 ┣ 📜 styles.css    # Main global stylesheet
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
