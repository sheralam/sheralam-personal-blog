const msg = 'This application has been updated. Reload to display the latest version?';
export const onServiceWorkerUpdateReady = () => {  const answer = window.confirm(msg); if (answer === true) { window.location.reload()}
}