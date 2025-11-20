<script lang="ts">
  let { role, company, dates, summary } = $props<{
    role: string;
    company: string;
    dates: string;
    summary?: string;
  }>();
</script>

<div class="relative pl-8">
  <div
    class="absolute top-6 h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_0_4px_var(--bg)]"
    style="left: 0px;"
  ></div>
  <div
    class="rounded-lg border border-(--border) bg-(--card) p-4 shadow-(--shadow)"
  >
    <div class="flex items-center justify-between">
      <h3 class="font-medium text-(--fg)">
        {role} · <span class="text-(--fg-muted)">{company}</span>
      </h3>
      <span class="text-xs text-(--fg-muted)">{dates}</span>
    </div>
    {#if summary}
      <p class="mt-2 text-sm text-(--fg-muted)">{summary}</p>
    {/if}
  </div>
</div>
