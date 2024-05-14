class SpecialNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!--navigation bar-->
        <div class="fContainer">
        <nav class="wrapper">
            <div class="brand">
            <div class="firstname">Vending</div>
            <div class="lastname">Machine</div>
            </div>

            <ul class="navigation">
            <li><a href="/ ">Beranda</a></li>
            <li><a href="/ ">Layanan</a></li>
            <li><a href="/ ">Produk</a></li>
            <li><a href="/ ">Kontak</a></li>
            <li><a href="/ " class="active">Informasi</a></li>
            </ul>
        </nav>
        </div>
        `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="footer">
      <div class="footer-subscribe-social-media">
        <div class="footer-contact">
          <div class="footer-subscribe">
            <h3>Subscribe to Our Newsletter</h3>
            <form action="">
              <div>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <button type="submit">Subcribe Now</button>
            </form>
          </div>
        </div>

        <div class="footer-social-media">
          <h3>Follow Us</h3>
          <div class="social-media">
            <a href="https://twitter.com/YourTwitterHandle">
              <div class="circle">
                <img src="Resources\Image\Facebook.png" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/YourTwitterHandle">
              <div class="circle">
                <img src="Resources\Image\YouTube.png" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/YourTwitterHandle">
              <div class="circle">
                <img src="Resources\Image\Twitter.png" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/YourTwitterHandle">
              <div class="circle">
                <img src="Resources\Image\Instagram.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-shortcut">
        <div class="footer-shortcut-wrapper">
          <h3>MAIN MENU</h3>
          <div class="shortcut-wrapper">
            <div class="shortcut-wrapper-left">
              <a href="">Beranda</a>
              <a href="">Layanan</a>
              <a href="">Produk</a>
            </div>

            <div class="shortcut-wrapper-right">
              <a href="">Kontak</a>
              <a href="">Informasi</a>
            </div>
          </div>
        </div>

        <div class="footer-shortcut-wrapper">
          <h3>VENDING MACHINE</h3>
          <div class="shortcut-wrapper">
            <div class="shortcut-wrapper-left">
              <a href="">Food</a>
              <a href="">Carbonated</a>
            </div>

            <div class="shortcut-wrapper-right">
              <a href="">Water</a>
              <a href="">Non Carbonated</a>
            </div>
          </div>
        </div>

        <div class="footer-shortcut-wrapper">
          <h3>Main menu</h3>
          <div class="shortcut-wrapper">
            <div class="shortcut-wrapper-left">
              <a href="">Beranda</a>
              <a href="">Layanan</a>
              <a href="">Produk</a>
            </div>

            <div class="shortcut-wrapper-right">
              <a href="">Kontak</a>
              <a href="">Informasi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        `

    }
}

customElements.define("special-navbar", SpecialNavbar);
customElements.define("special-footer", SpecialFooter);