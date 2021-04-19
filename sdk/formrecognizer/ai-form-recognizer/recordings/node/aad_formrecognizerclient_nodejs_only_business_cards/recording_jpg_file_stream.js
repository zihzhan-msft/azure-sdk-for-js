let nock = require('nock');

module.exports.hash = "e7ba885af99b2b7d9798f6275a212283";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1331',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '91a15d67-2330-491c-b84d-bca49f2f5101',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AjzFVQ1mzahOgLFbzhWoi1fGLH8mEwAAACKn9dcOAAAA; expires=Thu, 29-Apr-2021 23:15:36 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 30 Mar 2021 23:15:35 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.3/prebuilt/businessCard/analyzeResults/5b217082-9c89-4b04-8a45-1251bb0961e1',
  'x-envoy-upstream-service-time',
  '490',
  'apim-request-id',
  '5b217082-9c89-4b04-8a45-1251bb0961e1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 30 Mar 2021 23:15:37 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.3/prebuilt/businessCard/analyzeResults/5b217082-9c89-4b04-8a45-1251bb0961e1')
  .reply(200, {"status":"running","createdDateTime":"2021-03-30T23:15:37Z","lastUpdatedDateTime":"2021-03-30T23:15:37Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '12',
  'apim-request-id',
  'c920dab6-7646-4654-a117-5a3e861c51f5',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 30 Mar 2021 23:15:37 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.3/prebuilt/businessCard/analyzeResults/5b217082-9c89-4b04-8a45-1251bb0961e1')
  .reply(200, {"status":"running","createdDateTime":"2021-03-30T23:15:37Z","lastUpdatedDateTime":"2021-03-30T23:15:37Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '15',
  'apim-request-id',
  '4a5abda6-1ba9-4baf-98e3-68f30869eb54',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 30 Mar 2021 23:15:37 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.3/prebuilt/businessCard/analyzeResults/5b217082-9c89-4b04-8a45-1251bb0961e1')
  .reply(200, {"status":"succeeded","createdDateTime":"2021-03-30T23:15:37Z","lastUpdatedDateTime":"2021-03-30T23:15:40Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":-16.6836,"width":4032,"height":3024,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:businesscard","pageRange":[1,1],"fields":{"Addresses":{"type":"array","valueArray":[{"type":"string","valueString":"2 Kingdom Street Paddington, London, W2 6BD","text":"2 Kingdom Street Paddington, London, W2 6BD","boundingBox":[1227.3,2138.3,2520.2,1690.5,2597,1912.3,1304.1,2360.1],"page":1,"confidence":0.98}]},"CompanyNames":{"type":"array","valueArray":[{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[1146,1926,2224,1587,2285,1756,1202,2099],"page":1,"confidence":0.168}]},"ContactNames":{"type":"array","valueArray":[{"type":"object","valueObject":{"FirstName":{"type":"string","valueString":"Avery","text":"Avery","boundingBox":[666,1102,1111,995,1140,1114,696,1216],"page":1},"LastName":{"type":"string","valueString":"Smith","text":"Smith","boundingBox":[1170,981,1571,881,1600,1000,1200,1100],"page":1}},"text":"Dr. Avery Smith","boundingBox":[414.1,1153,1572,880.8,1601.3,1005.6,443.5,1277.9],"page":1,"confidence":0.979}]},"Departments":{"type":"array","valueArray":[{"type":"string","valueString":"Cloud & Al Department","text":"Cloud & Al Department","boundingBox":[473.6,1409.5,1586,1134,1607.3,1219.8,494.9,1495.3],"page":1,"confidence":0.989}]},"Emails":{"type":"array","valueArray":[{"type":"string","valueString":"avery.smith@contoso.com","text":"avery.smith@contoso.com","boundingBox":[2106,934,2908,706,2921,769,2122,993],"page":1,"confidence":0.99}]},"Faxes":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 20 6789 2345","boundingBox":[2520.4,1195.5,3191.8,983.5,3215.8,1059.2,2544.3,1271.3],"page":1,"confidence":0.99}]},"JobTitles":{"type":"array","valueArray":[{"type":"string","valueString":"Senior Researcher","text":"Senior Researcher","boundingBox":[451,1312,1315.9,1103.6,1334.7,1181.7,469.8,1390],"page":1,"confidence":0.99}]},"MobilePhones":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 7911 123456","boundingBox":[2426.8,1040.1,3065.5,846,3087.2,917.6,2448.5,1111.7],"page":1,"confidence":0.99}]},"Websites":{"type":"array","valueArray":[{"type":"string","valueString":"https://www.contoso.com/","text":"https://www.contoso.com/","boundingBox":[2120,1003,2981,757,3006,824,2139,1075],"page":1,"confidence":0.99}]},"WorkPhones":{"type":"array","valueArray":[{"type":"phoneNumber","text":"+44 (0) 20 9876 5432","boundingBox":[2468.2,1118.1,3130.3,914.6,3152.9,988.2,2490.8,1191.6],"page":1,"confidence":0.989}]}}}]}}, [
  'Content-Length',
  '2684',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '18',
  'apim-request-id',
  '31259a31-1a49-4a63-8921-0cbf2bee2ab6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 30 Mar 2021 23:15:43 GMT'
]);