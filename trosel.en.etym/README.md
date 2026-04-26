# Etymological English — Predictive Text Model

A Keyman lexical model for the etymology-driven English orthography. Pairs with the `english_etym` keyboard via BCP 47 tag `en-x-etym`.

- **Model ID:** `trosel.en.etym`

## Updating the wordlist

Edit `source/wordlist.tsv`. Format is plain TSV with two columns:

```
word<TAB>count
```

Counts are integer frequencies (higher = more common). Comments can go in an optional third column. UTF-8, no BOM. 

