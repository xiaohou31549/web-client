# CLAUDE.md


This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Development Commands


### Node/JavaScript Commands
- **Install dependencies**: `yarn install`
- **Run development server**: `yarn dev`
- **Build for production**: `yarn build`
- **Start production server**: `yarn start`
- **Lint code**: `yarn lint`
- **Fix lint errors**: `yarn lint:fix`
- **Format code**: `yarn prettier`


### Development Tools
- **Next.js dev server**: Integrated with `yarn dev`
- **ESLint**: For code quality checking
- **Prettier**: For code formatting


## Branch Management & Git Workflow


### Branch Strategy
- **Main branch**: `main` - Production-ready code
- **Feature branches**: Work off `main` in small feature or bug fix branches


### Branch Naming Conventions
Use prefixes to categorize the type of work:
- **`feat/`**  - New features (e.g., `feat/add-clientele-section`, `feat/update-hero-design`)
- **`fix/`**  - Bug fixes (e.g., `fix/navbar-responsive-issue`, `fix/form-validation-error`)
- **`chore/`**  - Maintenance tasks (e.g., `chore/update-dependencies`, `chore/cleanup-code`)
- **`refactor/`**  - Code refactoring (e.g., `refactor/component-structure`)
- **`docs/`**  - Documentation updates (e.g., `docs/update-readme`)


### Including Ticket Numbers
When working with tickets, include the ticket number in the branch name:
- Format: `{type}/{description}-{TICKET-NUMBER}`
- Examples: `feat/user-dashboard-TICKET-123`, `fix/email-validation-TICKET-456`


### Git Commands for Branch Management
- **Create and switch to new feature branch**: `git checkout -b feat/feature-name main`
- **Switch branches**: `git checkout branch-name`
- **Push new branch to remote**: `git push -u origin branch-name`
- **Update current branch with main**: `git pull origin main`
- **List all branches**: `git branch -a`


### Workflow Guidelines
1. **Always branch from `main`**  for new features and fixes
2. **Keep branches small and focused**  - one feature/fix per branch
3. **Use descriptive branch names**  that clearly indicate the work being done
4. **Include ticket numbers**  when available for better tracking
5. **Regularly sync with main**  to avoid merge conflicts
6. **Create pull requests**  against `main` when work is complete
7. **Delete branches**  after successful merge to keep repository clean


### When Claude Should Create Branches
Claude should never work directly on the main branch


Claude should create a new branch when:
- Starting work on a new feature or significant change
- Fixing a bug that requires multiple commits
- Making changes that could be reviewed before merging
- Working on experimental or potentially breaking changes


Claude should work directly on the current branch when:
- The changes are relevant to the purpose of the current branch
- Explicitly instructed to work on the current branch


## Architecture Overview


This is a **Next.js 16** application with **React 19** frontend components, using **Material-UI (MUI) v7** for UI components. The system serves as a SaaS landing page template.


### Core Technology Stack
- **Framework**: Next.js 16.1.1, React 19.2.3
- **UI Library**: Material-UI (MUI) v7.3.6
- **Styling**: Emotion CSS-in-JS
- **Animation**: Framer Motion 12.23.26
- **Build Tool**: Next.js built-in Webpack
- **Package Manager**: Yarn 4.12.0


### Key Directories and Structure


#### Frontend (React/Next.js)
- **`src/app/`**: Next.js App Router pages and layouts
  - **`(default)/`**: Default landing page routes
  - **`api/`**: API routes
- **`src/blocks/`**: Reusable page sections/blocks
  - **`clientele/`**: Client logo showcase sections
  - **`contact-us/`**: Contact forms and information
  - **`cta/`**: Call-to-action sections
  - **`faq/`**: Frequently asked questions
  - **`feature/`**: Feature showcase sections
  - **`footer/`**: Footer components
  - **`hero/`**: Hero sections
  - **`integration/`**: Integration showcase
  - **`maintenance/`**: Error and maintenance pages
  - **`mega-menu/`**: Mega menu components
  - **`metrics/`**: Metrics and statistics sections
  - **`navbar/`**: Navigation bar components
  - **`other/`**: Miscellaneous sections
  - **`pricing/`**: Pricing tables
  - **`privacy-policy/`**: Privacy policy pages
  - **`pro-page/`**: Pro version showcase
  - **`small-hero/`**: Small hero sections
  - **`testimonial/`**: Customer testimonials
- **`src/components/`**: Reusable UI components
  - **`cards/`**: Card components
  - **`contact-us/`**: Contact form components
  - **`footer/`**: Footer sub-components
  - **`logo/`**: Logo variations
  - **`navbar/`**: Navbar sub-components
- **`src/contexts/`**: React context providers
- **`src/data/`**: Static data files
- **`src/hooks/`**: Custom React hooks
- **`src/icons/`**: Custom SVG icons
- **`src/images/`**: Image components and SVG graphics
- **`src/styles/`**: Global CSS files
- **`src/utils/`**: Utility functions and helpers
- **`src/views/`**: Landing page views with theme configurations


#### Configuration
- **`next.config.mjs`**: Next.js configuration
- **`package.json`**: Project dependencies and scripts
- **`.eslintrc`**: ESLint configuration
- **`.prettierrc`**: Prettier configuration
- **`src/config.js`**: Application configuration
- **`src/branding.json`**: Branding information


### Authentication & Authorization
- No built-in authentication system
- Can be extended with NextAuth.js or other authentication providers


### Styling Architecture
- **Material-UI v7**: Component library with theme support
- **Emotion**: CSS-in-JS for custom styling
- **Theme Provider**: Custom theme configuration in `src/components/ThemeProvider.jsx`
- **Color Utilities**: `src/utils/colorUtils.js` for color manipulation


### Component Organization
- **Blocks**: Large, reusable page sections that can be composed into full pages
- **Components**: Smaller, reusable UI elements used within blocks
- **Views**: Complete page compositions with theme configurations


### Data Management
- **Static Data**: Stored in `src/data/` directory
- **Component Props**: Data passed through component props
- **Context API**: For global state management (see `src/contexts/`)


## Development Guidelines


### Component Development
- **Reusability**: Create components that can be reused across multiple pages
- **Props**: Use TypeScript/PropTypes for type checking
- **MUI Integration**: Leverage MUI components and theme system
- **Accessibility**: Follow WCAG guidelines for accessibility


### Styling Guidelines
- **Theme Usage**: Use MUI theme for consistent styling
- **Responsive Design**: Implement responsive layouts using MUI breakpoints
- **CSS-in-JS**: Prefer Emotion for custom styling over plain CSS


### Performance Optimization
- **Code Splitting**: Use Next.js dynamic imports for large components
- **Image Optimization**: Use Next.js Image component for optimized images
- **Lazy Loading**: Implement lazy loading for non-critical components


## Deployment


### Production Build
- **Build command**: `yarn build`
- **Start production server**: `yarn start`
- **Environment Variables**: Managed via `.env` files


### Deployment Platforms
- **Vercel**: Recommended for Next.js applications
- **AWS**: Can be deployed on AWS with Amplify or EC2


## Additional Resources


- **Next.js Documentation**: https://nextjs.org/docs
- **Material-UI Documentation**: https://mui.com/material-ui/
- **Framer Motion Documentation**: https://www.framer.com/motion/