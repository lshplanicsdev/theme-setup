@extends('layout.app')
@section('title', isset($product) && !empty($product) ? 'Update' : 'Create')
@section('content')
    <div class="row mb-6 gy-6">
        <div class="col-xl">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">
                        @if (isset($product) && !empty($product))
                            Update Product
                        @else
                            Add Product
                        @endif
                    </h5>

                </div>
                <div class="card-body">
                    <form id="productForm" enctype="multipart/form-data">
                        @csrf
                        @if (isset($product) && !empty($product))
                            @method('PUT')
                        @else
                            @method('POST')
                        @endif
                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($product) && !empty($product) ? $product->p_name : '' }}" id="pname"
                                name="pname" placeholder="Product Name" />

                            <label for="basic-default-fullname">Product Name</label>
                            <span id="error-0" class="alert alert-danger d-none"></span>

                            {{-- Error message container --}}


                        </div>
                        <div class="form-floating form-floating-outline mb-6">
                            <input type="integer" value="{{ isset($product) && !empty($product) ? $product->p_price : '' }}"
                                class="form-control" id="pprice" name="pprice" placeholder="Product Price" />
                            <label for="basic-default-company">Product Price</label>

                            <span id="error-1" class="alert alert-danger d-none"></span>

                        </div>
                        <div class="form-floating form-floating-outline mb-6">
                            <input type="text" class="form-control"
                                value="{{ isset($product) && !empty($product) ? $product->discription : '' }}"
                                id="discription" name="discription" placeholder="Product Description" />
                            <label for="basic-default-company">About Product</label>

                            <span id="error-2" class="alert alert-danger d-none"></span>

                        </div>
                        {{-- <div class="mb-4">
                            <label for="formFile" class="form-label">Product Image</label>
                            <input class="form-control" value='{{  }}' type="file" id="pimage" name="pimage" />

                            <span id="error-3" class="alert alert-danger d-none"></span>

                        </div> --}}
                        <div class="images">
                            <div class="col-12 priview-image">
                                <img id="output" class="img-fluid img-thumbnail"
                                    src="{{ asset('storage/' . $product->p_image) }}" width="100px;" height="100px;"
                                    alt="">
                            </div>
                            <div class="mb-4">
                                <label for="formFile" class="form-label">Product Image</label>
                                <input class="form-control"
                                    onchange="document.querySelector('#output').src=window.url.createObjectURL(this.files[0])"
                                    type="file" id="pimage" name="pimage" />

                                <span id="error-3" class="alert alert-danger d-none"></span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary productbtn">
                            @if (isset($product) && !empty($product))
                                Update Product
                            @else
                                Add Product
                            @endif
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="check-section">
            <h3>{{ $product->p_image }}</h3>
            <h3>{{ $product->p_name }}</h3>
            <h3>{{ $product->p_title }}</h3>
        </div>

    </div>

    
@endsection

@section('page-script')
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        document.querySelector('.productbtn').addEventListener('click',function(e){
            e.preventDefault();

            swal.fire({
                'title' : 'toaster for product',
                
            })
        })
       
    </script>
@endsection

 {{-- $(document).ready(function() {

            $('#productForm').on('submit', function(e) {
                e.preventDefault();

                let formdata = new FormData(this);
                console.log(formdata);
                $.ajax({
                    url: "{{ isset($product) && !empty($product) ? route('product.update', $product) : route('product.store') }}",
                    type: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    },
                    data: formdata,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        console.log(response);
                        window.location.href = '/product'
                    },
                    error: function(xhr, error) {
                        console.log("error", xhr);
                        if (xhr.status === 422) {
                            var errors = xhr.responseJSON.error;
                            console.log("err", errors);
                            errors.forEach((element, index) => {
                                console.log(`Index: ${index}, Element: ${element}`);

                                $('#error-' + index).removeClass('d-none').addClass(
                                    'd-block');
                                $('#error-' + index).text(element);

                            });

                        } else {
                            // Handle other errors (e.g., 500 server error)
                            alert('An error occurred. Please try again.');
                        }
                    }

                })
            })
        }) --}}