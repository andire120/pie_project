<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 1;

    import story1 from "/src/public/illustration/game-story/1.png";
    import story2 from "/src/public/illustration/game-story/2.png";
    import story3 from "/src/public/illustration/game-story/3.png";
    import story4 from "/src/public/illustration/game-story/4.png";
    import story5 from "/src/public/illustration/game-story/6.png";



    function handleClick(e) {
        count++;
        if (count == 6) {
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
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="1번스토리" src={story1} class="story1"/>
    </button>
    <div class="textbox"></div>
{:else if count == 2}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="2번스토리" src={story2} class="story2"/>
    </button>
{:else if count == 3}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="3번스토리" src={story3} class="story3"/>
    </button>
{:else if count == 4}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="4번스토리" src={story4} class="story4"/>
    </button>
{:else if count == 5}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="5번스토리" src={story5} class="story5"/>
    </button>
{/if}

<style>
    .story1{
        margin: 0;
        padding: 0;

        padding: 0;
        width: 100%;
        height: 100%;

    }

    .button{
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-item: center;
        justify-content: center;

    }

</style>
