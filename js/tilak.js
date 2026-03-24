// ── All Tilak Images ─────────────────────────────────────────────────
// Entries can be:
//   'gdrive:FILE_ID'                              → Google Drive (recommended)
//   'https://drive.google.com/file/d/FILE_ID/...' → Google Drive share link
//   'https://lh3.googleusercontent.com/d/FILE_ID' → Direct lh3 URL
//   '_DSC1382.JPG'                                → Local file in TILAK/
const BASE = 'TILAK/';

// Grid thumbnails (faster load); lightbox gets full-resolution
function imgSrc(entry, mode) {
  if (entry.startsWith('gdrive:') || parseGdriveId(entry)) {
    return gdriveImgUrl(entry, mode || 'thumb', 800);
  }
  return entry.startsWith('http') ? entry : BASE + entry;
}

// Full-resolution version for lightbox
function imgSrcFull(entry) {
  return imgSrc(entry, 'full');
}

const images = [
  'https://lh3.googleusercontent.com/d/1vKNn34DdQ3XcN2v-FXVun3yDaTR_C6ZP',  // _DSC1316.JPG
  'https://lh3.googleusercontent.com/d/1UpRXrLOGksbgixsNJ2BgsQLBIHzqaZyF',  // _DSC1319.JPG
  'https://lh3.googleusercontent.com/d/1DKUXFZWF6Bjt2377ZHh_4KMjYLff1yRt',  // _DSC1322.JPG
  'https://lh3.googleusercontent.com/d/1yQT7KqTG7X_IBhb-RI3upX2vBhCUF_D5',  // _DSC1324.JPG
  'https://lh3.googleusercontent.com/d/1LYSNT7hPh4i9vlLDY2nktE7iEVE42pNP',  // _DSC1327.JPG
  'https://lh3.googleusercontent.com/d/18JASu-PIuFlsgbOPnvjmAW7yhHaXKZnB',  // _DSC1329.JPG
  'https://lh3.googleusercontent.com/d/1TNl6F15411SCSkJuY_G1ghSA99PyZJvU',  // _DSC1330.JPG
  'https://lh3.googleusercontent.com/d/1i9hyyUzWF2i07jXFw7o1jHTPNciMNKf6',  // _DSC1334.JPG
  'https://lh3.googleusercontent.com/d/1rtK8UKImoSzDVF0d1HRxrsKDyA4LDzAe',  // _DSC1337.JPG
  'https://lh3.googleusercontent.com/d/1Sh0m0XAieCUXw-Iz1OVoYPoJHdgYmggB',  // _DSC1338.JPG
  'https://lh3.googleusercontent.com/d/1SdE51HbtL54xOR6eAwwk_xE2ECpjcflo',  // _DSC1339.JPG
  'https://lh3.googleusercontent.com/d/1ecopLLSZ73WFhMsXHguCqQl_8TV8nd8D',  // _DSC1340.JPG
  'https://lh3.googleusercontent.com/d/14rQCS_-GL7wUHUt0r9XdGZ-EaoQI686_',  // _DSC1341.JPG
  'https://lh3.googleusercontent.com/d/1kQ9q54gHas5kMPe-CYSELgbTA9vbha0Z',  // _DSC1342.JPG
  'https://lh3.googleusercontent.com/d/108XoVMv8bM6ZbceuorVoXH5HJqyjoTJj',  // _DSC1344.JPG
  'https://lh3.googleusercontent.com/d/1pMgXX9JD736XUsaavAfLGMgMcT1pY9q3',  // _DSC1346.JPG
  'https://lh3.googleusercontent.com/d/10Pp2EUJq0rRBzXg9ZnOcERY8gEk2hC-4',  // _DSC1348.JPG
  'https://lh3.googleusercontent.com/d/1gyfvYuvv8GfG75b-7MpBQc3z2OpVYWfv',  // _DSC1349.JPG
  'https://lh3.googleusercontent.com/d/16TJKJKjC7naD2kpVju1NI_wJXtnaUOUi',  // _DSC1354.JPG
  'https://lh3.googleusercontent.com/d/1yiMcrCa5smkMSLcwORHw2k-ceFlDYoLt',  // _DSC1358.JPG
  'https://lh3.googleusercontent.com/d/1v_eXIFSjju1gnq4nhVnHjiOuWsqxysiB',  // _DSC1382.JPG
  'https://lh3.googleusercontent.com/d/1SNqHa-MmnUj5cNgB28wvTDqvOBlH7_Pf',  // _DSC1385.JPG
  'https://lh3.googleusercontent.com/d/1EIsCZ9JR7X7hDoSPakfNGEbbe2yrxneW',  // _DSC1386.JPG
  'https://lh3.googleusercontent.com/d/1lc7RjzqjWEYbNq6VVXCTI8c6Xeic1wDn',  // _DSC1388.JPG
  'https://lh3.googleusercontent.com/d/1UTOpfeCVMgQzjsugfjeUDDjX-fzEJGSt',  // _DSC1392.JPG
  'https://lh3.googleusercontent.com/d/1itr22bAUBZYeYHpQTjlS5C3NcIyAYGiu',  // _DSC1398.JPG
  'https://lh3.googleusercontent.com/d/1_hQYnRjlG49DjJ8Je99S0W8BT-SJHnHg',  // _DSC1430.JPG
  'https://lh3.googleusercontent.com/d/11pxKrXteYWIOPXLrsjsbPclr8_w1e_8Y',  // _DSC1435.JPG
  'https://lh3.googleusercontent.com/d/1LeEGW0QROaHEsFJ19JXpBPMUAlwbWBaT',  // _DSC1442.JPG
  'https://lh3.googleusercontent.com/d/1nVXnOyRG9GYYDbRRr0aH1WJcfZMuQFpt',  // _DSC1444.JPG
  'https://lh3.googleusercontent.com/d/1fFPsNuJ-xj7bpXfOz-WkQ_Pv6u40WvpY',  // _DSC1446.JPG
  'https://lh3.googleusercontent.com/d/1VLOj8tQvb5kCod8jXqrDsKFyMOgu2pLi',  // _DSC1450.JPG
  'https://lh3.googleusercontent.com/d/1KSxXdjfLBcbTDAWaa50pAx_B5P2XjiKG',  // _DSC1451.JPG
  'https://lh3.googleusercontent.com/d/1PLmW5WSSql4HtBmYqcluZrxu3wc4Q9Jt',  // _DSC1452.JPG
  'https://lh3.googleusercontent.com/d/1UjmEy0gOel61pOqiY5HUXFDHiDfbxna2',  // _DSC1455.JPG
  'https://lh3.googleusercontent.com/d/1c1GTiSaRBugSCoMotSFKdV5Scn-fs2fw',  // _DSC1458.JPG
  'https://lh3.googleusercontent.com/d/1gmXLnLj-JbCgHTXn2shVbqFnj1hClXmQ',  // _DSC1460.JPG
  'https://lh3.googleusercontent.com/d/1JkJyvPBQqLNzqcIUileZX3sFdCBEzoPq',  // _DSC1461.JPG
  'https://lh3.googleusercontent.com/d/15Zx3nlrG8-TMcB_OPpGOmn4vYXbMZNg7',  // _DSC1463.JPG
  'https://lh3.googleusercontent.com/d/1etcDGopoHiz8xJXEIuEznCYjtYQR2e0e',  // _DSC1465.JPG
  'https://lh3.googleusercontent.com/d/1n2sNlCFrFXLxQMIZe-PD3MW-WiUEibYm',  // _DSC1471.JPG
  'https://lh3.googleusercontent.com/d/1yDtiRjn9HDEaf5DxPFRJvhuKengN8AOd',  // _DSC1473.JPG
  'https://lh3.googleusercontent.com/d/1V50P3F5Eo89UKRzJam7d7W7I4z5ZocjA',  // _DSC1475.JPG
  'https://lh3.googleusercontent.com/d/1YzXp3zcNN5FE8ElWpGuu3rl85idW-pt6',  // _DSC1476.JPG
  'https://lh3.googleusercontent.com/d/17NNkE6fm7CqGvYFF1Icp1HlAwblLQcyh',  // _DSC1478.JPG
  'https://lh3.googleusercontent.com/d/1ClsmNQIC4sp7omHuHLTCtjLUz7BMhKiL',  // _DSC1480.JPG
  'https://lh3.googleusercontent.com/d/1EpxntpSPPh2SFUx_AoaKLgtM4MMjh37p',  // _DSC1481.JPG
  'https://lh3.googleusercontent.com/d/1odHIRVyLud_w-Sl-8ioeCypfMKwbygqK',  // _DSC1489.JPG
  'https://lh3.googleusercontent.com/d/1vGC3qDlDtF3WSu78UTapAtHt_lDVkcBn',  // _DSC1490.JPG
  'https://lh3.googleusercontent.com/d/1-j3E8i6WmE54cyFQt6Vz1gCQH7SL7tuV',  // _DSC1492.JPG
  'https://lh3.googleusercontent.com/d/1DrVPMTJ3bffFPaV8c5j6TG9uRZ_JZCk0',  // _DSC1493.JPG
  'https://lh3.googleusercontent.com/d/1kRiBqLW3h1u7LE_srrEZLCEQduZIWQeM',  // _DSC1494.JPG
  'https://lh3.googleusercontent.com/d/1I7cNcdYUAro6M4-bRKflb-gkXkxcPGNC',  // _DSC1498.JPG
  'https://lh3.googleusercontent.com/d/1b_BzZOt-1DmVF7V53AXmwpRbvy2jdNcm',  // _DSC1503.JPG
  'https://lh3.googleusercontent.com/d/1y7BxKdp6uM07fUFkATXre7Y5gQITlAKc',  // _DSC1505.JPG
  'https://lh3.googleusercontent.com/d/1JNcAZlr3y3TGBIEPVVBAZgghaeKkvjqr',  // _DSC1506.JPG
  'https://lh3.googleusercontent.com/d/1mhyqTSeknacvinEnqyyloGdevPCJ_tpS',  // _DSC1507.JPG
  'https://lh3.googleusercontent.com/d/1Qii-_G3aBaaIvvlj14QePqoPCb6v8aFg',  // _DSC1508.JPG
  'https://lh3.googleusercontent.com/d/1ElvkydqiSLjGQY_78ftUKV63HL3JF8yS',  // _DSC1510.JPG
  'https://lh3.googleusercontent.com/d/1SHVP9uJRxeaYoT5SVPXayLjpescrFxSV',  // _DSC1511.JPG
  'https://lh3.googleusercontent.com/d/1WJAC2YHUbJR4qOHGxNH9lwbyEZgdLPn7',  // _DSC1512.JPG
  'https://lh3.googleusercontent.com/d/1sQCHLsL2U_3NpocpIh8gUZfMjUHMjbr3',  // _DSC1513.JPG
  'https://lh3.googleusercontent.com/d/181Kug4jozUvYpODYFH3CbU9FQp3e2CPZ',  // _DSC1515.JPG
  'https://lh3.googleusercontent.com/d/1rZQykIG7jYITBaPsBBNwrFQaeC-6zIVm',  // _DSC1516.JPG
  'https://lh3.googleusercontent.com/d/1wrcGjl2qo9W0_2ZHIf-76U5_Q8Juq_3p',  // _DSC1517.JPG
  'https://lh3.googleusercontent.com/d/1EgSjhTjqONk9QtG349tvGDUDeGsXUcn_',  // _DSC1518.JPG
  'https://lh3.googleusercontent.com/d/1B9vmSbmzvY74aevDii9hJqXGO2uNYcr5',  // _DSC1519.JPG
  'https://lh3.googleusercontent.com/d/14_DufymD98Dr2PSbHMAIfHV64U3uSmQP',  // _DSC1520.JPG
  'https://lh3.googleusercontent.com/d/1qy3M5CVxuLOQP9Lmplp9K_GP6JZXqnvo',  // _DSC1521.JPG
  'https://lh3.googleusercontent.com/d/1IuV5Lj__SKnctO1r2GzfTbEn0xwCT0co',  // _DSC1523.JPG
  'https://lh3.googleusercontent.com/d/1Isk44wOjUDlGTby3oAHOmAQ2-H-i26wa',  // _DSC1525.JPG
  'https://lh3.googleusercontent.com/d/1wvFDfYss5aKTusoXubjjmnpFLNgTo4_2',  // _DSC1529.JPG
  'https://lh3.googleusercontent.com/d/1V5yecWTxlHmE0cCqtb8GETrztrsIo93p',  // _DSC1530.JPG
  'https://lh3.googleusercontent.com/d/181V0Lz00p5pWJcHy53aVJ9nOJPwT7cy6',  // _DSC1531.JPG
  'https://lh3.googleusercontent.com/d/1yHnId-S6em5EzDDqGQ2rq8Uh9OiwZXsx',  // _DSC1532.JPG
  'https://lh3.googleusercontent.com/d/1_45Bq6jYIRMTjjQfUeTZGPse2ZYspfL4',  // _DSC1533.JPG
  'https://lh3.googleusercontent.com/d/1iFWumCYHwxWREp-h4y2mKq_sB0qYCvCK',  // _DSC1534.JPG
  'https://lh3.googleusercontent.com/d/1a6rWmy_CuMK9IEFxuH00v25NlkR2YFvB',  // _DSC1539.JPG
  'https://lh3.googleusercontent.com/d/1p4M2FRW0hBXUhevDTqcBymzvczudJ8Eh',  // _DSC1540.JPG
  'https://lh3.googleusercontent.com/d/18gRSCfYuHEnpIzebwcPUSQY7N4kvjI4g',  // _DSC1541.JPG
  'https://lh3.googleusercontent.com/d/1MlnMOgkgUlDy4shAQfMnlRqIzOIqjuRo',  // _DSC1543.JPG
  'https://lh3.googleusercontent.com/d/1sZB_4hWSDwJ2LycTV2Zumbm5tKSj9zsa',  // _DSC1548.JPG
  'https://lh3.googleusercontent.com/d/17d6LGeMtcuSZNCPeZpuxAYbnFh3CmDi1',  // _DSC1549.JPG
  'https://lh3.googleusercontent.com/d/1rcvwMpqHUf5g7iObFDHZaGv57RfUKtim',  // _DSC1550.JPG
  'https://lh3.googleusercontent.com/d/1Mb4tYuGgwDpxwwiX1NmVLwFBhkOirCE7',  // _DSC1553.JPG
  'https://lh3.googleusercontent.com/d/18Xoco2CyTb6IYZSnXP_kE3Z-o9YOfwAp',  // _DSC1555.JPG
  'https://lh3.googleusercontent.com/d/1XKcMhFufigJa5mFgw_ldf-AoSUjHdYzN',  // _DSC1556.JPG
  'https://lh3.googleusercontent.com/d/1uKUc4zzHKiaHa8te7hyCGJMq-YSot4eA',  // _DSC1558.JPG
  'https://lh3.googleusercontent.com/d/1848X3CCX_ZEIgNtao_7NM_jpd_Hgu-SG',  // _DSC1559.JPG
  'https://lh3.googleusercontent.com/d/1oOe6cUfJZRcMMFw0-WouT2ruQXpeO3VF',  // _DSC1563.JPG
  'https://lh3.googleusercontent.com/d/1HMOP_mm9HkLKpFPpnb_h4RFGSygyU8bZ',  // _DSC1564.JPG
  'https://lh3.googleusercontent.com/d/1X4WnWUnPTu5xqdZbXE-srr2mlfqkvYbc',  // _DSC1565.JPG
  'https://lh3.googleusercontent.com/d/1suE2jHdSt1jIQ2eOu3TvbCrq3QDIc1IM',  // _DSC1566.JPG
  'https://lh3.googleusercontent.com/d/1mP-XW7lzPq8ZB_hcQUQGp4Kvq8oJxvp-',  // _DSC1568.JPG
  'https://lh3.googleusercontent.com/d/1AbnG6T9vx-8LXC-3jR8Yo0D0z5NkGUd1',  // _DSC1570.JPG
  'https://lh3.googleusercontent.com/d/1CX5KwVC6u1RnBkgwgN3zcqPmg7euoCey',  // _DSC1572.JPG
  'https://lh3.googleusercontent.com/d/1oKDWjg0BzSondfIiajzMb0DNprx2oqgp',  // _DSC1573.JPG
  'https://lh3.googleusercontent.com/d/1rsPdYbe9qHq1YA3E7raEXxqUbz4l6_33',  // _DSC1575.JPG
  'https://lh3.googleusercontent.com/d/1nDbi6YOaVL2-ksANUOq9gFuIrOXbiWeC',  // _DSC1576.JPG
  'https://lh3.googleusercontent.com/d/1uIpHsA71_267N4x047nehnnLO7a6HV1j',  // _DSC1577.JPG
  'https://lh3.googleusercontent.com/d/1tq9CvsjgSOPzjG97vTtAkz0OakAZlQh2',  // _DSC1580.JPG
  'https://lh3.googleusercontent.com/d/1jUrw21UkBfi0o6LMr7d7yAI6UCRIfhCd',  // _DSC1581.JPG
  'https://lh3.googleusercontent.com/d/1m44g1FtuLJ1bWlSRc3q3XZVn-XVeU2VE',  // _DSC1582.JPG
  'https://lh3.googleusercontent.com/d/1GuXXeTjk-c1Rkj5ZdMsnKf0fgs_dPtH3',  // _DSC1583.JPG
  'https://lh3.googleusercontent.com/d/1p52gIIXOJDuqhQs8NXLB5yGt7859i2Hk',  // _DSC1584.JPG
  'https://lh3.googleusercontent.com/d/1NQoLeM8OJQS0RAFa7HDQXrXRX2H01D1d',  // _DSC1585.JPG
  'https://lh3.googleusercontent.com/d/1QmCfsPVO5apkVnUGqGqJlUgS7sYFISj3',  // _DSC1587.JPG
  'https://lh3.googleusercontent.com/d/17i1Loz1RtZACNRO8EOqw5N9puxxJsZIB',  // _DSC1589.JPG
  'https://lh3.googleusercontent.com/d/1IRfWIS-JxYj3oh25apemqcl-i19hfMd-',  // _DSC1590.JPG
  'https://lh3.googleusercontent.com/d/1V_LSrsu2eWavtGPiNmH3V27F_6yS3pyB',  // _DSC1591.JPG
  'https://lh3.googleusercontent.com/d/13HAs-G-rf_rvhK3YQK8HK538PSpt3LP6',  // _DSC1592.JPG
  'https://lh3.googleusercontent.com/d/1pKW8KnV4elyZPpkltmQbNoVZV7v4iQTD',  // _DSC1593.JPG
  'https://lh3.googleusercontent.com/d/1xnJ7IZzII_i2YdK5peeLmOl2SDEjXGzZ',  // _DSC1594.JPG
  'https://lh3.googleusercontent.com/d/1o9jV87axpLeQYY6o-4a82_O8bOWtezB_',  // _DSC1595.JPG
  'https://lh3.googleusercontent.com/d/1EW9LZqvLTf2YNZqI5OaU_AxQ0PsbTzKj',  // _DSC1596.JPG
  'https://lh3.googleusercontent.com/d/17yo5HK-eeR46Nj5mCVKKrgIrrTDzDqlQ',  // _DSC1597.JPG
  'https://lh3.googleusercontent.com/d/15Jl9lGVsRnNtujmD1p8g7ef4VRR39zrB',  // _DSC1598.JPG
  'https://lh3.googleusercontent.com/d/1UP-G1xlW5QvI02LPkloODkD3ApSliRSA',  // _DSC1599.JPG
  'https://lh3.googleusercontent.com/d/1YfzqgTL3_6tvlNCaGnChgCcEX_bv7Ibr',  // _DSC1601.JPG
  'https://lh3.googleusercontent.com/d/1p7jYHTze3zmUogP1rU75M52vr7tzo5pG',  // _DSC1602.JPG
  'https://lh3.googleusercontent.com/d/1o-QSdVHxON8t0hBtOufUtC6ar0UGEYOq',  // _DSC1603.JPG
  'https://lh3.googleusercontent.com/d/1VbXQ-ZxhoDzSrA9Nlou2IsXVuwg-uNMo',  // _DSC1605.JPG
  'https://lh3.googleusercontent.com/d/19b_2x0gEUpH3KP2dNYOvRprOcxV9-DKl',  // _DSC1606.JPG
  'https://lh3.googleusercontent.com/d/1jJVgl4YhzvJx4WwU4SvM4SABLP5IqKf6',  // _DSC1607.JPG
  'https://lh3.googleusercontent.com/d/18gnoHHf1kYzRKZ59imqX0vsHBV3_cmIU',  // _DSC1608.JPG
  'https://lh3.googleusercontent.com/d/10FSNEkfOphLFw8YjopxIQAp-j4rHSk_c',  // _DSC1610.JPG
  'https://lh3.googleusercontent.com/d/1a6rZsxz0Q-1jCI6rbWUPEiK37um_O6vh',  // _DSC1612.JPG
  'https://lh3.googleusercontent.com/d/1vBqqHZKij9y_nmPFJrA8NOoYOR6s8hd4',  // _DSC1613.JPG
  'https://lh3.googleusercontent.com/d/1oEvDtetdQDeKHFdaIaAopcYyJNf7qKBq',  // _DSC1614.JPG
  'https://lh3.googleusercontent.com/d/1cs5jmTXyvW0x4dr14QktesNy3I-e0K5I',  // _DSC1615.JPG
  'https://lh3.googleusercontent.com/d/1Z7DWX0o7gDmb3k8Fb-QLy26_CW0bz30d',  // _DSC1616.JPG
  'https://lh3.googleusercontent.com/d/1g8Aco-xJ2cG_CS3FyfXI4rAJbvdBwmmY',  // _DSC1617.JPG
  'https://lh3.googleusercontent.com/d/12diLnmteTcaFMr0CzLPFH_X2773ft0V8',  // _DSC1618.JPG
  'https://lh3.googleusercontent.com/d/1JH4jpWYotwK1YYq5O_5r8V_mOqbznb0l',  // _DSC1619.JPG
  'https://lh3.googleusercontent.com/d/14LgpEyw3CyIY7ibSHxDD2ThyPRavIhVV',  // _DSC1620.JPG
  'https://lh3.googleusercontent.com/d/1wLK_lqBGPPFVHfk9yRXBBPFwSeqfuIT_',  // _DSC1621.JPG
  'https://lh3.googleusercontent.com/d/1BrVooDm0Y0jhSVa_guMnh56WYueRAXSW',  // _DSC1624.JPG
  'https://lh3.googleusercontent.com/d/1FSalIVa2qgJD9l1acGMh6JtOwDJ_O6w-',  // _DSC1625.JPG
  'https://lh3.googleusercontent.com/d/1XbOsfnqsLS4HFnVeU5OWXyttZHO0EXW4',  // _DSC1626.JPG
  'https://lh3.googleusercontent.com/d/1PX232h6Ecojjmc3zEZjBFruulrfHOpHr',  // _DSC1628.JPG
  'https://lh3.googleusercontent.com/d/1YTVXJ6KucjjDj5--WABvn_ctPlsBxIFa',  // _DSC1629.JPG
  'https://lh3.googleusercontent.com/d/1qayArevBOHDixoZqcY5E6DwM8AMkDp9U',  // _DSC1630.JPG
  'https://lh3.googleusercontent.com/d/1lSou00MglnpsgxNtTnlTwGD4QlIrjvmV',  // _DSC1631.JPG
  'https://lh3.googleusercontent.com/d/1_996gP-zRD4xcpfFFxClBoSVBI5mXBa5',  // _DSC1632.JPG
  'https://lh3.googleusercontent.com/d/1ZPpMovcxRJBPvt6A8IPZGdPWz5WX98VF',  // _DSC1633.JPG
  'https://lh3.googleusercontent.com/d/1KNSrV7szauZfOQWUXGn_E0MvghKwXAnL',  // _DSC1634.JPG
  'https://lh3.googleusercontent.com/d/1nZhoMWAbA5s0Uggcj3AG637Lr-Misuaz',  // _DSC1635.JPG
  'https://lh3.googleusercontent.com/d/1_QeP7a95SZOjZuQjxXK2SrNqoRdPO656',  // _DSC1636.JPG
  'https://lh3.googleusercontent.com/d/1FNkhkjuP7-hbRoHAMxrs8F6cGd7RPWwu',  // _DSC1638.JPG
  'https://lh3.googleusercontent.com/d/1Fg-tmqXj8Y0XWqcXlb81Bblpz_L8H_X5',  // _DSC1639.JPG
  'https://lh3.googleusercontent.com/d/1kRMp7eLmSCrDIhNi50kHNqyheRCSBnf3',  // _DSC1640.JPG
  'https://lh3.googleusercontent.com/d/1SjIFOjOo1mev-RNKniSIU7gUn8_249xS',  // _DSC1641.JPG
  'https://lh3.googleusercontent.com/d/1ojC-oFDeLcZQ1w9-BGxWc_A1Kh_Z5izF',  // _DSC1643.JPG
  'https://lh3.googleusercontent.com/d/1e3YnW_Sg8cCWjP7AITC3ylKb5w3XFYGB',  // _DSC1645.JPG
  'https://lh3.googleusercontent.com/d/18uP4WFHQM_xPMDjJ-Z4wb9FIzDrDyRmG',  // _DSC1646.JPG
  'https://lh3.googleusercontent.com/d/1Uxk9Nf4Q-mlEXs_8GXY7jXHYnkgvUMQe',  // _DSC1647.JPG
  'https://lh3.googleusercontent.com/d/1PuXFN5j7QQKSvXhoV1sru068_ookFBuM',  // _DSC1648.JPG
  'https://lh3.googleusercontent.com/d/1SR98hzUuaOUAdDZ3IRrBHyxVMVs94DvI',  // _DSC1649.JPG
  'https://lh3.googleusercontent.com/d/1UeZLSWrGULVbVYQHJ-bhm4HVKWfJQye6',  // _DSC1650.JPG
  'https://lh3.googleusercontent.com/d/1D5MwcsrGaVPwRqn5NuIaHrwbixksjC6o',  // _DSC1651.JPG
  'https://lh3.googleusercontent.com/d/1aDJx6zWkA8wsxMWuSHmHUBF3A4AuNDoa',  // _DSC1652.JPG
  'https://lh3.googleusercontent.com/d/1t-7pVNjXpNI2_59R8EipEG3O9KJyOlsL',  // _DSC1653.JPG
  'https://lh3.googleusercontent.com/d/1OpNyT3sGocgIkVpWcWKyjlbORey5W2T7',  // _DSC1654.JPG
  'https://lh3.googleusercontent.com/d/1laZbxnguQo-OC47lgOLzTVDrLRQMROq-',  // _DSC1656.JPG
  'https://lh3.googleusercontent.com/d/14VBzovHn16qERtQ22hktkBT0VFfWZiNb',  // _DSC1657.JPG
  'https://lh3.googleusercontent.com/d/1bAdNlqNYQOaQv-X46YQ0tJJrM7b5aOhM',  // _DSC1658.JPG
  'https://lh3.googleusercontent.com/d/1B1hs3qvKiUKxGNAqvLIlQ07cG0sezHKL',  // _DSC1659.JPG
  'https://lh3.googleusercontent.com/d/13n0NDoeSjyRY3LSH8WGQ6pDxAokokibR',  // _DSC1661.JPG
  'https://lh3.googleusercontent.com/d/1CUihcVvVQp2srQur8MI-go2YAzQdKOlU',  // _DSC1662.JPG
  'https://lh3.googleusercontent.com/d/1t9L-ZofHHa4JC-epqGfwiA1iFx4TV7ja',  // _DSC1663.JPG
  'https://lh3.googleusercontent.com/d/1c71duuNAl7UcWWFWSgRLl2ep0OzesKgl',  // _DSC1664.JPG
  'https://lh3.googleusercontent.com/d/1oKet2Ftxl4fT9C0u6Psmmt-8fT3C9sVS',  // _DSC1665.JPG
  'https://lh3.googleusercontent.com/d/15POO0P2rwPvtk75s0VmQNxIl5GQTbCSi',  // _DSC1666.JPG
  'https://lh3.googleusercontent.com/d/1XJPGWZsj7L32_SdQJcwSAfSN6LNYDvP_',  // _DSC1669.JPG
  'https://lh3.googleusercontent.com/d/18Yi_5UkDL9iwqNO_Ibj7Vt89bfdbEbpn',  // _DSC1672.JPG
  'https://lh3.googleusercontent.com/d/1-IJQAqoWbI4rCFsYLhTCieQIsVB6OnGR',  // _DSC1674.JPG
  'https://lh3.googleusercontent.com/d/19x3v5X5Gs0pJyUAjMhywVsScQM1k_9Dc',  // _DSC1675.JPG
  'https://lh3.googleusercontent.com/d/11_6PneuNnYMexoh_rzdIh11nlap4WynH',  // _DSC1676.JPG
  'https://lh3.googleusercontent.com/d/1tgIuHl7v8o0D8CYmkxMvNUlWmpIx8c_Z',  // _DSC1677.JPG
  'https://lh3.googleusercontent.com/d/1rJ2TQ5p2fHpOlehiyrQCN9I0eMf-ys2X',  // _DSC1678.JPG
  'https://lh3.googleusercontent.com/d/1B1EFpNXGEh2VOnh78Dx-PpxUhOZagIx-',  // _DSC1682.JPG
  'https://lh3.googleusercontent.com/d/1zcWa-3B6QznMwLioiTaNUkyBJQSFlmU8',  // _DSC1683.JPG
  'https://lh3.googleusercontent.com/d/1Hct6UouXlgi-s5E8kFqxJ47bmDQgCXy2',  // _DSC1687.JPG
  'https://lh3.googleusercontent.com/d/17qEY2DarSXPbjVw8Cd3ASi9c3Cmt-h8m',  // _DSC1696.JPG
  'https://lh3.googleusercontent.com/d/1jpl0_74ZZRwwBouENKPb2zRZ7HuGxNCn',  // _DSC1698.JPG
  'https://lh3.googleusercontent.com/d/1uv_GMG7ZazFeWmhAdXsDu3n88VR0poGC',  // _DSC1706.JPG
  'https://lh3.googleusercontent.com/d/1NA27MEaWwJhhSZ9Rd1ZJGCp1ZQRTDldI',  // _DSC1714.JPG
  'https://lh3.googleusercontent.com/d/10IEMvRpDNSnQnUma-2BDyQsFLzoIApYl',  // _DSC1718.JPG
  'https://lh3.googleusercontent.com/d/13ahCFI9fS_5Wg8eVDxp3YTAt33daX6lG',  // _DSC1730.JPG
  'https://lh3.googleusercontent.com/d/1FgxjQJErF_xqVxekZMNkcCPmWtQR4arz',  // _DSC1734.JPG
  'https://lh3.googleusercontent.com/d/1O7uzDwKu9izvUs72-aVBuhitOwRMtcdD',  // _DSC1737.JPG
  'https://lh3.googleusercontent.com/d/1PrW9SFC0W4OUZN-wGh9ujlfmkteGZFvw',  // _DSC1741.JPG
  'https://lh3.googleusercontent.com/d/15T4sggkLW-GVSHWl9EGqafVziKNSM0dv',  // _DSC1744.JPG
  'https://lh3.googleusercontent.com/d/13gzocbUfOM0KVFaXT4q62ewo7LzvTz23',  // _DSC1747.JPG
  'https://lh3.googleusercontent.com/d/1b2zXDugWyGEyuk6WUdA2fOSOYc2i8YrY',  // _DSC1762.JPG
  'https://lh3.googleusercontent.com/d/1vZrE3Suz_N7wqhS5ahcG6nzt0iviVvE-',  // _DSC1763.JPG
  'https://lh3.googleusercontent.com/d/1315tx1utatOUjWgGnFwJiB32JgW7u0OL',  // _DSC1764.JPG
  'https://lh3.googleusercontent.com/d/1U16C6HmYIL4FzZ3yNj2hpSZIocevx7YT',  // _DSC1765.JPG
  'https://lh3.googleusercontent.com/d/1eZTuj_-LrTy8tPxMzKOb-YAjXG_T95hA',  // _DSC1769.JPG
  'https://lh3.googleusercontent.com/d/1IJTMxclU18Lf3jtvksICA87VOq85-9mD',  // _DSC1771.JPG
  'https://lh3.googleusercontent.com/d/1aHPLYvrNh4hYN5JyZgjbpRiEf4qbnFjg',  // _DSC1772.JPG
  'https://lh3.googleusercontent.com/d/1RNdUFxGAuBzQ0pcJtjIbchYQF-GLJkOA',  // _DSC1773.JPG
  'https://lh3.googleusercontent.com/d/1rZgUPsgzbyxCu7ngoYrgSSEBF0XMUhhj',  // _DSC1774.JPG
  'https://lh3.googleusercontent.com/d/1SwE0g1JLYFs4JThVxHhFQ7PxsD9hgdhE',  // _DSC1776.JPG
  'https://lh3.googleusercontent.com/d/15N9CRFz-rDmOAPnuBq5G1QsWQLCWtmd0',  // _DSC1778.JPG
  'https://lh3.googleusercontent.com/d/1LqdnSW8fMkZ1eTWKcMbheISt6wJDQc5X',  // _DSC1781.JPG
  'https://lh3.googleusercontent.com/d/1Z67RuQzbjBnll_MqaUAFoQ_lbhgyDvPe',  // _DSC1785.JPG
  'https://lh3.googleusercontent.com/d/17fnJZ6SiUTvrrt-4u8S-x1-5CYqKedww',  // _DSC1787.JPG
  'https://lh3.googleusercontent.com/d/1AIU5GY7wbIKeMhOPDW1csCABQMzmKuZE',  // _DSC1790.JPG
  'https://lh3.googleusercontent.com/d/1-IrH3WVWSm5HlbDfk--TwvLDIhRzQ_wJ',  // _DSC1791.JPG
  'https://lh3.googleusercontent.com/d/11GM49a4pBmWCOBGEcFCGyzTIW3_yROcN',  // _DSC1793.JPG
  'https://lh3.googleusercontent.com/d/1aotixx9nlW0zUUao1hdF9UlV_dRBMcXj',  // _DSC1794.JPG
  'https://lh3.googleusercontent.com/d/1zolWPrW4iCyXlDKylr9FjKJnZ-zJX2i5',  // _DSC1796.JPG
  'https://lh3.googleusercontent.com/d/1gK_SF-bpLq4pZ5RN8rJHF2Af_XKq3Ttv',  // _DSC1797.JPG
  'https://lh3.googleusercontent.com/d/1r9cEA8GrzWikP4HZTT6teURmEV-3Pq3k',  // _DSC1798.JPG
  'https://lh3.googleusercontent.com/d/13A-3pSVLbwaYNZAH0miRuubVCBGYnALg',  // _DSC1802.JPG
  'https://lh3.googleusercontent.com/d/126_w1ftP_NRtLdq0j00A1V3rpJ_e1KMd',  // _DSC1803.JPG
  'https://lh3.googleusercontent.com/d/1GhUt7_ksgxnGST_DZD8Vclw7E3Je640a',  // _DSC1804.JPG
  'https://lh3.googleusercontent.com/d/1mqc2YHsfPiXjcJDkJYKoJC6Hb39vyvlC',  // _DSC1807.JPG
  'https://lh3.googleusercontent.com/d/1TXcOmAZY762I7vq744eNXYnEiVrTLaUx',  // _DSC1808.JPG
  'https://lh3.googleusercontent.com/d/1saI33eIxNyEblvWQDjKKtqXHUgkH9zo_',  // _DSC1810.JPG
  'https://lh3.googleusercontent.com/d/1tOrx8d-2cLu3OWv_wT2SjwnGzgktFqS7',  // _DSC1816.JPG
  'https://lh3.googleusercontent.com/d/1kuRJ6JVhe3zY38QHLjgHNAdDAOXh7O7F',  // _DSC1817.JPG
  'https://lh3.googleusercontent.com/d/1ALkBjVhg4daXPqIMUTnwuPoQTCoPZ5ok',  // _DSC1820.JPG
  'https://lh3.googleusercontent.com/d/1ykRv3ARSfK8WBCRl2pjlxWdg45oEiAJm',  // _DSC1822.JPG
  'https://lh3.googleusercontent.com/d/14gMwnmXhE_xw9RVAwcvziQQi2FwSDZqx',  // _DSC1823.JPG
  'https://lh3.googleusercontent.com/d/1hhr8QgaYE3_lyKTsBhYE1efoI1f1TjVR',  // _DSC1824.JPG
  'https://lh3.googleusercontent.com/d/1Gsj55D5wNpVOuowubjB_qSg_tC2mNzUS',  // _DSC1826.JPG
  'https://lh3.googleusercontent.com/d/1XSNTahjbYgrjDJmJxnk1obS40QHP7b8R',  // _DSC1835.JPG
  'https://lh3.googleusercontent.com/d/1P9i80B-sbV66WFtjm1JcSRrCHbittpGJ',  // _DSC1836.JPG
  'https://lh3.googleusercontent.com/d/1CGjmH2XcBrNabS0QTfoJxovJZCD8dbVo',  // _DSC1837.JPG
  'https://lh3.googleusercontent.com/d/1koXCCQOjMk4EfhRVuJH5JtOxL-ICVImQ',  // _DSC1838.JPG
  'https://lh3.googleusercontent.com/d/16-E3uDHhntcy2FHqKP4FxoTj3dudjUkC',  // _DSC1839.JPG
  'https://lh3.googleusercontent.com/d/1BRmMSNVNHpuQy3N6vQvETxL08DAx2_Fg',  // _DSC1840.JPG
  'https://lh3.googleusercontent.com/d/1j8-6_mx17ABCtULVaUVfhiLT0y1oS46o',  // _DSC1841.JPG
  'https://lh3.googleusercontent.com/d/12t-VMjUrNXkZR0VLby5hb4NOhEios8kt',  // _DSC1842.JPG
  'https://lh3.googleusercontent.com/d/1KXU_LJP7JIY7jiqnMLOp2yzEW7fosSqv',  // _DSC1845.JPG
  'https://lh3.googleusercontent.com/d/1el10-dfd9I2kAF_8dT1GM1x0voDrbmKe',  // _DSC1847.JPG
  'https://lh3.googleusercontent.com/d/1ABrhPr1yrFPI3o0QwPRelcB8rIzi24Qz',  // _DSC1849.JPG
  'https://lh3.googleusercontent.com/d/1UpjNoKy9xueZSAE2M0UZ99clMTVn7zU2',  // _DSC1850.JPG
  'https://lh3.googleusercontent.com/d/1DTQ5QmU29Mg4PLA-EOjH7qdX7qTwbRjO',  // _DSC1851.JPG
  'https://lh3.googleusercontent.com/d/1BgQC8k-Nsprzrm1jA83IyEQ6wY10UmOU',  // _DSC1852.JPG
  'https://lh3.googleusercontent.com/d/1AU4CJ2iDXjaOmX5xclPqEwU37e2-rA6j',  // _DSC1854.JPG
  'https://lh3.googleusercontent.com/d/1kG7CmTiehsmUn7KCfFvEdgez9mIBqI9W',  // _DSC1856.JPG
  'https://lh3.googleusercontent.com/d/1OWqro6e_nb9C3GF6bfB9tC7bZHq8jLJY',  // _DSC1858.JPG
  'https://lh3.googleusercontent.com/d/1EEUFmSBAE2G-wF7R0PIebZOrxyb3aOKT',  // _DSC1859.JPG
  'https://lh3.googleusercontent.com/d/1W1bvNAXo0GR5PZ51hd1oUl0n5Dvces_K',  // _DSC1860.JPG
  'https://lh3.googleusercontent.com/d/196AxY8enhdm2CfrrE8lFRpwuHXI-1Lzu',  // _DSC1861.JPG
  'https://lh3.googleusercontent.com/d/1QpUs1d_19xdY_czPFBbB_-YEuTHiOJLX',  // _DSC1862.JPG
  'https://lh3.googleusercontent.com/d/1yECE-7wTSLf5PwnY0_7zecd_jXL8suOh',  // _DSC1863.JPG
  'https://lh3.googleusercontent.com/d/1LqS6REFJJL3rKs7RPkF1zNUOOdW_ThmS',  // _DSC1865.JPG
  'https://lh3.googleusercontent.com/d/1raK760ZhAmT0n37Vb-pdIf-q2KYZj-Jr',  // _DSC1867.JPG
  'https://lh3.googleusercontent.com/d/1fjB7wK6cKq2W8CmD188L2T3jI-BPjL7A',  // _DSC1868.JPG
  'https://lh3.googleusercontent.com/d/16oTacX7NK3-d9MtI3jUnNWOLhAlX_rSj',  // _DSC1869.JPG
  'https://lh3.googleusercontent.com/d/1bcOSC88scv1nNGXiyqH6hTpyLvrncKio',  // _DSC1870.JPG
  'https://lh3.googleusercontent.com/d/1ZqG93mqA9YKvPDX27_-xKaQ_s5pZlzjr',  // _DSC1871.JPG
  'https://lh3.googleusercontent.com/d/14FRM3T-RBp8_S_lgghpMdEGRhRIEGfkd',  // _DSC1872.JPG
  'https://lh3.googleusercontent.com/d/1uAOuhpfKYzklmOT2PZGFDs9nnykWBzJm',  // _DSC1873.JPG
  'https://lh3.googleusercontent.com/d/1LQJr5aGth37y0MuNaOS2wXHpzV40ym-b',  // _DSC1874.JPG
  'https://lh3.googleusercontent.com/d/1JDP1ffH-GkcI76oVYg5wdonU5no57erw',  // _DSC1877.JPG
  'https://lh3.googleusercontent.com/d/1H4hwrKha67GqPq5uqH5JibGSomGsmH4M',  // _DSC1879.JPG
  'https://lh3.googleusercontent.com/d/1C1m-HU9tT-JJEY0PCGsA5jk84aUzxfNn',  // _DSC1881.JPG
  'https://lh3.googleusercontent.com/d/1Oa2OIht6XMp4J6aNrTyBUdFIPFKDnXWD',  // _DSC1882.JPG
  'https://lh3.googleusercontent.com/d/12h3bw2QCLbc-Th_xLVMMCetKkbEOSOqV',  // _DSC1883.JPG
  'https://lh3.googleusercontent.com/d/1DF045ioGihKwlwBVtgBlMkgty7lxLz2B',  // _DSC1885.JPG
  'https://lh3.googleusercontent.com/d/1eWDpTgtmQX6O9emiACju5kllY0dlPojr',  // _DSC1887.JPG
  'https://lh3.googleusercontent.com/d/1MoJ6MaItKA5YYiJyhXjJaMPlsqyJ1ESY',  // _DSC1889.JPG
  'https://lh3.googleusercontent.com/d/1nnDG2NDFg5SggIldFji7BczM_xQ8RNN1',  // _DSC1890.JPG
  'https://lh3.googleusercontent.com/d/1dPU04iuZQNBqb2S3jI1jQnwtTXFBq4ZN',  // _DSC1891.JPG
  'https://lh3.googleusercontent.com/d/1rC-HnqpjsNxmtKqcI5JJZhwV5JA__rzt',  // _DSC1892.JPG
  'https://lh3.googleusercontent.com/d/1fFOvsJivgWliUayITRsEMp4_TtQOtLxA',  // _DSC1894.JPG
  'https://lh3.googleusercontent.com/d/1_cwxFOo4k3ZO1nj9oy88w9YVmWg42n-X',  // _DSC1895.JPG
  'https://lh3.googleusercontent.com/d/11ztWgFVwsyNd1J6VlGRGYhCMzOsomi4B',  // _DSC1896.JPG
  'https://lh3.googleusercontent.com/d/1VOMZtU7EzVOIBeQ_w1s4zoqib3EBKdtJ',  // _DSC1898.JPG
  'https://lh3.googleusercontent.com/d/1KdKX1_j49xrIMZacbihCtteWRtwImOsn',  // _DSC1899.JPG
  'https://lh3.googleusercontent.com/d/1cB9qchXdLpDgxF4HlZZ88coiB2bl3BUi',  // _DSC1900.JPG
  'https://lh3.googleusercontent.com/d/1ZRAnZaD5sE-FjDS-IDYOcl3wa4fMTiEG',  // _DSC1901.JPG
  'https://lh3.googleusercontent.com/d/1MHq9L_hBBPUSE_F4RgNnMLHExvDiUXy5',  // _DSC1902.JPG
  'https://lh3.googleusercontent.com/d/1kIsCklT4xvnNaMCIG2_GkMD_GxfRdln6',  // _DSC1903.JPG
  'https://lh3.googleusercontent.com/d/1JS0iJVoWMC2YQOv_YJ1dq0l-tKshbM6s',  // _DSC1904.JPG
  'https://lh3.googleusercontent.com/d/1d-2q-sSaQnKbuJKGFg4TVRAUVbAuHB5t',  // _DSC1906.JPG
  'https://lh3.googleusercontent.com/d/1v_w880q2cvr6JyJ7rB_1yk0XhZTMbYoM',  // _DSC1907.JPG
  'https://lh3.googleusercontent.com/d/1nhfLtucTV8LKzOFZoshXkLoSquPIUjTk',  // _DSC1909.JPG
  'https://lh3.googleusercontent.com/d/1uvsEwWydRBRN3IsQ4lRpv5cjI7jTvCzR',  // _DSC1910.JPG
  'https://lh3.googleusercontent.com/d/1s9eBJHsUyuMfnGd_oeQrV1IcZ7s4eMLx',  // _DSC1911.JPG
  'https://lh3.googleusercontent.com/d/1xFhJwjg_2mZgf9spQsPzXfI_Zr1iwr3V',  // _DSC1912.JPG
  'https://lh3.googleusercontent.com/d/1nAac00ru26Md3xKbqcVBu5DHYzBCkCqq',  // _DSC1913.JPG
  'https://lh3.googleusercontent.com/d/1vD9uE0tUvfRk_m2vjyNqeBlkULqmuXZu',  // _DSC1915.JPG
  'https://lh3.googleusercontent.com/d/16eGImTzIvqt86kWrLa8EN18U9ur2X0-w',  // _DSC1918.JPG
  'https://lh3.googleusercontent.com/d/1CxHUUfNaWYqDPvZpl1yvMthUfnXfXeen',  // _DSC1919.JPG
];

const BATCH   = 30;
let shown     = 0;

const grid    = document.getElementById('galleryGrid');
const countEl = document.getElementById('galleryCount');
const btnMore = document.getElementById('btnLoadMore');
const btnAll  = document.getElementById('btnLoadAll');

// ── Gallery Builder ───────────────────────────────────────────────────
function updateCount() {
  countEl.textContent = `Showing ${shown} of ${images.length} photos`;
  btnMore.disabled = shown >= images.length;
  btnAll.disabled  = shown >= images.length;
}

function addItems(start, end) {
  const frag = document.createDocumentFragment();
  for (let i = start; i < end && i < images.length; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src      = imgSrc(images[i]);
    img.alt      = `Tilak ceremony photo ${i + 1}`;
    img.loading  = 'lazy';
    img.decoding = 'async';
    img.onload  = () => img.classList.add('loaded');
    img.onerror = () => img.classList.add('loaded');

    const overlay = document.createElement('div');
    overlay.className = 'item-overlay';
    overlay.innerHTML = '<span class="zoom-icon">⊕</span>';

    item.appendChild(img);
    item.appendChild(overlay);
    item.addEventListener('click', () => openLightbox(i));
    frag.appendChild(item);
  }
  grid.appendChild(frag);
}

function loadMore() {
  const next = Math.min(shown + BATCH, images.length);
  addItems(shown, next);
  shown = next;
  updateCount();
}

function loadAll() {
  addItems(shown, images.length);
  shown = images.length;
  updateCount();
}

btnMore.addEventListener('click', loadMore);
btnAll.addEventListener('click', loadAll);

// Initial load
loadMore();

// ── Lightbox ──────────────────────────────────────────────────────────
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lb-img');
const lbCounter  = document.getElementById('lb-counter');
const lbClose    = document.getElementById('lb-close');
const lbPrev     = document.getElementById('lb-prev');
const lbNext     = document.getElementById('lb-next');
const lbPlay     = document.getElementById('lb-play');
const lbProgressBar = document.getElementById('lb-progress-bar');
let currentIdx   = 0;

// ── Core open / close / navigate ─────────────────────────────────────
function openLightbox(idx) {
  currentIdx = idx;
  setLbImage(idx);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  stopSlideshow();
  resetZoom();
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function setLbImage(idx) {
  lbImg.classList.add('loading');
  const tmp = new Image();
  tmp.onload = () => {
    lbImg.src = tmp.src;
    lbImg.classList.remove('loading');
  };
  tmp.src = imgSrcFull(images[idx]);
  lbCounter.textContent = `${idx + 1} / ${images.length}`;
}

function lbGo(dir) {
  resetZoom();
  currentIdx = (currentIdx + dir + images.length) % images.length;
  setLbImage(currentIdx);
  if (slideshowActive) restartProgress();
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => { lbGo(-1); });
lbNext.addEventListener('click', () => { lbGo(1); });
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lbGo(-1);
  if (e.key === 'ArrowRight') lbGo(1);
  if (e.key === ' ')          toggleSlideshow();
});

// ── Slideshow ─────────────────────────────────────────────────────────
const SLIDESHOW_MS  = 3500;
let slideshowActive = false;
let slideshowTimer  = null;

function startSlideshow() {
  slideshowActive = true;
  lbPlay.classList.add('playing');
  lbPlay.innerHTML = '&#9646;&#9646;'; // pause icon
  lbPlay.setAttribute('aria-label', 'Pause slideshow');
  restartProgress();
}

function stopSlideshow() {
  slideshowActive = false;
  clearTimeout(slideshowTimer);
  lbPlay.classList.remove('playing');
  lbPlay.innerHTML = '&#9654;'; // play icon
  lbPlay.setAttribute('aria-label', 'Play slideshow');
  lbProgressBar.style.transition = 'none';
  lbProgressBar.style.width = '0%';
}

function toggleSlideshow() {
  slideshowActive ? stopSlideshow() : startSlideshow();
}

function restartProgress() {
  clearTimeout(slideshowTimer);
  // Reset bar instantly, then animate
  lbProgressBar.style.transition = 'none';
  lbProgressBar.style.width = '0%';
  void lbProgressBar.offsetWidth; // force reflow
  lbProgressBar.style.transition = `width ${SLIDESHOW_MS}ms linear`;
  lbProgressBar.style.width = '100%';
  slideshowTimer = setTimeout(() => {
    if (!slideshowActive) return;
    lbGo(1);
  }, SLIDESHOW_MS);
}

lbPlay.addEventListener('click', toggleSlideshow);

// ── Pinch-to-Zoom & Pan (touch) ───────────────────────────────────────
let scale     = 1;
let panX      = 0;
let panY      = 0;
let isPinching  = false;
let initDist    = 0;
let initScale   = 1;
let isDragging  = false;
let dragStartX  = 0;
let dragStartY  = 0;
let dragPanX    = 0;
let dragPanY    = 0;
let lastTap     = 0;

function applyTransform(animated) {
  if (animated) {
    lbImg.style.transition = 'transform 0.25s ease';
    setTimeout(() => { lbImg.style.transition = ''; }, 260);
  } else {
    lbImg.style.transition = '';
  }
  lbImg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  lbImg.classList.toggle('zoomed', scale > 1);
}

function resetZoom() {
  scale = 1; panX = 0; panY = 0;
  lbImg.style.transition = 'transform 0.25s ease';
  lbImg.style.transform  = '';
  lbImg.classList.remove('zoomed', 'dragging');
  setTimeout(() => { lbImg.style.transition = ''; }, 260);
}

function getDist(touches) {
  return Math.hypot(
    touches[0].clientX - touches[1].clientX,
    touches[0].clientY - touches[1].clientY
  );
}

lbImg.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    // ── Pinch start ──
    isPinching = true;
    isDragging = false;
    initDist   = getDist(e.touches);
    initScale  = scale;
    e.preventDefault();
  } else if (e.touches.length === 1) {
    // ── Double-tap ──
    const now = Date.now();
    if (now - lastTap < 280) {
      lastTap = 0;
      if (scale > 1) { resetZoom(); }
      else { scale = 2.5; applyTransform(true); }
      e.preventDefault();
      return;
    }
    lastTap = now;
    // ── Pan when zoomed ──
    if (scale > 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      dragPanX   = panX;
      dragPanY   = panY;
      lbImg.classList.add('dragging');
      e.preventDefault();
    }
  }
}, { passive: false });

lbImg.addEventListener('touchmove', (e) => {
  if (isPinching && e.touches.length === 2) {
    const newScale = initScale * (getDist(e.touches) / initDist);
    scale = Math.min(Math.max(newScale, 1), 4);
    applyTransform(false);
    e.preventDefault();
  } else if (isDragging && e.touches.length === 1 && scale > 1) {
    panX = dragPanX + (e.touches[0].clientX - dragStartX);
    panY = dragPanY + (e.touches[0].clientY - dragStartY);
    applyTransform(false);
    e.preventDefault();
  }
}, { passive: false });

lbImg.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) isPinching = false;
  if (e.touches.length === 0) {
    isDragging = false;
    lbImg.classList.remove('dragging');
    // Snap back to 1× if pinch released very close to 1
    if (scale < 1.08) resetZoom();
  }
});

// ── Swipe to navigate (when NOT zoomed) ──────────────────────────────
let swipeStartX = 0;
let swipeStartY = 0;

lightbox.addEventListener('touchstart', (e) => {
  if (e.target === lbImg) return; // handled above
  swipeStartX = e.touches[0].clientX;
  swipeStartY = e.touches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  if (e.target === lbImg || scale > 1) return;
  const dx = e.changedTouches[0].clientX - swipeStartX;
  const dy = e.changedTouches[0].clientY - swipeStartY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) lbGo(dx < 0 ? 1 : -1);
});
