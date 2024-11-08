<script>
	import { page } from '$app/stores' 
	const storyId = $page.params.storyId;
    let { children } = $props() 
</script>

{@render children()}
<h1>제품{storyId} 상세페이지</h1>