<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'BK Restaurant') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        li {
            list-style: none;
        }
        .card-header {
            background-color: #021f3f !important;
            color: white;  
        }

        .card-body button {
            background-color: #021f3f !important;
        }

        .card-body {
            border: 1px solid #4d494996;
        }


    </style>
</head>
<body>
    <div id="app">
        <header-component></header-component>

        <main class="py-4">
            @yield('content')
        </main>
        <footer-component></footer-component>
        @php
            $user = Auth::user();
            $username = "";
            $isLogin = true;
            if ($user == null) $isLogin = false;
            else $username = $user->username;

        @endphp
    </div>
    <script>
            window.isLogin = @json($isLogin);
            window.username = @json($username);
            console.log(window.username);
            console.log(window.isLogin);
    </script>
</body>
</html>
