import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Quaresma

Solo builder making AI tools for small operators that bigger SaaS won't bother with.

## Navigation

- [About](/about.md)

## Links

- GitHub: https://github.com/saydequaresma
- Email: saydequaresma@gmail.com

---

*This is the markdown-only version of saydequaresma.github.io.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
