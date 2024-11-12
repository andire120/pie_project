<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
    let meatId: number;

    $: meatId = +$page.params.meatId;

    const stories = [
        {
            img: "/src/public/illustration/미사용/심사위원배경.png",
            text: "미트 파이가 정말 맛있네요.",
            simtext: "심사위원2"
        },
        {
            img: "/src/public/illustration/미사용/심사위원배경.png",
            text: "어느날 기적적으로 가족들의 병을 치료할 수 있는 신약이 개발되지만, 이 약을 사기 위해 주인공은 막대한 자금이 필요했다.",
            simtext: "심사위원2"
        },
        {
            img: "/src/public/illustration/미사용/심사위원배경.png",
            text: "평소처럼 야간근무를 끝내고 퇴근하던 어느 날. 주인공은 막대한 상금이 걸려있는 세계적인 요리대회의 인원 모집 공고를 보고. 상금을 얻어 약을 사고자 한다.",
            simtext: "심사위원2"
        },
        {
            img: "/src/public/illustration/미사용/심사위원배경.png",
            text: "집안 대대로 내려져 오던 전설의 파이 레시피를 잘만 사용한다면, 우승 따윈 식은 죽 먹기 일 테지만...",
            simtext: "심사위원2"
        },
        {
            img: "/src/public/illustration/미사용/심사위원배경.png",
            text: "어째서인지 파이의 레시피가 잘 기억나지 않는다! 주인공은 과연 끝내 파이의 레시피를 기억해내어 우승을 거머쥘 수 있을까?",
            simtext: "심사위원2"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (meatId == 5)}
    <button on:click|stopPropagation={() => refresh(`/main_menu`)} class="button">
        <img alt={`${meatId}번스토리`} src={stories[meatId - 1].img} class="story"/>
    </button>
    <div class="textbox">
        <p class="textsim">
            {stories[meatId - 1].simtext}
        </p>
        <p class="textmal">
            {@html stories[meatId - 1].text.replace(/\n/g, "<br>")}
        </p>
        
    </div>
{:else if stories[meatId - 1]}
    <button on:click|stopPropagation={() => refresh(`/meat-pie/${meatId + 1}`)} class="button">
        <img alt={`${meatId}번스토리`} src={stories[meatId - 1].img} class="story"/>
    </button>
    <div class="textbox">
        <p class="simtext">
            {stories[meatId - 1].simtext}
        </p>
        <p class="textmal">
            {@html stories[meatId - 1].text.replace(/\n/g, "<br>")}
        </p>
        
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>
    .story {
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;
    }

    .button {
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 1;
    }

    .textbox {
        margin-left: 20%;
        margin-top: 80vh;
        padding: 5vh;

        width: 60%;
        height: 9vh;

        background-color: black;

        display: flex;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .textmal{
        width: 85%;
        height: 9vh;
        margin-right: 10%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;
        
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
    .simtext{
        width: 15%;
        height: 9vh;
        margin-bottom: 7%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
    }


</style>
