$(document).ready(function(){
  var channels = ["freecodecamp"];
  function aFunction(channel) {
    var url = '';
    var status;
    var streamDescription;
    var description;
    var logo;
    var channelLink;
    status = "";
    streamDescription = "";
    url = 'https://wind-bow.glitch.me/twitch-api/streams/' + channel + "?callback=?";
    $.getJSON(url).done(function(data) {
      if (data.stream == null) status = "Offline";
      else {
        status = "Live";
        streamDescription = data.stream.channel.status;
      }
    }).done();
    url = 'https://wind-bow.glitch.me/twitch-api/channels/' + channel + "?callback=?";
    $.getJSON(url).done(function(data) {
      description = data.status;
      logo = data.logo;
      channelLink = "https://www.twitch.tv/" + channel;
      $("#listContainer").append('<div class="row ' + status.toLowerCase() + '"><a href="' + channelLink + '"><img class="logo" src="' + logo + '" alt="logo"></a><a class="stream-status">' + status + '</a><a class="stream-description">' + streamDescription + '</a></div>');
    })
    return true;
  }
  for (var i = 0; i < channels.length; i++) {
    aFunction(channels[i]);
  }
})