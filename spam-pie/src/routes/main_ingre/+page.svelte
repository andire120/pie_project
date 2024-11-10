<script>
// @ts-nocheck
    const background1 = "/src/public/element/otherthing/otherelement/background.png";
    const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const bowl = "/src/public/element/otherthing/otherelement/default.png";
    const ganpan ="/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    var ingredient = null;
    const ingred ={
        apple:"/src/public/element/otherthing/otherelement/bowl apple.png",
        berry:"/src/public/element/otherthing/otherelement/bowl berry.png",
        mint:"/src/public/element/otherthing/otherelement/bowl mincho.png",
        inseon:"/src/public/element/otherthing/otherelement/bowl inseon.png",
        pump:"/src/public/element/otherthing/otherelement/bowl pump.png",
        spam:"/src/public/element/otherthing/otherelement/bowl spam.png",
        meat:"/src/public/element/otherthing/otherelement/bowl meat.png"
    };
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="board" style="position: relative; width: 100%; height: 100%; ">

    <img src={background1} alt="메인보드" class="paochai">
    <div>
        <img class="bowl" src={bowl} alt="뚝배기">
        <button class="spam">스팸</button>
        <button class="apple">사과</button>
        <button class="berry">블루베리</button>
        <button class="inseon">정어리</button>
        <button class="mincho">민트초코</button>
        <button class="meat">고기</button>
        <button class="pump">호박</button>
        <div class="sidebar"></div>
        <img class="next" src={next_button} alt="다음버튼">
        <img class="pan" src={ganpan} alt="간판">
    </div>
</div>









<style>
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
    .next{
        position: absolute;
        top: 460px;
        right: 350px;
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

    .paochai{
        height: 99.6%;
        width: 100%;
        background-color: #B475D0;
    }


</style>