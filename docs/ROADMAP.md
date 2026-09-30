# Development Roadmap

This document outlines the milestones for developing "Territory Wars" (working title).

## Milestone 1: Project Skeleton & Core Setup
- [ ] Initialize Node project with Vite and Vitest.
- [ ] Set up the directory structure (`client/`, `core/`, `server/`, `shared/`, `tests/`, `assets/`, `docs/`).
- [ ] Configure TypeScript settings (strict mode, path aliases).
- [ ] Establish basic build scripts and CI/CD foundations.

## Milestone 2: Single-Player / Local Simulation Foundation
- [ ] **Core Logic:** Implement the foundational game loop (tick system) in `core/`.
- [ ] **Map System:** Design a grid-based or node-based map representation for territories.
- [ ] **Entities:** Define basic structures (Bases, Nodes) and moving units.
- [ ] **Client Rendering:** Create a basic Canvas 2D renderer in `client/` that reads the `core` state and draws simple shapes.
- [ ] **Local Integration:** Connect the `client` loop to the local `core` simulation to see the game state evolve.

## Milestone 3: Gameplay Mechanics (Single-Player)
- [ ] **Territory Control:** Implement logic for capturing and holding nodes/territories.
- [ ] **Resource Generation:** Create a basic economy where controlled territories generate resources.
- [ ] **Unit Spawning & Movement:** Allow players to spend resources to spawn units and command them to move.
- [ ] **Combat System:** Implement simple combat mechanics when opposing units meet or attack enemy territories.
- [ ] **UI:** Build HTML/CSS based UI for displaying resources, selecting units, and issuing commands.

## Milestone 4: Basic AI (Optional/Testing)
- [ ] Implement a rudimentary local AI to test game mechanics and provide an opponent in single-player mode.

## Milestone 5: Multiplayer Infrastructure
- [ ] **Server Setup:** Initialize the Node.js WebSocket server.
- [ ] **Room Management:** Implement logic for players to connect, create rooms, and join existing rooms.
- [ ] **Shared Protocols:** Define WebSocket message schemas in `shared/` for joining, leaving, and syncing state.

## Milestone 6: Multiplayer Gameplay Sync
- [ ] **Command Relaying:** Modify the client to send commands (e.g., "move unit", "spawn unit") to the server instead of executing them locally.
- [ ] **Server Authority:** The server receives commands, validates them, and broadcasts them to all clients in the room.
- [ ] **Deterministic Lockstep / State Sync:** Implement a mechanism to ensure all clients simulate the `core` game state in sync.

## Milestone 7: Polish and Assets
- [ ] Replace basic shapes with original sprite assets in `assets/`.
- [ ] Add sound effects and background music.
- [ ] Polish UI/UX (menus, game over screens, lobby).
- [ ] Balancing and tweaking game rules.

## Milestone 8: Deployment & Launch
- [ ] Configure production builds for both client (static hosting) and server (Node backend).
- [ ] Deploy the application to a staging environment.
- [ ] Final testing and public release.
