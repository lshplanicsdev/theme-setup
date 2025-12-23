@extends('layout.app')
@section('content')
    <div class="row mb-6 gy-6">
        <div class="col-xl">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Add User</h5>
                    <small class="text-body float-end">Default label</small>
                </div>
                <div class="card-body">
                    <form method="POST">
                        @csrf


                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control " name="user" id="user"
                                placeholder="Username" />

                            <label for="user">Username</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control " name="email" id="email" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control " name="password" id="password"
                                placeholder="password" />
                            <label for="password">password</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control " name="role" id="role" placeholder="role" />
                            <label for="role">Role</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control " name="plan" id="plan" placeholder="plan" />
                            <label for="plan">plan</label>
                        </div>
                        <div class="demo-inline-spacing">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false" id="statusButton">
                                    User Status
                                </button>
                                <ul class="dropdown-menu" id="statusMenu">
                                    <li><a class="dropdown-item" href="#" data-value="active">Active</a></li>
                                    <li><a class="dropdown-item" href="#" data-value="unactive">Unactive</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                </ul>
                            </div>
                            <br>

                            <button type="submit" class="btn btn-primary">
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
        // $(document).ready(function() {
        //     // Listen for a click on any anchor tag within the #statusMenu
        //     $('#statusMenu .dropdown-item').on('click', function(event) {
        //         // Prevent the default link behavior
        //         event.preventDefault();

        //         // Get the selected value from the data-value attribute
        //         var selectedValue = $(this).data('value');

        //         // Get the visible text of the selected item
        //         var selectedText = $(this).text();

        //         // Update the text of the main dropdown button
        //         $('#statusButton').text(selectedText);

        //         // Optional: Do something with the value
        //         console.log("Selected Value: " + selectedValue);
        //         console.log("Selected Text: " + selectedText);

        //         // You can use the selectedValue variable to submit via AJAX, etc.
        //     });
        // });
    </script>
@endsection
