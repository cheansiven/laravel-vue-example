<!DOCTYPE html>
<html>
<head>
	<title>Shopping Cart App</title>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <meta name="csrf-token" content="{{csrf_token()}}">
</head>
<body>
	<div id="app">
	@include('layouts.header')
		
		@yield('content')

	@include('layouts.footer')
	</div>
	<script src="/js/app.js"></script>
</body>
</html>