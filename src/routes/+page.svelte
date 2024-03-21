<script>
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			ברוך הבא לאתר הרשמי של פיר אוף אלרון
		</span>

		אז מה אתם יכול לעשות באתר?
		<p>- לראות הדלפות של הפיתוח של המשחק בעדכון תמידי -</p>
		<p>- לבצע הזמנה אונליין -</p>
		<p>- לדבר איתנו -</p>
	</h1>

	<h2 class="centertext">
		מידע על המשחק:
		<br/>
		<br/>
		המשחק מפותח באנריל אנג'ין 5.1 עם בלופרינטס
		<br/>
		<br/>
        רק אדם אחד מפתח את המשחק אז אני יכול להבטיח שהיה באגים אבל אני אנסה לסדר אותם באופן מידי
		<br/>
		<br/>
		המשחק הוא היי-פולי והוא שוקל הרבה
		<br/>
		<br/>
		זה בין המשחקים הראשונים שאני יוצר באנריל אנג'ין
	</h2>

</section>

<style>
	@font-face {
        font-family: 'DanaYadAlefAlefAlef-Normal';
        src: url("../lib/DanaYadAlefAlefAlef-Normal.otf");
		font-style: normal;
    }
	@font-face {
        font-family: 'DanaYadAlefAlefAlef-Regular';
        src: url("../lib/fonts/GveretLevinAlefAlefAlef-Regular.otf");
		font-style: normal;
    }
	.centertext {
		text-align: center;
		font-size: 23px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		font-family: 'DanaYadAlefAlefAlef-Regular';
		width: 100%;
		height: 0;
		padding: 0 0 calc(80% * 495 / 2048) 0;
	}

	p {
		color: #ffffff;
		font-size: 20px
	}
</style>
