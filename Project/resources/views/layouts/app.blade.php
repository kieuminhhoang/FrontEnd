<!DOCTYPE html>
<html lang="en">

<head>
    @include('support.head')
</head>


<body class="hold-transition skin-blue sidebar-mini">

<div id="app">
    <div id="wrapper">
    @yield('content')
    </div>
</div>

@include('support.javascripts')
</body>
</html>