/*
  Predictive text model for English (Etymological orthography).
  Pairs with the english_etym keyboard via BCP 47 tag en-x-etym.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  sources: ['wordlist.tsv'],
  wordBreaker: {
    use: 'default',
    // Treat ’ (right single quote) and · (middle dot) as part of words,
    // not word separators, so contractions/morphemes like "ha’·d" stay one token.
    joinWordsAt: ['’', '·']
  },
  punctuation: {
    quotesForKeepSuggestion: { open: '“', close: '”' },
    insertAfterWord: ' '
  },
  // Collapse diacritic vowels, digraphs, and morpheme/contraction marks so:
  //   "a" matches ạ, ą, æ ; "o" matches (none) ; "e" matches ẹ, œ
  //   "i" matches į, ị ; "u" matches ų
  //   "had" matches "ha’·d" ; "wouldnt" matches "wou·d’n’t" ; etc.
  // (joinWordsAt above keeps ’/· inside the word during tokenization;
  //  this strips them so the trie key matches whether the user types them or not.)
  searchTermToKey: (term: string) => term
    .toLowerCase()
    .normalize('NFD')                  // split ạ -> a + dot-below, ą -> a + ogonek, etc.
    .replace(/[̀-ͯ]/g, '')   // drop combining marks
    .replace(/æ/g, 'a')                // æ collapses to a
    .replace(/œ/g, 'e')                // œ collapses to e (œstrogen -> estrogen)
    .replace(/[’'·]/g, '')             // ignore apostrophe / middle dot for matching
};

export default source;
