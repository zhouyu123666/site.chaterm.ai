# Terminal Operations

The terminal is the core feature of Chaterm -- a full SSH terminal experience with splits, search, and keyboard-driven workflows.

## Terminal Connection

After you connect to a host, a terminal window opens automatically. The terminal supports:

- **Full-featured SSH terminal** with all standard commands and operations.
- **Multi-tab management** to run several sessions at once and switch between them.
- **Tab renaming** for quick identification (right-click a tab to rename).
- **Tab cloning** to duplicate a session on the same host.

## Terminal Splitting

Split the terminal to view multiple sessions side by side or stacked. Each split pane is an independent terminal session that can connect to a different host or run different commands.

### How to Split

1. Open the tab menu bar or right-click inside the terminal.
2. Choose **Split Right** or **Split Down**.
3. A new terminal pane appears in the chosen direction.
4. Each pane operates independently -- type commands, resize, or close them individually.

### Split Shortcuts

| Function        | macOS             | Windows/Linux     |
| --------------- | ----------------- | ----------------- |
| Split Right     | Via tab menu      | Via tab menu      |
| Split Down      | Via tab menu      | Via tab menu      |
| Clone Session   | Via tab menu      | Via tab menu      |

> **Tip:** Use a side-by-side split to watch logs on the left while running commands on the right. Use a stacked split to monitor system metrics on top while operating below.

## Terminal Search

Search through terminal output to find commands, error messages, or any text.

### Steps

1. Press `Cmd + F` (macOS) or `Ctrl + F` (Windows/Linux) to open the search bar.
2. Type your search query.
3. Matching text is highlighted in the terminal output.
4. Click **Previous** / **Next** (or use arrow buttons) to jump between matches.
5. Press `Esc` to close the search bar.

### Search Shortcuts

| Function        | macOS         | Windows/Linux |
| --------------- | ------------- | ------------- |
| Open Search     | `Cmd + F`     | `Ctrl + F`    |
| Close Search    | `Esc`         | `Esc`         |

## Right-Click Menu Operations

Right-click anywhere in the terminal to open the context menu.

### Clipboard

| Function  | macOS         | Windows/Linux | Description                          |
| --------- | ------------- | ------------- | ------------------------------------ |
| **Copy**  | `Cmd + C`     | `Ctrl + C`    | Copy the selected text               |
| **Paste** | `Cmd + V`     | `Ctrl + V`    | Paste clipboard content              |

### Display

| Function      | macOS             | Windows/Linux     | Description                            |
| ------------- | ----------------- | ----------------- | -------------------------------------- |
| **Search**    | `Cmd + F`         | `Ctrl + F`        | Open the search bar                    |
| **Clear**     | Via right-click    | Via right-click    | Clear visible terminal output          |
| **Font Size** | Via right-click    | Via right-click    | Scale the terminal font up or down     |

### Connection

| Function            | Description                                    |
| ------------------- | ---------------------------------------------- |
| **Disconnect**      | Disconnect the current SSH connection          |
| **New Terminal**    | Open a new terminal session                    |
| **Close Terminal**  | Close the current terminal session             |

### Splits

| Function        | Description                              |
| --------------- | ---------------------------------------- |
| **Split Right** | Create a horizontal split pane           |
| **Split Down**  | Create a vertical split pane             |

## All Keyboard Shortcuts

| Function        | macOS         | Windows/Linux |
| --------------- | ------------- | ------------- |
| Copy            | `Cmd + C`     | `Ctrl + C`    |
| Paste           | `Cmd + V`     | `Ctrl + V`    |
| Search          | `Cmd + F`     | `Ctrl + F`    |
| AI Command Dialog | `Cmd + K`   | `Ctrl + K`    |
| AI Sidebar      | `Cmd + L`     | `Ctrl + L`    |

For the full shortcut list, see [Shortcuts Settings](/docs/settings/shortcuts/).

## Related

- [Terminal Management](/docs/terminal/manage/) -- tabs, cloning, and closing sessions.
- [Shortcuts Settings](/docs/settings/shortcuts/) -- view and customize all keyboard shortcuts.
