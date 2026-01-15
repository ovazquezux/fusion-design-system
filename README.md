# Figma → Builder.io Fusion → Storybook Workflow

A complete design system workflow that connects Figma designs to Storybook components through Builder.io Fusion, built on MUI Material with dark theme support.

## 🎨 Architecture

```
┌─────────────┐     ┌──────────────────┐     ┌────────────────┐
│   Figma     │ ──► │ Builder.io Fusion │ ──► │   Storybook    │
│  (Design)   │     │   (Integration)   │     │ (Documentation)│
└─────────────┘     └──────────────────┘     └────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  MUI Components  │
                    │   (Dark Theme)   │
                    └──────────────────┘
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Storybook

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### 3. Configure Builder.io

1. Go to [Builder.io](https://builder.io) and create/login to your account
2. Create a new space or use existing one
3. Get your Public API Key from Settings → API Keys
4. Update `src/builder/config.ts` with your API key:

```typescript
export const BUILDER_API_KEY = 'your-api-key-here';
```

## 📁 Project Structure

```
src/
├── builder/           # Builder.io Fusion configuration
│   ├── config.ts      # Builder.io initialization
│   ├── components.ts  # Component registrations for Fusion
│   └── index.ts       # Exports
├── components/        # MUI-based React components
│   ├── Accordion/     # FAQ Accordion component
│   ├── Button/        # Primary button component
│   ├── Card/          # Content card component
│   ├── Form/          # Form input component
│   └── Toast/         # Notification component
├── theme/             # MUI theme configuration
│   └── index.ts       # Dark/Light theme definitions
stories/               # Storybook stories
├── Accordion.stories.ts
├── MUIButton.stories.ts
├── Card.stories.ts
├── Form.stories.ts
└── Toast.stories.ts
```

## 🎯 The Workflow

### Step 1: Design in Figma

1. Create your components in Figma following MUI design patterns
2. Use consistent naming conventions (Button, Card, Accordion, etc.)
3. Set up variants that match your component props

### Step 2: Import to Builder.io Fusion

1. Install the Builder.io Figma plugin
2. Select your Figma frame/component
3. Click "Figma Import" in Builder.io
4. Fusion will convert your design to components

### Step 3: Connect to Your Code

Builder.io Fusion looks for registered components. Your components are registered in `src/builder/components.ts`:

```typescript
import { Builder } from '@builder.io/react';
import { Button } from '../components/Button';

Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [
    { name: 'label', type: 'string', defaultValue: 'Click Me' },
    { name: 'variant', type: 'string', enum: ['primary', 'secondary'] },
    // ... more props
  ],
});
```

### Step 4: View in Storybook

Your components appear in Storybook with:
- Interactive controls for all props
- Theme switching (dark/light)
- Auto-generated documentation
- Accessibility checks

## 🌙 Dark Theme

The project defaults to dark theme. Toggle between themes in Storybook using the toolbar.

Theme configuration is in `src/theme/index.ts`:

```typescript
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212', paper: '#1e1e1e' },
    // ...
  },
});
```

## 📦 Available Components

| Component | Description | Variants |
|-----------|-------------|----------|
| Accordion | Collapsible FAQ sections | Default, Multiple |
| Button | Primary interaction button | Primary, Secondary, Text, Outlined |
| Card | Content container | With Image, With Actions |
| Form | Input collection | Contact, Login, Registration |
| Toast | Notification alerts | Success, Error, Warning, Info |

## 🔗 Figma Code Connect

To link Figma components to your code:

1. Update `figma.config.json` with your Figma node IDs
2. Use the Figma Code Connect plugin
3. Components will show code snippets in Figma

## 📚 Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build static Storybook |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |

## 🛠 Tech Stack

- **React 19** - UI Framework
- **MUI v7** - Component library base
- **Storybook 10** - Component documentation
- **Builder.io** - Figma integration
- **Vite** - Build tool
- **TypeScript** - Type safety

## 🎨 Customizing Your Theme

Edit `src/theme/index.ts` to match your brand:

```typescript
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#YOUR_PRIMARY_COLOR',
    },
    secondary: {
      main: '#YOUR_SECONDARY_COLOR',
    },
  },
  // Add component overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
```

## 🤝 Contributing

1. Add new components in `src/components/`
2. Register them in `src/builder/components.ts`
3. Create stories in `stories/`
4. Update `figma.config.json` for Code Connect

## 📄 License

ISC
