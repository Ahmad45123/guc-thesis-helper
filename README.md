<h1 align="center">
  :mortar_board: GUC Thesis Helper :mortar_board:
</h1>

A chrome extension to help GUC students deal with the thesis prioritization system (currently exclusive for **Engineering**).

## Installation

#### Chrome Store :rocket:

Extension is now live on :tada: [Chrome webstore](https://chrome.google.com/webstore/detail/guc-thesis-helper/moefbpbkffafidnhfelbkhoondeledam) :tada:

#### Manual Installation :hammer_and_pick:

You can visit the [releases](https://github.com/AbdullahKady/guc-thesis-helper/releases), download the latest `packed extension` (look for the `.crx` file), open it in chrome to install.

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
