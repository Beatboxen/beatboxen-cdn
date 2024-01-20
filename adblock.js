var ADS_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

function checkAdsBlocked(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.status === 0 || xhr.responseURL !== ADS_URL);
        }
    };
    xhr.open('HEAD', ADS_URL, true);
    xhr.send(null);
}

checkAdsBlocked(function (adsBlocked) {
    if (adsBlocked) {
        var adblockWarningHTML = `
            <div class="adblock-warning">
                <img src="/assets/logo.png" width="128px" id="adblock-icon">
                <p id="adblock-title">Adblockere er ikke tilladt.</p>
                <p>Hvis vi ikke havde reklamer, ville du ikke kunne bruge Beatboxen gratis.</p>
            </div>
            <style>
                .adblock-warning {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                } 

                #adblock-icon {
                    font-size: 64px;
                    margin-bottom: 32px;
                }

                #adblock-title {
                    font-weight: 500;
                    font-size: 18px;
                    margin-bottom: 8px;
                }
            </style>
        `;

        document.body.innerHTML = adblockWarningHTML;
    }
});