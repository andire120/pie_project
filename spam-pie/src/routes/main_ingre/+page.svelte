<script>
// @ts-nocheck

    const background1 = "/src/public/element/otherthing/otherelement/background.png";
    const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="board" style="position: relative; width: 100%; height: 100%;  overflow: hidden; ">

    <img src={background1} alt="메인보드" class="paochai">
    <div>
        <button class="spam">스팸</button>
        <button class="apple">사과</button>
        <button class="berry">블루베리</button>
        <button class="inseon">정어리</button>
        <button class="mincho">민트초코</button>
        <button class="meat">고기</button>
        <button class="pump">호박</button>
    </div>
</div>


<style>
    .spam{
        position: absolute;
        top: 450px;
        right: 500px;
    }
    .apple{
        position: absolute;
        top: 450px;
        right: 300px;
    }    
    .mincho{
        position: absolute;
        top: 450px;
        left: 280px;
    }   
    .meat{
        position: absolute;
        top: 450px;
        left: 520px;
    }

    .berry{
        position: absolute;
        top: 540px;
        right: 815px;
    }
    .inseon{
        position: absolute;
        top: 540px;
        right: 600px;
    }
    .pump{
        position: absolute;
        top: 540px;
        right: 400px;
    }

    .paochai{
        height: 99.6%;
        width: 100%;
        background-color: #B475D0;
    }

</style>
