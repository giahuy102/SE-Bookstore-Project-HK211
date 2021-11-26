<!DOCTYPE html>
<html>

<head>


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>BK BOOKSTORE - Dashboard</title>

    <!-- Our Custom CSS -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css">

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
</head>

<body>
    <div class="wrapper" id="app">
        <!-- Sidebar  -->
        <nav id="sidebar" style="background-color:#1C2A39">
            <div class="navbar-brand text-center">
                <img src="images/logo.png" style="max-width:85%;" alt="" class="d-inline-block align-middle ml-2 mt-2">
            </div>

            <ul class="list-unstyled components">
                <li>
                    <!-- <a href="{{ route('home') }}"><img src="images/home-icon.png" alt=""> Home</a> -->
                    <a href="#"><img src="images/home-icon.png" alt="" class="pl-2 pr-2"> Home</a>
                </li>
                <li class="active">
                    <!-- <a href="{{ route('dashboard') }}"><img src="images/dashboard-icon.svg" alt=""> Dashboard</a> -->
                    <a href="{{route('dashboard')}}"><img src="images/dashboard-icon.svg" alt="" class="pl-2 pr-2"> Dashboard</a>
                </li>

            </ul>

        </nav>

        <!-- Page Content  -->
        <div id="content" class="pt-2">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn">
                        <i class="fas fa-bars fa-lg"  ></i>

                    </button>

                    

                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="btn bg-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border-radius: 50%;">
                                    <img src="images/person.svg" alt=""  width="40px">
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Logout</a>
                                    <a class="dropdown-item" href="#">Account info</a>

                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>
            <main class="p-1">
                @yield('content')
            </main>


        </div>
    </div>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script> -->

    <script type="text/javascript">
        $(document).ready(function() {
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>
</body>

</html>