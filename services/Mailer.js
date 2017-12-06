const sendGrid = require("sendgrid");
const helper = sendGrid.mail;
const Keys = require("../config/Keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(Keys.SendGridKey);
    this.from_email = new helper.Email("no-reply@chibaba.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }
  formatAddresses() {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }
  addClickTracking() {
    constTrackingSettings = new helper.TrackingSettings();
    constClickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const Personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
  async send () {
     const request = this.sgApi.emptyRequest({
       method: 'POST',
       path: '/v3/mail/send',
       body:this.toJSON()
     });
     const response = await this.sgApi.API(request);
     return response;
  }
}

module.exports = Mailer;
