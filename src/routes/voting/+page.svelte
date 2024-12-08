<script>
    import { onMount } from "svelte";
    /**
	 * @type {any[]}
	 */
    let advisers = [];
  
    const fetchAdvisers = async () => {
      const res = await fetch("/api/votes");
      advisers = await res.json();
    };
  
    const vote = async (/** @type {any} */ id) => {
      await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({ adviserId: id }),
        headers: { "Content-Type": "application/json" },
      });
      fetchAdvisers(); // Refresh the list
    };
  
    onMount(fetchAdvisers);
  </script>
  
  <main>
    <h1>Class Adviser Voting</h1>
    <ul>
      {#each advisers as adviser}
        <li>
          <strong>{adviser.name}</strong> - {adviser.votes} votes
          <button on:click={() => vote(adviser.id)}>Vote</button>
        </li>
      {/each}
    </ul>
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
  </style>
  