@extends('layout.app')
@section('title', 'Users')
@section('content')
    <div class="card">
        <div class="header d-flex">
            <h5 class="card-header">User Details</h5>
            <style>

            </style>
            <a href="{{ route('user.create') }}" class="btn btn-primary col-3">Add User</a>

        </div>

        <div class="table-responsive text-nowrap">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Plan</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody class="table-border-bottom-0">

                    @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->user }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->role }}</td>
                            <td>{{ $user->plan }}</td>
                            <td>{{ $user->status }}</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-base ri ri-more-2-line icon-18px"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('user.edit', $user) }}"><i
                                                class="icon-base ri ri-pencil-line icon-18px me-1"></i> Edit</a>


                                        <form action="{{ route('user.destroy', $user->id) }}" method="POST"
                                            class="delete-form">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="dropdown-item delete-btn">
                                                <i class="icon-base ri ri-delete-bin-6-line icon-18px me-1"></i>
                                                Delete
                                            </button>
                                        </form>


                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach


                </tbody>
            </table>

        </div>

    </div>


    {{-- <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function() {
            function loadData() {
                $.ajax({
                    url: "{{ route('user.index') }}",
                    type: 'GET',
                    success: function(response) {
                        // console.log(response);
                    },
                    error: function(xhr) {
                        console.log(xhr);
                    }
                })
            }
            loadData();
        })
    </script> --}}


@endsection
