<script>
    const background = "/src/public/element/otherthing/otherelement/background.png";
    const next = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const chep = "/src/public/element/otherthing/otherelement/파이굽기 간판.png";
    const time1= "/src/public/element/otherthing/otherelement/1분.png";
    const time130="/src/public/element/otherthing/otherelement/1분30초.png";
    const time8="/src/public/element/otherthing/otherelement/8분.png";
    const time30="/src/public/element/otherthing/otherelement/30초.png";
    const oven="/src/public/element/otherthing/otherelement/오븐.png";
</script>

<div class="container">
    <div class="back">
        <img src={background} alt="배경">
    </div>
    <div class="n">
        <img src={next} alt="다음">
    </div>
    <div class="c">
        <img src={chep} alt="단계">
    </div>
    <div class="foot">
        <div class="time-1">
            <img src={time1} alt="">
        </div>
        <div class="time-130">
            <img src={time130} alt="">
        </div>
        <div class="time-8">
            <img src={time8} alt="">
        </div>
        <div class="time-30">
            <img src={time30} alt="">
        </div>
    </div>
    <div class="o">
        <img src={oven} alt="오븐">
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    

    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #B071CD;
        z-index: -1;
        overflow: hidden;
    }

    .back {
        width:90%;
        height:  80%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 5%;
    }

    .back img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .n {
        position: absolute;
        bottom: 30%;
        right: 1%;
        height: 10%;
        width: 10%;
    }

    .c {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .foot{
        background-color: purple;
        width: 100vw;
        height: 20%;
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15%;
        margin-top: 30%;
    }
    .time-30{
        margin-top: 4%;
        width: 100%;
        height: 100%;
        z-index: 2;
        margin-right: 5%;
    }
    .time-1{
        margin-top: 4%;
        width: 100%;
        height: 100%;
        z-index: 2;
        margin-left: 5%;
    }
    .time-130{
        margin-top: 4%;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .time-8{
        margin-top: 4%;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .o{
        width: 0%;
        height: 0%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 50%;
    }
</style>
