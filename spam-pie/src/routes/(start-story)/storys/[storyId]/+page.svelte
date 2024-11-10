<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	let storyId = $page.params.storyId;
    let count = 0;

    import story1 from "/src/public/illustration/game-story/1.png";
    import story2 from "/src/public/illustration/game-story/2.png";
    import story3 from "/src/public/illustration/game-story/3.png";
    import story4 from "/src/public/illustration/game-story/4.png";
    import story5 from "/src/public/illustration/game-story/6.png";


    const refresh = (url) => {
        goto(url).then(() => {
            location.reload();
        });
    };

</script>

{#if storyId == 1}
    <button on:click|stopPropagation={() => refresh('/storys/2')} class="button">
        <img alt="1번스토리" src={story1} class="story"/>
    </button>
    <div class="textbox">
        치료제가 없는 불치병에 몸서리를 치는 주인공의 가족들.<br>병원비를 지불하는 주인공의 지갑은 점점<br>텅텅 비어가는데...
    </div>
{:else if storyId == 2}
    <button on:click|stopPropagation={() => refresh('/storys/3')} class="button">
        <img alt="2번스토리" src={story2} class="story"/>
    </button>
    <div class="textbox">
        어느날 기적적으로 가족들의 병을 치료할 수 있는<br>신약이 개발되지만,<br>이 약을 사기 위해 주인공은 막대한 자금이 필요했다.
    </div>
{:else if storyId == 3}
    <button on:click|stopPropagation={() => refresh('/storys/4')} class="button">
        <img alt="3번스토리" src={story3} class="story"/>
    </button>
    <div class="textbox">
        평소처럼 야간근무를 끝내고 퇴근하던 어느 날.<br>주인공은 막대한 상금이 걸려있는 세계적인 요리대회의<br>인원 모집 공고를 보고. 상금을 얻어 약을 사고자 한다.
    </div>
{:else if storyId == 4}
    <button on:click|stopPropagation={() => refresh('/storys/5')} class="button">
        <img alt="4번스토리" src={story4} class="story"/>
    </button>
    <div class="textbox">
        집안 대대로 내려져 오던 전설의 파이 레시피를 잘만<br>사용한다면, 우승 따윈 식은 죽 먹기 일 테지만...
    </div>
{:else if storyId == 5}
    <button on:click|stopPropagation={() => refresh('/main_menu')} class="button">
        <img alt="5번스토리" src={story5} class="story"/>
    </button>
    <div class="textbox">
        어째서인지 파이의 레시피가 잘 기억나지 않는다!<br>주인공은 과연 끝내 파이의 레시피를 기억해내어<br>우승을 거머쥘 수 있을까?
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
