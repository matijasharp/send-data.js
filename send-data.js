window.addEventListener('load', function() {
  const iframe = document.getElementById('softr-iframe-id'); // Replace with your actual iframe ID
  const message = {
    jwt: 'YOUR_GENERATED_JWT',
    roomName: 'YOUR_ROOM_NAME'
  };

  if (iframe) {
    iframe.contentWindow.postMessage(message, '*');
  }
});
