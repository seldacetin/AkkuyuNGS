// loadNavbar.js
document.addEventListener('DOMContentLoaded', () => {

const NAVBAR = `
<header class="nav navbar navbar-expand-md d-print-none">
    <div class="container-xl">
        <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a style="font-size: small;">
            <img src="./img/1.jpg" width="110" height="32" alt="" class="navbar-brand-image bg-black">
            <i>GÜVENLİK DEPARTMANI</i>
            </a>
        </h1>
        <div class="navbar-nav flex-row order-md-last">
            <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form action="file:///C:/Users/selda.cetin/KartBakanlik/geciciKart/templates/demo/demo/" method="get" autocomplete="off" novalidate="">
                    <div class="input-icon">
                        <span class="input-icon-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                        </span>
                        <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
                    </div>
                </form>
            </div>
        </div>
    </div>
</header>
<header class="nav navbar navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar">
            <div class="container-xl">
                <ul class="navbar-nav">
                    <!--
                    <li class="nav-item">
                        <a class="nav-link" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\home.svg">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>
                            </span>
                            <span class="nav-link-title">
                            Anasayfa
                            </span>
                        </a>
                    </li>
                    -->
                    <li class="nav nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                            Yeni Personel
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Türk Personel
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="tBakanlik.html" class="dropdown-item">
                                                Bakanlık Evrakları
                                            </a>
                                            <a href="tgiris.html" class="dropdown-item">Giriş Evrakları</a>
                                        </div>
                                    </div>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Yabancı Personel
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropend">
                                                <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                                    Bakanlık Evrakları
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="rusbelarus.html" class="dropdown-item">Rus-Belarus Vatandaşları</a>
                                                    <a href="cisulkeler.html" class="dropdown-item">CIS Ülkeleri</a>
                                                    <a href="digerulkeler.html" class="dropdown-item">Diğer Ülkeler</a>
                                                </div>
                                            </div>
                                            <a href="ygiris.html" class="dropdown-item">Giriş Evrakları</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                            Personel Kart İşlemleri
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Kart Yenileme
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="kyenilemeturk.html" class="dropdown-item">
                                            Türk Personel
                                            </a>
                                            <a href="kyenilemeyabanci.html" class="dropdown-item">
                                            Yabancı Personel
                                            </a>
                                        </div>
                                    </div>
                                        <a class="dropdown-item" href="kiptal.html">
                                        Kart İptal
                                        </a>
                                        <a class="dropdown-item" href="ksureuzatma.html">
                                        Kart Süresi Uzatma
                                        </a>
                                        <a class="dropdown-item" href="90gunbloke.html">
                                        90 Gün Bloke Kaldırma
                                        </a>
                                        <a class="dropdown-item" href="vatandaslikdegisim.html">
                                        Vatandaşlık Değişimi
                                        </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                            Araç Kart İşlemleri
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                                            Araç Kart Başvuru
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item">
                                            Yeni Başvuru
                                            </a>
                                            <a href="#" class="dropdown-item">
                                            Şoför Değişikliği
                                            </a>
                                            <a href="#" class="dropdown-item">
                                            Kırık Yıpranmış
                                            </a>
                                            <a href="#" class="dropdown-item">
                                            Arızalı Kart
                                            </a>
                                        </div>
                                    </div>
                                        <a class="dropdown-item" href="#">
                                        Mektup Başvuru
                                        </a>
                                        <a class="dropdown-item" href="#">
                                        Kart Süresi Uzatma
                                        </a>
                                        <a class="dropdown-item" href="#">
                                        90 Gün Bloke Uzatma
                                        </a>
                                        <a class="dropdown-item" href="#">
                                        Kart İptali
                                        </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                            Malzeme Giriş Çıkış İşlemleri
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="malzeme.html">
                                    Malzeme Giriş Çıkış
                                    </a>
                                    <a class="dropdown-item" href="degerlimalzeme.html">
                                    Değerli Malzeme
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aciltir.html"role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                                Acil Tır Araç
                            </span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="C:\\Users\\selda.cetin\\Desktop\\GUIDEBOOK\\static\\package.svg" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                            </span>
                            <span class="nav-link-title">
                                Jeton İşlemleri
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="aylikJeton.html">
                                    1 Aylık Jeton
                                    </a>
                                    <a class="dropdown-item" href="yillikJeton.html">
                                    1 Yıllık Jeton
                                    </a>
                                    <a class="dropdown-item" href="jetoniptali.html">
                                    Jeton İptali
                                    </a>
                                    <a class="dropdown-item" href="kayipjeton.html">
                                    Kayıp Jeton İptali
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</header>`

document.getElementById('navbar').innerHTML = NAVBAR;

});