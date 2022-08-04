<template>
    <div class="d-flex flex-column justify-content-center align-items-center mt-5">
      <div class="ms-2">
        FOLLOW STAR WARS:
      </div>
      <div class="col-4 d-flex justify-content-center ">
        <a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699" target="_blank" class="m-2">
          <div class="icon face"></div>
        </a>
        <a href="https://www.instagram.com/starwars/" target="_blank" class="m-2">
          <div class="icon ig"></div>
        </a>
        <a href="https://twitter.com/starwars" target="_blank" class="m-2">
          <div class="icon tw"></div>
        </a>
        <a href="https://www.youtube.com/user/starwars" target="_blank" class="m-2">
          <div class="icon you"></div>
        </a>
      </div>
      <p class="mt-4">
        TM & © Lucasfilm Ltd. All Rights Reserved
      </p>
      <div class="text-center my-2">
        <div class="d-md-inline"><a class="link" href="https://disneytermsofuse.com/" target="_blank"> Terms of Use |</a>
        </div>
        <div class="d-md-inline"><a class="link" href="https://support.disney.com/hc/en-gb" target="_blank"> Additional
            Content Information |</a></div>
        <div class="d-md-inline"><a class="link" href="https://privacy.thewaltdisneycompany.com/en/"
            target="_blank"> Privacy Policy |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            target="_blank"> Children’s Online Privacy Policy |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
            target="_blank"> Your California Privacy Rights |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"
            target="_blank"> Star Wars at shopDisney |</a></div>
        <div class="d-md-inline"><a class="link" href="https://support.starwars.com/hc/en-us" target="_blank"> Star Wars Helpdesk |</a></div>
        <div class="d-md-inline"><a class="link" href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"
            target="_blank"> Interest-Based Ads |</a></div>
        <div class="d-md-inline"><a class="link"
            href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d"
            target="_blank"> Do Not Sell My Personal Information</a> </div>
      </div>
    </div>
</template>

<style scoped>
/*EL CODIGO DE STYLE QUE FALTA ESTÁ EN HEADER*/
.link {
  text-decoration: none;
  color: #808080;
  position: relative;
  letter-spacing: 0.5px;
}

.link:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #808080;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
}

.link:hover:after {
  transform: scaleX(1);
}
</style>