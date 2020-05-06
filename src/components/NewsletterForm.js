import React from 'react'

export default function NewsletterForm() {
  return (
    <div>
      <h3>Get Rafter news in your inbox</h3>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/jplhomer"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/jplhomer', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <label
          for="bd-email"
          style={{
            display: 'block',
            marginBottom: '.5em',
          }}
        >
          Enter your email:
        </label>
        <div
          style={{
            marginBottom: '1em',
            display: 'flex',
          }}
        >
          <input
            style={{
              flexGrow: '1',
              padding: '0.2em 0.5em',
            }}
            type="email"
            name="email"
            id="bd-email"
            placeholder="your@email.com"
          />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </div>
        <p>
          <a href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </div>
  )
}
