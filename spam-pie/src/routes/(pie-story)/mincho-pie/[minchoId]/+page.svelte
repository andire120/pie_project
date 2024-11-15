<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
    let minchoId: number;

    $: minchoId = +$page.params.minchoId;

    const stories = [
        {
            img: "/src/public/illustration/엔딩/괴식엔딩-1.png",
            text: "정체불명의 식별 불가 괴식 파이를 만든 주인공...",
            tu:"/src/public/illustration/미사용/투명.png",
        },
        {
            img: "/src/public/illustration/엔딩/괴식엔딩-2.png",
            text: "이 파이에 모든 심사위원들은 경악에 혹평을 하지만, 단 한명의 심사위원만이 이 파이를 마음에 들어한다.",
            tu:"/src/public/illustration/미사용/투명.png",
        },
        {
            img: "/src/public/illustration/엔딩/괴식엔딩-3.png",
            text: "알고보니 그 심사위원은 그런 괴상한 파이가 취향이었고, 이에 그런 주인공에게 지원금과 일자리를 내어준다.",
            tu:"/src/public/illustration/미사용/투명.png",
        },
        {
            img: "/src/public/illustration/엔딩/괴식엔딩-4.png",
            text: "새 직장에서 번 돈으로 신약을 구입하여 아픈 가족들을 치료해내고, 심사위원과 동업하며 무난하게 살게 된다.",
            tu:"/src/public/illustration/미사용/투명.png",
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (minchoId == 4)}
    <button on:click|stopPropagation={() => refresh(`/main_menu`)} class="button">
        <img alt={`${minchoId}번이미지`} src={stories[minchoId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${minchoId}번스토리`} src={stories[minchoId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        {@html stories[minchoId - 1].text.replace(/\n/g, "<br>")}
    </div>
{:else if stories[minchoId - 1]}
    <button on:click|stopPropagation={() => refresh(`/mincho-pie/${minchoId + 1}`)} class="button">
        <img alt={`${minchoId}번이미지`} src={stories[minchoId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${minchoId}번스토리`} src={stories[minchoId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        {@html stories[minchoId - 1].text.replace(/\n/g, "<br>")}
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

        background-color: rgba(0, 0, 0, 0);
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 4;
    }

     .tu{
        width: 100%;
        height: 90vh;
    }


    .textbox {
        margin-left: 20%;
        margin-top: 75vh;
        padding: 5vh;

        width: 60%;
        height: 15vh;

        background-color: black;
        opacity: 0.7;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        text-align: center;
        font-size: xx-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        position: absolute;
        z-index: 2;

        
    }
</style>
