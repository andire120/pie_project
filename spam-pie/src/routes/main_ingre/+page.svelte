<script>
// @ts-nocheck
    const background1 = "/src/public/element/otherthing/otherelement/background.png";
    const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const bowl = "/src/public/element/otherthing/otherelement/default.png";
    const ganpan ="/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    const dot1 = "/src/public/element/otherthing/otherelement/nodelete.png";
    const dot2 = "/src/public/element/otherthing/otherelement/nodelete1.png";

    let ingredient = null;
    const ingred = {
        apple:"/src/public/element/otherthing/otherelement/bowl apple.png",
        berry:"/src/public/element/otherthing/otherelement/bowl berry.png",
        mint:"/src/public/element/otherthing/otherelement/bowl mincho.png",
        inseon:"/src/public/element/otherthing/otherelement/bowl inseon.png",
        pump:"/src/public/element/otherthing/otherelement/bowl pump.png",
        spam:"/src/public/element/otherthing/otherelement/bowl spam.png",
        meat:"/src/public/element/otherthing/otherelement/bowl meat.png"
    };

    function updateingredImage(imageSrc1) {
        document.querySelector('.defalt').src = imageSrc1;
    }

    function addingredImage(imageSrc2) {
        document.querySelector('.on1').src = imageSrc2
    }

    function ingredients(ingredId){
        ingredient = ingredId;

        updateingredImage(ingred[ingredId]);
    }

    function ch() {
        if(ingredient == null) {
            document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/warning_main.png"
            setTimeout(function(){
            document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1000);
        }
        else if(ingredient != null){
            window.location.href = "/make_sheet2";//파이굽기
        }

    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="board" style="position: relative; width: 100%; height: 100%; ">  
    <img src={background1} alt="메인보드" class="paochai">
    <button onclick={ch()} class= "bugton">
        <img src={next_button} alt="버튼" class="buten"/>
    </button>
    <img src= {dot1} alt="점1" class="on1">
    <img src= {dot2} alt="점2" class="on2">
    <img class="bowl" src={bowl} alt="뚝배기">
    <div>

        <button id="sp"onclick={() => ingredient('spam')}   class:active={ingredient === 'spam'}   class="spam">스팸</button>
        <button id="ap"onclick={() => ingredient('apple')} class:active={ingredient === 'apple'}    class="apple">사과</button>
        <button id="berry"onclick={() => ingredient('berry')} class:active={ingredient === 'berry'}    class="berry">블루베리</button>
        <button id="inseon"onclick={() => ingredient('inseon')} class:active={ingredient === 'inseon'}    class="inseon">정어리</button>
        <button id="mint"onclick={() => ingredient('mincho')} class:active={ingredient === 'mincho'}    class="mincho">민트초코</button>
        <button id="mt"onclick={() => ingredient('meat')} class:active={ingredient === 'meat'}    class="meat">고기</button>
        <button id="pp"onclick={() => ingredient('pump')} class:active={ingredient === 'pump'}    class="pump">호박</button>
        <div class="sidebar"></div>
        <img class="next" src={next_button} alt="다음버튼">
        <img class="pan" src={ganpan} alt="간판">
    </div>
</div>




<style>  
    .on2{
        position: absolute;
        margin: 0;
        width: 100vh;
        height: 100vh;
        padding: 0;
        z-index: 3;
        
    }

    .on1 {
        position: absolute;
        margin: 0;
        width: 100vh;
        height: 100vh;
        padding: 0;
        z-index: 3;
        top: 460px;
        right: 350px;
    }
    .buten{
        position: absolute;
        top: 460px;
        right: 350px;
        z-index: 1;
    }

    .paochai{
        height: 99.6%;
        width: 100%;
        background-color: #B475D0;
    }/*배경 대각선 그거*/

    .bowl{
        position: absolute;
        width: 100vh;
        height: 100vh;
        top: -20vh;
        left: 55vh;
    }
    .pan{
        position: absolute;
        top: 50px;
    }

    .sidebar{
        position: absolute;
        width: 70%;
        height: 35%;
        background-color: #9744bf;
        top: 560px;
        left: 260px;
    }

    .spam{
        position: absolute;
        top: 600px;
        right: 700px;

        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .apple{
        position: absolute;
        top: 600px;
        right: 350px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }    
    .mincho{
        position: absolute;
        top: 600px;
        right: 1400px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }   
    .meat{
        position: absolute;
        top: 600px;
        right: 1050px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }

    .berry{
        position: absolute;
        top: 750px;
        right: 1230px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .inseon{
        position: absolute;
        top: 750px;
        right: 875px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .pump{
        position: absolute;
        top: 750px;
        right: 525px;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }


/*버튼 반짝*/
    .mincho:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .mincho.active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .meat:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .meat:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .inseon:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .inseon:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .berry:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .berry:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .pump:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .pump:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .apple:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .apple:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .spam:hover{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .spam:active{
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

</style>