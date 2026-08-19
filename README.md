# SHACMAN Dealership Platform — Matchisa Logistics

A full-stack, enterprise-grade monorepo codebase built to power the dynamic commercial truck showcase, logistics data tracker, and inventory management engine for **Matchisa Logistics**. 

This system uses a modular monorepo architectural pattern to enforce strict data symmetry, shared business logic, and high-performance asset compilation between our frontend application and our backend server ecosystem.

---

## 📂 Architecture Overview

The system is organized into decoupled applications (`apps/`) and local libraries (`packages/`) tied together seamlessly via native **npm workspaces**.

```text
SHACMAN/
├── apps/
│   ├── web/                # React 19 Frontend (Vite, TypeScript, MUI)
│   └── api/                # Node.js Backend (Express, TypeScript, Knex)
├── packages/
│   └── shared-types/       # Local Package: Data structures & schemas
├── .github/workflows/      # Automated deployment engine definitions
├── package.json            # Root workspace configuration
└── tsconfig.json           # Global workspace compilation rules
```

---

## 🛠️ Core Stack & Dependency Breakdown

### 1. Architectural Backbone (Monorepo Workspace)
*   **npm Workspaces**: Manages internal linking, allowing `apps/web` and `apps/api` to resolve `@repo/types` locally without manual build steps or publishing to npm registry.
*   **TypeScript**: Enforces static type safety end-to-end across the frontend and backend.

### 2. Frontend Layer (`apps/web`)
*   **React 19 & Vite**: Ultra-fast execution core and hot-module bundling for UI rendering.
*   **Material UI (MUI)**: Clean UI component design system (data tables, layout grids, dashboards).
*   **React Router Dom**: Client-side routing engine mapping views cleanly (Showcase, Admin portal).
*   **Axios**: Promise-based HTTP client for secure communications with our backend API.
*   **TanStack React Query**: Advanced background fetching, state management, and request caching wrapper around Axios.
*   **Vite TSConfig Paths**: Maps runtime modules directly to raw code paths inside local libraries during development.

### 3. Backend Layer (`apps/api`)
*   **Express**: Minimalist, light web framework for serving endpoints and routing API hooks.
*   **ts-node-dev**: Monorepo compilation engine supporting file watching and zero-delay automatic restarts on backend file edits.
*   **Knex & pg**: SQL query builder and low-level PostgreSQL driver optimized to connect securely to your runtime databases.
*   **Joi**: Strict runtime request layout and object validation wrapper protecting backend queries.
*   **Multer**: Form data multi-part engine designed to securely accept truck image assets uploaded via dashboard panels.
*   **Cookie Parser**: Secure extraction engine designed to read and track JSON Web Tokens (JWT) for admin session workflows.
*   **Dotenv**: Environment orchestration loader separating operational credentials securely from shared files.

### 4. Shared Package (`packages/shared-types`)
*   **`@repo/types`**: An embedded library exporting strict schemas, data contracts, and input interfaces used across apps. It provides a single point of change for data structures.

---

## 🚀 Getting Started (Local Development)

### Prerequisites
Ensure you have **Node.js v20+** and **npm v10+** installed on your server or system environment.

### 1. Installation & Link Sync
From the project root directory (`~/SHACMAN`), pull all dependencies and establish underlying folder symlinks automatically:
```bash
npm install
```

### 2. Launch Services Manually

To boot the **Vite React Frontend** directly:
```bash
npm run dev -w web
# Available locally at: http://localhost:5173
```

To boot the **Express Backend Server** directly:
```bash
npm run dev -w api
# Available locally at: http://localhost:5000
```

---

## 🛢️ Environment Configuration

Create a `.env` file inside `apps/api/` (and root during database migrations) containing operational system keys:

```env
PORT=5000
DATABASE_URL=postgres://username:password@localhost:5432/shacman_db
JWT_SECRET=your_super_secret_cryptographic_key
```

---

## 🚚 Automated Deployment (CI/CD Pipeline)

This platform is configured with an integrated **GitHub Actions Continuous Deployment** engine located at `.github/workflows/deploy.yml`. 

Whenever code changes are committed and executed with a `git push origin main` command, GitHub automatically:
1. Provisions an isolated execution context.
2. Resolves shared configurations across packages.
3. Packages runtime dependencies and triggers `npm run build -w web`.
4. Deploys the built static code layers securely to your live hosting production directories using **SFTP/SSH Integration Secrets**.
