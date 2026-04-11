# AI Settings

Configure AI providers, models, and interaction modes to customize your AI experience.

## Prerequisites

Before configuring AI settings, make sure you have:

- A Chaterm installation (version with AI support)
- Use the built-in model or an API key or credentials for at least one model provider (see [Model Configuration](/docs/ai/llms/) for supported providers)
- Network access to your chosen provider's API endpoint (or a local Ollama instance)

---

## Creating a New AI Dialog

Each AI dialog is an independent session with its own mode, model, and context. You can run multiple dialogs simultaneously.

1. Click **"AI"** in the left menu to open the AI dialog panel.
2. Click the **"New Chat"** button at the top of the panel.
3. Choose an **interaction mode**:
   - **Command** — AI generates commands for the active terminal
   - **Agent** — AI autonomously executes multi-step tasks
4. Select a **model** from the dropdown list. Only models you have configured will appear.
5. _(Agent mode only)_ Type `@` in the input box to select one or more **target hosts**.
6. Type your message and press **Enter** to begin.

::: tip
You can have multiple dialogs open at once, each using a different mode or model. This is useful for comparing model responses or working on parallel tasks.
:::

For a detailed explanation of each mode, see [AI Dialogs](/docs/ai/dialogs/).

---

## Configuring a Model Provider

To use AI features, you need at least one configured model provider.

1. Open **Settings** by clicking the gear icon in the top-right corner.
2. Navigate to the **"Models"** tab in the left menu.
3. Click **"Add Model"**.
4. Select an **API provider** from the list:
   - **LiteLLM** — Unified interface supporting multiple providers
   - **OpenAI** — OpenAI-compatible API
   - **Bedrock** — Amazon Bedrock (enterprise)
   - **Anthropic** — Anthropic API
   - **DeepSeek** — DeepSeek API
   - **Ollama** — Locally deployed models
5. Fill in the required **authentication fields** for your chosen provider (API key, endpoint URL, region, etc.).
6. Enter or select a **model name**.
7. Click **"Test Connection"** to verify the configuration.
8. If the test succeeds, click **"Save"**.

::: warning
Keep your API keys secure. If you suspect a key has been compromised, rotate it immediately with your provider and update the configuration in Chaterm.
:::

For provider-specific field reference tables and detailed setup instructions, see [Model Configuration](/docs/ai/llms/).

---

## Exporting a Chat

You can export any conversation for sharing or archival.

1. Open the conversation you want to export.
2. Click the **export** button (typically in the top-right area of the dialog panel).
3. Choose the export format and save location.

Exported chats preserve the full conversation including AI responses, commands, and execution output.

---

## Related Documentation

- [AI Dialogs](/docs/ai/dialogs/) — Understand Chat, Command, and Agent modes in depth
- [Model Configuration](/docs/ai/llms/) — Provider-specific setup guides and field references
- [AI Preferences](/docs/ai/preferences/) — Configure reasoning depth, auto-execution, security, and proxy settings
