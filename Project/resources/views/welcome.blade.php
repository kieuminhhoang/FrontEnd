@extends('layouts.app')

@section('content')
<!--                         <router-view name="ttMenu"></router-view> -->
                        <router-view name="ttBody"></router-view>
                        <router-view name="ttFooter"></router-view>
                        <router-view></router-view>
@endsection
