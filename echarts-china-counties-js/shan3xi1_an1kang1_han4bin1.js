(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汉滨区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610902","properties":{"name":"汉滨区","cp":[109.026836,32.695172],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@BA@@@@@@@@@A@@@@@@A@@AB@@@@AAA@A@@AA@@A@@@@@@AAA@@@@@@A@BA@@@@@@@@@A@A@@AA@A@@@A@@@AA@@@@A@@AAC@@@@@A@AB@@AAC@@@A@A@E@C@@@C@CBC@@@AB@@@BA@A@@@C@@@@@@@@AAA@@AA@@@@BC@@@A@A@@B@@@@ADB@A@A@@@@DA@A@@BAB@@@@@B@BADAHCB@@@@A@A@A@AAA@A@E@ABA@AAA@@AA@@@A@@@AB@@A@ABA@@A@@C@@ACAA@A@C@CAA@A@A@@BABADC@A@@@@AC@@@A@A@A@AAA@@@A@@@@AA@@AA@@@CAA@@@A@C@ACA@@@ACG@A@ABAB@@A@@@A@CB@@A@C@@@A@@@@@C@@A@A@AAAA@AAAA@CA@@GAAAC@AA@@@@C@C@A@@@C@@@ABABC@@BA@@BAB@BC@AB@@@@@BABCBABA@@@@B@BB@@B@B@B@BAB@B@B@@@BAD@D@@A@@@A@@@A@@@CBA@ABCBABABA@CDC@C@EFA@@@ABA@A@ABABABA@A@@@@@CDABA@@BB@@DAD@@@DADABBB@DA@@@CBABAB@BCBABCBCBABAB@@@@BBB@AD@B@@@@ABAB@@@B@B@@@BAB@@A@CB@@ABEBA@@B@BA@@@AB@@@B@@D@B@D@B@@B@@@@@B@BAB@B@@@BA@AB@@@BBBCBEB@B@@@@@D@DAB@@A@AB@@@@BB@@@BAB@D@@DHABA@AB@B@BA@A@C@A@E@CB@@AB@@ABFDBB@B@B@DBBDB@@@@AD@@@BDBBD@@@B@B@B@B@D@@BB@@B@D@BBB@BB@@@B@@@BA@@BC@A@E@CBA@AB@B@@BB@B@@A@@@ABA@A@AB@@A@@B@BB@@@BBB@@@B@B@B@@@B@@B@@AB@B@BA@A@@@A@@@CCAA@@C@A@C@ABABCDA@A@A@@@A@A@A@C@@ACCAAAAA@@A@@@C@A@@@@@A@@CBA@@BA@@@ABA@AAA@A@@@@@A@ABE@@@AB@@A@A@C@EAA@@@AA@@AA@@@A@@AAAA@A@@BAACAAAAAA@@C@A@A@A@@A@@@@A@ABA@@@I@A@C@AAC@C@CBEBA@A@@@C@A@CB@@ABA@@@@B@B@@@B@B@@@B@BCB@@A@AB@AA@ABA@A@C@@@@A@@CAAAA@@AA@BA@AA@@A@@@@@AA@A@A@AAA@AA@@A@CBA@AB@@A@@AA@@@@@AB@@C@@@AAEA@@AA@@@CAAAA@@C@A@@@AA@@AAA@@ABA@@@AB@@A@@@AAA@A@A@@@A@C@A@@@A@A@AB@BA@A@@@AA@@AAA@A@AAAAC@A@@@AAA@CAA@AA@ABC@@AABA@@@A@ABGBA@@@A@@B@@ABAB@@ABABAB@B@@ABABA@A@@BB@AD@D@B@B@B@@@B@BA@@B@B@@@BCB@B@D@B@@AB@@@@GA@@A@@B@@AB@@AB@@A@A@@BABABA@A@@@C@@@AB@BABAB@@C@A@ADADA@CF@@AACE@C@A@ADG@A@A@@@@AA@@CDABAB@DA@@DABBB@BAB@@@BBB@B@@AB@@@B@@@B@@@B@D@B@B@BBD@BAB@@AB@@@BB@@B@@@BA@@B@@ABA@@BAB@B@DA@@BA@@@EBC@A@@BB@@@@@BB@BBFBBBDBBBB@@@@@B@@@B@@@DB@A@@@CBA@@@AAAAA@A@@@A@@@@@AA@@A@AAACAAAAC@AA@AA@@@AB@BBBAD@DB@BB@BDD@@A@@@CB@BA@@@CBA@AB@@ABA@@@A@A@@@@@AAA@A@@@@AA@@@AAA@@A@ACC@@@@@AAA@@A@@AAA@AA@AA@@CBA@A@CAA@EB@AC@@@A@A@@BA@@@AB@D@B@B@B@B@@BB@@@B@BBB@B@BB@@D@@@B@@BBBB@B@@@B@@B@@B@@@@BB@@BBBB@BB@A@BB@BB@BBB@B@BBBBB@@B@@AB@B@@BB@@@BB@BB@@@@@@CBA@ABABAB@B@@CB@@@B@@B@@BB@B@B@@@B@@ABA@C@AB@BAB@@@@AB@@ABAB@@A@@@@B@@B@@BDBBDDBB@B@B@BA@@@A@@AA@@B@@@BA@@@AA@@A@@@@@@B@@BBBD@B@B@BA@@@CB@@@@AB@@@DA@@@@BA@@@@@AB@@@B@@@@@@BB@@B@@@@@@@B@@@@B@@BA@B@@BB@@@@@@BB@@@@@@B@D@BAD@BB@@@@DAB@B@B@B@@@B@@@BBBB@BB@@B@B@@@B@B@@DF@BDB@B@B@@A@C@CBE@C@A@A@C@@@@@ACAC@@@ABA@@A@@A@C@@AAAACA@@A@@@@@AB@B@@@@BD@@@@A@EB@@AB@B@@CAC@@AA@ABAB@@@@ABA@CBABCBCB@@@BAD@BAB@@@@AAA@@@@@AB@@B@@@@@A@@@@BA@CB@@AB@@@B@@A@ABA@A@A@C@@BA@A@A@@@A@A@@B@B@@BB@B@B@B@B@@BB@@@BA@@B@B@@A@@BA@@@@B@@@BBBA@@@@B@BB@BAB@D@@A@@@@BA@@FC@@@A@@@ADA@@BA@BB@@BBBB@BDB@@BBB@@B@B@B@BDDB@@B@@D@F@B@D@B@BAD@BAB@BAB@@CF@BAB@@C@ABAB@@A@A@@@A@@A@A@@@A@@AA@AA@A@EA@@@B@@AB@@AB@B@BA@ADA@@@CBA@C@@@A@@@C@@AA@A@@@ABCB@BA@ADA@A@A@G@@@@AAA@@AAA@C@@@@@CB@B@@C@@@C@@@AAA@@AAA@AAA@@A@A@@@CBA@AB@@BB@B@BB@@@B@BBFAB@@B@BAF@@AAABCBC@CDAA@AA@@@@A@AA@@@AAAAC@AA@@C@@BA@ABA@@@@AA@@@@C@@@@C@E@A@ABCBABCBABAB@BA@A@@BA@@BABABABA@C@ABA@C@@@CBABABCBAB@@ABG@CBC@@B@@@B@B@B@B@BAD@@@BA@@@A@@@@@@@@B@B@@AA@@AB@@@@A@A@@BADA@@BADABAB@D@B@@@@DBDB@BB@BDBB@B@@AB@B@@@B@@AB@@@@@B@@@BCBAB@@@B@@@@@BB@DBF@BB@@BBBB@@DD@BB@BD@BB@BFBBBB@B@B@BBDBB@@BBBBB@BBB@@@BBBB@BB@@@B@BB@@DB@@B@@BBB@BB@BB@@@@B@@@BD@@B@BB@@BD@@BBBADADABADA@AB@B@BAB@BA@@@@BC@@BC@@@A@A@@@AB@DABA@AD@BABABAB@@@B@@@B@B@@@D@B@D@F@D@BBDBD@D@@AB@BABAB@B@B@LABB@@D@BBDBBBB@DBB@BB@@@BBB@BB@B@JBF@DAB@B@@@@BDB@@B@DA@@@@BBDB@@DBBBB@B@B@BBDBDBFDFDB@B@B@D@DAF@@@@@B@@D@@B@F@BBB@@BB@@@B@B@BADE@@D@BAB@@@@B@@BDBB@@B@BBF@DBB@B@@B@@@D@@@@@B@BA@AD@@@D@B@B@B@@@B@@@DAB@B@B@B@B@@@D@BBD@@@@B@@B@@@@@B@@BB@@@BBD@D@@@B@B@B@@@BABAHBF@@@B@@D@@BB@BBB@@DB@BB@@@BBDBD@DBB@BB@@B@@AB@BCBADAB@B@B@@BB@B@@@B@B@B@B@BBB@BB@@BBD@@BB@@@B@B@B@@@D@@AD@@@BBB@B@B@DB@@B@@BBDB@@BB@B@D@BAB@B@B@@BDB@BB@BABAB@D@@BBAB@B@@@D@@ABAB@BA@CB@DABAB@B@BA@C@A@A@ABA@C@C@@@A@@@ABA@AD@@A@@@GBA@@@AB@B@BA@@@A@A@A@A@@@@@CD@@@BA@@BC@@@A@ABA@@B@@A@CCA@A@EB@@CAA@AA@B@@AB@BAB@BA@C@CBC@@@A@ABCACBA@@@AB@@ABAB@B@@CDAD@BA@@B@B@@A@A@CBC@EDA@@@AA@@@A@AAA@BA@@@@@AB@B@BAD@BBB@@ABAB@BABA@CB@BAB@@BD@BBB@@@B@BB@B@B@BB@BBB@@@D@BB@DB@BB@@B@@@BB@@B@@@B@BB@@@BB@@@@BB@F@@B@BB@BB@@BA@@BAD@D@BAB@DABABABA@@@BB@BB@BBBBBBB@DB@BB@D@B@BBB@@@B@@@B@DBBB@B@@BBBB@@@BBBBB@@FBB@@BB@DD@@BBBBD@DB@@BB@@ABAD@@@D@@@@@@B@@@D@DA@@B@B@@BAD@BBBBB@@@B@@@@AB@D@@CD@D@@A@@BAB@@@BBBB@BB@@BBB@BB@@BBBB@@@BAB@@BBAB@@CBAB@@@@@B@@@DAB@BABABAB@@@@BB@BB@@B@@ABB@@@@BB@@B@@@B@@BF@@BDB@ADBB@@@@B@@BB@@@@@@B@DAB@B@B@@@FBB@@BB@BFDBBB@@@FDB@@AB@B@DBB@BAB@@@BB@BB@B@B@B@B@@@B@@@BD@@@BA@@B@BA@@B@@AD@@@FBD@D@B@BAB@BBD@@@D@B@B@B@B@@@B@@@B@@BBB@@@FDB@BAB@DBB@@@B@@AB@BBB@D@BD@B@B@B@@B@@B@D@@@DBB@@DBD@BB@@BBBB@BBB@B@BHD@@BBD@BBBBBBBBB@DB@@BBDDB@@B@@@BABABA@ABAFAB@@A@@@EAA@A@C@E@ABA@CB@@A@A@C@@@A@A@ABA@I@@@C@@@@AA@CBABA@A@A@@@CAA@AAA@C@ABA@EB@BA@AB@@A@A@A@GBC@ABA@@@A@AAA@@@A@A@A@C@A@A@CBABA@C@ABA@A@@@A@G@ABC@ABA@@BA@A@ABABA@ABA@@BC@C@A@A@ABED@@@B@@@BAB@BAB@B@@@BA@@D@@@BA@@BABA@@BA@AB@@AD@@A@A@ABABA@AB@@ABA@ABABCB@BA@A@CBC@A@CB@@ABCF@@@@@B@B@@C@@@A@A@@@CB@@@@@D@B@BBDB@DBDBBB@@B@@@B@B@B@DBDBB@BBF@@@B@@@@BBBBD@BBB@BBD@B@@@@@D@BBDBB@@@DAB@B@@@@@D@@CBBB@B@@ABA@@@@BBBBB@BBBB@BBDB@@B@BAB@B@BD@@@@@BBAD@@@BBB@@AB@B@@BBBB@BFBB@@B@@@D@BAB@F@D@B@DAB@B@@@BD@BBB@BDB@BBBB@@@@B@@@B@B@@AB@@BDB@B@D@F@@@@B@B@@DB@@@D@@ABAB@BBBBB@B@@@@@BB@B@D@B@B@BBB@@@BB@B@@@B@BB@@@@B@@@B@@B@@@BAD@B@B@B@B@@@B@B@@ABBBAB@B@B@B@B@@@BAB@B@DB@@B@DAB@B@@@B@D@B@DA@@DADABABA@AB@DABA@ABBB@@@B@B@B@D@B@DB@@@@B@FD@@BB@B@D@BBBDBBB@@B@D@@@@BB@@B@@BB@BBB@@B@B@B@DAB@BAB@B@@@BA@ABAB@BABADABCBAB@B@@@B@BAFABADA@@B@@@B@@AB@B@BAB@B@B@@ABAB@@A@AB@B@DCB@B@BA@@@@BA@ADA@@@AHAB@DAB@D@@@@B@@B@@@F@DA@@B@BAB@@AD@BA@@@A@@@A@@AAB@BAB@@@BA@C@CBA@ABA@A@A@@B@BAB@B@B@@A@@B@B@DABA@@@A@@B@@AB@BA@@BA@@@A@@@AAA@C@AAAB@@ABA@ADA@@B@B@DA@@BABA@@B@DABAB@@A@AB@B@@AB@B@B@B@B@B@B@@@@C@@BABABA@C@ABA@A@@ACAAB@@@FBB@@@BA@@BA@@B@B@BAD@B@BAB@BC@@@@@ABADAB@@A@@AAAAB@@@BAB@BAB@B@B@B@@A@A@@@A@@@ABA@@DAB@BA@ADA@ABA@AB@@@BA@@BA@A@C@A@A@AA@@A@AA@@@@@B@DAFBD@@@BAB@@A@A@@BA@CB@@A@A@@@@DAB@@@B@B@B@BABCBABC@@BB@@BB@@B@B@DBFABBB@B@BB@@@@BABA@@F@@@B@@@@ABA@@DIBA@ABABC@A@CB@B@BAD@@@B@@@@AAC@ABA@@@A@@AAAC@A@@B@BA@@BB@BDBBBD@B@B@@@@BBB@@@@@@BA@@B@@@BAB@@@BA@@@AB@B@B@BA@BD@B@B@B@BBDBBB@@@BA@@BBB@@@BBB@@@@@@B@@@B@D@B@@@D@@@B@@@@BB@BBB@B@B@@@@@@BBD@@AB@BB@@BBB@BAB@B@@@B@@BD@@@BB@@@B@DABA@AFC@@@A@@BA@A@@D@@@@ABA@ABABABABA@@@@@A@A@@@AAA@@AC@A@A@@@@B@@A@@@A@A@@@@@C@@D@@A@@@@@@A@@AB@@A@@AC@A@@BABCBA@ABA@@AC@A@A@ABC@A@@@A@CB@@AB@BCB@@@CCACECCAA@@@@ABA@@BA@@BADABAB@@ABA@@AAAAAG@AB@B@BA@@@A@AB@@ABA@AAC@@@@BA@@@ACC@A@@@@BA@@BABB@@@@BA@A@@AAB@DA@@@A@@BAB@B@DA@AB@AA@@A@@A@@@A@@@C@@@AB@@ABA@ABA@@B@@@@@AA@AAAA@@@AA@AEC@@@@BABA@@DAFABABAB@@AHABAB@B@D@BAB@BADABCBAB@B@BAB@@@@@A@A@A@AAA@ABC@GAA@AAC@AAA@@@A@EAAAA@@AE@@@A@@AA@@AA@@A@A@@@@@@B@@@B@DAB@B@B@D@@@@@BA@@BA@@BAD@BABABA@ABAD@@A@@BA@A@@BAB@D@@@D@@@B@@@@A@@BE@A@A@@BCDABADCB@BAB@B@BA@AB@@ABC@A@@@@B@BA@@AAAC@ABA@A@AA@@A@@@@@@BABA@A@A@AAE@@@@D@@@B@B@@@BA@@BAF@BAB@@AB@@AA@@ADA@@B@B@B@B@BA@@@@@ABABA@AD@B@@A@AB@@@BA@@F@@@B@BABA@@@@DABBB@BA@@DABAB@@A@@@AB@BAB@BAB@BAD@BA@@B@B@@AB@@A@@@A@@@AA@AA@A@AACAA@A@A@@@AB@@@BAD@B@BABA@@@@@A@@AA@ABA@@BA@@@@B@@@B@BBB@BAB@@ABA@@@ABA@AAAAC@AAA@A@@@ABA@@ACAAA@@@AA@@@@@E@A@AB@DAB@BAB@@@BA@A@@@E@@B@BAB@@@@A@CBE@A@AB@@@B@@@D@D@B@BAB@@AD@B@@A@@@CBA@@D@B@BA@A@@B@@@@@BBHDB@DD@@B@B@B@@@BA@@@ABA@@BA@@@ADBFABBB@B@B@@B@@B@@@FAB@@@@AB@@ABA@A@@@AB@@@BAB@@@@A@@B@@AB@@AB@B@DADAB@@@BCB@B@@AB@@ABA@@DBBA@@DA@@@A@@BA@@B@BBDB@@B@BAB@DCDA@@B@@@B@@CDA@A@A@A@@@A@@B@B@@BBB@@B@B@B@D@B@@@@@@@AA@A@A@AA@@A@A@@@A@@@@B@B@BB@@BDDD@@B@@@B@BABABA@AA@@CB@BC@ABA@@@AB@D@@@B@@@@A@A@@@A@@FC@@B@@@@A@@AC@@@AA@@AA@@A@@CAA@C@@AA@AA@@C@@A@@@AAAAAAAAAA@GAE@CAC@A@A@A@@A@@@CA@@@@AF@BAD@BAB@@@BAB@@AB@@@@A@@@ABA@@@ABA@A@@@AAAA@AAGC@@A@A@@@@BA@G@A@ABA@@@AB@@ABA@@@A@@A@AA@@A@A@@@AB@BAB@B@@A@@@A@A@CB@@ABA@A@@AA@@@A@@BA@@@@B@B@@@@A@@BC@A@@B@@@@BBA@@@@CC@@@AAA@A@@A@@BAA@B@@A@@@A@@@@@@A@@BA@@B@A@@@@A@@@@FAFABAHCDAB@BAB@@@BA@@D@D@D@F@@@FAB@D@D@HADA@@BAB@DABAB@DABAB@@@@@@AAA@AA@@@@ABC@@@A@@@@@@BBB@@@B@B@@AA@@AA@@AAAA@AA@A@A@A@EAAA@@@AAIDAAAA@@@A@@@A@A@@AAAA@@@AB@@A@@@C@A@ABA@ABABA@AB@@AA@A@C@A@A@A@@@@@@AAA@A@A@A@@@C@AAA@A@A@A@@AA@@@@@AB@B@@AB@@@BABA@@DA@@D@@A@@@@@CBA@@BA@@BADAB@BB@@@@BA@@@@@@@A@@A@@A@@@@@@D@B@DAB@BAD@@@@A@AAA@CAABC@@@@B@B@@A@@@A@A@@B@@A@@@AD@@@@BB@@@@@@@@A@CA@@@@ADA@@@@@ABA@@@A@@@A@@@@@AA@@A@@B@@@@@DB@@DB@@BADBB@@BB@BB@B@BB@@@B@D@B@@BB@BBDB@@BA@A@CBC@A@A@@B@@A@@@A@@@@F@@@B@B@@@@A@@@AB@@@B@B@B@@A@@DEB@DA@@B@@@BBA@@@@@BD@@@@BABA@ABAB@@@@A@@B@@@@ABA@@BAB@D@BAB@@@@@B@B@B@@@B@@@B@@@B@B@B@@@@A@ABABAB@@@@A@@@A@@CACAC@@@@A@@FA@@@@@A@@@@A@AA@@@@@A@ABABA@@@AA@@AB@B@B@BBBB@@@@@BD@B@@@BA@@B@B@B@DAB@DADCBAB@BABAFAB@@@DCB@@@D@D@D@D@DBDBDB@@B@@AB@@A@ABAB@B@B@B@@AB@BAB@B@@@B@BA@ADAA@A@@AB@@A@AB@B@B@@A@ABAB@B@@@B@DAD@@@@A@@@A@@@A@A@CAA@ACA@@@A@@@@B@B@B@D@BA@@B@B@HB@@B@F@D@@@@A@@AAAA@@@@BC@@@C@AAA@C@@BA@A@A@A@C@C@A@A@ABCB@@@@@BA@AAA@@@A@AAA@@AA@AAA@AAA@@C@A@ABABA@@@A@A@ABA@A@CA@@C@A@@@AB@@@@AAA@AA@@A@A@AACAC@CAA@@@AA@@@@A@ABA@@@CA@A@@A@@B@B@BA@@BCFADA@@@A@A@@@@@AB@B@@AH@@AB@B@@ABAB@BA@@@@B@B@@ABA@@@@BAAABCBA@A@@BABA@@@@BABABABA@@AA@C@A@A@C@A@AB@@@B@@@BA@A@GAA@C@A@EAA@A@AAC@AAA@@@AA@A@@EAAAA@AAA@@@@CA@@@AA@@A@AA@@@@A@@@ABA@@@ABAA@@@BAB@@@B@D@@@@CAA@@AC@A@@@A@@@A@ABA@C@A@A@@@A@A@A@A@@@@B@@AF@@B@@@BB@@@@ABA@@@A@@AA@@@@AAA@@AAA@@AAAA@AA@A@@CA@@AAC@@@A@@B@@BB@B@@CD@@AB@@A@C@@AA@AAC@CAAAA@@@@@CCAAA@@A@@A@CAA@A@A@@@EB@@@@ABAB@B@ACA@@A@A@A@A@@@@BCHCFADAD@B@@@@@DADA@AB@B@B@@@D@BAD@BA@AB@@@B@D@D@BABA@ABA@A@ABE@C@A@EAA@@A@GAA@A@@BC@A@A@AA@A@@C@@AAAA@@@E@A@@@ABC@A@@@C@@CBA@A@GAEAA@@@@C@AA@@AA@A@A@A@A@@B@B@B@@C@A@@@AB@@A@CAAAAA@A@@@A@C@@@IAA@AA@@@AB@@A@A@A@ABAB@@C@@B@@AFABABABA@@BCB@@C@EBA@ABA@@@CAC@A@A@C@AB@@A@A@AAA@AAA@CCAA@A@AAA@@ACCA@A@@@A@A@A@A@ADA@@@C@A@A@AAC@A@@BA@@B@@AB@B@@@@@@A@A@@B@BABA@A@@A@AA@@AABC@@A@AAAAE@AA@@AA@@@A@A@@AGACAAAECA@AAAAC@C@A@@@C@A@@BAB@@A@A@@B@B@@@@A@A@A@@BAB@@A@A@@@AA@@@A@A@ABA@@@A@@@AA@A@AA@@@A@A@@@@A@A@@@@A@AA@@AA@@A@@@AAAA@@A@EA@@CAAA@@AA@E@CAA@@@AA@@B@BABCBA@AB@D@BB@@B@@@D@@@B@@@B@B@@CDA@@B@@@B@B@@A@ABABA@@BA@@@@@AAA@@@@@@EA@@AAA@@AB@@CBAB@@A@A@A@AAA@@@AA@@B@@@@AB@@@@@B@@@B@AAAA@@B@@@B@@@@@@AA@@@@@@A@@@@@@@@@AA@@AAAAA@AA@AAAAAA@@A@AA@@A@@@@B@@ABABA@@B@BAD@@A@@@@@@AAAAA@A@@G@AA@A@A@@@A@@@@A@A@@A@BA@@@@@@AAAAACAAA@@@@@AB@@@@@@@@@AA@@@@AA@@@@AB@@B@@B@@ABA@C@@A@@@@A@@@@@@AAA@@B@@@@@@@@A@@A@A@@@@@A@@A@@@@@@A@A@@AA@@A@@B@@A@@@AA@@A@@B@@@B@@@@A@@@@BAB@@@@@@A@@@@@@@A@@@@BA@@@AB@@@BBB@@@@A@@@C@AA@@@@@BAB@@@@@AA@@@@B@B@@@@A@@@@AA@@@@@@@@A@@@A@@@@@@@BA@@A@A@@A@@@@@@@A@@A@@AA@@A@@@@B@@@AA@@@@@@AA"],"encodeOffsets":[[111636,33256]]}}],"UTF8Encoding":true});}));