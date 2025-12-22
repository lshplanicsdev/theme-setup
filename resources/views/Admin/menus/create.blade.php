{{-- <x-app-layout>
    Menus
</x-app-layout> --}}

{{-- // if you want to check the route names then use php artisan route:list  --}}

{{-- @extends('layout.app')
@section('title', isset($menu) && !empty($menu) ? 'Edit Menu' : 'Add Menu')

@section('content')
    <div class="row mb-6 gy-6">
        <div class="col-xl">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Basic Layout</h5>
                    <small class="text-body float-end">Default label</small>
                </div>
                <div class="card-body">
                    <form action="{{ isset($menu) && !empty($menu) ? route('menus.update', $menu) : route('menus.store') }}"
                        method="POST">
                        @csrf
                        @if (isset($menu) && !empty($menu))
                            @method('PUT')
                        @endif
                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($menu) && !empty($menu) ? $menu->title : '' }}" name="title"
                                id="title" placeholder="Title" />
                            <label for="basic-default-fullname">Title</label>
                        </div>
                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($menu) && !empty($menu) ? $menu->url : '' }}" name="url" id="url"
                                placeholder="Url" />
                            <label for="basic-default-company">Url</label>
                        </div>
                        <button type="submit" value="" class="btn btn-primary">
                            @if (isset($menu) && !empty($menu))
                                Update
                            @else
                                Create
                            @endif
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </div>
 --}}

{{-- toaster --}}
{{-- <div class="card">
        <h5 class="card-header">Notyf Notifications</h5>
        <div class="card-body">
            <div class="row">
                <!-- Message Input -->
                <div class="col-lg-6 col-xl-3">
                    <div class="mb-4">
                        <label class="form-label" for="message"></label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Enter a message...">
                          @if (session('success'))
{{ session('success') }}
@endif
                        </textarea>
                    </div>
                    <!-- Options -->
                    <div class="mb-4">
                        <div class="form-check">
                            <input id="dismissible" class="form-check-input" type="checkbox" />
                            <label class="form-check-label" for="dismissible">Dismissible</label>
                        </div>
                        <div class="form-check">
                            <input id="ripple" class="form-check-input" type="checkbox" checked />
                            <label class="form-check-label" for="ripple">Ripple Effect</label>
                        </div>
                    </div>
                </div>
                <!-- Type Selection -->
                <div class="col-lg-6 col-xl-3">
                    <div class="mb-4" id="notificationTypeGroup">
                        <label class="form-label">Notification Type</label>
                        <div class="form-check">
                            <input type="radio" id="successRadio" name="notificationType" class="form-check-input"
                                value="success" checked />
                            <label class="form-check-label" for="successRadio">Success</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="errorRadio" name="notificationType" class="form-check-input"
                                value="error" />
                            <label class="form-check-label" for="errorRadio">Error</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="infoRadio" name="notificationType" class="form-check-input"
                                value="info" />
                            <label class="form-check-label" for="infoRadio">Info</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="warningRadio" name="notificationType" class="form-check-input"
                                value="warning" />
                            <label class="form-check-label" for="warningRadio">Warning</label>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="duration">Duration (ms)</label>
                            <input id="duration" type="number" class="form-control"
                                placeholder="Enter duration in milliseconds" value="3000" />
                        </div>
                    </div>
                </div>
                <!-- Duration Input -->
                <div class="col">
                    <label class="form-label">Position Type</label>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-check">
                                <input id="positionleft" class="form-check-input" type="radio" name="positionx"
                                    value="left" />
                                <label class="form-check-label" for="positionleft">left Position</label>
                            </div>
                            <div class="form-check">
                                <input id="positioncenter" class="form-check-input" type="radio" name="positionx"
                                    value="center" />
                                <label class="form-check-label" for="positioncenter">center Position</label>
                            </div>
                            <div class="form-check">
                                <input id="positionright" class="form-check-input" type="radio" name="positionx"
                                    value="right" checked />
                                <label class="form-check-label" for="positionright">right Position</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input id="positionTop" class="form-check-input" type="radio" name="positiony"
                                    value="top" checked />
                                <label class="form-check-label" for="positionTop">Top Position</label>
                            </div>
                            <div class="form-check">
                                <input id="positionBottom" class="form-check-input" type="radio" name="positiony"
                                    value="bottom" />
                                <label class="form-check-label" for="positionBottom">Bottom Position</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="d-flex gap-3 flex-wrap">
                <button class="btn btn-primary" id="showNotification">Show Notification</button>
                <button class="btn btn-danger" id="clearNotifications">Clear Notifications</button>
            </div>
        </div>
    </div>

@endsection --}}
<!-- Bootstrap Toasts with Animation -->
{{-- @section('page-script') --}}
{{-- Ensure CSS and JS are loaded --}}
{{-- @vite(['resources/assets/vendor/libs/notyf/notyf.css', 'resources/assets/vendor/libs/notyf/notyf.js'])

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const btnShow = document.getElementById('showNotification');
            const btnClear = document.getElementById('clearNotifications');

            // Function to trigger notification based on your UI inputs
            function triggerToast() {
                // Get values from your HTML UI
                const message = document.getElementById('message').value;
                const type = document.querySelector('input[name="notificationType"]:checked').value;
                const duration = document.getElementById('duration')?.value || 3000;
                const posX = document.querySelector('input[name="positionx"]:checked').value;
                const posY = document.querySelector('input[name="positiony"]:checked').value;

                // Create a fresh Notyf instance with your UI choices
                const notyf = new Notyf({
                    duration: parseInt(duration),
                    position: {
                        x: posX,
                        y: posY
                    }
                });

                // Fire the notification
                if (type === 'error') {
                    notyf.error(message);
                } else {
                    notyf.success(message);
                }
            }

            // Click event for the button
            btnShow.addEventListener('click', triggerToast);

            // Auto-trigger if Laravel session exists
            @if (session('success'))
                triggerToast();
            @endif

            // Clear logic
            btnClear.addEventListener('click', function() {
                const elements = document.querySelectorAll('.notyf');
                elements.forEach(el => el.remove());
            });
        });
    </script>
@endsection --}}

@extends('layout.app')
@section('title', isset($menu) && !empty($menu) ? 'Edit Menu' : 'Add Menu')

@section('content')
    <div class="row mb-6 gy-6">
        <div class="col-xl">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">{{ isset($menu) && !empty($menu) ? 'Edit Menu' : 'Add Menu' }}</h5>
                    <small class="text-body float-end">Default label</small>
                </div>
                <div class="card-body">
                    <form action="{{ isset($menu) && !empty($menu) ? route('menus.update', $menu) : route('menus.store') }}"
                        method="POST">
                        @csrf
                        @if (isset($menu) && !empty($menu))
                            @method('PUT')
                        @endif

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text"
                                class="form-control @error('title')
                            is-invalid
                            @enderror"
                                value="{{ isset($menu) && !empty($menu) ? $menu->title : old('title') }}" name="title"
                                id="title" placeholder="Title" />
                            @error('title')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                            <label for="title">Title</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text"
                                class="form-control @error('url')
                            is-invalid
                            @enderror"
                                value="{{ isset($menu) && !empty($menu) ? $menu->url : old('url') }}" name="url"
                                id="url" placeholder="Url" />
                            @error('url')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                            <label for="url">Url</label>
                        </div>

                        <button type="submit" class="btn btn-primary">
                            {{ isset($menu) && !empty($menu) ? 'Update' : 'Create' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>


@endsection
