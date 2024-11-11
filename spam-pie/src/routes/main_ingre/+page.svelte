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
        document.querySelector('.bowl').src = ingred[ingredient];
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

    <img src={background1} alt="메인보드" class="paochai">
    <button onclick={ch()} class= "bugton">
        <img src={next_button} alt="버튼" class="buten"/>
    </button>
        <div class="sidebar"></div>
        <img class="pan" src={ganpan} alt="간판">
    <img class="bowl" src={bowl} alt="뚝배기">

    <div class="Button">
        <button id="sp"onclick={() => ingredient('spam')}   class:active={ingredient === 'spam'}   class="spam">스팸</button>
        <button id="ap"onclick={() => ingredient('apple')} class:active={ingredient === 'apple'}    class="apple">사과</button>
        <button id="berry"onclick={() => ingredient('berry')} class:active={ingredient === 'berry'}    class="berry">베리</button>
        <button id="inseon"onclick={() => ingredient('inseon')} class:active={ingredient === 'inseon'}    class="inseon">정어리</button>
</div>
    <div class="Button2">
        <button id="mint"onclick={() => ingredient('mincho')} class:active={ingredient === 'mincho'}    class="mincho">민초</button>
        <button id="mt"onclick={() => ingredient('meat')} class:active={ingredient === 'meat'}    class="meat">고기</button>
        <button id="pp"onclick={() => ingredient('pump')} class:active={ingredient === 'pump'}    class="pump">호박</button>
</div>

<style>
    .Button2{
    display: flex;
    position: absolute;
    top: 85%; /* 예: 화면 중앙 */
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 2vh;
    z-index: 3; 
    }
    .Button {
        display: flex;
    position: absolute;
    top: 70%; /* 예: 화면 중앙 */
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 2vh;
    z-index: 3; 
    }


    .buten{
        width: auto;
        height: auto;
    }

    .paochai{
        overflow: hidden;
        position: relative;
        height: 99.6%;
        width: 100%;
        background-color: #B475D0;
        
    }/*배경 대각선 그거*/

    .bowl{
        position: absolute;
        width: 100vh;
        height: 100vh;
        top: -20vh;
        left: 40vh;
    }
    .pan{
            position: absolute;
    top: 25%;
    transform: translate(-50%, -50%);
        position: absolute;
        width: 15%;

    }

    .sidebar{
        position: absolute;
        width: 80%;
        height: 35%;
        top: 77%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #9744bf;
        z-index: 2;
    }

    .spam{
        grid-area: g;

        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        grid-area: a;
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
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
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
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
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
.apple:hover, .inseon:hover, .berry:hover, .pump:hover, .meat:hover, .mincho:hover, .spam:hover,
.apple:active, .inseon:active, .berry:active, .pump:active, .meat:active, .mincho:active, .spam:active 
{
    background-color: #FDFECF;
    border: 4px solid yellow;
}
</style>