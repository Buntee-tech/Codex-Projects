# Game Design Document: Territory Wars

**Working Title:** Territory Wars
**Genre:** Browser-based 2D Real-Time Strategy (RTS) / Territory Control

## Core Concept
Territory Wars is a real-time strategy game focused on macro-level territory control rather than micro-managing individual units. Players compete to capture nodes on a map. Controlling nodes grants resources, which are used to spawn units. Units are sent along paths connecting nodes to attack enemy territories or defend friendly ones. The ultimate goal is to eliminate all opponents by capturing their Headquarters (HQ).

## Visual Style
- **Perspective:** Top-down 2D.
- **Art Style:** Clean, stylized vectors or pixel art. Original assets must be created.
- **UI:** Minimalist HTML/CSS overlays on top of a Canvas 2D game area.

## Gameplay Mechanics

### 1. Map & Nodes
The game map consists of interconnected strategic points called **Nodes**.
- **Paths:** Nodes are connected by predetermined paths. Units can only travel along these paths.
- **Types of Nodes:**
  - **Headquarters (HQ):** Each player starts with one HQ. If a player loses their HQ, they are eliminated.
  - **Resource Nodes:** Neutral or player-controlled nodes that generate resources over time.
  - **Choke Points:** Nodes that do not generate resources but are strategically placed to control movement across the map.

### 2. Economy
- **Resource (Energy/Credits):** There is a single primary resource used to build units.
- **Generation:** Resources are generated passively over time based on the number and type of controlled nodes.

### 3. Units & Combat
Players do not control units with traditional RTS free-movement. Instead, they select a source node they control and a connected target node.
- **Spawning:** Units are spawned at controlled nodes by spending resources.
- **Movement:** Units travel automatically along the path towards their target node.
- **Combat Resolution:**
  - When opposing units meet on a path, they automatically engage in combat.
  - When units arrive at an enemy node, they attack the node's defenders or the node itself.
  - Combat relies on simple numerical superiority or rock-paper-scissors mechanics (to be refined).

### 4. Capture Mechanics
- A node has a "health" or "capture" bar.
- Attacking units reduce this bar. Once reduced to zero, the node becomes neutral.
- Further presence of units will capture the node for the attacking player.

## Win/Loss Conditions
- **Victory:** Be the last player remaining by capturing all enemy Headquarters.
- **Defeat:** Lose your Headquarters to enemy forces.

## Player Interaction
- **Selection:** Click to select a friendly node.
- **Action:** Right-click (or drag) to a connected node to send units.
- **UI:** Buttons or hotkeys to select which type of unit to spawn or what percentage of forces to send.

## Scale
- **Match Size:** 2 to 4 players (initially 2).
- **Match Duration:** 5 to 15 minutes.
- **Map Size:** Maps fit within a standard browser window (potentially with panning/zooming for larger maps later).
