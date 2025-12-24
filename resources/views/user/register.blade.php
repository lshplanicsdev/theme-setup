@extends('layout.app')
@section('title', 'User Registration')
@section('content')
    <div class="card mb-6">
        <h5 class="card-header">User Regiastration</h5>
        <form class="card-body" method="POST">
            @csrf

            <div class="row g-6">
                <div class="col-md-6">
                    <div class="form-floating form-floating-outline">
                        <input type="text" name="username" id="username" class="form-control" placeholder="john.doe" />
                        <label for="multicol-username">Username</label>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="input-group input-group-merge">
                        <div class="form-floating form-floating-outline">
                            <input type="text" name="email" id="email" class="form-control" placeholder="john.doe"
                                aria-label="john.doe" aria-describedby="multicol-email2" />
                            <label for="multicol-email">Email</label>
                        </div>
                        <span class="input-group-text" id="multicol-email2">@example.com</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-password-toggle">
                        <div class="input-group input-group-merge">
                            <div class="form-floating form-floating-outline">
                                <input type="password" name="password" id="password" class="form-control"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="multicol-password2" />
                                <label for="multicol-password">Password</label>
                            </div>
                            <span class="input-group-text cursor-pointer" id="multicol-password2"><i
                                    class="icon-base ri ri-eye-off-line"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-password-toggle">
                        <div class="input-group input-group-merge">
                            <div class="form-floating form-floating-outline">
                                <input type="password" name="password_confirmation" id="password_confirmation"
                                    class="form-control"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="multicol-confirm-password2" />
                                <label for="multicol-confirm-password">Confirm Password</label>
                            </div>
                            <span class="input-group-text cursor-pointer" id="multicol-confirm-password2"><i
                                    class="icon-base ri ri-eye-off-line"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-6">
                <button type="submit" class="btn btn-primary me-4">Submit</button>
                <button type="reset" class="btn btn-outline-secondary">Cancel</button>
            </div>
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

@endsection
