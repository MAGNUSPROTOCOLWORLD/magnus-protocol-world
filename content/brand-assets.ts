export const brandAssets = {
  logoPrimaryStackedDark: "/brand/logo-primary-stacked-dark.jpg",
  logoSecondaryLight: "/brand/logo-secondary-light.jpg",
  iconMonogramAxisDark: "/brand/icon-monogram-axis-dark.jpg",
  iconMonogramGlowDark: "/brand/icon-monogram-glow-dark.jpg",
  iconAppDark: "/brand/icon-app-dark.jpg"
} as const;

export type BrandAssetKey = keyof typeof brandAssets;
