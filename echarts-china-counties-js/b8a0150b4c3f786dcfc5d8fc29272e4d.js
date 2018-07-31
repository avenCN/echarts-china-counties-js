(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('筠连县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511527","properties":{"name":"筠连县","cp":[104.512025,28.167831],"childNum":8},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@"],["@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@"],["@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@A@@@@@"],["@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@B@@@AA@@B@@@@@@@"],["@@B@CC@@@@@@@@A@DD"],["@@B@CE@@@@@@@@BF"],["@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@A@@@@A@@@@"],["@@A@@@A@@@AB@@A@A@@@A@@@@@A@@@@@A@@@@@A@@@@@A@AB@DCDCBA@EBC@@@EDEBEDCDEDCDABC@@DBFFBDBFDJBHBJ@H@D@D@F@F@FBDDDBB@D@@@DAFCDAF@HAFAH@D@FAD@D@DBB@LNDDDBD@B@@@D@B@B@DB@BDDBFBB@DADABB@@D@BDD@DAD@D@@@DBDBDDDDBDBDBDBFBFAD@F@B@BBDBFB@BBDBBDBB@@DALDBD@F@H@HAFBBFBH@FBF@DAFCFEDA@AD@D@@@D@HBDBDBF@B@FAFCDBDDBF@FBD@DB@B@DABADCBCBGCCACAEAEAE@E@E@CBG@C@CBC@@@CBCBADC@EAA@CD@DBDBBBD@DADADCDAFAB@BAF@DBD@BJBD@D@D@D@@@D@BB@@@BH@D@HBFBD@BABABEB@DCD@H@F@F@DBB@@AB@FAD@B@@BB@B@B@@@BB@@@@BBB@@@@@B@@@B@@@D@B@HCD@B@B@@@BB@@@@B@@@@@@@B@@BB@@@@@@@B@@B@A@BB@@@@@B@B@@@@BB@@@B@B@@@B@@@B@@BB@@@@@B@B@@@B@BB@@@B@@@@@@@@@@@D@@@BFBBD@@D@B@DADABADADBDBB@FBDBB@DCDABADCFABADCBC@ABC@CBABADCBABABCBADBFD@DDDDBD@FADBDDFB@BB@@@DBDBB@DAD@DAD@FAD@DBD@DBB@F@BBBBDDDDDBFFDBDDFBDBFBBDBBDDBDDDBBFDFBD@LAJCFAF@FBD@FBFDFDH@LBFABCBO@EACGG@ACAAA@@AA@C@@@@C@@@AA@A@C@CA@@AAAAA@@@A@ABC@@@AB@AC@AAA@C@ABABCB@DCB@DAFADA@@BAB@FA@AAE@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@AA@@B@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@B@@@@A@DFFCCC@@@@@@@@@@A@@@@@@B@@@@@A@@A@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@DDBAB@@C@C@ADA@@@@BADABADC@C@@BA@ABAB@@ABBD@BAB@BADCFCDAFADBD@D@D@B@@@BCBC@CBCBADCF@L@HBD@BBBBFTBBBBB@DAB@BA@A@A@@@A@A@A@I@I@@@@BG@C@A@@@A@A@C@AAA@@@A@A@A@@@ABABABAB@DA@@B@D@BADAFCFE@@BABCD@BA@CBC@A@ADCDEBAB@@CBCBEDEBC@@@EBABC@@BA@C@A@ABE@G@A@@@A@A@A@AAC@AACAAAC@C@A@CBC@@@ABE@C@C@A@A@C@CAAACACCCEEAEAACCAA@CAA@C@AAA@@@@A@@A@@@@@@@A@@ACAACAAAAAACBC@@@A@A@A@@@A@C@@@A@A@A@AB@@A@ABABA@ABA@A@A@AAA@@AAAAAAAAAAA@@AA@A@CCC@EBAA@A@AFED@B@B@B@@@B@B@B@BAB@BA@A@A@ABABABA@AAEAEDE@ABA@C@@@E@I@CAE@ECC@@C@CE@ABCDCBABBH@D@B@B@BABAD@F@@@BA@@@A@ACAE@A@AAA@@@@A@A@A@A@A@A@ABA@C@A^CCEKCIAA@AAA@@@A@A@A@AAA@AA@@@A@A@@@AAAA@A@A@@ACBAAA@A@CBA@A@A@C@CBA@ABABAB@B@@@B@BB@@BADBBDD@F@BA@C@K@MEGAMA]KICGEOCGAEBC@A@KCAACAAAA@@AAAAAA@A@EE@@GCGEEEEAEEGECAA@AAA@AA@@A@AAA@@AA@AAAAA@@AA@@@@@@@A@@@A@@B@@AB@@AB@BA@@BAB@BABA@GAE@CBA@A@A@@@CAC@C@CAECGECACAA@EAA@AACAC@CCEEAAA@@@A@AAA@A@A@A@A@@BA@ABA@@@ADA@@D@B@@@BBB@B@BA@@@A@ABA@C@A@A@A@ABA@@B@B@BB@@BAB@@@B@BAB@B@B@B@BB@@BB@@B@B@@@BABA@ABABABA@@B@B@B@@AB@@AA@@@@A@@A@@@@A@@@A@@@A@@B@@AB@B@BAB@BA@@@AB@BABABABAB@@ABA@A@CBA@CBA@C@A@A@A@AAA@@AA@@AAA@A@@@AAA@@@AA@@AA@@AA@CAA@A@A@AAA@A@@@ABA@A@@BABABA@@BABAB@BADAB@B@BAB@BABBBAB@B@@AB@@A@A@C@A@AB@BAB@@@BA@A@ABE@C@C@C@ABA@CBA@CBA@ABAB@B@@@BB@@BB@@B@BA@@@A@A@A@A@@@ABABAB@BA@ABABCDAB@BCB@BAB@@A@@BABABA@CBA@C@A@C@ABA@ABA@ABAB@BAB@BABABA@ABA@A@A@A@A@A@ABA@@BABABABABADABADAB@BCBA@ABC@A@CBA@CAA@C@A@A@ABABA@ABAD@BA@@BAD@BAB@BABABA@C@@BA@A@@BA@@B@@@BB@@BBBBB@B@B@B@@AB@BA@ABABABABABABCBAB@@@@@@@@ABABAB@B@B@@BBBAB@B@B@B@@BBBAB@BABABABEDCDABCD@@ADAHCBADCBCBADA@ABCDA@@@@@A@A@AA@@@@A@@@@B@B@@A@@@AB@@A@@AA@@@@@AB@@CBA@@@A@@@@@A@A@AB"]],"encodeOffsets":[[[107200,28847]],[[107202,28843]],[[107202,28845]],[[107292,28597]],[[107194,28850]],[[107190,28852]],[[107288,28617]],[[106842,28697]]]}}],"UTF8Encoding":true});}));