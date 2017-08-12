/**
 * This file contains all global module augmentations for this project
 */


// Declarations for webpack-loaded modules ===========================
// Note that these have to be declared with the 'export =' becuase that
// is the way webpack expects the compiled js output to be.

declare module "*.css" {
  const styles: any
  export = styles
}

declare module "*.png" {
  const url: string
  export = url
}

// ====================================================================
