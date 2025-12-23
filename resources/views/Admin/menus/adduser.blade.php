@extends('layout.app')
@section('title', isset($user) && !empty($user) ? 'Update' : 'Create')
@section('content')
    <div class="row mb-6 gy-6">
        <div class="col-xl">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">
                        @if (isset($user) && !empty($user) ? 'Update' : 'Create')
                            Update User
                        @else
                            Add user
                        @endif
                    </h5>
                    <small class="text-body float-end">Default label</small>
                </div>
                <div class="card-body">
                    <form method="POST">
                        @csrf
                        @if (isset($user) && !empty($user) ? 'Update' : 'Create')
                            @method('PUT')
                        @endif

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" value="{{ isset($user) && !empty($user) ? $user->user : '' }}"
                                class="form-control " name="user" id="user" placeholder="Username" />

                            <label for="user">Username</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control "
                                value="{{ isset($user) && !empty($user) ? $user->email : '' }}" name="email"
                                id="email" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>

                        {{-- //password --}}

                        @if (isset($user) && !empty($user))
                            <div class="form-floating d-none form-floating-outline mb-6">
                                <input type="text" value="{{ isset($user) && !empty($user) ? $user->password : '' }}""
                                    class="form-control " name="password" id="password" placeholder="password" />
                                <label for="password">password</label>
                            </div>
                        @else
                            <div class="form-floating d-block form-floating-outline mb-6">
                                <input type="text" value="{{ isset($user) && !empty($user) ? $user->password : '' }}""
                                    class="form-control " name="password" id="password" placeholder="password" />
                                <label for="password">password</label>
                            </div>
                        @endif

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($user) && !empty($user) ? $user->role : '' }}" name="role" id="role"
                                placeholder="role" />
                            <label for="role">Role</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($user) && !empty($user) ? $user->plan : '' }}"" name="plan"
                                id="plan" placeholder="plan" />
                            <label for="plan">plan</label>
                        </div>
                        <div class="demo-inline-spacing">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false" id="statusButton">
                                    @if (isset($user) && !empty($user) ? $user->status == '1' : 'user status')
                                        Active
                                    @else
                                        Unactive
                                    @endif
                                </button>
                                <ul class="dropdown-menu" id="statusMenu">
                                    <li class="dropdown-item"
                                        @if (isset($user) && !empty($user)) {{ $user->status == '1' ? 'selected' : '' }} @endif
                                        data-value="active">
                                        Active</li>
                                    <li class="dropdown-item"
                                        @if (isset($user) && !empty($user)) {{ $user->status == '0' ? 'selected' : '' }} @endif
                                        data-value="unactive">
                                        Unactive</li>
                                </ul>
                            </div>
                            <br>

                            <button type="button" id="addbtn" class="btn btn-primary">
                                Add User
                            </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function() {

            // Listen for a click on any anchor tag within the #statusMenu
            $('#statusMenu .dropdown-item').on('click', function(event) {
                // Prevent the default link behavior
                event.preventDefault();

                // Get the selected value from the data-value attribute
                selectedValue = $(this).data('value');

                const selectedText = $(this).text();

                $('#statusButton').text(selectedText);

                console.log("Selected Value: " + selectedValue);
                console.log("Selected Text: " + selectedText);


            });

            $('#addbtn').on('click', function(e) {
                e.preventDefault();
                console.log("value of selection : ", selectedValue);

                if (selectedValue == "active") {
                    console.log("value : ", 1);
                } else {
                    console.log("value : ", 0);
                }

                let password = $('#password').val();

                if (password) {
                    data = {
                        user: $('#user').val().trim(),
                        email: $('#email').val().trim(),
                        role: $('#role').val().trim(),
                        plan: $('#plan').val().trim(),
                        status: selectedValue,
                    };
                } else {
                    data = {
                        user: $('#user').val().trim(),
                        email: $('#email').val().trim(),
                        password: $('#password').val(),
                        role: $('#role').val().trim(),
                        plan: $('#plan').val().trim(),
                        status: selectedValue,
                    };
                }




                console.log(data);

                $.ajax({

                    url: "{{ isset($user) && !empty($user) ? route('user.update', $user->id) : route('user.store') }}",
                    type: "{{ isset($user) && !empty($user) ? 'PUT' : 'POST' }}",

                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    },
                    data: data,
                    success: function(response) {
                        console.log(response);
                        window.location.href = '/user'
                    },
                    error: function(xhr, status, error) {
                        console.log(xhr.responseText);
                    }
                })

            })

        });
    </script>
@endsection
