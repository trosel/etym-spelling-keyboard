/*
  Predictive text model for English (Etymological orthography).
  Pairs with the english_etym keyboard via BCP 47 tag en-x-etym.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  sources: ['wordlist.tsv'],
  wordBreaker: 'default',
  punctuation: {
    quotesForKeepSuggestion: { open: '“', close: '”' },
    insertAfterWord: ' '
  },
  searchTermToKey: (term: string) => term.toLowerCase()
};

export default source;
