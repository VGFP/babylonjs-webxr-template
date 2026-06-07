import { Mesh, Scene, Vector3 } from '@babylonjs/core';
import { PhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate';
import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';
import { HavokPlugin } from '@babylonjs/core/Physics/v2/Plugins/havokPlugin';
import HavokPhysics from '@babylonjs/havok';

let havokPromise: Promise<HavokPlugin> | null = null;

/**
 * Lazy singleton that loads the Havok WASM and constructs the Babylon plugin.
 * Subsequent calls return the same promise. The plugin can be reused across
 * scenes (each scene that wants physics calls `enablePhysics` with it).
 *
 * The `@babylonjs/havok` ESM bundle tries to fetch `HavokPhysics.wasm` next
 * to itself, but Vite's dev server doesn't expose files from inside
 * pre-bundled dependencies. We bypass that by routing the fetch through a
 * Vite plugin (`havok-internal/` middleware in `vite.config.ts`) which serves
 * the WASM from `node_modules`. The base URL is included so the same path
 * works in production builds where assets live under
 * `/babylonjs-webxr-template/`.
 */
export function getHavokPlugin(): Promise<HavokPlugin> {
    if (!havokPromise) {
        havokPromise = (async () => {
            const base = import.meta.env.BASE_URL.endsWith('/')
                ? import.meta.env.BASE_URL
                : `${import.meta.env.BASE_URL}/`;
            const havokInstance = await HavokPhysics({
                locateFile: (file: string) => `${base}havok-internal/${file}`,
            });
            return new HavokPlugin(true, havokInstance);
        })();
    }
    return havokPromise;
}

export const DEFAULT_GRAVITY = new Vector3(0, -9.81, 0);

// --- Die physics constants ---

/** Mass of a single die physics body. */
export const DIE_MASS = 0.01;
/** Bounciness of a die after a collision (0 = no bounce, 1 = perfect bounce). */
export const DIE_RESTITUTION = 0.35;
/** Friction of a die surface (0 = frictionless, 1 = max friction). */
export const DIE_FRICTION = 0.3;
/** Linear velocity damping (0 = no damping, higher = faster deceleration). */
export const DIE_LINEAR_DAMPING = 0.15;
/** Angular velocity damping (0 = no damping, higher = faster spin decay). */
export const DIE_ANGULAR_DAMPING = 0.2;

/**
 * Creates a CONVEX_HULL `PhysicsAggregate` for a die mesh with the standard
 * mass, restitution, friction, and damping values used across all roll modes
 * (physics roll, manual throw release, re-grab release).
 */
export function createDieAggregate(mesh: Mesh, scene: Scene): PhysicsAggregate {
    const aggregate = new PhysicsAggregate(
        mesh,
        PhysicsShapeType.CONVEX_HULL,
        { mass: DIE_MASS, restitution: DIE_RESTITUTION, friction: DIE_FRICTION },
        scene,
    );
    aggregate.body.setLinearDamping(DIE_LINEAR_DAMPING);
    aggregate.body.setAngularDamping(DIE_ANGULAR_DAMPING);
    return aggregate;
}
