/** Given a Lojban string, returns the parse tree. */
export function parseLojban(lojban: string): ParseTree {
  const win = (window as unknown as {
    'camxes_preprocessing': Function;
    'camxes_postprocessing': Function;
    'camxes': {parse: Function};
  });

  const pre = win['camxes_preprocessing'](lojban);
  const tree = win['camxes'].parse(pre);
  const post = win['camxes_postprocessing'](tree, 'JTCN');
  const parsed = JSON.parse(post);
  console.log('parsed', parsed, typeof parsed);
  return parsed;
}

export type ParseTree = any;
