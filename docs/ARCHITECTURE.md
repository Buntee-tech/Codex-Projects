# Architecture

This document describes the high-level architecture of "Territory Wars" (working title), an original browser-based 2D real-time territory conquest strategy game.

## Directory Structure

The project is structured into the following main directories to enforce separation of concerns:

- `client/`: Contains the frontend application code (rendering, UI, input handling, and network communication).
- `core/`: Contains the fundamental game rules, simulation logic, and game state. It must remain pure and platform-agnostic.
- `server/`: Contains the authoritative multiplayer server (room management, connections, relaying commands, and server-side logic).
- `shared/`: Contains common data structures, schemas, constants, and types used by both the client and the server.
- `tests/`: Contains automated tests (using Vitest) ensuring the correctness of the various components, especially `core/`.
- `assets/`: Contains original game assets such as images, sprites, and sounds.
- `docs/`: Contains project documentation, including architecture, roadmap, and game design.

## Separation of Concerns

### Core (`core/`)
The `core/` directory is the heart of the game. It contains the deterministic game simulation logic.
- **Rules:** Must not depend on any environment-specific APIs (no browser APIs, DOM, Canvas, WebSockets, or Node.js specific modules).
- **Responsibilities:** Game tick processing, unit movement, collision detection, territory control calculations, resource generation, and combat resolution.

### Client (`client/`)
The client is responsible for presenting the game state to the player and gathering input.
- **Rendering:** Uses HTML5 Canvas 2D for drawing the game state.
- **UI:** Built using standard HTML and CSS.
- **Input:** Listens to mouse and keyboard events, translates them into game actions, and sends them to the local `core` simulation (or to the server in multiplayer).
- **Communication:** Manages the WebSocket connection to the server for multiplayer sessions.
- **Build:** Uses Vite for fast development and building.

### Server (`server/`)
The server acts as the authoritative source of truth during multiplayer matches.
- **Responsibilities:** Accepts WebSocket connections, manages game rooms, authenticates players, coordinates the start of a match, relays player commands, and optionally runs the `core` simulation to prevent cheating.
- **Environment:** Runs on Node.js.

### Shared (`shared/`)
A common library of types and schemas that ensure the client and server speak the same language.
- **Contents:** Network message payloads, configuration constants (e.g., tick rate, map sizes), and TypeScript interfaces.

## Technology Stack
- **Language:** TypeScript
- **Frontend Build/Dev Tool:** Vite
- **Rendering:** HTML5 Canvas 2D, HTML, CSS
- **Backend:** Node.js, WebSockets
- **Testing:** Vitest
- **Package Manager:** npm
- **Version Control:** Git

## Development Phases
We will initially focus on a single-player / local simulation. The client will directly run the `core` simulation to process game logic. Later, we will implement the multiplayer aspect by introducing the Node.js WebSocket server and synchronizing the `core` simulations between clients and the authoritative server.
