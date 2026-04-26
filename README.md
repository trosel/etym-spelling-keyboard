# etym-spelling-keyboard

The /english_etym/ folder is the keyboard project.

The /trosel.en.etym/ folder is the lexical model project.

# How to use

Install the [Keyman app](https://keyman.com/). Make sure you enable it to show up in your system keyboard options.

Go to this repository's [Releases](https://github.com/trosel/etym-spelling-keyboard/releases) and download the most recent `english_etym.kmp` keyboard file. If you tap the file in your downloads, it will open in the Keyman app. Install it. 

Then download the `trosel.en.etym.model.kmp` lexical model from the Releases page, tap the file, and install that in the Keyman app. It will automatically link to the keyboard.

# Build Keyboard for yourself

1. Download the Keyman Developer app.

2. File > Open: Select `/english_etym/english_etym.kpj`

3. on the bottom tabs, go to Packaging then click Build all

4. See the generated `/english_etym/build` folder and the `english_etym.kmp` file is the important one there.

# Build Lexical Model for yourself

1. Download the Keyman Developer app.

2. File > Open: Select `/trosel.en.etym/trosel.en.etym.kpj`

3. on the bottom tabs, go to Packaging then click Build all

4. See the generated `/trosel.en.etym/build` folder and the `trosel.en.etym.model.kmp` file is the important one there.
