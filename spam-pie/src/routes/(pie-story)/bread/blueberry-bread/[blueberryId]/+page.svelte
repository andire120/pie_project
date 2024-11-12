<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 1;

    import story1 from "/src/public/illustration/미사용/심사배경.png";
    import story2 from "/src/public/illustration/미사용/심사배경.png";



    function handleClick(e) {
        count++;
        if (count == 3) {
            goto("/main_menu");
        }
        else {
            goto(`/bread/blueberry-bread/${count}`);
        }
        console.log(count);
        console.log(e);
    }
</script>

{#if count == 1}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="1번스토리" src={story1} class="story"/>
    </button>
    <div class="textbox">
        이봐, 대회 규정 좀 읽어봐. 파이라니까, 빵이 아니라.<br>넌 탈락이야.
    </div>
{:else if count == 2}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="2번스토리" src={story2} class="story"/>
    </button>
    <div class="textbox">
        어느날 기적적으로 가족들의 병을 치료할 수 있는<br>신약이 개발되지만,<br>이 약을 사기 위해 주인공은 막대한 자금이 필요했다.
    </div>
{/if}

<style>
    .story{
        margin: 0;
        padding: 0;

        padding: 0;
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;
    }

    .button{
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-item: center;
        justify-content: center;

        position: absolute;
        z-index: 1;

    }
    .textbox{
        margin-left: 20%;
        margin-top: 75vh;
        padding: 5vh;

        width: 60%;
        height: 15vh;

        background-color: black;
        opacity: 0.7;

        display: flex;

        display: table-cell;
        vertical-align: middle;

        color: white;
        text-align: center;
        justify-content: center;
        font-size: x-large;
        

        position: absolute;
        z-index: 2;
    }

</style>
