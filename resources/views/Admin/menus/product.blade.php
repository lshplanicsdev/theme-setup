@extends('layout.app')
@section('content')
    <div class="content-wrapper">
        <div class="button">
            <a href="{{ route('product.create') }}" class="btn btn-primary col-3">Add Product</a>
        </div>
        <!-- Content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <!-- Examples -->

            <table class="table table-hover-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>About Product</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    @forelse($products as $product)
                        <tr>

                            <td>{{ isset($product) && !empty($product) ? $product->id : '-' }}</td>
                            <td>{{ isset($product) && !empty($product) ? $product->p_name : '-' }}</td>
                            <td>{{ isset($product) && !empty($product) ? $product->p_price : '-' }}</td>
                            <td>{{ isset($product) && !empty($product) ? $product->discription : '-' }}</td>
                            <td>{{ isset($product) && !empty($product) ? $product->p_image : '-' }}</td>

                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-base ri ri-more-2-line icon-18px"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('product.edit', $product->id) }}"><i
                                                class="icon-base ri ri-pencil-line icon-18px me-1"></i>
                                            Edit</a>

                                        {{-- <button class="delete-btn btn btn-danger"
                                                        data-id="{{ $product->id }}">
                                                        Delete
                                                    </button> --}}

                                        <form action="{{ route('product.destroy', $product->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button class="dropdown-item" type="submit"><i
                                                    class="icon-base ri ri-delete-bin-6-line icon-18px me-1"></i>
                                                Delete</button>
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




            <!-- Examples -->

            <!-- Content types -->

            <!--/ Card layout -->
        </div>
        <!-- / Content -->
    @endsection
