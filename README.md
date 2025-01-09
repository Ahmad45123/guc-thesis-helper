<h1 align="center">
  :mortar_board: GUC Thesis Helper :mortar_board:
</h1>

A chrome extension to help GUC students deal with the thesis prioritization system (currently exclusive for **Engineering**).

## Installation

#### Manual Installation :hammer_and_pick:

### Google Chrome
1. Download the extension ZIP file by clicking on `Code -> Dowmload Zip` or by following [this link](https://codeload.github.com/Ahmad45123/guc-thesis-helper/zip/refs/heads/master).
2. Extract the zip into some folder anywhere on your device.
3. Goto Chrome Extensions settings at [chrome://extensions/](chrome://extensions/)
4. Enable Developer Mode by ticking the switch on the top right.
5. Click `Load Unpacked` and select the folder you had extracted.
6. Enjoy!

### Firefox
1. Download the extension ZIP file by clicking on `Code -> Download Zip` or by following [this link](https://codeload.github.com/Ahmad45123/guc-thesis-helper/zip/refs/heads/master).
2. Extract the zip into some folder anywhere on your device.
3. Download [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/), the normal version of Firefox will **not** allow you to permanently load this extension.
4. Go to `about:config`
5. Set `xpinstall.signatures.required` to `false`
6. Go to `about:addons`
7. Click on the gear icon and select `Install Add-on From File...`
8. Select 'guc_thesis_helper-1.5.1.xpi'

## Usage :checkered_flag:

**All operations are not final**, every action is reversible, since you will need to `commit` to the system when you're finished anyway, the extension only helps you update your _registered topics_, so don't be afraid :smile:

**Hover** on each button for a detailed description of the action to follow!

## Important Notes :books:

- **DON'T** stop any operation mid-way (after starting an operation like submitting/clearing), it will mostly result in inconsistency with the system. If an operation is interrupted, it's recommended to `Clear`, and start again.

- The system is super slow, so give it time :hourglass:. One request takes up on average ~30seconds, you will see a progress indicator showing up when an operation is started.

## Features/Actions :mag_right:

### Bulk submit/delete and prioritize without a server-sided-refresh on **EVERY-GOD-DAMN** action

- _Topic Search_: A filter search field is added ontop of the list to find yoru topics easier!

- _Order on the fly using drag&drop_, to populate the sortable list, just click on the desired thesis topic, it will be added to the sortable list, after you're happy with the batch you have added (and possibly sorted), click on the `Submit batch` button, it will start a series of requests being sent, **DON'T INTERRUPT** it during such phase, as mentioned above.

- _Remove all selected topics_: Deletes all your submitted topics to the system, if you want to start-over :volcano:

- _Add all remaining_ in case you ordered enough topics, and just want to list the rest in their default order (just appends them to your current sortable list)
