/**
 * Canonical public identity shared by packaging, setup, MCP, and skill install.
 * Centralization prevents persistent client registrations from drifting from
 * the npm package or executable exposed in package.json.
 */
export const PRODUCT_IDENTITY = {
  displayName: "REA",
  packageName: PACKAGE_METADATA.name,
  packageSpecifier: `${PACKAGE_METADATA.name}@latest`,
  registrationPackageSpecifier: `${PACKAGE_METADATA.name}@${PACKAGE_METADATA.version}`,
  /**
   * npm resolves an exact-version spec against the current project tree, whose
   * root is REA itself inside a source checkout of the same version, and then
   * finds no linked bin. An npm alias always fetches the pinned registry package.
   */
  npxRegistrationPackageSpecifier: `${PACKAGE_METADATA.name}@npm:${PACKAGE_METADATA.name}@${PACKAGE_METADATA.version}`,
  packageVersion: PACKAGE_METADATA.version,
  cliBinary: "rea",
  mcpCommand: `npx -y ${PACKAGE_METADATA.name}@npm:${PACKAGE_METADATA.name}@${PACKAGE_METADATA.version} mcp`,
  mcpServerKey: "rea",
  skillName: "reverse-engineer-anything",
  skillVersion: PACKAGE_METADATA.skillVersion,
  configFileName: "rea.json",
} as const;

/** Exact SDK package identities, distinct from negotiated protocol version. */
export const SDK_IDENTITY = {
  server: PACKAGE_METADATA.serverSdkVersion,
  client_test: PACKAGE_METADATA.clientSdkVersion,
  core: PACKAGE_METADATA.coreSdkVersion,
} as const;
import { PACKAGE_METADATA } from "./generatedPackageMetadata.js";
