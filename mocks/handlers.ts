import { rest } from 'msw';

export const handlers = [
  rest.get('/resource', (req, res, ctx) => {
    return res(ctx.json({ id: 'abc-123' }));
  }),
];
