@extends('layouts.home')

@section('content')
                        <router-view name="ttBody"></router-view>
                        <router-view></router-view>
@endsection
