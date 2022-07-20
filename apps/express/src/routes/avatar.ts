import { Router } from 'express';
import avatar, { Variants } from 'boring-avatar-svg';

const router = Router();

const DEFAULT_COLORS = [
  '#92A1C6',
  '#146A7C',
  '#F0AB3D',
  '#C271B4',
  '#C20D90',
].join(',');
const DEFAULT_SIZE = '80';
const DEFAULT_VARIANT = 'marble';
const VALID_VARIANTS = new Set([
  'marble',
  'beam',
  'pixel',
  'sunset',
  'ring',
  'bauhaus',
]);

function normalizeColors(colors: string) {
  const colorPalette = colors.split(',');

  if (colorPalette.length) {
    return colorPalette.map((color) =>
      color.startsWith('#') ? color : `#${color}`
    );
  }
}

router.get('/:variant?/:size?/:name?', (req, res) => {
  const { variant = DEFAULT_VARIANT, size = DEFAULT_SIZE } = req.params;
  const name = req.query.name || req.params.name || Math.random().toString();
  const colors = normalizeColors(
    req.query.colors?.toString() || DEFAULT_COLORS
  );
  const square = req.query.hasOwnProperty('square');

  if (!VALID_VARIANTS.has(variant)) {
    return res.status(400).send('Invalid variant');
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  const svg = avatar({
    size: parseInt(size),
    name: name.toString(),
    variant: variant as Variants,
    colors: colors as [string, string, string, string, string],
    square,
  });

  res.send(svg);
});

export default router;
