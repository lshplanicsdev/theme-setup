<!doctype html>

<html lang="en" class="layout-navbar-fixed layout-menu-fixed layout-compact" dir="ltr" data-skin="default"
    data-bs-theme="light" data-assets-path="../../assets/" data-template="vertical-menu-template-no-customizer">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Demo: SweetAlert2 - Extended UI | Materialize - Bootstrap Dashboard PRO</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&ampdisplay=swap"
        rel="stylesheet" />

    <link rel="stylesheet" href="../../assets/vendor/fonts/iconify-icons.css" />

    <!-- Core CSS -->
    <!-- build:css assets/vendor/css/theme.css -->

    <link rel="stylesheet" href="../../assets/vendor/libs/node-waves/node-waves.css" />

    <link rel="stylesheet" href="../../assets/vendor/css/core.css" />
    <link rel="stylesheet" href="../../assets/css/demo.css" />

    <!-- Vendors CSS -->

    <link rel="stylesheet" href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

    <!-- endbuild -->

    <link rel="stylesheet" href="../../assets/vendor/libs/animate-css/animate.css" />
    <link rel="stylesheet" href="../../assets/vendor/libs/sweetalert2/sweetalert2.css" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="../../assets/vendor/js/helpers.js"></script>
    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->

    <!--? Config: Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file. -->

    <script src="../../assets/js/config.js"></script>
</head>

<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <!-- Menu -->

            <!-- / Navbar -->

            <!-- Content wrapper -->
            <div class="content-wrapper">
                <!-- Content -->
                <div class="container-xxl flex-grow-1 container-p-y">
                    <div class="row">
                        <!-- Basic example section -->
                        <div class="col-12 mb-6">
                            <div class="card">
                                <h5 class="card-header">Basic Examples</h5>
                                <div class="card-body">
                                    <span>
                                        SweetAlert automatically centers itself on the page and looks great no matter if
                                        you're using a
                                        desktop computer, mobile or tablet. It's even highly customizable, as you can
                                        see below!
                                    </span>
                                    <div class="demo-inline-spacing">
                                        <button type="button" class="btn btn-primary" id="basic-alert">Basic</button>
                                        <button type="button" class="btn btn-primary" id="with-title">With
                                            Title</button>
                                        <button type="button" class="btn btn-primary" id="footer-alert">With
                                            Footer</button>
                                        <button type="button" class="btn btn-primary" id="html-alert">HTML</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Basic example section -->

                        <!-- Sweet alert Positions -->
                        <div class="col-12 mb-6">
                            <div class="card">
                                <h5 class="card-header">Position</h5>
                                <div class="card-body">
                                    <span>
                                        You can specify position of your alert with
                                        <code>{position : top-start | top-end | bottom-start | bottom-end }</code>
                                        in js
                                    </span>
                                    <div class="demo-inline-spacing">
                                        <button class="btn btn-primary" id="position-top-start">Top Start</button>
                                        <button class="btn btn-primary" id="position-top-end">Top End</button>
                                        <button class="btn btn-primary" id="position-bottom-start">Bottom
                                            Starts</button>
                                        <button class="btn btn-primary" id="position-bottom-end">Bottom End</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Sweet alert Positions -->

                        <!-- SweetAlert Animations -->
                        <div class="col-12 mb-6">
                            <div class="card">
                                <h5 class="card-header">Animations</h5>
                                <div class="card-body">
                                    <span>
                                        Use <code>popup</code> inside <code>showClass</code> parameter to add animation
                                        to alert
                                    </span>
                                    <div class="demo-inline-spacing">
                                        <button class="btn btn-primary" id="bounce-in-animation">Bounce In</button>
                                        <button class="btn btn-primary" id="fade-in-animation">Fade In</button>
                                        <button class="btn btn-primary" id="flip-x-animation">Flip In</button>
                                        <button class="btn btn-primary" id="tada-animation">Tada</button>
                                        <button class="btn btn-primary" id="shake-animation">Shake</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /SweetAlert Animations -->

                        <!-- Types section -->
                        <div class="col-12 mb-6">
                            <div class="card">
                                <h5 class="card-header">Types</h5>
                                <div class="card-body">
                                    <span> Use <code>icon</code> parameter to create a alert with type. </span>
                                    <div class="demo-inline-spacing">
                                        <button type="button" class="btn btn-success"
                                            id="type-success">Success</button>
                                        <button type="button" class="btn btn-info" id="type-info">Info</button>
                                        <button type="button" class="btn btn-warning"
                                            id="type-warning">Warning</button>
                                        <button type="button" class="btn btn-danger" id="type-error">Error</button>
                                        <button type="button" class="btn btn-secondary"
                                            id="type-question">Question</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Types section -->

                        <!-- Options section -->
                        <div class="col-12 mb-6">
                            <div class="card">
                                <h5 class="card-header">Options</h5>
                                <div class="card-body">
                                    <div class="demo-inline-spacing">
                                        <button type="button" class="btn btn-primary" id="custom-image">Custom
                                            Image</button>
                                        <button type="button" class="btn btn-primary" id="auto-close">Auto
                                            Close</button>
                                        <button type="button" class="btn btn-primary" id="outside-click">Click
                                            Outside</button>
                                        <button type="button" class="btn btn-primary" id="progress-steps">Progress
                                            Steps</button>
                                        <button type="button" class="btn btn-primary"
                                            id="ajax-request">Ajax</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Options section -->

                        <!-- Confirm option section -->
                        <div class="col-12">
                            <div class="card">
                                <h5 class="card-header">Confirm Options</h5>
                                <div class="card-body">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-sm-12">
                                            <p>Confirm Button Action</p>
                                            <button type="button" class="btn btn-primary"
                                                id="confirm-text">Alert</button>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <p>Confirm & Cancel Button Action</p>
                                            <button type="button" class="btn btn-primary"
                                                id="confirm-color">Alert</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Confirm option section -->
                    </div>
                </div>
                <!-- / Content -->

                <!-- Footer -->
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl">
                        <div
                            class="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                            <div class="mb-2 mb-md-0">
                                &#169;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                , made with ❤️ by
                                <a href="https://pixinvent.com" target="_blank"
                                    class="footer-link fw-medium">Pixinvent</a>
                            </div>
                            <div class="d-none d-lg-inline-block">
                                <a href="https://themeforest.net/licenses/standard" class="footer-link me-4"
                                    target="_blank">License</a>

                                <a href="https://themeforest.net/user/pixinvent/portfolio" target="_blank"
                                    class="footer-link me-4">More Themes</a>
                                <a href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/"
                                    target="_blank" class="footer-link me-4">Documentation</a>

                                <a href="https://pixinvent.ticksy.com/" target="_blank"
                                    class="footer-link d-none d-sm-inline-block">Support</a>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- / Footer -->

                <div class="content-backdrop fade"></div>
            </div>
            <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
    </div>
    <!-- / Layout wrapper -->

    <!-- Core JS -->

    <!-- build:js assets/vendor/js/theme.js  -->

    <script src="../../assets/vendor/libs/jquery/jquery.js"></script>

    <script src="../../assets/vendor/libs/popper/popper.js"></script>
    <script src="../../assets/vendor/js/bootstrap.js"></script>
    <script src="../../assets/vendor/libs/node-waves/node-waves.js"></script>

    <script src="../../assets/vendor/libs/@algolia/autocomplete-js.js"></script>

    <script src="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../../assets/vendor/libs/hammer/hammer.js"></script>

    <script src="../../assets/vendor/libs/i18n/i18n.js"></script>

    <script src="../../assets/vendor/js/menu.js"></script>

    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="../../assets/vendor/libs/sweetalert2/sweetalert2.js"></script>

    <!-- Main JS -->

    <script src="../../assets/js/main.js"></script>

    <!-- Page JS -->
    <script src="../../assets/js/extended-ui-sweetalert2.js"></script>
</body>

</html>
