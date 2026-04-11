# MCP Troubleshooting & Best Practices

This page helps you diagnose common MCP connection and runtime issues, and provides security, performance, and maintainability recommendations. For setup instructions, see the [MCP Usage Guide](../usage/).

---

## Troubleshooting

### 1. Always connecting / Unable to connect

- **Check configuration**:
  - **stdio**: Is `command` executable? Does it need to be placed in `args`? Does `cwd` exist?
  - **http**: Is `url` accessible? Does it require authentication `headers`? Is it blocked by corporate proxy/certificates?
- **Check notifications/errors**: The interface will display connection failure reasons or stderr output snippets.
- **Increase `timeout` appropriately** (in seconds) to avoid false failures caused by short timeouts.

::: tip Developing a local server?
- Check if the build artifact (e.g., `build/index.js`) has been generated and is executable.
- After changing build artifacts, wait for automatic restart; if it does not take effect, try **Disable then Enable**.
:::

### 2. Tools or Resources are empty

- Is the server `connected`? If not, troubleshoot connection issues first (see above).
- Does the MCP server itself not expose tools/resources? Check its repository documentation to confirm.
- **http type**: Are authentication/headers correct? Is it returning 401/403?
- **stdio type**: Does stderr indicate missing dependencies/initialization failures?

### 3. Call timeout or instability

- Increase `timeout`.
- Prefer network nodes or services that are more stable or closer to your location.
- For http type, ensure your proxy/gateway does not interrupt long connections or streaming connections.
- When server load is high or cold start is slow, extend the waiting time appropriately.

### 4. Permission and security issues

::: warning
Be cautious when setting `env` and `headers` — especially fields containing credentials — to avoid leakage. Only add trusted tools to the `autoApprove` whitelist.
:::

- If the server can access local files or internal networks, follow the principle of least privilege and isolation (only open directories/interfaces that are needed).

### 5. Other troubleshooting approaches

- **Minimal reproduction**: Manually run `command`/`args` in your terminal to confirm whether the server starts independently.
- **Check the server repository's README/issues** for known problems and solutions.
- **When submitting issues**, include: configuration snippets (with sensitive data redacted), logs/notification content, and a description of your system and network environment.

---

## Best Practices

### Server selection

- Prioritize servers that are actively maintained and have good community reputation.
- Use official directories and curated collections for quick filtering:
  - [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
  - [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
  - Directory sites (see [Resources](#resources) below).

### Security

::: warning
- **Least privilege**: Only expose necessary resources, directories, and networks.
- **Be cautious with `autoApprove`**: Only add tools that are confirmed to be safe to the whitelist.
- **Review `env`/`headers`**: Avoid hardcoding tokens or keys in shared environments.
:::

### Performance and stability

- Adjust `timeout` based on network and service performance.
- For http type, ensure your proxy and load balancer are friendly to SSE/streaming responses.
- For local development servers, leverage automatic restart triggered by build artifact changes to speed up debugging iterations.

### Maintainability

- **Unified naming and grouping**: Use prefixes for servers of the same type (e.g., `db-`, `search-`) to facilitate search and sorting.
- **Regularly back up configuration files**; perform minimal verification before and after changes.

---

## Resources

### GitHub repositories

- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

### Online directories

- [mcpservers.org](https://mcpservers.org/)
- [mcp.so](https://mcp.so/)
- [glama.ai/mcp/servers](https://glama.ai/mcp/servers)

### PulseMCP

- [www.pulsemcp.com](https://www.pulsemcp.com/)

### Tutorial videos

- **AI-Driven Coder** (Building and using MCP servers):
  - [YouTube video](https://www.youtube.com/watch?v=b5pqTNiuuJg)

---

## FAQ

**Q: Why don't I see an "Execute immediately" button when I click on a tool?**

A: Tools are called in chat or automated workflows. The interface-level **Enable/Disable** toggle controls availability and does not directly trigger execution.

**Q: Can I combine `command` and `args` into one line in the configuration?**

A: Yes. If `args` is not provided and there are spaces in `command`, Chaterm will automatically parse it (supports quotes and escaping).

**Q: How do I manually restart a server?**

A: If automatic restart is not triggered, reconnect by toggling the server **Disable then Enable**.

**Q: What are the risks of `autoApprove`?**

A: When enabled, matching tools automatically approve execution without user confirmation. Only enable this for trusted, predictable tools to reduce the risk of misoperation or unauthorized access.

---

## What to Read Next

- Setting up your first MCP server? See the [MCP Usage Guide](../usage/).
