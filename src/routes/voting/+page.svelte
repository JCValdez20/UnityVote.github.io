<script lang="ts">
    import { onMount } from 'svelte';
    let candidates: any[] = [];

    async function fetchVotes() {
        const res = await fetch('/api/votes');
        candidates = await res.json();
    }

    async function vote(id: any) {
        await fetch(`/api/vote/${id}`, { method: 'POST' });
        fetchVotes(); // Refresh votes
    }

    onMount(fetchVotes);
</script>

<h1>Voting System</h1>
<ul>
    {#each candidates as candidate}
        <li>
            {candidate.name}: {candidate.votes}
            <button on:click={() => vote(candidate.id)}>Vote</button>
        </li>
    {/each}
</ul>
