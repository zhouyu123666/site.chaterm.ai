# Privacy Settings

Control what data Chaterm collects, how sensitive information is handled, and whether your settings sync across devices.

For details on exactly what is tracked and why, see the [Privacy Policy](/docs/privacy/policy/).

## Telemetry

Telemetry sends anonymous usage data and error reports to help improve Chaterm. No code, prompts, or conversation content is ever collected.

| Data category       | What is included                                     |
| ------------------- | ---------------------------------------------------- |
| Task interactions   | Start/end times, conversation flow (without content) |
| Mode and tool usage | AI modes selected, tools invoked                     |
| Token usage         | Conversation-length metrics for cost estimation      |
| UI activity         | Feature usage across the interface                   |
| Error reports       | Anonymized error information                         |

**Toggle**: Settings > Privacy > Telemetry -- **Enable** or **Disable**.

::: tip Recommendation
Enabling telemetry helps the Chaterm team prioritize features and fix issues faster. All data is anonymized and never reveals private information.
:::

## Sensitive Data Masking

Sensitive data masking automatically obscures passwords, keys, tokens, and other secrets in AI dialog outputs.

**What it does**:

- Identifies common sensitive patterns in real time
- Masks matching content before it appears on screen
- Works without affecting normal usage

**When to use it**:

- Sharing your screen or recording a session
- Working in a public environment
- Reviewing AI output that may reference credentials

**Toggle**: Settings > Privacy > Sensitive Data Masking -- **Enable** or **Disable**.

::: warning Limitation
Masking covers common sensitive patterns but cannot guarantee 100% detection. Exercise caution when handling highly sensitive information.
:::

## Data Sync

Data sync keeps your configurations, assets, and keys consistent across every device where you use Chaterm.

**What is synced**:

| Data type                  | Examples                              |
| -------------------------- | ------------------------------------- |
| Assets                     | Host connection details, SSH keys     |
| Credentials                | Saved passwords and tokens            |
| AI Historical Conversation | Record of Historical AI Conversations |

All synced data is encrypted with KMS during transmission and storage.

**Toggle**: Settings > Privacy > Data Sync -- **Enable** or **Disable**.

::: warning Cloud Storage
When data sync is enabled, your configuration data is stored in the cloud. Make sure you trust Chaterm's security measures before enabling this feature for sensitive environments.
:::

::: tip Recommendation
If you use Chaterm on multiple devices, enabling data sync avoids repeated setup and provides a consistent experience.
:::

## Best Practices

**Data minimization** -- Enable only the features you need and review your privacy settings periodically.

**Sensitive information** -- Keep masking enabled when presenting or recording. Avoid pasting raw secrets into conversations; use environment variables or a secrets manager instead.

**Multi-device usage** -- Clear local data after using Chaterm on a shared or public device. Review synced data regularly.
