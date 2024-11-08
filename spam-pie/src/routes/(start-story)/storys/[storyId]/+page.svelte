<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 0;

    function handleClick(e) {
        count++;
        if (count == 7) {
            goto("/");
        } 
        else {
            goto(`/storys/${count}`);
        }
        console.log(count);
        console.log(e);
    }
</script>

{#if count == 1}
    <h1>1</h1>
{:else if count == 2}
    <h1>2</h1>
{:else if count == 3}
    <h1>3</h1>
{:else if count == 4}
    <h1>4</h1>
{:else if count == 5}
    <h1>5</h1>
{:else if count == 6}
    <h1>6</h1>
{/if}

<div>
    <h1>{storyId}</h1>
    <button on:click|stopPropagation={e => handleClick('button')}>
        Click me
    </button>
</div>

