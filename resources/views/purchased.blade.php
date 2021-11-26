<!DOCTYPE html>
<html lang="en">

<head>
<link rel="shortcut icon" href="/images/hcmut1.png">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Purchased</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        li {
            list-style: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <header-component></header-component>
        <purchased-component :mypurchased="{{ $mypurchased }}"></purchased-component>
        <footer-component></footer-component>
    </div>
    <script>
        window.csrf_token = "{{ csrf_token() }}";
        window.isLogin = @json($isLogin);
        window.username = @json($username);
    </script>
    <script src="{{ mix('js/purchased.js') }}"></script>
</body>

</html>