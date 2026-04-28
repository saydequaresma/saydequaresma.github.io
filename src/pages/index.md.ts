import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Quaresma

I build small AI tools for the operators big SaaS forgot.
`;

  return new Response(markdownContent, {
    headers: {
      "Content-Type": "text/markdown",
    },
  });
};
