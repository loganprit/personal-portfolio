<script lang="ts">
  import { profile, tech, experience } from '$lib/content';
  import TechBadge from '$lib/components/TechBadge.svelte';
  import TimelineItem from '$lib/components/TimelineItem.svelte';
</script>

<section class="grid items-start gap-8 md:grid-cols-2">
  <div class="space-y-8">
    <!-- Hero -->
    <div class="space-y-4">
      <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
        {profile.name}
      </h1>
      <p class="text-(--fg-muted)">{profile.role} · {profile.location}</p>
      <p class="max-w-prose text-(--fg-muted)">{profile.bio}</p>
      <div class="flex items-center gap-3 pt-2">
        <a
          href="/projects"
          class="inline-flex rounded-md bg-(--accent) px-4 py-2 text-(--accent-contrast) shadow-(--shadow)"
          >View Projects</a
        >
        <a
          href={`mailto:${profile.email}`}
          class="inline-flex rounded-md border border-(--border) bg-(--card) px-4 py-2 text-(--fg) shadow-(--shadow)"
          >Contact</a
        >
      </div>
    </div>

    <!-- About -->
    <div>
      <h2 class="text-xl font-semibold">About</h2>
      <p class="mt-3 max-w-prose text-(--fg-muted)">
        {profile.about}
      </p>
    </div>
  </div>

  <!-- Image column - spans full height of hero + about -->
  <div class="flex items-start justify-center md:justify-end">
    <div
      class="size-48 rounded-xl border border-(--border) bg-(--card) shadow-(--shadow)"
    ></div>
  </div>
</section>

<section class="mt-12">
  <h2 class="text-xl font-semibold">Tech</h2>
  <div class="mt-4 flex flex-wrap gap-2">
    {#each tech as t (t.name)}
      <TechBadge label={t.name} />
    {/each}
  </div>
</section>

<section class="mt-12">
  <h2 class="text-xl font-semibold">Experience</h2>
  <div class="relative mt-4">
    <div class="absolute top-0 bottom-0 left-1 w-px bg-(--border)"></div>
    <div class="space-y-6">
      {#each experience as e (`${e.company}-${e.role}-${e.start}`)}
        <TimelineItem
          role={e.role}
          company={e.company}
          dates={`${e.start} – ${e.end ?? 'Present'}`}
          summary={e.summary}
        />
      {/each}
    </div>
  </div>
</section>
