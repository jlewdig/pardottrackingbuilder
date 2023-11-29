function generateUTM() {
    var campaignName = document.getElementById('campaignName').value;
    var url = document.getElementById('url').value;
    var emailName = 'email-' + document.getElementById('emailName').value.replace(/\s+/g, '-').toLowerCase();

    var utmUrl = url + '?utm_source=pardot-salesforce-marketing-cloud' +
                 '&utm_medium=email&utm_campaign=' + encodeURIComponent(campaignName) +
                 '&utm_content=' + encodeURIComponent(emailName);

    document.getElementById('generatedUrl').value = utmUrl;
  
    var copyText = document.getElementById("generatedUrl");
    copyText.select();
     document.execCommand("copy");
}
