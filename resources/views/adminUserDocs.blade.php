{{--@dump($user)--}}

<style>
	.docs {
		display: flex;
		flex-wrap: wrap;
		padding: 5px;
	}

	.docs img {
		max-width: 150px;
		height: auto;
		margin: 0 5px 5px 0
	}

	.docs img:hover {
		cursor: pointer;
		transform: scale(1.1);
		box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
	}

	.img-preview {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .5);
		z-index: 10;
		justify-content: center;
		align-items: center;
	}

	.img-preview.active {
		display: flex;
	}

	.img-preview img {
		width: 80%;
		height: auto;
	}

</style>

<div class="docs">
	@foreach($user->attachment as $file)
		<img src="/storage/{{$file->path}}" alt="docs">
		{{--	{{$file->path}}--}}
	@endforeach
</div>

<div class="img-preview">
	<img src="#" alt="doc">
</div>

<script>

	const imgs = document.querySelectorAll('.docs img');
	const preview = document.querySelector('.img-preview');

	imgs.forEach(img => {
		img.addEventListener('click', e => {
			e.preventDefault();

			preview.querySelector('img').src = img.src;
			preview.classList.add('active');
		})
	})

	preview.addEventListener('click', e => {
		e.preventDefault();
		preview.classList.remove('active');
	})

</script>
