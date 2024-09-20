import Script from "next/script";

export const sendClickEvent = (triggerId) => {
  console.log('sendClickEvent', triggerId);

  sendEvent({
    action: 'User click', category: 'User interaction', label: triggerId
  })
}

export const sendEvent = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const GoogleAnalytics = ({ ga_id }) => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?
        id=${ga_id}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${ga_id}');
          `,
        }}
      ></Script>
    </>
  );
}
export default GoogleAnalytics;