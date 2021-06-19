# import requests
#
# from autoinfo.decoders import RequestDecoder, ResponseDecoder, HexDecoder, RequestBuilder
#
# page = requests.get("https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/ss")
# print(page.text)
#
# request_decoder = RequestDecoder()
# response_decoder = ResponseDecoder()
# hex_decoder = HexDecoder()
# request_builder = RequestBuilder("https://online.autoinfo.com.au/oscar/Aut01nf0iiqq4/a")
# request_builder.add_params({
#     "AU": 1,
#     "NZ": 1,
#     "USA": 1,
#     "JAPAN": 1,
#     "THAI": 1,
#     "AEM": 1,
#     "lllll": 0,
#     "ChassisFlag": 1,
#     "SeriesFlag": 1,
#     "isBot": "false",
#     "amd": "false",
#     "t": 1,  # tab number, check getTabCodeByTabId method in script file
#     "scriptVersion": "3.590.jpg",
#     "cookie": "025CFE4910A09D75A4AD28F899E21FF7",
#     "0": "make"
# })
# print(request_builder.build())
# print(response_decoder.decode("569436D776D79601D1A193E76667261196D15694E766A6A1F101E7C6233196F15611C70757F23637A6A1F101F79762570627161196D156943637E76727B63141943637E76727B6313674C601674727B631419447E727161196D15694262166F611E131B6B446561136F1F63167C307E7774716D766A17431C74697F767D7A64266018641E6017747426601F1A157E7E7F694A6E1E6A1D77767C6938756114111C747F7F336B746A186E1C6A1E256B7B7F611E131D7F387A746A186E1C6A1E22606C70731E747D7326601F1A1671636773211E767D7B756313674C6017777C75656B6E26601F1A177D7E7F6F3267746A186E1C6A152367776B66756314194F70667C6067766A103D1F611A66797D797C331E111A66797D797C33196F156110647378207561141110647378207561136F1F6317782373746A1F101E7B79207561136F1F63177D3D7D756A1F101E7E672E7461136F1F631D7724757C7E611E131D7724757C7E61196D1569467C7A737A74631419467C7A737A746313674C601A6A6C7662717D331E1111616D756B72276018641E60107C68287461141113756B72276018641E601474722563706A6674631419447E7A7C6271636D7D33196F156110647D762367756A1F10136D7E2C70667E61196D15694070676472746314194070676472746313674C60127672767078672074611411137F797F20726F7975601A6416331666757F73776A17431666757F73776A103D1F611B6661636D694D10106D6060646A103D1F61147271636D7D387C766A1F101D7978336775617D776313674C60106A667B736A6A227B7D7D611E131B69347B716A627178767E33196F15611F786C694D101E7167601A6416331B7B7B7167656A17431B7B7B7167656A103D1F61147F73797B69307F73137073736C694D101F74727A726A6A2C72187B7270656A103D1F6119776D78677F331E1119776D78677F33196F1561106E7C642C756C7C611E131A64256D7E7F6C766313674C601C7A6C766314194E706C7C61196D15694F73776177601D1A1520766A7C61196D1569426777617275697C694D10106D776B707F63256018641E601269762E7A776A1F101269762E7A776A186E1C6A1C2F7B78781C7F736D7325601F1A147C78737B4E7F716D7B766313674C601B6D7167756A17431A667A66766313674C60147A6670736D7F331E111F7167737A6E256018641E6015667A2F7C767C611E131C65207C7D7D77601A6416331F707C611E131578256018641E601F767E357211677F7B607C694D101D767666711A642D7B627C61196D1569487A707D6679707C694D101A70707764737A256018641E60147D6134616114111774626E326018641E6014747A28621C757C7668757E32601F1A167E70716B4E7F7C7C6A7F746B694A6E1E6A1C7F7E7C622C77606A1F101E7574256B7E7D60601A641633137471776163141940757A7C60601A641633106A6D7761631419436B667C60601A6416331066767A77756B694D10116D7D7B747C6833196F156110647F722476606A1F10136D7C2877776B61196D15694367777173616314194367777173616313674C601C747C716314194E7E7C7B61196D156943677368627C726A174310667863637F7B694A6E1E6A1A66687B722D726E7170601D1A12356B70717F726C717833196F156113736D6A237B7B7B611E131979346371717B716313674C60116D7163747078331E111A6670607D73226018641E6016747F22601F1A147E757B694A6E1E6A1473727B694D10147970716313674C601B777763726A17431A7C7C62716313674C60147676616C7978331E111F7D7762657A226018641E6014757A22601F1A167F707B694A6E1E6A1A737A7978331E11117279707B694A6E1E6A1670637978331E111D7160707B694A6E1E6A1167776779331E111A66746E7A694A6E1E6A1077756C7A2E7061141111747C6F207D716A186E1C6A142F7B7B7A611E131775287A716A186E1C6A1F3D7762767670631419456E76697D77736A103D1F611B667F7E7B65207061141111647574226C727A61196D15694367746773621368694D10116D746D716819316018641E601E7A6B311C7274766D716A17431D7168631C70747E3E7261136F1F631B75247E7F7D73601D1A182F777F7476726313674C601A747277606B6A21601F1A1A7E707D6A3263736A186E1C6A1934767D797F7973697B331E111A66767F79772A70627861196D1569436775617F7D731419436775617F7D7313674C601774767B777E7E3F701F1A177E74717D27776D7A186E1C6A1620706C76711E13157A236D7D7A186E1C6A15207160617D701D1A15207160617D701A641633176A617B717876794D1016616A7A72717523196F1561167F79772D7D7B7814677F7A1743167D797F7E7E707B46677D7A186E1C6A1C2F73776B666F731419467C727C60676C7A103D1F61116270636D66231E11116270636D6623196F156111707862256E7665711E131B7A216B7764766F7313674C60177C6E701D1A1F256F71136F1F631674226B716A6C7F7314194F7D706171606E75794A6E1E6A1766647E7D2E7F71141116656D7D277D7E7A186E1C6A1229716A7A7661656176231E11117B71687A7E32666A7571196D156943677F747A7F73141943677F747A7F7313674C601C7471677C7A17431D7F7A667F7313674C601D717F706475794D101D717F706475794A6E1E6A196C747A7B4267777D70706475794D1019667670711B6E2577707A667F7313674C601B7B7C7E7D7D68227F7114111A7277772D77607B7E701A641633157D717167747C764A717A75716D727B76231E111F7D7B736D7E257F187B7A7F736778227F71136F1F631378287F716770717C7A17431970717E706E7B782C7018641E6012617933637B781A67726B6A2C701F1A106B736A6A29721A6D70616075794A6E1E6A1D7D726D6C236775781A67726B6A2C701F1A1D7D726D6C236775781A67726B6A2C7018641E60156A6421616275711E131C693E7260697E701A6416331E7F797B71636976231E11147F73797B69307F71136F1F631D64256B7D797E701D1A1E3E766A76727F7313674C60127A677C78707A2C701F1A127065767229737E7A186E1C6A152E7670797E701D1A152E7670797E701A641633116F7A1F101264794A6E1E6A1F7D776777231E11147C746E74794A6E1E6A10737C7C7A2E7E7114111170757F207D7F7A186E1C6A1C2F7D747D6A7E731419467C7C7F766B7D7A103D1F611A6676626177231E111A667662617723196F1561177576722D701F1A16767F717723196F156110636D7323777A74711E131A69347A717D7A7E7313674C601776727E786D77231E111C7D737D716E2D7018641E60107C7E2D701F1A12767474794A6E1E6A1A6D73781526637F7A1F10186779211C74697F701A64163313777A66746074794D10127C716777697723196F156111747C68307E71141111747C68307E71136F1F63117528767D797F701D1A122F7B7776727E7313674C601A767A7A767A64237F7274711E131175287A747A6C707C797723196F156113756779246971141113756779246971136F1F631D752E70687A1F10147674236971136F1F631D6835637E7778701D1A1E326662757C797313674C601C7B7F77737770231E1117707E747A742A7018641E60187C6428797114111B7567722A7018641E60156978267C7A73711E131C6A22757D7178701A6416331B78797063766970231E1111787372697C307971136F1F63177F30797114111D75697023196F156110647A632E70706B6279731419436771607C70726B6A2A7018641E60136D7322706273711E131A6E2971716978701A6416331A7071716C787D73267C7662711E13107828706D71767A76767E3B7018641E60157D7934716D7779701D1A1F2470667B6D7D7B7A103D1F61167C766266732E787114111C7E7C683F7A7C7271196D15694470667D77721F70742B701F1A1670647D7F211C7B7779701A641633137E767A78731419407F7D7179701A641633107072711E131A782B7018641E601F7D78337D707979701D1A152471617770737B7A103D1F611D69676261794D1016626661687A103D1F611178777261794D101A737671687A103D1F611A6676626D7D33637B781F737F777225637D7A66766F71794D10116D7761647E69307A7314727C7E717F307C716D776C787A103D1F6114727C7E717F307C716D776C787A17431E72767C7B756975236777667A701A6416331B727C7D776860794D101A79777C74616323196F156110647C68386A71141110647C68386A71136F1F631976247067716B701D1A1A2C77716C7A6A7313674C60116D7F76626D63231E111A667E756B6E397018641E601076793074626B666A731419407C71697563626D6323196F15611673697C3E7A7114111673697C3E7A71136F1F63157A2977706D6C7A7314194C737B7D70676E70794A6E1E6A12767F7773231E1119777C7E70794A6E1E6A167668747E2C7D7B7A1F10147C622D777E777B701A64163310667C7F7D797A174310667C7F7D797A103D1F61117B71707C6229701F1A1A7A72797F387A71136F1F63177F3E7F7C767A7A7314194E766C757C7C7870794A6E1E6A1C7C7870794D101C767A7A7313674C60167C676D7D7D6A29701F1A167665677724637B7A186E1C6A1135637B7A1F101B6C6A297018641E60187C79307A7114111B757A6A297018641E601C757A29701F1A1E7F7070794A6E1E6A107B7569762E797270711E131B7225637E777873797A103D1F61177F7E787A6C231E11177F7E787A6C23196F1561177361742677716F711E131D79387D747D71657313674C601774767B77767E2470647A1F1015747E28747D7D7670667A103D1F61116F7777697936701F1A1A6E747E6A236571136F1F631A6E21626C707061607A6C231E111A66726167732261627A64701A6416331C767C7270667A17431C767C7270667A103D1F61117D7D75747426701F1A1A7C7E7C772E7571136F1F631B6E2361727C7F7D767A174311667A6073757474267018641E60136D7520777F7F711E131A6E2F73767474701A641633177A767675731419447B7D7D74701A6416331E7B7D74701D1A172977747A186E1C6A152E7B7F7974701D1A152E7B7F7974701A641633106674746D777A1743106674746D777A103D1F61167C766E7E794D101D77776D777A103D1F61167C71657A6427701F1A1D7D726C793E7471136F1F631C75207E7F777B72166D752C16716775701D1A1F2F737F747C7A711F6E2F7F177A6C747313674C60177A6C7473141945706C7E71196D15694E7F7A6475701D1A142C7B6F7E71196D156945637A7E711E131C6A287471136F1F631B622360667E711E131B622360667E71196D15694870627A6167777A17431B71697160647E794A6E1E6A17667F7D7D231E111C677C747E794A6E1E6A1F7E70757930747114111E7D79762363757A186E1C6A152460667E66701D1A152460667E66701A6416331777717160647E6E231E111D777B736A6E276771136F1F631C722D71766D711E131C722D71766D71196D15694367707A6C747F7D794D10116D70706E7E75247018641E6018647D2F777114111B6D7E75247018641E60147A64227C767A1F10147A64227C767A186E1C6A142360767A1F101E7A69247018641E601576722666606976701D1A1F2F7B746C6063747A103D1F611C7D7B76681F3263767A1F101576722662176B62777313674C60107973637F716F231E111B7272607672357018641E601E7E6E2D77677A1F101E7E6E2D77677A186E1C6A1520716C7777701D1A1520716C7777701A641633157D7D757216767425701F1A147C747E7B467C7C7C71196D15694F7D7B6177701D1A152E7A6A7C71196D1569497177617462197B7F38767114111A727C6226621B7B776B757A103D1F61117077787C794D101A7B767B757A103D1F611A6B737775113567667C711E131A6320747E126767647C794A6E1E6A1966646D7F231E11126767647C794A6E1E6A1D756E7A6921167A7E62767314194F756C7A617215717D307671136F1F6317742667727C711E1317742667727C71196D1569467C7C7C7673757A1743157D777777707C794A6E1E6A17677579782110766B711E131C6E257370781177627A103D1F6116746D736B794D101D7F6C70627A103D1F6116727F726C6D2070607A1F101F79762266657971617313674C60176970757F7170211A6C7B711E131C6A22757D71787219677823196F15611A6E7B794D101B6770701A641633106678636B7D7B7B48606766766D727A1743106678636B7D7B7B48606766766D727A103D1F611161666F7D6422701F1A1A6065667E3E7171136F1F63106A256C766770701D1A1330766D7D6C717313674C60176E7A7E787A762E717114111667717728707E7770701A6416331971697F717314194A70627470701A6416331162797F717314194263727470701A6416331C7C71736F707078231E11167C7B71657A297171136F1F631672207E716D717F707078231E11167A737D7A6E237F727070701A64163310667F7D777D747A297171141110647F75247E7F797B717313674C601A6A66666F7D78231E1111616765667E227018641E601369772D7B736A6676607B794D1011697F7E7878693476627B71196D1569497B731D7063727A17431A7A781671607B794A6E1E6A1671607B794D10167B62717313674C60116D7A70636978231E111A667B736A6A227018641E60136D7C2F7371607067637A174310667F7D73736078346071136F1F631F7429721B7B6660731419467D7B781B71646A794A6E1E6A177C707C68356B716A711E131C752076606C6A70637A103D1F611C7663736A794D10177D6270637A103D1F61167C716F797933701F1A1D7D72667A236071136F1F631F7A2C7D717A1F101679762E7071136F1F631B65247E7C7A711E131B65247E7C7A71196D15694563707A7C707314194563707A7C707313674C6014777775787A794D1014777775787A794A6E1E6A167B6F7D79231E111D7A6C747A794A6E1E6A1F7E747A794D101F7476707313674C60106D61637D7D79231E111B666060747E237018641E6018747420707114111B7D777A237018641E601A7B742270727A711E1313782E71717971701A6416331B6D79736F7E7B7B436774677E721F79722D73716C6067607A17431B6D79736F7E7B7B436774677E721F79722D73716C6067607A103D1F61167167756B6E26621D7177616469794D101D7A6676626D7C311C7A7C6067607A103D1F61197067607A174313706D62701A6416331F7C7C62701D1A162E76627A186E1C6A1422726C7B731160747F30701F1A1C717167782111627477637313674C60156B62701D1A1D326371136F1F631B65247B7169711E131B65247B716971196D15694E7E7F7773637314194E7E7F7773637313674C601C7A6270636978211D7A767C766F79794D101C7A6270636978211D7A767C766F79794A6E1E6A1D7C70757620701F1A1D7C707576207018641E601B677F3D73711411186E7C67207018641E60126A6E237F727070721261772D7371141111636D792C737B7B7311687477207018641E60126A6E2C7E727070721261772D7371141111636D762D737B7B7311687477207018641E60107E7720701F1A12747D79794A6E1E6A1C797C147A231E1117787F1D79794A6E1E6A1D737C7A6220701F1A1D737C7A62207018641E601F777838706479711E131674226B716F72701A64163316627B7A706679794D101769707B736F7A23196F15611775617326621C7B747373141944766A7074621E7B7C207018641E601261772D7373177075707A1743116A747F73711778267371136F1F63177826737114111D727F7A23196F15611777617F32737114111777617F327371136F1F631D7820701F1A1671707A103"))
# request_builder.exec_before_evaluation(lambda rb: rb.add_param("dt", int(time.time()) * 1000))

# print(request_decoder.decode("BEDA6ACEDABE8BFBAC3939098B9BACB99BB99B0B9B8BBBAC9BBB9BEB996BA96BABB91BCBB9FBD9C9996BBBCB1BA9B9A9ABDB09CBB9DBC9FB8BCBAC1B1B1B099D296D299D8B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9ACDBCBBB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACEBA9A90BCBD96B6B1BA91BCB99099B09DBEB996BFB09FB0B6B9BD9A9B9DBCBFB8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))
# print(response_decoder.decode("61C6F611C0003047261331E11147701000D713B6018681F1F631B0850077962611E1314785203067269601A68174C60110B02077B62694D101F7A0003047261331963141E60100B0A5478696A1F101D79085007796261196114163312000906786B6A17431E730B02077B62694A621F15611603090E2B6861141110650A0A5478696A18621D15694200020D79686314194361010906786B6A10311E1E6A1100000D713B601F1A116003090E2B686113631E1C6A1B5003067269601D1A172103020D796863136B4D1F61190200047F61331E111A6203030D7C3B6018681F1F631E0350077462611E131A6D5903067F69601A68174C60110901077362694D10116A0200047A61331963141E6013000A5470696A1F10136A035007716261196114163310040906706B6A174310610F02077362694A621F15611007090E236861141110630E0A5470696A18621D15694307020D71686314194361060906706B6A10311E1E6A1107000D793B601F1A116004090E23686113631E1C6A1F5503067A69601D1A193506020D716863136B4D1F611A0703047A61331E111A6106000D793B6018681F1F631A0F50077162611E1314795503067A69601A68174C60120F06766314194363040D77601A68174C60170E02077B66794D10116C0503047265231963141E60100E0A54786D7A1F1013690D5007796671196114163316070906786F7A174310670C02077B66794A621F15611305090E2B6C71141110600C0A54786D7A18621D15694500020D796C7314194366010906786F7A10311E1E6A1200000D713F701F1A116303090E2B6C7113631E1C6A1B530306726D701D1A193100020D796C73136B4D1F61190503047A65231E111A6204000D793F7018681F1F63180D50077166711E131A6B5703067A6D701A68174C60160E02077A76794D10116D0503047375231963141E60110D0A54767D7A1F1013680E5007777671196114163310020976786C7A174310610902777B65794A621F156114650F0E2A701F1A1566060D70231963141E60176A0C547971141114630F0E2A7018681F1F63180C547971141110610F0E2A7018681F1F631D0E547971141110640D0E2A7018681F1F63180E547971141110610D0E2A7018681F1F631008547971141110690B0E2A7018681F1F631E08547971141110670B0E2A7018681F1F631D08547971141110640B0E2A7018681F1F631808547971141110610B0E2A7018681F1F631E09547971141110670A0E2A7018681F1F631D09547971141110640A0E2A7018681F1F631809547971141110610A0E2A7018681F1F63100A54797114111069090E2A7018681F1F631F0A54797114111066090E2A7018681F1F631E0A54797114111067090E2A7018681F1F631D0A54797114111064090E2A7018681F1F63190A54797114111060090E2A7018681F1F63180A54797114111061090E2A7018681F1F63100254777114111469010E247018681F1F631F0254777114111576010E247018681F1F631E0254777114111467010E247018681F1F63180254777114111061010E247018681F1F63180354777114111061000E247018681F1F63190A5007767A1F1013690A5007767A18621D15694902020D76701D1A193902020D76701A68174C6014080207747A17431064080207747A10311E1E6A1502000D7E231E111A6502000D7E231963141E6015080A54777114111065080A54777113631E1C6A185103067D711E131A685103067D711961141633100309067773141943600309067773136B4D1F61190303047D794D1011690303047D794A621F15611201090E24701F1A116201090E247018681F1F631F0254717114111066010E227018681F1F631E0254717114111067010E227018681F1F631D0254717114111064010E227018681F1F63180254717114111061010E227018681F1F63180354717114111061000E227018681F1F63180354717114111E71000E227018681F1F631A0C547171141110630F0E227018681F1F63190C547171141110600F0E227018681F1F6319095007707A1F101369095007707A18621D15694203020D70701D1A193203020D70701A68174C6017090207727A17431063090207727A10311E1E6A1303000D78231E111A6303000D78231963141E6018080A54717114111068080A54717113631E1C6A135103067B711E131A635103067B711961141633150309067173141943650309067173136B4D1F611E0303047B794D10116E0303047B794A621F15611601090E22701F1A116601090E227018681F1F631A0B5007707A1F10136A0B5007707A18621D15694002020D70701D1A193002020D70701A68174C6013080207727A17431063080207727A10311E1E6A1206000D7130701F1A1F7305090E2B637113631E1C6A1D5807727A1F10136E0254737113631E1C6A1E5807727A1F10136D0254737113631E1C6A1F5807727A1F10136C0254737113631E1C6A185807727A1F10136B0254737113631E1C6A195807727A1F10136A0254737113631E1C6A195807727A1F101D7A0254737113631E1C6A195807727A1F1013010E207018681F1F63190254737114111060010E207018681F1F63180254737114111061010E207018681F1F631E0354737114111067000E207018681F1F631E0354737114111E77000E207018681F1F631D0354737114111064000E207018681F1F631A0354737114111063000E207018681F1F631A0354737114111E73000E207018681F1F63190354737114111060000E207018681F1F63180354737114111061000E207018681F1F63190C547371141110600F0E207018681F1F63180C547371141110610F0E207018681F1F631D0A5007727A1F10136D0A5007727A18621D15694503020D72701D1A193503020D72701A68174C6011090207707A17431061090207707A10311E1E6A1203000D7A231E111A6203000D7A231963141E6011090A54737114111061090A54737113631E1C6A1251030679711E131A6251030679711961141633160309067373141943660309067373136B4D1F611A03030479794D10116A03030479794A621F15611001090E20701F1A1F7001090E207018681F1F63190B5007727A1F1013690B5007727A18621D15694002020D72701D1A172002020D72701A68174C6013080207707A17431063080207707A10311E1E6A1507000D7F20701F1A116404090E25737113631E1C6A15431E1116111961141633101F1A1F7E70781C3E7A706A18696B0A1A0543577952501D110A5008011B47504E5B5E036B42545341485C7700564C5C6A501D110A5008011B47504E5B5E036E525C4C56685A101"))
# print()
# print(request_decoder.decode("BEDA6ACEDABE8BFBAC0BCBFBCB8B9BACB99BB99B0B9B8BBBAC9BBB9BEB996BA96BABB91BCBB9FBD9C9996BBBCB1BA9B9A9ABDB09CBB9DBC9FB8BCBAC1B1B1B099D296D299D8B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9AC0BBBBB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACEBA9A90BCBD96B6B1BA91BCB99099B09DBEB996BFB09FB0B6B9BD9A9B9DBCBFB8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))
# print(response_decoder.decode("F4C65694003010D74686314194363020A06756B6A10311E1E6A1103030D793B601F1A1160000A0E23686113631E1C6A195603067A69601D1A193305020D716863136B4D1F611C0503047265231E111A6704000D713F7018681F1F63190D50077966711E131A6A570306726D701A68174C60130E02077366794D1011680503047A65231963141E60140E0A54797D7A1F10136D0D5007787671196114163310020976786C7A174310610902777B65794A621F1561101D1A172D73731F6C7A726A103A680119574355795A031E1A020111455A4402575161425E514B42057E525C4C56685A174808011B47504E5B5E036E525C4C56685A101"))
# print()
# print(request_decoder.decode("DA7A6AEA7ADA8BFBAC7C8BDBAC3939098B9BACB99BB99B0B9B8BBBAC9BBB9BEB996BA96BABB91BCBB9FBD9C9996BBBCB1BA9B9A9ABDB09CBB9DBC9FB8BCBAC1B1B1B099D296D299D8B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9ACBBCBFB0B8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACEBA9A90BCBD96B6B1BA91BCB99099B09DBEB996BFB09FB0B6B9BD9A9B9DBCBFB8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))
# print(response_decoder.decode("F611A716372781D397D731E4B0215017B427660081F17534C420D521B0612001D1A1955000609070105080957070B0C0576010A0D560A0008010602010F5100000C0707020B0B5301710B05010708095101040B0401000B094A6E1E6A1170607B7B427A7C7B631449081F58721074727601141E03464A5453140F19094D10110C0107000C085502010B070A050E7F5207030A0505090B0B530600010702030B0F5276020C0701010A082301050B0502030F085901060B02010313674C601A7E76721270742572154E020215017B4277747977021D1D59154B5F58150C100A17431B070E070705080952060B0C0576050C0B5304040E000302080955010A0C0300020C0E5505070907060208095270000E0004010A0C520A000D0003020A103D1F61117577711B732E76731E4503011C022117747977021D1D59154B5F58150C100A17431B070E070705080952060B0C0576050C0B5304040E000302080955010A0C0300040C0C5503070C0002030B795204000E0300060B035207000900001A6416331B757D731179777F21144509031608781E277377081F17534C420D52150612001D1A125504070D0702030B0F5906057C0706010A0D560400090002030C085806030A0606070C0A550600080101730B0D5204030A0401090B0E5203000A186E1C6A1923637078107A7E7B6B474A031C0A7212797F511E165A474B5D581D5F1301141110050A0E5006000C0300020C035504770B0602030E0C5901030A0701080C0B5301070907060208095270000E0004010A0C520A000D0003020A103"))
# print()
# print(request_decoder.decode("3A6A0A9EDA9A8BFBAC99EBEBDBC99BBBBB6BBBC9EBFBCB09ABD9AB6B9BFBCB9BEBBBABDBABCBEB6BAB9B9BFBCBA9ABCBABCBEBDBEB9BDBFBCBBB9B1B9BA99B9B9BFBCBABEBABBB0BBBFBCB9BBB6B9BFBCBABDB9BDBAB9B9B9B0B9B0BBBFBCBB9CBBBABBBABFBCB1BBB6BBB6BBB0BBB8BABACABDB0BD999098C8CCDABDB0BD999098BDBAC3939098B9BACB99BB99B0B9B8BBBAC9BBB9BEB996BA96BABB91BCBB9FBD9C9996BBBCB1BA9B9A9ABDB09CBB9DBC9FB8BCBAC1B1B1B099D296D299D8B0BACFB8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9AC0BBBBB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AACEBA9A90BCBD96B6B1BA91BCB99099B09DBEB996BFB09FB0B6B9BD9A9B9DBCBFB8BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))
# print(response_decoder.decode("5694D1F6D7973637B7367456F7F1C74647D105805435B7417760D180A5E1703041D064F575D0E1E0D41030C061C5E03451E0A4C5E5E5B5B454C5C5E5F001D1A135403707D0271740D025005070C0703047C025372057C7570730A73570A050C71196D15694D1F6D7973637B7367456F7F1C74647D105805435B7417760D180A5E1703041D064F575D0E1E0D40030D1408055616565A441F0347570E51531C4D5D5754094D101509070A090A7928037B0A0774077F0A250072780B01790A7B5806767B7004037A103"))
# print()
# print(request_decoder.decode("6BCB1B6BBBABCBCBFB9BCBAB0B8B9E9AAC3ADA9A2A8A8BFBACBD69393909FC29B9E9098B0BAC0B8B9EAC8B9EBAAC0B8BEA0A3AA9BEDA6ACEDABDAC0B8BEA0A3AA9BE6ABEBE0A1AB9AC0B9BBB8B3A3A3A3A3AACDABE3A0AAA8B9A8A0AACDABE3A0AAA8B9E2AC9BE6AAC999BCB1BBBC909BBEBB99B1B0999B909CB0BB9DBD9BBA9BBC9EB9BEBC999BB998BDA6A4A2A2ABAACEAFE5A7CFB6BDB7CBB8B7A2A6ABECEDAAD9EFE6ACEBABEACCB1BCABA0ABAFBFBBBEBAAAADBFBCABBEBEB9A9A9ACAFB6B1BABABCBEB6BFBCB8B5D5D5DAC0B8B89D909AC0B8B6909199DAC0B8B7909FD0959AC0B8B09BDDDAC0B8B5D79AC0B8BDD09"))
# print(response_decoder.decode("E60140F0D58001F1A177B080A7B5607070E05047200082606717F0501730C792901777E7702030C7E23196F156112070E0E531E111A7B06777D0F2001770F0B04780A7F2906067A7275090A7E2773067D0605080E094A6E1E6A1307070D094D10170E0103760B7D227A007D7076730B7E2776020E7771037C095505027E7305030A103"))

# print(hex_decoder.from_hex_to_string("313538372063632C20344146452049342031367620444F484320454649"))
# print()
# print(request_builder.encode("AU=1&NZ=1&USA=1&JAPAN=1&THAI=1&AEM=1&ZZZ=2097266890bddd773b05ff7300cacb82&scriptVersion=3.590.jpg&cookie=025CFE4910A09D75A4AD28F899E21FF7&isBot=false&amd=false&lllll=1023&ChassisFlag=1&SeriesFlag=1&ct=&t=0&1=TOYOTA888&2=0B5C2A56FCF8239DBE0C28C69F9D7434&3=414C4C&4=ALL&5=.--.&0=engine"))