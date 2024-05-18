import HealtSort from '../app';

test('check #1', () => {
  const result = HealtSort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([
    {
      health: 100,
      name: 'маг',
    },
    {
      health: 80,
      name: 'лучник',
    },
    {
      health: 10,
      name: 'мечник',
    },
  ]);
});

test('check #2', () => {
  const result = HealtSort([
    { name: 'мечник', health: 99 },
    { name: 'маг', health: 1 },
    { name: 'лучник', health: 100 },
  ]);

  expect(result).toEqual([
    {
      health: 100,
      name: 'лучник',
    },
    {
      health: 99,
      name: 'мечник',
    },
    {
      health: 1,
      name: 'маг',
    },
  ]);
});

test('check #3', () => {
  const result = HealtSort([
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 1.9 },
    { name: 'лучник', health: 19 },
  ]);

  expect(result).toEqual([
    {
      health: 19,
      name: 'лучник',
    },
    {
      health: 1.9,
      name: 'маг',
    },
    {
      health: 0,
      name: 'мечник',
    },
  ]);
});
