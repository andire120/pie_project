<script >
	import { goto } from "$app/navigation";
    import mainmenu from "/src/public/illustration/메인화면.png"

</script>


<img class="img" src={mainmenu} alt="메인메뉴">
<div class="ab" style="font-size: large"><a href="/" style="color: red;">●게임시작</a><br><a href="/" style="color: red;">●게임방법</a><br><a href="/"style="color: red;">●레시피</a><br><a href="/" style="color: red;">●포기하기</a></div>





<slot/>


<style>
    .img{
    height: 100vh;
    width: 100vw; 
    overflow: hidden;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 0; 
    position: relative; 
    z-index: 0;
    }

    .ab{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:white;    
        opacity: 0.7;
        height: 200px;
        width: 300px;
        margin: 0 auto;
        color: red;
        margin-top: -300px;
        text-decoration-line: none;
        text-decoration: none;
    }

    .ab:link{
        color: red;
    }
    .ab:visited{
    color: red;
    }

    .ab a { text-decoration: none; }
</style>