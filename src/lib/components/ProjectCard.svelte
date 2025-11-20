<script lang="ts">
  type Links = { demo?: string; repo?: string };
  let {
    title,
    description,
    tags = [],
    links = {},
    image
  } = $props<{
    title: string;
    description: string;
    tags?: string[];
    links?: Links;
    image?: string;
  }>();
</script>

<article
  class="group overflow-hidden rounded-lg border border-(--border) bg-(--card) shadow-(--shadow) transition-shadow hover:shadow-(--shadow-hover)"
>
  {#if image}
    <img
      src={image}
      alt="{title} screenshot"
      class="h-44 w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  {/if}
  <div class="p-4">
    <h3 class="font-medium text-(--fg)">{title}</h3>
    <p class="mt-1 text-sm text-(--fg-muted)">{description}</p>
    {#if tags.length}
      <div class="mt-3 flex flex-wrap gap-2">
        {#each tags as t (t)}
          <span
            class="rounded border border-(--border) px-2 py-0.5 text-xs text-(--fg-muted)"
            >{t}</span
          >
        {/each}
      </div>
    {/if}
    {#if links.demo || links.repo}
      <div class="mt-4 flex items-center gap-4 text-sm">
        {#if links.demo}
          <a href={links.demo} class="text-(--accent) hover:underline">Live</a>
        {/if}
        {#if links.repo}
          <a href={links.repo} class="text-(--accent) hover:underline">Code</a>
        {/if}
      </div>
    {/if}
  </div>
</article>
