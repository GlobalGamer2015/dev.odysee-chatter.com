// Needs to be Async
async function startChat(claim_id, fetch) {
  // If connected, do not connect again.
  let isConnected = false;

  // Get Stream Claim ID from Overlay Page.
  var stream_claim_id = '';

  // Updates Stream Claim ID
  stream_claim_id = await fetch(
    `https://chainquery.lbry.com/api/sql?query=SELECT%20*%20FROM%20claim%20WHERE%20publisher_id=%22${claim_id}%22%20AND%20bid_state%3C%3E%22Spent%22%20AND%20claim_type=1%20AND%20source_hash%20IS%20NULL%20ORDER%20BY%20id%20DESC%20LIMIT%201`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.data.length === 0) {
        // console.log('not loaded');
        document.getElementById('overlay').innerHTML += `
        <div id="${Date().getTime()}" class="overlay-chat" style="padding: 2.5px 20px 2.5px 2.5px;">
          <div class="overlay-chat-body" style="background-color: #241c30; color: white; word-wrap: break-word; display: flex; border-radius: 15px; bottom: 0; padding: 5px 5px 5px 5px;">
            <div class="overlay-chat-info" style="padding: 10px 10px 10px 10px; display: inline-flex;">
              <span class="overlay-chat-author" style="display: inline-flex; padding-left: 5px;">System:</span>
              <div class="overlay-chat-text" style="display: inline-flex; padding-left: 5px;">Wrong Claim ID, check your Overlay URL.</div>
            </div>
          </div>
      </div>`;
      } else {
        return res.data[0].claim_id;
      }
    });

  function getOdyseeChat() {
    var ws = new WebSocket(`wss://comments.lbry.com/api/v2/live-chat/subscribe?subscription_id=${stream_claim_id}`);

    ws.onopen = function () {
      // console.log(`connected to ${stream_claim_id} chat.`);
      isConnected = true;
    };

    ws.onmessage = function (event) {
      const data = JSON.parse(event.data);
      // const channel_id = data.data.comment.channel_id;
      const channel_name = data.data.comment.channel_name;
      // const channel_url = data.data.comment.channel_url;
      // const claim_id = data.data.comment.claim_id;
      const comment = data.data.comment.comment;
      // const comment_id = data.data.comment.comment_id;
      // const currency = data.data.comment.currency;
      const is_creator = data.data.comment.is_creator;
      const is_moderator = data.data.comment.is_moderator;
      // const is_global_mod = data.data.comment.is_global_mod;
      // const is_fiat = data.data.comment.is_fiat;
      // const is_hidden = data.data.comment.is_hidden;
      // const is_pinned = data.data.comment.is_pinned;
      // const signature = data.data.comment.signature;
      // const signing_ts = data.data.comment.signing_ts;
      // const support_amount = data.data.comment.support_amount;
      // const timestamp = data.data.comment.timestamp;
      // console.log(data);

      function Badge() {
        if (is_creator) {
          return '<svg size="16" class="icon icon--BadgeStreamer" aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="-1182 401 24 24" xml:space="preserve"><style type="text/css">.st0{fill:#FF5490}.st1{fill:#81BBB9}.st2{fill:#2E2A2F}.st3{fill:#FFFFFF}</style><path class="st0" d="M-1169.8,406.4c-4.3,0-7.8,3.5-7.8,7.8c0,0.4,0,0.8,0.1,1.1h1c-0.1-0.4-0.1-0.7-0.1-1.1c0-3.7,3-6.8,6.8-6.8 s6.8,3,6.8,6.8c0,0.4,0,0.8-0.1,1.1h1c0.1-0.4,0.1-0.7,0.1-1.1C-1162.1,409.9-1165.5,406.4-1169.8,406.4z"></path><path class="st0" d="M-1180,414.2c0-5.6,4.6-10.2,10.2-10.2c5.6,0,10.2,4.6,10.2,10.2c0,2.2-0.7,4.3-1.9,5.9l0.8,0.6 c1.3-1.8,2.1-4.1,2.1-6.5c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2c0,2.1,0.6,4.1,1.6,5.8l1-0.3 C-1179.4,418-1180,416.2-1180,414.2z"></path><path class="st1" d="M-1163.7,419.4"></path><path class="st1" d="M-1165.6,418.5c0-0.1,0-3.6,0-3.6c0-1.9-1-4.3-4.4-4.3s-4.4,2.4-4.4,4.3c0,0,0,3.6,0,3.6 c-1.4,0.2-1.8,0.7-1.8,0.7s2.2,2.7,6.2,2.7s6.2-2.7,6.2-2.7S-1164.2,418.7-1165.6,418.5z"></path><path class="st2" d="M-1169.2,418.5h-1.5c-1.7,0-3.1-0.6-3.1-2.2v-1.9c0-2.1,1.6-3,3.9-3s3.9,0.9,3.9,3v1.9 C-1166.1,417.8-1167.5,418.5-1169.2,418.5z"></path><path class="st3" d="M-1167.8,416.2c-0.2,0-0.4-0.2-0.4-0.4v-1.1c0-0.2,0-1-1.2-1c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4 c1.2,0,2,0.6,2,1.7v1.1C-1167.4,416.1-1167.6,416.2-1167.8,416.2z"></path></svg>';
        }
        if (is_moderator) {
          return '<svg size="16" class="icon icon--BadgeMod" aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" xml:space="preserve"><style type="text/css">.st0{fill:FF3850}.st1{fill:#181021}.st2{fill:#FFFFFF}</style><g><g><path class="st0" d="M11.69,6.77c4.86,0,7.55,0.9,8.52,1.31c1.29-1.46,3.28-4.14,3.28-6.76c0,0-4.17,4.86-6.92,5.12 c-1.25-0.87-2.77-1.38-4.41-1.38c0,0-3.21-0.06-4.63,1.31C4.81,6.44,0.51,1.32,0.51,1.32c0,2.61,1.97,5.27,3.25,6.74 C4.71,7.59,7.03,6.77,11.69,6.77z M19.87,19.38c0.02-0.13,0.04-0.27,0.04-0.4V12.8c0-1.03-0.21-2.02-0.58-2.92 c-0.83-0.33-3.25-1.11-7.64-1.11c-4.29,0-6.33,0.75-7,1.06c-0.38,0.91-0.6,1.91-0.6,2.97v6.18c0,0.13,0.02,0.26,0.04,0.39 C1.6,19.73,0,22.54,0,22.54L12,24l12-1.46C24,22.54,22.36,19.79,19.87,19.38z"></path></g></g><path class="st1" d="M13,18.57H11c-2.27,0-4.12-0.82-4.12-2.88v-2.46c0-2.77,2.17-3.94,5.11-3.94s5.11,1.17,5.11,3.94v2.46 C17.11,17.75,15.27,18.57,13,18.57z"></path><path class="st2" d="M15.06,15.25c-0.28,0-0.5-0.22-0.5-0.5v-1.42c0-0.32,0-1.31-1.63-1.31c-0.28,0-0.5-0.22-0.5-0.5 s0.22-0.5,0.5-0.5c1.65,0,2.63,0.86,2.63,2.31v1.42C15.56,15.02,15.33,15.25,15.06,15.25z"></path></svg>';
        }
      }

      document.getElementById('overlay').innerHTML += `
        <div class="overlay-chat" style="padding: 2.5px 2.5px 2.5px 2.5px; width: 25%;">
          <div class="overlay-chat-body" style="background-color: #241c30; color: white; word-wrap: break-word; display: flex; border-radius: 15px; bottom: 0; padding: 5px 5px 5px 5px;">
            <div class="overlay-chat-info" style="padding: 10px 10px 10px 10px; display: inline-flex; position: relative;">
              <span class="overlay-chat-author-badge" style="display: inline-flex; position: relative; align-items: center;">${Badge()}</span>
              <span class="overlay-chat-author" style="padding-left: 5px; display: inline-flex; position: relative; align-items: center;">${channel_name}</span>
              <div class="overlay-chat-text" style="display: inline-flex; padding-left: 7.5px;">${comment}</div>
            </div>
          </div>
        </div>`;
    };

    ws.onclose = function (e) {
      // console.log(e);
      isConnected = false;
      setTimeout(function () {
        getOdyseeChat();
      }, 10000);
    };

    ws.onerror = function (err) {
      // console.log(err);
      isConnected = false;
      ws.close();
    };
  }

  if (isConnected === false) {
    getOdyseeChat();
  }
}

module.exports.startChat = startChat;