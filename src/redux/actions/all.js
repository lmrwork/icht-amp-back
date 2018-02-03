export const test1 = (ok) => ({
  type: 'TEST',
  ok: '1#' + ok
});

export const test2 = (ok) => ({
  type: 'TEST',
  ok: '2#' + ok
});

export const actions = {
  test1,
  test2
}
