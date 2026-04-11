# Skills Troubleshooting & Best Practices

This page covers how to write high-quality Skills, optimize performance, and avoid common pitfalls. For setup instructions, see the [Skills Usage Guide](../usage/).

---

## Writing High-Quality Skills

### 1. Clear naming and descriptions

::: tip
The AI uses the Skill's description to decide when to apply it. A vague description leads to missed or incorrect matches.
:::

- **Write specific descriptions**: Clearly explain the purpose and scenarios for the Skill. Include important keywords and state prerequisites and expected outcomes.
- **Use consistent naming**: Choose clear, descriptive names. Optionally add category prefixes such as `k8s-`, `docker-`, `git-`. Keep naming conventions consistent across all Skills.

### 2. Structured steps

- **Keep the logic clear**
  - Order steps by execution sequence.
  - Use numbered lists to make order explicit.
  - Add necessary decisions and branches where behavior splits.

- **Be detailed and concrete**
  - Include full commands and parameters.
  - Explain the intent of each step.
  - Provide examples and expected outputs where helpful.

### 3. Error handling and rollback

- **Handle failure cases**
  - Identify likely error conditions.
  - Include steps for handling each error path.
  - Describe how to tell whether an operation succeeded or failed.

- **Define rollback procedures**
  - For operations that might have impact, provide rollback steps.
  - Explain how to restore the system to its previous state.

::: warning
Skills that modify infrastructure or data should always include a rollback section. Without one, a failed operation can leave the system in an inconsistent state.
:::

### 4. Maintainability

- **Use variables instead of hard-coding**
  - Avoid hard-coded values where possible.
  - Use placeholders (e.g., `<pod-name>`, `<namespace>`) to keep the Skill reusable.
  - Document what each variable means and its valid range.

- **Design with modularity**
  - Break complex workflows into smaller, focused sections.
  - Make each step responsible for a single concern.
  - Keep Skills easy to test and modify over time.

---

## Performance Optimization

### Control the number of enabled Skills

::: info
Every enabled Skill is injected into the AI system prompt. Too many enabled Skills increase token usage and can dilute the AI's focus.
:::

- **Enable only what you need**: Turn on only the Skills that are relevant to your current task. Periodically clean up Skills that are no longer used.
- **Load by scenario**: Switch different Skill sets based on the current task. Use grouping to manage Skills by scenario and maintain different collections for different workflows.

### Optimize Skill content

- **Streamline steps**: Remove unnecessary steps, combine steps that can safely run in parallel, and optimize command order for faster feedback.
- **Reduce complexity**: Avoid overly complex conditional logic inside a single Skill. Split very complex Skills into multiple simpler ones. Store large blocks of content in resource files instead of inline text.

---

## Resources

### Terminal Skills official repository

- **GitHub**: [chaterm/terminal-skills](https://github.com/chaterm/terminal-skills)
- **Description**: A curated collection of terminal-focused Skills covering a variety of operations and development use cases.

---

## What to Read Next

- For setup and usage instructions, see the [Skills Usage Guide](../usage/).
- To learn about the settings UI, see [Skills Settings](/docs/settings/skills/).
