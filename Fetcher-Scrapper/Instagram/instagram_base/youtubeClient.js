let api_key = 'AIzaSyCKtQ8j5THMkk0fWdhz9NEFqnIpWg2guws';

$(document).ready(function() {

    $('#searchButton').click(function() {
        // clear any previous results
        $('#results ol').html('');
        $('#videos').html('');

        // query YouTube
        let query = $('#query').val();
        let url = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${query}&key=${api_key}`;
        $.getJSON(url, function(data) {
            console.log(data);
            $.each(data.items, function(index, item) {
                $('#results ol').append(renderResult(item));
                $('#videos').append(renderVideo(item));
             });
        });
    });
});

function renderResult(item) {
    if (item.id.kind === 'youtube#video') {
       li = $('<li />');
       a = $('<a />');
       a.attr('href', 'https://www.youtube.com/watch?v=' + item.id.videoId);
       a.text(item.snippet.title);
       li.append(a);
       return li;
    } else {
       // likely a channel, ignore
       return '';
    }
 }
 
 function renderVideo(item) {
    if (item.id.kind === 'youtube#video') {
       return '<div>' +
              ' <embed width="420"' +
              '        height="345"' +
              '        src="https://www.youtube.com/v/' + item.id.videoId + '"' +
              '        type="application/x-shockwave-flash">' +
              ' </embed>' +
              '</div>';
    } else {
       // likely a channel, ignore
       return '';
    }
 }