/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '362616290883-rctss7f688fdscjq55to07s74epiqfru.apps.googleusercontent.com'
const API_KEY = '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';
const SpreadsheetID = '1_8mE2TFaSjZwECW8UTe4swI0tjGHqHtXARDcbVCjEy4';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/spreadsheets'];

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
  }


async function initializeGapiClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
}

// function appendValues(spreadsheetId, range, valueInputOption, _values, callback) {
//     let values = [
//       [
//       ],
//     ];
//     values = _values;
//     const body = {
//       values: values,
//     };
//     try {
//       gapi.client.sheets.spreadsheets.values.append({
//         spreadsheetId: SpreadsheetID,
//         range: range,
//         valueInputOption: valueInputOption,
//         resource: body,
//       }).then((response) => {
//         const result = response.result;
//         console.log(`${result.updates.updatedCells} cells appended.`);
//         if (callback) callback(response);
//       });
//     } catch (err) {
//       document.getElementById('content').innerText = err.message;
//       return;
//     }
//   }