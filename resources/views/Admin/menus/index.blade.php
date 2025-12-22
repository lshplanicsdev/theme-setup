{{-- <x-app-layout>
    Menu
</x-app-layout> --}}
@extends('layout.app')
@section('title', 'Menus')
@section('content')
    {{-- @dd($menus) --}}
    <div class="card">
        <h5 class="card-header">Navbar Menus</h5>

        <div class="table-responsive text-nowrap">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    {{-- @if (isset($menus) && !empty($menus))
                        @foreach ($menus as $menu)
                                <tr>
                                    <td>
                                    <span>{{ isset($menus) && !empty($menus) ? $menu->id : '-' }}</span>
                                    </td>
                                    <td>{{ $menu->title }}</td>
                                    <td>
                                    {{ $menu->url }}
                                    </td>

                                    <td>
                                    <div class="dropdown">
                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="icon-base ri ri-more-2-line icon-18px"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('menus.edit',$menu->id ) }}"
                                            ><i class="icon-base ri ri-pencil-line icon-18px me-1"></i> Edit</a
                                        >

                                        <form action="{{ route('menus.destroy', $menu->id ) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button class="dropdown-item" type="submit"><i class="icon-base ri ri-delete-bin-6-line icon-18px me-1"></i> Delete</button>
                                        </form>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            @endforeach
                      @endif --}}


                    {{-- for sweet alert --}}
                    @forelse($menus as $menu)
                        <tr>
                            <td>
                                <span>{{ isset($menus) && !empty($menus) ? $menu->id : '-' }}</span>
                            </td>
                            <td>{{ $menu->title }}</td>
                            <td>
                                {{ $menu->url }}
                            </td>

                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-base ri ri-more-2-line icon-18px"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('menus.edit', $menu->id) }}"><i
                                                class="icon-base ri ri-pencil-line icon-18px me-1"></i> Edit</a>

                                        {{-- <form action="{{ route('menus.destroy', $menu->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button class="dropdown-item" type="submit"><i
                                                    class="icon-base ri ri-delete-bin-6-line icon-18px me-1"></i>
                                                Delete</button>
                                        </form> --}}
                                        <form action="{{ route('menus.destroy', $menu->id) }}" method="POST"
                                            class="delete-form">
                                            @csrf
                                            @method('DELETE')
                                            <button type="button" class="dropdown-item delete-btn">
                                                <i class="icon-base ri ri-delete-bin-6-line icon-18px me-1"></i>
                                                Delete
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>

                            <td colspan="4">No data Found</td>
                        </tr>
                    @endforelse


                </tbody>
            </table>

        </div>

    </div>




    {{-- end sweet alert --}}

@endsection
@section('page-script')
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

    <script>
        // document.addEventListener('DOMContentLoaded', function() {
        $(document).ready(function() {


            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function() {

                    const form = this.closest('.delete-form');

                    Swal.fire({
                        title: 'Delete Menu?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'Cancel',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {

                            form.submit();
                        }
                    });

                });
            });

        });
    </script>
@endsection
