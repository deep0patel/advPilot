function createAirspace(map) {
var a;
var cdah = [];
var coords;
var title_text;
var more_text;
var po = {
  strokeOpacity: 1,
  strokeWeight: 1,
  fillOpacity: 0.25
 };
var srcInfo="<br>Source: Designated Airspace Handbook, Issue 307<br>Valid: 21 MARCH 2024 to 16 MAY 2024<br>Created: Fri Mar 29 23:01:51 2024"
var ibOpts = {};
var ib = new InfoBox({
  content: "None",
  disableAutoPan: true,
  pixelOffset: new google.maps.Size(12, 12),
  position:    new google.maps.LatLng(0, 0),
  closeBoxURL: "",
  isHidden:  true,
  pane: "floatPane",
  enableEventPropagation: true});
ib.open(map);
var iw = new google.maps.InfoWindow();

function attach(a, infoBox, infoWindow, boxText, windowText) {
  a.ib = infoBox;
  a.iw = infoWindow;
  a.ibt = boxText;
  a.iwt = windowText;

  var boxStyle = {
      border:     "1px solid black",
      background: a.strokeColor,
      color:      "#FFFFFF",
      textAlign:  "center",
      width:      "80px",
      padding:    "4px",
      fontSize:   "8pt",
  };

  google.maps.event.addListener(a, "mouseover",
      function(e) {
        var latLng = e.latLng;
        this.setOptions({fillOpacity: 0.1});
        this.ib.setPosition(latLng);
        this.ib.setContent(a.ibt);
        this.ib.setOptions({boxStyle: boxStyle});
        this.ib.show();
        updateLL(e);
      });

  google.maps.event.addListener(a, "mousemove",
     function(e) {
         var latLng = e.latLng;
         this.ib.setPosition(latLng);
         updateLL(e);
     });

  google.maps.event.addListener(a, "mouseout",
     function() {
        this.setOptions({fillOpacity:0.25});
        a.ib.hide();
     });
  google.maps.event.addListener(a, "click",
     function(e) {
       a.iw.close();
       this.iw.setContent("<div id=myiw>" + a.iwt + srcInfo+ "</div>");
       this.iw.setPosition(e.latLng);
       this.iw.open(map);
     });
}



tt="V305 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.1.1-4<br>Airway Path: Cranbrook, BC VOR to Coner, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ygvmHdr_dUmjvBuxbD??in@_mAme@cxAo[w`ByPyfBsE_jBvCejB~NqgBxY}aBzc@uyAzl@_oAvt@_bA`{@is@v_Aac@tbA_RvcAi@|bAjOf`Ar`@z{@zp@xu@x_AlcvBh{bD??dq@voAhg@|{Ad\\feBhPnkBvClnByF`nBgSfjB__@fcByi@dyAks@llAg{@f}@iaAdl@oeAxYkgApFcgA_KudAa^e`Aip@qy@aaA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=940.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.488412,-116.190982),new google.maps.LatLng(50.232152,-115.145729))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V317 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.1.1-5<br>Airway Path: Port Hardy, BC - VOR to Cormo, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("qoutHlw`hWnuZegjA??lf@uwAfo@elArv@s~@n|@io@v`Aw^bcAeMvcArBjbAhTf_Ane@hz@ru@xs@bdAzk@|pAvb@h{AnXhcBvMnhBlB|jByFhjB_RxfBq\\p`BksZfcjA??af@dxA{n@xlAiv@j_Ag|@dp@s`Ap_@acAbNwcAwAobAsSm_Ayd@qz@cu@et@{cAel@ypAcc@o{A}XqcBcNaiByBmkBnFakBtQqgBj\\gaB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.475931,-127.470225),new google.maps.LatLng(50.750746,-126.875602))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V347 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.1.1-6<br>Airway Path: Port Hardy, BC - VOR to Soint, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("eyvtHdvehWpgNa`xA??dXkjBtc@yaB|m@evA|v@_hA`~@qw@hcAke@pfAcRpgAVjfArS~bAxf@r}@vx@fv@~hAhm@|vAzb@fbBlWnjBdKpoBKbqB}KjoBefNzxwA??cV`eBo`@r}A{i@vsAcr@lgA_y@fy@g~@li@{aAjXqcAtFmcAeImaA{Zs}@wk@cx@m{@_q@qiAqh@ouA__@e_BoTefBmIkjBZukBdK}iB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.539731,-127.47039),new google.maps.LatLng(50.750608,-126.805395))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Abbotsford, BC [TA]<br>Class E<br>1500ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-8"
po.paths=google.maps.geometry.encoding.decodePath("__ljHxekhV?fzK??w|A|j@awAfaAopAvrAsgAxcBIlcL??wlG}n@qh@_fK}|Daau@dxOojAfeL@noE`~T_|L?pqB|}K")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.00185,-122.303569),new google.maps.LatLng(49.188728,-121.944444))
a.airClass="E"
a.altLow="1500AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.1-9 [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-9"
po.paths=google.maps.geometry.encoding.decodePath("qqojHzf~gV~{L?GvPgBdnFArhA@jsA}eI?qqB}}K")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.00185,-122.123333),new google.maps.LatLng(49.073056,-122.056944))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bella Bella (Denny Island), BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-11"
po.paths=google.maps.geometry.encoding.decodePath("giw~HplslWzVc{LxeAmmLprBkrKx{C_kJb`EoxHr~Em|FdvFwxDdfGsoBdnGec@|mG`h@leGzsB`uF|{Dd}Eb~Fr~DnxHjzChiJjqBfoK`eAbiLpVfvLqVdvLaeAbiLkqBfoKkzChiJs~DnxHe}Eb~FauF|{DmeGzsB}mG`h@enGec@efGqoBevFyxDs~Em|Fc`EmxHy{CakJqrBkrKyeAkmL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.889961,-128.470557),new google.maps.LatLng(52.389483,-127.656665))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Castlegar, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-13"
po.paths=google.maps.geometry.encoding.decodePath("uzflHpqfoUmo\\m_J??kaGu`CkmFeiE}rEifG}qDo{HmkC}fJu`BmgKyr@{{KoCqcLbj@g~KfxAelKvcC}mJbkDkdIdmE{pG~hFeuEp}F}rCjjGolA~nGwCrjG|gA~k\\hmJ??bcGbsB|kFtjEjqEbfGlpDpyHdjClcJx_BtbKnr@fvKrCt}Kki@txKawAlgKebCnjJiiDpbIkkE|pGggF|vEg|FfvCoiG|pAwnGzHmmG_s@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=950.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.047237,-118.011937),new google.maps.LatLng(49.696352,-117.191943))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cranbrook, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-15"
po.paths=google.maps.geometry.encoding.decodePath("gnwmHjz_dUoibAjkA??g`GmOkzFixAomFuwCazE_sEq`EuhGwaDawHm~B}|IuwAeyJin@}jKyCyqK|d@mmKrnAa~JbvBcdJfzCg`IbzDusGztEo_FviFieD`xFufBv_Gk_@nibAmj@??xmG`WdfGvfBrvFfkDn_FljFtaElbH~}CnqIruBnvJtiAdpKl[z}KqQb_La`A`tKqlBz|J{uCfzIszDbmHwyE|vFgrF`yDqcGpuBamGpj@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=941.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.361114,-116.179167),new google.maps.LatLng(50.204242,-115.398056))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kamloops, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-17"
po.paths=google.maps.geometry.encoding.decodePath("_uqvHl~m}U`b@iwR`gBucRzhD_}PheFsdOvzGk|LjgIofJziJ_fGfaKw}CxlKaq@hlKtz@t_KffDngJflGldI|iJrwGj|LnbFfaOlfDtvPpeBd{Qna@tmRoa@tmRqeBd{QmfDvvPobFfaOswGj|LmdIziJogJhlGu_KffDilKtz@ylKaq@gaKw}C{iJ_fGkgIqfJwzGi|LieFsdO{hDa}PagBscR")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=938.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.317295,-120.913414),new google.maps.LatLng(51.049927,-119.757141))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.1-18 [TA]<br>Class E<br>1600ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-18"
po.paths=google.maps.geometry.encoding.decodePath("ep{qHd|e{U??`oEfeTzcCxqUxv@xiVwU|mVwcBh~UcoD`{TwuFheS{uH`~PsmJjgNu{KfcKq~LftGmuMf}Cg_NfTxVor]??a`Ioo@swH}}BgiHqbEwtGqcGoyFsaIaqOrlP??{~Hu_RktFasTyeDqlVgrAmoWzAuzWxwA{mWbkDoiVfyFqnTx_Ic_Rv|Jy}NhnLsmK~rM_rGxiN{nCbrNcHvkNb|BbwM`~FrqLf_K??woDoxRyfBu_Tk\\yqTxl@qoTvvBaySd}DaoR|}FwrPhwHefNngJskKdmKyeHlgL}wDhuLeeArvL`m@hkLp_DzsK|lGzpJfrJjcIvlMzlG|yOrnEvwQtjCtdSvbAl_TcElgTunAj|SavCp~RiyEvnQivGhnOqkIv~LiwJhbJqxKn{F_nL`mCiwLbZ{sLexA}cLkjE_eKe~H")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=874.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.64563,-121.068508),new google.maps.LatLng(51.14832,-118.76806))
a.airClass="E"
a.altLow="1600AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.1-19 [TA]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-19"
po.paths=google.maps.geometry.encoding.decodePath("swmtHzntaV??gtK_{@shK{eDotJaaGaxIyvI}pHyiLj{J{nK??nyFraIvtGpcGfiHpbErwH|}B``Ino@ePf|T")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.699436,-121.023983),new google.maps.LatLng(50.993925,-120.759117))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kelowna/Penticton, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-21"
po.paths=google.maps.geometry.encoding.decodePath("y{ipHbhx{U??}rLhMumLuoBm{K__Fq}JkhIutIyhLcbHk}NcgFkcQoeD}xR__Bg|SyUelTbr@mhTpzB{pSj_EmfRt~FkjPrvHk~MreJaeKjjKw`HzcLytDlqL_dAvrLfl@vgLr|C~mKnpGfqdBnqpA??bdF|vEjfEhtGndDjdIv}BvjJfsAnfKhf@tvKyE|zKws@dsKa`Bn_KqiCn`JaoDdwHioEndGmiF`jEs|FniCwhG~|@ocqB~{M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=909.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.213278,-120.062636),new google.maps.LatLng(50.476911,-118.76806))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Naramata, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-23"
po.paths=google.maps.geometry.encoding.decodePath("qghmH~sg|UmrF_dZtbW{bB??jqDsg@zhIxtc@??kvFatCidGalA_iGyFydGrdA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.361292,-120.165336),new google.maps.LatLng(49.566086,-119.977525))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Kelowna, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-25"
po.paths=google.maps.geometry.encoding.decodePath("suptHp{muUrkNmh`@z|h@fyn@??evDdmRgmBrvSado@suu@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=975.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.423703,-119.304197),new google.maps.LatLng(50.717225,-118.853628))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Port Hardy, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-27"
po.paths=google.maps.geometry.encoding.decodePath("mizuHrhkhWxVamLxeAw_LprBseKv{Cq_Jb`EsnHp~EqtFbvF_sDdfGclBdnGeb@|mGtf@neG`pB`uF|uDd}E`vFt~DtnHjzC|}InqBvbK`eAx{KpVphLqVphLaeAx{KoqBvbKkzC~}Iu~DrnHe}E`vFauF|uDoeGbpB}mGrf@enGcb@efGelBcvF_sDq~EotFc`EunHw{Co_JqrBueKyeAw_L")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.430795,-127.760829),new google.maps.LatLng(50.930317,-126.972504))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-29"
po.paths=google.maps.geometry.encoding.decodePath("e_liItmwkVxVsmMzeAi_MprBccLz{CczJd`EmeIt~EyfGdvFi`EffGatBdnGqd@|mG|i@leGzxB|tFxcEd}EvhGp~DjeIhzCfxJjqBr_L`eApzLpVdhMqVdhMaeApzLkqBr_LizCdxJq~DleIe}EthG}tFzcEmeGxxB}mG|i@enGod@gfGctBevFi`Eu~EyfGe`EmeI{{CazJqrBecL{eAg_M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.634278,-123.101287),new google.maps.LatLng(54.1338,-122.253819))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Rupert, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-31"
po.paths=google.maps.geometry.encoding.decodePath("epzkInnd{WzVerMxeAucMtrBggLx{Cy}Jf`EshIr~EkiGfvFebEffGeuBdnGyd@|mGjj@jeG`zB~tFxeEb}EhkGp~DphIhzCz{JjqBtcL~dAx~LpVrlMqVplM_eAz~LkqBrcLizCz{Jq~DrhIc}EhkG_uFveEkeG`zB}mGlj@enG{d@gfGeuBgvFebEs~EkiGg`EqhIy{Cy}JurBigLyeAucM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.03635,-130.872582),new google.maps.LatLng(54.535872,-130.016863))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Princeton, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-33"
po.paths=google.maps.geometry.encoding.decodePath("iomnHbkp~UxVebLxeAiuKnrBy{Jv{CuvI``EagHp~EmnFbvFqnDdfGoiBdnGma@|mGre@leGdmBbuFhqDd}EzoFv~D`gHlzCfuIlqB`yJbeArqKpV~}KqV`~KceApqKmqBbyJmzCfuIw~D`gHe}EzoFcuFhqDmeGdmB}mGpe@enGka@efGoiBcvFqnDq~EmnFa`EagHw{CuvIorB{{JyeAguK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.218295,-120.895709),new google.maps.LatLng(49.717817,-120.127069))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Quesnel, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-35"
po.paths=google.maps.geometry.encoding.decodePath("emddInvvjVzVidMxeAgvLrrBuzKx{CorJd`E{~Hr~EsaGdvFo|DffGyqBdnGyc@zmG|h@leGjvB~tFz_Ed}EjcGr~Dz~HhzCtpJlqBhwK~dAvqLpVd_MqVb_M_eAvqLmqBhwKizCtpJs~Dz~He}EjcG_uFz_EmeGjvB{mG|h@enGyc@gfGyqBevFo|Ds~EsaGe`E{~Hy{CorJsrBuzKyeAgvL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.77635,-122.925259),new google.maps.LatLng(53.275872,-122.094741))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sandspit, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-37"
po.paths=google.maps.geometry.encoding.decodePath("sqqeIv{ocXzVufMxeAuxLrrB}|Kx{CotJd`Es`Ir~E}bGdvFo}DffGmrBdnGad@|mGfi@leG~vB~tF|`Eb}EvdGr~Dr`IhzCtrJlqBpyK~dA`tLpVnaMqVpaM_eA`tLmqBpyKizCtrJs~Dp`Ic}ExdG_uFz`EmeG~vB}mGfi@enG_d@gfGmrBevFo}Ds~E_cGe`Eq`Iy{CotJsrB}|KyeAuxL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.007461,-132.231389),new google.maps.LatLng(53.506983,-131.396389))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Smithers, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-39"
po.paths=google.maps.geometry.encoding.decodePath("wmenIbfbfWzVsvMxeA_hMtrBikLx{CmaKf`EukIt~E{kGfvF_dEffGgvBdnGee@|mGzj@jeGf{B~tFtgE`}EzmGr~DtkIfzCl_KjqBrgL~dA~bMpV|pMqVzpM_eA~bMkqBrgLgzCl_Ks~DtkIa}EzmG_uFtgEkeGf{B}mGzj@enGee@gfGgvBgvF_dEu~E{kGg`EukIy{CmaKurBikLyeA_hM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.419961,-127.424391),new google.maps.LatLng(54.919483,-126.560609))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Strait of Georgia, BC a) [TA]<br>Class E<br>1200ft ASL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-41"
po.paths=google.maps.geometry.encoding.decodePath("mzaiHp`zpV??e}E|`NyjGthLgqHbhJusInvGf{E|lU??qyKh{FynLlvCuxLrf@u}Th_U??gbRqoFuyPc`La}Nc|P|mm@skrA??dxCbsDzhDblCftDleBz{Dx|@v_EbMpmdAaM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=950.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.838953,-124.056233),new google.maps.LatLng(49.574228,-123.432325))
a.airClass="E"
a.altLow="1200"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Strait of Georgia, BC b) [TA]<br>Class E<br>1200ft ASL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-42"
po.paths=google.maps.geometry.encoding.decodePath("oflhH`bsnV{f`@a~AfcL{_WtoK?|qF|~Y")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.728247,-123.146739),new google.maps.LatLng(48.898461,-123.0085))
a.airClass="E"
a.altLow="1200"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Terrace, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-44"
po.paths=google.maps.geometry.encoding.decodePath("msbiIlb|rWcqoAyhP??{{FmrAaoFoaDe|EycFgcE}_H{dDitI}aCg_Kk{As_Ler@otLuGc}Lba@oyL`kAmiLvrBumKfwCyfJrwDcvHxrE}|FdhF{|DdwFwwBh_Gso@z_Gd_@rmoA||Q??xhGl~AvyFlrDrcFfyFvfEjxHvcD~mJ|{BnxKhpAtvLfb@xgMwJfkMqy@|`MofBdiLmpCtdK}uDltI_vEzyGqoFtvE_bGvlCmlGh~@gnGuX")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=936.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.804642,-129.095222),new google.maps.LatLng(54.715844,-128.147905))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Tofino, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-46"
po.paths=google.maps.geometry.encoding.decodePath("{cblHb}s~VzV}~KveAcrKnrByxJv{CatI``EwdHn~EqlFdvFemDbfGwhBdnGca@|mGfe@neGhlB`uFzoDf}E~mFv~DvdHlzCrrIlqBdvJbeAlnKpVzzKqVxzKceAlnKmqBdvJmzCrrIw~DvdHg}E~mFauFzoDoeGhlB}mGfe@enGca@cfGwhBevFemDo~EqlFa`EwdHw{CatIorByxJweAcrK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.832461,-126.153826),new google.maps.LatLng(49.331983,-125.391174))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC a) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-48"
po.paths=google.maps.geometry.encoding.decodePath("{aymHp~stV??__SsbW}vOqp\\ycLyt`@mcH{wc@}yCeve@oKomf@faCa}e@|kGoed@bnKuha@|cO{i]niRsmX|{T_yRd|Vi_LhgEfbp@??oqPpcIcbOn}MogMf{Qc`KvhU_nHpbXgsE~eZsrB`q[sNhb\\tsAdy[vuDbvZnrG`zXrgJ|fVrrLf_SzuNryN{rXdoa@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=913.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.366292,-124.134331),new google.maps.LatLng(49.942329,-122.079358))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC b) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-49"
po.paths=google.maps.geometry.encoding.decodePath("yxygHvjdrV??qqEzoMwqFnjL??oxHebC{bHwyEoeGscH}_FwdJgrDc|K??xqFyeK|gEiyL??vjAfjH|jBjrG`hCtrFdaD|kEruDj_DzdEfnBjnEbz@xqED")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.633894,-123.869467),new google.maps.LatLng(48.909953,-123.510011))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC c) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-50"
po.paths=google.maps.geometry.encoding.decodePath("awxhHb}vrV??qlMpjQ}lO~|LywL{xk@??roJasHpcIavK??`lCdqIfkD|mHpeE|eGf~EjrE")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.792331,-123.987156),new google.maps.LatLng(49.020861,-123.643311))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC d) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-51"
po.paths=google.maps.geometry.encoding.decodePath("{}sfH~{dqVqpOfgR??}wCb|CsfDvuBipD`oAovDpa@nvOqqg@??pd@mcBr\\miBfhNbjG~uBpfF")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.440144,-123.726686),new google.maps.LatLng(48.633894,-123.485819))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC e) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-52"
po.paths=google.maps.geometry.encoding.decodePath("abbgH~iuqV??_nJr|^uyMts[suPptWwbS|_Sy~TlyMihVheHy}VzgBo|V_mBefSsc{@??b|PniHrvQjdCx|Q{SbrQylDdwP}_IrlOqiMdoMkmQ??fbGhzDttGtmB??vqFojLpqE{oM??nvDqa@hpDaoArfDwuB|wCc|CjlAgyA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=939.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.512494,-124.328552),new google.maps.LatLng(49.421408,-123.649761))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Victoria Harbour, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-54"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmA_iLxlN_vBqfFghNcjG??d_@isDnJ_yDoHeyDc]etD_q@{iDkcAuzCwsAagCwaBqoB}lButA}tBkw@uyBoUbaQqaE~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-123.5656),new google.maps.LatLng(48.6412,-123.115139))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Williams Lake, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.1.1-56"
po.paths=google.maps.geometry.encoding.decodePath("ax__Inu}gVxVq{LxeAymLrrByrKv{CkkJd`EwxHr~Eu|FdvF}xDdfGuoBdnGgc@|mGbh@leG~sB~tFb|Dd}Ej~Ft~DxxHhzCriJlqBroK`eApiLpVrvLqVtvLaeAniLmqBroKizCtiJu~DvxHe}Ej~F_uFd|DmeG~sB}mG`h@enGec@efGuoBevF}xDs~Eu|Fe`EyxHw{CkkJsrByrKyeAymL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.933295,-122.461509),new google.maps.LatLng(52.432817,-121.646824))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bella Bella, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-4"
po.paths=google.maps.geometry.encoding.decodePath("sv``I`e}lWzf@wfVluBooUh`EyaTbeGg_RxaI_jOltJydLr{KcsHbvLkxDbcMux@jbMffA|sLjdEjxK|{HnpJpiLr}H~iObaGnzQ`}D~xShsBncUdf@dyUef@byUisBpcUa}D|xScaGpzQs}H|iOopJpiLkxK|{H}sLjdEkbMffAccMsx@cvLmxDs{KcsHmtJydLyaI}iOceGg_Ri`E{aTmuBooU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.769009,-128.792537),new google.maps.LatLng(52.601546,-127.434685))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Castlegar, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-6"
po.paths=google.maps.geometry.encoding.decodePath("y}ioHvzrlUzf@y{TjuB{eTb`E_{R|dGm|PpaIelNhtJ_mKn{K}aH~uLknD`cM_v@lbMraA`tLpxDpxKpiHrpJ`qKx}HdlNhaGjxPd}DjsRlsBt{Sdf@dpTef@bpTmsBt{Se}DjsRiaGjxPy}HdlNspJ`qKqxKpiHatLpxDmbMraAacM_v@_vLknDo{K}aHitJ_mKqaIelN}dGm|Pc`E_{RkuB{eT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.030954,-118.215251),new google.maps.LatLng(49.863491,-116.934749))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cranbrook, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-8"
po.paths=google.maps.geometry.encoding.decodePath("{ndnHvcreUcft@znA??wmLuWedL}pC{nK}{FmnJi`JucIi{L}oG_jOotEijQ_sCczRmmAexSoEocTl`As{StfC_aS~hEgtQreGyvO~zHojMjgJsqJxiKwnGdaLudD`mLmm@jcs@_`@??dcMrh@nvL|jDr|Kh}GfvJtfKrdI|cNfiGlrP`fE~oRx|BzzS|o@|qTm\\ntT}iBnbTgtDn|ReyFlcQuvH~xN{jJb_LctKpxHiqLbhEqaMrfA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=917.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.266329,-116.437222),new google.maps.LatLng(50.370299,-115.141389))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="East Vancouver, BC [CAE]<br>Class E<br>9000ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.1.2-10"
po.paths=google.maps.geometry.encoding.decodePath("_sdpHn}zcVhgbE?yJzvfC??aeWcqFevWkQylWjyDcmVhbKqwTjaQymR|pVwqOhk[}eLpk_@umHrmb@ilDdnd@{e@|je@x_B`ce@`gFfuc@cfTz{Jc@e~|L")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=893.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.000278,-123.668114),new google.maps.LatLng(50.0,-121.384722))
a.airClass="E"
a.altLow="9000"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Vancouver, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-12"
po.paths=google.maps.geometry.encoding.decodePath("wjooHx_mqV}ltBb|aA~mtBl_YdvYhkn@roZcjd@??mjPyhSi~M_oWulKyvZmoHcl]")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=940.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.613267,-124.325556),new google.maps.LatLng(50.492439,-123.607175))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Penticton, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-14"
po.paths=google.maps.geometry.encoding.decodePath("g{qoHrs~xUzf@i|ThuBofTb`Eo{R|dG{|PraIslNhtJimKl{KebH~uLqnDbcM_v@jbMtaAbtLvxDnxKviHtpJlqKv}HplNhaGzxPf}DzsRjsBf|Sff@tpTgf@tpTksBf|Sg}D|sRiaGxxPw}HrlNupJjqKoxKxiHctLvxDkbMtaAccMav@_vLonDm{KebHitJimKsaIslN}dG{|Pc`Eo{RiuBofT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.071509,-120.24217),new google.maps.LatLng(49.904046,-118.960607))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Pitt Meadows, BC a) [CAE]<br>Class E<br>1500ft ASL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-16"
po.paths=google.maps.geometry.encoding.decodePath("mvajHhezlVgdV??|nEedY?CemX??u\\g`A}TcgAyLukAkDenAhBknAzJolA`SkhAvZgbAta@gz@pg@up@tl@qd@toU_mN??bh@eW`j@cM~j@iBnkLATpcg@xzD?MrqQ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002086,-122.888681),new google.maps.LatLng(49.266054,-122.554747))
a.airClass="E"
a.altLow="1500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Pitt Meadows, BC b) [CAE]<br>Class E<br>2000ft ASL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-17"
po.paths=google.maps.geometry.encoding.decodePath("orgjHdn_kVokL???_k@hBaj@bMch@dWuoU~lN??ul@pd@qg@tp@ua@fz@wZfbAaSjhA{JnlAiBjnAjDdnAxLtkA|TbgAt\\f`Ad@tys@_rJA@sw}Avt^wko@??vlG|n@CdcJ??bFjaC~Sz}Bja@xvBvm@plB|x@j_BnbAnoAfjAl}@|oAvi@nsAvRn@hhL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=967.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.032247,-123.028928),new google.maps.LatLng(49.313892,-122.295897))
a.airClass="E"
a.altLow="2000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Port Hardy, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-19"
po.paths=google.maps.geometry.encoding.decodePath("up{vH|_khWzf@inUjuB{wTf`EykS~dGmkQtaIcyNjtJiwKn{KkiH`vLurD`cMcw@lbMpcA~sLt}DnxKnqHrpJr{Kr}HbyNfaGbgQd}DrcSjsB|lTdf@zaUef@zaUksB|lTe}DtcSgaGbgQs}H`yNspJt{KoxKnqH_tLr}DmbMrcAacMcw@avLwrDo{KkiHktJiwKuaIayN_eGmkQg`EykSkuB{wT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.267898,-128.022255),new google.maps.LatLng(51.100435,-126.7083))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC a) [CAE]<br>Class E<br>5200ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-21"
po.paths=google.maps.geometry.encoding.decodePath("}bygIt`eiVzkKahqB??aeR|Z}wQf~EeyPnhKwiOlhPekMdyTa_KbvXugHh{[ogEne^kaBdr_@tE|_`@pnBdn_@`tEt}]hsH|o[liKngXzsMxgTtpOztO~}PjsJrzQdhE~eRjXv_R{tCdhQw~Hh`Po~M~hN{oRbdLeoVrsIayYtyF_k\\zxCyb^xs@i__@}t@s~^guoAqtC??mqCioJquDs~HsrEyfGwiFkgEgzFcbC}cGmp@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.245476,-123.639677),new google.maps.LatLng(54.409416,-121.670508))
a.airClass="E"
a.altLow="5200"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC b) [CAE]<br>Class E<br>7000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-22"
po.paths=google.maps.geometry.encoding.decodePath("}bygIt`eiVzkKahqB??xmRfoBzvQptHtnPx{MhvN`tRjoLjyVz{IdhZn~Fp}\\nuCnx^guoAqtC??mqCioJquDs~HsrEyfGwiFkgEgzFcbC}cGmp@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=953.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.254106,-122.492797),new google.maps.LatLng(53.873272,-121.670508))
a.airClass="E"
a.altLow="7000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC c) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.1.2-23"
po.paths=google.maps.geometry.encoding.decodePath("ansmIn{rkVb`Bmxy@j_Hc{w@buMybt@r{Ritn@tmWcvg@tf[sp_@dc^amVn``@quLb}`@itBtx`@pjEps_@jaOjo]leXlnZrn`@xsVdvg@jcRjvm@faMpjr@lrGdou@t{A`bw@u{Abbw@mrGdou@gaMnjr@kcRjvm@ysVfvg@mnZrn`@ko]jeXqs_@laOux`@njEc}`@itBo``@ouLec^amVuf[sp_@umWevg@s{Rgtn@cuM{bt@k_Hc{w@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.829289,-124.346548),new google.maps.LatLng(54.827377,-120.961785))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Rupert, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-25"
po.paths=google.maps.geometry.encoding.decodePath("orvlIfl`{W|f@glWpuB{sVj`EwcUheGu}R|aI_dPrtJqyLv{KabIdvLcaEbcM_{@jbMjjAzsLtnEfxK`lIjpJ|~Lj}H~cP~`GhxR||DvyTfsBhfVbf@z|Vcf@||VgsBhfV}|DtyT_aGjxRk}H~cPkpJ|~LgxK`lI{sLtnEkbMhjAccM}z@evLcaEw{KabIstJsyL}aI}cPieGu}Rk`EycUquBysV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.847065,-131.136579),new google.maps.LatLng(54.679602,-129.711199))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Princeton, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-27"
po.paths=google.maps.geometry.encoding.decodePath("uhnoHblq~Uzf@a|TjuBgfTb`Eg{R|dGu|PpaImlNhtJemKn{KabH|uLmnDbcM_v@lbMraA`tLtxDnxKtiHtpJfqKx}HjlNhaGrxPd}DtsRlsB~{Sdf@lpTef@lpTmsB~{Se}DtsRiaGrxPy}HllNupJfqKoxKriHatLtxDmbMraAccM}u@}uLonDo{KabHitJemKqaImlN}dGs|Pc`Ei{RkuBgfT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.053176,-121.157208),new google.maps.LatLng(49.885713,-119.876125))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Quesnel, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-29"
po.paths=google.maps.geometry.encoding.decodePath("cdxdIdarjV|f@gtVluBo|Uj`E_nTbeGejRzaIgsOptJilLr{KmxHbvLq{DbcMoy@jbMtgA|sL`hEjxKvaIlpJfqLn}HhsO`aGdeR`}DvdTfsB~oUdf@~eVef@|eVgsB`pUa}DtdTaaGfeRo}HfsOmpJfqLkxKvaI}sL`hEkbMtgAccMoy@cvLo{Ds{KoxHqtJglL{aIisOceGejRk`E_nTmuBo|U")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.544287,-123.177147),new google.maps.LatLng(53.376824,-121.795076))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sandspit, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-31"
po.paths=google.maps.geometry.encoding.decodePath("acqfIjpncX|f@myVnuBqaVj`EwrTdeGknRzaI}vOptJeoLt{KqzHbvLw|DbcMyy@jbMhhA|sLliEhxK~cIjpJftLn}HzvO`aGjiR~|DhiThsBztUbf@|jVcf@|jVisBztU_}DfiTaaGjiRo}H|vOkpJftLixK|cI}sLniEkbMhhAccMyy@cvLw|Du{KqzHqtJeoL{aI}vOeeGknRk`EwrTouBqaV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.835954,-132.502682),new google.maps.LatLng(53.668491,-131.111207))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Smithers, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-33"
po.paths=google.maps.geometry.encoding.decodePath("m~eoIbfbfW|f@gtWpuBo{Vl`E{jUheGcdS~aImiPttJ_~Lv{KeeIdvL_cEdcMm{@hbMfkAzsLxpEfxKnoIhpJlcMj}HniP|`Gr~Rz|Dr`UfsBrmVbf@ldWcf@jdWgsBrmV{|Dr`U}`Gr~Rk}HniPipJlcMgxKnoI{sLxpEibMfkAecMm{@evL_cEw{KeeIutJ_~L_bImiPieGcdSm`E{jUquBo{V")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.253454,-127.712302),new google.maps.LatLng(55.085991,-126.272698))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="South Vancouver Island, BC a) [CAE]<br>Class E<br>1600ft AGL to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.1.2-35"
po.paths=google.maps.geometry.encoding.decodePath("c}weHhb|sVA?cle@xtjCyix@vm}A??}bJwuJ_iKyqGmaLckDknLe_AmoL|l@}aLjeD??xo@ggWoVgjWs|A{}V}`DccV{eF{vTeuKogd@??xhUbmBjkUynA`{TktFlzSesKfjRwgPrfPcwTzljA?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=923.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.296667,-125.210869),new google.maps.LatLng(49.31785,-124.012056))
a.airClass="E"
a.altLow="1600AGL"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="South Vancouver Island, BC b) [CAE]<br>Class E<br>700ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-36"
po.paths=google.maps.geometry.encoding.decodePath("c}weHhb|sV{ljA???`gLcdTfcJexVr{G_yXdmZyz^??fz@ymA`q@g{A~f@ueBloKu}d@trJxdx@o_Bp|YeaJd``A")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.224553,-124.012056),new google.maps.LatLng(48.682881,-123.248444))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Terrace, BC [CAE]<br>Class E<br>6000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-38"
po.paths=google.maps.geometry.encoding.decodePath("}jgkIznbtW_vr@bdp@sc{@gb~D~|VqgUrw[fr{A??~sEnhQlhGhdOlsHvvL~vI|~IfrJ~~FzeK|kC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=949.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.437756,-129.539364),new google.maps.LatLng(55.010494,-128.446917))
a.airClass="E"
a.altLow="6000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-39 [CAE]<br>Class E<br>8000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-39"
po.paths=google.maps.geometry.encoding.decodePath("}a{lI~ssuW_bb@~w`@cl{@su~Dnjb@sd`@rc{@fb~D")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=951.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.702558,-129.712322),new google.maps.LatLng(55.191536,-128.560922))
a.airClass="E"
a.altLow="8000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-41 [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-41<br>Excluding the airspace overlying the Comox, BC MTCA"
po.paths=google.maps.geometry.encoding.decodePath("ax{lH~qf~Vzf@_vThuBk`Tb`EyuR|dGwwPpaIehNftJyiKl{Ku_H~uL_mD`cMsu@lbM|`AbtL`wDnxK`gHvpJxmKv}HdhNjaGxsPf}DjnRlsBjvSdf@rjTef@tjTmsBhvSg}DlnRkaGvsPw}HfhNwpJvmKoxK`gHctL`wDmbM|`AacMqu@_vLamDm{Ks_HgtJ{iKqaIehN}dGwwPc`EyuRiuBk`T")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.630676,-126.339249),new google.maps.LatLng(49.463213,-125.069084))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Williams Lake, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-43"
po.paths=google.maps.geometry.encoding.decodePath("saw_IbwmgV|f@}eVluBunUf`EaaTbeGq~QxaIkiOltJkdLr{KwrHbvLgxDbcMsx@jbMdfA|sLbdElxKr{HnpJ`iLp}HjiObaGzyQ`}DfxShsBvbUdf@jxUef@hxUisBvbUa}DfxScaGzyQq}HjiOopJ`iLmxKr{H}sLbdEkbMdfAccMsx@cvLgxDs{KwrHmtJkdLyaIkiOceGq~Qg`EaaTmuBunU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.719565,-122.650672),new google.maps.LatLng(52.552102,-121.294328))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-44 [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-44"
po.paths=google.maps.geometry.encoding.decodePath("oxhiI|mrtWmq}@a~N??kbLs{CakK}}GejJqkKa_IonNckGadQuoEqiSknCc}T_iA}|UuAghVxcAo~UjiCc`U~jEanS|fGyiQp{HiuNfgJgsK`iKmfHz_L{qDjkLay@viLblAbk}@h`Q??bwL`tDl{K|~HrtJjrLtbIjxO`gG~mRtcEzpTlzBj_Vnm@zwVw^`zValBveVcvDh{T{zFd|RaxH|iP_lJxfM}tKtuI{qLxyEqaMpvAmbMk{@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=913.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.637894,-129.379093),new google.maps.LatLng(54.789045,-127.868468))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-45 [CAE]<br>Class E<br>6000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-45"
po.paths=google.maps.geometry.encoding.decodePath("ij~fHbxgxVyix@vm}A??lcIbnMvgGx~O`gElzQr`CvdSnv@l|SgS~`Tk~AbrSwfDlpRkjFt|PggHjxNo{IbeLueKneIodL~{EewLrkBy|LmFmuLwzBeaL}kFk`KovIgtIewL_{GgnOybkDvydG??s}@~pS}`CtxRu`EvoQi{FjwOkoHvpMm{Ir}Jk~Jf`HcwKvzDceLzoAygLq[e_LyhCikKwrFmiJe~I}dbKhknT??pwE~rRnqCnhTfkA~fU~B~qUocAbiU_jCvlTwlEn}RyiGp|Pq_IrkNklJtlKeoKlbHwfLnoDmrL`w@}qLoaAceLwzDklKioHehJs{KavH_bOq}cDdzcEjhx@d`mC`s@lezG`dTpljB~|hQomvLtygOo`bb@up_@_}hQth@{gt@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=443.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.333333,-136.0),new google.maps.LatLng(54.41,-124.727222))
a.airClass="E"
a.altLow="6000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-46 [CAE]<br>Class E<br>7000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-46"
po.paths=google.maps.geometry.encoding.decodePath("qfilItc_`W??ksQkm@coQ~mCqyPbuHktOztMs`NvhRq_LhlV{rIt{Yw|Fjs\\m_Dzp^w}@|q_@zc@zu_@hfCf|^xjFv`]`fvAjf}G??urDy|TefBwjVuZq~Vto@k{VnzBkaVvaEgqT`cGulRt|H{uOzlJsoLhrK{|HxkLoaEvxL}`ApwLblAtoa@r_Ia|Z{omC??u_Dh`U{eFreS_bHpzPyuI`_N_`KnuJe_Lv`GorLddCgyL~BgsL{|Bq`Ly{FwaK}sJowIsaNccHsaQefFwpSibDolUsyAcsVgNgcWr{@i|VteCs~UvkEckTtkGmcRtcI}iO`rJiaLtuK{lHfmLipDdxLi_@p`Ii_v@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.129411,-128.920886),new google.maps.LatLng(55.252321,-125.986296))
a.airClass="E"
a.altLow="7000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-47 [CAE]<br>Class E<br>8000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-47"
po.paths=google.maps.geometry.encoding.decodePath("_sdpHn}zcV?ndwBcbhCiwcCi}yCb~TbmAmg_D`vtAsx}CfqGyey@eDwekEz_rCcmAlzw@ypo@jbjC??pqhHspf@pUgjfBxi}@t@pdaEitCvhcA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=801.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.244722,-122.0),new google.maps.LatLng(51.495278,-118.194444))
a.airClass="E"
a.altLow="8000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-48 [CAE]<br>Class E<br>9000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-48"
po.paths=google.maps.geometry.encoding.decodePath("ujajHn}zcVigbE?htCwhcAu@qdaEfjfByi}@rpf@qU?qqhHnxn@?KbqAApmC@xkB@zrFCznF@jdIBvlACfnEEpzD@dwA@fgD?x}@?`mC@~wCA|gF?rsH?hnD@tqCApnBAjzA?jpA?bmA?nuAApcD@daB?raE@n|GElwBBlcA?liEAvyA@rhB@tjG?|{DAzhDAzgD@xjD?prDIj_DHx~F?bbGAf}G?tzD?b~F?d`C@v}C?ntEA|kGAfoB?deJ?|vI?|qB?pbFAf`A?xzDFtbDF|fER~mINtbF^riJB`q@TjzEN~hCDtgCObwEU`_Di@pgJYjvFYvjG]rnJQpeGG`iCOtxIE~dDG~gICnjG?tfD?lo@\\dhFf@tmHV~tFEr~ASv`KGf|FGrmJA`vH@|pGBp`HBdtBHbdG?|nEm@zxJYntFg@|bJYz`HAzgFvBtrGF`c@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=862.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.999456,-121.384722),new google.maps.LatLng(50.0,-118.194444))
a.airClass="E"
a.altLow="9000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-49 [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.1.2-49"
po.paths=google.maps.geometry.encoding.decodePath("ebhvHdz~qUg_A}}vIpvdCwavB??cdDgwRi|AwzSeSajTnt@oeTr|BomSbaEwbRb`GkfPrwHkzMhfJcaKtjKe}GvcLmqDbqLau@riyAw{@pp`BzveA?jIBjkBYhoJWn}I?xeCKvhFIz~EGpmFEpiECtdK?fdE@zpGFx{ELtwJFtyDR|aHJzxDRbhGSriEa@vsCTrzF\\hsHLtcCd@xoH^jhGt@tuJ@`cNAp~D?juG@pnHBtgDDnmDFpnEJ~wFVbwJPrzFb@ddKVjjF^lqGV|iNiAxqH}@xvG{@hxGKn{@cAjeI?xgBIriCS|mF]nnNQt_MExfH?||@D|yBFzzFLjzFLl~EF`jJLhfKFfsFNboJL`dHB~qCHfkENdnL@pv@JndC{{yD?mzw@xpo@{_rCbmA")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=824.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.998939,-118.455556),new google.maps.LatLng(51.011111,-115.1375))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-50 [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.1.2-50"
po.paths=google.maps.geometry.encoding.decodePath("imxiIh}yzV??~`YbfOj`WvtVdsTlq\\~uQtva@`kNlaf@ztJ~ni@dvFd}k@xqBtjm@aZjum@e}QbwtJ??}A}pUsiAifUemCshT}lE_yRigGoxPszHshNqeJqkK}fKmcHe_LyeDmzZu_Ga|Z{omC??|xA_nSb[m~Su]c~S{wA}nSapCcqRaeEkeQqyFcfOve`@ijgG")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=864.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.537893,-128.719381),new google.maps.LatLng(54.367533,-125.147894))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.1.2-52 [CAE]<br>Class D<br>6000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.1.2-52"
po.paths=google.maps.geometry.encoding.decodePath("qcxkIhiimX`eUon[jhx@d`mC`s@lezGadT_t`Bm}z@cbjH")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=920.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.108333,-135.45),new google.maps.LatLng(54.523611,-133.272778))
a.airClass="D"
a.altLow="6000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Comox, BC d) [TCA]<br>Class E<br>700ft AGL to FL230"
mt="Terminal Control Areas<br>CDAH section: 3.1.3-5"
po.paths=google.maps.geometry.encoding.decodePath("kurkH|v{vVk|_@cl`B??gzJmzGoct@hzfAevYikn@??yuQb`HghP`mMulN`|Q_bLhyUsjIx`Y_iF~n[e`Cja]oSdv]|wArl]pbEde\\dgHbaZvbKtbWlrMbmSzsOfdOfeQnlJ`eRpjElrRpc@dmRmaCnuQucHflPi|LvrNegQrjLo`UdvIydXxwFsqZhrC{d\\nh@i}\\k`Agz\\oiDw{[kqGg_Z")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=898.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.171221,-125.859036),new google.maps.LatLng(50.335802,-123.957669))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="23000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Comox, BC e) [TCA]<br>Class E<br>2200ft AGL to FL230"
mt="Terminal Control Areas<br>CDAH section: 3.1.3-6"
po.paths=google.maps.geometry.encoding.decodePath("g{gvH~myrVppwEjno@??shQjwGo}Op}LeeNzfQy~Kv_UilIrdXapFfrZwlC`f\\ge@l~\\jaAtz\\~gDvz[tiGx_ZrcJrkW~rL`aTxuNhcP|iPlvKdnQn~FlaRf`BxaRamAc{cGve~@de@migM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=880.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.670133,-126.171111),new google.maps.LatLng(51.005833,-123.834722))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="23000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Comox, BC f) [TCA]<br>Class A<br>FL180 to FL230"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-7"
po.paths=google.maps.geometry.encoding.decodePath("qwpmHxf{~VhaOzgbAjbQn~_BpdKen\\xxQ?stWiipAmyOmneA??qkJj}HmgKdaF")
po.strokeColor="#B8B8B8"
po.fillColor="#B8B8B8"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.237047,-126.650911),new google.maps.LatLng(49.570658,-125.722767))
a.airClass="A"
a.altLow="18000"
a.altHigh="23000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC a) [TCA]<br>Class D<br>1200ft to 2500ft"
mt="Terminal Control Areas<br>CDAH section: 3.1.3-9"
po.paths=google.maps.geometry.encoding.decodePath("guehHhfjoV??akBbwA{~AlsBqpAdjC}_Ab}Cmm@lkDyYztDazFor@??ecBbsJg}Bl`JqmdA`M??trEcThmEclA|bEm|BtsDoiD~_DirElhC_vF|lB_tG?ay@@CpfS}fd@zf`@`~AfpEfcV")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.694767,-123.512267),new google.maps.LatLng(49.194564,-123.131528))
a.airClass="D"
a.altLow="1200"
a.altHigh="2500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC b) [TCA]<br>Class D<br>1500ft to 2500ft"
mt="Terminal Control Areas<br>CDAH section: 3.1.3-10"
po.paths=google.maps.geometry.encoding.decodePath("_vajHtrglVyzD?Uocg@vzD?AdZBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?xS")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002086,-122.760275),new google.maps.LatLng(49.032247,-122.55475))
a.airClass="D"
a.altLow="1500"
a.altHigh="2500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC c) [TCA]<br>Class C<br>1200ft to 2500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-11"
po.paths=google.maps.geometry.encoding.decodePath("c{xjHlf_nV??qyAicBccBokAqiBcs@qmBsY{nBKumBxXuiBpr@sbBzlAa@okZddY?Pdp]")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.120667,-123.045036),new google.maps.LatLng(49.254708,-122.888681))
a.airClass="C"
a.altLow="1200"
a.altHigh="2500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC d) [TCA]<br>Class C<br>2500ft to 4500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-12<br>Note: The Vancouver TCA also contains that portion of airspace, south of the CAN/ USA boundary, within 16NM of the Vancouver VOR that is defined in U.S. publications."
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmA_iLxlN_vBqfFghNcjG??os@xjDgfAtzC{vA~eCydBhmByoBjqAowB|r@s{B~R_|BsKuxB{k@{qByjAqgBsgBezAiaC_jAcwCww@mhDuc@utDqNq{DzD{|DazFor@??qgD|_Q}aFfpOcvGlsMmcIrjKikJpnHf{E|lU??qyKh{FynLlvCuxLrf@u}Th_U??gbRqoFuyPc`La}Nc|P|mm@skrA??w`DwvF_aC}_Hk~Ae~HreKwyEtEyuf@|`C{nD~qJ@e@uys@??u\\g`A}TcgAyLukAkDenAhBknAzJolA`SkhAvZgbAta@gz@pg@up@tl@qd@toU_mN??bh@eW`j@cM~j@iBfgR?AdZBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=902.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.056233),new google.maps.LatLng(49.574228,-122.55475))
a.airClass="C"
a.altLow="2500"
a.altHigh="4500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC e) [TCA]<br>Class C<br>5500ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-13"
po.paths=google.maps.geometry.encoding.decodePath("govjHflniV??wlG}n@qh@_fKo~Aq_ZalGwpQ{yAwoWbyW?xmLptLieLGenJxr@rjIlkv@IlcL")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.035217,-122.303569),new google.maps.LatLng(49.231208,-121.874444))
a.airClass="C"
a.altLow="5500"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC f) [TCA]<br>Class C<br>4000ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-14"
po.paths=google.maps.geometry.encoding.decodePath("__ljH`axhV??w|A|j@awAfaAopAvrAsgAxcBsjImkv@dnJyr@xxDh~TpqB|}K?fzK")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.054722,-122.236292),new google.maps.LatLng(49.161536,-121.944419))
a.airClass="C"
a.altLow="4000"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC g) [TCA]<br>Class C<br>3500ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-15"
po.paths=google.maps.geometry.encoding.decodePath("ikujHvghgVvxDb~T~{L?ooEa~TgeLA")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.00185,-122.056944),new google.maps.LatLng(49.102778,-121.944444))
a.airClass="C"
a.altLow="3500"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC h) [TCA]<br>Class C<br>2700ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-16"
po.paths=google.maps.geometry.encoding.decodePath("qqojHzf~gV~{L?GvPgBdnFArhA@jsA}eI?qqB}}K")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.00185,-122.123333),new google.maps.LatLng(49.073056,-122.056944))
a.airClass="C"
a.altLow="2700"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC i) [TCA]<br>Class C<br>4500ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-17"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmA_iLxlN_vBqfFghNcjG??os@xjDgfAtzC{vA~eCydBhmByoBjqAowB|r@s{B~R_|BsKuxB{k@{qByjAqgBsgBezAiaC_jAcwCww@mhDuc@utDqNq{DzD{|DazFor@??qgD|_Q}aFfpOcvGlsMmcIrjKikJpnHxwLzxk@??ghP|gIcfQfoDcqQh\\klQgvBwwPmhG}sOitKw|Mq~O|mm@skrA??w`DwvF_aC}_Hk~Ae~HreKwyEtEyuf@~`C{nD?sw}Avt^wko@??vlG|n@HmcL??rgAycBnpAwrA`wAgaAv|A}j@?gzK|eI?A|VAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcB@hwBBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=891.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.07267),new google.maps.LatLng(49.574228,-122.123333))
a.airClass="C"
a.altLow="4500"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC j) [TCA]<br>Class C<br>700ft AGL to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-18"
po.paths=google.maps.geometry.encoding.decodePath("iaigHdx{pVovOpqg@??yqEEknEcz@{dEgnBsuDk_DeaD}kEahCurF}jBkrGwjAgjH??f}Bm`JdcBcsJ`zFnr@??}DfzD|M`yDlb@prD`v@xfD~gAfvCvwAfaCbeBphBjoBzlAlvB|n@`zBpOdzBaNvvBkm@xoBgkAteB}fBpxAs_CjhAeuC")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.548219,-123.726686),new google.maps.LatLng(48.838953,-123.393925))
a.airClass="C"
a.altLow="700AGL"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC k) [TCA]<br>Class C<br>3000ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-19"
po.paths=google.maps.geometry.encoding.decodePath("{}sfH~{dqVecM~lO??qfDf}DaxDdsCyeEnbBinExi@nvOqqg@??pd@mcBr\\miBfhNbjG~uBpfF")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.440144,-123.726686),new google.maps.LatLng(48.633894,-123.485819))
a.airClass="C"
a.altLow="3000"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC l) [TCA]<br>Class C<br>3500ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-20"
po.paths=google.maps.geometry.encoding.decodePath("yxygHvjdrV??qqEzoMwqFnjL??oxHebC{bHwyEoeGscH}_FwdJgrDc|K??xqFyeK|gEiyL??vjAfjH|jBjrG`hCtrFdaD|kEruDj_DzdEfnBjnEbz@xqED")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.633894,-123.869467),new google.maps.LatLng(48.909953,-123.510011))
a.airClass="C"
a.altLow="3500"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC m) [TCA]<br>Class C<br>5500ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-21"
po.paths=google.maps.geometry.encoding.decodePath("awxhHb}vrV??qlMpjQ}lO~|LywL{xk@??roJasHpcIavK??`lCdqIfkD|mHpeE|eGf~EjrE")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.792331,-123.987156),new google.maps.LatLng(49.020861,-123.643311))
a.airClass="C"
a.altLow="5500"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC n) [TCA]<br>Class C<br>3200ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-22"
po.paths=google.maps.geometry.encoding.decodePath("}~blH~zjpVanGhbN??ieEkjHmaDkzIw{Bq}JarAowKhtKeoC??l~@~vHh~AfcH`{BnhGnvC|cF")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.336317,-123.509653),new google.maps.LatLng(49.47065,-123.256531))
a.airClass="C"
a.altLow="3200"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC o) [TCA]<br>Class C<br>5000ft to 6500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-23"
po.paths=google.maps.geometry.encoding.decodePath("_nklHh~ypVauKnuU??skG_tKa{EiuMchDgeOqoBshPz~QcxE??`rAnwKv{Bp}JlaDjzIheEjjH")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.379689,-123.6259),new google.maps.LatLng(49.567917,-123.279608))
a.airClass="C"
a.altLow="5000"
a.altHigh="6500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC p) [TCA]<br>Class C<br>6500ft to 8500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-24"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmAemZxz^??qfDf}DaxDdsCyeEnbBinExi@??qqEzoMwqFnjL??utGumBgbGizD??kmMlkQmjOrhMwtPb`IwoQ~mDqzQjVwtQy`Cm~PgwGgxOyfL}bNgkPe}KidTriE}`~@p}o@cnsEqkK_baB??h_VomFboVo_@|gd@f}d@uBryFYzv@yAtbEgBdnFArhA?hkBAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcB@hwBBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.072278),new google.maps.LatLng(49.649369,-121.78515))
a.airClass="C"
a.altLow="6500"
a.altHigh="8500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC q) [TCA]<br>Class C<br>8500ft to 9500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-25"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmAemZxz^??qfDf}DaxDdsCyeEnbBinExi@??qqEzoMwqFnjL??utGumBgbGizD??m}Md|Qu}OxpMyiQp~H{dRfbDcnRd@ceRy`DajQa`Iq}OuvM}`N}_R}uKuwUs~H}yXu}Emc[avB}q\\yJuc]x~Aix\\pgE_p[djHelYvcKcoVvqMw{RrqO}uNxdQmrIqkK_baB??h_VomFboVo_@|gd@f}d@uBryFYzv@yAtbEgBdnFArhA?hkBAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcB@hwBBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.070586),new google.maps.LatLng(49.776455,-121.78515))
a.airClass="C"
a.altLow="8500"
a.altHigh="9500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC r) [TCA]<br>Class C<br>9500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-26"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmAemZxz^??_nJr|^uyMts[suPptWwbS|_Sy~TlyMihVheHy}VzgBo|V_mBkeSea{@??o|J}zG{sXnpa@??c}RufWyvOsp\\scL{t`@kcH{wc@yyCcve@mKmmf@haC}|e@~kGked@fnKqha@zcOyi]niRmmX|{T}xRr{VabL{eEw~o@??`aVkjFjpVw_@|gd@f}d@uBryFYzv@yAtbEgBdnFArhA?hkBAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcB@hwBBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.328552),new google.maps.LatLng(49.942323,-121.78515))
a.airClass="C"
a.altLow="9500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC s) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.1.3-27"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmAemZxz^??_nJr|^uyMts[suPptWwbS|_Sy~TlyMihVheHy}VzgBo|V_mBkeSea{@??o|J}zG{sXnpa@??c}RufWyvOsp\\scL{t`@kcH{wc@yyCcve@mKmmf@haC}|e@~kGked@fnKqha@zcOyi]niRmmX|{T}xRr{VabL{eEw~o@??`aVkjFjpVw_@|gd@f}d@uBryFYzv@yAtbEgBdnFArhA?hkBAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcB@hwBBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?rpu@Bv{C?jvA@d_BCbfl@zj`@}g|@toK?|gMdtq@`k[{pH~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-124.328552),new google.maps.LatLng(49.942323,-121.78515))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Abbotsford, BC [CZ]<br>Class C<br>SFC to 4500ft (4300ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-3<br>Note: The Abbotsford CZ also contains a portion south of the Can/USA boundary that is defined in U.S. publications."
po.paths=google.maps.geometry.encoding.decodePath("wvajHdn_kVwzD?o@ihL??osAwR}oAwi@gjAm}@obAooA}x@k_Bwm@qlBka@yvB_T{}BcFkaCLsgW??rgAycBnpAwrA`wAgaAv|A}j@?gzK|eI?A|VAfbC?frA?`wC?f_B?xyA?vlBBrrBBbqB@lqCBv_D?dwBB`kCBvhC@phC?lfC@lgADbmFBj`C@lpB?`u@BpcBBb|A")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.0022,-122.55475),new google.maps.LatLng(49.108542,-122.123333))
a.airClass="C"
a.altLow="0"
a.altHigh="4500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Boundary Bay, BC a) [CZ]<br>Class C<br>SFC to 1000ft (1000ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-5"
po.paths=google.maps.geometry.encoding.decodePath("_vajHn~fnV{rQ???}`AgdCinAyqBO{|OfdV?J|eNBv{C?jvACzy@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002064,-123.084722),new google.maps.LatLng(49.120744,-122.958333))
a.airClass="C"
a.altLow="0"
a.altHigh="1000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Boundary Bay, BC b) [CZ]<br>Class C<br>1000ft (1000ft AAE) to 2500ft (2500ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-6"
po.paths=google.maps.geometry.encoding.decodePath("_vajHn~fnV{rQ???}`AgdCinAyqBQc`d@fdV?Ldib@Bv{C?jvACzy@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=989.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002064,-123.084722),new google.maps.LatLng(49.120753,-122.855414))
a.airClass="C"
a.altLow="1000"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Langley, BC [CZ]<br>Class C<br>SFC to 1900ft (1900ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-8"
po.paths=google.maps.geometry.encoding.decodePath("kw~jHtinkVvC{qA`MkoA`VkjAf^ccAne@wy@pk@un@jp@ab@ps@mTfu@eFdu@jFps@pThp@db@pk@tn@le@xy@d^~bA|UhjAbMdoAtCvqAuCtqAcMfoA}UfjAe^`cAme@xy@qk@tn@ip@db@qs@pTeu@hFgu@cFqs@mTkp@cb@qk@sn@oe@wy@g^ccAaVkjAaMkoA")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.050881,-122.707128),new google.maps.LatLng(49.150786,-122.554539))
a.airClass="C"
a.altLow="0"
a.altHigh="1900"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Pitt Meadows, BC [CZ]<br>Class C<br>SFC to 2500ft (2500ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-10"
po.paths=google.maps.geometry.encoding.decodePath("{gukHnx}kVvCcrAbMooA~UqjAf^icAne@{y@rk@yn@hp@cb@ps@oTfu@eFdu@jFps@rThp@fb@pk@xn@le@|y@d^dcA~UljA`MloAvC|qAwCzqAaMloA_VljAe^dcAme@|y@qk@xn@ip@fb@qs@rTeu@jFgu@eFqs@oTip@cb@sk@yn@oe@{y@g^icA_VqjAcMooA")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.166159,-122.786472),new google.maps.LatLng(49.266063,-122.633528))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC [CZ]<br>Class C<br>SFC to 2500ft (2500ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-12"
po.paths=google.maps.geometry.encoding.decodePath("cjwkHfyroVhiCovu@??pnBatA|vBss@~zBmSn{BfKhxBnk@pqBnjAlgBbgBjzAx`CnjAtvCnx@~gDzd@ntD~Or{DeCh}DkXnyDyl@bpD}_AtaDaqAnnC{_B`wB{kBb|AstBj~@_zBx^w{BWyyBi`@itB}_AkkBu}A{~AeyB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.0786,-123.359706),new google.maps.LatLng(49.276667,-123.003627))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver Harbour, BC [CZ]<br>Class C<br>SFC to 2500ft (2500ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-14"
po.paths=google.maps.geometry.encoding.decodePath("o`vkHpdboVw{K~rMnG_fn@~`C{nD|qJ@u_Bxae@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.254531,-123.298814),new google.maps.LatLng(49.336042,-123.028914))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver Outer Control Zone, BC [CZ]<br>Class C<br>800ft (800ft AAE) to 2500ft (2500ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-16"
po.paths=google.maps.geometry.encoding.decodePath("_vajH`kuoV?`y@??esB~`HeqCt_GyjDxwEw_E~iDqoEnwBsyEtaAy}E|I}{Eil@ctEicBmfEywC}qDqjEbAebYv{K_sMsh@tsO??h_BryBzkB|}AztBz_AjzB~_@h|BBjzBu_@|tBq_A~kBk}Ax_BmxBxpA}oCh_AccD`l@mqDjWszD`Bc~DmQe|Dif@qtDoz@ggDzrQ??pkm@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002083,-123.512761),new google.maps.LatLng(49.336386,-123.084722))
a.airClass="C"
a.altLow="800"
a.altHigh="2500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Victoria, BC [CZ]<br>Class C<br>SFC to 2500ft (2400ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.1.4-18"
po.paths=google.maps.geometry.encoding.decodePath("kcshH`ripVbJ{~D|_@ayDvt@mmD~gAq|C|xA}fCbgBamBdrB}oAvyBkp@n}BiOn}BdPpyBbq@~qBnpAzfBjmBrxA|fCtgAf|Cpt@|lDx_@fxD~I~}D_J`~Dy_@fxDqt@zlDugAh|CsxAzfC{fBjmB_rBppAqyBbq@o}BdPo}BkOwyBip@erB}oAcgBcmB}xA{fC_hAq|Cwt@omD}_@_yD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.530473,-123.60219),new google.maps.LatLng(48.763583,-123.249365))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Comox, BC [CZ]<br>Class D<br>SFC to 6000ft (5900ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-21"
po.paths=google.maps.geometry.encoding.decodePath("qn|oHjl~yVbybAk_bBluTrlb@cybAzbbBmuTcpb@")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=962.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.5,-125.188889),new google.maps.LatLng(49.958333,-124.5))
a.airClass="D"
a.altLow="0"
a.altHigh="6000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kelowna, BC a) [CZ]<br>Class D<br>SFC to 2500ft (1100ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-23"
po.paths=google.maps.geometry.encoding.decodePath("w}}pHtacxUcrB_bUt`u@}kU`vG~ar@gsMdJwsTgzIs{U~{B")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.826747,-119.495833),new google.maps.LatLng(50.148142,-119.232442))
a.airClass="D"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kelowna, BC b) [CZ]<br>Class D<br>2500ft to 6500ft (5100ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-24"
po.paths=google.maps.geometry.encoding.decodePath("w}}pHtacxUcrB_bUt`u@}kU`vG~ar@gsMdJyfj@h`@qh@q~F")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.826747,-119.501161),new google.maps.LatLng(50.148142,-119.232442))
a.airClass="D"
a.altLow="2500"
a.altHigh="6500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC [CZ]<br>Class D<br>SFC to 5500ft (3200ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-26"
po.paths=google.maps.geometry.encoding.decodePath("{`lhIljqlV??ekAgdDgx@iyD{d@egEkPgoEtBgqEnWcmEvk@_cEr~@isDtoAg~Cj~AudChjBggBbsB{fAtxBmd@rzB}@~xBn`@|sB|bAnkBlcB|_B|`CpqAxzCz`A`pDhn@f`EhZ~jErEzoEgMvnEya@vgEiu@|zDggAxhDcwAvqCodBnvB_oBxwAevBnv@azBpSizBaN_wBgq@ioBevA{[mfEwaDcv@")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.76754,-122.875281),new google.maps.LatLng(54.000414,-122.480372))
a.airClass="D"
a.altLow="0"
a.altHigh="5500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver Outer Control Zone, BC [CZ]<br>Class D<br>SFC to 800ft (800ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-28"
po.paths=google.maps.geometry.encoding.decodePath("_vajH`kuoV?`y@??esB~`HeqCt_GyjDxwEw_E~iDqoEnwBsyEtaAy}E|I}{Eil@ctEicBmfEywC}qDqjEbAebYv{K_sMsh@tsO??h_BryBzkB|}AztBz_AjzB~_@h|BBjzBu_@|tBq_A~kBk}Ax_BmxBxpA}oCh_AccD`l@mqDjWszD`Bc~DmQe|Dif@qtDoz@ggDzrQ??pkm@")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002083,-123.512761),new google.maps.LatLng(49.336386,-123.084722))
a.airClass="D"
a.altLow="0"
a.altHigh="800"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Campbell River, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-31<br>Excluding the class G airspace below 700ft within the area bounded by a line beginning at: N50:01:53.89 W125:14:20.98 to N50:00:39.00 W125:14:33.00 to N49:54:14.52 W125:09:51.73 thence counter-clockwise along the arc of a circle of 5 miles radius centred on N49:57:03.00 W125:16:15.00 (Campbell River, BC - AD) to N50:01:53.89 W125:14:20.98 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("_hkpHt}q{VzFukCpVkgCje@{~Bbs@qrBd_AubBjiAwoAfqAmz@rvAgc@jyAaKjyAnKpvAvc@bqAtz@fiA|oA`_AtbB|r@jrBfe@r~BlV|fC|FdkC}FdkCmV|fCge@r~B}r@jrBa_ArbBgiA|oAcqAvz@qvAtc@kyApKkyAaKsvAic@gqAkz@kiAwoAe_AubBcs@qrBke@}~BqVkgC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.86758,-125.400221),new google.maps.LatLng(50.034087,-125.141446))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Castlegar, BC [CZ]<br>Class E<br>SFC to 6500ft (4900ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-33"
po.paths=google.maps.geometry.encoding.decodePath("wmklHbb~lU|FyiCnVqeCje@e}Bbs@_qBd_AkaBjiAunAfqAsy@tvAwb@jyA}JhyAjKpvAdc@dqA|y@diAznA`_AhaB|r@zpBhe@z|BlVbeCzFjiC{FhiCmVbeCie@z|B}r@zpBa_AhaBeiAznAeqA|y@qvAdc@iyAjKkyA}JuvAwb@gqAsy@kiAunAe_AkaBcs@_qBke@e}BoVqeC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.213135,-117.760161),new google.maps.LatLng(49.379643,-117.504839))
a.airClass="E"
a.altLow="0"
a.altHigh="6500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cranbrook, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-35"
po.paths=google.maps.geometry.encoding.decodePath("_{hnHzutaUzFujCpVmfCje@_~Bbs@wqBd_A}aBjiAgoAfqA_z@rvA_c@jyA_KjyAlKpvAlc@bqAhz@fiAjoA`_A~aB|r@pqBfe@t}BlV~eC|FfjC}FdjCmV~eCge@t}B}r@rqBa_A|aBgiAjoAcqAhz@qvAlc@kyAlKkyA}JsvAac@gqA_z@kiAeoAe_A_bBcs@wqBke@_~BqVkfC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.52758,-115.910705),new google.maps.LatLng(49.694087,-115.65374))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kamloops, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-37"
po.paths=google.maps.geometry.encoding.decodePath("e`~tHvhc~U|F}mCnVoiCje@_aCbs@ktBd_AgdBjiAaqAfqAk{@tvAyc@jyAgKhyAvKpvAfd@bqAt{@fiAfqA`_AfdB|r@ftBfe@r`ClV`iC|FlmC}FlmCmV`iCge@r`C}r@ftBa_AfdBgiAfqAcqAt{@qvAfd@iyAvKkyAgKuvAyc@gqAk{@kiAaqAe_AgdBcs@ktBke@_aCoVoiC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.618969,-120.575894),new google.maps.LatLng(50.785476,-120.312995))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Nanaimo, BC [CZ]<br>Class E<br>SFC to 2500ft (2400ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-39"
po.paths=google.maps.geometry.encoding.decodePath("}dijH`|grV??huAd\\npAps@piAxgAh`A~yAhu@niBth@~uBzZ|~BfLhdCw@xeCuOjcCe^f}Buk@hsB_x@dfBubA~uAikAhcAyqArn@{uAnXowAvAovAgS_sAqi@amAw~@{dAarAqz@}bBsn@_qBia@u{B}RybC_DafC`IkeCzWy`Cre@wxB~gOkvJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.969146,-123.997042),new google.maps.LatLng(49.135442,-123.744817))
a.airClass="E"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Penticton, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-41"
po.paths=google.maps.geometry.encoding.decodePath("k_lmHzx~xUzFgjCnV_fCle@s}B`s@mqBf_AuaBjiA}nAfqAyy@rvA}b@jyA}JhyAlKrvAhc@bqAbz@fiAboA~~@taB~r@dqBfe@j}BlVpeCzFxiC{FviCmVreCge@h}B_s@fqB__AtaBgiAboAcqAbz@svAhc@iyAjKkyA}JsvA{b@gqA{y@kiA}nAg_AuaBas@kqBme@s}BoV_fC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.379802,-119.730317),new google.maps.LatLng(49.546309,-119.474128))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Port Hardy, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-43<br>Excluding the class G airspace below 700ft bounded by a line beginning at: N50:44:42.00 W127:26:56.00 to N50:41:20.00 W127:26:56.00 to N50:41:20.00 W127:29:46.00 thence clockwise along the arc of a circle of 5 miles radius centred on N50:40:50.00 W127:22:00.00 (Port Hardy, BC - AD) to N50:44:42.00 W127:26:56.00 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("wxytHrhkhWzFymCpVoiCje@{`C`s@ktBf_AedBjiAaqAfqAi{@rvAyc@jyAgKjyAvKpvAfd@bqAt{@fiAdqA`_AddB|r@dtBfe@p`ClV`iCzFhmC{FjmCmV~hCge@r`C}r@btBa_AfdBgiAdqAcqAr{@qvAfd@kyAvKkyAgKsvAyc@gqAi{@kiA_qAg_AgdBas@itBke@}`CqVmiC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.597302,-127.498055),new google.maps.LatLng(50.763809,-127.235278))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Rupert, BC a) [CZ]<br>Class E<br>SFC to 700ft ASL"
mt="Control Zone<br>CDAH section: 3.1.4-45"
po.paths=google.maps.geometry.encoding.decodePath("uzxjIhnn{Wp~IkrTjgO_|E??`t@btB~f@tbCrYblCpKtqCw@fsCeOtpCa]bjCcj@t_C_v@tqBk`An`B}hArlAmoApv@usA~^suAjFeuAiPgrAsh@amAy_AueAeuAk|@ehBiq@exBcd@meC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.202801,-130.587219),new google.maps.LatLng(54.363472,-130.349914))
a.airClass="E"
a.altLow="0"
a.altHigh="700"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Rupert, BC b) [CZ]<br>Class E<br>700ft ASL to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-46"
po.paths=google.maps.geometry.encoding.decodePath("c~yjIdnd{W|FazCnVkuCje@_lCbs@k~Bf_A{lBjiAaxAfqAm`AtvA}f@jyAgLhyAzLpvAng@bqAx`AfiAfxA~~@zlB|r@d~Bhe@rkCjVxtC|FlyC}FnyCkVxtCie@rkC}r@d~B__AxlBgiAfxAcqAz`AqvAng@iyAxLkyAeLuvA}f@gqAo`AkiA_xAg_A{lBcs@k~Bke@alCoViuC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.202638,-130.587298),new google.maps.LatLng(54.369145,-130.302057))
a.airClass="E"
a.altLow="700"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Princeton, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-48"
po.paths=google.maps.geometry.encoding.decodePath("s~lmHbkp~UzFgjCnV_fCle@s}B`s@mqBf_AuaBjiA_oAfqAyy@rvA{b@jyA}JhyAjKrvAhc@bqAbz@fiAboA~~@taB~r@fqBfe@j}BlVreCzFviC{FxiCmVreCge@h}B_s@fqB__AtaBgiAboAcqAdz@svAhc@iyAjKkyA}JsvA{b@gqA{y@kiA}nAg_AuaBas@mqBme@s}BoV_fC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.384802,-120.639497),new google.maps.LatLng(49.551309,-120.383281))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Quesnel, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-50"
po.paths=google.maps.geometry.encoding.decodePath("o|ccInvvjV|FquCnV{pCje@{gCbs@szBf_AsiBjiAmuAfqAo~@rvAye@jyA{KjyAlLpvAhf@bqAz~@fiAruA~~@riB|r@lzBhe@ngClVjpCzF~tC{F|tCmVjpCie@ngC}r@lzB__AriBgiAruAcqAz~@qvAhf@kyAlLkyA{KsvAye@gqAo~@kiAmuAg_AsiBcs@szBke@{gCoV{pC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.942857,-122.648421),new google.maps.LatLng(53.109365,-122.371579))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sandspit, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-52"
po.paths=google.maps.geometry.encoding.decodePath("}`qdIv{ocX|FivCnVuqCje@shCbs@i{Bf_AejBjiA{uAfqA{~@rvA_f@jyA{KjyAnLpvAnf@bqAf_AdiA`vA`_AdjB|r@b{Bhe@dhCjVdqC|FvuC}FvuCkVfqCie@dhC}r@b{Ba_AdjBeiA`vAcqAf_AqvAnf@kyAnLkyA}KsvA}e@gqA}~@kiAyuAg_AgjBcs@g{Bke@shCoVuqC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.173969,-131.953057),new google.maps.LatLng(53.340476,-131.674721))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Smithers, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-54"
po.paths=google.maps.geometry.encoding.decodePath("yecnIhkggW|Fc|CnVkwCje@}mCbs@a`Cf_AinBjiAeyAfqAkaAtvAmg@jyAkLhyA~LpvA`h@bqAvaAfiAjyA~~@jnB|r@x_Che@nmCjVxvC|Fn{C}Fp{CkVxvCie@lmC}r@z_C__AhnBgiAlyAcqAvaAqvA~g@iyA`MkyAkLuvAog@gqAiaAkiAeyAg_AknBcs@a`Cke@{mCoVkwC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.741469,-127.327295),new google.maps.LatLng(54.907976,-127.03826))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Terrace, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-56<br>Excluding the class G airspace 700ft and below bounded by a line beginning at: N54:29:54.94 W128:37:32.18 to N54:28:58.87 W128:43:02.85 thence clockwise along the arc of a circle of 5 miles radius centred on N54:27:59.00 W128:34:39.00 (Terrace, BC - AD) to N54:32:30.75 W128:38:15.26 to N54:29:54.94 W128:37:32.18 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("gf}kIhxwoW|FwzCnV_vCle@ulCbs@}~Bd_AimBjiAmxAhqAw`ArvAcg@jyAgLjyAzLpvAtg@bqAbaAdiArxA`_AjmB|r@v~Bfe@dlClVnuCzFbzC{FdzCmVnuCge@dlC}r@v~Ba_AjmBeiArxAcqAbaAqvAtg@kyAzLkyAgLsvAcg@iqAw`AkiAmxAe_AimBcs@}~Bme@ulCoV_vC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.383135,-128.720749),new google.maps.LatLng(54.549643,-128.434251))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Tofino, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-58"
po.paths=google.maps.geometry.encoding.decodePath("esakHb}s~V|FeiCnV_eCje@s|Bbs@opBd_A}`BjiAknAfqAky@rvAsb@jyAyJjyAfKpvA`c@bqAty@fiAnnA`_A|`B|r@hpBfe@j|BlVpdC|FvhC}FthCmVpdCge@j|B}r@hpBa_A|`BgiAnnAcqAty@qvA`c@kyAfKkyAyJsvAsb@gqAky@kiAknAe_A}`Bcs@opBke@s|BoV_eC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.998969,-125.899609),new google.maps.LatLng(49.165476,-125.645391))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Victoria Harbour, BC [CZ]<br>Class E<br>SFC to 2500ft (2500ft AAE)"
mt="Control Zone<br>CDAH section: 3.1.4-60"
po.paths=google.maps.geometry.encoding.decodePath("uy`gHzbbpV|FkgCnVgcCje@_{Bbs@aoBd_As_BjiAimAfqAsx@tvAeb@jyAuJhyAbKpvApb@dqA|x@diAlmA`_At_B|r@znBhe@tzBlVzbCzF|fC{FzfCmVzbCie@tzB}r@znBa_At_BeiAlmAeqA|x@qvApb@iyAbKkyAuJuvAeb@gqAsx@kiAimAe_As_Bcs@aoBke@_{BoVgcC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.339524,-123.512952),new google.maps.LatLng(48.506031,-123.262048))
a.airClass="E"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Williams Lake, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.1.4-62<br>Excluding the class G airspace below 2800ft bounded by a line beginning at: N52:09:16.00 W122:10:52.53 to N52:06:46.08 W121:58:53.96 thence clockwise along the arc of a circle of 5 miles radius centred on N52:10:59.00 W122:03:15.00 (Williams Lake, BC - AD) to N52:09:16.00 W122:10:52.53 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("kg_~Hnu}gVzFsrCpVcnCje@geCbs@gxBd_AsgBjiAwsAfqAi}@tvAae@jyAsKhyAdLpvAne@bqAt}@fiA|sA`_ArgB|r@`xBfe@zdClVtmCzF`rC{FbrCmVrmCge@zdC}r@bxBa_ApgBgiA|sAcqAt}@qvApe@iyAbLkyAsKuvA_e@gqAk}@kiAwsAe_AqgBcs@ixBke@geCqVcnC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.099802,-122.189949),new google.maps.LatLng(52.266309,-121.918385))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Abbotsford, BC [TSP RQ]<br>Class D<br>1500ft to 2500ft"
mt="Transponder Airspace<br>CDAH section: 3.1.5-11"
po.paths=google.maps.geometry.encoding.decodePath("_vajHtrglVyzD?Uocg@vzD?AdZBnaCBniC@joCBdhCBvgC@xhC@|mC@~hC@laC?xS")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.002086,-122.760275),new google.maps.LatLng(49.032247,-122.55475))
a.airClass="D"
a.altLow="1500"
a.altHigh="2500"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC [TSP RQ]<br>Class D<br>1200ft to 2500ft"
mt="Transponder Airspace<br>CDAH section: 3.1.5-14"
po.paths=google.maps.geometry.encoding.decodePath("guehHhfjoV??akBbwA{~AlsBqpAdjC}_Ab}Cmm@lkDyYztDazFor@??ecBbsJg}Bl`JqmdA`M??trEcThmEclA|bEm|BtsDoiD~_DirElhC_vF|lB_tG?ay@@CpfS}fd@zf`@`~AfpEfcV")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.694767,-123.512267),new google.maps.LatLng(49.194564,-123.131528))
a.airClass="D"
a.altLow="1200"
a.altHigh="2500"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kelowna, BC [TSP RQ]<br>Class E<br>3500ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-19"
po.paths=google.maps.geometry.encoding.decodePath("}h}qH`~rwUx^stPp}AacPfyCs`OhpEgnMv`GumKjiHcaIvhIyjF`~IqmCrhJil@fhJ~s@v|IftCzfIxoF~fHvcIh~FvmK|mEpkMjwCr{Nf|Aj|Ol^|lPm^~lPg|Aj|OkwCp{N}mErkMi~FtmK_gHvcI{fIxoFw|IhtCghJ|s@shJil@a~IqmCwhIyjFkiHaaIw`GwmKipEgnMgyCq`Oq}AccP")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.624208,-119.895388),new google.maps.LatLng(50.290237,-118.860168))
a.airClass="E"
a.altLow="3500"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kelowna/Penticton, BC [TSP RQ]<br>Class E<br>6500ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-21"
po.paths=google.maps.geometry.encoding.decodePath("y{ipHbhx{U??}rLhMumLuoBm{K__Fq}JkhIutIyhLcbHk}NcgFkcQoeD}xR__Bg|SyUelTbr@mhTpzB{pSj_EmfRt~FkjPrvHk~MreJaeKjjKw`HzcLytDlqL_dAvrLfl@vgLr|C~mKnpGfqdBnqpA??bdF|vEjfEhtGndDjdIv}BvjJfsAnfKhf@tvKyE|zKws@dsKa`Bn_KqiCn`JaoDdwHioEndGmiF`jEs|FniCwhG~|@ocqB~{M")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=909.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.213278,-120.062636),new google.maps.LatLng(50.476911,-118.76806))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC a) [TSP RQ]<br>Class E<br>5200ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-23"
po.paths=google.maps.geometry.encoding.decodePath("}bygIt`eiVzkKahqB??aeR|Z}wQf~EeyPnhKwiOlhPekMdyTa_KbvXugHh{[ogEne^kaBdr_@tE|_`@pnBdn_@`tEt}]hsH|o[liKngXzsMxgTtpOztO~}PjsJrzQdhE~eRjXv_R{tCdhQw~Hh`Po~M~hN{oRbdLeoVrsIayYtyF_k\\zxCyb^xs@i__@}t@s~^guoAqtC??mqCioJquDs~HsrEyfGwiFkgEgzFcbC}cGmp@")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.245476,-123.639677),new google.maps.LatLng(54.409416,-121.670508))
a.airClass="E"
a.altLow="5200"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince George, BC b) [TSP RQ]<br>Class E<br>7000ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-24"
po.paths=google.maps.geometry.encoding.decodePath("}bygIt`eiVzkKahqB??xmRfoBzvQptHtnPx{MhvN`tRjoLjyVz{IdhZn~Fp}\\nuCnx^guoAqtC??mqCioJquDs~HsrEyfGwiFkgEgzFcbC}cGmp@")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=953.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.254106,-122.492797),new google.maps.LatLng(53.873272,-121.670508))
a.airClass="E"
a.altLow="7000"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vancouver, BC [TSP RQ]<br>Class E<br>1200ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-27"
po.paths=google.maps.geometry.encoding.decodePath("guehHhfjoV??akBbwA{~AlsBqpAdjC}_Ab}Cmm@lkDyYztDazFor@??ecBbsJg}Bl`JqmdA`M??trEcThmEclA|bEm|BtsDoiD~_DirElhC_vF|lB_tG?ay@@CpfS}fd@zf`@`~AfpEfcV")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.694767,-123.512267),new google.maps.LatLng(49.194564,-123.131528))
a.airClass="E"
a.altLow="1200"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Victoria Harbour, BC [TSP RQ]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.1.5-29"
po.paths=google.maps.geometry.encoding.decodePath("cnueHv}foVmoKt}d@??_g@teBaq@f{Agz@xmA_iLxlN_vBqfFghNcjG??d_@isDnJ_yDoHeyDc]etD_q@{iDkcAuzCwsAagCwaBqoB}lButA}tBkw@uyBoUbaQqaE~qQcpJt~DsvGpbZd`Y")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.284028,-123.5656),new google.maps.LatLng(48.6412,-123.115139))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Christina Lake, AB a) [TA]<br>Class E<br>2900ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-4"
po.paths=google.maps.geometry.encoding.decodePath("mh|rIdkvdTxnA{t`@??j_AplAveAtx@ziAhe@flA`QzlAqAxkAcVjhAol@qnApr`@qbOcuB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.596531,-111.058297),new google.maps.LatLng(55.69175,-110.866939))
a.airClass="E"
a.altLow="2900"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Christina Lake, AB b) [TA]<br>Class E<br>2700ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-5"
po.paths=google.maps.geometry.encoding.decodePath("}`vrIljcbTxsA_da@zaOz|BssAvaa@??e_AylAueAay@wiAye@elAsQ{lA~@{kArUohA`l@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.563881,-110.634092),new google.maps.LatLng(55.659839,-110.439436))
a.airClass="E"
a.altLow="2700"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dawson Creek, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-7"
po.paths=google.maps.geometry.encoding.decodePath("kyvtIhep|UzVqcNxeAqtMtrBcwLz{C_lKh`EwtIt~EesGfvFgiEffGmyBfnGcf@zmGdl@leGv~B|tFfmE`}EhuGn~DvtIhzCziKhqBbsL~dAfoMpVn}MqVp}M_eAfoMiqB`sLizC|iKo~DvtIa}EhuG}tFdmEmeGx~B{mGbl@gnGaf@gfGmyBgvFiiEu~EcsGi`EytI{{C_lKurBawLyeAqtM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.491906,-120.626456),new google.maps.LatLng(55.991428,-119.7391))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB a) [TA]<br>Class E<br>3000ft to 3400ft"
mt="Transition Area<br>CDAH section: 3.2.1-9"
po.paths=google.maps.geometry.encoding.decodePath("uxjfInzbuT??asAum@{vAyRmwAlFo}Go_h@xmN?ldAxpJziC~sHg{CvsT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.611111,-113.724722),new google.maps.LatLng(53.723611,-113.505278))
a.airClass="E"
a.altLow="3000"
a.altHigh="3400"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB b) [TA]<br>Class E<br>3000ft to 3400ft"
mt="Transition Area<br>CDAH section: 3.2.1-10"
po.paths=google.maps.geometry.encoding.decodePath("ctreI|lvtThuDqjP?gn~@|{P??xzd@??oqAd`D}~@lvDak@hfEuUdpEWpsEhTrpEhj@tfE}|Q?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.391667,-113.661111),new google.maps.LatLng(53.5125,-113.247222))
a.airClass="E"
a.altLow="3000"
a.altHigh="3400"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB c) [TA]<br>Class E<br>3000ft to 4100ft"
mt="Transition Area<br>CDAH section: 3.2.1-11"
po.paths=google.maps.geometry.encoding.decodePath("gtbfIzbouT??mo@}|B_|@olBefAkyAynAqaAf{CwsT{iC_tHmdAypJ?y{^??afAu^khAkJohAhEigAvVcdAni@??|cDolRjpd@??fn~@iuDpjPc_O|tW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=977.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.483333,-113.7875),new google.maps.LatLng(53.701944,-113.247222))
a.airClass="E"
a.altLow="3000"
a.altHigh="4100"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB d) [TA]<br>Class E<br>3400ft to 4100ft"
mt="Transition Area<br>CDAH section: 3.2.1-12"
po.paths=google.maps.geometry.encoding.decodePath("g`seIlggvT?c~[nyJ??b~[oyJ?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.453889,-113.911111),new google.maps.LatLng(53.514444,-113.762778))
a.airClass="E"
a.altLow="3400"
a.altHigh="4100"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB e) [TA]<br>Class E<br>4600ft to 7000ft"
mt="Transition Area<br>CDAH section: 3.2.1-13"
po.paths=google.maps.geometry.encoding.decodePath("g`seIbl{xT?un]??hpKj|HvlLdzDnyLr|@fyLe`AflLo|DxrKyrHvmJs_Lb~He`OneGwqQheEerSn_Cy_U`v@kyU}Rg~Ui}AinUceDajTehFgrRqdHohPsxIunMwbKggJyaL_uFwtLc{B_{L|@itLr_C{`Lb{FaaKxoJ}uI~yMq`HpvPqbFnbS{}Ch{TetAh_VygO???v|Awh[b{Dm}YnqGuwWh_JmyTbbLyeQ`xMw`Mj_OsnH|vOatCf~OdHbuO`eDz{Nd|HjsMzhM`}KhgQjzI|sTnmGtkWtxDhlYj~A~sZfAxa[{yAhuZktDznYoiGjoW{vItxTazK`mQaqMloMgzNhcIgtOrlDe~OzOuwOklCy}NyrH")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=915.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.811895,-114.413813),new google.maps.LatLng(53.806944,-112.746148))
a.airClass="E"
a.altLow="4600"
a.altHigh="7000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Chipewyan, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-15"
po.paths=google.maps.geometry.encoding.decodePath("cwegJrqeeTzVomO|eAe}NvrB_}M~{CenLj`E_rJx~EujHhvFkzEhfGocCfnGai@zmGlp@jeG`jCxtFd_F~|EfmHl~D~qJbzCrkLhqBdxM|dArvNnVbfOoV`fO}dAtvNiqBdxMczCpkLm~D`rJ_}EfmHytFd_FkeG~iC{mGlp@gnG_i@ifGqcCivFizEy~EujHk`EarJ_|CcnLwrBa}M}eAc}N")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.517461,-111.598898),new google.maps.LatLng(59.016983,-110.635547))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort MacKay/Albian, AB i) [TA]<br>Class E<br>1200ft AGL to 3500ft"
mt="Transition Area<br>CDAH section: 3.2.1-17"
po.paths=google.maps.geometry.encoding.decodePath("cxk{Id{kfTquIpoLijFuuRvuI}nLbjF`uR")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.081783,-111.382525),new google.maps.LatLng(57.174247,-111.212508))
a.airClass="E"
a.altLow="1200AGL"
a.altHigh="3500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort MacKay/Horizon, AB i) [TA]<br>Class E<br>1200ft AGL to 3500ft"
mt="Transition Area<br>CDAH section: 3.2.1-19"
po.paths=google.maps.geometry.encoding.decodePath("mej|InmjiTg{K_aBnt@sxVh{KhbBqt@hwV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.228944,-111.797522),new google.maps.LatLng(57.303478,-111.659981))
a.airClass="E"
a.altLow="1200AGL"
a.altHigh="3500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort McMurray, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-21"
po.paths=google.maps.geometry.encoding.decodePath("mzhzIlpzeTzVkoNzeA}_NtrBwaMz{CquKh`E_}Iv~EyyGhvFanEffGg|BfnG}f@zmGjm@jeG|aC|tFfrE~|E~{Gp~D~|IdzCjsKhqBn}L~dAhzMpV|hNqV|hN_eAhzMiqBn}LezCjsKq~D~|I_}E~{G}tFfrEkeG|aC{mGjm@gnG}f@gfGg|BivFanEw~EyyGi`E_}I{{CquKurBwaM{eA}_N")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.403436,-111.678903),new google.maps.LatLng(56.902958,-110.770208))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Nelson, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-23"
po.paths=google.maps.geometry.encoding.decodePath("kgsgJzugkVzVqnOzeAe~NvrB_~M~{C_oLj`EyrJx~EgkHjvFwzEhfGycCfnGci@zmGpp@heGhjCztFr_F||EzmHl~DxrJdzCjlLfqBdyM|dArwNpVbgOqVbgO}dArwNgqBdyMezCjlLm~DxrJ}|EzmH{tFr_FieGhjC{mGpp@gnGci@ifGycCkvFwzEy~EgkHk`EyrJ_|C_oLwrB_~M{eAe~N")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.586628,-123.079581),new google.maps.LatLng(59.08615,-122.114308))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Resolution, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-25"
po.paths=google.maps.geometry.encoding.decodePath("ed}uJf|{tT|VwuP|eAcdPxrBmaOb|C}nMl`EanK|~EgaIjvFsjFjfGgmCfnGwk@zmGpt@heG|tCvtFjpFz|EfdIj~DbnK`zCxkMdqBv{NzdAl|OnV|lPoV~lP{dAj|OeqBv{NazCzkMk~D`nK{|EhdIwtFjpFieGztC{mGrt@gnGyk@kfGemCkvFujF}~EeaIm`EcnKc|C}nMyrBmaO}eAcdP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.931072,-114.207282),new google.maps.LatLng(61.430594,-113.171052))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort St. John, BC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-27"
po.paths=google.maps.geometry.encoding.decodePath("ywwwIta}_VzV{iNzeAwzMtrBw|Lz{CeqKh`EeyIt~EuvGhvF{kEffG}zBdnGqf@|mGxl@jeGl`C|tF|oE`}E|xGn~DdyIfzC~nKhqBtxL~dAduMpVrcNqVtcN_eAduMiqBtxLgzC~nKo~DdyIa}EzxG}tF|oEkeGn`C}mGvl@enGof@gfG}zBivF{kEu~EwvGi`EeyI{{CcqKurBy|L{eAuzM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.988295,-121.189689),new google.maps.LatLng(56.487817,-120.290866))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Simpson, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-29"
po.paths=google.maps.geometry.encoding.decodePath("uinyJb`~bVzVo`Q~eAonPxrBekOb|CuwMn`EsuK|~EegIlvF_oFjfGyoCfnGol@zmGtu@feGxwCvtF~tFz|EjjIh~DruK`zCntMbqBdeOzdAnfPpVhwPqVjwP{dAlfPcqBfeOazCltMi~DruK{|EjjIwtF~tFgeGzwC{mGtu@gnGql@kfGwoCmvFaoF}~EegIo`EsuKc|CswMyrBekO_fAqnP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(61.510517,-121.764511),new google.maps.LatLng(62.010039,-120.708823))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Smith, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-31"
po.paths=google.maps.geometry.encoding.decodePath("{zznJtfjjTzVqaP~eAqpOvrBeoN`|Co~Ll`Ea`Kx~E{uHlvFobFhfGkhCfnGmj@zmGnr@heGnoCxtFvgF||EtxHj~D``KbzCt{LdqB|iN|dAliOnVnyOoVnyO}dAniOeqB|iNczCr{Lk~D``K}|EvxHytFvgFieGloC{mGnr@gnGmj@ifGihCmvFobFy~E}uHm`Ea`Ka|Cm~LwrBeoN_fAspO")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.772461,-112.460126),new google.maps.LatLng(60.271983,-111.46043))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Grande Prairie, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-33"
po.paths=google.maps.geometry.encoding.decodePath("gaiqIfvrtUzVu|MzeA{mMrrBypLz{CkfKf`E}oIt~EioGfvFmfEffGwwBfnGse@zmGnk@leGz|B|tFhjE`}EhqGp~D|oIhzChdKhqB~lL~dAvhMpVxvMqVvvM_eAvhMiqB~lLizChdKq~D|oIa}EhqG}tFhjEmeGz|B{mGnk@gnGse@gfGwwBgvFmfEu~EioGg`E}oI{{CkfKsrBypL{eA{mM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.929961,-119.322401),new google.maps.LatLng(55.429483,-118.447599))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Hay River, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-35"
po.paths=google.maps.geometry.encoding.decodePath("gpzsJhytaU|VsoP|eAe~OxrB}{N`|C{iMn`E{iKz~Ey}HjvFchFjfGwkCfnGmk@zmG~s@heGfsCvtFvmF||Ev`Ih~DziK`zC|fMdqBhvN|dAtvOnV`gPoV`gP}dAtvOeqBhvNazC~fMi~DxiK}|Ev`IwtFxmFieGfsC{mG|s@gnGkk@kfGwkCkvFehF{~Ew}Ho`E{iKa|C}iMyrB{{N}eAg~O")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.589961,-116.295356),new google.maps.LatLng(61.089483,-115.2702))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="High Level, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-37"
po.paths=google.maps.geometry.encoding.decodePath("sgifJnvbjUzVikOzeA_{NvrB_{M~{CklLj`EopJx~EmiHhvFmyEhfG_cCfnG{h@zmGfp@jeGliCxtFd~E~|E~kHl~DnpJdzCxiLfqBdvM|dAptNpV~cOqV|cO}dAptNgqBfvMezCviLm~DnpJ_}E~kHytFf~EkeGliC{mGdp@gnG{h@ifG_cCivFmyEy~EmiHk`EopJ_|CilLwrBa{M{eA_{N")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.371628,-117.644386),new google.maps.LatLng(58.87115,-116.685058))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Inuvik (Mike Zubko), NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-39"
po.paths=google.maps.geometry.encoding.decodePath("_mlaLhzumX|VgdVdfA_mUbsBg_Tn|Cs|Qz`EmgOh_FibLvvFypHpfGovDhnGgw@vmG`gAbeGjdEltFd{Hn|ExgL|}DlgOtyCbwQzpB|tStdAb_UlVjtUmVltUudA`_U{pB|tSuyCdwQ}}DjgOo|EzgLmtFb{HceGldEwmG~fAinGew@qfGovDwvFypHi_FkbL{`EkgOo|Cu|QcsBg_TefA_mU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(68.054406,-134.158366),new google.maps.LatLng(68.553928,-132.807189))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kirby Lake, AB [TA]<br>Class E<br>2900ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-41"
po.paths=google.maps.geometry.encoding.decodePath("y_jqI`mzcTjvEkkY??hkAdgApqAvm@ztA|TtuAmBtsA__@?tbRy{CvrNuyMosJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.333333,-110.955936),new google.maps.LatLng(55.434372,-110.761233))
a.airClass="E"
a.altLow="2900"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lethbridge, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-43"
po.paths=google.maps.geometry.encoding.decodePath("eemoHfenoTxVscLveAuvKprBa}Jv{C{wI``EahHp~EeoFbvFcoDdfG{iBdnGoa@|mGte@leGrmBbuFzqDd}EtpFv~D`hHlzCjvIlqBjzJ`eAzrKrVl_LsVj_LaeA|rKmqBjzJmzCjvIw~D~gHe}EtpFcuF|qDmeGpmB}mGve@enGoa@efG{iBcvFeoDq~EeoFa`EahHw{CywIqrBc}JweAsvK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.380517,-113.185321),new google.maps.LatLng(49.880039,-112.414124))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lloydminster, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-45<br>Excluding the airspace overlying the Cold Lake, AB MTCA."
po.paths=google.maps.geometry.encoding.decodePath("gv{eIbpy~SxVigMzeAeyLprBo}Kx{C}tJf`E_aIr~EgcGdvFw}DffGqrBdnGad@|mGhi@leGbwB|tFbaEd}EbeGr~D~`IhzCbsJjqB`zK`eAptLpVbbMqV`bMaeAptLkqB`zKizCbsJs~D~`Ie}EbeG}tFbaEmeGbwB}mGhi@enGad@gfGqrBevFw}Ds~EgcGg`E_aIy{C}tJqrBo}K{eAeyL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.059406,-110.490507),new google.maps.LatLng(53.558928,-109.654493))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Medicine Hat, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-47"
po.paths=google.maps.geometry.encoding.decodePath("_byqHddxbTxVagLveA}yKprBg`Kv{CszIb`EmjHn~EcqFdvFqpDdfGujBdnGwa@|mG`f@leGnnB`uFjsDf}ErrFt~DljHlzCbyIlqBl}J`eAbvKrVvbLsVtbLaeAdvKmqBj}JmzCdyIu~DljHg}ErrFauFjsDmeGnnB}mG`f@enGwa@efGujBevFqpDo~EcqFc`EmjHw{CuzIqrBe`KweA}yK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.769128,-111.109542),new google.maps.LatLng(50.26865,-110.332125))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norman Wells, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-49"
po.paths=google.maps.geometry.encoding.decodePath("sg~nKtt|dW|VkmSbfA{xR|rBwpQh|CcvOt`EckMb_FarJpvF_nGlfGabDhnGuq@xmGv}@deGtlDrtF|uGt|EfvJb~DbkMzyC|qO~pBxhQxdAhnRnVfaSoVhaSydAfnR_qBzhQ{yC|qOc~D`kMu|EhvJstFzuGeeGtlDymGv}@inGsq@mfGabDqvF_nGc_FcrJu`EakMi|CcvO}rBwpQcfA}xR")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(65.032739,-127.397568),new google.maps.LatLng(65.532261,-126.202988))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Peace River, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-51"
po.paths=google.maps.geometry.encoding.decodePath("kruwIb|ykUzVyiNzeAqzMtrBs|Lz{CaqKh`EayIt~EuvGhvFwkEffG}zBdnGof@|mGvl@jeGl`C|tFzoE`}ExxGn~DbyIfzCxnKhqBrxL~dA`uMpVncNqVncN_eA`uMiqBpxLgzCznKo~D`yIa}ExxG}tF|oEkeGj`C}mGxl@enGqf@gfG{zBivFykEu~EsvGi`EcyI{{C_qKurBu|L{eAqzM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.977183,-117.896503),new google.maps.LatLng(56.476705,-116.997941))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Deer, AB [TA]<br>Class E<br>4000ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-53"
po.paths=google.maps.geometry.encoding.decodePath("i|~~HpvcvTzVo{LxeAymLprBwrKx{CikJb`EwxHr~Eu|FdvF}xDdfGuoBfnGec@zmGbh@leG|sB`uFb|Dd}Ej~Fr~DvxHjzCriJjqBpoK`eAniLpVrvLqVrvLaeAniLkqBpoKkzCriJs~DvxHe}Ej~FauFb|DmeG|sB{mGbh@gnGec@efGuoBevF}xDs~Eu|Fc`EwxHy{CikJqrBwrKyeAymL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.92885,-114.300357),new google.maps.LatLng(52.428372,-113.485754))
a.airClass="E"
a.altLow="4000"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Slave Lake, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-55"
po.paths=google.maps.geometry.encoding.decodePath("ig_rIpsp{TzVa~MzeAeoMrrBarLz{CogKf`E}pIt~EapGfvF_gEffGaxBfnGue@zmGpk@leGf}B|tFzjE`}EbrGp~D|pIhzCleKhqBdnL~dA~iMpVdxMqVbxM_eA`jMiqBdnLizCleKq~DzpIa}EbrG}tFzjEmeGh}B{mGpk@gnGue@gfGaxBgvFagEu~EapGg`E{pI{{CogKsrBarL{eAeoM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.043572,-115.216986),new google.maps.LatLng(55.543094,-114.339681))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Teslin, YT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-57"
po.paths=google.maps.geometry.encoding.decodePath("wwypJbcdiX~f@}v[zuB}yZz`E{`YxeG}mVpbIucSduJ}eOd|K{xJlvL}`FfcMacAdbMvyArsLztFxwKrgKvoJzmOz|HtcSl`G`fVn|D`rX|rB~eZ`f@f`[af@f`[}rB~eZo|DbrXm`G~eV{|HtcSwoJzmOywKrgKssLztFebMxyAgcMccAmvL}`Fe|KyxJeuJ_fOqbIucSyeG{mV{`E}`Y{uB}yZ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.761509,-133.573661),new google.maps.LatLng(60.594046,-131.899672))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Vermilion, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-59<br>Excluding those portions overlying the Cold Lake, AB MTCA."
po.paths=google.maps.geometry.encoding.decodePath("}ydfIfhlcTzVwgMxeAuyLrrB}}Kx{CkuJd`EiaIr~EqcGfvF_~DdfGsrBdnGcd@|mGji@leGfwB~tFjaEb}EjeGr~DjaIhzCpsJlqBlzK~dA`uLpVpbMqVpbM_eAbuLmqBlzKizCpsJs~DjaIc}EjeG_uFjaEmeGfwB}mGji@enGcd@efGurBgvF}}Ds~EqcGe`EkaIy{CiuJsrB}}KyeAuyL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.106072,-111.242354),new google.maps.LatLng(53.605594,-110.405424))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Watson Lake, YT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-61"
po.paths=google.maps.geometry.encoding.decodePath("apmoJbpgqWzVecP|eAcrOxrBspN~{Cy_Ml`EcaKz~EyvHjvFccFjfGwhCdnGqj@|mGtr@feGzoCztFlhFz|EryHj~DdaKbzC||LfqBjkNzdA|jOpV`{OqV`{O{dA|jOgqBjkNczC||Lk~DdaK{|EryH{tFlhFgeGzoC}mGtr@enGqj@kfGwhCkvFccF{~EyvHm`EcaK_|Cy_MyrBspN}eAcrO")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.868017,-129.323243),new google.maps.LatLng(60.367539,-128.320646))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Whitecourt, AB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-63"
po.paths=google.maps.geometry.encoding.decodePath("gw~jIrquaUxVopMzeAebMrrByeLx{Cm|Jf`EmgIr~EohGfvFoaEffGytBdnGwd@|mGfj@jeGryB~tFbeEb}EjjGp~DlgIhzCpzJjqBfbL`eAh}LpV~jMqV`kMaeAh}LkqBdbLizCpzJq~DngIc}EjjG_uF`eEkeGryB}mGfj@enGwd@gfGwtBgvFqaEs~EmhGg`EogIy{Cm|JsrByeL{eAcbM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.894128,-116.213055),new google.maps.LatLng(54.39365,-115.360278))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Whitehorse Intl, YT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-65"
po.paths=google.maps.geometry.encoding.decodePath("ukruJ`pkwXp_Aicn@r~Dsrl@nwHasi@hfLehe@rgOgw_@lxQqfYhvSm}Ql_U{cJ~rU_bBjpUf~C~wTzxKxjSzdSjjQn{YrxNfw_@fxKhsd@~kHtkh@bwDp}j@~|@~fl@_}@~fl@cwDp}j@_lHtkh@gxKfsd@sxNhw_@kjQn{YyjSxdS_xT|xKkpUd~C_sU}aBm_U{cJivSm}QmxQqfYsgOgw_@ifLghe@owH_si@s~Dsrl@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=887.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.043415,-136.429497),new google.maps.LatLng(61.375474,-133.70717))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yellowknife, NT [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.2.1-67"
po.paths=google.maps.geometry.encoding.decodePath("ipw}JtrnyTzVenQ~eAw{PzrBqwOb|CybNp`Ec_L|~E{nInvFotFjfGasCfnGmm@zmG`w@feGp{CvtFzzFx|EdrIf~Db_L`zCl_NbqBfqOxdAhsPpVndQqVpdQydAfsPcqBhqOazCj_Ng~Dd_Ly|EdrIwtFxzFgeGp{C{mGbw@gnGmm@kfGasCovFqtF}~E{nIq`Ec_Lc|CwbN{rBqwO_fAy{P")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(62.213017,-114.980494),new google.maps.LatLng(62.712539,-113.900062))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB a) [CAE]<br>Class E<br>5800ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-4"
po.paths=google.maps.geometry.encoding.decodePath("woa}HzravT|_B}cv@v~Gyjt@btMszp@nzRwwk@llWkhe@pe[ws]fb^{bU|_`@w~K~|`@cqB|x`@rzDft_@l_Nhp]zrVpoZjm^~tVjhe@ldRf~j@dbMrjo@~rG`jr@z{Ajzs@{{Ahzs@_sG`jr@ebMrjo@mdRh~j@_uVjhe@qoZjm^ip]zrVgt_@j_N}x`@rzD_}`@aqB}_`@y~Kgb^ybUqe[ys]mlWihe@ozRywk@ctMszp@w~Gwjt@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.115956,-115.473419),new google.maps.LatLng(52.114044,-112.291026))
a.airClass="E"
a.altLow="5800"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-5"
po.paths=google.maps.geometry.encoding.decodePath("iycwH~__cUxS_lfB??lr]ajAr|\\muIho[{{PbeY_bXrnd@zgrA??yxa@`t`@m|d@xeWazf@buMsxg@nrB")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=944.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.3575,-115.998889),new google.maps.LatLng(51.142778,-115.1825))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dawson Creek, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-7"
po.paths=google.maps.geometry.encoding.decodePath("ajwuIhep|U|f@ajXruBupWn`Es~UjeG{uSbbIqxPvtJajMx{K{mIfvL_hEdcMw|@hbMrmAxsLxvEdxKzxIdpJ|oMh}HpxPz`G~oSx|DtsUdsBxaWbf@dyWcf@fyWesBxaWy|DtsU{`G|oSi}HrxPepJzoMexKzxIysLzvEibMrmAecMw|@gvLahEy{K{mIwtJajMcbIqxPkeGyuSo`Eu~UsuBspW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.325398,-120.922223),new google.maps.LatLng(56.157935,-119.443332))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB a) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-9"
po.paths=google.maps.geometry.encoding.decodePath("ev`aInmmgT{_`@nyrD??|v[zxPbhY`hYzeVtc`@pnRp_f@veNfwj@hoIbgn@noDplp@vJ|eq@ixCzrp@ayHpsn@cqMtik@e|Qjwf@cvUj`a@s{X~hZii[nvRa}\\loJyt]vzAwo]s}Dah\\gmNohnDlluX??oiK|qe@_yNfva@{}Qht\\sd_Fbh~H??miPrlUohRztO_qSpzI}gTnuCmlTms@g~Ss~Fu}RodMokQi_SyhOsiXmwLe~\\wyIox`@arFmtc@w}Bkpe@gg]etyRq|rBiace@??sC{g|@tvD_j{@teJcpx@viOq~s@~}S}zm@|}Wclf@ff[kz]zs]}nT~d_@ksJrx_@gq@jn_@~kGdg^r_Qhd\\r_Z~gY|db@~tUhii@pnQpgo@nxLv{s@tvGpbw@jcBnzx@``~@x`Vn{T???jsTlpk@r|Xdyc@|d\\vi[vp^zaRh~_@dkHnl`@kNj{_@yeIvk^}oRj_\\}d[fpXelc@??lol@ygUlen@{cGvjn@|uCv`m@`pQ")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=462.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.272207,-121.937822),new google.maps.LatLng(57.648355,-109.409975))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB b) [CAE]<br>Class E<br>5700ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-10"
po.paths=google.maps.geometry.encoding.decodePath("uqvjIr}muUqu`DkfZqumEljiJoqnBnnwB??ioGow\\m{Dyz^meBgc`@{s]ovfS??fCuhp@jyCioo@|dHghm@`hLsvi@z~Oi~d@dfSmd_@`{U}nXj{WqdQjeYklIjxYumAzsYnnDjxXheLvfWjnS~xTltZn|hEfazG??hkSx}^`wOxud@h{K|{h@jtG~|k@zeCxvm@sNlgn@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=755.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.349291,-121.357153),new google.maps.LatLng(57.056389,-115.950236))
a.airClass="E"
a.altLow="5700"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB c) [CAE]<br>Class E<br>6700ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-11"
po.paths=google.maps.geometry.encoding.decodePath("ei~lIhy~{U_cuEnnpH??}bQdgVefSt_PspTxsI_gUj|BmhUy~AwtT_{HglSuoOapQavU{aOyg[_~Kie`@nqnBonwBpumEmjiJ`~xA`bkF")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=838.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.719075,-121.938702),new google.maps.LatLng(56.809331,-118.885))
a.airClass="E"
a.altLow="6700"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort McMurray, AB Low Level Control Area a) [CAE]<br>Class E<br>3500ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-13"
po.paths=google.maps.geometry.encoding.decodePath("ot|wI``ejT{neDnunB??k`Skoi@ixNqno@_mJ{ss@cxEqmv@o}@sxw@v|Aysw@pvFe_v@ziKo|r@rwO_hn@zykDrwgA??~kLthFtlKtvJhcJjkNtoH`qQdsFheTpoDpeVzfBlpWf[pdXgo@naXizBhgW{aExvUycG`qSc~H~wPgoJ`nMmxK|gI")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=884.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.237034,-112.505531),new google.maps.LatLng(57.652115,-110.115697))
a.airClass="E"
a.altLow="3500"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort McMurray, AB Low Level Control Area b) [CAE]<br>Class E<br>3000ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-14"
po.paths=google.maps.geometry.encoding.decodePath("mxgvInwpfT??p_@_mVuc@ylVieBayUygDuoTlfi@i~f@aQseaC~loC??~{|Fn{T???xsR|bh@~pVdca@?dphBuybDmljBwwmAk{`A")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=892.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.0,-112.22565),new google.maps.LatLng(56.286194,-110.0))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort McMurray, AB Low Level Control Area c) [CAE]<br>Class E<br>3500ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-15"
po.paths=google.maps.geometry.encoding.decodePath("yszrI~jk~Snh\\ojcA~`f@njcAojcA?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.333333,-110.0),new google.maps.LatLng(55.683333,-109.65))
a.airClass="E"
a.altLow="3500"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Nelson, BC a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-17"
po.paths=google.maps.geometry.encoding.decodePath("axshJzugkV~f@orZvuBuvYv`E_`XteGmpUjbIsjR`uJ}qN`|KojJjvLsxEfcM_aAfbMtuAtsLxjFzwK|wJ|oJbyN~|HrjRp`GfiUr|DnrW~rBpdY`f@x}Yaf@x}Y_sBndYs|DprWq`GfiU_}HrjR}oJbyN{wK|wJusLxjFgbMtuAgcM_aAkvLuxEa|KmjJauJ_rNkbIqjRueGmpUw`E_`XwuBuvY")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.420121,-123.401314),new google.maps.LatLng(59.252657,-121.792575))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Nelson, BC b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-18"
po.paths=google.maps.geometry.encoding.decodePath("waekJzugkV~oAo{v@hoFcau@xfKynq@rqOyhl@fkSque@dpV{|]d}XwgUhpZq_Ldh[enBjd[v`EleZfhNrlXr}Vv{Uty^puRrue@f}Nblk@dvJzxo@ldFlxr@dlAxht@elAxht@mdFlxr@evJzxo@g}Nblk@quRrue@w{Uty^slXr}VmeZdhNkd[x`Eeh[enBipZq_Le}XwgUepV{|]gkSsue@sqOyhl@yfKwnq@ioFcau@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.003852,-124.205452),new google.maps.LatLng(59.668925,-120.988437))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort St. John, BC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-20"
po.paths=google.maps.geometry.encoding.decodePath("ohxxIta}_V|f@utXruB_{Wp`EghVleGm~SdbI}_QvtJ}oMz{KcrIfvLmjEdcMm}@hbMxnAxsLvyEbxKn}IdpJ|uMf}H|_Qx`GlxSx|D||UbsBrkWbf@hcXcf@jcXcsBrkWy|D||Uy`GjxSg}H|_QepJ~uMcxKl}IysLxyEibMvnAecMk}@gvLojE{{KarIwtJ}oMebI}_QmeGm~Sq`EihVsuB}zW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.821787,-121.489278),new google.maps.LatLng(56.654324,-119.991278))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Simpson, NT [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-22"
po.paths=google.maps.geometry.encoding.decodePath("kznzJb`~bV`g@uf]|uBch\\~`E_lZ~eGotWvbIqdTjuJe`Ph|KqkKpvLwkFfcMweAdbMd_BnsLbbGtwKd|KroJ~hPr|HpdTf`GtkWj|Dj{YzrBvq[~e@fm\\_f@fm\\{rBvq[k|Dl{Yg`GrkWs|HrdTsoJ~hPuwKd|KosL`bGebMf_BgcMyeAqvLwkFi|KqkKkuJc`PwbIsdT_fGotW_aE_lZ}uBah\\")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(61.344009,-122.116372),new google.maps.LatLng(62.176546,-120.356961))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Smith, NT [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-24"
po.paths=google.maps.geometry.encoding.decodePath("qk{oJtfjjT`g@or[xuBuuZz`E}|XxeGijVnbIu`SduJqcOd|KawJlvL}_FdcM{bAfbMfyArsLtsFxwKveKxoJhkOx|Ht`Sn`GpbVn|DhnX|rB|aZ`f@`|Zaf@b|Z}rB|aZo|DhnXo`GnbVy|Ht`SyoJjkOywKteKssLtsFgbMhyAecM{bAmvL}_Fe|KcwJeuJqcOobIs`SyeGkjV{`E}|XyuBsuZ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.605954,-112.79333),new google.maps.LatLng(60.438491,-111.127226))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Grande Prairie, AB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-26"
po.paths=google.maps.geometry.encoding.decodePath("}qirIfvrtU|f@m~WruBmeWl`EctUjeGklS`bIqpPttJscMx{KgiIdvLieEdcMa|@hbMhlAzsLtsEdxKzsIfpJfiMh}HppP|`GvfSz|DniUdsB`wVbf@dnWcf@bnWesB`wV{|DniU}`GvfSi}HppPgpJfiMexKzsI{sLtsEibMhlAecMa|@evLieEy{KgiIutJscMabIqpPkeGklSm`EctUsuBmeW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.763454,-119.613984),new google.maps.LatLng(55.595991,-118.156016))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Grande Prairie, AB b) [CAE]<br>Class E<br>7700ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.2.2-27"
po.paths=google.maps.geometry.encoding.decodePath("uqvjIr}muU??coCnzk@_wGz_j@ksKdcg@qeOpec@yqR|y]s`IrxLa~xAabkFpu`DjfZ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=935.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.351794,-120.093814),new google.maps.LatLng(55.179722,-118.885))
a.airClass="E"
a.altLow="7700"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Hay River, NT a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-29"
po.paths=google.maps.geometry.encoding.decodePath("}`{tJhytaU`g@gj\\zuBql[|`EkrYzeGm}VtbIaqSfuJopOf|Km`KlvLieFfcMedAfbM|{ApsLfzFtwK|oKvoJxxOv|H~pSj`GfuVl|DxbY|rBtwZ~e@lr[_f@nr[}rBtwZm|DxbYk`GfuVw|H~pSwoJxxOuwK|oKqsLdzFgbM~{AgcMedAmvLieFg|Km`KguJqpOubI_qS{eGo}V}`EirY{uBsl[")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.423454,-116.637044),new google.maps.LatLng(61.255991,-114.928512))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Hay River, NT b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-30"
po.paths=google.maps.geometry.encoding.decodePath("qjlwJhytaUbpAinz@xoFyox@ngKout@nrO_do@flSgbh@~pV{x_@z}XkqVvpZ_vLfh[kqBdd[lpE|dZriO|kXloXzzU|y`@ttRjbh@j|N~bn@puJlwr@~cFb|u@`lAbow@alAbow@_dFd|u@quJjwr@k|N~bn@utRjbh@{zU|y`@}kXnoX}dZriOed[lpEgh[kqBwpZavL{}XkqV_qVyx_@glSibh@orO_do@ogKmut@yoF{ox@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.007186,-117.49102),new google.maps.LatLng(61.672259,-114.074536))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="High Level, AB [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-32"
po.paths=google.maps.geometry.encoding.decodePath("ixigJnvbjU~f@_mZvuBiqYt`Ea{WteG}kUjbIwfR~tJ}nN`|KihJjvLkwEfcMu`AfbM`uAtsLfiF|wKruJ|oJ~uN~|HvfRr`GzdUr|DvmW~rBl_Y`f@rxYaf@pxY_sBl_Ys|DvmWs`GzdU_}HxfR}oJ|uN}wKruJusLfiFgbM`uAgcMu`AkvLkwEa|KihJ_uJ{nNkbIyfRueG}kUu`Ea{WwuBiqY")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.205121,-117.964138),new google.maps.LatLng(59.037657,-116.365306))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Inuvik (Mike Zubko), NT [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-34"
po.paths=google.maps.geometry.encoding.decodePath("uv}cLhzumXb`Ai|}@f`Esy{@|yHcww@hiL{yq@vjOsij@f{Qqoa@pxScvW|`UkhMjsUmqBtoUzaFhvTfkPlhSp_ZlgQvvb@ruNvij@nuKzrp@viHtmu@ruDrvx@n|@tkz@o|@tkz@suDtvx@wiHrmu@ouK|rp@suNvij@mgQtvb@mhSr_ZivTfkPuoUxaFksUkqB}`UkhMqxScvWg{Qqoa@wjOuij@iiL{yq@}yHaww@g`Euy{@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=887.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(67.638137,-135.283907),new google.maps.LatLng(68.970196,-131.681649))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lethbridge, AB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-36"
po.paths=google.maps.geometry.encoding.decodePath("{umpHfenoTzf@m~ThuBohTd`Em}R|dGq~PraI_nNftJonKn{K_cH~uL_oDbcMev@jbMzaA`tLjyDpxKrjHtpJrrKv}H~mNhaGnzPd}DvuRjsBd~Sff@trTgf@trTksBb~Se}DvuRiaGnzPw}H`nNupJprKqxKtjHatLhyDkbMzaAccMcv@_vL_oDo{K_cHgtJonKsaIanN}dGq~Pe`Ek}RiuBqhT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.214009,-113.442376),new google.maps.LatLng(50.046546,-112.157068))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lethbridge, AB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-37<br>Excluding the area bounded by a circle of 25 miles radius centred on the following: N49:37:49.00 W112:47:59.00 (Lethbridge County, AB - AD)"
po.paths=google.maps.geometry.encoding.decodePath("qfnqHfenoT~v@e{]feDa|\\fnG}~ZvnJ{eXvcM_tTrjOcmPhaQquKbfRorF`xR{hAxvR|_BhbRtfGn{PrdLncO`uPd|L~sTtgJ|}WlhGzoZlaDxg\\tu@dd]uu@bd]maDxg\\mhG|oZugJ|}We|L~sTocO`uPo{PrdLibRtfGyvRz_BaxR{hAcfRmrFiaQsuKsjOamPwcM_tTwnJ}eXgnG}~ZgeDa|\\")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.047502,-113.699417),new google.maps.LatLng(50.213053,-111.900028))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lloydminster, AB [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-39<br>Excluding the airspace overlying the Cold Lake, AB MTCA."
po.paths=google.maps.geometry.encoding.decodePath("}f|fIbpy~S|f@ozVluBqbVj`EusTdeGgoR|aIswOptJwoLt{K}zHbvL_}DbcM{y@jbMjhA|sLxiEhxKjdIjpJxtLn}HrwO`aGfjR~|DbjTfsBzuUdf@|kVef@zkVgsBzuU_}DbjTaaGfjRo}HrwOkpJxtLixKjdI}sLxiEkbMjhAccM{y@cvL_}Du{K}zHqtJwoL}aIswOeeGgoRk`EusTmuBqbV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.892898,-110.769165),new google.maps.LatLng(53.725435,-109.375835))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Medicine Hat, AB [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-41"
po.paths=google.maps.geometry.encoding.decodePath("uryrHddxbTzf@edUhuBanTd`EsbS~dGgcQraI_rNhtJuqKn{KieH~uLkpDbcMov@lbMnbA~sL|zDpxKbmHrpJzuKv}H~qNfaG`_Qd}DxzRjsBncTdf@dxTef@dxTksBncTe}DvzRgaG`_Qw}H`rNspJzuKqxKbmH_tL|zDmbMnbAccMov@_vLkpDo{KieHitJuqKsaIarN_eGecQe`EsbSiuBanT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.602621,-111.36867),new google.maps.LatLng(50.435157,-110.072996))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norman Wells, NT a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-43"
po.paths=google.maps.geometry.encoding.decodePath("gx~oKtt|dWbg@oha@dvBqe`@laE_a^nfGe}ZfcIu}VzuJ}fRt|Kc~LxvLwhGhcMulAbbMfnBdsLffHfwK`tMboJtrRb|Ht}Vx_GnqZ~{D`k]rrB`h_@ze@zf`@{e@|f`@srB~g_@_|D`k]y_GpqZc|Ht}VcoJrrRgwK`tMesLffHcbMfnBicMslAyvLwhGu|Kc~L{uJ_gRgcIu}VofGe}ZmaE}`^evBse`@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(64.866232,-127.795708),new google.maps.LatLng(65.698768,-125.804848))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norman Wells, NT b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-44"
po.paths=google.maps.geometry.encoding.decodePath("}aprKtt|dWrpAiudA`qF}jbApiKiy}@|tOqfw@vnSe{n@jsVsae@v_YueZxqZwsNph[kxBrc[p~FrcZziRziXj}\\pxUlpf@hrRf{n@`zN`xu@tsJra{@zbFvt~@rkAxn`AskAzn`A{bFtt~@usJta{@azN~wu@irRh{n@qxUjpf@{iXl}\\scZziRsc[p~Fqh[kxByqZysNw_YueZksVsae@wnSc{n@}tOqfw@qiKiy}@aqF_kbA")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(64.449963,-128.790643),new google.maps.LatLng(66.115037,-124.809913))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Peace River, AB [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-46"
po.paths=google.maps.geometry.encoding.decodePath("acvxIb|ykU~f@otXpuBwzWp`EahVleGg~SdbIw_QvtJyoMz{K_rIfvLkjEdcMm}@hbMxnAxsLtyEbxKj}IdpJxuMf}Hx_Qx`GdxSx|Dt|UbsBlkWbf@bcXcf@`cXcsBlkWy|Dt|Uy`GfxSg}Hv_QepJzuMcxKh}IysLvyEibMvnAecMk}@gvLmjE{{K_rIwtJwoMebIy_QmeGg~Sq`EahVquBuzW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.810676,-118.196005),new google.maps.LatLng(56.643213,-116.698439))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Watson Lake, YT [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-48"
po.paths=google.maps.geometry.encoding.decodePath("w`npJbpgqW~f@gu[xuBgxZz`Ek_YzeGolVnbIqbSduJ_eOd|KexJlvLq`FfcM_cAfbMpyApsLltFxwKzfKxoJzlOx|HpbSn`GtdVn|DrpX|rBldZ`f@r~Zaf@r~Z}rBldZo|DrpXo`GtdVy|HnbSyoJzlOywK|fKqsLjtFgbMryAgcM_cAmvLq`Fe|KexJeuJ_eOobIqbS{eGolV{`Ek_YyuBgxZ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.701509,-129.657413),new google.maps.LatLng(60.534046,-127.986476))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yellowknife, NT a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.2.2-50"
po.paths=google.maps.geometry.encoding.decodePath("_ax~JtrnyT`g@w}]~uBm~\\`aE{`[bfGcgXxbImtTluJylPl|KqtKpvL}pFhcMagAdbMzaBlsLnhGpwKbfLnoJ`vPp|HntTd`Gx}Wh|DhoZxrBzf\\~e@|b]_f@~b]yrBxf\\i|DhoZe`Gx}Wq|HntTooJbvPqwK`fLmsLphGebMzaBicMagAqvL}pFm|KstKmuJwlPybIotTcfGcgXaaEy`[_vBm~\\")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(62.046509,-115.3406),new google.maps.LatLng(62.879046,-113.539955))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yellowknife, NT b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.2.2-51"
po.paths=google.maps.geometry.encoding.decodePath("cuiaKb|myThpAwx}@fpFmv{@dhKstw@hsOixq@`mScij@xqVcpa@n~XswW`qZojMjh[}sB~c[d_FndZxhPfkXr}YbzUlub@zsRfij@r{Nbsp@|tJpnu@rcF`xx@|kAjmz@}kAjmz@scF`xx@}tJpnu@s{Ndsp@{sRdij@czUnub@gkXr}YodZxhP_d[d_Fkh[_tBaqZojMo~XqwWyqVcpa@amSeij@isOixq@ehKqtw@gpFov{@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(61.631908,-116.237062),new google.maps.LatLng(63.296981,-112.636271))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cold Lake, AB e) [TCA]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Terminal Control Areas<br>CDAH section: 3.2.3-6"
po.paths=google.maps.geometry.encoding.decodePath("ihvpIvmddT?sr}F??lgN{qs@|mSawm@byWysf@lk[ek^xa^sfUvy_@{oK~q`@{pAfj`@pjFbc_@f}O~}\\t|Xj}Yfaa@ddVldh@bvQv`n@hwLvqr@blGhtu@pyAbfw@qyA`fw@clGhtu@iwLxqr@cvQv`n@edVldh@k}Yfaa@_~\\r|Xcc_@f}Ogj`@pjF_r`@{pAwy_@yoKya^sfUmk[gk^cyWwsf@}mScwm@mgNyqs@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=833.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.409567,-112.011048),new google.maps.LatLng(55.333333,-108.580619))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB a) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-8"
po.paths=google.maps.geometry.encoding.decodePath("imazHjf{vT|n@ahZhmCslYhgF{vWzyHkhUvbKadRp_M_mNlnNigJbnOgwEp}OiaAr|OvsAbkOjgF|iNhsJ`zLlsNz|J~cRltH~aUvbFzjWjjCn|X|m@ruY}m@tuYkjCn|XwbFxjWmtH~aU{|J`dRazLjsN}iNhsJckOlgFs|OtsAq}OiaAcnOgwEmnNigJq_M_mNwbK_dR{yHmhUigFyvWimCulY")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=915.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.623092,-114.809169),new google.maps.LatLng(51.622136,-113.217525))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB b) [TCA]<br>Class C<br>8000ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-9"
po.paths=google.maps.geometry.encoding.decodePath("imazHjf{vT|n@ahZhmCslYhgF{vWzyHkhUvbKadRp_M_mNlnNigJbnOgwEp}OiaAr|OvsAbkOjgF|iNhsJ`zLlsNz|J~cRltH~aUvbFzjWjjCn|X|m@ruY}m@tuYkjCn|XwbFxjWmtH~aU{|J`dRazLjsN}iNhsJckOlgFs|OtsAq}OiaAcnOgwEmnNigJq_M_mNwbK_dR{yHmhUigFyvWimCulY")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=915.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.623092,-114.809169),new google.maps.LatLng(51.622136,-113.217525))
a.airClass="C"
a.altLow="8000"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB c) [TCA]<br>Class C<br>5500ft to 8000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-10"
po.paths=google.maps.geometry.encoding.decodePath("s|`yHjf{vTx^}bQp}A}pPhyCqmOjpE{yMx`GwwKliHaiIxhIqpF`~I_qCrhJim@dhJnu@x|IbxCvfI|uF~fH|kIf~FtwKzmE`wMhwCfhOf|AviPl^vzPm^xzPg|AviPiwCdhO{mE`wMg~FtwK_gH|kIwfI|uFy|IdxCehJlu@shJgm@a~I_qCyhIqpFmiHciIy`GuwKkpE}yMiyComOq}A_qP")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.789599,-114.543907),new google.maps.LatLng(51.455629,-113.482788))
a.airClass="C"
a.altLow="5500"
a.altHigh="8000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB d) [TCA]<br>Class C<br>4800ft to 5500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-11"
po.paths=google.maps.geometry.encoding.decodePath("qe|uHx}oxTknfA???}dDunIq|BmyJcrAmvKge@kgLzFskLtt@_cL~`B}mKfjC{lJjoDaaIjoEwkG~hFonEz{FikCbgGcdAtjGxBhfGpkAfzFxqCxfFrsEtlE~nGnlDlbIhgCjlJb~ArkKfr@j_LxDbgLuf@nbLesAxqKa}BjuJceDtkI")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=961.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.87336,-114.283333),new google.maps.LatLng(51.371973,-113.616591))
a.airClass="C"
a.altLow="4800"
a.altHigh="5500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary, AB e) [TCA]<br>Class C<br>6000ft to 8000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-12"
po.paths=google.maps.geometry.encoding.decodePath("e}puHz_~yT??cwIddJoyJv_G{nK`zCoyKto@}xKkz@emKieDsvJclG{rIwqJtbGifO??~yGrsHtwHf_FpjIziChtIzp@ztI_g@`lIq_CjzHktEv}GehHhzFtkO")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=969.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.882278,-114.650017),new google.maps.LatLng(51.371331,-114.428431))
a.airClass="C"
a.altLow="6000"
a.altHigh="8000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB a) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-14"
po.paths=google.maps.geometry.encoding.decodePath("g`seIbyxyT?u{z@??}xEruF_pF`pDe~FtiBceG``@ydGuh@{|FmrBwmFeyD{wEwzFw{DguHczC}fJetBmnKujAkjLe_@_zLjK}|Lnw@{rLjcBe{K??o@ae`@plByt_@xuEad^pxH{t[tqK}iXn~M{fTv|OyoOvjQ}iJbgRezD`qReFrhRzjD|mQpwIbbPfyNlfNdkSr|KviW`gIlqZ`hFn_]jbCdr^bY~g_@aoAn`_@yvD|{]myG`{[_tJr_Y{cM|kUufO`cQqzPphLw}Qt`GeoRbpAinRcbBwwQacH")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=900.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.727499,-114.555093),new google.maps.LatLng(53.917084,-112.607377))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB b) [TCA]<br>Class C<br>9500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-15"
po.paths=google.maps.geometry.encoding.decodePath("g`seIbyxyT?u{z@??}xEruF_pF`pDe~FtiBceG``@ydGuh@{|FmrBwmFeyD{wEwzFw{DguHczC}fJetBmnKujAkjLe_@_zLjK}|Lnw@{rLjcBe{K??o@ae`@plByt_@xuEad^pxH{t[tqK}iXn~M{fTv|OyoOvjQ}iJbgRezD`qReFrhRzjD|mQpwIbbPfyNlfNdkSr|KviW`gIlqZ`hFn_]jbCdr^bY~g_@aoAn`_@yvD|{]myG`{[_tJr_Y{cM|kUufO`cQqzPphLw}Qt`GeoRbpAinRcbBwwQacH")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=900.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.727499,-114.555093),new google.maps.LatLng(53.917084,-112.607377))
a.airClass="C"
a.altLow="9500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB c) [TCA]<br>Class C<br>7000ft to 9500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-16"
po.paths=google.maps.geometry.encoding.decodePath("g`seIbl{xT?un]??}xEtuF_pF`pDg~FriBeeG``@wdGuh@}|ForBwmFgyD{wEyzFw{DiuHczC_gJctBonKujAmjLc_@azLlK}|Lpw@}rL`bBi|KxiC{yJlmDqlI`nEwpG??v|Awh[b{Dm}YnqGuwWh_JmyTbbLyeQ`xMw`Mj_OsnH|vOatCf~OdHbuO`eDz{Nd|HjsMzhM`}KhgQjzI|sTnmGtkWtxDhlYj~A~sZfAxa[{yAhuZktDznYoiGjoW{vItxTazK`mQaqMloMgzNhcIgtOrlDe~OzOuwOklCy}NyrH")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=911.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.811895,-114.413813),new google.maps.LatLng(53.917085,-112.746148))
a.airClass="C"
a.altLow="7000"
a.altHigh="9500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB d) [TCA]<br>Class C<br>4600ft to 7000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-17"
po.paths=google.maps.geometry.encoding.decodePath("g`seIl||wT??}xEtuF_pF`pDg~FriBeeG``@wdGuh@}|ForBwmFgyD{wEyzFw{DiuHczC_gJctBonKujAmjLc_@azLlK}|Lpw@}rL`bBi|KxiC{yJlmDqlI`nEwpGxgO???dtAi_Vz}Ci{TpbFobSp`HqvP|uI_zM`aKyoJz`Lc{FhtLs_C~zL}@vtLb{BxaL~tFvbKfgJrxItnMpdHnhPdhFfrRbeD`jTh}AhnU|Rf~Uav@jyUo_Cx_UieEdrSoeGvqQc~Hd`OwmJr_LyrKxrHglLn|DgyLd`AoyLs|@wlLezDipKk|H")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.893786,-114.276427),new google.maps.LatLng(53.917085,-112.885401))
a.airClass="C"
a.altLow="4600"
a.altHigh="7000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB e) [TCA]<br>Class C<br>4100ft to 4600ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-18"
po.paths=google.maps.geometry.encoding.decodePath("gtbfIzbouT??mo@}|B_|@olBefAkyAynAqaAf{CwsT{iC_tHmdAypJymN???lx@{mP`cBi|OzmCs_Ojpd@??fn~@iuDpjPc_O|tW")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.483333,-113.7875),new google.maps.LatLng(53.723611,-113.247222))
a.airClass="C"
a.altLow="4100"
a.altHigh="4600"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB f) [TCA]<br>Class C<br>3400ft to 4100ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-19"
po.paths=google.maps.geometry.encoding.decodePath("cabfIlggvT??rYs|BvMcbCxAkdCgHqcCaTs_C_`@gxBb_O}tWhuDqjP?gn~@`|`@???xlEjPbgErtA|{DljCtkDh|DrvC|hFp}BdoG`aB`nHzaArdIz`@nrI?`wI{`@nrI{aArdIaaB`nHq}BdoGsvC~hFukDf|D}{DljCagErtA{lEnI_d[??c~[oyJ??b~[{_N?")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=962.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.110595,-113.911111),new google.maps.LatLng(53.594444,-113.247222))
a.airClass="C"
a.altLow="3400"
a.altHigh="4100"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB g) [TCA]<br>Class C<br>3400ft to 4600ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-20"
po.paths=google.maps.geometry.encoding.decodePath("uxjfInzbuT??asAum@{vAyRmwAlFo}Go_h@xmN?ldAxpJziC~sHg{CvsT")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.611111,-113.724722),new google.maps.LatLng(53.723611,-113.505278))
a.airClass="C"
a.altLow="3400"
a.altHigh="4600"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton, AB h) [TCA]<br>Class C<br>4100ft to 4600ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.2.3-21"
po.paths=google.maps.geometry.encoding.decodePath("cabfIlggvT??rYs|BvMcbCxAkdCgHqcCaTs_C_`@gxBb_O}tWhuDqjP?gn~@`|`@???xlEjPbgErtA|{DljCtkDh|DrvC|hFp}BdoG`aB`nHzaArdIz`@nrI?`wI{`@nrI{aArdIaaB`nHq}BdoGsvC~hFukDf|D}{DljCagErtA{lEnIk_v@?")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=962.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.110595,-113.911111),new google.maps.LatLng(53.594444,-113.247222))
a.airClass="C"
a.altLow="4100"
a.altHigh="4600"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Calgary Intl, AB [CZ]<br>Class C<br>SFC to 3000ft AGL"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.2.4-3"
po.paths=google.maps.geometry.encoding.decodePath("i|_wHx}oxTt}I??gcT??ngBogBvxAifC`iAm|Cfw@anDzc@qzDnOyaEoCkcEeXk_Eil@{uDa_AcgD_pAqsCs~Aw{BojBi`BgsB_bAwxBwa@szBo@ayBz^{sBh_AkkB~}Au_B|yBgqAjrCm`ApfDum@xuDsYz_EwDhdEhN~bEzb@~{Djv@noDjhA|}CbxAvgCjeBrmBroBjpAtvBvp@dzBnI?`tO")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.006197,-114.283333),new google.maps.LatLng(51.239082,-113.828203))
a.airClass="C"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Edmonton Intl, AB [CZ]<br>Class C<br>SFC to 4600ft (2200ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.2.4-5"
po.paths=google.maps.geometry.encoding.decodePath("eyaeIfpftT`JisE~_@wlEvt@_`E~gAimD~xAguCbgBuxBfrBmxAvyBou@n}B_Qn}BbRpyBnv@|qBdyAzfB`yBpxAhuCtgAzlDpt@f_Ev_@vkE`JdrEaJbrEw_@xkEqt@d_EugA|lDqxAfuC{fBbyB}qBdyAqyBnv@o}B`Ro}B}PwyBou@grBmxAcgBuxB_yAiuC_hAgmDwt@_`E_`@ylE")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.193167,-113.774797),new google.maps.LatLng(53.426277,-113.384648))
a.airClass="C"
a.altLow="0"
a.altHigh="4600"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort McMurray, AB [CZ]<br>Class C<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-7"
po.paths=google.maps.geometry.encoding.decodePath("yihyIlpzeT|FwcDpVu~Cje@wtCbs@ifCf_AssBjiAq}AfqAmdAtvAmi@jyA_MhyAvMpvA~i@bqA|dAfiAx}A~~@rsB|r@`fCfe@htClV`~CzF~bD{F~bDmV`~Cge@htC}r@`fC__ArsBgiAx}AcqA|dAqvA~i@iyAvMkyA_MuvAki@gqAodAkiAq}Ag_AssBcs@ifCke@wtCqVu~C")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.569944,-111.376007),new google.maps.LatLng(56.736451,-111.073104))
a.airClass="C"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Springbank, AB [CZ]<br>Class C<br>SFC to 5500ft (1600ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.2.4-9"
po.paths=google.maps.geometry.encoding.decodePath("yygwHx}oxTnpV???vt@jgBxh@ptB~[z}Bp~FBJnmNqiGH??qa@b{Ban@jpBcy@pbBobAdrAejAp_AwoAbk@gsAnUmtAFgsA_U}oAuj@ijAg_AubAarAgy@qbBgn@qpBsa@m{BowFFK_pNbmFB??|[{}Bth@mtBzt@}fB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.981894,-114.506604),new google.maps.LatLng(51.221353,-114.283333))
a.airClass="C"
a.altLow="0"
a.altHigh="5500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cold Lake, AB [CZ]<br>Class D<br>SFC to 8000ft (6200ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-12"
po.paths=google.maps.geometry.encoding.decodePath("omelI|ce`TlPavIzr@okItsAuvHzqBkxGnlCmqFzbDccEdtD}nC~_EkvAxeEk[veEj^n_E`yAnsDxpC~aDddEtkClqF`qBhwG|rAvtHlr@zhIhP`sIiP`sImr@xhI}rAvtHaqBjwGukCjqF_bDddEosDzpCo_E`yAweEj^yeEk[_`EmvAetD{nC{bDccEolCmqF{qBkxGusAuvH{r@okI")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=969.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.225453,-110.610535),new google.maps.LatLng(54.591769,-109.981131))
a.airClass="D"
a.altLow="0"
a.altHigh="8000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Deer, AB [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-14"
po.paths=google.maps.geometry.encoding.decodePath("sk~}HpvcvT|FsrCnVcnCje@eeCbs@ixBf_AqgBjiAwsAfqAi}@rvAae@jyAsKjyAdLpvAne@bqAt}@diA|sA`_ArgB|r@`xBhe@zdClVrmCzF`rC{F`rCmVrmCie@|dC}r@`xBa_ApgBeiA|sAcqAt}@qvAne@kyAdLkyAsKsvAae@gqAi}@kiAwsAg_AqgBcs@gxBke@geCoVcnC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.095357,-114.028824),new google.maps.LatLng(52.261865,-113.757287))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Villeneuve, AB [CZ]<br>Class D<br>SFC to 4600ft (2300ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-16"
po.paths=google.maps.geometry.encoding.decodePath("eeagIfe|uT|FywCnVcsCle@}iC`s@o|Bf_AgkBjiAuvAfqAo_AtvAkf@jyAaLhyArLpvAzf@bqA|_AfiAzvA~~@fkB~r@h|Bfe@piClVrrCzFdwC{FdwCmVrrCge@piC_s@h|B__AfkBgiAzvAcqA|_AqvAzf@iyArLkyAaLuvAkf@gqAo_AkiAuvAg_AgkBas@o|Bme@}iCoVcsC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.584246,-113.994964),new google.maps.LatLng(53.750754,-113.713925))
a.airClass="D"
a.altLow="0"
a.altHigh="4600"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Whitehorse Intl, YT [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-18"
po.paths=google.maps.geometry.encoding.decodePath("iq`rJ`pkwXzFexDpVorDle@igDbs@_wCf_AcbCjiAciBhqAamAtvAqn@jyAuNhyArOpvAjo@bqAtmAdiAniB~~@`bC|r@tvCfe@vfDjVrqDzFfwD{FdwDkVtqDge@tfD}r@tvC__AbbCeiAniBcqArmAqvAlo@iyArOkyAuNuvAqn@iqAamAkiAeiBg_AabCcs@awCme@igDqVorD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.626191,-135.238503),new google.maps.LatLng(60.792698,-134.898164))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yellowknife, NT [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-20"
po.paths=google.maps.geometry.encoding.decodePath("u_w|JtrnyT|F}bEpV_}Dle@cqDbs@}_Df_AuiCliAkoBhqAoqArvAiq@jyAqOjyArPnvAfr@bqAfrAdiAtoB~~@viC|r@n_Dde@lpDlV`|DzFzaE{F|aEmV~{Dee@lpD}r@p_D__AtiCeiAvoBcqAfrAovAfr@kyArPkyAqOsvAiq@iqAqqAmiAioBg_AwiCcs@{_Dme@eqDqV}|D")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(62.379524,-114.620353),new google.maps.LatLng(62.546031,-114.260202))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Christina Lake, AB [CZ]<br>Class E<br>SFC to 3000ft (1100ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-23"
po.paths=google.maps.geometry.encoding.decodePath("{c`sIv|}bTzFk_DpVozCje@ypCbs@ubCf_AspBjiA_{AfqAubAtvAih@jyAsLhyAhMpvAzh@bqAbcAfiAf{A~~@rpB|r@lbCfe@lpClVzyCzFt~C{Fv~CmVzyCge@jpC}r@nbC__AppBgiAh{AcqA`cAqvAzh@iyAjMkyAuLuvAgh@gqAubAkiAa{Ag_AqpBcs@wbCke@ypCqVozC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.545002,-110.897833),new google.maps.LatLng(55.711509,-110.6029))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Conklin, AB [CZ]<br>Class E<br>SFC to 3000ft (1100ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-25"
po.paths=google.maps.geometry.encoding.decodePath("skmsIvfefT|Fu_DnVwzCle@aqCbs@}bCd_AypBjiAe{AhqAwbArvAkh@jyAuLjyAjMpvA|h@bqAfcAdiAj{A`_AxpB|r@tbCfe@tpClVbzCzF~~C{F~~CmVbzCge@tpC}r@tbCa_AxpBeiAj{AcqAfcAqvA|h@kyAjMkyAuLsvAkh@iqAwbAkiAe{Ae_AypBcs@}bCme@aqCoVwzC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.612796,-111.427047),new google.maps.LatLng(55.779304,-111.131603))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dawson Creek, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-27"
po.paths=google.maps.geometry.encoding.decodePath("{lvsIvfp|U|F{_DnV}zCje@gqCbs@ccCf_A}pBjiAg{AhqA{bArvAmh@jyAuLhyAjMpvA~h@dqAhcAdiAn{A~~@|pB|r@zbCfe@xpClVjzC|Fd_D}Fb_DmVjzCge@xpC}r@zbC__A|pBeiAn{AeqAhcAqvA~h@iyAjMkyAuLsvAmh@iqA{bAkiAg{Ag_A}pBcs@ccCke@gqCoV}zC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.65908,-120.330897),new google.maps.LatLng(55.825587,-120.035103))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort MacKay/Albian, AB [CZ]<br>Class E<br>SFC to 3500ft (2500ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-29"
po.paths=google.maps.geometry.encoding.decodePath("unv{IvkyfTcvYx}`@gkF{vR`wYs|`@hjFtuR")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.136592,-111.556414),new google.maps.LatLng(57.311219,-111.281617))
a.airClass="E"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort MacKay/Firebag, AB [CZ]<br>Class E<br>SFC to 3500ft (1700ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-31"
po.paths=google.maps.geometry.encoding.decodePath("s|z{IfbvdTcnl@n@?_aWfnl@hBCd|V")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.159283,-111.0382),new google.maps.LatLng(57.392125,-110.915003))
a.airClass="E"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort MacKay/Horizon, AB [CZ]<br>Class E<br>SFC to 3500ft (2600ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-33"
po.paths=google.maps.geometry.encoding.decodePath("uaw|InkgiTwe_@quFtt@_|Vpe_@|xFot@rxV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.294917,-111.781844),new google.maps.LatLng(57.468397,-111.619992))
a.airClass="E"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Nelson, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-35"
po.paths=google.maps.geometry.encoding.decodePath("wvrfJzugkV|F_nDnVuhDle@c~Cbs@unCf_A}zBjiAmcBhqAwhAtvA_l@jyA{MhyAtNpvAtl@bqAjiAdiAtcB~~@|zB|r@lnCfe@p}ClV|gDzFdmD{FdmDmV|gDge@p}C}r@lnC__A|zBeiAtcBcqAhiAqvAvl@iyAtNkyA{MuvA_l@iqAyhAkiAkcBg_A}zBcs@unCme@c~CoVuhD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.753135,-122.757826),new google.maps.LatLng(58.919643,-122.436063))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort St. John, BC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-37"
po.paths=google.maps.geometry.encoding.decodePath("cgwvIta}_VzF}aDpV}|Cje@csCbs@ydCf_AmrBjiAm|AfqAwcAtvA}h@jyA{LhyApMpvApi@bqAddAfiAt|A~~@lrB|r@pdCfe@trClVh|CzFfaD{FfaDmVh|Cge@trC}r@rdC__AjrBgiAv|AcqAddAqvApi@iyApMkyA{LuvA}h@gqAwcAkiAo|Ag_AkrBcs@ydCke@esCqV}|C")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.154802,-120.890083),new google.maps.LatLng(56.321309,-120.590472))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Simpson, NT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-39"
po.paths=google.maps.geometry.encoding.decodePath("aymxJb`~bV|Fm~DpVsxDle@amDbs@e|Cf_AqfCjiAwlBhqAuoAtvAep@jyAeOhyAdPpvA`q@bqAjpAdiAbmB~~@pfC|r@x{Cde@llDlVtwDzFl}D{Fl}DmVvwDee@jlD}r@z{C__AnfCeiAbmBcqAjpAqvA`q@iyAdPkyAeOuvAcp@iqAuoAkiAylBg_AofCcs@g|Cme@amDqVqxD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(61.677024,-121.412618),new google.maps.LatLng(61.843531,-121.060715))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fort Smith, NT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-41"
po.paths=google.maps.geometry.encoding.decodePath("ejzmJtfjjT|FgtDnVwnDle@ycDbs@{sCf_Ai_CjiA_gBhqAkkAtvAsm@jyAkNhyAhOpvAjn@bqA~kAdiAfgB~~@j_C|r@nsCfe@fcDjV|mD|FjsD}FjsDkV~mDge@dcD}r@psC__Ah_CeiAhgBcqA~kAqvAjn@iyAfOkyAkNuvAqm@iqAmkAkiA}fBg_Ak_Ccs@{sCme@wcDoVwnD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.938969,-112.126897),new google.maps.LatLng(60.105476,-111.793659))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Grande Prairie, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-43"
po.paths=google.maps.geometry.encoding.decodePath("qphpIfvrtU|Fs}CnVuxCje@eoCbs@gaCf_AioBjiA_zAhqA{aArvAyg@jyAqLhyAdMpvAjh@bqAjbAfiAdzA~~@hoB|r@`aChe@vnCjVbxC|F||C}Fz|CkVbxCie@vnC}r@`aC__AhoBgiAdzAcqAjbAqvAjh@iyAdMkyAqLsvAyg@iqA{aAkiA_zAg_AioBcs@gaCke@eoCoVuxC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.096469,-119.030802),new google.maps.LatLng(55.262976,-118.739198))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Hay River, NT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-45"
po.paths=google.maps.geometry.encoding.decodePath("q_zrJhytaU|F{xDnVgsDle@_hDbs@uwCf_AsbCliAqiBfqAkmAtvAwn@jyAwNhyAtOpvAro@bqA|mAdiA|iB~~@rbC|r@hwCfe@lgDjVjrD|F|wD}F~wDkVjrDge@jgD}r@hwC__ArbCeiA|iBcqA~mAqvApo@iyAvOkyAwNuvAyn@gqAimAmiAsiBg_AsbCcs@swCme@ahDoVesD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.756469,-115.95364),new google.maps.LatLng(60.922976,-115.611915))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="High Level, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-47"
po.paths=google.maps.geometry.encoding.decodePath("_wheJnvbjU|F}lDnVsgDle@c}Cbs@{mCf_AczBjiAybBhqAihAtvAwk@jyAwMhyApNpvAll@bqAzhAdiA`cB~~@dzB|r@pmCfe@p|ClV|fDzFblD{FblDmVzfDge@r|C}r@pmC__AbzBeiA`cBcqAzhAqvAll@iyArNkyAyMuvAuk@iqAkhAkiAwbBg_AezBcs@ymCme@c}CoVsgD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.538135,-117.324613),new google.maps.LatLng(58.704643,-117.004832))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Inuvik (Mike Zubko), NT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-49"
po.paths=google.maps.geometry.encoding.decodePath("k|k`LhzumX|FgtFpVylFne@}}Eds@ghEf_AolDniAmkChqAafBtvAw}@jyAoShyAfUpvAf_A`qAhgBbiA~kC~~@nlDzr@tgEde@v|EjVfkFzFnrF{FprFkVdkFee@x|E{r@tgE__AnlDciA~kCaqAfgBqvAh_AiyAfUkyAoSuvAw}@iqAcfBoiAkkCg_AolDes@ihEoe@}}EqVwlF")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(68.220913,-133.707982),new google.maps.LatLng(68.38742,-133.257574))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kirby Lake, AB [CZ]<br>Class E<br>SFC to 3000ft (700ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-51"
po.paths=google.maps.geometry.encoding.decodePath("ihvpIbjccT??}sA`_@_vAhBcuAeUwqAen@elAyeAkdAq{Asz@unBeo@s~Bmb@akCuTqsCiF{wChF{wCtTosClb@ckCdo@s~Brz@unBjdAo{AdlA{eAvqAcn@buAgU~uAjB|sA`_@?h{u@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.333333,-110.783767),new google.maps.LatLng(55.43887,-110.491427))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lethbridge, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-53"
po.paths=google.maps.geometry.encoding.decodePath("qtlnHfenoT|FwjCnVmfCle@c~B`s@wqBd_A_bBjiAgoAhqAaz@rvA_c@jyA_KhyAlKpvAnc@dqAhz@diAjoA`_A`bB|r@rqBhe@v}BlV`fCzFfjC{FfjCmV`fCie@v}B}r@rqBa_A~aBeiAloAeqAhz@qvAlc@iyAlKkyA}JsvAac@iqA_z@kiAgoAe_A_bBas@yqBme@a~BoVofC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.547024,-112.928256),new google.maps.LatLng(49.713531,-112.671188))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lloydminster, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-55"
po.paths=google.maps.geometry.encoding.decodePath("se{dIbpy~S|FqvCpV{qCje@whCbs@m{Bd_AkjBjiA}uAhqA__ArvA_f@jyA}KhyAnLpvApf@dqAh_AdiAdvA`_AhjB|r@f{Bfe@lhClVjqCzF|uC{FzuCmVjqCge@lhC}r@f{Ba_AhjBeiAdvAeqAh_AqvApf@iyAnLkyA}KsvA_f@iqA__AkiA}uAe_AkjBcs@m{Bke@whCqV{qC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.225913,-110.211837),new google.maps.LatLng(53.39242,-109.933163))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Medicine Hat, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-57"
po.paths=google.maps.geometry.encoding.decodePath("kqxpHddxbT|F{kCnVqgCje@a_Cbs@wrBd_AybBjiA{oAhqAoz@rvAic@jyAaKhyAnKpvAvc@dqAxz@diA`pA`_AxbB|r@prBhe@v~BlVdgCzFjkC{FjkCmVbgCie@x~B}r@nrBa_AxbBeiA`pAeqAxz@qvAvc@iyApKkyAaKsvAic@iqAoz@kiA{oAe_AybBcs@wrBke@a_CoVqgC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.935635,-110.850404),new google.maps.LatLng(50.102143,-110.591263))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Namao, AB (Heliport) [CZ]<br>Class E<br>SFC to 4100ft (1800ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-59"
po.paths=google.maps.geometry.encoding.decodePath("q{{fI|~wsT??rp@yuNxtAogN??bdAoi@hgAwVnhAiEjhAjJ`fAt^?x{^ymN?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.644444,-113.505278),new google.maps.LatLng(53.723611,-113.33506))
a.airClass="E"
a.altLow="0"
a.altHigh="4100"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norman Wells, NT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-61"
po.paths=google.maps.geometry.encoding.decodePath("}v}mKtt|dW|FwwEpVcqEle@_dEbs@}pDh_AkxCliAe{BhqAezAtvAqv@jyAgQhyApRpvAvw@`qAb{AdiAr{B~~@jxCzr@lpDde@dcElV|oEzFjvE{FlvEmV|oEee@bcE{r@lpD__AlxCeiAr{BaqAb{AqvAtw@iyApRkyAeQuvAqv@iqAgzAmiAe{Bi_AkxCcs@{pDme@adEqVcqE")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(65.199246,-126.99938),new google.maps.LatLng(65.365754,-126.601176))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Peace River, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-63"
po.paths=google.maps.geometry.encoding.decodePath("uauvIb|ykUzF{aDpV}|Cje@csCbs@wdCf_AkrBjiAm|AhqAwcArvA}h@jyAyLjyApMnvAni@dqAddAdiAt|A~~@jrB|r@pdCfe@rrClVh|CzFdaD{FdaDmVf|Cge@trC}r@ndC__AjrBeiAt|AeqAddAovApi@kyApMkyA{LsvA}h@iqAucAkiAo|Ag_AkrBcs@wdCke@csCqV{|C")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.143691,-117.596984),new google.maps.LatLng(56.310198,-117.29746))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Primrose, AB [CZ]<br>Class E<br>SFC to 3000ft (700ft AAE)"
mt="Control Zone<br>CDAH section: 3.2.4-65"
po.paths=google.maps.geometry.encoding.decodePath("ihvpItyzeT??_dApcBsmAbkA{sAhr@swAzWwxAgAcwAm\\_sAuv@ilAkoAicAseBix@yxBok@mhCm]}sCmN_{C?k}ClN}zCl]}sCnk@mhChx@{xBhcAseBhlAioA~rAwv@bwAk\\vxAiArwAzWzsAhr@rmAbkA~cArcB?thh@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.333333,-111.266498),new google.maps.LatLng(55.473548,-110.974097))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Watson Lake, YT [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-67"
po.paths=google.maps.geometry.encoding.decodePath("m_mnJbpgqW|FytDpVgoDje@idDbs@gtCf_Aw_CliAggBhqAskArvAwm@jyAkNjyAhOnvAnn@bqAflAdiApgB`_Av_Czr@|sCfe@tcDlVlnDzF|sD{FzsDmVnnDge@tcD{r@|sCa_Av_CeiApgBcqAflAovAnn@kyAhOkyAkNsvAwm@iqAskAmiAggBg_Aw_Ccs@itCke@gdDqVgoD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(60.034524,-128.989047),new google.maps.LatLng(60.201031,-128.654842))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Whitecourt, AB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.2.4-69"
po.paths=google.maps.geometry.encoding.decodePath("sf~iIrquaU|FqyCnVytCle@qkC`s@}}Bf_AolBjiAuwAhqAg`ArvAyf@jyAeLhyAxLpvAhg@dqAt`AdiAzwA`_AnlB|r@v}Bfe@bkClVhtCzF|xC{F|xCmVhtCge@bkC}r@v}Ba_AnlBeiA|wAeqAr`AqvAhg@iyAxLkyAeLsvAyf@iqAg`AkiAuwAg_AolBas@}}Bme@okCoV{tC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.060635,-115.928798),new google.maps.LatLng(54.227143,-115.644536))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Atikokan Muni, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-4<br>Excluding the airspace under the jurisdiction of the Minneapolis ARTCC"
po.paths=google.maps.geometry.encoding.decodePath("w|ejHhdinPxVk|KveAqoKnrBqvJv{C{qI``E}bHn~EckFbvFclDdfGchBdnG}`@|mG~d@neGrkB`uFvnDf}EplFv~D|bHlzCnpInqBzsJ`eA`lKrVhxKsVhxKaeA~kKoqBzsJmzCppIw~D|bHg}EnlFauFvnDoeGrkB}mG~d@enG}`@efGahBcvFelDo~EckFa`E}bHw{C{qIorBqvJweAqoK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.524128,-92.017589),new google.maps.LatLng(49.02365,-91.259633))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Brandon Muni, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-6"
po.paths=google.maps.geometry.encoding.decodePath("wwcqHts`aRzVafLveAayKprBi_Kt{C{yIb`EwiHp~EqpFbvFepDdfGmjBdnGua@|mG~e@neGdnB`uF~rDd}E`rFv~DviHjzCjxInqBn|J`eAfuKpVxaLqVvaLaeAfuKoqBp|JkzCjxIw~DviHe}E`rFauF|rDoeGfnB}mG~e@enGua@efGojBcvFcpDq~EqpFc`EyiHu{CyyIqrBk_KweA_yK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.659961,-100.338661),new google.maps.LatLng(50.159483,-99.563005))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Churchill, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-8"
po.paths=google.maps.geometry.encoding.decodePath("s{_gJrpa}PzVamO|eAw|NvrBq|M~{CymLj`EuqJx~EmjHhvFczEhfGmcCfnG_i@zmGjp@jeG|iCxtF|~E~|E~lHl~DvqJbzCdkLhqBxwM|dAdvNnVteOoVreO}dAfvNiqBvwMczCfkLm~DtqJ_}E~lHytF~~EkeG|iC{mGjp@gnG_i@ifGmcCivFezEy~EkjHk`EwqJ_|CwmLwrBs|M}eAw|N")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.487461,-94.538482),new google.maps.LatLng(58.986983,-93.575962))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dauphin, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-10"
po.paths=google.maps.geometry.encoding.decodePath("ellxHbotaRzV_qLveAqcLprBgiKv{CwbJd`EkqHp~EwvFdvFstDdfGcmBdnGmb@|mG`g@leGbqB`uFrwDd}EhxFt~DlqHjzCbaJlqBffK`eAn_LpVllLqVjlLaeAn_LmqBffKkzCbaJu~DlqHe}EhxFauFrwDmeGbqB}mG`g@enGmb@efGcmBevFstDq~EwvFe`EkqHw{CwbJqrBgiKweAqcL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.851072,-100.450235),new google.maps.LatLng(51.350594,-99.654765))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dryden Regional, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-12"
po.paths=google.maps.geometry.encoding.decodePath("{otpH~aauPxVkeLxeAkxKnrBu~Jv{CiyIb`EgiHn~EepFdvF{oDbfGijBdnGsa@|mGze@neG`nB`uFtrDf}EtqFt~DfiHlzCxwIlqB|{J`eAptKrVbaLsVbaLaeAptKmqB|{JmzCxwIu~DhiHg}EtqFauFrrDoeG`nB}mGze@enGsa@cfGgjBevF{oDo~EepFc`EiiHw{CiyIorBu~JyeAkxK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.581906,-93.131368),new google.maps.LatLng(50.081428,-92.356965))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Flin Flon, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-14"
po.paths=google.maps.geometry.encoding.decodePath("yagnIjurkRzVuvMxeAchMrrBkkLz{CoaKf`EwkIt~E}kGfvF_dEdfGivBfnGee@zmGzj@leGf{B|tFvgEb}E|mGp~DvkIhzCn_KjqBtgL~dAbcMpV~pMqV~pM_eAbcMkqBtgLizCn_Kq~DxkIc}EzmG}tFvgEmeGh{B{mGxj@gnGee@efGgvBgvFadEu~E}kGg`EwkI{{CoaKsrBkkLyeAchM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.428295,-102.113646),new google.maps.LatLng(54.927817,-101.249687))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Geraldton (Greenstone Regional), ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-16"
po.paths=google.maps.geometry.encoding.decodePath("qbjpHnjsqOxV}dLxeA{wKnrBi~Jv{C{xIb`E}hHp~E}oFbvFuoDdfGejBdnGsa@|mGze@leG|mB`uFlrDf}ElqFt~D|hHlzClwInqBn{J`eAbtKpVt`LqVr`LaeAdtKoqBn{JmzClwIu~D|hHg}ElqFauFlrDmeG|mB}mGxe@enGqa@efGejBcvFuoDq~E}oFc`E}hHw{C{xIorBi~JyeA{wK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.528572,-87.32622),new google.maps.LatLng(50.028094,-86.552669))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gillam, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-18"
po.paths=google.maps.geometry.encoding.decodePath("kboxI|caaQzVmkNzeAg|MtrBe~L|{CkrKf`EizIv~EqwGhvFolEffGi{BdnGuf@|mG~l@jeGz`C|tFppE`}ExyGn~DfzIfzCfpKhqB`zL~dAtvMpVbeNqVbeN_eAtvMiqB`zLgzCfpKo~DfzIa}ExyG}tFrpEkeGz`C}mG|l@enGsf@gfGk{BivFmlEw~EswGg`EgzI}{CmrKurBe~L{eAg|M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.107739,-95.161374),new google.maps.LatLng(56.607261,-94.259737))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kenora, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-20"
po.paths=google.maps.geometry.encoding.decodePath("aalpH`h}~PxV_eLxeA_xKnrBk~Jv{C}xIb`E_iHp~E_pFbvFwoDdfGejBdnGqa@|mGxe@leG|mB`uFnrDf}EnqFt~D~hHlzCnwInqBp{J`eAftKpVv`LqVv`LaeAftKoqBp{JmzCnwIu~D~hHg}EnqFauFnrDmeG|mB}mGze@enGsa@efGejBcvFwoDq~E}oFc`EaiHw{C}xIorBk~JyeA_xK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.538572,-94.749911),new google.maps.LatLng(50.038094,-93.9762))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Ronge (Barber Field), SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-22"
po.paths=google.maps.geometry.encoding.decodePath("cpcqIb~maSxVi|MzeAqmMrrBopLz{CafKf`EwoIt~EaoGfvFifEffGuwBfnGqe@zmGlk@leGx|B|tFbjEb}EbqGp~DtoIfzC`dKjqBtlL~dAjhMpVnvMqVnvM_eAjhMkqBtlLgzC`dKq~DtoIc}EbqG}tFbjEmeGx|B{mGlk@gnGqe@gfGuwBgvFifEu~EaoGg`EwoI{{CafKsrBopL{eAqmM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.901628,-105.699035),new google.maps.LatLng(55.40115,-104.824854))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lynn Lake, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-24"
po.paths=google.maps.geometry.encoding.decodePath("g_r{Itl|gRxVerN|eAubNtrBidMz{C{wKh`E}~Iv~Ek{GhvFgoEhfG}|BdnGcg@zmGrm@jeGtbC|tFnsE`}Er}Gn~D~~IdzCpuKhqB``M~dA||MpVtkNqVrkN_eA||MiqB``MezCruKo~D|~Ia}Er}G}tFnsEkeGtbC{mGrm@enGcg@ifG}|BivFgoEw~Ei{Gi`E__J{{C{wKurBgdM}eAwbN")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.614128,-101.533015),new google.maps.LatLng(57.11365,-100.619207))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Battleford (Cameron McIntosh), SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-26"
po.paths=google.maps.geometry.encoding.decodePath("ggrbIpitsSxVsaMxeAssLrrBgxKx{CgpJd`E_}Hr~Ea`GdvFm{DdfGcqBdnGuc@|mGvh@leGruB~tFt~Dd}ExaGr~D~|HjzCnnJjqB|tK`eAdoLpVp|LqVn|LaeAdoLkqB|tKkzCnnJs~D~|He}ExaG_uFv~DmeGpuB}mGvh@enGuc@efGcqBevFk{Ds~Ea`Ge`E_}Hy{CipJsrBgxKyeAssL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.519406,-108.656416),new google.maps.LatLng(53.018928,-107.830806))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norway House, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-28"
po.paths=google.maps.geometry.encoding.decodePath("qoziI~detQzVmnMxeAc`MrrB{cLx{CyzJf`E_fIr~EggGfvFu`EffGgtBdnGsd@|mG`j@jeG`yB~tFddEb}EdiGr~D~eIhzCzxJjqBj`L~dAh{LpV~hMqV~hM_eAj{LkqBh`LizCzxJs~D~eIc}EdiG_uFfdEkeG`yB}mG~i@enGqd@gfGitBgvFs`Es~EigGg`E_fIy{CwzJsrB}cLyeAc`M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.708572,-98.268656),new google.maps.LatLng(54.208094,-97.419678))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Albert (Glass Field), SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-30"
po.paths=google.maps.geometry.encoding.decodePath("odieIxe~cSxVgfMzeAgxLprBo|Kx{CctJd`Eg`It~EwbGdvFi}DdfGirBfnG_d@zmGdi@leGzvB~tFv`Ed}EndGr~Dh`IhzChrJjqBbyK`eArsLpV`aMqVbaMaeArsLkqBbyKizChrJs~Df`Ie}EpdG_uFt`EmeGzvB{mGdi@gnG_d@efGirBevFi}Du~EubGe`Ei`Iy{CctJqrBo|K{eAexL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.964406,-106.089858),new google.maps.LatLng(53.463928,-105.255698))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Lake, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-32"
po.paths=google.maps.geometry.encoding.decodePath("ohlxHp}m{P~YyjNhoAs{M`bCu}LvpD_rK~yE_zIn|FmwGdwGmlEjiHk{BjrHyf@~qHtl@lhHp`CvuGhpEvzFnyG`xE|yI~nD~oKr`CxyLjnAlvMtY|dNuY|dNknAlvMs`CzyL_oD|oKaxE~yIwzFlyGwuGhpEmhHp`C_rHvl@krH{f@kiHk{BewGmlEo|FmwG_zE_zIwpD_rKabCu}LioAs{M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=952.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.783882,-94.243491),new google.maps.LatLng(51.350007,-93.34262))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Regina, SK [TA]<br>Class E<br>3000ft to 12500ft"
mt="Transition Area<br>CDAH section: 3.3.1-34<br>Excluding the Moose Jaw, SK MTCA."
po.paths=google.maps.geometry.encoding.decodePath("switHlpy}RxVwjLxeAq}KprBscKv{Cu}Ib`E_mHp~EgsFbvFarDdfGskBdnG_b@|mGlf@leGnoB`uF|tDf}EvtFt~D`mHjzCb|InqBv`K`eAryKpVjfLqVhfLaeAtyKoqBt`KkzCd|Iu~D~lHg}ExtFauF|tDmeGnoB}mGlf@enG_b@efGskBcvFarDq~EgsFc`EamHw{Cs}IqrBscKyeAq}K")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.182183,-105.057923),new google.maps.LatLng(50.681705,-104.273744))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saskatoon/John G. Diefenbaker Intl, SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-36"
po.paths=google.maps.geometry.encoding.decodePath("uk}~HfxfjSzVm{LxeAumLprBwrKv{CgkJd`EuxHr~Es|FdvF{xDdfGuoBdnGec@|mG`h@leG~sB`uF`|Db}Eh~Ft~DtxHjzCpiJjqBnoK`eAliLpVpvLqVnvLaeAliLkqBnoKkzCpiJu~DtxHc}Eh~FauFb|DmeG|sB}mGbh@enGgc@efGsoBevF}xDs~Eq|Fe`EwxHw{CgkJqrBurKyeAumL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.921072,-107.106953),new google.maps.LatLng(52.420594,-106.292491))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sioux Lookout, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-38"
po.paths=google.maps.geometry.encoding.decodePath("wskrH|f}oPxV{gLveAwzKprB_aKv{Ck{Ib`E_kHp~EsqFbvF{pDdfG}jBdnGya@|mGdf@leGtnB`uFvsDf}EbsFt~D~jHlzCzyIlqBb~J`eA~vKrVncLsVpcLaeA|vKmqBd~JmzCxyIu~D`kHg}EbsFauFtsDmeGvnB}mGbf@enGya@efG{jBcvF}pDq~EqqFc`EakHw{Ci{IqrB_aKweAwzK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.864128,-92.294757),new google.maps.LatLng(50.36365,-91.515799))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southport, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-40"
po.paths=google.maps.geometry.encoding.decodePath("o~uqHvbyvQl`@mpQhbB_~P`aDyyOxzE}dNvmGeaLhxHwpIhyIevFroJitCvzJkn@fzJvv@fnJv{CdwIt{FvuHtsI~jGdaLdxE~aN|~ChtO|`BrvP|_@~gQ}_@`hQ}`BrvP}~ChtOexE~aN_kGdaLwuHtsIewIr{FgnJv{CgzJvv@wzJin@soJktCiyIevFixHupIwmGgaLyzE}dNaaDwyOibBa~P")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=941.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.55339,-98.816768),new google.maps.LatLng(50.252721,-97.73101))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Swift Current, SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-42"
po.paths=google.maps.geometry.encoding.decodePath("slnsH|hhpSxVoiLxeAi|KprBmbKt{Cs|Ib`EelHp~EorFdvFqqDdfGikBdnG{a@|mGhf@leGboB`uFltDf}E~sFt~DdlHjzCb{InqBp_K`eAlxKpVbeLqVbeLaeAlxKoqBr_KkzC`{Iu~DdlHg}E~sFauFltDmeGdoB}mGhf@enG}a@efGikBevFqqDq~EorFc`EclHu{Cu|IqrBmbKyeAi|K")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.042183,-108.08149),new google.maps.LatLng(50.541705,-107.299621))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="The Pas, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-44"
po.paths=google.maps.geometry.encoding.decodePath("ca}iIlj_hRxVsnMzeAg`MrrBadLx{C{zJd`EafIt~EkgGfvFw`EdfGitBdnGsd@|mG`j@leGbyB~tFfdEb}EfiGp~DbfIhzC~xJjqBn`L`eAl{LpVdiMqVbiMaeAl{LkqBn`LizC~xJq~DbfIc}EfiG_uFfdEmeGbyB}mG`j@enGsd@efGitBgvFu`Eu~EkgGe`EcfIy{C{zJsrBadL{eAg`M")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.721628,-101.515733),new google.maps.LatLng(54.22115,-100.666489))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thompson, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-46"
po.paths=google.maps.geometry.encoding.decodePath("}lbuI~aitQzVidNzeAiuMtrBwwLz{CslKf`EiuIv~EqsGfvFqiEffGsyBdnGcf@|mGdl@jeG~~B|tFpmE`}EtuGp~DhuIfzCnjKjqBvsL|dA|oMpVf~MqVf~M}dA|oMkqBxsLgzCljKq~DhuIa}EvuG}tFpmEkeG|~B}mGfl@enGef@gfGqyBgvFsiEw~EqsGg`EiuI{{CslKurBwwL{eAguM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.55135,-98.308522),new google.maps.LatLng(56.050872,-97.419811))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON [TA]<br>Class E<br>2000ft to 12500ft"
mt="Transition Area<br>CDAH section: 3.3.1-48"
po.paths=google.maps.geometry.encoding.decodePath("ssffHfae`Pkv\\muy@??fcFmmE`tFwxCzaGwwA`hGiTrfGrm@p}F|oBfmF|nD|uEthFrxDt{G|uCjfIznBvgJtdAx~JnXxjKkRpkKw~@`aKiiBnkJ{pCpkIctD~aHkrE`pFmjFbwDw{FxxBgfGnk@spAc~gA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=962.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.1222,-89.6975),new google.maps.LatLng(48.524167,-88.948097))
a.airClass="E"
a.altLow="2000"
a.altHigh="12500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.3.1-49 [TA]<br>Class E<br>3000ft to 12500ft"
mt="Transition Area<br>CDAH section: 3.3.1-49"
po.paths=google.maps.geometry.encoding.decodePath("ssffHfae`PrpAb~gA??gfGOqaGqmAcuFenCoaF{jEogE{aGsgDoqH{bCixIkzAeuJgo@ggKsB_nK~g@ciKpsA{xJn|Bu}I~aDmxHr~DerGjv\\luy@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=969.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.358889,-89.6975),new google.maps.LatLng(48.621076,-89.023333))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-51"
po.paths=google.maps.geometry.encoding.decodePath("ewpqHzq{oQ??qy@qeHsWaqHlHesHhj@_lHxjAw{GbiB_cGddCmbFf{Ce{DrmDinCzzDe}AlbEmi@fdEnIf_EjbAfg`@`sO??hdG~xCbnFd`FnrEtzG~pDbmIjjCbvJ~_BrtK|r@xgLhDdoLih@pjL}uA`zKaaC~}JohDjwIkkE|fHkhFdnF}~FrnDinGziB_vG`b@yuGae@ymGgmBa~ForDagFyrFmiEilH_fDi}Ig}BwdK}nLg_q@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=950.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.644161,-97.653783),new google.maps.LatLng(50.239266,-96.747643))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yorkton Muni, SK [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-53"
po.paths=google.maps.geometry.encoding.decodePath("ollyHj`kpRzVorLveAceLprBsjKx{C_dJb`EorHp~EswFdvFguDdfGomBdnGqb@|mGdg@leGrqB`uFfxDd}EfyFt~DlrHjzClbJlqBrgK`eA~`LpVzmLqV|mLaeA~`LmqBrgKkzCjbJu~DnrHe}EdyFauFhxDmeGpqB}mGdg@enGqb@efGomBevFguDq~EswFc`EmrHy{CadJqrBsjKweAaeL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.014961,-102.860819),new google.maps.LatLng(51.514483,-102.062515))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Baudette Intl, MN [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-55"
po.paths=google.maps.geometry.encoding.decodePath("cn|hHjk~`QslKu~Ct~QoscB`aXprJAnx@yPjy@gFpcAmCfMaP~Xi[dVuiFl|@oD|}@}b@hs@wLrr@kNbmBjc@r{BpEzxAmCx~@wMp_Bi[dfAaDhWYp]bHriBaBh|@pCfR`^x_@h`AtzAbNtsAoPlbAsGxm@iGfaBIrqA{Nt{@g@nq@iD`m@bAdr@{dAznAuMrSiHni@lClnAyKlvB{k@~t@sTr]kU`z@ea@ft@wIxcA}LldAoPnXq^@gk@ph@sYxr@_c@~i@ia@j{@wT|~@}PzVofAzTw~@zHmz@kD}LzF")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=975.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.649444,-94.696389),new google.maps.LatLng(48.875,-94.155556))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Falls Intl, MN [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.3.1-57"
po.paths=google.maps.geometry.encoding.decodePath("gaxgHpwu{P??cfHchCmdAldAegB_~D??mkG}vFwfFobI_~D_{JooC_hLo|A{gMsf@yyMnN_}MbeAoqMpyBswLfjDipKtuEq|IpzFi~GrwGmwE|dH_~DvWp}AwW~sSf[fePiwBfuD}@neHfeBpjQ~fAh\\`HcC`L|MmObj@|c@b`@bM`YStkAnLxgAyBjSgT`PZ|HmMjB\\pL|Ttu@rElDpIbXlA~S~Txk@vY|]pIp^tEb|AMxp@pEfPlI^vHrHv~Ay_@dd@kZhm@\\xd@nKrW`QnS`]dSbpBlCh|@lFfc@zg@jcBxC~{@fLr{@|Jxc@~Bl_@{@pmApOpbBQf]uSzw@bJje@pa@rv@hCfk@cGrZsOd[w^`[wAjPxB~OxPt[nh@pVrPzV`GvWxF~iAmAxrBxGvu@f@dg@eQtpAyAt\\~D|{@eDb`AIfq@bPdyAeDpr@r@`f@zA~{B}Ap`@ib@j{@wOrq@aWl^gQrMyT_Bsd@}j@{TqCsc@zI_h@uW_n@_Qqc@iEay@vL{s@`i@gw@tZgkAlWws@dp@gm@nV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=960.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.515192,-93.833056),new google.maps.LatLng(48.85501,-92.969444))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Pembina Muni, ND [TA]<br>Class E<br>700ft AGL to 3000ft"
mt="Transition Area<br>CDAH section: 3.3.1-59"
po.paths=google.maps.geometry.encoding.decodePath("_iajH~}arQ??_lCewCalCedCc}BscDckBc_EuvAevE_`AehF}g@utFwNk{FttUatA?rhs@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.0,-97.5),new google.maps.LatLng(49.116111,-97.232222))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="3000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Roseau, MN [TA]<br>Class E<br>700ft AGL to 5000ft"
mt="Transition Area<br>CDAH section: 3.3.1-61"
po.paths=google.maps.geometry.encoding.decodePath("kiajHhb~jQcyo@??o`}Bl`p@gnyADhyJMfnGGrlCGt|CCltBIjuDGhcDI|jEIrmEIlmEKx|EIf}EEhyBEz|CM~`GKv`GAtbAGlxCItzEKxcFE`nDKxuFGjtCGdgEE`bDAzdCAthC?hhCAhhCAnhCA`rGA~hCAthCAprC?z~BCxrC?x~BArrCCnxB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=954.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.998869,-96.333333),new google.maps.LatLng(49.25,-95.224736))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="5000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Atikokan, ON [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-4<br>Excluding the airspace under the jurisdiction of the Minneapolis ARTCC."
po.paths=google.maps.geometry.encoding.decodePath("snpkHjf}mPzf@}rThuBi}S``E_sR|dGeuPpaIafNftJahKl{Km~G|uLilDbcMku@lbMr`A`tLdvDpxKteHvpJ~kKx}H`fNhaGhqPf}DrkRlsBnsSff@tgTgf@rgTmsBnsSg}DrkRiaGhqPy}H`fNwpJ~kKqxKteHatLdvDmbMr`AccMku@}uLilDm{Km~GgtJahKqaIafN}dGeuPa`E_sRiuBi}S")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.409009,-92.209769),new google.maps.LatLng(49.241546,-90.945231))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Brandon, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-6"
po.paths=google.maps.geometry.encoding.decodePath("cjdrHtr_aRzf@qbUhuBolTd`EcaS|dG}aQraI{pNjtJypKl{KsdH`vL_pD`cMkv@lbMhbA`tLlzDnxKllHrpJ|tKv}H|pNhaGv}Pd}DjyRjsB~aTdf@rvTef@rvTksB~aTe}DjyRiaGv}Pw}H|pNspJ|tKoxKllHatLlzDmbMhbAacMkv@avL_pDm{KsdHktJypKsaI{pN}dG}aQe`EcaSiuBolT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.493732,-100.591929),new google.maps.LatLng(50.326268,-99.299182))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Brandon, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-7"
po.paths=google.maps.geometry.encoding.decodePath("odvuHtr_aRz_B{ut@l~Gk~r@vsMmqo@~yRcsj@|kWoid@be[u{\\|a^arTt_`@suK||`@woB`y`@jtDlt_@`rMvp]z~U~oZps]nuVpid@zdRh{i@pbMrdn@fsG|aq@|{Abqr@}{Adqr@gsGzaq@qbMrdn@{dRh{i@ouVpid@_pZps]wp]z~Umt_@`rMay`@jtD}|`@woBu_`@suK}a^arTce[u{\\}kWmid@_zResj@wsMmqo@m~Gk~r@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.910956,-101.496668),new google.maps.LatLng(50.909044,-98.394443))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Churchill, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-9"
po.paths=google.maps.geometry.encoding.decodePath("ahahJlxp}P~f@_pZvuBktYv`Ey}WteGmnUjbI{hR`uJspN`|KoiJjvLcxEdcM{`AfbMluAtsLbjF|wK|vJ|oJtwN~|H|hRp`GhgUr|DlpW`sBfbY`f@n{Yaf@p{YasBfbYs|DlpWq`GhgU_}HzhR}oJvwN}wK|vJusLbjFgbMjuAecM{`AkvLaxEa|KqiJauJqpNkbI}hRueGmnUw`Ey}WwuBitY")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.325398,-94.937456),new google.maps.LatLng(59.157935,-93.333099))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Churchill, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-10<br>Excluding the Northern Domestic Airspace."
po.paths=google.maps.geometry.encoding.decodePath("mbskJlxp}Pt`BqebAv`Hm~_AdwMcs{@d~Rgiu@jpWyhm@di[w{c@be^cmYva`@qhNl}`@izBbx`@jpFbr_@ppQhm]fz[|kZ|de@fqV|hm@|`Rf`t@h_M~ey@bqGjv|@f{Afo~@g{Afo~@cqGlv|@i_M|ey@}`Rh`t@gqV|hm@}kZzde@im]hz[cr_@npQcx`@jpFm}`@gzBwa`@shNce^amYei[w{c@kpWyhm@e~Rgiu@ewMcs{@w`Hm~_A")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(57.742623,-96.060069),new google.maps.LatLng(59.740711,-92.210487))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dauphin, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-12"
po.paths=google.maps.geometry.encoding.decodePath("{vmyHbotaRzf@_uUjuBi~Tf`EwqS`eG{pQtaIs}NjtJ_{Kp{K_lH`vLitDbcMqw@jbMhdA`tLn_ElxKjtHppJl_Lr}Hr}NfaGllQb}DliSjsB`sTbf@fhUcf@dhUksB`sTc}DliSgaGllQs}Hr}NqpJl_LmxKjtHatLn_EkbMhdAccMqw@avLitDq{K_lHktJ_{KuaIs}NaeG{pQg`EwqSkuBi~T")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.688732,-100.71544),new google.maps.LatLng(51.521268,-99.38956))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dauphin, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-13"
po.paths=google.maps.geometry.encoding.decodePath("gq_}HbotaR|_Bqcv@v~Gkjt@btMizp@nzRowk@llWahe@pe[qs]fb^ubU|_`@u~K~|`@cqB|x`@pzDft_@h_Nhp]trVpoZdm^~tVbhe@ldR|}j@dbMhjo@~rGvir@z{A~ys@{{A|ys@_sGvir@ebMhjo@mdR|}j@_uVbhe@qoZdm^ip]trVgt_@h_N}x`@pzD_}`@cqB}_`@u~Kgb^ubUqe[qs]mlWahe@ozRowk@ctMizp@w~Gkjt@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.105956,-101.643352),new google.maps.LatLng(52.104044,-98.461648))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dryden, ON a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-15"
po.paths=google.maps.geometry.encoding.decodePath("mm{qHfruuPzf@{aUjuBykTb`Eq`S~dGkaQraImpNhtJkpKn{KkdH~uL{oD`cMiv@lbMfbA`tLfzDnxKdlHtpJntKv}HlpNfaGf}Pd}DvxRlsBlaTdf@|uTef@~uTmsBjaTe}DvxRgaGf}Pw}HlpNupJptKoxKblHatLhzDmbMfbAacMkv@_vLyoDo{KkdHitJmpKsaImpN_eGkaQc`Eo`SkuB{kT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.448176,-93.49493),new google.maps.LatLng(50.280713,-92.203403))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dryden, ON b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-16"
po.paths=google.maps.geometry.encoding.decodePath("wgmuHfruuPx_Bett@l~Gw|r@vsM}oo@~yRyqj@|kWkhd@be[yz\\za^kqTt_`@kuK||`@uoB`y`@dtDnt_@pqMtp]d~U`pZpr]nuVlhd@zdR`zi@pbMdcn@fsGn`q@|{Aror@}{Ator@gsGl`q@qbMdcn@{dR`zi@ouVlhd@apZrr]up]b~Uot_@pqMay`@dtD}|`@uoBu_`@iuK{a^mqTce[yz\\}kWihd@_zR{qj@wsM}oo@m~Gu|r@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.865401,-94.398817),new google.maps.LatLng(50.863488,-91.299517))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Flin Flon, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-18"
po.paths=google.maps.geometry.encoding.decodePath("cagoIfgpkR|f@itWpuBs{Vl`E_kUheGedS~aIoiPrtJa~Lx{KgeIdvL_cEbcMm{@jbMfkAzsLzpEdxKnoIhpJncMj}HpiP|`Gt~R||Dv`UfsBvmVbf@ndWcf@pdWgsBtmV}|Dv`U}`Gt~Rk}HpiPipJncMexKpoI{sLzpEkbMdkAccMm{@evL_cEy{KgeIstJ_~L_bIqiPieGedSm`E_kUquBs{V")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.259009,-102.389068),new google.maps.LatLng(55.091546,-100.949266))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Flin Flon, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-19"
po.paths=google.maps.geometry.encoding.decodePath("o{xrIfgpkRf`B}`{@p_Heby@luM_gu@`|Rmto@`nWcqh@bg[ue`@lc^s{Vt``@k}Lf}`@iuBpx`@bpEjs_@fmO`o]~vX~mZfea@lsVfqh@|bRztn@~`Mvks@drGdrv@r{A~ex@s{A~ex@erGfrv@_aMtks@}bR|tn@msVdqh@_nZhea@ao]|vXks_@fmOqx`@dpEg}`@kuBu``@k}Lmc^s{Vcg[ue`@anWcqh@a|Rmto@muM_gu@q_Heby@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.676234,-103.396641),new google.maps.LatLng(55.674322,-99.941692))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Geraldton (Greenstone Regional), ON [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-21"
po.paths=google.maps.geometry.encoding.decodePath("{jzpHnjsqOx^orPp}AaaPfyCu~NfpEolMx`GglKjiH}_IvhI}iF`~IamCrhJel@dhJvs@x|IvsCxfIznF`gHpbIh~FflKzmEziMlwCvyNf|AjzOl^|jPm^|jPg|AjzOmwCvyN{mEziMi~FflKagHpbIyfIznFy|IvsCehJvs@shJel@a~IamCwhI}iFkiH}_Iy`GglKgpEolMgyCu~Nq}AaaP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.445319,-87.455141),new google.maps.LatLng(50.111348,-86.423748))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gillam, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-23"
po.paths=google.maps.geometry.encoding.decodePath("_ynyI~a_aQ~f@iwXruBk}Wp`EqjVleGo`TbbIuaQxtJiqMz{KasIhvLakEbcMq}@hbM`oAxsLnzEbxKn~IdpJlwMd}HtaQx`GlzSx|D`_VbsB~mWbf@veXcf@teXcsB~mWy|D`_Vy`GlzSe}HtaQepJlwMcxKn~IysLnzEibM`oAccMq}@ivLakE{{KasIytJiqMcbIuaQmeGo`Tq`EqjVsuBk}W")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.937065,-95.451262),new google.maps.LatLng(56.769602,-93.948738))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gillam, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-24"
po.paths=google.maps.geometry.encoding.decodePath("is`}I~a_aQj`B}w}@~_H_v{@bvMutw@z|Riyq@~nW}jj@zg[wra@bd^yzWba`@_nMh}`@kwBjx`@f|Ezr_@vfPjn]v|YfmZzub@prV`kj@dbRhvp@h`Mxru@xqGb}x@n{Azrz@o{Axrz@yqGb}x@i`Mxru@ebRhvp@qrV`kj@gmZzub@kn]v|Y{r_@vfPkx`@f|Ei}`@kwBca`@_nMcd^yzW{g[wra@_oW}jj@{|Riyq@cvMutw@_`H_v{@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.354289,-96.502689),new google.maps.LatLng(57.352377,-92.897311))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kenora, ON a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-26"
po.paths=google.maps.geometry.encoding.decodePath("wkmqH~ei_Qzf@y`UhuByjTd`Eq_S|dGo`QraIuoNhtJyoKn{K_dH~uLqoD`cMgv@lbMbbA`tL~yDnxKtkHtpJ|sKv}HtoNhaGj|Pd}DxwRjsBl`Tdf@|tTef@~tTksBj`Te}DxwRiaGj|Pw}HtoNupJ|sKoxKvkHatL|yDmbMdbAacMiv@_vLqoDo{K_dHitJyoKsaIuoN}dGo`Qe`Eq_SiuByjT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.376232,-95.06897),new google.maps.LatLng(50.208768,-93.779363))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kenora, ON b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-27<br>Excluding the airspace under the jurisdiction of the Minneapolis ARTCC."
po.paths=google.maps.geometry.encoding.decodePath("cf_uH~ei_Qz_Bqqt@l~Gezr@tsMqmo@~yRwoj@zkWqfd@`e[ky\\za^opTt_`@ytK||`@soB`y`@zsDnt_@vpMvp]`}U`pZbq]nuVrfd@|dR`xi@rbM~`n@dsGd~p@~{Afmr@_|Ahmr@esGb~p@sbM`an@}dR`xi@ouVrfd@apZbq]wp]~|Uot_@xpMay`@xsD}|`@soBu_`@ytK{a^mpTae[my\\{kWqfd@_zRwoj@usMqmo@m~Gezr@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.793456,-95.971515),new google.maps.LatLng(50.791544,-92.876819))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Ronge, SK a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-29"
po.paths=google.maps.geometry.encoding.decodePath("glerIr{naS|f@_~WpuB}dWn`EwsUjeGalS~aIgpPvtJkcMx{KaiIdvLgeEbcM_|@jbMflAxsLpsEfxKtsIfpJ~hMh}HfpP|`GjfSz|DdiUdsBrvVbf@vmWcf@vmWesBtvV{|DbiU}`GjfSi}HfpPgpJ`iMgxKrsIysLpsEkbMhlAccMa|@evLgeEy{KaiIwtJkcM_bIgpPkeG_lSo`EwsUquB_eW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.742065,-105.99526),new google.maps.LatLng(55.574602,-104.538073))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Ronge, SK b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-30"
po.paths=google.maps.geometry.encoding.decodePath("ohauIryp|R??|oPw~p@nhU_mj@pcYqzb@ne\\ihZzk^m_Qrt_@kiGf_`@nn@tk_@`cJxz]|iSjn[h{[xhXlpc@bmTncj@z~Otoo@~aKdqs@tzEbev@pm@~iw@w~Bt~v@wiHxcu@ulMfzq@icRndm@kiVreg@e{Y~a`@iu\\|~Wcu^pbOox_@jtEc~_@yaBie_@a{Ksn]clUe{Zsk^amWcpf@mgS{pm@anN_fs@seI}hw@imCmuy@_i`B|nH??tp@wo{A|}ImjyAraScxsAheuAhxpA")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=809.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.16005,-107.014672),new google.maps.LatLng(56.653292,-103.520836))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lynn Lake, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-32"
po.paths=google.maps.geometry.encoding.decodePath("uqr|Ilg|gR|f@sbYtuBmhXp`E{tVneGuiTfbIqiQxtJswM|{KqwIhvLumEbcMg~@hbMhpAxsLr}E`xKlcJbpJ|}Md}HpiQv`GjcTv|D`iVbsBnxWbf@npXcf@ppXcsBnxWw|D~hVw`GlcTe}HpiQcpJz}MaxKlcJysLr}EibMhpAccMe~@ivLumE}{KswIytJqwMgbIqiQoeGwiTq`E{tVuuBkhX")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.447898,-101.83677),new google.maps.LatLng(57.280435,-100.313786))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lynn Lake, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-33"
po.paths=google.maps.geometry.encoding.decodePath("ald`Jlg|gRn`Bit~@b`Hkq|@jvManx@b}Rwor@foWy}j@dh[mab@hd^_eXda`@ksMj}`@_xBhx`@h`Fvr_@boPdn]`iZ|lZvec@hrV|}j@|aRpkq@b`M~iv@tqGnuy@j{Azk{@k{Azk{@uqGpuy@c`M~iv@}aRpkq@irV|}j@}lZvec@en]`iZwr_@boPix`@f`Fk}`@_xBea`@ksMid^}dXeh[mab@goWy}j@c}Ryor@kvManx@c`Hiq|@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.865123,-102.902499),new google.maps.LatLng(57.863211,-99.248056))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Battleford, SK a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-35"
po.paths=google.maps.geometry.encoding.decodePath("}pycIlfftSzf@mqVnuByyUh`EokTdeG}gRxaIkqOntJwjLt{KkwHbvL{zDbcMiy@jbMjgA|sLhgEjxKp`IlpJroLn}HlqObaG~bR~|DhbThsBlmUbf@hcVcf@jcVisBlmU_}DhbTcaG~bRo}HjqOmpJtoLkxKn`I}sLhgEkbMlgAccMiy@cvL}zDu{KkwHotJwjLyaIkqOeeG{gRi`EokTouB{yU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.387621,-109.023821),new google.maps.LatLng(53.220157,-107.646734))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Battleford, SK b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-36"
po.paths=google.maps.geometry.encoding.decodePath("_trfIlcdyS??qbMgvr@sfGajv@_jAa~w@|rByww@bnHmwu@v_Nm_r@`bSitl@|oWm|e@he[s_^t~]wfUry_@g{Krt`@ufBho`@hkEdj_@tuNvf]dnWfgZ`m_@tnV~kf@t`Rjel@laMxtp@puG~vs@xaBtiu@srAtku@wfG`}s@osLx~p@_tQ~rl@qcV~|f@a~Y`a`@y_]ndXwe_@|mOkm`@vdFmu`@ylAa}_@saKyd^inT}m[ci]_qWswe@??uqJqh^ecMwe[")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.804871,-109.986444),new google.maps.LatLng(53.802756,-106.683255))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norway House, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-38"
po.paths=google.maps.geometry.encoding.decodePath("aw}jItldtQ|f@wfWnuBmnVl`Ew~TfeGeyR|aIc`PrtJqvLt{Ky_IdvL{_EbcMsz@jbMviAzsLbmEhxKtiIjpJx{Lj}Hb`P`aG|sR||DztTfsBdaVbf@rwVcf@rwVgsBdaV}|DztTaaG|sRk}Hd`PkpJv{LixKviI{sLbmEkbMtiAccMqz@evL{_Eu{Ky_IstJqvL}aIc`PgeGeyRm`Ew~TouBonV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.555954,-98.54798),new google.maps.LatLng(54.388491,-97.132576))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norway House, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-39"
po.paths=google.maps.geometry.encoding.decodePath("kqonItldtQd`Be_z@j_Hqax@buM{ht@v{Rsyn@vmWszg@vf[ct_@fc^ooVn``@{vLd}`@mtBrx`@lkEps_@jcOho]hhXjnZlr`@vsVtzg@fcRl{m@faM`pr@jrG~tu@t{A`hw@u{A`hw@krG`uu@gaM~or@gcRn{m@wsVtzg@knZjr`@io]hhXqs_@jcOsx`@nkEe}`@otBo``@yvLgc^ooVwf[ct_@wmWszg@w{Ruyn@cuMyht@k_Hsax@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.973178,-99.538494),new google.maps.LatLng(54.971266,-96.142061))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Albert, SK a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-41"
po.paths=google.maps.geometry.encoding.decodePath("acjfIr_}cSzf@wxVnuB_aVj`EcrTdeG{mRzaIovOptJynLt{KgzHbvLs|DbcMwy@jbMdhA|sLhiEhxKtcIlpJzsLl}HlvObaGzhR||DvhThsBftUbf@hjVcf@jjVisBftU}|DthTcaGzhRm}HnvOmpJxsLixKtcI}sLhiEkbMfhAccMyy@cvLq|Du{KizHqtJynL{aIovOeeG{mRk`EcrTouB}`V")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.800121,-106.361822),new google.maps.LatLng(53.632657,-104.971511))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Albert, SK b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-42"
po.paths=google.maps.geometry.encoding.decodePath("m}{iIr_}cSb`Bo|x@d_Hc`w@ztMyis@j{Rc~m@jmWocg@lf[ab_@~b^}bVj``@cpL`}`@qsBvx`@tfEvs_@fyNro]fyWtnZ~~_@`tVpcg@rcRfam@naMpsq@nrG|vt@v{Afiv@w{Afiv@orG~vt@oaMnsq@scRham@atVpcg@unZ|~_@so]hyWws_@dyNwx`@tfEa}`@qsBk``@apL_c^_cVmf[ab_@kmWocg@k{Ra~m@{tM{is@e_Hc`w@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.217345,-107.33479),new google.maps.LatLng(54.215433,-103.998544))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Lake, ON a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-44"
po.paths=google.maps.geometry.encoding.decodePath("ydgyHb{g{Pzf@mtUjuBy}Tf`EgqS`eGmpQtaIg}NjtJuzKp{KykH`vLetDbcMow@jbMfdA`tLj_ElxKbtHppJ`_Lr}Hh}NfaG~kQb}D~hSjsBprTbf@tgUcf@tgUksBprTc}D~hSgaG~kQs}Hf}NqpJb_LmxKbtHatLj_EkbMfdAccMow@avLetDq{KykHktJuzKuaIg}NaeGmpQg`EiqSkuBw}T")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.655121,-94.424403),new google.maps.LatLng(51.487657,-93.099486))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Lake, ON b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-45"
po.paths=google.maps.geometry.encoding.decodePath("e_y|Hb{g{P|_Bgbv@v~Gait@btMcyp@lzRkvk@llWege@pe[}r]fb^ebU|_`@m~K~|`@aqB|x`@lzDft_@z~Mhp]brVpoZll^`uVdge@ldR~|j@dbMdio@~rGphr@z{Axxs@{{Axxs@_sGphr@ebMdio@mdR~|j@auVdge@qoZll^ip]brVgt_@z~M}x`@lzD_}`@aqB}_`@m~Kgb^gbUqe[{r]mlWege@mzRkvk@ctMcyp@w~Gcit@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.072345,-95.351642),new google.maps.LatLng(52.070433,-92.172247))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Regina, SK [CAE]<br>Class E<br>4000ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.3.2-47"
po.paths=google.maps.geometry.encoding.decodePath("mjqtH|ztbSjmh@kPhql@qoxAj`Y_t`Brdv@???oeDur\\}lGixZckJcdXs~LaxT{dO{vPy{PgdLyaRcdGmuRe{AavRnoAscR|zFo~Pv_LsgOpxPy`Mv`U_lJnsXwkGbm[gcDnj]mu@ri^|w@fi^peDni]`nGlk[~mJdqXnbM|}TllO~kP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=905.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.859167,-105.461111),new google.maps.LatLng(51.014719,-103.750944))
a.airClass="E"
a.altLow="4000"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.3.2-48 [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-48<br>Excluding the airspace within the Moose Jaw, SK MTCA."
po.paths=google.maps.geometry.encoding.decodePath("w}oxHplg}Rz_Bagu@p~G}ns@zsMy`p@dzR{`k@dlW_ud@fe[ud]`b^ixTx_`@ayK||`@gpB~x`@tvDjt_@`wMpp]hfVzoZf}]huV~td@tdRlhj@lbMxrn@bsGzpq@|{Ap`s@}{Ap`s@csG|pq@mbMvrn@udRlhj@iuV`ud@{oZd}]qp]hfVkt_@`wM_y`@tvD}|`@gpBy_`@ayKab^ixTge[ud]elW_ud@ezR{`k@{sMy`p@q~G}ns@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.370678,-106.139138),new google.maps.LatLng(51.368766,-103.006973))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saskatoon, SK [CAE]<br>Class E<br>3900ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.3.2-50"
po.paths=google.maps.geometry.encoding.decodePath("gm`aIfujjS`w@at_@leD_s^nnGer\\boJwsYbdMa{U|jOalQpaQwkLhfRc_GbxR{kAtvRnfBdbRpvGd{P`}LdcOjuQx{L~zUhgJpjYdhGx`\\haDp{]ru@ly^su@jy^iaDr{]ehGx`\\igJnjYy{L`{UecOhuQe{Pb}LebRpvGuvRnfBcxR{kAifRe_GqaQukL}jOclQcdM_{UcoJysYonGcr\\meDas^")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.598335,-107.670102),new google.maps.LatLng(52.763887,-105.769342))
a.airClass="E"
a.altLow="3900"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.3.2-51 [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-51"
po.paths=google.maps.geometry.encoding.decodePath("}vqcIfujjS``Boow@|~Gwtu@ntMqar@|zRkzl@zlWmef@~e[qj^rb^urUb``@igL`}`@krBzx`@p`E|s_@blN~o]veWboZve_@ptVnef@~cRf_l@zaMnnp@vrG|os@x{Adau@y{Adau@wrGzos@{aMpnp@_dRf_l@qtVlef@coZxe_@_p]veW}s_@`lN{x`@p`Ea}`@krBc``@igLsb^srU_f[qj^{lWmef@}zRkzl@otMsar@}~Gwtu@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.182067,-108.348765),new google.maps.LatLng(53.180155,-105.09068))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sioux Lookout, ON a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-53"
po.paths=google.maps.geometry.encoding.decodePath("g`msH`x{oPzf@seUjuBqoTd`E}cS~dGmdQraIasNhtJqrKn{K{eH`vLupD`cMsv@lbMtbA`tLh{DnxKvmHrpJvvKt}H`sNhaGf`Qd}D`|RjsB|dTdf@pyTef@ryTksBzdTe}Db|RiaGf`Qu}H`sNspJtvKoxKxmHatLh{DmbMrbAacMqv@avLupDo{K}eHitJorKsaIasN_eGmdQe`E_dSkuBooT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.702065,-92.546959),new google.maps.LatLng(50.534602,-91.248596))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sioux Lookout, ON b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-54"
po.paths=google.maps.geometry.encoding.decodePath("qz~vH`x{oPz_Bs}t@n~Gyes@xsMixo@`zRkyj@`lWsnd@de[w_]|a^{tTv_`@ewK||`@_pB`y`@nuDlt_@ftMrp]fbV|oZzw]luVvnd@xdRdaj@nbM~jn@bsGthq@~{A`xr@_|Abxr@csGrhq@obM~jn@ydRfaj@muVtnd@}oZzw]sp]fbVmt_@htMay`@luD}|`@_pBw_`@ewK}a^{tTee[u_]alWund@azRiyj@ysMkxo@o~Gyes@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.119289,-93.455626),new google.maps.LatLng(51.117377,-90.339929))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Swift Current, SK a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-56<br>Excluding the airspace within the Moose Jaw, SK MTCA."
po.paths=google.maps.geometry.encoding.decodePath("q|otHtjhpSzf@khUjuBcrTd`EmfS~dGsfQraI}tNjtJ_tKn{K_gH`vLiqD`cMyv@lbM~bA~sL~{DnxK|nHrpJfxKv}H~tNfaGjbQd}Dl~RjsBlgTdf@d|Tef@d|TksBjgTe}Dn~RgaGjbQw}H|tNspJfxKoxK|nH_tL`|DmbM|bAacMwv@avLiqDo{K_gHktJ_tKsaI}tN_eGufQe`EkfSkuBcrT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.880676,-108.342449),new google.maps.LatLng(50.713213,-107.039218))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Swift Current, SK b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-57<br>Excluding the airspace within the Moose Jaw, SK MTCA."
po.paths=google.maps.geometry.encoding.decodePath("{vaxHtjhpSz_Bidu@n~Gils@|sMk~o@bzRs~j@blWesd@fe[gc]~a^iwTx_`@oxK||`@epB~x`@jvDjt_@fvMrp]beVzoZr{]huVfsd@vdRhfj@lbMnpn@dsGpnq@z{A`~r@{{A`~r@esGpnq@mbMnpn@wdRhfj@iuVdsd@{oZt{]sp]beVkt_@fvM_y`@jvD}|`@gpBy_`@oxK_b^iwTge[gc]clWcsd@czRu~j@}sMi~o@o~Gils@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.297901,-109.25452),new google.maps.LatLng(51.295988,-106.127146))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="The Pas, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-59"
po.paths=google.maps.geometry.encoding.decodePath("u_~jI~aahRzf@yfWpuBonVj`Ew~TfeGeyR|aIe`PrtJqvLv{Ky_IbvL{_EbcMsz@jbMviAzsLbmEhxKtiIjpJx{Ll}Hd`P~`G|sR||D|tTfsBdaVbf@twVcf@rwVgsBdaV}|D|tT_aG|sRm}Hd`PkpJx{LixKtiI{sLbmEkbMviAccMsz@cvL{_Ew{Ky_IstJqvL}aIe`PgeGeyRk`Ew~TquBonV")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.557343,-101.807726),new google.maps.LatLng(54.389879,-100.392274))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="The Pas, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-60"
po.paths=google.maps.geometry.encoding.decodePath("azonI~aahRd`Bi_z@j_Hsax@duM}ht@t{Ruyn@vmWuzg@vf[ct_@fc^ooVn``@{vLd}`@otBrx`@nkEps_@jcOho]jhXjnZlr`@vsVvzg@fcRn{m@faM`pr@jrG`uu@t{Adhw@u{Abhw@krG`uu@gaM`pr@gcRn{m@wsVvzg@knZlr`@io]jhXqs_@jcOsx`@nkEe}`@otBo``@{vLgc^ooVwf[ct_@wmWuzg@u{Ruyn@euM}ht@k_Hsax@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.974567,-102.798273),new google.maps.LatLng(54.972655,-99.401727))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thompson, MB a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-62"
po.paths=google.maps.geometry.encoding.decodePath("a|dvIfmatQ|f@qkXpuBcrWp`E_`VjeG_wSbbIqyPvtJ{jMz{KonIdvLihEdcM{|@hbMxmAxsLfwEdxKnyIdpJvpMh}HpyPx`GdqSz|D|tUbsBdcWbf@rzWcf@pzWcsBdcW{|D|tUy`GdqSi}HpyPepJvpMexKnyIysLfwEibMxmAecM{|@evLihE{{KonIwtJ{jMcbIqyPkeG_wSq`E_`VquBcrW")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.394843,-98.565764),new google.maps.LatLng(56.227379,-97.084236))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thompson, MB b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-63"
po.paths=google.maps.geometry.encoding.decodePath("mvvyIfmatQj`Byz|@x_H{yz@|uMuzv@p|Rgbq@tnWswi@rg[uca@|c^kpW|``@mhMf}`@wvBnx`@dxE~r_@f~Orn]`pYnmZreb@zrVtwi@lbRl`p@p`M~zt@|qG`dx@n{Adyy@o{Abyy@}qG`dx@q`M~zt@mbRl`p@{rVtwi@omZreb@sn]`pY_s_@f~Oox`@dxEg}`@wvB}``@mhM}c^kpWsg[uca@unWswi@q|Rgbq@}uMuzv@y_H{yz@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.812067,-99.602512),new google.maps.LatLng(56.810155,-96.047488))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON a) [CAE]<br>Class E<br>2200ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-65"
po.paths=google.maps.geometry.encoding.decodePath("ossiHzzejPvj`@qoxAne`@oggA??`nQduGbfR|oBziR}l@v{QkiEdyPqhJgp`AxbmF??}_Ea|OguFwhNsdHqiL}lIy_JcmJkmGodK_tDkrK_vAivKrH}nK|qB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=931.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.109167,-91.322222),new google.maps.LatLng(48.93,-90.103056))
a.airClass="E"
a.altLow="2200"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON b) [CAE]<br>Class E<br>3000ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.3.2-66"
po.paths=google.maps.geometry.encoding.decodePath("_kdgHxjj~Osoe@cvmA??flOuoNv}Pi|It|QccE|iRae@heRbwB|nQ~pGtgPbbLppNvfPnkL`{SdzIb|Vd_GjgY||CzzZjv@lu[{o@fv[svCh}ZeyFhkYytInaWufLtaTslNpnPudPzjL_mQjzG_eRjpBe`Bgr`B??ffGok@v{FyxBljFcwDjrEapFbtD_bHzpCqkIhiBokJv~@aaKjRqkKoXyjKudAy~J{nBwgJ}uCkfIsxDu{G}uEuhFgmF}nDq}F}oBsfGsm@ahGhT{aGvwAatFvxCgcFlmE")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=910.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.789177,-90.197222),new google.maps.LatLng(48.721389,-88.447444))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON c) [CAE]<br>Class E<br>4000ft to 12500ft"
mt="Control Area Extensions<br>CDAH section: 3.3.2-67"
po.paths=google.maps.geometry.encoding.decodePath("_bdfHj`nbPd`Bfr`B??keR{IezQovD}|PcnIeoO{|MarMo~QigKynUcqHqjX{qEqnZmlB{x[wC{g\\`cBk{[|hEosZxhHuqX~_K_xUrmMyeRroe@bvmA??s~DdrG_bDlxHo|Bt}IqsAzxJ_h@biKrB~mKfo@fgKjzAduJzbChxIrgDnqHngEzaGnaFzjEbuFdnCpaGpmAffGN")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=928.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.343333,-90.197222),new google.maps.LatLng(48.952977,-88.620278))
a.airClass="E"
a.altLow="4000"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON d) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-68<br>Excluding the airspace under the jurisdiction of the Minneapolis ARTCC."
po.paths=google.maps.geometry.encoding.decodePath("uydlH`oz`Pv_Bu~r@d~Gciq@fsM}_n@lyRggi@hkWodc@pd[s~[la^y}Sl_`@ujKz|`@anBdy`@`mDvt_@~aMdq]|fUrpZpt\\`vVndc@leRjqh@~bMzvl@nsGtqo@`|At_q@a|Ar_q@osGtqo@_cMzvl@meRjqh@avVndc@spZpt\\eq]|fUwt_@`bMey`@~lD{|`@anBm_`@sjKma^{}Sqd[s~[ikWodc@myRegi@gsM_`n@e~Gciq@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.347623,-90.936595),new google.maps.LatLng(49.345711,-87.930628))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB a) [CAE]<br>Class E<br>6500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-70"
po.paths=google.maps.geometry.encoding.decodePath("ezhtHr`opQfgA}ag@nuEaye@||I_ic@dyMit_@pfQm_[raTgoUrgV}iOpvW}uHdmXazA|jXv`CfpW|wI|}UdcPvuSt|U|yPl_[hmMzf_@fsIvob@doE`wd@`eAf{e@aeAf{e@eoE`wd@gsIvob@imM|f_@}yPj_[wuSt|U}}UdcPgpW|wI}jXv`CemXazAqvW}uHsgV}iOsaTgoUqfQk_[eyMkt_@}|I}hc@ouEcye@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.178428,-98.40314),new google.maps.LatLng(50.676994,-96.075471))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB b) [CAE]<br>Class E<br>7000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-71"
po.paths=google.maps.geometry.encoding.decodePath("qjajHllbwQ??}rXvwk@uk]|id@eaa@ja\\{wc@n{R{le@|_Ie~e@wF}je@isIksc@yySmx`@ap]w|\\wkf@scXmcn@oqRgnt@{kLwdy@wxEma|@Fs`}@dyEga|@hlLody@zqR{mt@|cX_cn@`}\\ekf@tx`@mo]lsc@cyS`ke@srId~e@cFxle@r`Itwc@b|R~`a@|a\\lk]ljd@rrXbxk@BpAA~hCAthCAprC?z~BCxrC?x~BArrCAv~B?trCAn~BArrCAr~BAbiD?dhBAprCCfjCCdhCBxhCA`iC?zhC?`iCAnhCAbhCAbiC?hiCAdhCA~hC?thC?z~CCrrBCphCAvhCCthCAvhC?thCCxhCAthCExhC@vhCCzhCAvhCCrhCCxhCAxhCAthCAhkCCffCArhCCthC?rhC?nhCCnhC@nhC?phC@thCCthCAxhC?thCAvhC?nhCArhC?rhCArhC?xhCAthCAvhCA|hC?zhCA~hC?pgCBphC@~`C?ppCBphC?|uC@n{B@xiC@zgC?|hCBbiC?deCBjlC?hiC@xgCB`fC@hkCDvhCBfhCBrhCBzhCBphCFphCA`tCAt~E@fw@?twBAzhCBrhC?zO")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=813.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.999989,-99.043995),new google.maps.LatLng(51.088895,-95.434668))
a.airClass="E"
a.altLow="7000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yorkton, SK a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.3.2-73"
po.paths=google.maps.geometry.encoding.decodePath("uylzHxklpRzf@qwUluBw`Uf`EatS~dG}rQvaIm_OltJk|Kp{K_mH`vL{tD`cMww@lbMrdA~sLd`ElxKluHppJz`Lr}Hl_OdaGlnQb}DrkSjsBnuTdf@rjUef@rjUksBluTc}DtkSeaGjnQs}Hl_OqpJz`LmxKluH_tLf`EmbMpdAacMuw@avL{tDq{KamHmtJk|KwaIm_O_eG}rQg`EatSmuBw`U")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.847898,-103.133845),new google.maps.LatLng(51.680435,-101.803378))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yorkton, SK b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.3.2-74"
po.paths=google.maps.geometry.encoding.decodePath("at~}HxklpR~_B{iv@v~Gopt@dtM}_q@nzRo|k@plWile@re[{v]hb^_eU|_`@}_L~|`@iqB|x`@l{Ddt_@daNhp]luVnoZtp^|tVhle@jdRxbk@bbMnoo@|rGdor@z{At_t@{{Ar_t@}rGdor@cbMpoo@kdRvbk@}tVhle@ooZvp^ip]luVet_@baN}x`@l{D_}`@iqB}_`@}_Lib^_eUse[{v]qlWile@ozRo|k@etM}_q@w~Gmpt@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.265123,-104.064964),new google.maps.LatLng(52.263211,-100.872259))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moose Jaw, SK d) [TCA]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Terminal Control Areas<br>CDAH section: 3.3.3-5"
po.paths=google.maps.geometry.encoding.decodePath("}k~qHzx_lSiuDmgb@g{C}wkBcxU}y_BmcG_ry@hql@qoxAj`Y_t`B`ypA???t~Snea@byO|gf@hiK|~i@lnFlol@~lAxwm@qtAvvm@yuFtll@epKfzi@o_Pnaf@u_Tjea@_mWli[mdZlrTac\\~eM}g]xlD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=884.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.415328,-106.991667),new google.maps.LatLng(50.508333,-104.5))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moose Jaw, SK e) [TCA]<br>Class E<br>2200ft AGL to 18000ft ASL"
mt="Terminal Control Areas<br>CDAH section: 3.3.3-6"
po.paths=google.maps.geometry.encoding.decodePath("apnnH~cy|Rhb`A???ndSjfr@zbMhvv@bzFrny@rj@tsz@cdDldz@kpJfax@orPtkt@_eVhfo@}b[tth@wg_@z{`@_ub@fiW{yaAu~v@??tg]gtD|b\\kfMhdZyrTzlWui[l_Tsea@h_Puaf@~oKkzi@nuFull@jtAyvm@gmAwwm@snFkol@oiKw~i@iyOwgf@s_T{ca@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.166984,-107.279444),new google.maps.LatLng(50.295556,-104.5))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB a) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.3.3-8"
po.paths=google.maps.geometry.encoding.decodePath("_onqHh|huQ??_iOaxO}_MmiT}mJwyW{pGgrZmkDap\\w`Aaq]`j@gt]juCmy\\f|Foa[j{IinXxoLubUfwNgbQloP}pLzvQqsGjlR{nBpoRdv@f`RnzEf_QnwJjmOrhOhlM`jS~}J`xVrdH`pYzbElo[r{Avt\\kL|~\\}uB|m\\c|Eza[_|Hb|XwrKl~Ua~MdkRk{OneNelQ``I??`eBx}EdjAhvFbn@jfGxPxnGaKroGqh@phG}dA~yFg_BddFyvBzgE_kCveDc{Cz~B{fDbtAumD~f@ooDkEilDws@ybDsdBkCzf\\??qaSyeAkqRkjF??gbEsfMymCstNgxAerOe`@{aPtVacPznA{uO`gCyxN")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=886.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.346128,-98.655931),new google.maps.LatLng(50.510391,-96.334389))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB b) [TCA]<br>Class C<br>2000ft to 3000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.3.3-9"
po.paths=google.maps.geometry.encoding.decodePath("un{oHdaprQ??m_Fc_AatEw_CacE}uDmlD}fFypCkqG}pB_tHymAumImh@w}IyAscJzb@e_JphAspI`lBgxHllC}vGthDomFb`Ek}D~qEygCv}EmnAfcF}RfaFpm@[vfQlwHAzsEigF??rnD`bFlqCloGxqBrqH|nA|jIti@|zIjC`aJea@d}IufAjoIejBbxHujCzwGggDroF}~Dn`EeqExkCc~ErlAc`@}gE??yGkd@wKqa@eO{]gRiYyTaTuVgN_XaHqXoAqX~BwWlIiVpOgThUsQlZoNx^{Jhb@}F|d@g[fiE")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.711716,-97.572197),new google.maps.LatLng(50.143602,-96.903194))
a.airClass="C"
a.altLow="2000"
a.altHigh="3000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB c) [TCA]<br>Class C<br>3000ft to 4000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.3.3-10"
po.paths=google.maps.geometry.encoding.decodePath("_onqHh|huQ??}oO_aPudM{uTapJwhXyoGub[_gDs`]_y@o`^|t@_a^`cDkb]blGoe[tlJolXxaMmzT~hOisP|_Qg{KbeRqwFnwRgmArvRl|AtbRddGh|PbcL|_On}PwwH`{GqDbak@reMAJ|_I`pYQ??xoExp[~cB|z\\uEfg]eqBnw\\gyEbl[e{HffYwsKvgVq`NbsRi_PjkN}pQpcI??`eBx}EdjAhvFbn@jfGxPxnGaKroGqh@phG}dA~yFg_BddFyvBzgE_kCveDc{Cz~B{fDbtAumD~f@ooDkEilDws@ybDsdBkCzf\\??qaSyeAkqRkjF??gbEsfMymCqtNgxAgrOe`@{aPtVacPznA{uO`gCyxN")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=886.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.346597,-98.655931),new google.maps.LatLng(50.510484,-96.334034))
a.airClass="C"
a.altLow="3000"
a.altHigh="4000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg, MB d) [TCA]<br>Class C<br>4000ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.3.3-11"
po.paths=google.maps.geometry.encoding.decodePath("_onqHh|huQ??_iOaxO}_MmiT}mJwyW{pGgrZmkDap\\w`Aaq]`j@gt]juCmy\\f|Foa[j{IinXxoLubUfwNgbQloP}pLzvQqsGjlR{nBpoRdv@f`RnzEf_QnwJjmOrhOhlM`jS~}J`xVrdH`pYzbElo[r{Avt\\kL|~\\}uB|m\\c|Eza[_|Hb|XwrKl~Ua~MdkRk{OneNelQ``I??`eBx}EdjAhvFbn@jfGxPxnGaKroGqh@phG}dA~yFg_BddFyvBzgE_kCveDc{Cz~B{fDbtAumD~f@ooDkEilDws@ybDsdBkCzf\\??qaSyeAkqRkjF??gbEsfMymCqtNgxAgrOe`@{aPtVacPznA{uO`gCyxN")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=886.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.346128,-98.655931),new google.maps.LatLng(50.510391,-96.334389))
a.airClass="C"
a.altLow="4000"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Winnipeg/James Armstrong Richardson Intl, MB [CZ]<br>Class C<br>SFC to 3000ft (2200ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.3.4-3"
po.paths=google.maps.geometry.encoding.decodePath("_yipHpeopQ`J{cE|_@{}Dxt@_rD|gAu`D|xAmjCdgB}oBdrBarAvyBqq@n}BwOn}BtPpyBlr@|qBrrAzfBfpBtxAljCtgAh`Dnt@lqDx_@`}D`J|bEaJ|bEy_@`}Dot@lqDugAh`DuxAljC{fBfpB}qBrrAqyBlr@o}BtPo}BwOwyBsq@erB_rAegB}oB}xAmjC}gAu`Dyt@_rD}_@{}D")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.793459,-97.421083),new google.maps.LatLng(50.026569,-97.059106))
a.airClass="C"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moose Jaw, SK [CZ]<br>Class D<br>SFC to 8000ft (6100ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-6"
po.paths=google.maps.geometry.encoding.decodePath("uxyrHh~ndSdfAipF}Eeqc@laEigKsNoh\\??tfDcwArmDej@xoDvBxlDpq@xdDv~AbxCdiC~fCpoD~qBxpEryA`lFv~@n`G~a@nmGfDzrGsWhpGwt@|eGmpA~sFwiBd{E_`Cz{DqrCdwC}`DbnBqjDtaAioDhS}nDwYqiDahAc_DmtB_lCieD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.164022,-105.819985),new google.maps.LatLng(50.436111,-105.298996))
a.airClass="D"
a.altLow="0"
a.altHigh="8000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Regina Intl, SK [CZ]<br>Class D<br>SFC to 5000ft (3100ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-8"
po.paths=google.maps.geometry.encoding.decodePath("}fisHlpy}RzFcmCpVwhCje@e`C`s@wsBf_AucBjiAqpAfqA_{@rvAsc@jyAeKjyAtKpvA`d@bqAh{@fiAvpA`_AtcB|r@psBfe@z_ClVhhCzFrlC{FplCmVjhCge@z_C}r@psBa_AtcBgiAvpAcqAh{@qvA`d@kyAtKkyAeKsvAsc@gqA_{@kiAspAg_AucBas@usBke@g`CqVwhC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.348691,-104.796531),new google.maps.LatLng(50.515198,-104.535136))
a.airClass="D"
a.altLow="0"
a.altHigh="5000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saskatoon/John G. Diefenbaker Intl, SK [CZ]<br>Class D<br>SFC to 5000ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-10"
po.paths=google.maps.geometry.encoding.decodePath("_{|}HfxfjS|FsrCnVanCje@geCbs@exBd_AqgBjiAwsAhqAi}@rvAae@jyAsKhyAdLpvAne@dqAt}@diA|sA`_ApgB|r@~wBfe@zdClVrmC|F`rC}F`rCmVpmCge@zdC}r@`xBa_ApgBeiA|sAeqAr}@qvApe@iyAbLkyAsKsvA_e@iqAi}@kiAwsAe_AqgBcs@gxBke@eeCoVcnC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.08758,-106.835467),new google.maps.LatLng(52.254087,-106.563977))
a.airClass="D"
a.altLow="0"
a.altHigh="5000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southport, MB [CZ]<br>Class D<br>SFC to 4000ft (3100ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-12"
po.paths=google.maps.geometry.encoding.decodePath("yx_pHtnfxQtPkxmAh~AieM??djDmfA|oDmStoDnYbjDtgAv_DpsBtpCb|Cj}B~_EjfBf~EnlAbvFhp@xfGvRzoGkIbqGgg@njG}cA`|Fu~AlfFqvB`jEckCvgDo{Cr`CogDpuAmnD~g@mpD{DemDss@ucD_eB")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=975.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.736662,-98.531877),new google.maps.LatLng(49.975333,-98.015385))
a.airClass="D"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. Andrews, MB [CZ]<br>Class D<br>SFC to 3000ft (2200ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-14"
po.paths=google.maps.geometry.encoding.decodePath("oy_qHrkhoQ??n@sjC|OchCv^qaCtl@awBfy@aiB~cA{wAxlAcdAdsAgn@dwA_WnxACfwAvVfsA|m@zlAtcAddAjwAly@nhB|l@nvBb_@|`CjPpgC`AbjCgLrhCu[xbC~c@x`@??cxApfByjAx}BssAeuA??qw@z}@}}@fm@_bAf\\gdAnJmdAsEybAqWe_A{h@{y@}x@wr@mgAkj@}sAs`@_~A_VmeBoJajBogB?")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.973155,-97.136244),new google.maps.LatLng(50.139289,-96.903332))
a.airClass="D"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thunder Bay, ON [CZ]<br>Class D<br>SFC to 4000ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-16"
po.paths=google.maps.geometry.encoding.decodePath("}{vfHfae`PzFegCpVccCje@{zB`s@}nBf_Ao_BhiAgmAhqAqx@rvAcb@jyAuJhyAbKrvAnb@bqAzx@diAjmA`_Ap_B~r@vnBfe@rzBlVtbCzFvfC{FxfCmVtbCge@rzB_s@vnBa_Ap_BeiAjmAcqAzx@svAnb@iyAbKkyAuJsvAcb@iqAqx@iiAgmAg_Aq_Bas@{nBke@}zBqVacC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.288691,-89.449216),new google.maps.LatLng(48.455198,-89.198562))
a.airClass="D"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Brandon Muni, MB [CZ]<br>Class E<br>SFC to 4000ft (2700ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-19"
po.paths=google.maps.geometry.encoding.decodePath("agcpHts`aR|FqkCnVggCje@y~Bbs@mrBd_AqbBjiAwoAfqAiz@tvAgc@hyAaKjyAnKpvAtc@bqAtz@fiAzoA`_ApbB|r@hrBfe@l~BlVzfC|F`kC}F`kCmVxfCge@n~B}r@hrBa_ApbBgiAzoAcqAtz@qvArc@kyApKiyAaKuvAgc@gqAkz@kiAuoAe_AqbBcs@orBke@w~BoVggC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.826469,-100.08011),new google.maps.LatLng(49.992976,-99.821556))
a.airClass="E"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Churchill, MB [CZ]<br>Class E<br>SFC to 3000ft (2900ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-21"
po.paths=google.maps.geometry.encoding.decodePath("}j_fJrpa}P|FqmDnVchDle@u}Cbs@inCf_AqzBjiAccBhqAqhArvA{k@jyA{MjyAtNpvApl@`qAbiAfiAlcB~~@pzB|r@~mCfe@b}CjVngD|FtlD}FtlDkVlgDge@b}C}r@`nC__ApzBgiAjcBaqAbiAqvArl@kyArNkyAyMsvA{k@iqAshAkiAacBg_AszBcs@gnCme@u}CoVehD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.653969,-94.217645),new google.maps.LatLng(58.820476,-93.8968))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dauphin, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-23"
po.paths=google.maps.geometry.encoding.decodePath("o{kwHbotaR|FeoCnVwjCje@abCbs@kuBd_AceBjiAyqAfqA{{@tvAcd@jyAiKhyAxKpvArd@bqAd|@fiA|qA`_AbeB|r@fuBfe@vaClVfjC|FtnC}FrnCmVfjCge@vaC}r@fuBa_AbeBgiA|qAcqAd|@qvArd@iyAxKkyAiKuvAcd@gqA{{@kiAyqAe_AceBcs@kuBke@abCoVwjC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.01758,-100.18508),new google.maps.LatLng(51.184087,-99.91992))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Dryden Regional, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-25"
po.paths=google.maps.geometry.encoding.decodePath("g_toH~aauP|FikCnV_gCle@s~B`s@grBf_AmbBjiAqoAfqAgz@rvAec@jyAaKhyAnKrvArc@bqApz@diAvoA`_AlbB~r@`rBfe@h~BlVrfCzFxjC{FzjCmVpfCge@h~B_s@brBa_AjbBeiAvoAcqApz@svArc@iyAnKkyA_KsvAec@gqAiz@kiAqoAg_AmbBas@grBme@q~BoVagC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.748413,-92.873235),new google.maps.LatLng(49.91492,-92.615098))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Flin Flon, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-27"
po.paths=google.maps.geometry.encoding.decodePath("cqfmIjurkRzFq{CpVyvCje@kmCbs@s_Cf_A}mBjiA{xAfqAaaAtvAkg@hyAiLjyA|LpvA|g@bqAnaAdiA`yA`_A|mB|r@j_Cfe@~lClVfvCzF|zC{F~zCmVfvCge@|lC}r@j_Ca_A|mBeiAbyAcqAnaAqvAzg@kyA~LiyAkLuvAig@gqAcaAkiA{xAg_A{mBcs@s_Cke@kmCqVyvC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.594802,-101.825662),new google.maps.LatLng(54.761309,-101.537672))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Geraldton (Greenstone Regional), ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-29"
po.paths=google.maps.geometry.encoding.decodePath("{qioHnjsqOzFekCpV{fCje@m~Bbs@crBd_AibBjiAooAfqAez@rvAec@jyA_KjyAnKpvApc@bqAnz@fiAtoA`_AhbB|r@|qBfe@d~BlVlfC|FtjC}FtjCmVlfCge@d~B}r@|qBa_AhbBgiAtoAcqAnz@qvApc@kyAnKkyAaKsvAcc@gqAez@kiAooAe_AibBcs@crBke@m~BqV{fC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.69508,-87.068371),new google.maps.LatLng(49.861587,-86.810518))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gillam, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-31"
po.paths=google.maps.geometry.encoding.decodePath("uqnwI|caaQ|FmbDnVm}Cle@ssCbs@geCd_AwrBliAw|AfqA_dAtvAai@jyA{LhyArMpvAri@bqAldAdiA~|A`_AxrB|r@|dCfe@dsClVx|CzFvaD{FvaDmVx|Cge@dsC}r@|dCa_AxrBeiA~|AcqAldAqvAti@iyArMkyA}LuvAai@gqA_dAmiAw|Ae_AwrBcs@geCme@ssCoVm}C")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.274246,-94.86083),new google.maps.LatLng(56.440754,-94.560281))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kenora, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-33"
po.paths=google.maps.geometry.encoding.decodePath("kpkoH`h}~PzFekCpV}fCje@m~Bbs@erBd_AibBjiAooAfqAgz@rvAcc@jyA_KjyAlKpvArc@bqAnz@fiAtoA`_AhbB|r@~qBfe@d~BlVnfC|FtjC}FvjCmVlfCge@d~B}r@~qBa_AjbBgiAroAcqApz@qvApc@kyAlKkyA_KsvAcc@gqAgz@kiAooAe_AibBcs@erBke@m~BqV}fC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.70508,-94.492008),new google.maps.LatLng(49.871587,-94.234103))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Ronge (Barber Field), SK [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-35"
po.paths=google.maps.geometry.encoding.decodePath("o_cpIb~maS|Fm}CnVsxCle@aoCbs@caCd_AgoBjiA}yAhqA{aArvAyg@jyAoLjyAdMpvAjh@bqAfbAdiAdzA`_AfoB|r@z`Cfe@tnClV~wCzFx|C{Fx|CmV~wCge@tnC}r@z`Ca_AfoBeiAdzAcqAfbAqvAjh@kyAdMkyAoLsvAyg@iqA{aAkiA}yAe_AgoBcs@caCme@aoCoVsxC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.068135,-105.407643),new google.maps.LatLng(55.234643,-105.116246))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Lynn Lake, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-37"
po.paths=google.maps.geometry.encoding.decodePath("snqzItl|gR|FudDnVq_Dle@suCbs@agCf_AitBjiAa~AfqA{dAtvAsi@jyAcMhyAxMpvAhj@bqAheAdiAh~A`_AhtB|r@xfCfe@buClV~~CzF|cD{F|cDmV|~Cge@buC}r@xfCa_AhtBeiAh~AcqAjeAqvAfj@iyAxMkyAcMuvAsi@gqA{dAkiAa~Ag_AitBcs@agCme@quCoVs_D")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.780635,-101.228414),new google.maps.LatLng(56.947143,-100.923808))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Battleford (Cameron McIntosh), SK [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-39"
po.paths=google.maps.geometry.encoding.decodePath("svqaIpitsS|FstCnVapCle@agCbs@{yBd_A_iBjiA}tAfqAc~@tvAqe@jyAyKhyAjLpvA`f@bqAn~@fiAbuA`_A~hB|r@tyBfe@tfClVpoCzF`tC{F`tCmVnoCge@tfC}r@vyBa_A~hBgiA`uAcqAp~@qvA~e@iyAjLkyAyKuvAoe@gqAe~@kiA{tAe_A_iBcs@}yBme@agCoV_pC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.685913,-108.381214),new google.maps.LatLng(52.85242,-108.106008))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Norway House, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-41"
po.paths=google.maps.geometry.encoding.decodePath("{~yhI~detQ|F{xCnVctCje@}jCbs@k}Bf_A_lBjiAiwAfqA}_AtvAsf@hyAeLjyAvLpvAdg@bqAh`AdiApwA`_A~kB|r@b}Bfe@pjClVrsC|FfxC}FfxCmVtsCge@njC}r@d}Ba_A~kBeiAnwAcqAj`AqvAbg@kyAvLiyAcLuvAsf@gqA_`AkiAiwAg_A_lBcs@k}Bke@{jCoVetC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.87508,-97.985664),new google.maps.LatLng(54.041587,-97.702669))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Prince Albert (Glass Field), SK [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-43"
po.paths=google.maps.geometry.encoding.decodePath("{shdIxe~cS|FevCnVoqCle@ohCbs@e{Bd_AajBjiAyuAhqAy~@rvA}e@jyA}KhyAnLpvAnf@dqAd_AdiA|uA`_AbjB|r@~zBfe@`hClV`qCzFpuC{FruCmV`qCge@`hC}r@~zBa_A`jBeiA~uAeqAd_AqvAlf@iyAnLkyA}KsvA}e@iqAy~@kiAwuAe_AcjBcs@e{Bme@mhCoVqqC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.130913,-105.811806),new google.maps.LatLng(53.29742,-105.53375))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Red Lake, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-45<br>Excluding the airspace below 700ft AGL south of a line beginning at: N51:01:47.51 W093:54:25.32 to N51:02:36.91 W093:49:33.56 to N51:01:08.66 W093:40:14.77"
po.paths=google.maps.geometry.encoding.decodePath("gcdwHnil{P|FaoCnVsjCje@}aCbs@iuBd_A_eBjiAuqAhqA{{@rvAcd@jyAiKhyAxKpvArd@dqAb|@diAzqA`_A`eB|r@buBhe@raCjVdjC|FnnC}FnnCkVdjCie@raC}r@buBa_A~dBeiAzqAeqAd|@qvApd@iyAxKkyAiKsvAcd@iqAy{@kiAuqAe_AaeBcs@iuBke@}aCoVsjC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.977857,-93.917188),new google.maps.LatLng(51.144365,-93.652256))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sioux Lookout, ON a) [CZ]<br>Class E<br>SFC to 700ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-47"
po.paths=google.maps.geometry.encoding.decodePath("{rhqHnekpP??co@crBia@u}BaS}dCkDihCrHwgCdWgcCde@}zB`r@aoBl}@_`B~fAcnAnnA_z@xsAed@pvAkMzvAzGrtAz^~oAzt@~hAjiA|_At{A|t@jkBnh@~wBvZ`aCjLpfCq@`hCiOteC_^h_Cw_GcgB{pRb{F")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.035269,-91.976722),new google.maps.LatLng(50.201563,-91.767964))
a.airClass="E"
a.altLow="0"
a.altHigh="700AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sioux Lookout, ON b) [CZ]<br>Class E<br>700ft AGL to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-48"
po.paths=google.maps.geometry.encoding.decodePath("{~kqH`x{oP|FclCnV{gCje@i_Cbs@_sBd_A_cBjiAapAfqAsz@tvAkc@hyAcKjyApKpvAzc@bqA|z@fiAdpA`_A~bB|r@xrBfe@`_ClVjgC|FtkC}FtkCmVlgCge@~~B}r@xrBa_A~bBgiAfpAcqA|z@qvAxc@kyApKiyAaKuvAmc@gqAsz@kiA_pAe_AacBcs@}rBke@k_CoVygC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.03508,-92.027617),new google.maps.LatLng(50.201587,-91.767938))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Swift Current, SK [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-50"
po.paths=google.maps.geometry.encoding.decodePath("}{mrH|hhpSzFulCpVihCje@y_C`s@msBf_AkcBjiAipAfqA{z@rvAoc@jyAcKjyArKpvA|c@bqAd{@fiAnpA`_AjcB|r@dsBfe@n_ClV|gCzFdlC{FdlCmV|gCge@n_C}r@dsBa_AjcBgiAppAcqAb{@qvA|c@kyArKkyAcKsvAoc@gqA{z@kiAipAg_AkcBas@ksBke@{_CqVihC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.208691,-107.820868),new google.maps.LatLng(50.375198,-107.560243))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="The Pas, MB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-52"
po.paths=google.maps.geometry.encoding.decodePath("op|hIlj_hR|F}xCnVgtCle@}jC`s@k}Bf_AalBjiAkwAhqA}_ArvAsf@jyAeLhyAvLpvAdg@dqAj`AdiApwA`_A~kB|r@f}Bfe@pjClVtsCzFhxC{FhxCmVtsCge@pjC}r@d}Ba_A~kBeiApwAeqAj`AqvAdg@iyAvLkyAcLsvAuf@iqA}_AkiAkwAg_A_lBas@m}Bme@}jCoVgtC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.888135,-101.232653),new google.maps.LatLng(54.054643,-100.949569))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Thompson, MB [CZ]<br>Class E<br>SFC to 4000ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.3.4-54"
po.paths=google.maps.geometry.encoding.decodePath("g|atI~aitQ|Fa`DnVe{Cle@oqC`s@gcCf_AcqBjiAm{AhqA_cArvAmh@jyAwLjyAlMpvA`i@bqAjcAdiAt{A`_AbqB|r@`cCfe@~pClVpzCzFl_D{Fl_DmVpzCge@`qC}r@`cCa_A`qBeiAt{AcqAlcAqvA`i@kyAjMkyAuLsvAoh@iqA_cAkiAm{Ag_AaqBas@icCme@oqCoVc{C")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.717857,-98.012287),new google.maps.LatLng(55.884365,-97.716046))
a.airClass="E"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yorkton Muni, SK [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.3.4-56"
po.paths=google.maps.geometry.encoding.decodePath("y{kxHj`kpR|FsoCnVgkCje@qbCbs@yuBd_AoeBjiAarAfqAa|@tvAid@jyAkKhyAzKpvAvd@dqAl|@diAfrA`_AneB|r@ruBfe@dbClVxjC|FboC}FboCmVxjCge@dbC}r@tuBa_AneBeiAdrAeqAl|@qvAvd@iyAzKkyAkKuvAgd@gqAc|@kiAarAe_AoeBcs@yuBke@obCoVgkC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.181469,-102.594718),new google.maps.LatLng(51.347976,-102.328615))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Falls Intl, MN c) [CZ]<br>Class E<br>SFC to 14500ft"
mt="Control Zone<br>CDAH section: 3.3.4-60"
po.paths=google.maps.geometry.encoding.decodePath("oepgHbbuyPe_HpkJcfHopOvtGu}I??uCazAdBazAtJqxAzRcuAfZmpAlz@dY`HcC`L|MmObj@|c@b`@bM`YStkAnLxgAyBjSgT`PZ|HmMjB\\pL|Ttu@rElDpIbXlA~S~Txk@vY|]pIp^tEb|AMxp@pEfPlI^vHrHv~Ay_@dd@kZhm@\\xd@nKrW`QnS`]dSbpBlCh|@hD|X??{`Av[_cA|KmcAuByaAkU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.541667,-93.560278),new google.maps.LatLng(48.678056,-93.349167))
a.airClass="E"
a.altLow="0"
a.altHigh="14500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saskatoon, SK [TSP RQ]<br>Class E<br>2900ft to 3900ft"
mt="Transponder Airspace<br>CDAH section: 3.3.5-15<br>Excluding the Saskatoon, SK CZ."
po.paths=google.maps.geometry.encoding.decodePath("uk}~HfxfjSzVm{LxeAumLprBwrKv{CgkJd`EuxHr~Es|FdvF{xDdfGuoBdnGec@|mG`h@leG~sB`uF`|Db}Eh~Ft~DtxHjzCpiJjqBnoK`eAliLpVpvLqVnvLaeAliLkqBnoKkzCpiJu~DtxHc}Eh~FauFb|DmeG|sB}mGbh@enGgc@efGsoBevF}xDs~Eq|Fe`EwxHw{CgkJqrBurKyeAumL")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.921072,-107.106953),new google.maps.LatLng(52.420594,-106.292491))
a.airClass="E"
a.altLow="2900"
a.altHigh="3900"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Earlton (Timiskaming Regional), ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-4"
po.paths=google.maps.geometry.encoding.decodePath("wescHnnjfNzVssKveAegKnrBsnJt{CyjI~_Ey|Gn~EgfFbvFqhDdfG}eBbnGk`@~mGbd@neGhiB`uF`kDh}EpgFv~Dx|GlzCniInqBdlJbeAxcKrVxoKsVzoKceAxcKoqBblJmzCniIw~Dz|Gi}EngFauFbkDoeGfiB_nGbd@cnGi`@efG}eBcvFshDo~EefF_`E{|Gu{CyjIorBsnJweAcgK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.445239,-80.219959),new google.maps.LatLng(47.944761,-79.477818))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Elliot Lake Muni, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-6"
po.paths=google.maps.geometry.encoding.decodePath("cxl{Grg|vNxVoiKteAi}JnrBmeJr{CqbI``EwuGl~Em`FbvFmdDbfGocBdnGq_@|mGbc@neGpfBbuFvfDh}EtaFx~DvuGnzChaInqBbcJbeAfzJrV|eKsV~eKceAfzJoqBbcJozChaIy~DtuGi}EvaFcuFvfDoeGpfB}mGbc@enGq_@cfGocBcvFmdDm~Eo`Fa`EwuGs{CobIorBmeJueAk}J")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.101628,-82.923236),new google.maps.LatLng(46.60115,-82.199542))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gore Bay-Manitoulin, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-8"
po.paths=google.maps.geometry.encoding.decodePath("}vqxGpo}vNxVcfKteAczJnrBkbJr{Cy_I~_EksGn~Es~E`vFacDbfGsbBdnGk_@|mGxb@peGteBbuFheDh}Ex_Fx~DjsGnzCr~HnqBb`JbeA`wJrVtbKsVtbKceA`wJoqBd`JozCp~Hy~DlsGi}Ex_FcuFheDqeGteB}mGvb@enGi_@cfGubBavFacDo~Eq~E_`EmsGs{Cw_IorBmbJueAazJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.635517,-82.926577),new google.maps.LatLng(46.135039,-82.208978))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kapuskasing, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-10"
po.paths=google.maps.geometry.encoding.decodePath("{nbnHnejvNxVuaLveAytKprBm{Jt{CivIb`EufHp~EcnFbvFknDbfGmiBdnGia@|mGne@neG`mB`uFbqDf}EpoFv~DvfHlzCxtIlqBtxJ`eAdqKrVn}KsVp}KaeAdqKmqBrxJmzCztIw~DvfHg}EpoFauFbqDoeG`mB}mGne@enGka@cfGkiBcvFknDq~EcnFc`EwfHu{CivIqrBk{JweAytK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.161906,-82.852767),new google.maps.LatLng(49.661428,-82.08501))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kingston, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-12<br>Excluding the Trenton, ON MTCA."
po.paths=google.maps.geometry.encoding.decodePath("}omnG~uorMxVyzJteAeoJlrBexIr{CqvH~_EokGl~EgxE~uFm~CbfG{_BdnGo^|mGta@peGrbBbuFn`Dj}EjyEx~DnkGpzCluHpqBbvIbeAjlJrVtwJsVtwJceAllJqqB`vIqzCnuHy~DnkGk}EhyEcuFn`DqeGtbB}mGta@enGq^cfG{_B_vFm~Cm~EexE_`EokGs{CsvHmrBcxIueAeoJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.975517,-76.947421),new google.maps.LatLng(44.475039,-76.250356))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="London, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-14"
po.paths=google.maps.geometry.encoding.decodePath("edegGvjinNxVisJteA{gJlrBkqIp{CopH~_EefGj~E_tE`vFk{C`fG_~AdnG_^|mG|`@peGt`BduFf}Cj}E`uEz~DdfGpzCloHpqBloIbeAfeJrVjpJsVjpJceAheJqqBloIqzCjoH{~DffGk}E`uEeuFf}CqeGt`B}mGz`@enG}]afG_~AavFk{Ck~E_tE_`EgfGq{CmpHmrBkqIueA{gJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.785795,-81.49559),new google.maps.LatLng(43.285317,-80.812188))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moosonee, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-16"
po.paths=google.maps.geometry.encoding.decodePath("mqqyHpu~jNzVwrLxeAkeLprB{jKv{CedJb`EurHp~EwwFdvFiuDdfGqmBdnGsb@|mGfg@neGrqB~tFlxDd}EhyFt~DtrHjzCrbJlqBxgK`eAfaLpVbnLqVdnLaeAfaLmqBxgKkzCrbJu~DrrHe}EjyF_uFjxDoeGtqB}mGdg@enGqb@efGqmBevFkuDq~EwwFc`EsrHw{CgdJqrB{jKyeAieL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.04135,-81.007159),new google.maps.LatLng(51.540872,-80.208397))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Muskoka, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-18"
po.paths=google.maps.geometry.encoding.decodePath("_|_sGx|_cNxVy_KveA_tJlrBu|Ir{CszH~_E_oGl~Ea{E`vFm`DbfGcaBdnG{^|mGdb@peG~cBbuFrbDh}Eb|Ex~D~nGpzCnyHnqBpzIdeA`qJpVp|JqVp|JeeA`qJoqBpzIqzCnyHy~D|nGi}Ed|EcuFrbDqeG~cB}mGdb@enG{^cfGcaBavFo`Dm~E_{E_`E_oGs{CszHmrBu|IweA_tJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.724961,-79.656391),new google.maps.LatLng(45.224483,-78.950276))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Niagara, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-20"
po.paths=google.maps.geometry.encoding.decodePath("ap{dGhrfcNyrq@{|v@`_@}Zhg@oIfXqChOuG`b@iBz_@rGhShc@~TbRdMzHpMnQnBpMle@|~@lYgk@|LkNjQcH|VyClaB~r@nPhUhj@|a@~p@i_Dr}Wxt@jiFvou@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.908333,-79.3375),new google.maps.LatLng(43.1675,-79.042317))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Bay, ON [TA]<br>Class E<br>2400ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-22"
po.paths=google.maps.geometry.encoding.decodePath("ile{GhgwcN~QkzHpw@upHh{As}Gd|ByaGhyC_~EtqDqsDrdEqcClqEsoA|wEkYvwEr[`qErqA~cE`eC|pDhtDpxC`~El{B~`GvzAb|Gbw@tnHzQbxH{QbxHcw@tnHwzAd|Gm{B~`GqxC`~E}pDhtD_dE~dCaqEtqAwwEr[}wEkYmqEsoAsdEscCuqDosDiyCa~Ee|BwaGi{Au}Gqw@upH")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.163802,-79.712321),new google.maps.LatLng(46.56342,-79.133234))
a.airClass="E"
a.altLow="2400"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Pembroke, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-24<br>Excluding the Montreal FIR."
po.paths=google.maps.geometry.encoding.decodePath("wtmxGzeovMxV_fKveA}yJlrBgbJt{Cu_I~_EisGl~Eo~E`vF_cDbfGsbBdnGi_@|mGvb@peGreBbuFfeDh}Ev_Fx~DhsGnzCl~HnqB``JbeAzvJrVpbKsVpbKceA|vJoqB~_JozCn~Hy~DhsGi}Et_FcuFfeDqeGreB}mGxb@enGk_@cfGqbBavFacDm~Eo~E_`EisGu{Cs_ImrBibJweA}yJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.614683,-77.610332),new google.maps.LatLng(46.114205,-76.893002))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Peterborough, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-26<br>Excluding the Trenton, ON MTCA and the Oshawa, ON Transition Area."
po.paths=google.maps.geometry.encoding.decodePath("omnnGxih}MxV{zJveAeoJlrBgxIr{CqvH|_EqkGl~EgxE`vFm~CbfG{_BbnGo^~mGta@peGrbBbuFn`Dj}EjyEx~DnkGpzCnuHpqBdvIbeAjlJrVvwJsVtwJceAllJqqBbvIqzCnuHy~DpkGk}EhyEcuFn`DqeGtbB_nGta@cnGo^cfG}_BavFm~Cm~EgxE}_EokGs{CsvHmrBexIweAeoJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.980239,-78.711894),new google.maps.LatLng(44.479761,-78.014773))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Port Colborne, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-28"
po.paths=google.maps.geometry.encoding.decodePath("{z|bGv~tdNorv@vuAu`Febp@kiFwou@qsW}hB`e@isE~|@oo@tu@jb@~oBxg@noAlgAbeCgSrz@gt@bfBadFhcA{qAnJitDxv@osArrA{{@b}@mTvqCYvuBtz@nO~BtyHjwB|_n@r|{B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.5875,-79.588889),new google.maps.LatLng(43.072006,-78.905931))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sarnia (Chris Hadfield), ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-30"
po.paths=google.maps.geometry.encoding.decodePath("ob~fGn}juNxVcsJteAugJlrBcqIp{CipH~_EafGj~E{sE`vFg{C`fG_~AdnG}]|mG|`@peGp`BduFf}Cj}EztEz~D`fGpzCfoHpqBfoIbeA`eJrVbpJsVdpJceA`eJqqBfoIqzCfoH{~D`fGk}EztEeuFd}CqeGr`B}mGz`@enG}]afG}}AavFi{Ck~E{sE_`EafGq{CgpHmrBeqIueAugJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.749683,-82.650389),new google.maps.LatLng(43.249205,-81.967389))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sault Ste. Marie, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-32"
po.paths=google.maps.geometry.encoding.decodePath("g{f|G~vxbOzVojKteAg~JnrBifJr{CkcI``EmvGn~E_aF`vF{dDbfGucBdnGu_@|mGfc@neGxfBbuFdgDh}EfbFx~DlvGnzCbbInqB~cJbeAb{JrV|fKsV|fKceAb{JoqB~cJozCbbIy~DjvGi}EhbFcuFdgDoeGxfB}mGdc@enGs_@cfGucBavF{dDo~EaaFa`EkvGs{CkcIorBifJueAi~J")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.235239,-84.87218),new google.maps.LatLng(46.734761,-84.146709))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sudbury, ON [TA]<br>Class E<br>2400ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-34"
po.paths=google.maps.geometry.encoding.decodePath("_nx|G~_dlN~Q{{Hpw@erHh{A__Hf|BacGhyCc_FtqDktDpdEedCnqEapAzwEmYxwEv[`qE`rA~cEteC|pDduDnxCb_Fn{BfbGtzAn}Gbw@dpHzQpyH{QryHcw@dpHuzAn}Go{BfbGoxCb_F}pDduD_dEteCaqE`rAywEv[{wEmYoqEapAqdEedCuqDktDiyCc_Fg|BacGi{A__Hqw@erH")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.425191,-81.089827),new google.maps.LatLng(46.824809,-80.507951))
a.airClass="E"
a.altLow="2400"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Timmins, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-36"
po.paths=google.maps.geometry.encoding.decodePath("w`~hHb{toNxVszKxeA_nKnrB}tJt{CqpI``EwaHp~EejFbvFmkDbfGugBdnGy`@|mGxd@neGdkB`uF`nDh}EnkFt~DxaHnzCboIlqBjrJbeAnjKpVrvKqVtvKceAljKmqBjrJozCdoIu~DvaHi}EpkFauF`nDoeGbkB}mGzd@enG{`@cfGsgBcvFokDq~EejFa`EwaHu{CopIorB_uJyeA}mK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.319961,-81.754112),new google.maps.LatLng(48.819483,-80.999221))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wawa, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-38"
po.paths=google.maps.geometry.encoding.decodePath("sgheHr{ndOxVwuKveAgiKnrBqpJt{CqlI``Ek~Gn~EmgFbvFmiDbfGofBdnGo`@|mGjd@neGziBbuF~kDf}EvhFv~Dh~GnzCfkInqB`nJ`eAxeKrV|qKsV|qKaeAzeKoqB~mJozCfkIw~Dj~Gg}EvhFcuF~kDoeGxiB}mGjd@enGo`@cfGmfBcvFoiDo~EmgFa`Ei~Gu{CqlIorBqpJweAgiK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.716906,-85.159685),new google.maps.LatLng(48.216428,-84.413649))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wiarton, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-40"
po.paths=google.maps.geometry.encoding.decodePath("mesqGbg`nNxVi~JveAorJlrBg{Ir{CmyH~_E{mGl~EezE`vFy_D`fGw`BdnGw^|mG~a@peGrcBduF|aDh}Eh{Ex~DzmGpzCfxHnqBdyIbeAroJrV`{JsV~zJceAtoJoqBbyIqzCfxHy~D|mGi}Eh{EeuF|aDqeGpcB}mG~a@enGw^afGu`BavF{_Dm~EezE_`E{mGs{CkyHmrBi{IweAorJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.496072,-81.458879),new google.maps.LatLng(44.995594,-80.755566))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Windsor, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-42"
po.paths=google.maps.geometry.encoding.decodePath("cv`cGxytvN`p|Ag{Cx{^vmU`b`@xh|@ehLzuZwsa@nvNwrH}dBcpA{Y}iCam@qsHlkAinKcd@aeCieBmyDy{ActBakByw@mcBkgAotGcR_|Duj@exD}m@auAkdDm{Ugg\\oi\\u~@{~@kq@eb@ya@}o@kp@sqAsL{q@Hax@dOyk@|Zad@`Hq_@eHkzAoWck@y~@sU_~@ahAo^is@qc@ki@ae@eYccBw`D")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.795556,-83.149683),new google.maps.LatLng(42.607222,-82.498333))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.4.1-43 [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.4.1-43"
po.paths=google.maps.geometry.encoding.decodePath("{cqlGxx_aN??we@_sJnFwvJzt@eoJvaBs|InkCq_IdqDwxGjqEsiFhkFosDb~F_xBhiGcy@plGlEtfGvjAb{nCpkv@??jbFnpBxoErgDfzDrqEf`DnvFlbCnuGjaBvmH~}@x~Hl[dhInxBbxrC??_RnjIyj@fdI}nAfwHgqBxbHyqC`fGa{v@npuA??cwDbwFasE~hEihFlvCgwFr_Bm_Gbf@s`GsRwzF{lA_nFeeCuzE{yDiaEoiFyfDunGk~{@at~B??q{DclNscCwnOekYg{wC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=879.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.922222,-80.722681),new google.maps.LatLng(44.172104,-78.549074))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moosonee, ON [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-4"
po.paths=google.maps.geometry.encoding.decodePath("ycrzHbr~jNzf@}wUjuBgaUf`EmtS`eGgsQvaIw_OjtJs|Kr{KgmH`vL}tD`cMww@lbMrdA~sLh`ElxKruHppJbaLr}Hv_OdaGvnQb}D`lSjsBzuTbf@`kUcf@~jUksBzuTc}D`lSeaGvnQs}Hv_OqpJbaLmxKruH_tLh`EmbMrdAacMuw@avL_uDs{KemHktJs|KwaIw_OaeGgsQg`EotSkuBeaU")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.875121,-81.27285),new google.maps.LatLng(51.707657,-79.941595))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sault Ste. Marie, ON [CAE]<br>Class E<br>2800ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-6"
po.paths=google.maps.geometry.encoding.decodePath("{kg}G~vxbOxf@ctSfuBq_S~_EewQvdGg|OjaIupMbtJ_wJh{KcrG|uLaeD`cMms@lbMh}@dtLxmDtxKnxGzpJnzJ|}HtpMnaGxxOh}DtpQpsBzvRdf@fjSef@fjSqsBzvRi}DtpQoaGxxO}}HtpM{pJnzJuxKnxGetLxmDmbMh}@acMms@}uLceDi{KarGctJ_wJkaIupMwdGg|O_`EewQguBq_S")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.068732,-85.113995),new google.maps.LatLng(46.901268,-83.904894))
a.airClass="E"
a.altLow="2800"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area a) [CAE]<br>Class E<br>2500ft to 6500ft"
mt="Control Area Extensions<br>CDAH section: 3.4.2-8"
po.paths=google.maps.geometry.encoding.decodePath("khihGtprtNq}mF{jnSm|~BiukCiqhA}w\\_`VaiPmqs@gotAeaCw~a@js`@}|}@pcW}b`CpszHksMdg@h}ApdAnpFHp`Gv\\vaDlsKxyFtzFbyOx~ElmDc}Kldp@??u`Plm@{sOvmD_{N|{GmsMjjKl~_@bnqCtun@l~jC??hyQyoD`xPogIhhOyfMviMuxP`}Jm{S`VzejC`hb@ftbBlvc@emXjo@iyA|c@yFl{@|Et`BcPbqA|Tn~@ep@rcBbXl~@tBhf@}Lv_@wZhg@oIfXqChOuG`b@iBz_@rGhShc@~TbRdMzHpMnQnBpMle@|~@lYgk@|LkNjQcH|VyClaB~r@nPhUhj@|a@nV_GriAw_L~|@oo@tu@jb@~oBxg@noAlgAbeCgSrz@gt@bfBadFhcA{qAnJitDxv@osArrA{{@b}@mTvqCYvuBtz@nO~BtyHjwBb|sAlp~Elic@`ubFxufBp}_FA~bv@{oc@x`kAwsa@nvNwrH}dBcpA{Y}iCam@qsHlkAinKcd@aeCieBmyDy{ActBakByw@mcBkgAotGcR_|Duj@exD}m@auAkdDm{Ugg\\oi\\u~@{~@kq@eb@ya@}o@kp@sqAsL{q@Hax@dOyk@|Zad@`Hq_@eHkzAoWck@y~@sU_~@ahAo^is@qc@ki@ae@eY{cBc`D}f@c[wwC_y@{fDhDewEy_BstB_fAo|Ar@itDmfBep@zAebBtXqdBzu@oc@dG{iByRefAee@kuBa[keE`LwpBgq@acCuj@gcAan@wxAguBg{AojAcaA}Uuq@~r@qi@tRsa@yAisAy_AusxAi{k@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=598.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.676558,-83.149683),new google.maps.LatLng(46.133333,-76.191722))
a.airClass="E"
a.altLow="2500"
a.altHigh="6500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area b) [CAE]<br>Class E<br>6500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-9"
po.paths=google.maps.geometry.encoding.decodePath("khihGtprtNmzoAw}sE??lia@tmEtsa@acAx|`@_{H`i_@qhPzy\\seWzqYyl]psUoyb@pbQsgg@tbLatj@~wFk|l@xlAe_n@vlb@vd{Alic@`ubFxufBp}_FA~bv@{oc@x`kAwsa@nvNwrH}dBcpA{Y}iCam@qsHlkAinKcd@aeCieBmyDy{ActBakByw@mcBkgAotGcR_|Duj@exD}m@auAkdDm{Ugg\\oi\\u~@{~@kq@eb@ya@}o@kp@sqAsL{q@Hax@dOyk@|Zad@`Hq_@eHkzAoWck@y~@sU_~@ahAo^is@qc@ki@ae@eY{cBc`D}f@c[wwC_y@{fDhDewEy_BstB_fAo|Ar@itDmfBep@zAebBtXqdBzu@oc@dG{iByRefAee@kuBa[keE`LwpBgq@acCuj@gcAan@wxAguBg{AojAcaA}Uuq@~r@qi@tRsa@yAisAy_AusxAi{k@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=795.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.676558,-83.149683),new google.maps.LatLng(43.884294,-79.607972))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area c) [CAE]<br>Class E<br>6500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-10"
po.paths=google.maps.geometry.encoding.decodePath("mlzbGxl{dN??{uAjpp@otGlgo@eqMprl@o`Stsh@o}W~mc@oc\\pe]mn_@p_Va{a@bbNwfc@dtEapc@s`Akvb@}wI_z`@mgRq|]mfZu`Zmla@}iU}qg@{|Oyol@y~Iq`p@quCe`r@jv@glr@nbGkdq@pfM}in@f|Rk`j@z}Wold@xf\\qt]tx_@ikUnqDrdO??hyQyoD`xPogIhhOyfMviMuxP`}Jm{S`VzejC`hb@ftbBlvc@emXjo@iyA|c@yFl{@|Et`BcPbqA|Tn~@ep@rcBbXl~@tBhf@}Lv_@wZhg@oIfXqChOuG`b@iBz_@rGhShc@~TbRdMzHpMnQnBpMle@|~@lYgk@|LkNjQcH|VyClaB~r@nPhUhj@|a@nV_GriAw_L~|@oo@tu@jb@~oBxg@noAlgAbeCgSrz@gt@bfBadFhcA{qAnJitDxv@osArrA{{@b}@mTvqCYvuBtz@nO~BtyHjwBjnp@tjbC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=811.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.574953,-81.126132),new google.maps.LatLng(44.739466,-77.977606))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area d) [CAE]<br>Class E<br>6500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-11"
po.paths=google.maps.geometry.encoding.decodePath("wimoG`}baNe|Igw^m|~BiukCiqhA}w\\_`VaiPmqs@gotAeaCw~a@js`@}|}@pcW}b`CpszHksMdg@h}ApdAnpFHp`Gv\\vaDlsKxyFtzFbyOx~ElmDc}Kldp@??u`Plm@{sOvmD_{N|{GmsMjjKl~_@bnqCdci@xxzB??}c[zmQ{rXvvWquUdz\\wgR|ha@alNt_e@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=828.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.058258,-78.99105),new google.maps.LatLng(46.133333,-76.191722))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area e) [CAE]<br>Class B<br>17000ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.4.2-12"
po.paths=google.maps.geometry.encoding.decodePath("qliiG~~|zM??a}Jl{SwiMtxPihOxfMaxPngIiyQxoDuun@m~jCm~_@cnqC??lsMkjK~zN}{GzsOwmDt`Pmm@b}Kmdp@nlrAnl_A_VvseF")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=906.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.631131,-78.329489),new google.maps.LatLng(44.453319,-76.466842))
a.airClass="B"
a.altLow="17000"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area f) [CAE]<br>Class E<br>3500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-13"
po.paths=google.maps.geometry.encoding.decodePath("khihGtprtNorVg}JohtIzhlAog}A`tqEqpa@c|^s_Tn~YkbB`fOluBlnSucBj~KzkJnaNdVvcIk|GhaCkbBjzDuaEaAwkFx{LomCbu@qbEhkCi|AkaA}gAdnBwcHbXkk@msAmeBjwA_tEfuBq`H`k@auOeyEutA`k@uRd_@yy@jb@iKl`A~G`m@bPri@hKfqA{C~bAcqAxbBpe@hhEznEvsD|f@xaAfHdbAFnlBkj@jcE_o@pgBiIphEz`ApdCeKd_DxfAnuCjaFb}Dsp@hzNi{`@pfg@g`f@z{M??goEisP{iCs_R{bAgyR}w{@ywtU??zTmuXtgBggX|is@eokG??ffFazYtgIgrWh`LyqTdlNq|PzhPkvLhwQgtGdnJaejGxy{@?daCv~a@lqs@fotA~_V`iPhqhA|w\\l|~BhukCd|Ifw^??maKfbl@gsEhin@k_@hfo@psCpxn@fdIh`m@~kNp_j@bfSfye@lnWtq`@ja[zmZ~{]vsSf_`@~rKlzoAv}sE")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=609.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.4703,-84.839164),new google.maps.LatLng(47.21175,-77.25))
a.airClass="E"
a.altLow="3500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Southern Ontario Low Level Control Area g) [CAE]<br>Class E<br>3500ft to 6500ft"
mt="Control Area Extensions<br>CDAH section: 3.4.2-14"
po.paths=google.maps.geometry.encoding.decodePath("yczjG|q}mN??g_`@_sK_|]wsSka[{mZmnWuq`@cfSgye@_lNq_j@gdIi`m@qsCqxn@j_@ifo@fsEiin@laKgbl@|drCzsyK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=896.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.884294,-81.093592),new google.maps.LatLng(44.73885,-78.99105))
a.airClass="E"
a.altLow="3500"
a.altHigh="6500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Timmins, ON [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-16"
po.paths=google.maps.geometry.encoding.decodePath("uyyjHfaiqNzgm@yxdE??lbPcfMnqQibHriRgcCloRv\\|bR~|DpdQtvIduOteNnvM|eRdjK|sUnrHxlXbrEdnZtkBnv[bBnd\\oeB~w[elEhqZamHhqXieKxyUirM|lR}qOtmNebQp_JsaRffEgoRhf@mjRwyBmsQayGujP_qLgqNq|P}hLuwTwsIe~WypFmnZ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=902.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.991049,-82.249914),new google.maps.LatLng(49.125556,-80.490526))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wawa, ON [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.4.2-18"
po.paths=google.maps.geometry.encoding.decodePath("ssefH`_vdOzf@}fTfuBwqS``EehRzdGokPnaIw}MdtJmaKj{KsyG|uLoiDbcMst@lbMh_AbtL|rDpxKp`HxpJdeKz}Hv}MjaGxgPh}DdaRlsBhhSff@f|Sgf@f|SmsBhhSi}DdaRkaGxgP{}Hv}MypJdeKqxKp`HctL|rDmbMh_AccMst@}uLoiDk{KsyGetJmaKoaIw}M{dGokPa`EehRguBwqS")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.534287,-85.44455),new google.maps.LatLng(48.366824,-84.201561))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Trenton, ON d) [TCA]<br>Class E<br>700ft AGL to 17000ft"
mt="Terminal Control Areas<br>CDAH section: 3.4.3-5"
po.paths=google.maps.geometry.encoding.decodePath("arxkGfva}Muun@m~jCm~_@cnqC??rrNq_Ld~OacHpxPyeDhdQyd@faQnzAloPzxEloOfqIbbNr`MrhLddPncJtzRmIl}mD??a}Jl{SwiMtxPihOxfMaxPngIiyQxoD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=915.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.633144,-78.329489),new google.maps.LatLng(44.453319,-76.716712))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="17000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Trenton, ON e) [TCA]<br>Class E<br>2200ft AGL to 17000ft"
mt="Terminal Control Areas<br>CDAH section: 3.4.3-6"
po.paths=google.maps.geometry.encoding.decodePath("cbiiGp`nuM??esJgrSk}LetPozNkgMyiPwmIajQmjEczQkr@b}Kmdp@|_rAxbwB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=960.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.633144,-77.08185),new google.maps.LatLng(44.124514,-76.466842))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="17000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON a) [TCA]<br>Class C<br>1700ft to 2000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-8"
po.paths=google.maps.geometry.encoding.decodePath("cnyhG`hrcN??nmDvoDpsClxEdvBjxFduAzpGtq@daHrLzhHyVrgHo{@r}Go~A~jGq~BjpF{zCnnEmrDlfDudEfyBaqEjhA_wEbUqvEy\\wnEcsA??bGon@jAso@qBoo@mH}m@_Nck@eS}f@wWua@s[m[u^iTy`@uL_b@oDcb@tAka@zIk_@dRst@fgA??{vCkgEm{BaiFk}AwbGo|@cuG_Zo_HhGuaHlj@s{GhlAmmG`lBkwF??f`Au}@dx@qkA`o@uvA`e@u_Bx|Jq|AtqBeW|`BfeM??plBkHdlBhOfiBze@vcBn{@p{ArpAxvIogS")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=967.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.458302,-79.907825),new google.maps.LatLng(43.857666,-79.397297))
a.airClass="C"
a.altLow="1700"
a.altHigh="2000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON b) [TCA]<br>Class C<br>2000ft to 2500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-9"
po.paths=google.maps.geometry.encoding.decodePath("ov}hGdt`cN??`rFvrCxzEbmEj~Dh}Fj|CbfH|uBjfI~kAh}I|_@bjJeKplJyw@ndJ}bBdrIckCbvHioDdqGmnEddFqgFppD_zFvwBqeGbv@ewBufL??ouC}FksCcd@cnCy_A??bGon@jAso@qBoo@mH}m@_Nck@eS}f@wWua@s[m[u^iTy`@uL_b@oDcb@tAka@zIk_@dRst@fgA{_F`nH??atDixFcsCm_HaoBi}HahAorI__@q~I|HcaJnr@azIdzA_jI??wlAub@igAst@k`AwcAuw@eqAwm@s|Aob@qeBaW}kB??bjDcoIjjEcjHlhF{{Fj}D}o@`aMz|K|tBt{PtqBeW|`BfeM??plBkHdlBhOfiBze@vcBn{@p{ArpAxjKkiV??mO{iBmZmeBke@q~Amo@kuAux@wiA")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=955.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.408487,-79.974967),new google.maps.LatLng(43.943711,-79.244325))
a.airClass="C"
a.altLow="2000"
a.altHigh="2500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON c) [TCA]<br>Class C<br>2500ft to 3500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-10"
po.paths=google.maps.geometry.encoding.decodePath("e_okGz``eNx^iuNl}AyeN`yCggM`pEwzKp`GqaJbiHu}GphIcqE|}Ik~BphJ}g@fhJjm@||IdcC`gIttEfgHp_Hn~FraJdnExxKpwCtcMj|A~`Nl^zoNm^zoNk|A~`NqwCtcMenEzxKo~FpaJggHp_HagIttE}|IdcCghJlm@qhJ_h@}}Ik~BqhIcqEciHu}Gq`GqaJapEwzKayCggMm}AyeN")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.325041,-80.091962),new google.maps.LatLng(43.99107,-79.171371))
a.airClass="C"
a.altLow="2500"
a.altHigh="3500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON d) [TCA]<br>Class C<br>3500ft to 4500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-11"
po.paths=google.maps.geometry.encoding.decodePath("cmvgGlzwgN??c_Fo`BghF{i@ejFjHafFl|@y{EboB{kEx~CmvDljEi|CvpFk~BnpG??y`Mgq@gsLiaDsyKcdGktJy_JudI}qLukGywNckEsoPwdCqwQqz@mnRhOosRtzAwfRncDmhQtgFqyObeHo{MjzIapKteKqyH`fLmzEpzLouBrbMsM`~LhxAdkLxcEblGhpVzgJqyF??t`I~pKblGjtMjrE|hObsCfpPfpAhiQhKlsQ_x@rnQ{{BvzPq|DlxOmxFlhNqoHhiL")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=927.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.225718,-80.228567),new google.maps.LatLng(44.090478,-79.034354))
a.airClass="C"
a.altLow="3500"
a.altHigh="4500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON e) [TCA]<br>Class C<br>4500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-12"
po.paths=google.maps.geometry.encoding.decodePath("qczgGp`dbN??ttI|nLjxGnzNpuEntPnlC`~Ql_A~uRsMz{Rc|AfoRahDvpQ_oF|`PcoHhaNifJnsKcsKvyHetLnvEmhMplBgoMBmhMylBatL{wEwrK{|HoeJuxKmmHqhNklF}iPcdDwzQawAsyReGgeSxfAq}RttCqbRb~EkuPv`HewNxzIcjLljKopIhnLcmFjeMacC|nMoU|jMjvAlwLtgEblGhpVzgJqyF")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=927.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.225769,-80.227863),new google.maps.LatLng(44.089958,-79.034046))
a.airClass="C"
a.altLow="4500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Detroit, MI TCA (Windsor, ON) a) [TCA]<br>Class C<br>3000ft to 4000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-14"
po.paths=google.maps.geometry.encoding.decodePath("aamaG|whyN??xjI_wC~yIkcAp}IhJdwInyAbgIzeDtmHlmFvkG~mHzaFnfJgeRbvGinOsmDysHhkAinKgd@{dC}dBgyDa|AcuBckBov@wbBegA{tGksAa{K")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.942731,-83.149658),new google.maps.LatLng(42.342731,-82.917858))
a.airClass="C"
a.altLow="3000"
a.altHigh="4000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Detroit, MI TCA (Windsor, ON) b) [TCA]<br>Class C<br>4000ft to 6000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-15"
po.paths=google.maps.geometry.encoding.decodePath("cgraGh}sxN??zlLoxDl_M{hA`bM`_@dwLrgCb_LxkFnzJnhItjId{KdqGfaNcI`Tcta@zvNinOsmDysHhkAinKgd@{dC}dBgyDa|AcuBckBov@wbBegA{tGsmBqkModDg{UtXbqB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.861939,-83.149658),new google.maps.LatLng(42.373419,-82.80496))
a.airClass="C"
a.altLow="4000"
a.altHigh="6000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Detroit, MI TCA (Windsor, ON) c) [TCA]<br>Class C<br>6000ft to 10000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.4.3-16"
po.paths=google.maps.geometry.encoding.decodePath("{o_bG|{cxN??lvNgtG`tOmqCx~O}Q~xOrkBzbOjgFf}Mr{IfiLbeMdhJz`PeyHnpScta@zvNinOsmDysHhkAinKgd@{dC}dBgyDa|AcuBckBov@wbBegA{tGsmBqkModDg{Ugy_@wl_@djSn}R")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=951.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(41.813281,-83.149658),new google.maps.LatLng(42.541458,-82.662158))
a.airClass="C"
a.altLow="6000"
a.altHigh="10000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kitchener/Waterloo, ON [CZ]<br>Class C<br>SFC to 4000ft (2900ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.4.4-3"
po.paths=google.maps.geometry.encoding.decodePath("ouwhGh}qiNzFu{BpVywBje@kpB`s@meBd_AkwAjiAqfAfqAws@rvAe_@jyAuIhyA`JrvAn_@bqAzs@fiAvfA`_AjwA~r@feBfe@dpBlVpwB|Fh{B}Fh{BmVnwBge@dpB_s@heBa_AhwAgiAvfAcqA|s@svAn_@iyA`JkyAwIsvAe_@gqAus@kiAsfAe_AkwAas@meBke@ipBqV{wB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.37758,-80.49331),new google.maps.LatLng(43.544087,-80.263912))
a.airClass="C"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="London, ON [CZ]<br>Class C<br>SFC to 3000ft (2100ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.4.4-5"
po.paths=google.maps.geometry.encoding.decodePath("qcdfGvyhnN|FwzBnV_wBje@qoB`s@wdBd_AuvAjiAcfAfqAks@rvA}^jyAsIjyA|IpvAf_@bqAps@fiAffA`_AvvA~r@pdBfe@joBnVtvBzFlzB{FlzBoVvvBge@hoB_s@rdBa_AvvAgiAdfAcqAps@qvAf_@kyA~IkyAuIsvA}^gqAis@kiAcfAe_AwvAas@udBke@qoBoV_wB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.949746,-81.265063),new google.maps.LatLng(43.116254,-81.037271))
a.airClass="C"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto/Billy Bishop Toronto City Airport, ON [CZ]<br>Class C<br>SFC to 2500ft (2200ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.4.4-7"
po.paths=google.maps.geometry.encoding.decodePath("czwhGdfocNyjKjiV??q{AspAwcBo{@giB{e@elBiOqlBjH}`BgeMuqBdW}tBu{PdfM{}D`{GvG??xpAvHnnAb\\bjA`m@|cAx|@`|@~jArr@hwA|g@jaBd\\`iBfP|mB")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.544822,-79.501056),new google.maps.LatLng(43.743972,-79.28))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto/Lester B. Pearson Intl, ON [CZ]<br>Class C<br>SFC to 2500ft (1900ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.4.4-9"
po.paths=google.maps.geometry.encoding.decodePath("anhjG|y_eN`JgnD|_@{hDvt@i~C|gA}nC|xAe{BbgBqcBdrB_iAtyBcl@p}B_Nl}BtNryBtl@~qBliAzfBxcBtxAd{BtgAtnCpt@z}Cx_@hhD`JpmDaJpmDy_@hhDqt@z}CugAvnCuxAb{B{fBxcB_rBliAsyBvl@m}BrNq}B_NuyBcl@erB_iAcgBqcB}xAe{B}gA}nCwt@i~C}_@{hD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.560667,-79.791712),new google.maps.LatLng(43.793777,-79.469399))
a.airClass="C"
a.altLow="0"
a.altHigh="2500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Hamilton, ON [CZ]<br>Class D<br>SFC to 4500ft (3700ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-12"
po.paths=google.maps.geometry.encoding.decodePath("edyeGddtfNsyK|ob@??mrB|x@gxBv[azBLixBa[esBsv@ujBwpAc_BohBwpAi}Bc`AknCqm@o{CuY_dDaE{gDvMyfDdb@_aDnu@qvCjgAugC`wA}tBhdB{~ArnBafAvuBgk@nyBeOvyBjKlvBlg@xoBlbA|eBl{A`yAvqBviAzdCfx@`tCxe@|~C")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.060033,-80.094282),new google.maps.LatLng(43.290093,-79.775189))
a.airClass="D"
a.altLow="0"
a.altHigh="4500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Oshawa, ON [CZ]<br>Class D<br>SFC to 3000ft (2500ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-14"
po.paths=google.maps.geometry.encoding.decodePath("u|qkGvdp`N|Fs|BnVyxBje@gqBbs@efBd_AaxAhiAegAfqAat@tvAm_@jyAyIhyAbJpvAv_@dqAht@fiAhgA`_A`xA|r@`fBhe@~pBlVnxBzFh|B{Ff|BmVnxBie@~pB}r@`fBa_A`xAgiAhgAeqAht@qvAv_@iyAbJkyAyIuvAm_@gqAat@iiAegAe_AaxAcs@efBke@gqBoVyxB")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.839524,-79.010586),new google.maps.LatLng(44.006031,-78.779414))
a.airClass="D"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sault Ste. Marie, ON [CZ]<br>Class D<br>SFC to 3000ft (2400ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-16"
po.paths=google.maps.geometry.encoding.decodePath("qjf{G~vxbO|FmbCnVk~Bje@qvBbs@}jBd_Ae|AjiAmjAfqAqv@rvA}`@jyAgJhyAtJrvAfa@bqAxv@fiArjA`_Ab|A|r@xjBhe@fvBlV`~BzF`bC{F~aCmV`~Bie@hvB}r@xjBa_Ab|AgiArjAcqAxv@svAfa@iyAtJkyAgJsvA}`@gqAqv@kiAmjAe_Ae|Acs@}jBke@qvBoVk~B")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.401746,-84.630357),new google.maps.LatLng(46.568254,-84.388532))
a.airClass="D"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Trenton, ON a) [CZ]<br>Class D<br>SFC to 2000ft (1700ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-18"
po.paths=google.maps.geometry.encoding.decodePath("anzlGh~_wMn_CfzI`rFyuArh@wmN??zpDiWdqDnTzkDt~@paDxfBjrCzkCz~BxlDtgBphEjmAj~Evp@rmFrR|uF}I~vFih@vpFkeAlcFm`BjoEsxBfuDimCvuCu}CvqBmiDhjAgpDr`@uqDaH_nDur@_eDu{AewCcbCydCsdDmnBgbEytAczEqx@okFuZyuFbByxFv`@itFj~@qhFdzA{uEfsBw|DniCs|C")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.952431,-77.75971),new google.maps.LatLng(44.285001,-77.296118))
a.airClass="D"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Trenton, ON b) [CZ]<br>Class D<br>2000ft to 6000ft (5700ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-19"
po.paths=google.maps.geometry.encoding.decodePath("unhmGheexMzNm{F`n@usFzkAmdFfgBgnEp_CuqDxsCuoCpcDiiBjnDw_AvsDkTtsDvU`nD~`AfcDfjBhsCdpC~~BrqDxfBvmEnkApcFxm@nrFvN~yFwN~yFym@nrFokApcFyfBvmE__CrqDisCdpCgcDfjBanD~`AusDvUwsDiTknDy_AqcDiiBysCuoCq_CuqDggBgnE{kAmdFan@usF")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.952382,-77.759993),new google.maps.LatLng(44.285396,-77.296119))
a.airClass="D"
a.altLow="2000"
a.altHigh="6000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Windsor, ON a) [CZ]<br>Class D<br>SFC to 700ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-21"
po.paths=google.maps.geometry.encoding.decodePath("mmhaGzerxN??fbBiu@~gBc\\bjBoC`iBjS~dBpk@x}AjbA|sAhwAlgApiB~x@rxBth@fdCfWzkC~DjoCgKrnCi]viCmn@t`Cc~@zsB}kAtcBswAlpAq`Bvz@wfBlc@yiB|JmiB{Mu`Bg}Aar@yfBchAqdI}@}`C_[kwA{K}mBcm@k`@gHmdAvvC_sR")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.174861,-83.093352),new google.maps.LatLng(42.343394,-82.823519))
a.airClass="D"
a.altLow="0"
a.altHigh="700AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Windsor, ON b) [CZ]<br>Class D<br>700ft AGL to 3000ft (2400ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-22"
po.paths=google.maps.geometry.encoding.decodePath("ulpaGh`|xN??l}@grB~jAebBfvAmoA~~Aiz@`eBsc@dhByKfhBhJheBbb@n_Bzx@|vA|mAxkAx`Bn~@zpBlo@r}B|^xfCpMblCgBjmC}SrjCae@|cCau@jyBscAjkBapAfzAkzApfA}aBvp@wfBpYqhBpA_gBqViaAg|@yw@mcBkgAotGcR_|Duj@exD}m@auAipAgfJ")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.174963,-83.093052),new google.maps.LatLng(42.359953,-82.823316))
a.airClass="D"
a.altLow="700AGL"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Borden, ON (Heliport) [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-25"
po.paths=google.maps.geometry.encoding.decodePath("udvmGzvvfN|Fk}BnVoyBje@}qB`s@yfBd_AqxAjiAqgAfqAmt@rvAs_@jyA{IjyAfJpvA|_@bqArt@fiAtgA`_ArxA~r@tfBfe@tqBlVdyB|F~|B}F~|BmVfyBge@tqB_s@tfBa_ApxAgiAtgAcqAtt@qvA|_@kyAdJkyA{IsvAs_@gqAkt@kiAsgAe_AqxAas@yfBke@}qBoVoyB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.188969,-80.027938),new google.maps.LatLng(44.355476,-79.795396))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Buttonville Muni, ON [CZ]<br>Class E<br>SFC to 2000ft (1400ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-27"
po.paths=google.maps.geometry.encoding.decodePath("{`{iGpfscNy|Jr|A??yj@tkBow@x_BsbA~pAykAr_AurAjl@awAxWyxAjB}wAaQitAaf@enA{y@weA}kAc{@w{Awn@whB{`@qrBaR}xBsBu{BzJwzB`Z_vBjh@wmB??db@oGn`@kPz]aXhZa_@~Uce@zP}i@jKqm@tEyo@r|OijC`aMz|K|tBt{P")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.725103,-79.485266),new google.maps.LatLng(43.945388,-79.244325))
a.airClass="E"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Downsview, ON [CZ]<br>Class E<br>SFC to 1700ft (1100ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-29"
po.paths=google.maps.geometry.encoding.decodePath("gltiGrt`dN??upBt[kkB|v@scB`nAiyAdcBulAtuBg~@deComG}_O??hgAm~@f~@{nA~s@e|Alh@yfBx|Jq|AtqBeWv`BfeM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.691083,-79.553667),new google.maps.LatLng(43.822994,-79.398308))
a.airClass="E"
a.altLow="0"
a.altHigh="1700"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Earlton (Timiskaming Regional), ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-31"
po.paths=google.maps.geometry.encoding.decodePath("aurbHnnjfN|FmeCnViaCje@iyBbs@mmBd_Ai~AjiAelAfqAyw@rvAua@jyAqJjyA~JpvA`b@bqA`x@fiAjlA`_Af~A|r@hmBhe@~xBlV~`CzF~dC{F`eCmV~`Cie@|xB}r@hmBa_Ah~AgiAjlAcqA`x@qvA`b@kyA|JkyAoJsvAua@gqAyw@kiAglAe_Ag~Acs@mmBke@iyBoViaC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.611746,-79.97258),new google.maps.LatLng(47.778254,-79.725198))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Elliot Lake Muni, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-33"
po.paths=google.maps.geometry.encoding.decodePath("oglzGrg|vN|FabCnVc~Bje@evBbs@wjBd_A{{AjiAijAfqAmv@rvAy`@jyAgJhyArJrvAda@bqAtv@fiAljA`_Az{A|r@rjBhe@|uBlVv}BzFtaC{FvaCmVv}Bie@|uB}r@pjBa_A|{AgiAljAcqAtv@svAda@iyArJkyAgJsvAy`@gqAmv@kiAijAe_A{{Acs@wjBke@evBoVc~B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.268135,-82.682005),new google.maps.LatLng(46.434643,-82.440772))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gore Bay-Manitoulin, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-35"
po.paths=google.maps.geometry.encoding.decodePath("ifqwGpo}vN|F_aCnV_}Bje@guBbs@wiBd_Ac{AjiAuiAfqA}u@rvAq`@jyAeJhyApJrvAz`@bqAdv@fiAxiA`_Ab{A|r@tiBhe@|tBlVt|BzFr`C{Fr`CmVt|Bie@~tB}r@riBa_Ab{AgiAxiAcqAdv@svA|`@iyAnJkyAcJsvAq`@gqA}u@kiAuiAe_Ac{Acs@yiBke@euBoVa}B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.802024,-82.687378),new google.maps.LatLng(45.968531,-82.448177))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kapuskasing, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-37"
po.paths=google.maps.geometry.encoding.decodePath("g~amHnejvN|FajCnV{eCle@o}B`s@gqBf_AsaBhiA{nAhqAwy@rvA{b@jyA}JhyAjKrvAhc@bqA`z@diA`oA`_ApaB~r@bqBfe@d}BlVleCzFriC{FtiCmVleCge@d}B_s@bqBa_ApaBeiA`oAcqA`z@svAfc@iyAjKkyA{JsvA{b@iqAyy@iiA{nAg_AqaBas@gqBme@o}BoV{eC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.328413,-82.596849),new google.maps.LatLng(49.49492,-82.340928))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Kingston, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-39"
po.paths=google.maps.geometry.encoding.decodePath("i_mmG~uorM|Fg}BnVkyBje@{qBbs@wfBd_AmxAhiAqgAfqAkt@tvAs_@jyAyIhyAdJpvAz_@dqArt@fiAtgA`_AnxA|r@rfBhe@pqBlVbyBzFz|B{F||BmVbyBie@pqB}r@rfBa_AnxAgiAtgAeqApt@qvA|_@iyAdJkyAyIuvAs_@gqAkt@iiAqgAe_AoxAcs@wfBke@yqBoVkyB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.142024,-76.715067),new google.maps.LatLng(44.308531,-76.482711))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moosonee, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-41<br>Excluding the airspace to 190ft within the area bounded by a line beginning at: N51:14:56.00 W080:37:02.00 to N51:14:29.00 W080:36:52.00 thence clockwise along the arc of a circle of 3 miles radius centred on N51:17:28.00 W080:36:28.00 (Moosonee, ON - AD) to N51:14:32.00 W080:37:26.00 to N51:14:56.00 W080:37:02.00 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("spjxHpu~jNvCwuAbMcsA~U}mAf^ifAne@q|@rk@{p@hp@uc@rs@oUdu@mFdu@rFps@rUhp@xc@pk@~p@le@n|@d^ffA~UxmA`M~rAvCpuAwCruAaM|rA_VxmAe^ffAme@p|@qk@|p@ip@xc@qs@rUeu@tFeu@oFss@mUip@uc@sk@}p@oe@o|@g^ifA_V}mAcMcsA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.241159,-80.687655),new google.maps.LatLng(51.341063,-80.527901))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Muskoka, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-43"
po.paths=google.maps.geometry.encoding.decodePath("ik_rGx|_cN|F}~BnV_{Bje@isB`s@ahBd_AuyAjiAohAfqAau@rvA_`@jyA_JjyAjJpvAh`@bqAhu@fiArhA`_AryA~r@~gBfe@`sBlVtzB|Fp~B}Fp~BmVrzBge@bsB_s@|gBa_AtyAgiAphAcqAhu@qvAj`@kyAhJkyA}IsvAa`@gqAau@kiAmhAe_AuyAas@ahBke@ksBoV_{B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.891469,-79.42102),new google.maps.LatLng(45.057976,-79.185647))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Niagara District, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-45"
po.paths=google.maps.geometry.encoding.decodePath("gccgGzefbN|Fa{BnViwBje@{oBbs@_eBd_A}vAhiAifAfqAms@tvAa_@jyAuIhyA~IpvAj_@dqAts@fiAjfA`_A~vA|r@xdBhe@toBlV~vBzFvzB{FvzBmV`wBie@roB}r@zdBa_A|vAgiAlfAeqAts@qvAh_@iyA~IkyAsIuvAa_@gqAos@iiAifAe_A}vAcs@}dBke@{oBoViwB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.108413,-79.285858),new google.maps.LatLng(43.27492,-79.057475))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="North Bay, ON [CZ]<br>Class E<br>SFC to 5000ft (3800ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-47<br>Excluding the airspace to 1500ft within the area bounded by a line beginning at: N46:17:32.00 W079:33:22.00 to N46:19:15.00 W079:28:00.00 to N46:20:00.00 W079:22:56.00 to N46:18:54.00 W079:16:11.00 thence clockwise along the arc of a circle of 7 miles radius centred on N46:21:49.00 W079:25:22.00 (North Bay, ON - AD) to N46:17:32.00 W079:33:22.00 point of beginning"
po.paths=google.maps.geometry.encoding.decodePath("_duzGhgwcN`JuvD|_@aqDxt@_fD|gA{uC|xAcaCbgBmhBdrBolAtyBgn@p}BuNl}BlOryB|n@|qB`mA|fBrhBrxAbaCtgAruCpt@neDx_@jpD`J|uDaJ|uDy_@jpDqt@peDugApuCsxAbaC}fBthB}qB~lAsyB~n@m}BjOq}BsNuyBin@erBolAcgBkhB}xAcaC}gA{uCyt@_fD}_@cqD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.247056,-79.591679),new google.maps.LatLng(46.480166,-79.253877))
a.airClass="E"
a.altLow="0"
a.altHigh="5000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Peterborough, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-49"
po.paths=google.maps.geometry.encoding.decodePath("y|mmGxih}M|Fi}BnVkyBje@{qB`s@wfBf_AoxAhiAogAfqAmt@tvAq_@hyA{IjyAdJpvA|_@dqArt@diArgAb_ApxA|r@rfBfe@pqBnVbyBzF||B{F||BoV`yBge@rqB}r@rfBc_AnxAeiAtgAeqArt@qvAz_@kyAfJiyA{IuvAs_@gqAkt@iiAqgAg_AoxAas@wfBke@yqBoVmyB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.146746,-78.479521),new google.maps.LatLng(44.313254,-78.247146))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sarnia (Chris Hadfield), ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-51"
po.paths=google.maps.geometry.encoding.decodePath("yq}eGn}juNzFuzBnV}vBje@ooBbs@sdBd_AuvAjiAcfAfqAgs@rvA__@jyAsIhyA~IpvAd_@dqAps@fiAdfA`_AtvA|r@ndBhe@hoBlVrvBzFjzB{FjzBmVtvBie@foB}r@pdBa_AtvAgiAdfAeqAns@qvAf_@iyA~IkyAuIsvA}^gqAis@kiAafAe_AuvAcs@sdBke@ooBoV}vB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.916191,-82.422723),new google.maps.LatLng(43.082698,-82.195055))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sudbury, ON [CZ]<br>Class E<br>SFC to 4000ft (2900ft AAE)"
mt="Control Zone<br>CDAH section: 3.4.4-53"
po.paths=google.maps.geometry.encoding.decodePath("ueh|G~_dlN`JqwD|_@}qDxt@yfD|gAsvC|xAwaCbgB{hBdrB{lAvyBon@n}BwNn}BnOpyBdo@~qBjmAzfBdiBrxAvaCvgAhvCpt@jfDv_@fqD`JvvDaJxvDw_@fqDqt@hfDwgAhvCsxAvaC{fBdiB_rBlmAqyBdo@o}BnOo}BwNwyBon@erB{lAcgB}hB}xAwaC}gAqvCyt@yfD}_@}qD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.508445,-80.968603),new google.maps.LatLng(46.741555,-80.629174))
a.airClass="E"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Timmins, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-55"
po.paths=google.maps.geometry.encoding.decodePath("ap}gHb{toN|FwgCnVscCje@k{Bbs@ioBd_A}_BjiAqmAfqAwx@rvAib@jyAuJjyAbKpvAtb@bqA`y@fiAtmA`_A|_B|r@doBfe@b{BlVdcC|FhgC}FhgCmVfcCge@`{B}r@doBa_A|_BgiAtmAcqA`y@qvAtb@kyAdKkyAwJsvAgb@gqAyx@kiAqmAe_A{_Bcs@koBke@k{BoVscC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.486469,-81.502483),new google.maps.LatLng(48.652976,-81.250851))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wawa, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-57"
po.paths=google.maps.geometry.encoding.decodePath("_wgdHr{ndO|FcfCnVabCle@}yB`s@_nBd_Ay~AjiAslAfqAax@tvA{a@jyAsJhyA~JpvAfb@dqAlx@diAvlA`_Ax~A|r@zmBhe@ryBlVraCzFveC{FveCmVraCie@tyB}r@zmBa_Av~AeiAxlAeqAjx@qvAfb@iyA~JkyAqJuvA{a@gqAcx@kiAslAe_Ay~Aas@_nBme@}yBoV_bC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.883413,-84.911007),new google.maps.LatLng(48.04992,-84.662326))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wiarton, ON [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.4.4-59"
po.paths=google.maps.geometry.encoding.decodePath("wtrpGbg`nNzFm~BpVozBje@{rB`s@sgBd_AiyAjiAehAfqA{t@rvA{_@jyA}IjyAhJpvAd`@bqAbu@fiAfhA`_AhyA~r@pgBfe@rrBlVdzB|F`~B}F~}BmVdzBge@rrB_s@pgBa_AhyAgiAhhAcqA`u@qvAf`@kyAhJkyA_JsvA{_@gqAyt@kiAehAe_AiyAas@ugBke@{rBqVozB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.66258,-81.224442),new google.maps.LatLng(44.829087,-80.990003))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Toronto, ON [TSP RQ]<br>Class E<br>6500ft to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.4.5-11"
po.paths=google.maps.geometry.encoding.decodePath("mlzbGxl{dN??{uAjpp@otGlgo@eqMprl@o`Stsh@o}W~mc@oc\\pe]mn_@p_Va{a@bbNwfc@dtEapc@s`Akvb@}wI_z`@mgRq|]mfZu`Zmla@}iU}qg@{|Oyol@y~Iq`p@quCe`r@jv@glr@nbGkdq@pfM}in@f|Rk`j@z}Wold@xf\\qt]tx_@ikUnqDrdO??hyQyoD`xPogIhhOyfMviMuxP`}Jm{S`VzejC`hb@ftbBlvc@emXjo@iyA|c@yFl{@|Et`BcPbqA|Tn~@ep@rcBbXl~@tBhf@}Lv_@wZhg@oIfXqChOuG`b@iBz_@rGhShc@~TbRdMzHpMnQnBpMle@|~@lYgk@|LkNjQcH|VyClaB~r@nPhUhj@|a@nV_GriAw_L~|@oo@tu@jb@~oBxg@noAlgAbeCgSrz@gt@bfBadFhcA{qAnJitDxv@osArrA{{@b}@mTvqCYvuBtz@nO~BtyHjwBjnp@tjbC")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=811.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.574953,-81.126132),new google.maps.LatLng(44.739466,-77.977606))
a.airClass="E"
a.altLow="6500"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V365 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.5.1-4<br>Airway Path: Rouyn, QC NDB to Munbi, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("{umeHttu`NxdKqfzB??pQwqBt^ckBtj@eaBju@itAn~@ydApeAgs@pjA_`@hmA{KpmAtFlkA~Z`gAln@n`Al`Azw@jpArm@|}Aza@phBbU~oBtG`tB_DntBwcKx{yB??}PxqB}]jkBaj@vaByt@`uA_~@veAeeAjt@ijAfa@emAdMsmAmEukAwYkgAkm@}`Aq_Amx@yoAgn@q}Aqb@mhByUepBiHktBjC_uB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=964.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.038256,-79.046913),new google.maps.LatLng(48.245006,-78.200297))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V372 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.5.1-5<br>Airway Path: Rouyn, QC NDB to Ovuni, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("wlleHn~aaNy~XiqoA??uY{gB{MamBsAgoBtHinBxTmjBf`@ocBvj@}yAbt@wmA`|@q_AfbAoo@tfAe^`iA_LniApDzgAxVhdAph@v~@by@pw@`hAxn@~tAvd@r_Bt|XhloA??~YbgBfNhlB~ArnBiHxmBiT`jBy_@hcBkj@|yAws@~mAu{@|_A_bAbp@ofA|^_iAzLqiAqC_hA}UodAsg@a_Aix@}w@igAeo@otAee@e_B")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=970.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.100578,-79.046877),new google.maps.LatLng(48.377885,-78.417899))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V487 [TA]<br>Class E<br>700ft AGL to 2200ft AGL"
mt="Low Level Airway Transition Areas <br>CDAH section: 3.5.1-6<br>Airway Path: Rouyn, QC NDB to Val-dâ€™Or, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("mzmeHn|x`NuNmvyE??nEsnBrQmkBf]keB`h@o|Axq@_qAbz@icAv`Aws@teAyb@rhAyPriARnhA~QleAxc@j`Avt@ty@`dAfq@pqAng@x|Ar\\peB~PjkBzDjnBrNvbyE??kDjnBoPpkBg\\xeBag@f}A{p@`rAiy@tdAe`Ahu@geApd@mhAvRqiAj@whAcPyeAab@aaAas@kz@wbAcr@opAqh@a|Au]_eBcRikB}EonB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=946.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.100517,-79.046701),new google.maps.LatLng(48.247542,-77.712236))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2200AGL"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Baie-Comeau, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-8"
po.paths=google.maps.geometry.encoding.decodePath("{xhkHxbpaL??utFghCg`FokEwfEubGmgDqrHmcCwyIs{AcwJeq@wiKiEaqKxd@_mKvoAq}JnxBccJr}Cs~Hj~DcqGtyE{{EtnFm`D||Fu`B`dGyXfieBf^??jzFxYnsFb}AhfFdwCbsEbmEjzDv}Fx|CpgHd{BxiIhvAhcJdp@rsJ??haFhyEncEnsGbaDvaI|yBnfJfoAt`Kdb@noK_JrrKww@|iK}cBruJamChvIarD|lH{qEnzFikFr`E}}Fz`C}hGd}@alGsFafGcrAo~~Bwwv@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=919.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.22855,-68.872852),new google.maps.LatLng(49.38153,-67.826389))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bromont, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-10<br>Excluding the airspace within the St-Jean, QC Transition Area"
po.paths=google.maps.geometry.encoding.decodePath("i`cuGhbhxLb|iBts`BjP~mjA??shJxzJ}rK~yGeoLnsDu~LdgAw`Mqe@iuLssCu|Ks}FowJi`J{fIoxLilGocOoiE}~Po`CwhRqs@w_S`YccSxfBwrRjqDaoQnvFoyOdvHepM")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=940.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.018056,-73.33289),new google.maps.LatLng(45.706921,-72.300056))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Cornwall, ON [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-12"
po.paths=google.maps.geometry.encoding.decodePath("iqioG|oplMcdM_{Awf\\xuH}~Lo}xAob]snk@owHexU?oyo@vhWkg|AENlAtjAdBp_BoBbkG_@ndDIdzAGzrDBfxAFfaBb@fsEQr{@mFdwCeDjyBeDh~BuAlaA_BvfAmJjiKcAprBu@r{AkAdgCq@nlBmA~cFWdkBQvtE?hvAfBbM_m@tm@~`@dPlGd_A{V`tBl]|xBzp@fx@g@tsAaZ~aBcbAlPfG|xD_g@nj@mVfIhEphAhK|VwYbz@rFlr@~Snk@`EhYlc@~}@Mdg@pXnVaEtbAdHjeAfm@tmApw@xj@mG|sFrGd}Cjd@r}B|b@xg@bb@P`VtTfXfLphAnfC~jAtnEb^r\\dNleEjm@bs@aHboAvd@tiBdpBh`@fTd{Cv_AjtCdB``@b]pu@Nx_B~y@p|@jF~nAh|@~|AfNlkAdh@nfB~gA|kCl~@sa@j}B|dEkPzbA~cCh|C|\\hAdT`oB~d@bu@hGnjBncB~|@vnCrtE~kAfqBj_B`sDn|OhnURC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=928.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.618611,-75.655),new google.maps.LatLng(45.116667,-74.1225))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="GaspÃ©, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-14"
po.paths=google.maps.geometry.encoding.decodePath("mefjHhnphKxVk|KveAsoKnrBovJv{C}qI``E}bHn~EckFbvFclDdfGchBdnG}`@|mG~d@neGrkB`uFxnDf}EnlFv~D|bHlzCnpInqB|sJ`eA`lKrVhxKsVhxKaeA`lKoqBzsJmzCnpIw~D|bHg}EplFauFvnDoeGtkB}mG|d@enG}`@efGahBcvFelDo~EckFa`E}bHw{C}qIorBovJweAsoK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.525517,-64.8576),new google.maps.LatLng(49.025039,-64.099622))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Iqaluit, NU [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-16"
po.paths=google.maps.geometry.encoding.decodePath("__ahKhhkaLv_Aegs@d_Ewpq@hxH_fn@hgL_ki@thOuec@jyQi}[~vSizS~_UkeK`sUwgBdpUnsDlwT~gM~iSvkUliQtw\\rwNvec@hwKtph@fkHntl@rvDbno@x|@j{p@y|@j{p@svDbno@gkHntl@iwKtph@swNvec@miQtw\\_jSvkUmwT~gMepUnsDasUwgB_`UkeK_wSizSkyQi}[uhOuec@igL_ki@ixH}en@e_Eypq@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=887.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(63.067304,-70.05276),new google.maps.LatLng(64.399363,-67.043351))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Macaza/Mont-Tremblant, QC [TA]<br>Class E<br>1000ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-18"
po.paths=google.maps.geometry.encoding.decodePath("env{G|x~gMpeFk}y@javAtlUscFfny@icvAq}T")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.168042,-74.986325),new google.maps.LatLng(46.650758,-74.572097))
a.airClass="E"
a.altLow="1000AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al Intl (Mirabel), QC a) [TA]<br>Class E<br>1300ft to 1500ft"
mt="Transition Area<br>CDAH section: 3.5.1-20"
po.paths=google.maps.geometry.encoding.decodePath("urjvGlgkdM|uEm}N??bfB`zAzoBr~@ruBxb@bxBdFhwBsTbsB}p@vkBukAhaBkdBftAezBxdAulCjs@e{Cp`@keDxL_kDgE}kDiYahDem@__D??jwCfhBz`DdfAnfDha@??rLnmGaP|lGao@heGwlAlvFghBx`F}`C~dEavCtcDagDz}BksDntAwzDvh@a}DiBazDgo@yqD_{AkcDegC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.485136,-74.327072),new google.maps.LatLng(45.770839,-73.990503))
a.airClass="E"
a.altLow="1300"
a.altHigh="1500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al Intl (Mirabel), QC b) [TA]<br>Class E<br>1300ft to 1500ft"
mt="Transition Area<br>CDAH section: 3.5.1-21"
po.paths=google.maps.geometry.encoding.decodePath("oqnvG|sibMsyJgyF??|oAefFfhB}pEz}BovDnpCqwCj_DytBfjDeoA~pDsg@|rDxB??fJhqEpZbnEjk@~gE??erBm[atBNorBjZ{mBpt@ofBhmAk|AbdB{oAfxBgaAjiCaq@vvC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.654692,-73.946397),new google.maps.LatLng(45.8517,-73.743825))
a.airClass="E"
a.altLow="1300"
a.altHigh="1500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec/Jean Lesage Intl, QC [TA]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-23"
po.paths=google.maps.geometry.encoding.decodePath("mupxG`e`rL??xVp~^y|A~u^qqEhq]k`I`q[cfLzvX_`ObeUikQr~P{eS`gL{mTjbGcbUhuA}aUkyAamTqhGcdS_qLchQqmQwzNkyUg~K_pYiuHqm\\acEco^{jAkr_@pm@cv_@pfDmz^rzG_`]bfK{hZxeN}wV`wPypRjwR{wM`eTyqHf_UctBeqAsv}A??ppOdJnl@|m@ptB|sBtiAfiArrBzqBf_F~n@lrDje@~}Dvg@zfDxb@nrDfe@vtDte@bpDrd@bjEdj@pnFvq@tAk@hB`@lCpCbAhMvCpMgAtMv@~CvFpDnBlEnAvF`BbWnDbKtCnNKxD_@bCsBxAe@zAQbBIfJr@hNzBfJrB~DGpBs@`BiC`A}@t@{@hBW|A|@pF~AjDfCdDIjGmAbJl@~D?lAb@zAl@H`ByBn@iEFeCd@e@|@Hl@x@dBzIn@n@j@MPoAw@eDXcA^Qt@LrAvAfCfGSzU^bAt@Jt@g@jAyCBaBy@cGV{@n@_@n@R|@|@z@rBa@hFb@pAl@Lj@q@SsBL}@p@Eb@pBx@|@rBoDtB}Ar@d@qBnIVx@dMw@zAP`HtDbHbGxCjFjDp@t@l@r@rA@vDjBzFt@|@fCcCfFq@t@l@KtAuBjCg@nCLhA~@pAnCnAnByGlCmCfBMrAm@bAz@LfA{@bBc@RuAwBc@Dg@|IDx@r@FzBmBhANn@zAG|@cAtBsBfAv@fD`@p@r@Rt@yCdEwEz@I^`AJ~Hr@zChAhAJfA]pAc@b@oBo@eB`A{GN]d@WrELtAdArA|AKhAgEpAYjC~@pCtEhO|_@vB`IvAjIv@pAjD`DbHvEhj@gDrBwAx@U`At@F~GTjAx@dAzC?`@|@}@fMfDjKEzCyAdD{AXa@|@VbCbC~EtCzBrFK|D|AnCdDxAjH~@zA|@F`DsEhCp@|A~AdA~CSpO`@fA|FpExCtE|Bx@vAzCRxCqAtOmBhGq@vGmFhH]fChBnC`@vBd@~@hCu@jAZp@dC]bEc@|A{@t@{BoBy@Le@|@_@`DJlCxA|CrDHlBnBLdF~BlEz@QlCjDNjB{FxI{CzNBvDf@bFxEhNjH`DlE|E|DfSzAxBfIdAbAl@dA~Cd@fDaAdEhDxFzEzML~BiBrEr@rH`EbEh@FLeBjDwAf@?bAj@r@zEpAjB|Dz@nIhIbEjC`FuBnDzAvAJr@r@xAbFtFjFpDvGdAn@fCdEvItExE|LdDtDlC\\bDpF|@`E~HdGnAb@~GgGlOcEjAo@z@eAhDSvItFjBY`AeAbEV|ApAz@JzDyBbFsEhCeGvBb@`DgBjB_D~Ae@bBFhG`CtC~B~EfC~C|E`NHfFnA`D]rBqAbFs@lBmAjAC~Av@`DnEbAR~@k@n@_Ch@o@n@EzAt@hBtDlAjMxB|FBhDuAbCJbBdBdAv@fCpBhCpA`@\\qBl@a@zAdElBW@bDhAQn@XQjBqBvAAdCf@zAlBwBp@]h@dADpDxAxHnBbG@|KhAtB`@jDY|Gt@`G`A~APz@M`Aq@fAHr@b@j@lAQf@Vh@lEJrDv@vCpJFjA`@bCc@nBd@zCHhF|BvD?|A`BzCfG|CtAvBbBvBf@bClGBpDvBzDnEtFvGKvAhA`ACjBeCfCK`At@fBbEtCj@pCiA|AXt@`BM|A}BhBKbAjAjDpAVnBwAv@@lKfPtE~CbEtGjCbC`CI~Ay@xC`@`ClEf@\\p@{Af@HDzAf@fApDrAn@a@MqBb@[~A|Cp@y@p@Ev@hBlAC\\l@O`BpClFzBf@dBfAfCk@jGfCfC[lBgApA@nAv@n@nE|@~@rAUrDwEpAaHzBiBhDl@hAKrEuC~AGtArAlBdFfCzEdDxDr@`Cl@p@h@BQaCNcBl@g@r@`@h@xCr@pBbCbBlEExCpChCnAdC{@zABrAn@lBnE~ClElAb@fAgEn@oAzMdAvEfEjDhApFHzA`@~AhCfA|@HkBR{@nCx@`BtBtBpFVrGr@|@xBx@bA}@d@ApGpIlBX`BlHf@b@lFoHj@IhDtA~H|HbA^xG{Ap@l@y@~Cy@~@Nh@`AEnCfA\\Oq@m@MaBd@i@xBdAj@zAs@x@z@z@|A?~@xDs@rA\\v@`AOl@b@[hBwAl@Gz@t@hA?nCp@@V_Bd@_@fA^zAlD~BhAv@ILkA|A_CNiDf@_BrB{A`@hAjAHnBcAf@sAx@}@jC`@H`A}@\\Aj@d@xAp@FdAoBb@Qb@d@DvBZpAlAlBpAj@|FdMf@jBZA|ChB~AM~Dn@~DjBp@q@l@^Xv@@`CtChCz@ErCzAr@`At@vFVv@tAMrB{@xArBjA`E`@bEb@|@vFlCT~CfE~BvAGl@^fBa@LnA^j@H`Am@vEHXn@\\jCWtAw@~@xB_@~@X~@tA`@l@mAd@DKxBhD~JfAfB^dC|@o@bAAj@]fANXgBe@cBPe@bBh@bCqC^mBjAVvB]f@xBjCQ|Dp@pAw@dBHWiFNeF~AqEO_D\\cBb@k@jBp@bGYlAgDlAc@RwAv@oBlA?XtAvByALgDl@Uj@w@|EYbByBN}AxAS\\m@QoBN_@nDm@j@yAfA_@t@gBrFmGNcC]uAv@aC@}A`@y@~@YfAnB^B`AmBfAqDdAiAPwBb@cBa@oD`@{B|B{A|@eB^?JlA\\X~AkGY{Ar@iDlDoDSgA@m@vCcAtAwAlAsDj@c@nB`@pCqArAG??xcU~{\\joQpsa@vrM~fe@jkIv}g@j_Erui@ur_AneJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.798847,-72.366145),new google.maps.LatLng(47.456999,-69.93885))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Roberval, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-25<br>Excluding the airspace within the Bagotville, QC MTCA."
po.paths=google.maps.geometry.encoding.decodePath("_jthHtjaxLzVgzKveAqmKnrBstJt{CepI``EoaHp~E{iFbvFikDbfGqgBdnGy`@|mGvd@neG`kBbuF|mDf}EhkFv~DlaHlzCxnInqB`rJ`eA`jKrVfvKsVfvKaeA`jKoqB`rJmzCxnIw~DnaHg}EhkFcuFzmDoeG`kB}mGxd@enGy`@cfGsgBcvFgkDq~E}iFa`EoaHu{CepIorBstJweAqmK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.270239,-72.642631),new google.maps.LatLng(48.769761,-71.88848))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Rouyn-Noranda, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-27"
po.paths=google.maps.geometry.encoding.decodePath("scwfHvfd`NxVuwKveAakKnrBirJt{CcnI``Ew_Hp~EmhF`vFijDdfG}fBdnGs`@|mGpd@neGjjB`uFxlDh}ExiFv~Dv_HlzCvlInqBvoJ`eAtgKrVvsKsVxsKaeAtgKoqBvoJmzCvlIw~Dt_Hi}EziFauFxlDoeGjjB}mGpd@enGs`@efG_gBavFgjDq~EohFa`Eu_Hu{CcnIorBirJweAakK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.956906,-79.208652),new google.maps.LatLng(48.456428,-78.459126))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Jean, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-29<br>Excluding the airspace within the MontrÃ©al, QC TCA."
po.paths=google.maps.geometry.encoding.decodePath("qrnuG|ug~Lv^ycOl}AwsNdyCktM`pEofLr`GukJdiHweHrhI_wE|}I{aCrhJ}h@dhJ|n@||I`gC~fIzzEdgHxgHn~FtkJ`nEldLpwClpMj|ApnNl^z}Nm^x}Nk|ApnNqwCnpManEldLo~FrkJegHxgH_gIzzE}|IbgCehJzn@shJ}h@}}I{aCshI_wEeiHweHs`GukJapEofLeyCitMm}AysN")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=943.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.96143,-73.754499),new google.maps.LatLng(45.627459,-72.807724))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sept-ÃŽles, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-31"
po.paths=google.maps.geometry.encoding.decodePath("_easHdrmsKxV{hLxeAw{KnrB{aKv{Ce|Ib`EukHp~EerFbvFiqDdfGckBdnG{a@|mGff@neG~nB`uFbtDd}EtsFv~DvkHjzCrzIlqB~~J`eAzwKrVpdLsVndLaeAzwKmqB`_KkzCrzIw~DtkHe}EtsFauFdtDoeG~nB}mGdf@enG{a@efGckBcvFiqDq~EcrFc`EwkHw{Cc|IorB{aKyeAw{K")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.974406,-66.65649),new google.maps.LatLng(50.473928,-65.875732))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Val-d'Or, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-33"
po.paths=google.maps.geometry.encoding.decodePath("ieyeHh}vyMxVmvKveA}iKnrBeqJv{CcmI``Ey~Gn~EygF`vFwiDdfGufBdnGo`@|mGjd@neG`jBbuFhlDf}EbiFv~Dz~GlzCvkInqBtnJbeAnfKpVprKqVrrKceAnfKoqBtnJmzCvkIw~Dx~Gg}EdiFcuFflDoeG`jB}mGld@enGq`@efGsfBavFwiDo~EygFa`Ey~Gw{CcmIorBgqJweA{iK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.803572,-78.156423),new google.maps.LatLng(48.303094,-77.409132))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wabush, NL [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-35"
po.paths=google.maps.geometry.encoding.decodePath("cbpcIvmbwKzVecMxeAeuLprBuyKx{CsqJd`Ec~Hr~E}`GdvFa|DffGqqBdnGwc@|mGzh@leG`vB~tFj_Eb}EvbGr~Db~HjzCxoJjqBjvK`eAtpLpV`~LqV`~LaeAtpLkqBjvKkzCxoJs~Db~Hc}EvbG_uFj_EmeG`vB}mGzh@enGyc@gfGoqBevFa|Ds~E_aGe`Ea~Hy{CsqJqrBuyKyeAeuL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.672183,-67.278704),new google.maps.LatLng(53.171705,-66.450185))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ogdensburg Intl, NY [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.5.1-37"
po.paths=google.maps.geometry.encoding.decodePath("w`dpGtjrkMzEmmBjSajBh`@mcBdl@wyAvv@imAn_Am~@jfAwm@bkAo[lmAoHjmAvH`kAx[hfAzm@l_Ap~@rv@fmA`l@tyAf`@fcBjSxiBxEdmByEdmBkSxiBg`@fcBal@tyAsv@fmAm_Ap~@ifAzm@akAx[kmAvHmmAoHckAo[kfAwm@o_Am~@wv@imAel@wyAi`@mcBkSajB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.60968,-75.56719),new google.maps.LatLng(44.754209,-75.363921))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.5.2-3 [CAE]<br>Class E<br>2200ft AGL to 6000ft"
mt="Control Area Extensions<br>CDAH section: 3.5.2-3"
po.paths=google.maps.geometry.encoding.decodePath("iqvgHzln{K??`cMhj@~uLjjDv{KfzG`uJbaK`cI~{MngGnhP~cEhdRtzBvmSrm@vcTw^teTelBnsSmvDrmRe{FfuPmxHvkNilJlsKiuKrnH_rLf`E{aM|`AemdBvyB}cLm`d@qen@???gtGmzNyvEu}PuuCkmRipAokSuHmwSf}@qpSlcCewRzeEclQvbGqpOhxHkfMbeJsoJ~gKaoG~_LggDllLgp@~|dBih@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=904.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.195933,-68.856331),new google.maps.LatLng(49.549525,-67.581103))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="6000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.5.2-4 [CAE]<br>Class E<br>2000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-4"
po.paths=google.maps.geometry.encoding.decodePath("acjvGjq_iMe_m@al_Bm_v@y{gEzr`D_qpCvxuAzpmAh@dgBjAfyBt@rtAr@|lBnAfcDvAvpCj@dfAz@~~Ax@h{AdA~nCl@pqBdAbuC~@llBrAl}BbAtzAjCltDpCzvCbAddA|Ap|A~Bp}B~B||BrA~{AvAz`B|AnaBxCtxCh@fi@XzhBA|q@_@xhBWvfF@|fBPneCpAxgFr@dtBr@~nBnBp~BbGt~FhAr~@fCtvBvCl|BvCxyBxCx_CjBl}AjBb_BlDnvCtAvoAvAboAtDh|CbEzwCwhWjg|A?nyo@jjGhnR{bQ_pYmotBrnk@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=877.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.992222,-75.041667),new google.maps.LatLng(46.285556,-72.774167))
a.airClass="E"
a.altLow="2000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.5.2-5 [CAE]<br>Class E<br>6000ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-5"
po.paths=google.maps.geometry.encoding.decodePath("gnt`HvkoeLudqKyurW??}sVcv_@y{YueY}g\\mfRs{]cuJou^qwBst^viCsx]|kK_b\\~eSerYtpZ{jVdea@ynRx|f@sbNbqk@ngaIbelQxn{@?vs~ArffG??fuTwhN|bVslHryVqqBfzV|xArt\\|`t@`sxA`naB??liDrwa@hm@rqb@imAxmb@{gErla@e}Hzn_@gjL|u\\glOvcYm`Rd{TsdTh_P{yUtbJ??fjBlzQdh@jlR_XhnRqyAr`R}yCxbQ|fnCzs|@rfiBtux@|~q@trfAd_B|giC??{lJzgJwyHbdMc`GdlOa_EzdQixBllR{m@vaSz[`dSvfBfsRpnD|oQfqFb{OvlHrvMlbJp}JqoaBty{B_{`BhnqDqrp@`oiA??taK|lHnwIfoK|eHp~MflFj`PzkD`sQzfBbuRz^zeS{g@vdSqoBzqRetDrmQwsF`yOqlHluM_}IpdKwcKrhHeaLnyD??`nH~qGxiG`}I|yEt~Kvzv@wnvAfmuAqonBni_@{|x@zv}C?js`@}|}@pcW}b`Cfa{FoaLgpDurTjwt@diE`Kwz@eI{{AogEs`IslAkiF{Ucj@jBiu@p@_JYcO~@mKqB_Y~GuI}A_J`BkTnQeLbBePig@{~Bob@mv@}[yeAcz@cp@|Dcv@ipDekGe_FknH{vFguAioGa}FqqDs_GsM_OgJ}QymByaCygDslFmaDgaGo|OinUk_BasD_lAgqBwnCstEocB_}@iGojB_e@cu@eTaoB}\\iA_dCi|CjP{bAk}B}dEm~@ra@_hA}kCeh@ofBgNmkAi|@_}AkF_oA_z@q|@Oy_Bc]qu@eBa`@w_AktCgTe{CepBi`@wd@uiB`HcoAkm@cs@eNmeEc^s\\_kAunEqhAofCgXgLaVuTcb@Q}b@yg@kd@s}BsGe}ClG}sFqw@yj@gm@umAeHkeA`EubAqXoVLeg@mc@_~@aEiY_Tok@sFmr@vYcz@iK}ViEqhAlVgI~f@oj@gG}xDbbAmP`Z_bBf@usA{p@gx@m]}xBzVatBmGe_A_a@eP~l@um@gBcM?ivAPwtEVekBlA_dFp@olBjAegCt@s{AbAqrBlJkiK~AwfAtAmaAdDi~BdDkyBlFewCPs{@c@gsEGgaBCgxAF{rDHezA^odDnBckGeBq_BmAujA}DkxCuDi|CwAcoAuAwoAmDovCkBc_BkBm}AyCy_CwCyyBwCm|BgCuvBiAs~@cGu~FoBq~Bs@_oBs@etBqAygFQoeCA}fBVwfF^yhB@}q@Y{hBi@gi@yCuxC}AoaBwA{`BsA_|A_C}|B_Cq}B}Aq|AcAedAqC{vCkCmtDcAuzAsAm}B_AmlBeAcuCm@qqBeA_oCy@i{A{@__Bk@efAwAwpCoAgcDs@}lBu@stAkAgyBcKmaSyBwzCX}p@bAucCv@}gBrAimCnAqrBn@aeAwByuCo@uz@kDmaGeAgmCSgKgAy|Bb@ekAf@isA^yxBj@uwCLwl@h@{gCk@exATebBfAwsEx@seCjAslDlA}m@lF{mCtHgyBbGobA~L}rBr@ixCwB}mD}AitCt@kqD|@ys@|CoeCfAm|@fDmlCUaw@^a`A~HkgGxAio@~@eZJkMy@mm@w@udAXwlAB}aAa@{gAgBehDwA{sCcAanCcAuqET{^ZwxA\\ocCQg`AgA{cE]swAs@axAw@k}AqAwnB}CkyFqAwcCr@ueB~A{~A_@ax@wAciBqEq~F{AgoBwDotEw@kzA{AwlKRyzBoA}zDi@ob@aDkmHJc}A^y{Ca@glAw@gdC_@_iAcAkaDo@kCeCEgBuCoBZg@`E{@VcBKmBn@iBxAmAm@t@qEiCwC{Ch@`@~BKhBeAZyAg@l@sDeCsFU~A|@vBIvAcCr@wAiB_C?iBc@_@~@aEh@WmArAcFLiCa@mB_Au@}BpBu@hEKzCsDg@iA~@q@jBwAc@c@gAb@uACmFq@M}C`@oCxBB}Ca@gBc@k@yCpB{BBk@oCwCOuCeCKoBt@c@b@mBYgDcBsBo@V}B|Fg@[CqF[}B_AuA}@D}BhBgIiD_JDcCiAoCl@kDs@{DmCqCBgDu@iBDoK~FyBpEjBrIKlBfA|Ar@`DThGUnFqAfJkEbCrDdGmDvGkEeIeB[eBrAElDn@nC`ByC~@|B{AlKyD]wA{EwBVcIw@uFaDc@_Dz@_Jy@aBz@}Co@}DkAqByDpGw@g@NcI}AmBcCi@gCyBaATc@|@~@rBq@xCe@TiBiBBoB}@sAm@A[~@r@zCIrBw@~AMt@h@jBDlAe@p@iEPsAaA|@uDv@cAf@_Bk@cB}A_@}BqBwAmD_Cm@{ApBcJqEgDSwD}BkFpHeDpAqDa@]~@e@Gu@oAsAz@]`AaAd@kEQw@gA^wBz@uBfFeDa@cAoBm@SiDgCc@m@hCoC_APwBg@sCDiBbA{FRoDz@qCuBkCVuBq@aCq@DoChGkCd@gCCkBw@B}BkC}C_AkDkAgA_DKcAtDqCSi@}@uA@iB~AsAkGGgEc@iH`BaAc@cBaEeBkAJHmEu@mAqE}C}BBu@pDkA|@mAwCk@aDG_F}CkAv@iCbFwAMuB_BqBkBBk@gClBsCLgE[mD`@qG`@sDw@uDX}DQmBo@P]dBs@E_C_BUcBe@}@qA?sAv@}BO}@kAjAyCmDyCeGvD}G}AoEMwAs@gAoA}F{COaBjAsGEwA{HqFm@gASoADuGe@gA_Af@mBlCiB`@eMcE_A_AuB{J_@u@sE{@}AeBi@yEiAsBQqARoB}AwDqBaCqAe@wC_Es@cBcAS_AdA|A`B]zC{@t@yAoBkA_@oA}Aw@dByA?oBqCs@cEeAQeEhBm@rAfBdDo@l@kCaAk@b@qAq@s@oDaCmDeF~@}AaBkAmESyFn@}BrC}FaBuDBcFQ{AwAmB]oCs@mAuBdDeHeC{FgH}AaECmGiAeDgA{@cCvAiDeHf@{CG_B_C{EgDiBeE}IqDaBaByBgBjCgBAu@wDoDcAeFaG}@KyD|@sFgC}AbBb@fAUx@iItBOvA_ElB}Bi@cAX]~BkBrCiDrCuGv@w@n@yB|EaCOiBvHwBjC{A|E_KjJgA?uAqDLaBpAwAImAyBw@}Gk@k@qA}A_AwB`@mAWVmA~@_@WeAuFj@mBa@gBXqCq@uBqEmByAMiBkAqD}Ce@s@}AJqDk@wCgAqBoFsEgJ]}Aw@oAb@sAkAq@~Am@Yp@eBQ{@wATKgB[IWhAqAm@s@hCm@HC{AoAu@kByCaEqBg@xA{@sAWHAlBm@R[i@h@{Ai@k@k@nB}BEQiAg@Y_ApAy@m@YbAmB~@sBi@c@kCgBl@s@q@aAt@jAt@IdAmFvBYm@q@BQ}AHu@e@iAHkB_BSUiAUCAm@{EuD}@Cs@eA}@uCaBy@Y}@a@EY_Bm@q@I{@q@i@iCfAiAc@kBqCsEi@eCNgEoAsBuEyCaBaGY}BuAkDeFsCpBaA}@y@f@NrCqAxAkGeB}A\\wCmBqHsAuCgFsBaIQ}DyAeCcCsA_@uAaKcHUyA{CuAYXMl@mCrA]m@i@D}@{AQ_BcDf@q@YUw@^[GeBm@}Ay@i@gC?sCsCyGfD_Au@S|@]N@`A{ALQt@k@DH{AeAuCi@Yk@uAUDIaABm@mB}CQ~@qBa@eAkCk@EHoBUo@z@KXiAW_Bk@cB{CC_Bt@uAsA@gB_@iCcEcFqBO}CnAcDW{@n@_AI[z@aA@Qd@i@_@g@VKlAuBl@a@q@]t@N\\mB^]cAq@DIrA_A^F`As@K[pAk@yAYDLz@cBPMv@eCbBqAxBkBCaAdAoAPiCq@Kn@u@z@Gm@}AX]pA{DjB?zAWb@[xDkAz@s@~A\\z@e@lD}BpDMlBj@lFw@`Eq@Z?\\g@l@UvAz@`BClAi@rCRt@GtBu@|AeAzDGp@qBvC}@aAcCr@iCdDyCPaCxA@dBGv@u@vCoAt@}@~Cy@OaA~B}A\\DfAwAzCDn@}@bAcAjD^lA[pBSXCbBTjBg@t@Q~@EfAiE?uDbHBj@gAfAoAnDgArAVj@YjAX^q@bAA~@KN?^]\\I`@{@W{@p@IfAi@ZCt@aChALf@@|@_@?iC|EgDfC?`@nAx@_BpDg@AK^Lt@OpAy@^Yl@?nAaBTg@h@Mp@g@PYp@}CnAc@n@A^sAhB@ZW|BVlBGpAHf@Cf@NNGl@`@xAoAtAiEaCmBl@sHuBeAuDLoHiBoCx@iMfCeLw@oEpGkJ|BwEZeE|@kCnDB~EiBRqFkAeBN_C~AeAfA_EmAyFPuBfDgKrBwBkBsEwFqCeEyHaDmD}@wPp@cEsEkCyDZqDgBoA}Db@}EeAmGmC}CqFw@_CuIq@eJaBgJ`BsNCsJt@}GzDqJhHuKnCl@fGcEvDaGlHkFtEsM|CgEHyB{AiFuJaI_HsByJ_IeK_CuCkC{GWeCkBu@yDiGcH[uFi@{F}CwE]iZ}@cBiCwBEmFqDmQuDqCkGgPgA}AsQgMyCa@_C~B_GmA_QbLmOzBkEjDcHxIoL`GaCa@gAgCaFmHcEo@_BcAn@iC|B_FjDkP?}LQ}CgDiJDkB}FcIwFiEEyCnBwEn@oHAiKaDaK{AwJk@gL}CwGkMgKuEAeGwBuCmDkBXyCsDq@qIw@qByAkKMcKuBuVcAsBcC{BMcB{DyAiEcGcBgAqBsFuBkAk@cEH{C[mCfAkIgAoEIuFm@y@{@eFyK}F_BPeIgH}CwAkBgH{MmFcG_Gv@}AgBmBMiBgD_Gq@SyEqGxAkE`@oDY_EZoBg@qJmDsAsAeCEyEmDmDZsDnAsFwDiEuEoBrAwBhEkBxB|Bz@YdBoGlAk@lFZbDnBrDqGbC_BjAFrBkARwGc@}Cw@wAQqBb@wBe@{D_C{DQwBaAmA}AgFlBoCd@{CbBgFJmEhAqC`ByFFoCrBmGnBcBbEnF`DhBzDoAxEZlDqCnV}GnNGpAuApIl@rCoCtKb@jDyCrBPTqAtBaFvAoAv@qC`Cp@`F}BnAx@fA[b@gAEw@iDeH[qA_A}Aj@uAhEoBbA}EpBwFhBoCt@gCjAi@DsAj@qCtAe@XiAnAP`CiAb@gC]iAeAkA_AsB\\aB{@mGfHoIzMwL`I}NlIl@l@aHLcEn@gEj@mAdGcCnADxGcFj@{B|BcB`MgBzCiDlKxFb@tAh@RhBoABkDxEmC|AiBd@}BBmB_AyAZoCmAeAw@mCsFeEe@uBq@}AGw@gAeBSgCoAyCuCaD~@mCdD^v@sCzBu@rBNl@yKiBaBMsAfCiC@qKw@gCDmBlBwEo@eAd@aCIiB_BkBR}DeB_Cg@yBeDcAc@_AsCkB^u@PoBnAuEsB_C]uCiAU}AqDcAmAFgB`@gBLeCfC_BL}@{@_A?yAeCwB~@wDBoAq@a@d@_EnBi@v@Zx@cCbEuBvBt@zD}GtA_AAaAdAqI\\c@fBx@fEwAb@{BVsEk@gAB{C`@_BrI{AhDbBfCqD^eDQeCwCuAd@wAKmBnG@VgC~D_DxDXl@eAlCVzAmBAiCp@qEqFgEm@sCqBS}CeBaAqAcEiBa@iC}F_I?gAaAaCcB}@z@cGFwEyBeC`@wAi@u@dA{ByCsCFuB_ByCe@GyGiIl@gFqBwBc@iAsCqBvHoNEsChAmEp@uEnCSBqCjB_BzAt@@uCnAaBr@sEjDsElA}DzCsDRkCj@}BdEyGxDg@xBaB`ChChBx@n@w@H}Ay@eGaBp@gEoCkGeMBmKs@eF@_FuCgEaAgFZsGOwCu@eEwAqEwKmKmD]{EqDyFr@{@aB_Cq@iC~@yE_DiBgCeC{@}AiEr@yAmCmD^aCgCiDeDaAqH|AsDgA_KsO}CwB{AsBIeBmDTsBuAwBxEoBcAwDl@mKoEgFkIcFuEkK[cG`BqG}A}AiDmAyG\\_DgDeIp@aEuCyEqBt@kA{@DeDaGoHqGy@y@iByHL}@{AwDiBbB|PGjDyCnDoEn@k@hCgBuAsFoHoTkFw@yCyFiBq@eC\\aGaAqA_Dq@}@ZiD`FaCl@uC]sQoViGwKqDmC]gBgAM{@l@}Ck@KmCcAg@k@}ANqCEcBm@sD_HkLs@aLyBeF`@aHUuE}AVc@eEoAg@NgEh@_ABqAs@sDwBeA@uEcBwE@}@o@cAvBcGi@sAJgD{AiC?sIaCkCuCsKqEyIZ}A_@uBJ{Ag@sAqB\\aAuGuBgAb@iB{AsA@qAk@yAoAvCaBqAViDu@{BY}C_A_C~@y@CaF]_B_BsA_@}@i@sDhCoJl@iHvG}KRkBI{D{@_AgG}_@R_CU{BGeJv@iFq@uDdAcDj@oCX_Cg@s@`KmQCeHj@WVuAbAkAWs@K{CuFuFaFyBgIuTaBu@}AqIs@wGvAcBjBuE?}CwB_COsD_AkCZgGo@qJ_D_@eBgGCaG{EmLoAk@_AcD_@_DoA}DwAoAiAt@{F]iRaPqQ}HsC_J}@y@WvB_DhEgBM_FrD{IrMIrBsB|E{@|Si@rAkBm@?cCgAcAaHB_AjAgG`@{@gDkErCqAsAcBr@iF~F{NPwAvAgF_FcKuCcA_B@w@hMkd@pF_L?oDhLgEpK{StEaOtBmCXqCVmFMyCPw@~E}BdDLpKiF`EuLb@yFvEkCqCoKA{FrAwB[qHSqJkBmEgAMq@uSpC}H_@gFTaD`DaFSeGcG{EZuBsCgIeOqPkAiKeCwCmAqELeCgBuGG{D{AwFA}CvCoHhDyBzOfCdQoKrBnB`BuEpBaArFoQlIcCjIrCjJ{I`C_QhSqIhFyv@~LyBb@_CbBkFnEiANcJKcAlBiEj@kDjAyJ|@qEhI_NzMfHxBBhEzBhBaCtCg@jFdBxUkY|FeIdX_J`GdFvR`CPjDnFl@Z~AbC|DlFrF~CpAbBtC|GG~BbErY|ErAvDtIoBtDiNpAmJ`@sApF]nAiBnHuDvBgDlD{AhDuHxJeCz@oHb@sFtEuEhG}CvFoG`Cu@tAjBlCbA`GCtFvCrC_DRqCh@{A]qGbDmIpEiHZ{FfCuBxJDfBm@pAp@pC_AbFoHz@{CpCyB`X`N~XjCvDaBXkFlBo@zBvBnAuBhAiDxC{AxB_GrCeF@aB_@cFrAmIfDs@`I}KfD_InBaC?sAs@_EjDeBCsKpD{Fg@iNYeCwAcI~BeLpCwJp@aDxAsEfCkM^}J|@}FfE}IpBuPh@mCBcCaBcEw@@yAuC[iBwFyKwAyKgAqBoF_SaC_GQcPz@oJT}E_@iEmAqGiA_BaKkEmALRxGMtBu@|BuIxLkBdB_CjGeHdG}DxIiHtJgDnAkGZmOeDeBP}SkHiABiErImHnG}QoH}Q|@aFjBmHyOuCeN{CoGoDqFqBsA_HyHiBOkIuDoVqFu@oBqCG{HkKoE_J_AeD_`@uCkKkDwNoBwKlAy@|BXpEq@pCiNzRiAo@@}Ay@iCsCqEAeBi@}EMgBeBaGaAcAc@cB?iBuAqDFoBSaA}EmISeElA{BMuAi@e@oA{DEmD}BgIr@_CN}EhAY|@{As@iCkF_AsEwJmDqBkC{EaJqDuLxA_GnEcB`GuA~@cD{BAqA}AwE{EqFwCeFg@oGy@kAqIhAsKuD_Pg@gLmC]kBuEcAsGdEoCJcGxD_JCwD}AiC`EdBnPKhFYlAiDlEsEhBiBzC{@dFwExAsCtF{IfA_FxBeNoEcDjCoAdCyEdBqFw@aMeJyEcBmFmHQuAe@gMo@oC{LcOwPiAwBxLuPxM{IxAaCaCLm@\\qFWwEqCcHsK_A{JuEkF?{DeJs@cFwCeOaCmAqJj@qC|BgKzBkElDoGIk]|JqExDeHxKoIfCeJ|K}YdGiM`P_A|Cg@pWNzFw@jEq@rAqESkEvGaE}BeO{@{IhIwJi@c\\}i@oScJ_BkEsBaCaAiC}SuOcSoCu@mKGyHmCiNkAqKiAaDsP}FgToPiIb@mCgBuH{O{@yHFgEj@uFzF_IByEdAiG_EoJwV{YlCsDpAeE@_EJqETmBxEgS`AiY@eGj@iC|KwMx@{CqFmYuDoIm@oDc@wLZeD|KwQvN{D~DgHpA_MvC{LtAgCrUt@`GbEjHgBvGmFhHBnEuG`BgH|GwNzGsHnFwKzDkO`EaIrNrEjPcJtCmFlEuNzAcD|DqCbAoBt@gFhAsCn@cFrCgIjEsIxDiQlHwN{@kEYgFwAeCeCsIcCSwAoCuAeNJwJoEuP?kCnCyFlE}@hAyE]sXwAqDg@iC`AuPqAkE}GiJaB}JbC{Lr@qH@eEtGyPz@eF`MgYvMy^vFuIn@oFlDcD`Ow@zCz@nQkEjF~Bf@sBr@_HL_IUgFF_E\\yDAyFrBwEm@kCAaCqHwXG_B{EcN_HmOiEqW_FqGBwBmAq@cC~AiDi@cHfHwApCgEzAyBbGsOiGaFeEkOm@_MuJyDyGcEuN`@yDOwAqBoCj@iLu@wF{@yI}Bs@yJkJaRxNiAbCUbHk@xCoApJ]dIuFfGq@pEwBdBiBlD_SrIwKUkEuEv@uMs@{D}JBiAyD_B`@u@gB}@kFgCP_DkE{JPwN~KmFWyAbCIdJu@~D_@pMaGfG_MfUiMdMsGlBoJmCyBzLmDtGq^rWiL|BcBhN_@`GSfl@s@pFeN|ReDtNiCtEuB`KqGpTe@nGV`Ko@dPyVk@y^nDaH~D}@~D{AxLc@bRYjHmBfFwLvFaT}Ey]tAiArGiW|c@GzAn@tDWvEo@pFOvC|@fDyGxOePhRyPt^iZbMyq@ig@oTf@wOxV\\xGsLvc@sU|Dw_@mMwT{a@p@aGyD}Sks@c\\}IsXg@qO@[_mA{g@uu@ew@jAuTesAvo@]oF{^hBOuCrBiPeFcUcp@yq@gj@ky@aHoQ_TwEcDaMik@ik@eJtEek@}a@aDsGKkEmO}h@]oFjDiLHiE_E{KOsIRcF_HiNfAwFqBiMs@eJsTeEqPoOwH}TcGmFaAeJkMoJuJ[}DkKUqJgBaP{NmVZyFVsR{DeHcT_EsF}N{OeGyGsLeS{@OsCEyEwEyLqLaNaD?gJuHMcHq@yD{EgDcNeXmJeGyA_E_A{EqMr@wEcKmLuE{MlH_GyToChAyIoKuBkF|AaIq@aBwAaH{BcErIu^V{BLcCqD}HEqA~AiLgGyQkEkF_CiHkAmImFaF@qCpHePrP}Rx@iD_BiGcHkK@uAwBiHH{Bo@}BoBKe@iBsH~AsDqFkAuDmBl@eDmCwC}ImPkUkBsEoEGyAuE]_CuAkA]wBgDgL@iDeAoCTwCyAiGoCxAmCgAaA_CyIi\\uAeBwAdBe@qB_Ba@oBaHqFoBm@{BGmAeCkJRiAeBaEOaCk@?}A{FcAy@gAeE}FqJoDmA\\_Em@s@Ky@XmBeCwJoA_Ca@qCiHiIGmAeBeGgDqEkDIcRqc@sG|GeAaAcDiM_B{CyFsBsByEfAkE?oA|BsJAeDmAuDoByBBcGgBgFByBMgDf@uBTiDbC}BrK}QkAeFAwB`@kEFwAtBmGQoALoBOeD{DqHiAqDc@_D]e@hEwCdBcFeCwGo@yDqDoJG_CcGaRUqBAkDu@iAH_Cm@yBvAuMyBkAyBxFXpC~@|DQnAkCCkGxCeAoAHaD}@w@sE{MS}CTwCKwCO_BeAiBAcA_BoKa@sA]{CkAsFaAuAyEeQkBeCOiBcF]IuCl@sF?qAs@kF?kBI}DmFsI_BsNiDoDUw@]sDW_AWeE{Bw@c@cBaCn@cBbDk@aC_DmFoA{EcFBg@eCiEYCz@sEz@_@oBmJPsBiBqBqGz@}LTwAvAeBPuAt@iAIqEsZ}Z{BBCu@{AeFmCg@Ix@fAnEg@bB}AC}BqE}AlAOr@HnAB~Ao@bChBbFBrFi@|CmDl@aBeE]z@RxBI`Cq@l@g@tBeB~ByCaB]~AIxCwBrCkEg@gAyC_B`A[jEyBx@oGiAW{AB{AwHqFiBuIwCqFkH_F}BdCuEu@eAdBkXda@sKdHaBbI?lDi@fJEzBcIhLaNxNuBlEkBlBgGGgDcC_G\\}U_BiAiBkF~BgEdGkEp@wGaC}JuGiAV{AhE_O|H{A_@{B`CiIv@_ItE}AhD\\nHQfCr@xHS~@kDxByCI_CqBiTwCoFpAqLtJRjAmB|CuH{De@qBFiFw@sGeCuNeByFi@oD}@kCBeF]uBdEiGhB{G@sAr@kCH}GoAgGw@aFsKePkDcBUbBy@vAaIo@gEaCcD|FsAlDgACuGqEmC[wEdB}C{AiEsFgRu^yEq@uAyFKoAuBmCqHZ{@bAkOq@gEqHwAu@wBkFsDoEyEcMqB_AsGyGmHkP}AwAiAiCmAiEWqEKmF{@yBuDa@oEkDqFwJiBlEsCkBkGdIc@~AwF}EkD{Mx@qDxDuAWaHt@oF{EyOP}ADwCp@eDG{@yA_AUuAeByA}AsEoDsE_EzAyCmD{BgHGoC_CeGsE\\oAbCcIiG]uBuAwCwE_Ea@j@yFu@_DmHeFcH_EsPsEqAeGgFLe@GcEeA{H?sGaBgEUsDM{EZw@\\gDEwCwEeLb@yDSaDaDOq@yFr@_D[cGi@sFKwEyDkInBuJkAuD]aDu@mE}G}OcCgPPyHmA}LaCeDi@}BuAyBmBqAwD_FaFiC_EuQeBqKoByHiHuOsE{FaBiFoF}HC_CmJwK]gAY}CqByE@oDuC{B}EcGm@cEcBaCuGu@}DmFYiBs@gAIq@mBqCyCqB}A}G}CiI_Bo@oDR}G_D{KiPkAuF_BuDgBgB_@qFu@kCwBkD[sAiB{BkBgJiCsCgAYaDkGuA`@wCwEuCbLcBrDx@fBsBtJgC`HiAHmBaFeL_HwA{HgDuCoCk@aBuAeAeBo@wDy@gCeDyC}AeH{BuBoB}DC_@kF}CaBtBaFeA}C|@iHaBo@nDiAd@}@|AqAH{@p@FbCMhCNpBApB{@pAQ`AOdDcAp@}D@w@qA_G_DqH|@oAU{ClAiBmA[aE_Bi@kFxA_A{BsBd@iBxHk@zA}Bp@mDrDFdBvAhCHbB_Ax@m@]gDd@}FwAwDjD}ANqH{HiB}GsCaGwIWkAuN_CsAsAqCyCiEmJiCKi@wEuH_AyF_EyJuF_ImAgHmBiGj@{AY_BcD}AyEuKgCyDi@W_B`BcBr@mCuBcBpCoDGcCwFiADWdBb@~CoBhBWdATlBj@tAu@nEa@vDg@K_E}HqA`@mA}AmAtBwBbJ}BbAmDxDo@fD@pBw@bCyBfBkCyAkBp@q@~BeAf@eAm@e@d@Gv@Pl@iBbFmE|BMhAiAoA{@n@iBdF\\`BtAzB`BbF~Bf@lBeApAfAfCzEgBzGlBjFq@|AAzE{BdAkAqA{@GgEaJgCGeAnC{I`Do@OsGwKaBnCNp@w@lFk@dBStCoDxEmDvAu@bA?pBq@~AaBAMfEeBQkCd@c@r@vGbJLxA|AjEPbFrChFf@pBEnCb@`E{@jA?nB{FdBaDGyB}J}@eAd@zDqGnD_@v@yAEeAdCoAl@?fBcAdDtCjAvAxEp@zA@~A|@hCdBH|D~Eo@lDjA|AVxCoCdDJxCWfIjBzHdAlAnATLlAkAzHn@hDM~FzAbH@rDkBfIrBxHcCnBE~CkC|DLbDl@vCg@jCR`Ae@bB_AW{@XOnEnBlHHfAhA~Aj@dExBdDjAbA@`Dt@jChApImDrCJvJIfCgEN]uAcAe@[sF_CmDu@}DcDmC_G`BsB@qDnA{EyAyD}CuD@aBeEsBdA}AAq@xA@vBY|@oBAwByAaAeEkAeAkDaAgAj@]QUyAoEkNmDbC[zAw@`AoACgAxA_A]J}B{@Um@gA{B?qDgCmAeFyA}CBmC}AcEVuBaBiFqAi@mB{CQuA}AyATiDYcI_@sD`@eDw@iDeCiBcAeBqCiCu@aC}@m@]oAwE}BaAoCyA{AsBmFg@ScBqFqCwE}ApDcBYuBuF}@s@gB_EuB_C`@lCtDtJHxBj@rBXtDgAz@eAiBqB|@lB`Lk@z@{@E_@kBaBa@@nAa@xBaB`B_A@m@sAs@~AJbEpAvESdDArBc@R_AjBg@lB[vBTzAm@tBw@b@u@zAh@nBoBpE^vBQ|CT`B}@pAgE`B}@|@q@W_CpBq@c@UsB{@mB}Ez@EfGcAjBBp@w@rAgA[eIhBkAwBkDe@kQ`EgD`DMjBrAhDUpBwB~BuAXcChIq@AkA{B_Dp@wAeBeBn@aB_@sBv@_@z@l@pCCh@{CQsA|@TrCpAtEgClEeBYmDz@u@pA@~AO~@YbFqAnAuA}BFqB]iBcB}Bk@}AaEkAo@yAWkAwBaAUkBo@_B_@gBwAaCiD{Io@oFsA{Ek@}EeAeCuAgBuE{ImA}DMsAgAyBaDfAy@wAMaCm@iBaFkGiABgAcAYtBeBvEEjEs@|CqHOc@yBgBkBoClAqAyAgBaAA{Ag@a@cCKcAr@mG}BmBmC_AWoCgEoDKe@kCTeD[gCLG]mDoHaIqBm@yByD]iCoBcCcCXo@uAsBWwBqB_@mAm@_FeB{Ao@eCoAuBu@kFmA_A{CiEMsA_BmCqAoAg@cDiAKgDyC[kAaAk@sDnFoB_AaBv@_@g@D_Bo@cBiEW[i@SyBmAaA_Df@sGnDe@CiBaFqEtBi@k@mA~@XdBAdBx@hBExEd@vBuDdDcBA_A`@[dBsBnB\\|Dc@fCPrEbAxBX|HxD~HRdBlC|DWvERnBg@bDCzEx@pCW`FgAlFA|Bz@|DiAjC\\xBuDtG_BAKv@fDdKAtAj@zBPfBuAtF_EhG_DtAoDxEuASaEmKeGmDkBsEcEwB{DoHoAeGwBaEuB?o@j@d@zDU`CoAzB{@JoA}AsEoNiCXmBxBaLFaDuCWaDs@sC}BqBaCWaDvFoBhFeC\\{FgBqCkCaBmDq@kFgAyB_AgDcEqX_AuBcCaB_AeBaBwAiFo@gEmAuCZ{HOmPeG_CuHiIwNm@iC}CwC}GlEeBnCCmFuAgD[sDlBaR@uB}BgK_DyJ]oC_CwFAkEhAoAf@mCxAuEs@sJ~BmNQeCr@iD]yC\\uATmCaAsBq@}FxAqFp@_KdCsAHaMoBmJcHgB}Np@gF_CmDj@iAQaAlAeAVq@][RM|@h@fBoAlCs@VaAfAAb@o@CWn@i@T}AwA{@Ly@e@K_@w@t@DjAkA@IWHW{@WLuBQa@aAP@m@[WIJ@b@UBWk@OHC^cAk@PSQcAoAKo@`@M`AyAl@Vb@APmATWOQw@]KP}Ay@EEUR[kAVC_@Pg@BiAc@OmA~A[WBo@h@eBUS{C|@oAMi@gBu@}@u@@_Bt@aAMSm@Vg@A_@a@_@k@Nw@_@oAH}B|ASe@Fi@_@g@Ja@K_@k@So@\\_@]CoCc@DkAqA_By@gAgA_Bg@AiAsA{@{@Zo@i@eDn@K_@Z{@K[a@ES_AWIiDbBaAMB_@`@[Dq@iAgBLe@uAi@AsAgBkA_ALKw@m@\\IWB_A]MW^w@AAj@sCu@c@sBXg@Cm@UW{@A_@b@s@Wg@z@_@DiBqAm@Hi@`Ai@ABaAYoCuBaBsAXm@bBkFeB{CsCuAq@[N@v@oAb@][@c@_D_BIu@k@DM]A{@o@NJcAw@Mc@t@oCa@JaAVc@UYk@Vi@e@oAr@eA|AeBc@Cu@Py@wA{@s@F[\\UvBi@Gq@{Ba@QsCbBcAiB?UqElAcIkMm@aEe@E}@lB_B{@iADSdACtAc@x@wDpBcFpEc@jAEz@H~@o@p@_AS]{@c@Og@f@gBVc@Ou@`A@zBd@z@v@Q|AXt@fA?vBe@hBiBv@k@fBmBi@k@d@Qr@DhAt@`@x@jBNzBK~@Yf@_BVu@nAM|@Dj@^nAS~A[^kBGCkA{BiAqApAiA~E[j@q@fE}@PsDuDm@f@M`By@n@Ya@{BfDi@jEoA?iBr@a@f@gAhFCtA^d@DjB[`BiAnAo@@}@c@Qh@Dl@`@lAu@`A_@bBqCvAo@fCwBzB}@SEkBWMgB~BgClAs@r@gA~CAvCcAxAmAJWdA^xEk@tBEvAYv@wCTwA[mADqCpAoBa@k@b@mArDuAvAwCbAAl@RfAmDnDs@hDXzA_BjG]YKmA_@?}@dB}BzAa@zB`@nDc@bBQvBeAhAgApDaAlB_@CgAoB_AXa@x@A|Aw@`C\\tAObCsFlGu@fBgA^k@xAoDl@O^PnB]l@yARO|AcBxB}EXk@v@m@TMfDwBxAYuAmA?w@nBSvAmAb@mAfDcGXkBq@c@j@]bBN~C_BpEOdFVhFeBIqAv@}Dq@kCPg@yBwB\\kAW_@lBcCpCcBi@Qd@d@bBYfBgAOk@\\cA@}@n@_@eCgAgBiD_KJyBe@Em@lAuAa@Y_A^_A_AyBuAv@kCVo@]IYl@wEIaA_@k@MoAgB`@m@_@wAFgE_CU_DwFmCc@}@a@cEkAaEyAsBsBz@uALWw@u@wFs@aAsC{A{@DuCiCAaCYw@m@_@q@p@_EkB_Eo@_BL}CiB[@g@kB}FeMqAk@mAmB[qAEwBc@e@c@PeAnBq@Ge@yA@k@|@]IaAkCa@y@|@g@rAoBbAkAIa@iAsBzAg@~AOhD}A~BMjAw@H_CiA{AmDgA_@e@^W~Aq@A?oCu@iAF{@vAm@ZiBm@c@aAN]w@r@sA_AyD}A?{@{@r@y@k@{AyBeAe@h@L`Bp@l@]NoCgAaADOi@x@_Ax@_Dq@m@yGzAcA_@_I}HiDuAk@HmFnHg@c@aBmHmBYqGqIe@@cA|@yBy@s@}@WsGuBqFaBuBoCy@Sz@IjBgA}@_BiC{Aa@qFIkDiAwEgE{MeAo@nAgAfEmAc@_DmEmBoEsAo@{ACeCz@iCoAyCqCmEDcCcBs@qBi@yCs@a@m@f@ObBP`Ci@Cm@q@s@aCeDyDgC{EmBeFuAsA_BFsEtCiAJiDm@{BhBqA`HsDvEsAT}@_Ao@oEoAw@qAAmBfAgCZkGgCgCj@eBgA{Bg@qCmFNaB]m@mABw@iBq@Dq@x@_B}Cc@ZLpBo@`@qDsAg@gAE{Ag@Iq@zAg@]aCmEyCa@_Bx@aCHkCcCcEuGuE_DmKgPw@AoBvAqAWkAkDJcA|BiBL}Au@aB}AYqChAuCk@gBcEaAu@gCJkBdCaABwAiAwGJoEuFwB{DCqDcCmGwBg@wBcB}CuA{CgG}AaBwD?iF}B{CIoBe@cCb@kAa@qJGw@wCKsDi@mEg@WmAPc@k@Is@p@gALaAQ{@aA_Bu@aGX}Ga@kDiAuBA}KoBcGyAyHEqDi@eAq@\\mBvBg@{A@eCpBwAPkBo@YiAPAcDmBV{AeEm@`@]pBqAa@qBiCw@gCeBeAKcBtAcCCiDyB}FmAkMiBuD{Au@o@Di@n@o@~B_Aj@cASaDoE_Bw@kABmBlAcFr@sBpAaD\\gFoAaNI_D}E_FgCuC_CiGaCcBG_Bd@kB~CaDfBwBc@iCdGcFrE{DxB{@K}AqAcEWaAdAkBXwIuFiDR{@dAkAn@mObE_HfGoAc@_IeG}@aEcDqFmC]eDuDyE}LwIuEgCeEeAo@qDwGuFkFyAcFs@s@wAKoD{AaFtBcEkCoIiI}D{@qAkBs@{EcAk@g@?kDvAMdBi@GaEcEs@sHhBsEM_C{E{MiDyF`AeEe@gDeA_DcAm@gIeA{AyB}DgSmE}EkHaDyEiNg@cFCwDzC{NzFyIOkBmCkD{@P_CmEMeFmBoBsDIyA}CKmC^aDd@}@x@MzBnBz@u@b@}A\\cEq@eCkA[iCt@e@_Aa@wBiBoC\\gClFiHp@wGlBiGpAuOSyCwA{C}By@yCuE}FqEa@gARqOeA_D}A_BiCq@aDrE}@G_A{AyAkHoCeD}D}AsFJuC{BcC_FWcC`@}@zAYxAeDD{CgDkK|@gMa@}@{C?y@eAUkAG_HaAu@y@TsBvAij@fDcHwEkDaDw@qAwAkIwBaIiO}_@qCuEkC_AqAXiAfE}AJeAsAMuAVsE\\e@zGOdBaAnBn@b@c@\\qAKgAiAiAs@{CK_I_@aA{@HeEvEu@xCs@Sa@q@w@gDrBgAbAuBF}@o@{AiAO{BlBs@GEy@f@}Ib@EtAvBb@Sz@cBMgAcA{@sAl@gBLmClCoBxGoCoA_AqAMiAf@oCtBkCJuAu@m@gFp@gCbCu@}@kB{FAwDs@sAu@m@kDq@yCkFcHcGaHuD{AQeMv@Wy@pBoIs@e@uB|AsBnDy@}@c@qBq@DM|@RrBk@p@m@Mc@qA`@iF{@sB}@}@o@So@^Wz@x@bGC`BkAxCu@f@u@K_@cAR{UgCgGsAwAu@M_@PYbAv@dDQnAk@Lo@o@eB{Im@y@}@Ie@d@GdCo@hEaBxBm@Ic@{A?mAm@_ElAcJHkGgCeD_BkD}@qFV}Az@iB|@u@hCaAr@aBFqBsB_E{BgJs@iNHgJPcBd@{ArByA^cCJyDuCoNoDcKaBcWoAwFoBmEwFqDw@_DfAuMwCqMcAiMmCqCiBa@uAj@qnFwq@cjEej@cpDsd@wtDue@orDge@{fDyb@_~Dwg@mrDke@g_F_o@srB{qBuiAgiAqtB}sBqfAifAumBemB}iAuiA}bCsbCo|Bo|BaoC_oCoyBqyBquBwuBceAieAexDuxDyiAcjAglEimE}sAmtA}|Eq~EcyEc{EszHe~H{aKggKgdJcjJahFmlFkjD}mDknE{rEmwC_{Cc}Ak_BwnDesDkpBisB{oAcrAkkBknBwnByrB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=307.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.298072,-78.565556),new google.maps.LatLng(51.15,-64.712005))
a.airClass="E"
a.altLow="6000"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="3.5.2-6 [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.5.2-6"
po.paths=google.maps.geometry.encoding.decodePath("gnt`HvkoeLudqKyurWfalAud{A??uzDydRsrBomSug@ibTnb@_cTrmBooSluDuhRxwFmoPzrHyeNxdJanKdlKyjH|gLe_EfwLmnAvyLfb@joLjsCtuK~gG|zq@kmeBpeOabe@zoiA~gcH}r\\`r`G??q}IzPsuItsBqcIrhEghH`xGidGr_JyxEb}KcgDznMmpB`sNqv@|hO~BpoOj~@zfO~wB`oN`nD|hM`_FpuKpiGrvIjlHzmGpfIn}DfwI`hBd~IvO`{IufA|lIy`Dnh\\jvlEjsg@nwH??`_CjoYfyEleXfoHfeVb}JdqSjdMzcPU|DbBdN`h@vy@zIxEd\\jJzWf`@fIhBhImCbc@cYnMl@fOtNnIxUl_@p]lMfQpUn}@pFtp@JhSm@~f@bId_@tFpd@j@ri@pAnMtJbNjDpK]|SwJ`ZaYlm@sCf[b@n]oHnPpBl[~F`UpY|j@pBrUeD|PcDnCqDxPoBvQp@pItNtp@zIjQhCjMAnXlMdVbM|_@z\\tu@jKf_@dMll@jDb[ZjlAdb@jnCp@|k@nIdVhM`LzWdx@tSn^bNxe@bJt_@rTfk@~HdE|Yng@|FxX^p[]r]hJl^fZvd@s@nMbFb\\{C|[fAfJpF`L`ElFtNvFoAbGaEtH_CdAoCfIgFjBmBzCsKhFqFDyDpEhArJaBhImFtGwDrImE~OZrF}A|CyHd@aMSwEPqBvBiKzReBlJvEjEx@pGQ`BeElHaF{JuCjEm@xVwAtF{E|A}DnDkCjEkCtHwDjGwHnICtHlOx]dGjL\\|EgChFiGdAkEaA_DXsEtCTzDjArHjCpJxArPuAjFoC|BuSlI}AdGgEdBkGEqDbKwFn\\_LpQaE`VaNhJuTfp@_m@hvBec@~yAiOb_@{B`RwAxUyB|CqDv@iAlDwApIkMxTcGtFuXlR{d@la@cV[mHiCwHeJkHrCuNwIoL|FyDaDuFwCiI`GiEHmDS_ChACbD{OjHcIj@kBW}CKqCcEiF_CeGvBmT@sFUkRfHUjI_Av@kC?cEqAgER}Dr@sCnAeBKeDaAk@wH}CoD}E|B}JqBwG?}CcD}E_Cgz@db@ggA}D{tAkAo{Cx@}bAvBiFzAwDcIRyE|@aEaAkFsCcBiCNeE~FsE}MuGiE{AgIEqFjFcBPmK{A_H{EsEiJ`BsHvT{E|FeI~CyIUaE_@wDiB{HsGmCb@eCdAqBu@m@oBrDiNzFkBRiE_HgIiBnA_@rEl@bGyDpHsIlDuK@VwGbCS|ByAz@wCAkFmCuSaAgAcBJg@vA`B`H[vFuBjHeDpBqDtDw@jDcBx@}Ai@iBuBGsDR}A`BqCvDdAnBaB@{KzBkH@gIjDsEAcD}A{DwA`@mAtDwDrDyHeCkCoCs@kEwAqAwFGkA~@CpAv@fCzCxEpCrOqAnDmDzAyHuAqA{FmCk@uGbCcCUmDoFqABm@bAe@|B`AbHFxFwBrLMlFuAfCwB?yBqAkJeMuDiAiGv@cGCqAvBWrEy@~B_BbBuHb@sErAuBfAsCjDk@~SfBhBnB?hAkCh@kChAeAfCg@vChBrFtKbAtAxBxKGzEk@nByAV{AgBkAgFLsHUeBcBoBwDf@gCpBoCjEQtCH`CyFdBgAtCiAp@{@CuAcBeAiCmANoArEB~Bd@rA|CeBjAb@MrBiC|CE`D_@tCoDCoAuBu@cDaCl@h@bGStCsAjAc@rAvAfE?|BgCt@SnAbBrC[|B}ELcA|BFhC|DnBpFgAdB{AnAiGnAIh@nBgAbDcArFh@fF|CnIvBzD|KTrBjP_CrMb@jGxCbELhBbC`L~GjGxBxHaBnQcFvPa@`EbA|CrEpF]~CaJm@{CnB{@hEj@lTbApG}@zC_F}BmCfAkEuAoCpEeEfCXhFzDcBb@fE_DjAz@pKa@xFxBz@nFoBdF`FlB`KaAtCoCq@}FAgEwDkC\\sCpDmDhAsG_CiEzAqDzFSzDrB~JAhCgA`AoGiDcDnFMxCZ`FyDpPwCtDmC~@uBvEgD|CwBvD[|Cl@rB~Hm@~@zAo@zBkFlAcHtLkAlGObGgAjFObCt@lLuAbFkB|AoAtC}@dK_BdCw@lDx@`CvEn@zBcC~BxA?tEmBvC_HhB{F`HeAvBcErFyA|DQ~Bt@`C^dDEpIq@lDyFzHqApKuCrEq@xB?rBv@dApBPhIzBnCnDrDdJZhCKtCoFxMwBtAwAy@SyFcBmAwFfJiBjNiBzDoCbDq@`TgDiAO`EkFkAW|AfAtJYrAiDmAiAfD~@rERdEgAz@iAU}@lChEpEt@xCb@zMcBjC?tClEnCKdIhApGpB~CvB?bAhD@hBqCjBwBjCuA~Em@pHHbH~ApKfEhOtErDnCjE\\~DeAr@LpA|@r@P`Ek@hAyCH}AiDiCpGeAjP}AtBeA~Cf@bFiAnHcDxCs@tBQfU}BlEy@jG}DxK_E~Cw@jG")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=719.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.177742,-69.224444),new google.maps.LatLng(49.518872,-63.125742))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="GaspÃ©, QC [CAE]<br>Class E<br>2200ft AGL to 12500ft,"
mt="Control Area Extensions<br>CDAH section: 3.5.2-8"
po.paths=google.maps.geometry.encoding.decodePath("widkHn`bhKzf@arThuBo|Sb`EerRzdGotPpaImeNftJsgKl{K_~G|uLclD`cMku@lbMp`AbtL|uDpxKjeHvpJnkKx}HleNjaGrpPd}DzjRnsBrrSdf@zfTef@xfTosBtrSe}DzjRkaGrpPy}HleNwpJnkKqxKheHctL~uDmbMn`AacMiu@}uLclDm{Ka~GgtJsgKqaImeN{dGotPc`EerRiuBo|S")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.346787,-65.036207),new google.maps.LatLng(49.179324,-63.773237))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="12500"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Macaza/Mont-Tremblant, QC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-10"
po.paths=google.maps.geometry.encoding.decodePath("usx|G~mlgMxf@gsSfuBu~R~_EivQvdGm{OlaIapM`tJovJj{KwqGzuL{dD`cMks@lbMf}@dtLnmDtxKdxGzpJzyJ|}H`pMnaG`xOj}D|oQnsB~uRff@jiSgf@hiSosB~uRk}D|oQoaG`xO}}H`pM{pJzyJuxKdxGetLnmDmbMf}@acMks@{uL{dDk{KwqGatJovJmaIapMwdGm{O_`EivQguBu~R")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.993176,-75.383713),new google.maps.LatLng(46.825713,-74.176287))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON a) [CAE]<br>Class E<br>1500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-12"
po.paths=google.maps.geometry.encoding.decodePath("kijtGzrfnMwnVqqI??kkE_qAq}DseCwjDarD_sCiyE{vBezFiwA{sGcu@keHiQgnH|PknHvt@oeH|vAatGpvBqzFvrCuyEpjDorDj}DcfCrjE{uA`rEgc@zrEdRj~VpkJacZr~QniIvyY??ht@|Gfr@~Utn@fb@vi@hm@pc@`w@h\\d_AbTheAjKniAdBjkA_E`kAaNlhAuVtcAq^||@qe@ft@uk@li@??vc@n|Cht@lrCcwHjaOzxD~gJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=967.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.371944,-75.896944),new google.maps.LatLng(45.721198,-75.279156))
a.airClass="E"
a.altLow="1500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON b) [CAE]<br>Class E<br>2500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-13<br>Excluding the Ottawa, ON TCA."
po.paths=google.maps.geometry.encoding.decodePath("acjvGjq_iMlotBsnk@jbr@driAt_VvovCtkvA~wHfp@tsCngEr`IdIz{AtRvf@g@jeAyFvIz`Bn~Dr~FpN~qBljDqszHjsMmmZbl@v}g@ktoF")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.221417,-76.273889),new google.maps.LatLng(45.978056,-74.813889))
a.airClass="E"
a.altLow="2500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Roberval, QC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-15<br>Excluding the airspace within the Bagotville, QC MTCA."
po.paths=google.maps.geometry.encoding.decodePath("euyiHf_gxLzf@_oThuBqySb`EmoRzdGarPnaIicNftJ}eKl{K{|G|uLkkD`cMeu@lbMf`AbtLbuDpxK~cHvpJxiKx}HhcNlaGfnPf}DdhRlsBzoSdf@|cTef@|cTmsBzoSg}DdhRmaGfnPy}HhcNwpJviKqxK`dHctLbuDmbMf`AacMeu@}uLkkDm{K{|GgtJ}eKoaIicN{dGarPc`EmoRiuBqyS")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.128454,-72.923201),new google.maps.LatLng(48.960991,-71.665688))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Rouyn-Noranda, QC [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-17"
po.paths=google.maps.geometry.encoding.decodePath("o`qgHhux`Nxf@}iThuButS``EyjRzdG}mPnaIy_NftJccKj{KyzG|uLejDbcM{t@lbMt_AbtLvsDpxKzaHvpJzfKz}Hx_NjaGbjPh}DxcRlsBbkSff@b_Tgf@`_TmsBbkSi}DxcRkaGbjP{}Hx_NwpJzfKqxKzaHctLvsDmbMt_AccM{t@}uLejDk{KyzGgtJccKoaIy_N{dG{mPa`E{jRiuButS")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.756509,-79.562794),new google.maps.LatLng(48.589046,-78.314428))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sept-ÃŽles, QC [CAE]<br>Class E<br>2200ft AGL to 6000ft"
mt="Control Area Extensions<br>CDAH section: 3.5.2-19"
po.paths=google.maps.geometry.encoding.decodePath("ahctHvbosKzf@kgUjuBeqTd`EoeS~dGyeQraIitNjtJmsKn{KsfH~uLaqDbcMwv@lbMzbA~sLv{DnxKpnHrpJtwKv}HftNfaGraQd}Dp}RjsBnfTdf@f{Tef@f{TksBnfTe}Dr}RgaGraQw}HftNspJtwKoxKnnH_tLx{DmbMxbAccMuv@_vLcqDo{KqfHktJosKsaIgtN_eGyeQe`EoeSkuBeqT")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.815954,-66.924619),new google.maps.LatLng(50.648491,-65.623158))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="6000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Val-d'Or, QC a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-21"
po.paths=google.maps.geometry.encoding.decodePath("yjzfHh_yyMzf@khTfuBcsS``EmiRzdGulPnaIu~MdtJgbKl{KezG|uL{iD`cMwt@lbMn_AbtLhsDrxKfaHvpJ|eKz}Hv~MjaG|hPh}DlbRlsBriSff@r}Sgf@p}SmsBtiSi}DlbRkaGzhP{}Hv~MwpJ~eKsxKdaHctLhsDmbMn_AacMwt@}uLyiDm{KezGetJgbKoaIw~M{dGslPa`EmiRguBesS")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.640398,-78.416107),new google.maps.LatLng(48.472935,-77.170559))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Val-d'Or, QC b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.5.2-22<br>Excluding the airspace within the Toronto FIR."
po.paths=google.maps.geometry.encoding.decodePath("eeljHh_yyMv_B}tr@`~Gw_q@fsMgwm@hyRo_i@dkW}}b@nd[qy[ja^gzSj_`@uhKx|`@wmBdy`@tkDzt_@d_Mfq]vbUtpZbo\\dvV|}b@peR~ih@`cMxnl@psGdio@`|A|vp@a|A|vp@qsGdio@acMxnl@qeR|ih@evV~}b@upZ`o\\gq]vbU{t_@f_Mey`@tkDy|`@wmBk_`@uhKka^gzSod[qy[ekW}}b@iyRo_i@gsMgwm@a~Gw_q@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.057623,-79.287836),new google.maps.LatLng(49.055711,-76.298831))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wabush, NL a) [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.5.2-24"
po.paths=google.maps.geometry.encoding.decodePath("s`xdI`j`wKzf@etVnuBq|Uh`E}mTdeGejRzaIisOntJglLt{KoxHbvLo{DbcMoy@jbMtgA|sL`hEhxKvaIlpJdqLp}HhsO`aGfeR~|DtdThsB~oUbf@~eVcf@|eVisB~oU_}DvdTaaGdeRq}HhsOmpJdqLixKvaI}sL`hEkbMtgAccMmy@cvLq{Du{KoxHotJglL{aIisOeeGcjRi`E_nTouBo|U")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.543732,-67.544638),new google.maps.LatLng(53.376268,-66.162584))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wabush, NL b) [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.5.2-25"
po.paths=google.maps.geometry.encoding.decodePath("_{ihI`j`wKb`Bcqx@b_Hcuv@vtMs_s@f{Raum@hmW{{f@hf[c|^zb^y~Uh``@{mL`}`@gsBxx`@beEvs_@zuNto]htWxnZrx_@ftV|{f@tcRrxl@raMdjq@prG`mt@v{Ab_v@w{A`_v@qrGbmt@saMbjq@ucRtxl@gtV|{f@ynZpx_@uo]htWws_@zuNyx`@deEa}`@isBi``@{mL{b^y~Uif[c|^imW{{f@g{Raum@wtMs_s@c_Hcuv@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.960956,-68.511831),new google.maps.LatLng(53.959044,-65.195391))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bagotville, QC e) [TCA]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-6"
po.paths=google.maps.geometry.encoding.decodePath("u_saHfvgnLasxAanaBst\\}`t@??e_XwwAg}WheCebWjrIapUrvOmhSblUemPbmZ{`Mdt^_gIz|a@}bErcd@}x@~ee@zpAtbe@bzE~yc@v|Ifma@ptM`_^`~PfsYdvShnThzUxuNlhWroHp_XvaB|~WmkB|fW{uHjxU}uNvtSefTb~P_bY~vMce]pbJkl`@~cFaub@~~Am}c@uf@kdd@cnDmic@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.581743,-72.123445),new google.maps.LatLng(49.079756,-69.869682))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bagotville, QC f) [TCA]<br>Class D<br>1200ft AGL to 6000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-7"
po.paths=google.maps.geometry.encoding.decodePath("m`nfHphhsL??`{IhxAl`JgHhzI{aBfjImxDppHkiGhnGqrIddFyqKrsDqeM|}BilNrdA_eOhIaoOep@ejOmjBovNoaDotMatEceLq`GuiJseHucHmbIguEyuIi`Co_Jog@}~Ixp@itI`jCs_Il_FwaHrnHk{FbuJqmExpLuyCz_NkaB~`O}e@|rO|cMwC??{h@rvBgZ``CeKdeCfBjfCrQncCh`@v|Bdn@brBnz@ddBbeAfsAtmAv_AzsAjj@nwAvSpxAoA|vAsXvrAao@`lA{cA`cAyvAbx@cgBbk@mtBmu@zzJ??jmB`aD`}BtdCzhC`gBbrChcAgtFfmn@")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=944.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.998052,-71.496147),new google.maps.LatLng(48.663442,-70.495504))
a.airClass="D"
a.altLow="1200AGL"
a.altHigh="6000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC a) [TCA]<br>Class C<br>1500ft to 2000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-9"
po.paths=google.maps.geometry.encoding.decodePath("qcctGd|s_Mnw@rIv]jh@~bBnW~iE|B??`tCrhEfzBfiFr}ArbGl~@`uGr]``HcBhcHuc@r~GkdAfrGacBn~Fe_CxcFywC|bEilDx|Ca|DfrB{fEpdAclE~T{kEmYafEaiAqyDezBkH}F??}Rq}Cgc@mwCgs@umC_bAo`CcoAgpBmzAg}AmcB_hAqjB{n@??yu@chGsXaqGjCmsGda@coGf~@gdGtyA_sF`sB_|E~jC}|DbfA`~k@??zR~nDbg@tgDtz@j{CplAnjC`|AnuBzhB`}AprBxaAzxBtd@r{BnFrzB{UbvBss@`nBwoAxbBoiBrtAa`CzcA}rCfq@oaD~\\ekD~G_pDgKsoD}_@ejDm_H}ka@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=968.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.268698,-74.026291),new google.maps.LatLng(45.667561,-73.507397))
a.airClass="C"
a.altLow="1500"
a.altHigh="2000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC b) [TCA]<br>Class C<br>1500ft to 2000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-10"
po.paths=google.maps.geometry.encoding.decodePath("urjvGlgkdM|uEm}N??bfB`zAzoBr~@ruBxb@bxBdFhwBsTbsB}p@vkBukAhaBkdBftAezBxdAulCjs@e{Cp`@keDxL_kDgE}kDiYahDem@__D??jwCfhBz`DdfAnfDha@??rLnmGaP|lGao@heGwlAlvFghBx`F}`C~dEavCtcDagDz}BksDntAwzDvh@a}DiBazDgo@yqD_{AkcDegC")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.485136,-74.327072),new google.maps.LatLng(45.770839,-73.990503))
a.airClass="C"
a.altLow="1500"
a.altHigh="2000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC c) [TCA]<br>Class C<br>1500ft to 2000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-11"
po.paths=google.maps.geometry.encoding.decodePath("oqnvG|sibMsyJgyF??|oAefFfhB}pEz}BovDnpCqwCj_DytBfjDeoA~pDsg@|rDxB??fJhqEpZbnEjk@~gE??erBm[atBNorBjZ{mBpt@ofBhmAk|AbdB{oAfxBgaAjiCaq@vvC")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.654692,-73.946397),new google.maps.LatLng(45.8517,-73.743825))
a.airClass="C"
a.altLow="1500"
a.altHigh="2000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC d) [TCA]<br>Class C<br>2000ft to 3000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-12"
po.paths=google.maps.geometry.encoding.decodePath("{v`vGryscM??wiBm_Ak`BgyAcuAgnBugAm`Ckx@moCug@wzC}U_bDoCceDzLcdD|^{~CsyJgyF??fl@ckCxu@ycC}tJ{sO??bdAgzB??jTkwPvnAglPdiC_tOf`EgoNxrFw~L~cHa|JseIi_Q??~jIo|IbmJynG~eK}wDfSHleCjjP??nmEymAltEoU|sEx\\plE|rA??tnLjiAp~K`wDhcKnvGf}I|mJrnHryLdyAlrlC??}pG|`Mc_Iz~JgfJpqHedKd|EaxKv`CgaL`Xoac@lvB}`@pu@gwA|lO??g~Gqr@srGy_Co|FugEfgQajj@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=926.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.131722,-74.445242),new google.maps.LatLng(45.895525,-73.059106))
a.airClass="C"
a.altLow="2000"
a.altHigh="3000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC e) [TCA]<br>Class C<br>3000ft to 5000ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-13"
po.paths=google.maps.geometry.encoding.decodePath("iesvGz~~dM}xAqwH{gHmo\\eeEizRcHe\\sgCqvLo{AqkH??lo@urIfpAkeIfpB{pHvoCusG??jTkwPvnAglPdiC_tOf`EgoNxrFw~L~cHa|JseIi_Q??~jIo|IbmJynG~eK}wDfSHleCjjP??nmEymAltEoU|sEx\\plE|rA??|`Jpr@lvI|cC??vnAkw@vtAwa@rwAoL|wAfGruAt\\xpAdq@piAhdAd`AhuAzt@zcB|g@joBzYrwBlKh|B??ptEnjGb`EdhHdyAlrlC??}pG|`Mc_Iz~JgfJpqHedKd|EaxKv`CgaL`X??gxE|gGytFfoEcjGhpCqwGbmAw|GjGqyGw|@_nGgaCexF}fE")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=924.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.131722,-74.446055),new google.maps.LatLng(45.946497,-73.059106))
a.airClass="C"
a.altLow="3000"
a.altHigh="5000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC f) [TCA]<br>Class C<br>5000ft to 12500ft"
mt="Terminal Control Areas<br>CDAH section: 3.5.3-14"
po.paths=google.maps.geometry.encoding.decodePath("iesvGz~~dM}xAqwH{gHmo\\eeEizRcHe\\sgCqvLo{AqkH??fCsk@??kiBerT_\\waUhp@o_Uf}BckT`gEkeStkGioQriIijO`_KgxLzjLi{IxnMcgFfSHhaOtEjzFfBv}Ad@|q[tJ??htNb`HhhMdzKtoK|bOfkId|Q|}FxbT`BxxBpCzvCbAddA|Ap|A~Bp}B~B||BrA~{AvAz`B|AnaBxCtxCh@fi@XzhBA|q@_@xhBWvfF@|fBPneCpAxgFr@dtBr@~nBnBp~BbGt~FhAr~@fCtvBvCl|BvCxyB|@dr@??_sEdtS}zGb|Qu|I`sOeuKv{L{bMjxIodNfkFcyNjwBc`OXovNmfC??kkFzoAoqFtYsqFcWqlFqiAmbFozBeqEymD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=917.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.997397,-74.451327),new google.maps.LatLng(45.967472,-73.059106))
a.airClass="C"
a.altLow="5000"
a.altHigh="12500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON a) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-16"
po.paths=google.maps.geometry.encoding.decodePath("ebavGfczlMde@clRlpB}xQdxD}rPdzFu{NjtHytL`eJs`JvjK{aGfdLm{C|pLup@lpLfy@vbL~bDlhKlgGdbJpcJhqHxtLfwFvxNzuDjmPznBjqQtd@pcRud@rcR{nBhqQ{uDjmPgwFvxNiqHxtLebJrcJmhKlgGwbL~bDmpLdy@}pLsp@gdLo{CwjKyaGaeJs`JktHytLezFu{NexD_sPmpB{xQ")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=932.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.922882,-76.23751),new google.maps.LatLng(45.722118,-75.100823))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON b) [TCA]<br>Class C<br>5000ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-17"
po.paths=google.maps.geometry.encoding.decodePath("ebavGfczlMde@clRlpB}xQdxD}rPdzFu{NjtHytL`eJs`JvjK{aGfdLm{C|pLup@lpLfy@vbL~bDlhKlgGdbJpcJhqHxtLfwFvxNzuDjmPznBjqQtd@pcRud@rcR{nBhqQ{uDjmPgwFvxNiqHxtLebJrcJmhKlgGwbL~bDmpLdy@}pLsp@gdLo{CwjKyaGaeJs`JktHytLezFu{NexD_sPmpB{xQ")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=932.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.922882,-76.23751),new google.maps.LatLng(45.722118,-75.100823))
a.airClass="C"
a.altLow="5000"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON c) [TCA]<br>Class C<br>4000ft to 5000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-18"
po.paths=google.maps.geometry.encoding.decodePath("kmmqGxflnM??k`FtaOuzGtdMamIdzJwuJndHosK|eEoeLfaBckLsDedLwlBwpK}qEmqJkqHegIygKcsG{rMyvEcpO_tCs}PylA_zQgCedRldAa|Q`lCwaQloEevOplGuzMtaIaqKbmJw{HvmKi}EpbLqxB|jLsPxfLnuAdvKrzDvyJ`zGlpIvsJakClvE??`~Fv`KpmE~vLpxCf`Np_Bx|N~c@~kOoVrmOirAjaO_kCphN|wDhcC")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=934.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.956245,-76.235858),new google.maps.LatLng(45.720957,-75.101729))
a.airClass="C"
a.altLow="4000"
a.altHigh="5000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON d) [TCA]<br>Class C<br>3000ft to 4000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-19"
po.paths=google.maps.geometry.encoding.decodePath("kijtGzrfnMasUuak@y_Egwa@oxK_yZ??viFogLptGunJnzHuhH??~}@dn@|bAf]peAhLbfAaCrdAgT`aA{d@p{@it@ft@gbAnk@enAla@ywAnVw~A??|sKigB|zKFhuKh_BtdKp|DpiJhtGvbIfgJakClvE??fbFvoI||Dh{JrtCl}KpkBlvLenUdeSv`Pfvr@|wDhcC??szDzwLoeFlmKykGjzIolHz_HyfIb_Fs{IlqCczg@ai~@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.966142,-76.221114),new google.maps.LatLng(45.653886,-75.102729))
a.airClass="C"
a.altLow="3000"
a.altHigh="4000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON e) [TCA]<br>Class C<br>2500ft to 3000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-20"
po.paths=google.maps.geometry.encoding.decodePath("kijtGzrfnM{xD_hJbwHkaO??it@mrCwc@o|C??tk@mi@pe@gt@p^}|@tVucA`NmhA~DakAeBkkAkKoiAcTieAi\\e_Aqc@aw@wi@im@un@gb@gr@_Vit@}GoiIwyYquC~y@??{lAfXyhAxj@gcAlz@a|@vhA_t@rtAoxK_yZ??viFogLptGunJnzHuhH??~}@dn@|bAf]peAhLbfAaCrdAgT`aA{d@p{@it@ft@gbAnk@enAla@ywAnVw~A??|sKigB|zKFhuKh_BtdKp|DpiJhtGvbIfgJakClvE??fbFvoI||Dh{JrtCl}KpkBlvLenUdeSv`Pfvr@|wDhcC??szDzwLoeFlmKykGjzIolHz_HyfIb_Fs{IlqCczg@ai~@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.966142,-76.221114),new google.maps.LatLng(45.653886,-75.102729))
a.airClass="C"
a.altLow="2500"
a.altHigh="3000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON f) [TCA]<br>Class C<br>2500ft to 3000ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-21"
po.paths=google.maps.geometry.encoding.decodePath("}qstGv}zlM??krAhg@evAfQcwAaBmuAeWkqA{k@y_Egwa@??~s@stA`|@whAfcAmz@xhAyj@zlAgXpuC_z@niIvyYixCji@mh@pzP")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.45795,-75.682773),new google.maps.LatLng(45.588364,-75.437778))
a.airClass="C"
a.altLow="2500"
a.altHigh="3000"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON g) [TCA]<br>Class C<br>1500ft to 2500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-22"
po.paths=google.maps.geometry.encoding.decodePath("kijtGzrfnM{xD_hJbwHkaO??it@mrCwc@o|C??tk@mi@pe@gt@p^}|@tVucA`NmhA~DakAeBkkAkKoiAcTieAi\\e_Aqc@aw@wi@im@un@gb@gr@_Vit@}GoiIwyY`cZs~Q|fV|hK??jzDjxBnhDpeD|rCtjEhyBhjFn|AncG`}@ruG`\\h`H{C`cHqe@~}GefAfqG_eB~|F_aC|aFoyCt`EymD`zCk}DhoBygEjaAwlErQmkEoa@ibDhcFy}I_aP")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=964.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.123039,-75.984308),new google.maps.LatLng(45.510833,-75.340556))
a.airClass="C"
a.altLow="1500"
a.altHigh="2500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec, QC a) [TCA]<br>Class C<br>3500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-24"
po.paths=google.maps.geometry.encoding.decodePath("{sh}Gh_wrL`JexD|_@orDxt@igD|gAawC|xAcbCbgBgiBdrBcmAvyBun@n}BwNn}BpOpyBjo@~qBrmAzfBniBrxAbbCvgAxvCnt@xfDx_@xqD`JjwDaJjwDy_@vqDot@zfDwgAvvCsxAdbC{fBniB_rBrmAqyBjo@o}BpOo}ByNwyBsn@erBcmAcgBgiB}xAcbC}gAawCyt@kgD}_@orD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.674556,-71.563571),new google.maps.LatLng(46.907666,-71.223096))
a.airClass="C"
a.altLow="3500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec, QC b) [TCA]<br>Class C<br>1500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-25"
po.paths=google.maps.geometry.encoding.decodePath("}ee}GjlerLymTeqT??xeDktHrgEseGlcF}nElxFerC`fGeqAxkG{MpiGts@l_GpuBtmFvsD|tEnlFzuDd~GlqChgIthBvfJx|@r{JdOleK}\\rcKejApvJguBl~Iy|C~{Hw_EdpG_}Ef|EwsFraDicGdbBakGp_@kjGsf@rdBaxd@??hxB~\\`zBiAbxBo_@prBy|@xiBgxA`~AeqBnoAyfCt~@sxC`l@_fDfXsnDpCirDeO{pDkc@kjDuv@c_DkhAcoC}wAe{B}dBscBcoBeiAcvBsl@syBuNuyBtMgvBtk@koBlhAkeBbcBgxA|zB{hAdoC")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.541433,-71.758128),new google.maps.LatLng(46.999961,-71.028963))
a.airClass="C"
a.altLow="1500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec, QC c) [TCA]<br>Class C<br>2500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-26"
po.paths=google.maps.geometry.encoding.decodePath("wiw|GpfwsLsdB`xd@??_wF}yAmhFqxCctEonEazDa_GyzCshHmwBgjIupAybJyg@wqJf@qvJfj@cqJ~rAuaJnyBqhIxmTdqT??ow@naDyc@fmD_OzsDlDfuDpYdqD|m@zgD~`AtyC`rAzfCt`BbpBnlB`vAhuBnw@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.819003,-71.751789),new google.maps.LatLng(47.040123,-71.192833))
a.airClass="C"
a.altLow="2500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec, QC d) [TCA]<br>Class C<br>3500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-27"
po.paths=google.maps.geometry.encoding.decodePath("ahu~GzntpL??zuGa|NdnIolLf{JqqId}K}lFxrLwaCt{LaSnwLvyApfLneEdiK`kHp`JtgKrmHrxM~qFv{OnoDjoQxgBxqRd]hbSgl@p`SovBhlRg}DhfQq~FpoOqxHniMqiJ|uJ_pKjwG}jLhpDkyLvcA{yLus@xzB}bn@??`jGjh@|jGo_@dcGabBtsFoaD~|E_|Ev_E}oGz|Cw{HhuBe~IhjAkvJb]mcK_OgeKq|@q{JmhByfJcqCkgIquDi~GutEwlFmmFctDg_G_vBkiGet@ukGjMafGppAoxFpqCscFhnEygE|dG_fD|sHe_CryIysUqae@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=932.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.374903,-72.001204),new google.maps.LatLng(47.136178,-70.786246))
a.airClass="C"
a.altLow="3500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec, QC e) [TCA]<br>Class C<br>4500ft to 12500ft"
mt="Terminal Control Areas<br>Transponder Required<br>CDAH section: 3.5.3-28"
po.paths=google.maps.geometry.encoding.decodePath("eoz|Gz}|tLyzB|bn@??}eLahCgnKmwFilJ{uIg`I}jL}jGetNgnEioPokCwzQ{dAauRxAm}RhjAusRxpC_xQhtEejPxsUpae@??iqA`aJsh@dpJ@fuJvh@bpJjqA`aJtwBlhIxzC~fHtyDp}FpsEhmEtgFtwCjvFvwA")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=956.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.835233,-71.992778),new google.maps.LatLng(47.206134,-71.052789))
a.airClass="C"
a.altLow="4500"
a.altHigh="12500"
a.airType="TCA"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al/Pierre Elliott Trudeau Intl, QC [CZ]<br>Class C<br>SFC to 3000ft (2900ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-3"
po.paths=google.maps.geometry.encoding.decodePath("cpeuG|nm_MpjFp{E|_AppAjnFyy@|fD`xBr\\|e@`V`CtaA|r@tSfcApNp_BbrCxqDxShr@`Ctx@j|DogFdcDvqR??|_@fjDfKpoD_H~oDa]dkDeq@naD{cA|rCstA``CybBniBanBvoAcvBrs@uzBzUq{BoF{xBud@qrByaA{hBa}Aa|AouBqlAojCuz@k{Ccg@wgD{R}nDcfAc~k@p{AelH")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=977.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.351511,-73.907428),new google.maps.LatLng(45.595792,-73.474553))
a.airClass="C"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al Intl (Mirabel), QC [CZ]<br>Class C<br>SFC to 2000ft (1700ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-5"
po.paths=google.maps.geometry.encoding.decodePath("{|ovGjjxbM??m@wkD|PyiDld@ecDvv@axCrgAwhClvAsuB|bBi_BrlBkfAjsBmk@zvBmObwBbKbtBfg@zmBfbArdBj{ApxA`rBbjAleCry@huCpg@~`DzTfhD??jH|F??dm@~~ChY`hDfE|kDyL~jDq`@jeDks@d{CydAtlCgtAdzBiaBjdBwkBtkAcsB|p@iwBrTcxBeFsuByb@{oBs~@cfBazAzcBknF??i~Ayv@_wA{kAqnA{|A_dAulB??h`@sL`^}T`[a\\hWib@|Rsg@|Mwk@pHun@zBip@y@qp@qFmo@aL_m@eQei@yUkd@yYk^a]sWo_@cPaa@cHsa@]ga@hF}_@jNo]jV")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.55179,-74.232277),new google.maps.LatLng(45.798295,-73.838348))
a.airClass="C"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa/Macdonald-Cartier Intl, ON a) [CZ]<br>Class C<br>SFC to 2000ft"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-7"
po.paths=google.maps.geometry.encoding.decodePath("{igtGzlklM??fbAcxCxsAeeC|bBenB|nBwsApwByv@p|BeXt}BdE`{Bhd@ptBfbAtjBd~Aj}AdwBjmAplCzz@t}Crf@|iDfQ`qDwBzrDuXfoDwm@hfDkaAhxCcsAteCibB~nBmnB|tAewBfx@m|BtYw}BqCg{Bwb@_uB}`AekBc}Aa~AmvBcnAelCs{@s}Cyg@cjD??lk@ci@je@}s@p^m|@tVecAdN}gAfEqjAyA_kA}JciAsSgeAu[e_Acc@}v@")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.206136,-75.83462),new google.maps.LatLng(45.435875,-75.503629))
a.airClass="C"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa/Macdonald-Cartier Intl, ON b) [CZ]<br>Class C<br>2000ft to 3000ft (2600ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-8"
po.paths=google.maps.geometry.encoding.decodePath("ayitGfczlM`JgsD|_@wmDxt@}bD|gAasC|xAu~BbgBofBdrBakAtyBmm@n}BkNn}BbOpyB`n@~qBpkA|fBtfBrxAt~BtgAxrCpt@lbDx_@bmD`JprDaJprDy_@bmDqt@lbDugAxrCsxAt~B}fBtfB_rBpkAqyB`n@o}BbOo}BkNuyBmm@erBakAcgBmfB}xAw~B}gAasCyt@{bD}_@wmD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.205945,-75.834936),new google.maps.LatLng(45.439055,-75.503397))
a.airClass="C"
a.altLow="2000"
a.altHigh="3000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="QuÃ©bec/Jean Lesage Intl, QC [CZ]<br>Class C<br>SFC to 3500ft (3300ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-10"
po.paths=google.maps.geometry.encoding.decodePath("{sh}Gh_wrL`JexD|_@orDxt@igD|gAawC|xAcbCbgBgiBdrBcmAvyBun@n}BwNn}BpOpyBjo@~qBrmAzfBniBrxAbbCvgAxvCnt@xfDx_@xqD`JjwDaJjwDy_@vqDot@zfDwgAvvCsxAdbC{fBniB_rBrmAqyBjo@o}BpOo}ByNwyBsn@erBcmAcgBgiB}xAcbC}gAawCyt@kgD}_@orD")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.674556,-71.563571),new google.maps.LatLng(46.907666,-71.223096))
a.airClass="C"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-HonorÃ©, QC [CZ]<br>Class C<br>SFC to 4000ft (3500ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-12"
po.paths=google.maps.geometry.encoding.decodePath("e~tfHfj~pL??yj@tsBqw@pfBmbAnvAikA|cA_rAjo@gvAhY}wAnB_wAkRqsAyh@smA_~@ieAiqAa{@gbB}n@ipBma@_{B}RcbC{CkeCjIsdCfX}_Cnf@qwBns@skB|~@m|AphAqjA`pAov@buAy`@rwAcJrwAxJ~tAja@zoA~v@hhA|jAf~@h}Ag[`wDvbDlhGmw@|gK")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.436281,-71.176029),new google.maps.LatLng(48.604047,-70.924861))
a.airClass="C"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Hubert, QC [CZ]<br>Class C<br>SFC to 2000ft (1900ft AAE)"
mt="Control Zone<br>Transponder Required<br>CDAH section: 3.5.4-14"
po.paths=google.maps.geometry.encoding.decodePath("yjouGbii_M??uNgbDdAwcDhScaD~d@qzCru@}oC~dAyaCrrAipB~}A_|AbgBmeA~mBkj@ra@lcH??~vA{QbxAvCdvAjYvqAdn@|jApaAzaAbsAxv@`bBfj@bnBv_J`}h@k|DngFaCux@ySir@crCyqDqNq_BuSgcAuaA}r@aVaCs\\}e@}fDaxBknFxy@}_AqpAqjFq{EyoBalBe`C~EugAw^")
po.strokeColor="#4E1B5E"
po.fillColor="#4E1B5E"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.385014,-73.620464),new google.maps.LatLng(45.633841,-73.254492))
a.airClass="C"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Bagotville, QC [CZ]<br>Class D<br>SFC to 6000ft (5500ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-17"
po.paths=google.maps.geometry.encoding.decodePath("isrfHfacoL??psCytChcDsiB`mDq}@pqDwOxpDp\\zjDviAx_DztB~oCh|C~{Bb_EfdBf|EpiA|rFvl@hbGnNfjGeNhjGkl@nbGgiAbsF_dBp|Eu{Bn_E{oCt|Cs_DhuBwjDhjAypD~\\qqDeOcmDa}@mcDciB}tCcrCw`CoxDlu@}zJlw@}gKwbDmhGf[awDz~AimRrlCqpFqrAu}D")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=973.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.164048,-71.246756),new google.maps.LatLng(48.462486,-70.74601))
a.airClass="D"
a.altLow="0"
a.altHigh="6000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Jean, QC [CZ]<br>Class D<br>SFC to 3000ft (2900ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-19"
po.paths=google.maps.geometry.encoding.decodePath("qy}sG|ug~LzFs_CnVw{Ble@}sB`s@uhBd_AezAjiA{hAfqAku@rvAe`@jyAaJjyAlJpvAn`@bqAru@fiA~hA`_AdzA~r@phBfe@tsBlVj{BzFh_C{Ff_CmVj{Bge@vsB_s@nhBa_AdzAgiA~hAcqAru@qvAp`@kyAjJkyA_JsvAg`@gqAku@kiA{hAe_AezAas@shBme@_tBoVu{B")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.211191,-73.399459),new google.maps.LatLng(45.377698,-73.162763))
a.airClass="D"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Baie-Comeau, QC [CZ]<br>Class E<br>SFC to 3000ft (2900ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-22"
po.paths=google.maps.geometry.encoding.decodePath("ukkkHbvh_L|FiiCnVceCje@w|Bbs@spBd_AaaBjiAmnAfqAmy@rvAsb@jyA{JjyAhKpvA`c@bqAvy@fiApnA`_A`aB|r@lpBfe@n|BlVtdC|FzhC}FzhCmVtdCge@l|B}r@npBa_A~`BgiArnAcqAty@qvAbc@kyAfKkyAyJsvAub@gqAmy@kiAmnAe_A_aBcs@spBke@y|BoVaeC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.048969,-68.33446),new google.maps.LatLng(49.215476,-68.079985))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="GaspÃ©, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-24"
po.paths=google.maps.geometry.encoding.decodePath("yteiHhnphK|FkhCnVcdCje@{{Bbs@yoBd_Ai`BjiA{mAfqA_y@tvAmb@jyAwJhyAdKpvAxb@dqAhy@diA~mA`_Aj`B|r@roBhe@r{BlVtcCzF|gC{FzgCmVvcCie@p{B}r@toBa_Ah`BeiA~mAeqAhy@qvAxb@iyAfKkyAyJuvAkb@gqAay@kiA{mAe_Ai`Bcs@yoBke@{{BoVcdC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.692024,-64.604942),new google.maps.LatLng(48.858531,-64.352281))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gatineau, QC a) [CZ]<br>Class E<br>SFC to 700ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-26"
po.paths=google.maps.geometry.encoding.decodePath("}qstGv}zlM??}qAdg@yuAhQuvAyAcuAwVaqAck@wjAe~@gbAooAww@o~Awk@yjBm^atBeP}yBoAi|BhKc{BvYkvBlg@inB|s@}bB|~@ytA`hAedAfoAsq@ftAy[vfIbiYmh@pzP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.482486,-75.682761),new google.maps.LatLng(45.604511,-75.447217))
a.airClass="E"
a.altLow="0"
a.altHigh="700AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gatineau, QC b) [CZ]<br>Class E<br>700ft AGL to 2500ft (2300ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-27"
po.paths=google.maps.geometry.encoding.decodePath("}qstGv}zlM??}qAdg@yuAhQuvAyAcuAwVaqAck@wjAe~@gbAooAww@o~Awk@yjBm^atBeP}yBoAi|BhKc{BvYkvBlg@inB|s@}bB|~@ytA`hAedAfoAsq@ftAy[puC_z@niIvyYixCji@mh@pzP")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.45795,-75.682761),new google.maps.LatLng(45.604511,-75.437778))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="2500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Iqaluit, NU [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-29"
po.paths=google.maps.geometry.encoding.decodePath("wtsdK|xlaL|F}kEpVseEle@iyDbs@ggDf_A_pCliAmtBhqAiuAtvAqs@jyAiPhyAnQpvArt@`qA`vAdiAxtB~~@`pC|r@xfDde@nxDlVrdEzFvjE{FvjEmVpdEee@pxD}r@xfD__A~oCeiAztBaqA`vAqvArt@iyAlQkyAgPuvAqs@iqAiuAmiAmtBg_AapCcs@egDme@iyDqVseE")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(63.673135,-68.744109),new google.maps.LatLng(63.839643,-68.367558))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="La Macaza/Mont-Tremblant, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-31"
po.paths=google.maps.geometry.encoding.decodePath("irwzG~mlgMzFgbCpVg~Bje@kvB`s@yjBd_A_|AjiAkjAfqAov@tvA{`@hyAgJjyAtJpvAda@bqAvv@fiAnjA`_A~{A~r@tjBfe@bvBlVz}BzFzaC{FxaCmVz}Bge@bvB_s@tjBa_A~{AgiAnjAcqAvv@qvAda@kyAtJiyAgJuvA{`@gqAov@kiAkjAe_A_|Aas@yjBke@kvBqVg~B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.326191,-74.900745),new google.maps.LatLng(46.492698,-74.659255))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Mont-Joli, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-33"
po.paths=google.maps.geometry.encoding.decodePath("ccehHh{h_L|F{gCnVucCje@o{Bbs@moBd_A_`BjiAqmAfqA{x@rvAib@jyAuJjyAdKpvAtb@bqAby@fiAvmA`_A~_B|r@foBfe@d{BlVhcC|FlgC}FlgCmVhcCge@d{B}r@foBa_A~_BgiAvmAcqAby@qvAvb@kyAbKkyAuJsvAib@gqA{x@kiAqmAe_A_`Bcs@moBke@o{BoVucC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.525357,-68.333969),new google.maps.LatLng(48.691865,-68.082143))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Roberval, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-35"
po.paths=google.maps.geometry.encoding.decodePath("iysgHtjaxL|FsgCnVocCje@g{Bbs@goBd_Ay_BjiAmmAfqAwx@rvAgb@jyAuJjyAbKpvArb@bqA`y@fiArmA`_Ax_B|r@`oBhe@~zBlV`cCzFdgC{FdgCmV`cCie@~zB}r@`oBa_Az_BgiApmAcqA`y@qvArb@kyAbKkyAuJsvAgb@gqAwx@kiAmmAe_Ay_Bcs@goBke@g{BoVocC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.436746,-72.391248),new google.maps.LatLng(48.603254,-72.139863))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Rouyn-Noranda, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-37"
po.paths=google.maps.geometry.encoding.decodePath("_sveHvfd`N|FwfCnVubCle@ozB`s@onBd_Ag_BjiA_mAfqAkx@tvA_b@jyAuJhyA`KpvAlb@dqAtx@diAbmA`_Af_B~r@jnBfe@dzBlVhbCzFhfC{FjfCmVfbCge@fzB_s@jnBa_Af_BeiAbmAeqAtx@qvAjb@iyAbKkyAuJuvA_b@gqAkx@kiA_mAe_Ag_Bas@qnBme@mzBoVubC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.123413,-78.958811),new google.maps.LatLng(48.28992,-78.708967))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sept-ÃŽles, QC [CZ]<br>Class E<br>SFC to 3000ft (2800ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-39"
po.paths=google.maps.geometry.encoding.decodePath("kt`rHdrmsK|FolCnVchCle@u_C`s@esBf_AgcBjiAgpAfqAwz@rvAmc@jyAcKjyApKpvA|c@bqA`{@fiAjpA~~@fcB~r@`sBfe@h_ClVvgCzF~kC{F|kCmVvgCge@h_C_s@`sB__AfcBgiAjpAcqA`{@qvA|c@kyApKkyAaKsvAoc@gqAwz@kiAgpAg_AgcBas@esBme@s_CoVehC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.140913,-66.396238),new google.maps.LatLng(50.30742,-66.135984))
a.airClass="E"
a.altLow="0"
a.altHigh="3000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Val-d'Or, QC [CZ]<br>Class E<br>SFC to 4000ft (2900ft AAE)"
mt="Control Zone<br>CDAH section: 3.5.4-41"
po.paths=google.maps.geometry.encoding.decodePath("stxdHh}vyMzFkfCpVgbCje@czB`s@gnBf_A}~AjiAwlAfqAex@rvA}a@jyAsJhyA`KrvAhb@bqAnx@fiAzlA`_A|~A|r@bnBfe@xyBlVzaC|F|eC}F~eCmVzaCge@xyB}r@`nBa_A|~AgiA|lAcqAnx@svAhb@iyA~JkyAsJsvA{a@gqAgx@kiAwlAg_A}~Aas@gnBke@azBqVgbC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.97008,-77.907327),new google.maps.LatLng(48.136587,-77.658228))
a.airClass="E"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Wabush, NL [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.5.4-43"
po.paths=google.maps.geometry.encoding.decodePath("mqobIvmbwKzFcuCpVqpCje@qgCbs@izBd_AkiBjiAeuAhqAm~@rvAue@jyAyKhyAjLrvAdf@bqAx~@diAjuA`_AjiB|r@bzBfe@dgClV`pCzFptC{FptCmV`pCge@dgC}r@bzBa_AjiBeiAjuAcqAv~@svAdf@iyAlLkyA{KsvAse@iqAm~@kiAeuAe_AkiBcs@izBke@qgCqVqpC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.838691,-67.002532),new google.maps.LatLng(53.005198,-66.726357))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MontrÃ©al, QC [TSP RQ]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Transponder Airspace<br>CDAH section: 3.5.5-11"
po.paths=google.maps.geometry.encoding.decodePath("cfetGnbl_M??njDttA??`lAcvFjp@_dGnTskG??niL~_LdoJxdOhnHdsQ`fFxpS??{gHriDexHj`B__I~Zi}Hiq@??iCiqCsQ_oCq_@}iCswIeah@")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=977.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.151789,-73.754449),new google.maps.LatLng(45.415542,-73.356878))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON a) [TSP RQ]<br>Class E<br>2500ft to 4000ft"
mt="Transponder Airspace<br>CDAH section: 3.5.5-16"
po.paths=google.maps.geometry.encoding.decodePath("kijtGzrfnM|}IfaP??aeAxlAsmA~y@osAdf@}vAbQ{wAoBcvA_X{qAwl@ekAg`AgbAyqAmw@_aB{j@gmBc]kvBkN}{BGy}BzMa|Br\\qvBlj@smB`w@maBhbAuqAfrHttQ")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.385519,-76.015401),new google.maps.LatLng(45.524636,-75.801317))
a.airClass="E"
a.altLow="2500"
a.altHigh="4000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON b) [TSP RQ]<br>Class E<br>2500ft to 4000ft"
mt="Transponder Airspace<br>CDAH section: 3.5.5-17"
po.paths=google.maps.geometry.encoding.decodePath("{xmqG`e`lM??fz@dpMfL~vMeb@vtM{qAthM{~BxsLw`Pgvr@dnUeeS")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.956383,-75.904567),new google.maps.LatLng(45.083056,-75.536339))
a.airClass="E"
a.altLow="2500"
a.altHigh="4000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON c) [TSP RQ]<br>Class E<br>2500ft to 5000ft"
mt="Transponder Airspace<br>CDAH section: 3.5.5-18"
po.paths=google.maps.geometry.encoding.decodePath("ep~qGtjhjM??xuGpbLb`Fx~MhfDtkOfhBxjPhg@j{PsX~|P{yAvoPoxCbtO}wDicC??~jCqhNhrAkaOnVsmO_d@_lOq_By|NqxCg`NqmE_wLa~Fw`K`kCmvE")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=970.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.922948,-75.925731),new google.maps.LatLng(45.076044,-75.250511))
a.airClass="E"
a.altLow="2500"
a.altHigh="5000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON d) [TSP RQ]<br>Class E<br>2500ft to 3000ft"
mt="Transponder Airspace<br>CDAH section: 3.5.5-19"
po.paths=google.maps.geometry.encoding.decodePath("gcptGzi{mMbwHkaO??ow@k}Cyc@uhD_OeoDlDqpDrYqlDpj@_fD??mi@mm@sn@ab@cr@}Uet@{GixCji@mh@pzP??krAhg@evAfQcwAaBmuAeWkqA{k@dyOtx_@")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.421464,-75.839186),new google.maps.LatLng(45.557514,-75.575178))
a.airClass="E"
a.altLow="2500"
a.altHigh="3000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Ottawa, ON e) [TSP RQ]<br>Class E<br>6500ft to 12500ft"
mt="Transponder Airspace<br>CDAH section: 3.5.5-20<br>Excluding the airspace within the MontrÃ©al TCA."
po.paths=google.maps.geometry.encoding.decodePath("skexGfczlMbgA{rc@~tE{mb@b|Ice`@jxMe{\\reQwsXt`TmsS|fVs_N`vWa~G`mXauAdkXdsBtpWpxHt~UfsNrvS|}SzzPvsXdnMvp\\|sIlq_@roEjsa@feAvtb@geAvtb@soEjsa@}sIlq_@enMvp\\{zPxsXsvSz}Su~UfsNupWpxHekXdsBamXauAavWa~G}fVq_Nu`TmsSseQysXkxMe{\\c|Ice`@_uE{mb@")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.573217,-76.734766),new google.maps.LatLng(46.071783,-74.603568))
a.airClass="E"
a.altLow="6500"
a.altHigh="12500"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Charlottetown, PE a) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-4"
po.paths=google.maps.geometry.encoding.decodePath("ox`{G|ig`KzVaiKteA}|JnrB_eJr{CebI``EmuGl~Eg`FbvFgdDbfGkcBbnGq_@~mGbc@neGlfBbuFpfDh}ElaFx~DluGnzC|`InqBvbJbeAxyJrVpeKsVneKceAxyJoqBvbJozC|`Iy~DluGi}ElaFcuFpfDoeGnfB_nG`c@cnGq_@cfGkcBcvFgdDm~Eg`Fa`EmuGs{CcbIorBaeJueA}|J")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.040239,-63.482553),new google.maps.LatLng(46.539761,-62.75967))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Charlottetown, PE b) [TA]<br>Class E<br>1900ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-5<br>Excluding the airspace from 1900ft within the area bounded by a circle of 15 miles radius centred on the following: N46:17:24.00 W063:07:16.00 (Charlottetown, PE - AD)"
po.paths=google.maps.geometry.encoding.decodePath("cia|G|ig`Kxf@wqSfuBg}R|_EauQvdGgzOlaIaoM`tJuuJh{KcqG|uLodD`cMis@lbM`}@dtLbmDtxKpwGzpJ`yJ|}H`oMpaGzvOh}DrnQpsBrtRdf@~gSef@|gSqsBrtRi}DrnQqaG|vO}}H~nM{pJbyJuxKnwGetLbmDmbM`}@acMis@}uLodDi{KcqGatJuuJmaIaoMwdGgzO}_E_uQguBi}R")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.873732,-63.723506),new google.maps.LatLng(46.706268,-62.518716))
a.airClass="E"
a.altLow="1900"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fredericton, NB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-7"
po.paths=google.maps.geometry.encoding.decodePath("mpnxGppbuKxV_fKteA_zJnrBgbJr{Cw_I~_EisGn~Eo~E`vFacDbfGsbBdnGi_@|mGxb@peGreBbuFfeDh}Ev_Fx~DhsGnzCn~HnqB``JbeA|vJrVpbKsVrbKceA|vJoqB``JozCn~Hy~DhsGi}Ev_FcuFfeDqeGreB}mGxb@enGk_@cfGqbBavFacDo~Eo~E_`EisGs{Cw_IorBgbJueA_zJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.619117,-66.895913),new google.maps.LatLng(46.118639,-66.178526))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Halifax, NS [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-9"
po.paths=google.maps.geometry.encoding.decodePath("w~cpGlbndK??mpFngDmbG|fBekGpf@alGcYydGgzAwuFuxCk_FwrEcbEofGa_DkrHcwBauIukAkmJw]wzJ|Nq|Jf}@{rJtiB}}IzrCm~HpwDkuGvvE}cFloFukDz`GonBrjG}m@hlGvQ`fGvrAvvFhtC??vqFwcD`cGqcBlkGac@zkGj\\fdG||AxtFjzCd~EdsE|`EreGx}CdpHdvBvqIzjAdiJl]|uJ}NvwJy|@jnJ}hBbzI{qCv{HovDxsGuuExcFonFvlDg`GppBijGxp@mlGqNofGqoAewForC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=946.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.390053,-63.86104),new google.maps.LatLng(45.1305,-63.148442))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="ÃŽles-de-la-Madeleine, QC [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-11"
po.paths=google.maps.geometry.encoding.decodePath("ol~aHx_axJxVqqKveAceKnrBulJt{CciI``Ek{Gn~E_eF`vFwgDdfGmeBdnGe`@|mG|c@neGthBbuFdjDf}EhfFv~Dl{GnzCvgInqBhjJbeAxaKpVxmKqVxmKceAxaKoqBhjJozCxgIw~Dj{Gg}EhfFcuFdjDoeGthB}mG|c@enGe`@efGmeBavFwgDo~E_eFa`Ek{Gu{CciIorBulJweAceK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.174961,-62.147217),new google.maps.LatLng(47.674483,-61.408894))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moncton/Greater Moncton Intl, NB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-13"
po.paths=google.maps.geometry.encoding.decodePath("ka~yGrhxiKxVygKveAs{JnrB{cJr{CcaI~_EqtGn~Eo_F`vFwcDbfGacBdnGm_@|mG|b@neGbfBduF~eDh}Ev`Fv~DntGnzC|_IpqBraJbeApxJpVhdKqVfdKceApxJqqBraJozC|_Iw~DntGi}Ev`FeuF~eDoeGbfB}mG|b@enGm_@cfGacBavFwcDo~Eo_F_`EqtGs{CcaIorB{cJweAs{J")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.862461,-65.042774),new google.maps.LatLng(46.361983,-64.322226))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saint John, NB [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-15"
po.paths=google.maps.geometry.encoding.decodePath("uqbuGdedqKxVcbKveAgvJlrBy~Ir{Cq|H~_EqpGn~Ek|E`vFmaDbfGuaBbnGa_@~mGlb@neGrdBduFpcDh}Ep}Ex~DrpGnzCj{HpqBp|IbeAhsJpVx~JqVx~JceAhsJqqBr|IozCj{Hy~DrpGi}En}EeuFrcDoeGrdB_nGjb@cnGa_@cfGsaBavFmaDo~Ek|E_`EspGs{Cq|HmrBw~IweAgvJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.06635,-66.245456),new google.maps.LatLng(45.565872,-65.5351))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sydney, NS a) [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-17"
po.paths=google.maps.geometry.encoding.decodePath("stgzGpaomJxVchKteA_|JnrBedJr{CkaI``EytGl~Eu_F`vF{cDdfGecBbnGm_@~mG|b@neGffBbuFbfDh}E|`Fx~DxtGnzCd`InqBzaJbeA|xJrVrdKsVrdKceA|xJoqB|aJozCd`Iy~DvtGi}E|`FcuFdfDoeGdfB_nG~b@cnGo_@efGccBavF{cDm~Eu_Fa`EytGs{CmaIorBedJueA_|J")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.911628,-60.408374),new google.maps.LatLng(46.41115,-59.687182))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sydney, NS b) [TA]<br>Class E<br>2000ft to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-18<br>Excluding the airspace from 2000ft within the area bounded by a circle of 15 miles radius centred on the following: N46:09:41.00 W060:02:52.00 (J. A. Douglas McCurdy, NS - AD)"
po.paths=google.maps.geometry.encoding.decodePath("ieh{GpaomJxf@cpSfuBw{R|_EssQvdG_yOjaI_nMbtJytJh{KopGzuLcdD`cMes@lbMz|@dtLvlDvxKxvGzpJdxJ|}H|mMpaGtuOh}DfmQpsBdsRdf@lfSef@lfSqsBfsRi}DfmQqaGruO}}H|mM{pJdxJwxKzvGetLtlDmbM||@acMes@{uLedDi{KopGctJytJkaI}mMwdG_yO}_EssQguBw{R")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.745121,-60.648763),new google.maps.LatLng(46.577657,-59.446792))
a.airClass="E"
a.altLow="2000"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yarmouth, NS [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-20"
po.paths=google.maps.geometry.encoding.decodePath("kv_lGhyjrKxVixJteAslJlrB{uIr{CotH~_EuiGj~EyvE`vFk}CbfGg_BbnGi^~mGla@neG|aBduFl_Dj}EzwEx~DtiGpzCjsHpqBzsIbeA|iJrVduJsVduJceA|iJqqBzsIqzCjsHy~DtiGk}EzwEeuFl_DoeG|aB_nGla@cnGi^cfGg_BavFk}Ck~EyvE_`EuiGs{CotHmrByuIueAulJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.577183,-66.434254),new google.maps.LatLng(44.076705,-65.741857))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Loring Intl, ME/Houlton Intl, ME [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.6.1-22"
po.paths=google.maps.geometry.encoding.decodePath("{yr_Hb{paL??ccNiqQopKwlUguHojXipE_oZudBex[~Gkd\\lvBms[daFueZxdI}|Wf~Km{TvjNsdQ`hPg|LhtQ_gHfnRkiCduRpU|hRztD`jQxmIryO`|MtvMt~Qdp`AcfO|bJ?xb}@trfAlcG|dj@edAvK}t@iZylAa`CVyByAeBcKdAaHeOm@ad@dEa\\QwJaHcHo@{C[yEoD_EeLwd@ga@zs@oObA{BrGoEAyDgAgATmAxHaEeAiB^sDrIgE~D}C}AaDxIoGvDiA~A}@pKiB`C_EpIHxC[`BsHjKoEhJ{@`FeMvQaEjJyMlOwHzEwEz@}KnNgBrAiDCcBzAcBdEgCzBcAhDgBb@eBeAiAiDkAa@qAhAeEnJgDhA}@eBE{EsAcCwAOeB~AwApGkCzEi@hEaB|Bb@|FwB|DoB@{@hBq@`Ds@l@aAo@mAqDm@e@wBzCgBBmC{A_EfFoLNeA}@uAgCq@M_IpB}Ae@qBd@oCwBoEhAeCIuCoAcAbAsAMwB{CeA_@K{@l@sB`BiBu@wF_@g@aBYk@_Fo@OwA|AoA_GoADcCcBmA?eEyB_BoBA_@fBwC?g@gD}C_BQo@cCu@aA{CK{AkEP}@}@IQq@ImBD_AQaAsCqCkFr@uF{Lm@q@VwCYy@eC{BeAcHvFiKUwRiM_AaCkDUaExI_C}CcOqAOReBqCyBHsDpAsDBoCiBqCOgAHS{@wDsA]cAnACfBiCMu@y@aB`@?nC{A`@sAg@{@cCgCOe@o@gA?uA~@qGuAoDiCd@}C]}@c@_@{@VcAmAmDFsCiD]mAaFEaCjBG}@r@cDk@_@iCNe@g@ZaFzA}AyAqABa@n@y@zA]ZsDwFcIuGgDBo@n@wAImAf@uC^cABqAsAj@e@S?qBmCaAg@_A_A]iAp@UUZcBU]_AXcAaDCgCo@Yk@r@_@Mi@_Bm@BoB|Ba@A?aA`@sACg@cBSy@v@k@ESq@V_Bi@y@w@ZKjA{AtAi@Ec@j@c@hBCj@WXuAYEs@[P]zA}AZmAlC_@HQg@aBtABVWfA?fBq@b@Al@e@\\Iv@Hj@c@l@e@]W|@c@RKrF}BlAQr@yAb@{@hA}@IOs@}@YY^}Bo@UVmAk@aAp@k@~BTrANNC^k@bACb@uBLeA`C?j@IT`@l@_@fASvAUJOhCNjBm@n@B\\GlD`@lA@vAUnAsA`@[m@o@^{@]Ou@i@m@kACQ`@_CRE^i@~@JL]j@B`@k@h@@r@gEnBUb@ChEEPbAxAMb@ZZ?\\Mh@Th@Gh@Zh@@l@Yb@@Xa@p@?`@cAf@mAe@s@fAk@D[g@Mt@q@l@q@K[dAiCzBYII^@h@LPYdBSLR^A\\Fh@dBd@v@bAe@~@?v@h@lAG~@b@n@WTJx@aArAqCDyBbA_B@oGtD@f@y@h@g@Qk@^?p@Sj@qAdAoBRyF_AwC`@K~@eAj@Ai@{AU_GnB{lQy@mqKv@svHFkdLlAkmGz@uzJtCejGxBe}LrFylFpCqxDxB_|M~JwpBxAkjI~@_uJlAygItAo|F`AcvKw@_eF@mdKl@okFT{jIhA_e@DiMnZsRvx@gTbm@m`@vb@sKbY{Fr]y@f[{Olo@gb@z_AeU`aAaV`x@}Bhg@kHt]yI|Ry`@x_@}YvG{`@iAqPlFgK}AqLbDuOhPeGlCyFtJwGpPaTv[un@lXkRdMyH~NaQtv@qShd@yFtG}_@lSiLrQiNlKm]|J__@xZ}IlJ_WvSkJ`Roh@uBuZtEoLfHgQtVyk@|bBuJ`{@wBh[yCvMik@zs@y}@hu@qo@d|@gUzQcH~a@aTpq@{Rzb@aa@jpAeSbk@}Klb@{Jdx@aTnOcTnCy^t[wa@v_AmTz}@aHpOod@nbBiNpLwXlZgIns@mWn`@ce@hb@cXd`@aVtHyIcBoj@yDqRrMmKd`@gG`}@iAhe@kG`Vqx@jlCe@~]vCfXwCzRqK~\\iRjZua@fE_DjCkM|OeKtf@fBdUtOd}@SxhBkMte@}^fz@cCjYhAta@|DrRvQzd@pCfVC~JeE|c@{RleA_Cb`@Ph[n@fTvHvo@n@dZpBtX|OneAnRpc@rLbQfc@nc@lWdNhp@nG|QnI~[nHfPe@pJwEnx@oNxKWn[rWtNqDfMiS`V_Z`Y_IxKrD|H|L|EjVv@hs@}Cz[i@nt@kEzh@lBx_@z`@zaAzC`XwCn[iIjj@fH~]b@rNiBlWmJhc@}x@~d@aEpEcLb]uAt[|Ldw@pEje@RxYq@xLuKli@wAb]lAbt@zH|k@nNff@bi@nt@bErKnLbw@i@tWaD`Y}WnvAeAt\\")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.783333,-68.576667),new google.maps.LatLng(47.528606,-67.039885))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CHARLO, NB CAE [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.6.2-4"
po.paths=google.maps.geometry.encoding.decodePath("i|ibHnnv}Koh\\kylE??elIrcDc{IxfAe~IqOkwI{gBqfIm}DolHymGsiGovIe_FquKcnD{hMaxBcoNo~@{fO_CsoOnv@_iOjpBesNbgD{nMxxEg}KhdGu_JfhHcxGrcIuhEruIusBr}I}P|r\\_r`GjovAhxjAz`t@xfsK??edQ~rI}nOpoNklM~oRu{Jv}Uk_HhuXczDtsZaoAxv[rZz}[ksg@owH")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=845.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.128611,-68.0),new google.maps.LatLng(48.341009,-64.622222))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="MARITIME CAE [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.6.2-6<br>Excluding: i) The Greenwood, NS MTCA, ii) The Halifax, NS TCA,"
po.paths=google.maps.geometry.encoding.decodePath("ormwGhib{I`dfJrhxc@hwtE`i`W{u`H??bxUc`u@oyh@qlByiBubEteH_TrkEsnAvz@qy@Qmz@`d@ii@|Gu~@iLikBso@q`B}TkoBxnDoeBdqAex@|gAwpVpfM}lFnoB_zBfdBgtAxcBqcBzuAuOrw@yDdnCuB`Ki_@b~@IjM|K`UdJl^`E~Y`Sn_@KvX{GpN}UpRmFdO_Gra@cH`Jic@`FmOxT_ArLkIrb@w^jj@_Opj@kCpPYfOj@lZsCdZlBzInGfCdDvF~@xOrF~F~GeD|@bDtACfA|@pCIfAfAtADrJoD`[tSdGiB`GaNjI`AtJAfAbJ^~HrArKtDvN|s@zSfVsElHiXpJ}StWfBpJtFhItX`G``@vFnZxF~~@vF}@rRoKxh@nR}An{@nTla@vSd]qDdKgB~R_RxR`AvY_RpX{CaEc\\zj@gZjk@yo@`m@qMrO`@vMcNf|@gHhJ}Pvh@qDjGuAnM_QvC}VkEsLya@uZmDwYtLwFtd@wUx]}PxJuGrJ}R`QoHvu@eK|Mwe@kBiLwCeZhP_Rb@ej@rZyVfKuP}@uKpMoGA_I`FmGpJiXt^sTlJa\\b\\cCfJUvZkClJaNfM{ZhOwEtIkOvA{JvLsTfK}KcIyD~@gIpQeO|A}RjFaMcCaOrGoHqCaBtDbCdH@t@]nQqXdH_Fra@wHzBo]uV}PfB}FeGJeWjPoS_AmJ_RuGiBiO}EaGQgTyAaG}Qa@aBdPcI_CaD}L~A}QiCsNwRoBmFiEgG`BmWoGsXoZ}WeI{Ht@eFjDgKpNcFbD{I|ByJaHaFkToDyFyCaZ{DyP}H}IeHb@uFoBoDmDcXmd@kEeTkS{MwGPeXvNaG_DaCoKoDyAiGlBgDe@iBkGcGaJeDSeLf]eEnHTdGqAhBoORmHlD}K{MmEd@eUqLaGcN{CeEnCsGEkOsBcIyJgHgIsAsLjUgCr@yFcAeDnGsT|LqY~A{FfDwDzKyPzOqYzd@gLbIuWz^iIrIwMpVoB|KoVbUaE\\m@bHeF|FgIn@wJzIcFoDcJfEiAbFd@vHc@dJXtE_AtGRtKkBhNuJ~GkVdGsI`LkDoAcZjJcF_D_OnJmHpA_BmBi@aMsI_FkR~GmIjZeFnD_@~C}SrEmUOuCiNkMmAk`@dYuQxDgIhRsErB_CfJaJ`MeR|K{EbMaKlIqVjB_FhF_QrE_SsCcBeKcB_ExB_Q`IaLiBuWJaIyK{GqJzEmImQoDyCf@kIdG{Cx@oG}DqGcHuCeDkK^}FvCkLJoDiF}JzKaWwJyV{FdDOdR_FtPc\\dCgIyFrAwGoAyH_O}S~@eGxo@qs@dFcMAuJ_R_DgRtE}JvRkLe@iEqPzAmLp[}d@Xk]pIgOqA}KtCcJxKeBTiPcP{PwFtCwBaNxYa]QgJs`An\\_LpXeGtGcKoC{JxPc@jUggBlOa]mWnDcMcBwFxAaHyuC`Ii\\vGeQsb@wi@pMmb@ba@ukAdxAm@|Ksc@xOuJxh@rDzr@dPxT`@|WeTj\\pNdv@~B`]mBbBCfK`NbDtA}MdHkGLmOjStI|AnIpMhApY~m@mEj}B_m@xbBoPznAlDvw@lLhCXnWin@reCg[lh@|BvrBa~AjqCmVtl@hKh]bk@cYdPdc@cjAtmB`FnQwg@fw@wm@l[aiAzmAsTyEsd@lh@kz@pT_[x\\mb@hZgL_EZzTbJr\\{QrXqIrFwGpLgSfLQtBoAn@H|BC~Ar@pGDzVp]sE~l@cUxR_UdGaPvLi@pMua@xNcAnCjFlL`Gj@hEKxAqJ~Li@hF~Ap@pEtKm@jAy@rH{AhLl@nF}FbIcM|HwC`Rw_@pb@lMpN~Q~l@_}@fyAa@dyEocBlyAmMu|AwoEjh@gIklDmxBzdAq\\zpAujA`RuLwVggAkIcrAlO}t@iZylAa`CVyByAeBcKdAaHeOm@ad@dEa\\QwJaHcHo@{C[yEoD_EeLwd@ga@zs@oObA{BrGoEAyDgAgATmAxHaEeAiB^sDrIgE~D}C}AaDxIoGvDiA~A}@pKiB`C_EpIHxC[`BsHjKoEhJ{@`FeMvQaEjJyMlOwHzEwEz@}KnNgBrAiDCcBzAcBdEgCzBcAhDgBb@eBeAiAiDkAa@qAhAeEnJgDhA}@eBE{EsAcCwAOeB~AwApGkCzEi@hEaB|Bb@|FwB|DoB@{@hBq@`Ds@l@aAo@mAqDm@e@wBzCgBBmC{A_EfFoLNeA}@uAgCq@M_IpB}Ae@qBd@oCwBoEhAeCIuCoAcAbAsAMwB{CeA_@K{@l@sB`BiBu@wF_@g@aBYk@_Fo@OwA|AoA_GoADcCcBmA?eEyB_BoBA_@fBwC?g@gD}C_BQo@cCu@aA{CK{AkEP}@}@IQq@ImBD_AQaAsCqCkFr@uF{Lm@q@VwCYy@eC{BeAcHvFiKUwRiM_AaCkDUaExI_C}CcOqAOReBqCyBHsDpAsDBoCiBqCOgAHS{@wDsA]cAnACfBiCMu@y@aB`@?nC{A`@sAg@{@cCgCOe@o@gA?uA~@qGuAoDiCd@}C]}@c@_@{@VcAmAmDFsCiD]mAaFEaCjBG}@r@cDk@_@iCNe@g@ZaFzA}AyAqABa@n@y@zA]ZsDwFcIuGgDBo@n@wAImAf@uC^cABqAsAj@e@S?qBmCaAg@_A_A]iAp@UUZcBU]_AXcAaDCgCo@Yk@r@_@Mi@_Bm@BoB|Ba@A?aA`@sACg@cBSy@v@k@ESq@V_Bi@y@w@ZKjA{AtAi@Ec@j@c@hBCj@WXuAYEs@[P]zA}AZmAlC_@HQg@aBtABVWfA?fBq@b@Al@e@\\Iv@Hj@c@l@e@]W|@c@RKrF}BlAQr@yAb@{@hA}@IOs@}@YY^}Bo@UVmAk@aAp@k@~BTrANNC^k@bACb@uBLeA`C?j@IT`@l@_@fASvAUJOhCNjBm@n@B\\GlD`@lA@vAUnAsA`@[m@o@^{@]Ou@i@m@kACQ`@_CRE^i@~@JL]j@B`@k@h@@r@gEnBUb@ChEEPbAxAMb@ZZ?\\Mh@Th@Gh@Zh@@l@Yb@@Xa@p@?`@cAf@mAe@s@fAk@D[g@Mt@q@l@q@K[dAiCzBYII^@h@LPYdBSLR^A\\Fh@dBd@v@bAe@~@?v@h@lAG~@b@n@WTJx@aArAqCDyBbA_B@oGtD@f@y@h@g@Qk@^?p@Sj@qAdAoBRyF_AwC`@K~@eAj@Ai@{AU_GnB{lQy@mqKv@svHFkdLlAkmGz@uzJtCejGxB_`Ax@??_tBuvX_kEmrWk~GgzUojJooSsmLctPyeNajMyqOatIepPwtEk`QioAwaQxv@gqPxkE{`t@yfsKkovAixjA}g~B{c_On`qNu`i]")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=442.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.016667,-67.818097),new google.maps.LatLng(48.5,-57.033333))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yarmouth, NS [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.6.2-8<br>Excluding the Maritime CAE and the Boston ARTCC"
po.paths=google.maps.geometry.encoding.decodePath("guqpGrvirKn_Bgwn@h}Gmfm@`rMqfj@|wRi{e@viWki`@`c[ewYh`^}kRt~_@ioJr|`@qiBny`@b{Cru_@xzKlr]flS~qZlhZrwVli`@zfR`je@ddMhfi@ftGxzk@h|Atem@i|Arem@gtGxzk@edMhfi@{fR`je@swVli`@_rZlhZmr]flSsu_@xzKoy`@b{Cs|`@qiBu~_@ioJi`^}kRac[ewYwiWki`@}wRi{e@arMqfj@i}Gmfm@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=830.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.825956,-67.467127),new google.maps.LatLng(44.824044,-64.697873))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Greenwood, NS [TCA]<br>Class E<br>700ft AGL to 9000ft"
mt="Terminal Control Areas<br>CDAH section: 3.6.3-2"
po.paths=google.maps.geometry.encoding.decodePath("wvdoGr}rlKrhl@fmX??ycGpkVekIjrTqmKjjRahMtuOu|NhmLooUey{@??s~K`xFmxLlhCsbMtZe_MkrAenLi_EapKwfHweJoeKopHsxMwqFm}OskDqqQe`BqsRwQebSh{@}|RlhCadRjqEgxPzsGc{NxmIonLn}JytIpaLeqFxxLkfCtbM{W|~LztArmLr`EpoKhfHjeJxbKppHlsMtrF~uOpmDrhQfcBviR~UtxR}u@xtRcaC|~Q")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=913.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.361944,-65.760833),new google.maps.LatLng(45.396106,-64.339961))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="9000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Halifax, NS a) [TCA]<br>Class B<br>12500ft to 18000ft"
mt="Terminal Control Areas<br>CDAH section: 3.6.3-4"
po.paths=google.maps.geometry.encoding.decodePath("orntGx_sbKzv@ud[|dDkhZxmG}pXdnJa`VdcMoxR`jOw}Nz`QwsJxeR__F~wRedA|vR~uArbRrnF|{Pl_K`dOzcOv|LpxRdhJxyUzhGheXvaDvxYxu@zrZyu@xrZwaDvxY{hGheXehJzyUw|LnxRadO|cO}{Pj_KsbRrnF}vR~uA_xRedAyeR__F{`QwsJajOw}NecMoxRenJa`VymG}pX}dDkhZ")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.298058,-64.331043),new google.maps.LatLng(45.463609,-62.686179))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Halifax, NS b) [TCA]<br>Class D<br>1700ft to 2900ft"
mt="Terminal Control Areas<br>CDAH section: 3.6.3-5"
po.paths=google.maps.geometry.encoding.decodePath("kcpoGfpudK??epGruHirH`oFqjIdcDmyInrAo~IBmyIorA_iI{hD??nCgwBmHuvBaV}rBac@clBeo@ibB_z@}uAecAegAqjAmv@}oAid@esAcQctAn@yrAfTcoAvg@??{gEuiKgvCitLeaB{qMoi@sbNnM}eN|eAy{Mp|BmdMroDs`Lx}EiqJzeG{wHtfH}uFl_ImmDjoIk`BbvIyPnsI||@tgIzjC~rHvtEftGj{G??lmGgJnjGvz@d_GrzB`lFtvD|qEdmFpqDj|GtkC`cIxaB``Jzt@nrJjF|yJif@~uJ{sA`gJ}~BhmIcfDpiHihEz|FsdFphE}yFbnCwgGdoAomGdH")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=936.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.390401,-63.976923),new google.maps.LatLng(45.21357,-63.039124))
a.airClass="D"
a.altLow="1700"
a.altHigh="2900"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Halifax, NS c) [TCA]<br>Class D<br>2900ft to 12500ft"
mt="Terminal Control Areas<br>CDAH section: 3.6.3-6"
po.paths=google.maps.geometry.encoding.decodePath("atltGpstaK??`mDwyYjpGsbXxmJorUd`MulR|dOotN`zPwmJ`~Qs|E~oRueAfoRppAd|QteFfwPfsJtaOhuNd}LfhRvkJzhUtoGptWxkDliY|bAzeZ{e@jiZsoCrsYcuFheXqsIt_VehLndSmpNhvOgjP~wKysQdmG{kRtyBsqRc\\wdR{sDseQagIauO_qMktMsmQoeKwxTwjHcoW_gEwmYa_BmrZ??bnArz@ptAzd@zwAjOnxAqDnvAkZ|qAio@zjAybAraAktAhv@gcBli@ioBf[}wBhLa}BaAm~BkP_|Be_@_vBam@klBoy@o_BidA{oA_mAw}@ksAyi@iwAqTsxAHgwAfU_sAfk@")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.298217,-64.329918),new google.maps.LatLng(45.462778,-62.686153))
a.airClass="D"
a.altLow="2900"
a.altHigh="12500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Fredericton, NB [CZ]<br>Class D<br>SFC to 3500ft (3400ft AAE)"
mt="Control Zone<br>CDAH section: 3.6.4-3"
po.paths=google.maps.geometry.encoding.decodePath("m`ovGlsxtK??z]fwBbO`}BXd_CoMl}Bi\\bxBkj@boBaw@xbBcbAtsAekA|aAcrAhn@ovAdYixAhCowAwPctAgf@cnAqz@}eAgmAo{@q}Ako@akBwa@kuBeSg|B}Ck_ClIu~BnXezBxf@arB|s@qfBn_A_xAbiAwfAppAms@ruAq^bxA{HtwAhM??{IvXuFd[gCp\\Ud]xA|\\fEz[pHzYpKfWfNxSlPzOfRfKrtG~jCpg@fA")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.78587,-66.656621),new google.maps.LatLng(45.952092,-66.417659))
a.airClass="D"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Greenwood, NS [CZ]<br>Class D<br>SFC to 5000ft (4900ft AAE)"
mt="Control Zone<br>CDAH section: 3.6.4-5"
po.paths=google.maps.geometry.encoding.decodePath("exgrGzafkK`JerD|_@wlDvt@}aD|gAerC|xA}}BbgB{eBdrBsjAvyBcm@n}BiNn}B~NpyBxm@~qB`kAzfBbfBtxA|}BtgA|qCpt@naDx_@`lD`JnqDaJnqDy_@`lDqt@naDugA|qCuxA|}B{fBbfB_rB`kAqyBxm@o}B~No}BiNwyBcm@erBsjAcgB{eB}xA}}B}gAerCwt@}aD}_@wlD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.867889,-65.081733),new google.maps.LatLng(45.101,-64.752156))
a.airClass="D"
a.altLow="0"
a.altHigh="5000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Halifax/Stanfield Intl, NS [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-7"
po.paths=google.maps.geometry.encoding.decodePath("spsqGx_sbK`J{qD|_@mlDvt@saD|gA}qC|xAw}BbgBseBdrBojAvyBam@n}BiNn}B~NpyBtm@~qB~jAzfBzeBtxAv}BtgArqCpt@daDx_@xkD`JdqDaJbqDy_@xkDqt@daDugAtqCuxAt}B{fB|eB_rB|jAqyBtm@o}B~No}BgNwyBam@erBqjAcgBseB}xAw}B}gA{qCwt@uaD}_@klD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.764278,-63.673103),new google.maps.LatLng(44.997388,-63.344119))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moncton/Greater Moncton Intl, NB [CZ]<br>Class D<br>SFC to 3500ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.6.4-9"
po.paths=google.maps.geometry.encoding.decodePath("u}qxGrjxjKcKqgM??cAiWuCqVgFcUsHcSyJqPsLsMaNeJcOqFyOsB}OHuOhC_ObGuMbKckFd}E??ufAspCus@{`D{_@okDcKaqDzGmqDv\\ulDtp@{bDdcAgtCvsAkaCvaBujB`mB}pA~tByt@ryBeWtzBbEfxBfc@drBf`AzhBj{An|AxsBnmAzhCb|@|yCbi@pfDxTjnD\\dqD_SxnDkg@lgDqz@f{C_lApjCi{AxuB{gBr}AqqBtbAywBze@szBxGoyBcW")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.996017,-64.850522),new google.maps.LatLng(46.228767,-64.514587))
a.airClass="D"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Shearwater, NS (Heliport) [CZ]<br>Class D<br>SFC to 3500ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.6.4-11"
po.paths=google.maps.geometry.encoding.decodePath("q}}oGnfqbK|Fe~BnVgzBje@urB`s@mgBd_AcyAjiAahAfqAwt@rvA{_@jyA}IjyAhJpvAb`@bqA~t@fiAdhA`_AbyA~r@jgBfe@lrBlV|yB|Fx}B}Fx}BmV|yBge@lrB_s@jgBa_AbyAgiAdhAcqA|t@qvAd`@kyAfJkyA{IsvA{_@gqAwt@kiAahAe_AcyAas@ogBke@srBoVgzB")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.556469,-63.616449),new google.maps.LatLng(44.722976,-63.382439))
a.airClass="D"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Charlottetown, PE [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-14"
po.paths=google.maps.geometry.encoding.decodePath("yg`zG|ig`K|F_bCnV}}Bje@avBbs@sjBd_Ay{AjiAejAfqAkv@rvAy`@jyAgJhyAtJrvAba@bqArv@fiAhjA`_Ax{A|r@ljBhe@zuBlVr}BzFpaC{FpaCmVp}Bie@zuB}r@ljBa_Ax{AgiAjjAcqApv@svAda@iyArJkyAgJsvAy`@gqAiv@kiAgjAe_Ay{Acs@qjBke@cvBoV}}B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.206746,-63.241592),new google.maps.LatLng(46.373254,-63.00063))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gagetown, NB (Heliport) [CZ]<br>Class E<br>SFC to 3500ft (3300ft AAE)"
mt="Control Zone<br>CDAH section: 3.6.4-16"
po.paths=google.maps.geometry.encoding.decodePath("_ipvGdqxtKstG_kC??{Q}JePmOaNgSoKqVsHeYoEc[gBi\\Fs\\pBe\\|E{Z~H}XzKeVhNyRjP}N~QsJbSiEdKtwB~qFrkJ")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.8,-66.486111),new google.maps.LatLng(45.8577,-66.408464))
a.airClass="E"
a.altLow="0"
a.altHigh="3500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="ÃŽles-de-la-Madeleine, QC [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-18"
po.paths=google.maps.geometry.encoding.decodePath("y{}`Hx_axJ|FwdCnVu`Cje@sxB`s@{lBf_Ay}AjiAykAfqAqw@rvAoa@jyAmJhyAzJrvAza@bqAxw@fiA|kA`_Ax}A|r@vlBfe@jxBlVh`C|FhdC}FjdCmVh`Cge@hxB}r@vlBa_Ax}AgiA|kAcqAxw@svAza@iyA|JkyAoJsvAoa@gqAqw@kiAykAg_Ay}Aas@{lBke@sxBoVu`C")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.341469,-61.90111),new google.maps.LatLng(47.507976,-61.655001))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Saint John, NB [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-20"
po.paths=google.maps.geometry.encoding.decodePath("_abtGdedqK|Fu_CnVw{Bje@_tB`s@uhBf_AgzAhiA{hAfqAmu@tvAe`@jyAaJhyAlJpvAp`@dqAru@diA~hAb_AfzA|r@phBfe@xsBlVj{B|Fh_C}Fh_CmVl{Bge@vsB}r@rhBc_AdzAeiA`iAeqAru@qvAp`@iyAlJkyAaJuvAg`@gqAku@iiA}hAg_AezAas@whBke@_tBoVw{B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.232857,-66.008671),new google.maps.LatLng(45.399365,-65.771884))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Sydney, NS [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-22"
po.paths=google.maps.geometry.encoding.decodePath("_dgyGpaomJ|FsaCnVu}Bje@yuBbs@ijBd_Aq{AjiAajAfqAgv@rvAu`@jyAgJhyArJrvA`a@bqAnv@fiAbjA`_Ar{A|r@djBhe@puBlVh}BzFfaC{FfaCmVj}Bie@nuB}r@fjBa_Ap{AgiAdjAcqAlv@svA`a@iyArJkyAeJsvAw`@gqAev@kiAajAe_Aq{Acs@kjBke@yuBoVs}B")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.078135,-60.167977),new google.maps.LatLng(46.244643,-59.927578))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Yarmouth, NS [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.6.4-24"
po.paths=google.maps.geometry.encoding.decodePath("ue_kGhyjrKzFm|BnVqxBle@aqB`s@afBd_A{wAjiAagAfqA_t@rvAk_@jyAyIhyAbJrvAt_@bqAft@fiAdgA`_AzwA|r@|eBhe@xpBlVhxBzF`|B{F`|BmVhxBie@xpB}r@|eBa_AzwAgiAdgAcqAft@svAt_@iyAbJkyAyIsvAk_@gqA_t@kiAagAe_A{wAas@afBme@aqBoVqxB")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.743691,-66.203456),new google.maps.LatLng(43.910198,-65.972655))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Houlton Intl, ME c) [CZ]<br>Class E<br>SFC to 14500ft"
mt="Control Zone<br>CDAH section: 3.6.4-28"
po.paths=google.maps.geometry.encoding.decodePath("opdyGrrw|KhIyhDp]scD|p@kyCtbAmjCnrAiwBt_Bm`B~iBufA|pBwj@ntBoMltBbNxpBhk@viBbgAn_Bt`BfrAhwBpbAfjCtp@|xCn]`cDfIbhDgIbhDo]`cDup@|xCqbAfjCgrAhwBo_Bt`BwiB`gAypBjk@mtBbNotBoM}pBwj@_jBufAu_Bm`BorAiwBubAmjC}p@myCq]qcD")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.014826,-67.948095),new google.maps.LatLng(46.231285,-67.635794))
a.airClass="E"
a.altLow="0"
a.altHigh="14500"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moncton, NB a) [TSP RQ]<br>Class E<br>1800ft to 3000ft"
mt="Transponder Airspace<br>CDAH section: 3.6.5-16"
po.paths=google.maps.geometry.encoding.decodePath("ka~yGrhxiKxVygKveAs{JnrB{cJr{CcaI~_EqtGn~Eo_F`vFwcDbfGacBdnGm_@|mG|b@neGbfBduF~eDh}Ev`Fv~DntGnzC|_IpqBraJbeApxJpVhdKqVfdKceApxJqqBraJozC|_Iw~DntGi}Ev`FeuF~eDoeGbfB}mG|b@enGm_@cfGacBavFwcDo~Eo_F_`EqtGs{CcaIorB{cJweAs{J")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.862461,-65.042774),new google.maps.LatLng(46.361983,-64.322226))
a.airClass="E"
a.altLow="1800"
a.altHigh="3000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Moncton, NB b) [TSP RQ]<br>Class E<br>3000ft to 12500ft"
mt="Transponder Airspace<br>CDAH section: 3.6.5-17"
po.paths=google.maps.geometry.encoding.decodePath("ar~zGrhxiKzf@soSduBe{R~_E_sQvdGqxOjaIqmM`tJotJh{KgpG|uL_dD~bMcs@nbMx|@dtLplDtxKpvGzpJzwJ~}HpmMnaGbuOj}DvlQnsBrrRff@|eSgf@zeSosBrrRk}DvlQoaGbuO_~HpmM{pJzwJuxKpvGetLplDobMx|@_cMcs@}uL_dDi{KgpGatJotJkaIqmMwdGqxO_`E_sQeuBe{R")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.695954,-65.282949),new google.maps.LatLng(46.528491,-64.082051))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Deer Lake, NL [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.7.3-4"
po.paths=google.maps.geometry.encoding.decodePath("ug{lHbgh}IxV_`LxeAcsKnrB{yJv{C{tI``EoeHp~EemFbvFumDbfG_iBdnGea@|mGje@neGplB`uFjpDf}ErnFv~DneHlzCnsIlqBbwJbeAnoKpVz{KqVz{KceApoKmqBbwJmzCnsIw~DneHg}ErnFauFhpDoeGrlB}mGje@enGga@cfG}hBcvFumDq~EemFa`EoeHw{C}tIorByyJyeAcsK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.961072,-57.773706),new google.maps.LatLng(49.460594,-57.009072))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gander, NL [TA]<br>Class E<br>1500ft to 2500ft"
mt="Transition Area<br>CDAH section: 3.7.3-6"
po.paths=google.maps.geometry.encoding.decodePath("axekHzy`lIxVu}KveA}pKnrBwwJv{C_sI``E}cHp~E{kFbvFulDbfGmhBdnGaa@|mGbe@neG~kB`uFjoDh}EhmFt~DzcHlzCrqInqB`uJ`eAjmKrVryKsVryKaeAhmKoqBbuJmzCpqIu~D|cHi}EfmFauFjoDoeG~kB}mGbe@enGaa@cfGmhBcvFulDq~E{kFa`E{cHw{CasIorBwwJweA{pK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.687217,-54.948357),new google.maps.LatLng(49.186739,-54.187927))
a.airClass="E"
a.altLow="1500"
a.altHigh="2500"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. Anthony, NL [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.7.3-8"
po.paths=google.maps.geometry.encoding.decodePath("cdezHdnmuIgdf@mnh@peRosw@zhd@dq`@??fyEq{FzrFcvDzbG{oBbkGmf@hkG~a@rcGbkBbtF|pDl}EhqFd`EhjHh}CnzItuBj`KpjA|zKj]liLyNjkLq|@x`LkhB`jKgqCpgJwuDpzH}tEbdGwmF|eEo_GpaCwiGhy@alG_OifG}xAwxFo`DucFicFwgEo_HyeDasI{~Bq|J_tAozK_f@clL")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=947.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.142275,-56.482835),new google.maps.LatLng(51.841667,-55.605))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. John's Intl, NL [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.7.3-10"
po.paths=google.maps.geometry.encoding.decodePath("ihdcHrb~`IzVasKveAqfKlrBcnJt{CijI``Em|Gn~E{eFbvFihDbfGyeBdnGi`@|mG`d@neGbiBbuFzjDh}EdgFv~Dl|GlzC~hInqBrkJbeAfcKpVfoKqVfoKceAfcKoqBrkJmzC~hIw~Dl|Gi}EdgFcuFxjDoeGdiB}mG`d@enGi`@cfGyeBcvFihDo~E{eFa`Em|Gu{CijImrBcnJweAqfK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.36885,-53.122473),new google.maps.LatLng(47.868372,-52.381416))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Stephenville, NL [TA]<br>Class E<br>700ft AGL to overlying airspace"
mt="Transition Area<br>CDAH section: 3.7.3-12"
po.paths=google.maps.geometry.encoding.decodePath("_ayhHnpjdJxVozKveAwmKnrBwtJv{CkpI``EsaHn~EajFbvFkkDdfGsgBbnGy`@~mGxd@leGbkBbuF~mDf}EjkFv~DraHlzC~nInqBdrJ`eAfjKrVnvKsVlvKaeAfjKoqBdrJmzC~nIw~DraHg}EjkFcuF~mDmeGbkB_nGxd@cnGy`@efGsgBcvFkkDo~EajFa`EsaHw{CkpIorBwtJweAwmK")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.294406,-58.927255),new google.maps.LatLng(48.793928,-58.172745))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CAE Number One [CAE]<br>Class E<br>5500ft to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.7.4-4<br>Excluding the airspace within the Newfoundland CAE."
po.paths=google.maps.geometry.encoding.decodePath("}my`HjuqaI|aaHkwhJ_}hQ?_}hQ~tlLvo|QvvcGhgsGktgI")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=614.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.0,-54.535),new google.maps.LatLng(52.0,-51.0))
a.airClass="E"
a.altLow="5500"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CAE Number Thirteen [CAE]<br>Class B<br>12500ft to overlying airspace"
mt="Control Area Extensions<br>Transponder Required<br>CDAH section: 3.7.4-6<br>Excluding the airspace under the jurisdiction of Goose, NL MTCA."
po.paths=google.maps.geometry.encoding.decodePath("g|mhI~tw|JmmkScvaQ??a|EezFi_EqbIq_DyyJi{BmfLosAegMki@e{M\\uaNhk@ozMjuAafM~|BsdLbaDqwJjaE}}H~amSa}rX??z`FqtE`sF{oCv}FgiApaGy@b~FleAxsFrkCxbFvmEpkE`jGxnD~~HblChlJnsiHtfjY??mc\\gt_Aoxb@ijv@s_h@oxk@_al@kx_@qxn@msRybp@wtD{}o@luG}hn@daV{dk@r}c@atf@t{p@kz`@`l|@k}Yr`fA{cR`mmA}uIjgrAq|@xhtA~|EznsA~pNlzoAjtVnpiAr~]xy`Alhd@rav@xvi@`mh@")
po.strokeColor="#610034"
po.fillColor="#610034"
po.zIndex=577.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.118839,-62.549444),new google.maps.LatLng(57.452299,-54.544414))
a.airClass="B"
a.altLow="12500"
a.altHigh="18000"
a.airType="CAE"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="NEWFOUNDLAND CAE  [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.7.4-8<br>Excluding the airspace within the St-Pierre, France TCA. Excluding the airspace within the Gander, NL TCA."
po.paths=google.maps.geometry.encoding.decodePath("_t_gH~jlyJunjHwbzU??euMi_l@inHyjo@kbCseq@nk@oqq@~yv@yaeQ??huFw~m@voKakk@j_Peqg@dfTekb@|lrFimoI??h`Xs{[h~Zq~Tx~\\uyMpe^ejF|q^dGzc^fxFz{\\r`Nh{ZtzTzcXda[`xTto`@vzPdbe@boLluh@vzGnfk@dtpChkwZg}qNhfd]")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=503.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.945403,-62.0),new google.maps.LatLng(50.178177,-51.328902))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. Anthony, NL [CAE]<br>Class E<br>2200ft AGL to overlying airspace"
mt="Control Area Extensions<br>CDAH section: 3.7.4-10"
po.paths=google.maps.geometry.encoding.decodePath("_mwzHruzxI??eeJwxRsxGkxUegEk|WwoBohYaUs{YjdA}tYv}CstXjrF}{Vt_ImlTncK_iQv{LotM|fNyrItcOygElqOuw@voOhwAx~NzdF`_NfkJtqLlfN|wJfsQlsHznTffFvvVprC`iXtz@pdYy\\nhYouBxtX{jE`jWmzGdiUkeJlnR{mdC?")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.892346,-56.666667),new google.maps.LatLng(51.890694,-55.284045))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="CAE"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gander, NL [TCA]<br>Class E<br>2500ft to 12500ft"
mt="Terminal Control Areas<br>CDAH section: 3.7.5-2"
po.paths=google.maps.geometry.encoding.decodePath("whflHzy`lIzf@otThuB{~Sb`EktRzdGmvPpaIegNftJ}hKl{Ka_H~uLslD`cMqu@lbMx`AbtLrvDpxKjfHtpJ|lKx}HbgNjaGprPd}D~lRlsB|tSff@diTgf@biTmsB|tSe}D`mRkaGnrPy}HdgNupJzlKqxKjfHctLrvDmbMx`AacMou@_vLulDm{Ka_HgtJ}hKqaIcgN{dGovPc`EktRiuB{~S")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.520709,-55.201824),new google.maps.LatLng(49.353246,-53.93446))
a.airClass="E"
a.altLow="2500"
a.altHigh="12500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Goose Bay, NL d) [TCA]<br>Class E<br>700ft AGL to 18000ft ASL"
mt="Terminal Control Areas<br>CDAH section: 3.7.5-7"
po.paths=google.maps.geometry.encoding.decodePath("mjbhIlemoJbw@wp`@neDyn_@tnGal]foJ}jZhdMunVbkOw{QtaQ{vLjfRoeGdxRkmAtvRziB~aRr~Gb{PliM~bOreRr{LvnVdgJ~`Z`hGny\\daDtu^pu@ft_@qu@ft_@eaDtu^ahGly\\egJ`aZs{LtnV_cOteRc{PliM_bRp~GuvRziBexRimAkfRqeGuaQ{vLckOu{QidMwnVgoJ{jZunGal]oeDyn_@")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=901.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.755002,-61.341789),new google.maps.LatLng(53.920553,-59.389878))
a.airClass="E"
a.altLow="700AGL"
a.altHigh="18000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Goose Bay, NL e) [TCA]<br>Class E<br>2200ft AGL to FL280"
mt="Terminal Control Areas<br>CDAH section: 3.7.5-8"
po.paths=google.maps.geometry.encoding.decodePath("}mkmIlemoJjmCwctAjeLchqA`oT}tkA|a\\yqcA~ub@oiy@zdh@aim@fil@g_`@|_o@i{Qvfp@qlCn}o@n|Hhen@`vVl`k@hrc@trf@lfo@r`a@viy@voZztaAbfS~ahArjK`mlA`dChsnAadChsnAsjK`mlAcfS~ahAwoZxtaAs`a@viy@urf@nfo@m`k@hrc@ien@`vVo}o@l|Hwfp@olC}_o@i{Qgil@g_`@{dh@aim@_vb@oiy@}a\\yqcAaoT}tkAkeLehqA")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=754.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.889164,-62.790998),new google.maps.LatLng(54.786391,-57.940669))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="28000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Pierre, France a) [TCA]<br>Class D<br>700ft AGL to 6000ft"
mt="Terminal Control Areas<br>CDAH section: 3.7.5-10"
po.paths=google.maps.geometry.encoding.decodePath("gyl}G~qyuIzNsgG`n@o_GzkAooFhgBexEp_CgzDxsCsvCrcDknBjnDybAvsDiUtsDzV`nDfdAdcDloBhsCdwC~~BfzDxfBrwElkAnnFxm@`~FvN~eGwN~eGym@`~FmkAnnFyfBrwE__CfzDisCdwCecDloBanDfdAusDzVwsDiUknDybAscDknBysCsvCq_CgzDigBexE{kAooFan@o_G")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.595993,-56.412512),new google.maps.LatLng(46.929007,-55.926377))
a.airClass="D"
a.altLow="700AGL"
a.altHigh="6000"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Pierre, France b) [TCA]<br>Class E<br>6000ft AGL to 12500ft"
mt="Terminal Control Areas<br>CDAH section: 3.7.5-11"
po.paths=google.maps.geometry.encoding.decodePath("cs{_HfrotI~imAlk_@??ruAefF`mAwaFxeBmkEp{BqoD|mCunCh|CyiBdfDcbApkDqX`cD~fBhqNgbsB??dcRrrCzqP~aKr|NbfOvxLxzRfhJ~|UlmG|iX~jDv_ZrcAz|Zuc@x`[{kChkZepFx|XqmIvvVoaLxzSkiNnkPicPrkLmmQx~GmfR|hCqmRyOobR{jDmeQuaIewOyoM}xMupQslKm`UktHk{WyrEq~Y{jB}g[S}u[beAmv[")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=902.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.180476,-57.023013),new google.maps.LatLng(47.343728,-55.353333))
a.airClass="E"
a.altLow="6000AGL"
a.altHigh="12500"
a.airType="TCA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Gander Intl, NL [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.7.6-3"
po.paths=google.maps.geometry.encoding.decodePath("mjljHx|`lI`Ja`E|_@czDxt@onD|gAo}C|xAugCdgBwmBdrBkpAvyBsp@n}BmOn}BhPpyBjq@|qB~pAzfB`nBtxAtgCtgAd}Cpt@|mDv_@hyD`Jd_EaJb_Ew_@hyDqt@|mDugAd}CuxAtgC{fB`nB}qB~pAqyBlq@o}BfPo}BkOwyBup@erBkpAegBwmB}xAugC}gAo}Cyt@onD}_@czD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.823445,-54.746057),new google.maps.LatLng(49.056555,-54.391166))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Goose Bay, NL [CZ]<br>Class D<br>SFC to 4000ft (3800ft AAE)"
mt="Control Zone<br>CDAH section: 3.7.6-5"
po.paths=google.maps.geometry.encoding.decodePath("mlmeIl|xoJzNunHbn@keH|kA}rGjgBexFr_CwuE|sCwlDtcDq~BjnDqlAvsDiXtsDrZ~mDrnAdcD``CfsCrmDz~BtuEvfBjwFjkAlqGxm@hcHvNjlHwNjlHym@fcHkkAnqGwfBjwF{~BtuEgsCpmDecDb`C_nDrnAusDrZwsDiXknDqlAucDq~B}sCylDs_CuuEkgBexF}kA_sGcn@ieH")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.152659,-60.704572),new google.maps.LatLng(53.485674,-60.147095))
a.airClass="D"
a.altLow="0"
a.altHigh="4000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. John's Intl, NL [CZ]<br>Class D<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.7.6-7"
po.paths=google.maps.geometry.encoding.decodePath("wgjbHrb~`I`Ja{D|_@iuDxt@ajD|gAmyC|xAedCbgB}jBdrBinAvyBko@n}B_On}BxOpyBbp@~qBznAzfBdkBrxAddCvgAdyCpt@liDv_@rtD`JfzDaJfzDw_@rtDqt@liDwgAdyCsxAddC{fBdkB_rBznAqyBbp@o}BxOo}B_OwyBko@erBknAcgB{jB}xAedC}gAoyCyt@_jD}_@iuD")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.502056,-52.924859),new google.maps.LatLng(47.735166,-52.57903))
a.airClass="D"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St-Pierre, France [CZ]<br>Class D<br>SFC to 2000ft (2000ft AAE)"
mt="Control Zone<br>CDAH section: 3.7.6-9"
po.paths=google.maps.geometry.encoding.decodePath("m|_}GnozuInHq}Cd[wxC`m@eoCp}@gaC`lAioBfxAazAtaB}aAdhB{g@lkBqLlkBbM`hBjh@paBjbA`xAdzAzkAjoBh}@`aC|l@xnCb[dxClH~|CmH~|Cc[fxC}l@xnCi}@~`C{kAjoBaxAfzAqaBhbAahBjh@mkBbMmkBqLehByg@uaB_bAgxA_zAalAkoBq}@gaCam@eoCe[wxC")
po.strokeColor="#4D2F4D"
po.fillColor="#4D2F4D"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.663151,-56.320009),new google.maps.LatLng(46.86296,-56.028325))
a.airClass="D"
a.altLow="0"
a.altHigh="2000"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Deer Lake, NL [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.7.6-12"
po.paths=google.maps.geometry.encoding.decodePath("_wzkHbgh}IzFoiCpVieCje@_}B`s@ypBf_AeaBjiAqnAfqAoy@rvAwb@jyA{JjyAjKpvAbc@bqAxy@fiAtnA`_AdaB|r@tpBfe@t|BlVzdC|F`iC}FbiCmVzdCge@t|B}r@tpBa_AbaBgiAvnAcqAxy@qvAbc@kyAhKkyA{JsvAub@gqAqy@kiAqnAg_AcaBas@ypBke@_}BqVieC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.12758,-57.518829),new google.maps.LatLng(49.294087,-57.263949))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. Anthony, NL [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.7.6-14"
po.paths=google.maps.geometry.encoding.decodePath("gudyHv~huI|FapCnVskCle@}bC`s@cvBf_AyeBjiAgrAfqAg|@rvAmd@jyAkKjyA|KpvAxd@bqAr|@fiAlrA`_AxeB|r@|uBfe@pbClVdkCzFpoC{FpoCmVbkCge@pbC}r@~uBa_AxeBgiAlrAcqAr|@qvAxd@kyA|KkyAmKsvAkd@gqAg|@kiAgrAg_AyeBas@cvBme@}bCoVskC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.308413,-56.217865),new google.maps.LatLng(51.47492,-55.951024))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="Stephenville, NL [CZ]<br>Class E<br>SFC to 3000ft AGL"
mt="Control Zone<br>CDAH section: 3.7.6-16"
po.paths=google.maps.geometry.encoding.decodePath("kpxgHnpjdJ|FwgCnVocCle@i{B`s@ioBd_A{_BjiAomAfqAwx@tvAgb@jyAwJhyAdKpvArb@dqA`y@diArmA`_Az_B~r@doBfe@~zBlVbcCzFhgC{FfgCmVbcCge@~zB_s@doBa_Az_BeiArmAeqA`y@qvArb@iyAdKkyAwJuvAgb@gqAwx@kiAomAe_A{_Bas@ioBme@i{BoVocC")
po.strokeColor="#4A404A"
po.fillColor="#4A404A"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.460913,-58.675753),new google.maps.LatLng(48.62742,-58.424247))
a.airClass="E"
a.altLow="0"
a.altHigh="3000AGL"
a.airType="CZ"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. John's Intl, NL a) [TSP RQ]<br>Class E<br>2000ft to 3000ft"
mt="Transponder Airspace<br>CDAH section: 3.7.7-13"
po.paths=google.maps.geometry.encoding.decodePath("yhr`Hr}rbI??smEdrFagFtyDayFh}BycGd}@cgG}B}bG_eAgwFgeCkdFwaE}jE{xFskDwhHggCapI__BwmJ{s@y`KiGqhKpc@}dKjoAavJxxBg|It~CixH``EkkGv{E{vE`qFa|Cn_Ga}AnfGi[zeG|d@z}F|eBnnF~cDjxEb}E~{DzoGjzCvzHdtBv|IzjAttJf_@bbKeKrdKkw@b|JooNmbF??qcA`wFe_BbbFuxBleEbaJnqP")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=958.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.369033,-53.121441),new google.maps.LatLng(47.868013,-52.38144))
a.airClass="E"
a.altLow="2000"
a.altHigh="3000"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="St. John's Intl, NL b) [TSP RQ]<br>Class E<br>3000ft to 12500ft"
mt="Transponder Airspace<br>CDAH section: 3.7.7-14"
po.paths=google.maps.geometry.encoding.decodePath("}xddHrb~`Ixf@qbThuBomS~_EedRxdG}gPnaIuzMdtJa_Kj{KywG|uLohD`cMkt@lbMz~@btLvqDrxKt~GxpJtbKz}HtzMlaGhdPh}Dh}QnsBhdSdf@~wSef@~wSosBhdSi}Dh}QmaGhdP{}HtzMypJtbKsxKt~GctLvqDmbMz~@acMkt@}uLohDk{KywGetJa_KoaIuzMydG}gP_`EedRiuBomS")
po.strokeColor="#200080"
po.fillColor="#200080"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.202343,-53.369483),new google.maps.LatLng(48.034879,-52.134406))
a.airClass="E"
a.altLow="3000"
a.altHigh="12500"
a.airType="TSP RQ"
a.trsp="y"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="A3 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="A3 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Greenwood, NS NDB to Moncton, NB NDB"
po.paths=google.maps.geometry.encoding.decodePath("caiqGxh}lK{agFoddB??}gA{i@saAq{@ky@ikAgo@yxAuc@qcBaWgkBsIuoB`BspBtOanBx\\ghB`i@c_B~s@asAf}@qdAtdAys@`jAoa@~lAeNrmApC|kAdWh|fFb|dB??`hAnh@xaAvy@py@diApo@lvAbd@~`BlWnhBbJ|lBqA~mBcOtkBi\\bfBoh@j}Aos@vqA{|@tcAkdAns@yiAva@{lAzNumAoBclAuU")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=914.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.850622,-65.203844),new google.maps.LatLng(46.182819,-64.477933))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="A10 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="A10 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Bella Bella, BC NDB to Prince Rupert, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("exg}HtopmWucfCduoCau_AxutAsmgAn~aAsedCnkyC??u_At~@{dApk@ehAjWsiAjB{hAuPcfAge@qaA{x@_{@yjA}r@yzAki@ghBw^yrBcSezB_Ge~BhCu~BpOw{Bh[kuBff@wkBfp@a_Bvx@{oA|mdCk`yCzq_AsyuA`ygAco`AlkfC}ioC??vdAsz@`jA}e@~lAaPtmAhDzkAnZxgAxo@naArcAdy@luAbo@ndBpc@npB|VdyBrI~}BcBb_CwOf|Bw\\tuB_i@nkB{s@~}Ag}@rmA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=838.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.11304,-130.547477),new google.maps.LatLng(54.335575,-127.995788))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="A16 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="A16 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nanaimo, BC NDB to Active Pass, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("cafkH~wtrVltp@utpB??rm@swAnv@yjA~}@w{@vcAck@pgAkYjiAyFfiA|I`gAj\\|bA|m@z|@f~@du@zlA~k@hyAta@hcBhVpjBhJ|nB]fpBcLnnBaXtiBgc@|aBspp@xopB??am@pxAav@xkAq}@~|@mcAjl@kgArZkiA`HiiAyHggAk[ecAem@i}@u}@uu@slAql@iyAgb@scB}VckB}JuoBJcqBrKooBrWyjBxb@acB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=960.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.801803,-123.982071),new google.maps.LatLng(49.199934,-123.18014))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="B7 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="B7 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Rezin, QC Intxn to Rouyn, QC NDB<br>Airway Path: Gabin, BC Intxn to Kelowna, BC NDB "
po.paths=google.maps.geometry.encoding.decodePath("on~aHz`}|Mw}uA~`iC??cv@fjAu}@r{@ocAjk@kgA|YkiArGiiAyHegA_[ecAol@e}@u|@su@ikAol@wwAcb@yaByVciByJsmBN_oBxKimBtWuhB|b@caBfm@{vAlcvAabiC??`z@olAdbAa|@hhAui@dlAcVtmA{AzlApPpiAhd@bdA~v@p|@|gA`s@rvA`h@vbBx[xkBrNpqB~@xsBuJrrB}WxmBqd@veB_p@pzA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=949.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.655095,-79.046998),new google.maps.LatLng(48.244971,-78.124449))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="B18 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="B18 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Gabin, BC Intxn to Kelowna, BC NDB "
po.paths=google.maps.geometry.encoding.decodePath("_}gpH`skaVorUsxmH??u@isBrIerBrU{mB`a@ofBpk@k|Avt@qoAp|@u`AtbA}o@zfA}]diAaKniAdFtgAbY|cAjk@f~@j|@~v@xkA`n@~xA|c@xcBvXzkB|L~pBhpUb|lH??fBrrBcHzqBaT`nBs_@bgBcj@j}Ass@bqAq{@rbA{aAdr@mfAl`@_iAvMqiAkCahAkVqdAyh@e_Aaz@ax@wiAko@iwAke@qbBiZ_kBmNqpB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=930.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.873069,-121.076627),new google.maps.LatLng(50.132995,-119.303848))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="B18 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="B18 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Skookum, BC NDB to Firni, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("onfpHzhhaUb_gAmp~B??`x@wrAr`AebAdgAoo@nkAm[pmAoFfmAtLnjAja@neA`u@h~@`gAfu@|vApj@`dBn^bnBnQztB|C~wBwGnwBcUjsB}a@tkBum@v`B}yfAfn~B??gt@bpAc|@jaAkbAzp@ufA`_@aiAfLoiA{D{gA{WgdAej@u~@i{@mw@{jAun@ixAod@icBmYqkBoM{pBiAasB`IarB`U}mBp`@ufB`k@u|A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=954.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.514423,-115.904566),new google.maps.LatLng(50.027082,-115.028013))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="B25 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="B25 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Bella Bella, BC NDB to Kitimat, BC NDB to Terrace, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("o~l}H~ysmWmy}Cjpm@siVnpIqaWduBku}Cp{o@??gjAtKmjA{Gcn}@_pO??ogA_]ucAeq@{}@}cAmv@ytAmm@icBec@eoB}W{wB_Li}BUi_CpJu}BrVuxBza@kpBhl@ydBnu@svAb}@_fA`cAks@bgAm_@hiAqJjiApHpa{@dgOfm{Ckhn@djV{mIxaWuoBj|}Ccvl@??lmAwIlmApJ~jAr`@ffApu@h_A|hApv@|yA~k@dhB``@hsBfS|zBvEv~B_Ft~BmSxzBk`@bsBel@~gBuv@tyAo_AphAkfAdu@_kAf`@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=857.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.112958,-128.793174),new google.maps.LatLng(54.446099,-127.995664))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="R6 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="R6 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sioux Lookout, ON NDB to Thunder Bay, ON NDB"
po.paths=google.maps.geometry.encoding.decodePath("akeqH`vkoP|kuBu~hD|gp@waqAz_y@k{aAvuwBqdaD??n~@aeAreAms@pjAc`@hmA{KpmAxFlkAd[`gAtn@l`Av`Azw@xpApm@l~Aza@`iB`UppBtGptBaD~tBsQ~qBq^hkBsj@naBiu@ttAmnwBdgaDalp@bgpAaux@|wbAgduBp`iD??iy@jgAg`Alw@geA|e@mhAlSsiAf@uhA{PyeAqc@_aAiu@kz@oeAar@{sAmh@y_Bu]giB_RsoB{E_sBlDesBrPgpBj\\ajBfg@aaB`q@kuA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=844.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.274088,-92.010217),new google.maps.LatLng(50.190539,-89.325157))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="R35 LF/MF Airways<br>Class E<br>2200ft AGL to 18000ft"
mt="R35 LF/MF Airways<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Rupert, BC NDB to Kitimat, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("mdsjIn{{zW~{g@sbvI??jVi_C`c@kvBtn@{iBxx@azAfaAogArgAyr@xkAm\\rmAgEbmA`PbjAzf@~dAn|@r}@bpAjt@laBpi@toBl]lzBjPraCzBtdC{HzcCqwg@t~tI??}RxyBo^rrBei@dhBur@|zAyz@dkAkaAhy@afAxe@yhAhQqiAuAihAwV_eAak@{_Ag~@yx@uoAip@__Bmf@qkBk[iuBuOu{BmCu~BzFg~B")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=927.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.98204,-130.547439),new google.maps.LatLng(54.335578,-128.54708))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY LF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V13 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V13 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Duluth, MN USA VORTAC to Thunder Bay, ON VOR to Bilii, ON Intxn<br>Airway Path: Cut Bank, MT USA VOR to Lethbridge, AB VOR "
po.paths=google.maps.geometry.encoding.decodePath("md~|GzhcrPi`fBq||D{pk@uxfAscc@yxpA{nbB{tbEaitCmscF??{l@ytAmb@u_B}VqgBqJklB^ymBrLykBxXqfBdd@a~Aln@yrAhw@{dAj~@{t@pcAgc@rfAqPpgAt@ffAzSxbAlf@f}@vw@|u@hgAfutCzrdF??df@zbAhzbBnscEbfk@xjgAdic@xbpAzyeBdx|D??jg@|vAj\\x_BjPxeBzCrhBwFfhBcSvdB{^`~Awi@rtAgs@lhAe{@bz@kaA~i@keApXkgAfFegAeJwdAi\\c`Aqm@uy@m}@iq@mkA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=782.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.735574,-92.300138),new google.maps.LatLng(49.087369,-88.160394))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V21 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V21 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cut Bank, MT USA VOR to Lethbridge, AB VOR "
po.paths=google.maps.geometry.encoding.decodePath("gyigHhihmTkyoEfx~@??icAjKscAcDebAqU{~@if@yy@_v@cs@gdAak@spAua@wzAoWibBqLegBgAgiB`HkhBdSqdBv]a~Ang@}tA`p@miAhw@{{@`}@wl@`aAg\\z|oEm~}@??dgAqJjgApFjeAlYhaAnk@d{@d|@fs@~jAvi@pwAz^jaBbSdhBvFzkB}CflBkPhiBk\\dcBkg@|yAgq@`nAqy@r_Ac`Ajo@udAp]")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=925.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.498337,-112.770553),new google.maps.LatLng(49.700909,-112.242617))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V21 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V21 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Fort McMurray, AB VOR to Fort Smith, NT VOR to Yellowknife, NT VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("ujuxIna~eT}|bDxxe@qubD~x`AucfDfhQwx`Drgk@uvrCx~kCmruAdigBef|A|slAorrCjv}C??ebA~y@}eA|_@qgAxD{fAqT_dAeo@c_AqhAgx@q_Bso@usBqe@gdCeZypCcNyxCoAg|CbIwzClUotCda@yiCvk@wzB~t@}gBr|@_rAv{rCux|C~nuAcoiBht|AakiAfwtCcwlC??rx@cj@f{@sX|xbD}pj@hxbDwtaAdffDkbNf_cD_wd@??vcAaDdcArNz`Avb@v|@|u@|v@tgApo@hwA|f@tdBd]boBtRtvBnGxzBwAv{BaMdyB{WjsBcb@jjBik@l~Aks@|oA_z@f_A}~@tl@gbA|X")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=627.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.581123,-114.580525),new google.maps.LatLng(62.530789,-111.001437))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V23 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V23 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whatcom, WA USA VORTAC to Vancouver, BC VOR to Nanaimo, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("uiiiHnnkkVkfXtzkB{tHnoiC??uLznBoX~iBuc@bbB{m@pwAyv@rjAc~@p{@{cA|j@sgA~XmiAlFeiAmJ_gA}\\wbAsn@u|@c_A_u@wmAwk@izAga@kdB}UskB{I}oBj@cqBl{HsilC??nGmkA~LoiAlyXolnB??z_@alBzk@saBlv@gtAf_AgdAdfAer@~jAo^jmA_JlmA|HbkAp]nfAbq@t_AfcA|v@hsAnl@t`Br`@fkBvSnrBhFbvBkEhvB}RxrB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.873023,-123.982055),new google.maps.LatLng(49.200007,-122.469228))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V37 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V37 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Timmins, ON VOR to Moosonee, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("c~ogHr}fpNqxaDspj@qkgBuvNsmdBuoh@araD{an@??}dA}]o`A}p@cz@kbA{q@wqAch@w~Aa]uhBeQooBsD{rB~EsrBlR}nBh^ygBdi@o}Azr@gpAxz@s`AbaA}n@feA{[jgA{GdgAhJjoaDjxn@tigBxxOfldBlhh@dvaDzdk@??laAlYv}@ri@dx@px@bq@~eAvh@nqAd_@tzAvTlaBvIneBQxfB{JdeByUz`Be`@|yAsi@lpA}q@vdAyx@bw@c~@`h@waAxWqcAzFocAiH")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=825.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.505665,-81.470711),new google.maps.LatLng(51.357989,-80.500725))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V39 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V39 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kisuv, QC Intxn to Baie-Comeau, QC VOR to Wabush, NL VOR to Goose, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("uiugHzu|_Lw|dBzwA??on@yA_n@cJiq`D_vt@khwEq_n@aroE}vfBw``Doc|@??_cAyc@c~@qv@ow@wgAeo@wvAme@ecBoZulB{N{rBs~S{|oGmgg@egjJ\\qhqJ{bH_qsG??pAerBzL}oBvWojB~a@ebBhk@cwAhs@uiA~y@gz@~~@ci@fbA{VtcAaDfcA~L|`Ap_@x|@fq@`w@paAvo@`pAbg@j|Aj]`fBzR`mBvG|pB|aHrurGlma@h|jJ`tDrknJzuRbm`G~fwChny@n~vEbpr@jsoE``dBt__Dtzt@`mcBqiA??jgAzFjeAxYdaAxk@b{@n|@`s@hkApi@xwAt^raB|RjhBnF~kBcDjlBsPhiBo\\bcBsg@zyAkq@zmAuy@l_Ag`Abo@udAh]egAnJ")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=577.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.545545,-68.323806),new google.maps.LatLng(53.386256,-60.183309))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V41 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V41 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Albert, SK VOR to Vokul, SK Intxn to La Ronge, SK VOR"
po.paths=google.maps.geometry.encoding.decodePath("kv}cIpbqdScrpDihzBa}aEnsn@??scAdFkcAwKeaAg_@i}@{q@uw@gcAmp@urA}g@y_Bg^ijBwS}qBsHivBt@owB~KkuB~V_pBfa@mgBrj@e|Avr@gnAny@e~@t~@ml@`bAmYnpeEkkn@??hv@qEhv@bEju@pQls@v]`tsDrj}B??n_Alv@vx@fhAhp@zwAff@vdBb[pnB`O|tBpBzwB_H`wBmTprBa`@vjByj@n_Bct@jqA}{@v`AyaAbn@weAbZogAbE_gA}MidAsb@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=872.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.149862,-105.777627),new google.maps.LatLng(55.224769,-104.907689))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V74 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V74 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Albert, SK VOR to Alses, SK Intxn to La Ronge, SK VOR"
po.paths=google.maps.geometry.encoding.decodePath("o_wcIvnrdSe}cE|vn@??mfAbFafA{LucAqa@okuDq{{B??w_Akx@ay@gkAsp@y{Asf@oiBo[_tBmO}zB{B_~BxGi}BbTuxB|_@ipBrj@sdB`t@uuAz{@gdAxaAsp@teAo[ngAsE~fApNjdAdd@d~qDppzBds`Ey{l@??tcAiEhcArKdaAf^b}@|o@nw@j`Ahp@|nAvg@j{Ab^feBpSjlBnHppBw@pqBaLpoB_WljBga@lbBqj@twAwr@pjAmy@j{@s~@nj@abAlX")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=872.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.14992,-106.022218),new google.maps.LatLng(55.224843,-105.150299))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V112 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V112 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Spokane, WA USA VORTAC to Cranbrook, BC VOR to Dutax to Kneil to Citop, AB Intxn to Calgary, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("synaHfgnmUeurCazmBwap@ar]sfl@{ci@ewqCyksB??sm@{j@oi@{s@sd@_|@c_@ccAggWkrz@??k@sBxcUwaTnhUlzu@jnnCbhqBj~o@ta^jfl@d|h@torCbfnB??vy@|s@`s@naA|j@hmAta@zvAjWb~ApLxbBfAtdBaHzcBcSh`Bu]`zAkg@jqA_p@lfAgw@py@}|@`k@aaAj[gcAzJucA}CebAsT{~@wd@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=844.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.498424,-117.725535),new google.maps.LatLng(49.735028,-115.729414))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V112 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V112 VHF/UHF Airway<br>MEA 13000<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Spokane, WA USA VORTAC to Cranbrook, BC VOR to Dutax to Kneil to Citop, AB Intxn to Calgary, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("{zpnHpn_bU??m@qBopo@_a|Bcll@wxuB|oPco^??|m@~iAre@xtAvon@jo{B??X`Axko@lx{B")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=935.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.621611,-115.837378),new google.maps.LatLng(50.216317,-114.426906))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
a.mea="13000"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V112 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V112 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Spokane, WA USA VORTAC to Cranbrook, BC VOR to Dutax to Kneil to Citop, AB Intxn to Calgary, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("}znqHfokzTissDsyuB??e_Aau@gx@_fAuo@ytAqe@aaBgZgjBeNepBsAurB`IsqBjUcmB~`@eeBtk@ezA|t@mlAn|@g|@hbAij@~eA_WngA_CzfAbO|cAvb@zmwDt`yB??xz@zn@bu@f}@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=930.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.126569,-114.5882),new google.maps.LatLng(51.181765,-113.776078))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V129 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V129 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: International Falls, MN USA VOR to Sioux Narrows, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("ebggHldtyPgzpDxm|B??o_Avc@obA|RwcArAacA{Mq`A{^g|@co@gv@_~@wn@ekA_f@gvAa\\__BmQaeBiFkhBbCwhBhNgfBdY_aBhc@}xAll@onAht@{aAvz@ms@r`qDe}{B??v_Aab@rbAoQvcAk@~bAtNh`Al_@z{@bo@zu@t}@fn@jjAje@`uAn[l}AzPdcBrEffBsCpfB{N|cBuYr~Auc@vvAyl@llAqt@``A}z@zq@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.499201,-94.149054),new google.maps.LatLng(49.543502,-93.305274))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V133 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V133 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Red Lake, ON VOR to International Falls, MN USA VOR to Thunder Bay, ON VOR to Houghton, MI USA VOR"
po.paths=google.maps.geometry.encoding.decodePath("}bwvH~gszP~qcDmzVnpnAkaT~toAkj@xyxC{yS`qNqhgFdhBu{lCrxQ}}iCtjUypuF??hLgyA~TiuAf]ooAvd@}gApk@u~@fq@et@lwrEuuxD??`}@oj@baAyZhcAmJrcAhDbbAxTx~@vd@ry@rs@~r@baAzj@xlAra@hvAhWl}AlL`bBdA|cBcHbcBgSp_Bw]hyAmg@tpA_p@xeAiw@`y@aemEhktDslTdwkFgcC|elCw{Pt|iCwoOr~vF??yKfjB}WheBgc@h}Amm@lrAiv@beAo}@ru@{bAnd@afAfRercDb}UionAzeT{toAl{@spcDvqW??qgA\\qfAeRkcAse@c~@_x@}v@shAan@}vAwc@wbBiXkkBaLwpBOsrBdK_qBjW{kBzb@ocBjm@_xAhv@wiAr}@iy@`cAcg@jfAsS")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=676.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.103742,-93.867692),new google.maps.LatLng(51.137942,-88.387469))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V161 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V161 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Winnipeg, MB VORTAC to International Falls, MN USA VOR"
po.paths=google.maps.geometry.encoding.decodePath("wabpHvyepQhokAo}aF~vl@}l~Czj}@guoC|tpAmhyE??df@mtA~n@oiAlv@o|@j|@ym@r`A{]bcAeMvcA~AlbA`Sj_Anc@nz@~r@~s@baAbl@hmA|b@lwAzXb_B~MfdBxBrfBqFbfBuQzbBi\\x|A{npAp}xEksm@~l|Ckf|@|dqCiikAtpaF??oe@l~Aso@rrAex@hdAa_Axs@adAxa@yfArNqgA}B}eAoVgbAgi@q|@yz@{t@qjAsk@_xA_a@ubBiUkjB_IwnBrAyoBfNkmBhZqgB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=818.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.499219,-97.342625),new google.maps.LatLng(49.994239,-93.305178))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V181 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V181 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Winnipeg, MB VORTAC to Red Lake, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("k|apHhwxpQghmAijbFuoh@i~fB}b]{tpBawhAmwiF??_Y}jB{LopBg@srBjJeqBrVilBfb@cdBvl@wxAxu@wjAf}@kz@vbAgh@ffA{TpgAy@rfAdQpcAvd@l~@`w@hw@vgApn@bvAhd@zaB~phA`iiFh|g@xsgBpp]proBbbmAr}aF??zZn`BdPffB~DfiBkDjiBqOnfBiZz`Bid@rxAgm@zmAau@~`Ag{@jr@{_Adb@wbAfQwcAR{bA_Pe`Aaa@s{@kq@ou@e`Aym@gmA}d@exA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=840.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.86112,-97.342461),new google.maps.LatLng(51.137996,-93.6563))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V298 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V298 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Airie, BC Intxn to Prince George, BC VOR<br>Airway Path: Cranbrook, BC VOR to Lethbridge, AB VOR "
po.paths=google.maps.geometry.encoding.decodePath("gihaItypoVgwxEkfoC??o|@is@qv@wcAco@mrAkf@w~Aq\\mhB{QkoByFcsBrBusBzMaqBvXkkBzb@sbB`l@ewA~s@kiAnz@qy@j_Aah@lbAoUvcAkB`cA|Nt`Ara@doxE|bpC??~_Ajt@jy@dfA~p@vuAdg@xbB`\\vlB`PlsBrCnvB_G`vBmS|qBc_@jjB_j@p_Bms@xqAk{@paAmaAdo@meAn[mgAxFcgAcLsdAs`@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=918.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.713416,-123.306472),new google.maps.LatLng(53.96085,-122.342779))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V300 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V300 VHF/UHF Airway<br>MEA 14000<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cranbrook, BC VOR to Lethbridge, AB VOR <br>Airway Path: Swift Current, SK VOR to Lumsden, SK VORTAC "
po.paths=google.maps.geometry.encoding.decodePath("wpzmHttqcUshGu|}F_`EaanA`iAmpnAysBim~F??vCaiB~NkfBxY{`Bzc@uxA|l@anAvt@gaA`{@ur@v_Aub@rbAwQvcAi@|bAfOh`Af`@z{@hp@vu@b_Adn@blAhe@~vAl[p_BvPleBpEnhBnsB~v}F~vDd{mAm`AnhnA~gGnf}F??aAtnBsMjlBwYzfB_e@d~Aco@prA{w@ndAw~@dt@{cAjb@wfAlOqgA_BafAmUobAch@y|@qy@iu@iiAal@uvAoa@oaB}UiiBqIwmB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=858.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.487789,-116.190787),new google.maps.LatLng(49.700986,-112.565199))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
a.mea="14000"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V300 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V300 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Swift Current, SK VOR to Lumsden, SK VORTAC "
po.paths=google.maps.geometry.encoding.decodePath("oikrHr{lpSugb@ur|FeoBc|Qkq@mpRa__@ew~F??cFaqBnDiqB~PanB~\\kgB~g@q}Avq@{pA~y@uaAn`Amp@zdAu]dgAcJjgAzGfeAn[`aAhn@zz@t_Axr@`oAfi@|{Aj^bfBnRbmBf|^ja~FlnB|zQrq@jnRtdb@n}{F??rHliBu@ljB}KnhB{VxcBea@h|Aoj@frAsr@|eAmy@tw@s~@|g@_bA|VscAlEkcAkJgaA{[g}@ol@uw@a|@mp@wiA}g@suAi^}~AwSweB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=881.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.230565,-107.795122),new google.maps.LatLng(50.733599,-104.784647))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V300 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V300 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Langruth, MB VOR to Winnipeg, MB VORTAC to Sioux Narrows, ON VOR to Thunder Bay, ON VOR to Sault Ste. Marie, MI USA VOR to Wiarton, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("yubsH|ugyQ`y~Aso~Gzz_@kmwFdpDah~@t_Ke`|@rjd@yrwF??bMsfAnmy@{olFpll@{n`F~}dA{bpE~i`Ao`dF??dFiV`whAir|ExptAsujHpovByemGdhpAowpE??~Twp@rv_Bmu`Edfx@uxbC`pfA_{rBbmcBiyxD??lm@mfAdu@uz@j{@gm@~_As^vbAcOvcAEzbAtN``Af^n{@zl@ju@fz@tm@~eAvd@xoAvZlwA`Pt|AzDh_BmDj_BsOx|AmZtwAkd@dpAegcBttxDywx@veaCsveAfgtBud_Blw_EqxoA`toEo|wAbodHgurBborG{mhAlz{Eoa`AlfcFqjn@|l}E}vbA`hrEi`y@h|jFyad@jzuF}tDb_~@myJ~~{@}c`@hwyF??gOb{AyWjvAun_B`t`H??_c@xzAel@fpAat@ncAqz@|t@k_Axd@obAtSwcA~AacAyMs`Ag_@i|@wo@mv@__A{n@mlAef@ywAi\\w`BsQ_gBoFkjB|B{jBbNmhB~X_cB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=201.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.678231,-98.828073),new google.maps.LatLng(50.488941,-81.011531))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V301 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V301 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Terrace, BC NDB to Houston, BC VOR to Prince George, BC VOR to Grande Prairie, AB VOR to Whitecourt, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("w~hkIxd{oWmiNqiyJ??J_`BjFe_Bjt_@atnG|cJ}goCdlYk_iChjd@ag_Ga`uAgg{Ee`j@st}Akk_@y~iBmitA_ymF??oa@exBeUy`CgHoeC~BkfCbPccCv\\a|Bn{jAgnwFj_Ro~iAxlY}ubAb{nAkzoF??ti@qgBfs@czAf{@cjAtaAcx@ffAqd@|hA}OpiA~BdhAzWvdAbl@l_A~~@lx@fpAvo@d_Bze@nkBzZ|tBbOd{B|B|}BkGh}BkShyB__@zqBisnAljoFycRxkiA{cYv~bAg~fA~pjFn|oAhnaFboi@vn~Ahu_@lyhBrjxAnzcF??ld@hpBrXjyB`L|~BBx`CyK~~Biye@d|hGw|JtcnCgoXnfiC{e_@~wjGpdNf~tJ??@x~BgKb}BcW|wBmb@poBul@`dByu@xuAi}@deAgcArr@igAt^iiAzIkiAgIigAe^kcAgr@q}@{dA}u@suA}l@cdBqb@uoBiWgxBkKq}B")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=539.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.822263,-128.708588),new google.maps.LatLng(55.2465,-115.67398))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V302 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V302 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Langruth, MB VOR to Sioux Narrows, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("qscsHtmkyQp~l@a|wFbd^ubyErpu@mulEnet@uypF??x\\}dBzg@m{Arq@_oA|y@g`Aj`Aoo@zdAe]dgAcJjgAjGheApZbaA|l@|z@x}@|r@|lAji@nyAn^ncBvRhjBhF~mBkDdnByPbkBcat@~gpFo_`@rsvEans@hdnEqzl@jhwF??{V`dBea@n|Aoj@lrAur@bfAmy@xw@s~@~g@_bA~VscAjEkcAmJgaA_\\g}@ul@uw@e|@mp@ajA{g@yuAg^g_BwS_fBsH_jBv@akB~KaiB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=801.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.41032,-98.828202),new google.maps.LatLng(50.488853,-93.944225))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V303 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V303 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Albert, SK VOR to La Ronge, SK VOR to Lynn Lake, MB VOR<br>Airway Path: Vancouver, BC VOR to Booth, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("{izcI~prdSgdcDmm_@{wXsv@ohXcsGibcD_fa@??i_AyUm|@gg@ax@uw@gr@ufAgk@}sAwgcBqxfFgnlAo}}C}h|@_stDip}AyxuF??_a@olBsVguBuK{zBk@}|B~Hu{B~S}vBp^{nBfh@{cBtp@_vAxw@weAl}@us@jaAc`@jcAsKrcA`G|aAr[l~@jo@fy@xaAlr@hrAfj@t`Bng}A~luFbbkAz|`Dth}@jeqDhu_Bn`_Fht}Cx}`@twXb|@`hXjvGhbcDvh`@??~eAvWjbA|k@t|@x~@bu@roAzk@`~Aja@piBvU|qBlItvBcA|wBwMnuBwYloBce@~eBeo@nyA{w@bjA{~@px@{cAde@wfArPqgAkB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=719.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.149924,-105.777507),new google.maps.LatLng(56.930416,-100.95351))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V304 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V304 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vancouver, BC VOR to Booth, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("sj|jHz__oV{_vAywvE??m`@{eB}T_mB}H_qBlAarBrMyoBpYqjBrd@ibBvn@kwApw@ajAv~@sz@hdAqi@zgAoWniAqDbiAhLrfA|^fbAtp@`|@|`Adt@poAxj@x{A|xuAdmvE??zb@xiBdVvqBxH`vB}BzvBoP~sBq]rmBsi@|cBot@`wAu}@rgAaeA|u@ejApb@amAbNumAyDwkAsYqgAqm@eaAc`Ayx@wpAqn@y~A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.00512,-123.259293),new google.maps.LatLng(49.594534,-121.933881))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V304 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V304 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Brandon, MB VOR to Delta, MB NDB to Winnipeg, MB VORTAC to Prada, MB Intxn to Sioux Narrows, ON VOR to Red Lake, ON VOR"
po.paths=google.maps.geometry.encoding.decodePath("ku`pHbaeaRcdq@yl_I??}Hy_Be@_aBlFk`B`Ow}Altm@izoE??lVksA`k_Bof{G}lHmxtHykjH_ys@??clAaXehA_m@cbAs`A}y@erA}o@gaBmd@imB{WavBoJe{BfAm|BzN{yB`\\ssBhh@wiBjs@u|Av|@wlAhdAoz@viAif@zlAaQvmAtBvkvHpiw@??`eA~S`bAtd@h}@lt@bw@|bAlo@poArf@hzAv\\vbBdRthBbG~kBfaIjulI??Uh~AeHf}AoPnzAoXzuAuq`Bxx~G{|k@f`hEjbp@`mxH??vKnwB]`yBqM|vByZfqBag@`hBir@t{Ay{@nlAscA|z@giArg@slA|RwmAg@klAoUuhA_j@wbAi}@yz@snA}p@s}Aqe@uiBcYorB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=732.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.353133,-100.057548),new google.maps.LatLng(51.143694,-93.647211))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V306 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V306 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince George, BC VOR to Frend, BC Intxn to Fort St. John, BC VOR to Peace River, AB VOR to Whitecourt, AB VOR to Rocky Mtn. House, AB VOR to Calgary, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("s~|gI~dbkVqhpGnbH??{|@}Ds{@_Ucy@sd@iu@ks@gp@}`Ayu`Ew}wH??{m@{{Asd@whBiZsrBgOgyBuCm|BjqCabiHwUyj`@jfAuc`@j`HylhH??vGenBzPqjBrYodBva@e|Abi@wqAno@oeAxt@sw@xzsCu}~Bn`q@{pq@`_u@{sb@r}tCm{vB??`q@u_@~r@mTfk}Hy}yAdykGqwuG??`|@kq@l`As`@~bA_OvcA`ApbA`Sr_And@xz@zt@lt@vcAtl@zpAnc@r{AnY|cBtNniBnCblB{ExkB_QnhBu[lbBqe@pyAkn@fnA}u@x`AmtmGvzxG??_q@fm@kt@pa@yv@dU{f~Hzx{AcfsC~gvBe`q@ldq@uzt@|mc@o{lCtryBuoGl|yGhTzf`@ydAf``@umCts}GvfxDjakHnfkGolF??jgAxGjeA~\\faAdq@b{@|cAbs@ptApi@pbBx^pmB|RduBpFfyBaDtyBoPfvBo\\joBog@~dBkq@pwAsy@lgAe`A`u@wdAba@cgA`L")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=553.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.048657,-122.615286),new google.maps.LatLng(56.350872,-113.776147))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V309 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V309 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Rupert, BC NDB to Annette Island, AK USA VOR"
po.paths=google.maps.geometry.encoding.decodePath("ki|iIx`s{WaozCvq`F??o{@bkA{aArx@kfAvd@_iAtOoiAwCchAeYqdAym@g_AgaAcx@{rAmo@ebBme@ynBkZkxBqNq~BgBkaC~Go`CbTe|Br_@itBfj@giBrs@k{AlzzCyj`F??|_AgkAtfAuv@hkAo`@lmAiIjmAdLxjAfc@~eAdy@~~@jmAbv@d_Bnk@~mBp_@pyBtRhaCbEbeCqF|dC_Tt`C{`@nxBsl@rlBcw@n}A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=925.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.191072,-131.704446),new google.maps.LatLng(55.132619,-130.300224))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V311 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V311 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ikbun, NL Intxn to Gander, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("wdgiHjmguI}nRgjjH??CqmBpKykBvW{fBfc@w~Arm@usApv@afAx}@ev@dcAyd@lfAeRpgA?lfAdRdcAvd@z}@bv@rv@zeArm@jsAhc@n~AzWpfBtKnkBhmRdqiH??n@|lB_JvkBkVdgB{a@n_Bkl@xtAou@rgA_}@dx@sbA~f@cfApTqgAnAwfAsOucAib@u~@}s@sw@_dA{n@{qAsd@g}AiYweBcMekB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=930.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.733541,-56.16646),new google.maps.LatLng(48.966051,-54.433959))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V313 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V313 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Halifax, NS VOR to Moncton, NB VOR"
po.paths=google.maps.geometry.encoding.decodePath("k`~pGnvmbK_avFbpcF??k{@pn@}_Ap_@wbAvOwcAJ{bA}Nc`A}^q{@}m@ku@w{@wm@}gAyd@_rAyZ}yAaPi_B{DabBnDcbBtOm_BnZczAnd@irAnm@ihAbu@c|@fkvFaccF??j_Aen@fdAu]|fAeLngArCxeAhU~aAhf@b|@dv@lt@fdAbk@hpAl`@zyAvTr`BlHndBeBfeBwN|bBwZp}A}e@juA_p@njAqx@j}@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=898.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.856515,-64.667187),new google.maps.LatLng(46.255436,-63.308241))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V314 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V314 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Olavo, QC Intxn to Quebec, QC VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("egl~GbkawLto`AuthB??lq@ecAlx@cv@z}@sg@paA{WncAsGpcA~FtaAfW`~@~f@tx@nu@tq@rbAli@xmA|_@zvArUp}ApJvaBHbcB_JxaBaUz}Ak_@hwA_i@jnA{k`AnshB??_t@rgAw{@`y@yaAth@seAbWogAvD_gA{KmdA_^u_Ago@_y@__Aqp@{lAqf@ixAk[caBkOyfByBoiBxGyhBfT}dB|_@}}Avj@atA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.638907,-72.2649),new google.maps.LatLng(47.107035,-71.529126))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V315 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V315 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Torbay, NL VOR to Gander, NL VOR to St. Anthony, NL VOR<br>Airway Path: Pesac, QC Intxn to Quebec, QC VORTAC "
po.paths=google.maps.geometry.encoding.decodePath("eoq`H|{`bIc_aCt{vCcaGvfJmcHzfHyx_Cbl{C??qt@fw@sy@zi@_}xCbg{AaevApnaA{u{Ahol@}`xCxabB??o`Aj`@acAtNwcAqAqbAqSm_Aee@wz@uu@gt@wdAkl@{qAgc@w|AcYaeBgNqjBaCcmBjFwlBnQgiBd\\{bB~e@yyAzn@gnAhv@o`Af|@_q@ffxCopaBjdvAahbAn|{Aebk@ldwCesyAnl~BqhyCnaGegJ~cH{eHreaC{vvC??`|@ay@|aAoh@veAuVngAaD~fApLfdAz^n_Adp@vx@|_Afp@xmAff@dyA`[zaB`OrgBpBbjBcHjiBmTleBc`@l~Ayj@ltAet@~gA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=723.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.418808,-56.1903),new google.maps.LatLng(51.4605,-52.753771))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V316 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V316 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Pesac, QC Intxn to Quebec, QC VORTAC "
po.paths=google.maps.geometry.encoding.decodePath("csn{GbeywLgq]orlB??gS{~AgHobBdAicBlLmaBjW{|Ara@uuA|j@elA`s@o`Avy@cs@x~@id@dbAmTrcAaDhcAnJ`aAvZ~|@fj@hw@lx@`p@deAng@|oAv]pxA~n]xklB??pTrcBdHpgBkBfhB}NxeB_[f`Bcf@vwAep@nlAux@~~@m_Alo@gdAn^}fAnLogAyCyeAaV}aAsg@c|@}w@kt@qfA_k@}rAi`@{|A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=964.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.482423,-72.283678),new google.maps.LatLng(46.77182,-71.529177))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V316 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V316 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Shaik, QC Intxn to Modok, QC Intxn to Wabush, NL VOR<br>Airway Path: Annette Island, AK USA VOR to Sandspit, BC VOR to Bella Bella, BC NDB to Port Hardy, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("mesyHddyuKql_A`|LckpEbvm@??ogA|D_gA_NidAqb@q_A_v@yx@{gAip@mwAif@kdBc[enBaOutBoBowBdHsvBnTgrBf`@ejB~j@}~Aht@wpA`|@c`A~aAmm@veAmY|mpE{ul@??@?jm_AorL??ngA}C|fAjNbdAfb@h_A~t@px@`fA|o@~tA|e@jaBvZtjBtNxpBdBjsBmHprByTdnBm`@lfBck@p{Amt@zmAc|@v}@_bAxk@yeAlX")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=906.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.491404,-66.964379),new google.maps.LatLng(53.026663,-66.439787))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V317 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V317 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Annette Island, AK USA VOR to Sandspit, BC VOR to Bella Bella, BC NDB to Port Hardy, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("_|_oItiiaXfz_DniTrxNuH~qNtjCz~uChbRh_~@kodF`c[w||Bpnh@w{qBd`gAqwkF??nd@ubBtm@wwAvu@qjAh|@m{@laAyj@vfdHujpC??`lAqXtmAaC|lApPxiAre@ldApy@||@rkAps@j{Arh@hhBj\\brBhOjxBtA~zB_JxyBiW~tB_d@plBmo@x`Boy@brAwaAz`A}gApm@mi~GhvnCycdAvsbFos[fs{Bmwg@lsrBezaAx`sF??y_@jdBsh@zzAqp@hoAgw@taAw|@tr@u`Ajb@ecAfQ_dATg|_DalRsxN|KgrN_hCu{_DajS??ulAaUiiAil@ucAebA_|@avAkr@igBeg@kuB{Zw_CqMkfC]uhCvK{fCbY{`Cre@_wB~p@kiBvz@qxAvbA_eAvhAio@jlAgXvmAk@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=680.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.612365,-131.927622),new google.maps.LatLng(55.132466,-127.252087))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V317 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V317 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Itmav, BC Intxn to Vancouver, BC VOR<br>Airway Path: Victoria, BC VOR to Williams Lake, BC VOR to Prince George, BC VOR to Fort St. John, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("_mjmHftqtV||lA_ghE??tj@k{A`t@coA~{@u`AdbAkp@rfAy^`iAkLniAlD|gA`WhdA~h@z~@zy@rw@`iAzn@dvAxd@`aBvYdiBzMjnBvArpBqHxoBsTxkBa`@~dBuvlAl|gE??kl@zaB}v@dtAs_A`dAofAvq@ckA|]mmAbIkmA_J_kAy^gfAsr@i_A}dAmv@cuA{k@sbB}_@emB_SktBoE}wBfFywBxS_tBt`@ulB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=941.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.005146,-124.289826),new google.maps.LatLng(49.548124,-123.038803))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V321 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V321 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Victoria, BC VOR to Williams Lake, BC VOR to Prince George, BC VOR to Fort St. John, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("y{nhHjhhqVwa`D_sw@spxDq|j@gqqDeszA_k}Cup}@oj`Ibow@??s}@jBg}@qKm{@k[mjzCkv_Bu}oAevf@{fkAsj}@eoyC_xgB??e`Amx@uy@_lAiq@e}Aog@skBm\\uvBmPc~B{CsaCvFgaCdSw|B~^otBxi@uhBjs@qyAh{@wgAjaAws@neAe^jgAqGdgAbMrdAnc@biyCdphB|woA|ch@vfkAnt|@|jwCju~Avv_I}uu@??tfAu@veAnQvm_Dlc_AhhxDvkn@~qqDlsxAp~_Dlfx@??n`At^d|@rn@bv@d}@tn@`jAxe@ztA~[j}AjQhcBfFnfBcCzfBkNndBcYf_Bgc@nwAkl@dmAgt@|`Auz@tr@m_Adc@obArRwcAnAacAuM")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=527.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.66047,-123.585294),new google.maps.LatLng(56.350868,-120.775621))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V321 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V321 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: High Level, AB VOR to Hay River, NT VOR to Yellowknife, NT VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("}xndJdxljUgi~CcltAik`A_pXon}@idm@kw}Cuf|A??a_@gU{~xCkz{BurDssBsgDamD{ixCezbC??g|@obAiv@mwAyn@ajBaf@uyBc\\}eCoQqnCiFesC`CwsCjNipCdYwhChc@q}Bll@ynBht@_}Avz@shAn_Akr@pbAsZvcAcB~bAhTn`Afl@xaxCz}cClrDfuBhgD|mDpgxCxo|Bha}Cza}Afh`AruYbm}@b{l@|c~C`nuA??n_All@vz@d`Aht@`rAnl@taBjc@tnBhYnxBnNd_CfCfbC_FzaCeQz}By[lvBue@vkBon@b~Aav@zmAa|@p{@m`Ang@_cAhRwcAmAqbAaW")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=742.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.487661,-117.22043),new google.maps.LatLng(62.530862,-114.292842))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V324 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V324 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Houston, BC VOR<br>Airway Path: Williams Lake, BC VOR to Cassl, BC Intxn to Prince George, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("qxo}HrabiVehkB`~kEoidBzwjFkhwBhtsEqfeBhu|E??mm@bvAcu@xgAk{@pw@}_Ate@ybAxRwcAJybAaRc`Aae@q{@_w@ku@ogAum@{uAwd@}aBwZkkB_PwqByD_uBpDauBxO{qBpZokBpd@ebB|neBa||E`nbBc`qFztyB{vmEbpkBwalE??ps@upAn{@o`ApaAin@peAuZjgAgFbgAjLpdAr`@|_Avs@jy@jeA~p@xtA`g@raB~[lkB`P~qBpC`uBcGrtBmSnpBe_@~hBaj@h~A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=780.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.170528,-126.76506),new google.maps.LatLng(54.518964,-122.059862))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V325 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V325 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Cassl, BC Intxn to Prince George, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("{vo}Hp~aiVgtz@lgpB??uo@fnA_w@b`Au|@bp@w`Az^acAtLocA{Co~fG_qw@??ebAqW}~@aj@{y@k{@es@_kAck@qxAya@wcBqWclBsLqqBkAwsB~G{rBbSwnBt]qgBlg@o}A~o@{pAfw@abA`}@kq@`aAi_@fcAmLtcAxDl|_Gllw@hfv@gqgB??hs@gqAf{@aaAhaA_o@leAk[lgA_GbgAtKtdAz_@d`Ads@py@vdAhq@htAng@faBj\\dkBnPxqB~C~tBuFttB_StpBy^jiBui@v~A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=889.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.170519,-122.858096),new google.maps.LatLng(53.960802,-122.059847))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V325 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V325 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Peace River, AB VOR to Fort McMurray, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("mvmvI|njlUshYileHkaf@awbIgeEkekIetMaujH??Hg|BtJmzBtUguBb`@wlBpi@kaBzq@esAxx@wbAb~@op@vaA{\\pcAmHncAdJnaAn^x}@|q@fx@`dAhq@dtAzh@~aBj_@dmB|TfuB|IfzBprMvsiHtqa@btcIzoIn`hIxeYvldH??~D|yBiD~yBoOxvBgZhpBgd@vfBgm@hzA_u@nkAg{@nz@{_Azg@wbAdTwcAX{bAoRe`Akf@s{@cy@qu@kjA{m@qyA}d@efB_[cpBgPyvB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=777.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(56.140315,-117.631209),new google.maps.LatLng(56.714069,-111.001332))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V326 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V326 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whitehorse, YT VOR to Watson Lake, YT VOR to Fort Nelson, BC VOR to Fort St. John, BC VOR to Grande Prairie, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("epkqJtavwXpgUw|lIhpJ}p`Hlvc@avvGrs`@i_eI??|Ls`Bn{w@mluH|{i@irvGvcbAu`aGvxaAoreH??r[sdBvb@q{Afi@upAzn@cdAls@cv@n|uCcc`C`pbBizbBvziB{bbAfauC}_rBvgvEwghJ??nx@slAj_Ayy@bdAke@|fAwOngAjDzeAjZ`bAlo@f|@`cApt@rtAhk@ncBr`@loB|TzwBtHv|B}At}BoN|zBqZjtBwe@fjByo@||AkpwEhnkJ??of@d|@oj@xr@um@rh@wcwClntBesbBj{`B}miBjceA}fqCj_}Byp_Axd|Ggol@xeqGqc_AnxdGglw@d|rH_j`@ffbIipM`g}Gep`@xxwGsdU~qkI??aNloCcZzgCke@h|Bmo@|lBax@dzA__ArdA_dA~l@yfAzSogAyC_fAk]kbAev@s|@emA_u@{aBwk@ssBca@uaCoU}kCcIuqCnAcsC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=382.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.107746,-135.274439),new google.maps.LatLng(60.685399,-118.913185))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V328 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V328 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Thompson, MB VOR to Churchill, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("irzsIj~ttQ_uiCat`Dsl}C{aaDk_lCaptE{zeCmpuD??_v@izA{l@mkBob@eyB{VgcCsJiiC^ckCrLqhCzX}aCdd@gwBnn@{hBhw@iwAj~@acApcAwl@tfAcUngAfAffAlYxbAzp@f}@vfAlqeC~|uDrv{C~niDzamCn_mErliCjaaD??hx@~mAxo@n~Ate@`lBnZhvBlN||BzAx_CuHv~B_UzyBu`@dqBik@beBst@|uAg|@`dAcbAdp@yeAtZogAjD}fAaPedAaf@g_A}z@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=776.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.744471,-97.943599),new google.maps.LatLng(58.808174,-94.007277))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V329 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V329 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Grande Prairie, AB VOR to Peace River, AB VOR to High Level, AB VOR to Fort Simpson, NT VOR<br>Airway Path: Vancouver, BC VOR to Trena, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("al_pInu`vU{weE{pbHgo_D_~Yie`Aww@kf_AozSwe_Dae\\a~gCzqbDcrfDn|yFssvDddoEaegC~qbE??mz@bhAg_Alr@mbAn[ucArCccAkRw`Ayi@m|@e`Aqv@wtAco@}fBkf@mvBo\\obC{QakCwFwoCrBopC|MemCxX_fC|b@c{Bbl@{lB~s@s{ArogC{`bEd`eDu~eGj~xDkuaEv}kCgjfD??zz@gx@|~@ce@faA}PzaApA|mcDtc^be`AjlAbe_AjaT`pcDvt[??n}@jRb{@dc@jw@ds@hr@|aA~mhElrgH??rp@frA`h@j_Bn^ziB~SlqB~H|uBk@dwBsKbuBqV|oBy`@rgBgj@n|Amr@xnAey@|~@o~@hm@}aAlZqcAxFmcAcKiaAs^m}@mq@{w@ubA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=572.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.107807,-121.438975),new google.maps.LatLng(61.840296,-116.96559))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V330 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V330 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vancouver, BC VOR to Trena, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("oojjHvfeoVy`hGpvsE??{aAdk@ueAhXogAtD_gAeMidAs`@q_Aas@yx@{cAip@srAkf@{~Aa[chBaOgnBqB}pBdHepBnT}kBf`@kdB|j@wyAht@ilA`|@s|@nkhGa_sE??t~@qf@bbA_VrcAyDhcAnJdaAn[d}@vk@nw@tz@hp@`hAxg@lsA`^n|ArS~bBpHxfBy@vgB_L|eB_WfaBga@zyAqj@bpAur@`dAoy@dv@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=897.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.010838,-124.340881),new google.maps.LatLng(50.50183,-123.047415))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V330 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V330 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Fort St. John, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("cx{}Hl~hiVkyaDm{m@edkFk~e@shdFi{hB_laDkxu@??wdAub@i`A_x@yy@skAqq@}|Aug@kkBs\\ovBuP_~BeDsaCnFgaC~R{|Bv^wtBri@{hBds@}yAd{@chAhaAet@jeAq^lgAaHbgAtLrhaDnvv@x{jFtnk@hhdFlyeBrvaDhtn@??`eAp]x`A~p@lz@zbAjr@rrAth@z_Bt]djB|QfqBlExtBeEztBsQjqBo]jjBoh@``Bcr@|rAiz@fcAu`Ajq@_eA~]ggAvIigA}H")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=744.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.170508,-122.277341),new google.maps.LatLng(56.350872,-120.775613))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V332 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V332 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Rezin, QC Intxn to Val-dâ€™Or, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("}nobHhc_}M_pvAidoA??ey@a`Ayp@gnAyf@_zAw[acBuO_iBcCykBnGekB|SigBr_@g`Blj@gvAzs@qiAt{@uz@taA{i@teA{WlgAaE`gAzKldAl^v_A~o@flvA`joA??nv@j{@~n@`hAhf@vrAn\\f{AzQbaBvFldBsB|dByMtbBuXt}Ayb@dvA}k@flA}s@d`Akz@lr@i_Adc@kbA~RwcAfBccAsLu`Ac]o|@{l@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=957.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.66065,-78.330552),new google.maps.LatLng(48.241656,-77.720923))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V333 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V333 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Thompson, MB VOR to Lynn Lake, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("gohsIrrmtQehtAt_|FczOvl}@u|Tvgx@_hpA~ldG??og@~lBgq@p~Asy@dmAc`Aly@udA|c@cgAfMmgA}GmeAw^kaAwt@g{@_iAis@c{Awi@kjB}^mvBaSw~BuFecC~CucCnPa`Cn\\mxB`ppAm~dGjwOe{}@dcU}`x@dptA_o|F??zg@qaBjp@etArw@odAf}@}r@daA}_@jcAcLrcA`F`bAbZr~@hm@ly@h_Avr@noApj@n}Afa@|hB~VlqB`L|vBx@byBoH|wBqSpsBa^~kB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=864.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.744503,-101.197152),new google.maps.LatLng(56.930536,-97.706704))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V334 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V334 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Flin Flon, MB NDB to Thompson, MB VOR to Gillam, MB NDB to Churchill, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("obbmIrb|kRi~kAexuF{fj@}_uBmf]enaCcvfAkk_G??qTc}A{{p@}kqGwnEwi[_sBi}\\}nj@gmeGizuC{s`@_`iAm|ColgAgc\\}__Dc{e@??}kAm_@ygAyx@oaAipAcy@keBao@mwBmc@ueCwV}oCkIwuClB{vC~OmsCb]mkCji@c_Cft@}nBn}@i{AzdA_eAbjAml@`mAqRrmAxEf}~Cbbg@l_iAbyDvjgAhh\\|`_Dzwc@??vhA~ZdeAvp@r_A`eAfx@lwAho@jgB`e@htBtY`~Bb|l@pwtGbmEdh[lsBzx\\dmp@|_oGbbfAfi}Ftni@p}uB`w]x}_CpvkArfuF??|^f{B|Q|bClDrfCgGbfCwTtaCoa@dyBgm@`mBqw@n}Ag`AdkA{fAlv@kkA``@omAtHimAaMujAmd@yeAsz@w~@_oAuu@_aBak@apB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=640.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.603025,-101.794213),new google.maps.LatLng(58.813944,-93.996164))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V338 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V338 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Condi, BC Intxn to Vancouver, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("ozpgHlukpV_uaB}zc@??scA{b@o~@qt@ow@sdAun@srAmd@}}AcYofB{L{kBi@{mBhJqlBrV{gBbb@_`Btl@euAxu@ugAd}@ax@vbAuf@ffAaTpgAy@rfAjP|raBpfd@??tcAnb@n~@|s@nw@vcAvn@nqAnd@v|AdYdeB`MljBn@nlBcJdkBkVtfB}a@~~Aml@ltAqu@fgAa}@xw@sbAvf@cfAjTqgAlAufAuO")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.505767,-123.439221),new google.maps.LatLng(49.143777,-123.04763))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V339 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V339 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Fort Nelson, BC VOR to Fort Simpson, NT VOR to Yellowknife, NT VORTAC<br>Airway Path: Nanoo, BC Intxn to Vancouver, BC VOR to Cilli, BC Intxn to Princeton, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("uypfJ`yqnV{`~CyawAs{|B_vr@y_wB_s|Aie}Ci_cB??u_A_v@oz@alAos@a`Bck@kqBoa@k_C{VwiCaeh@ajsI_sm@m||He{QmpkI_n[wb_J??eD{{CnFm{C|RgvCv^mlCri@g~Bds@elBb{@{vAhaAy~@leA}d@jgA{IdgAnOtdAfj@f`AxcAty@b{Alq@toBpg@z`Cp\\`nCrPzvC~i[~r}Ifri@|f_I|rUvpfIzcf@nlcIjdvCrv_Bdr|Bpnv@b`wBfszAl{}CddxA??zbAzp@h}@xfA|u@pzAzl@rkBnb@jyB|VhcCtJhiC[dkCmLvhCqXdbC_d@rwBgn@liBaw@~wAe~@|cAmcArm@sfA|UqgAk@ifAyX")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=658.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.825501,-123.144529),new google.maps.LatLng(62.530872,-114.292594))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V342 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V342 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nanoo, BC Intxn to Vancouver, BC VOR to Cilli, BC Intxn to Princeton, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("ooalHfpduV|ac@urrExpAeqnIwv{@_kbE??}WygBuK{lBCsnBpK}lBvW{gBfc@u_Brm@otApv@ufAx}@yv@dcAce@lfAiRpgA?nfAhRdcAbe@x}@tv@rv@pfArm@ftAhc@j_Bz}|@jifE??xVj|A~L|`BrB`cB}rAlauI??qB~qAsIrpAgmc@bstE??yV|gBkb@|_Byl@buA{u@tgAi}@|w@ybArf@gfA|SqgAt@sfAuPqcAmc@k~@eu@gw@geAmn@gsAed@q~AyXagBqLklB_@inBrJ{lB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=838.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.997303,-124.345963),new google.maps.LatLng(49.447884,-120.271861))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V342 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V342 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whats, BC Intxn to Cranbrook, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("unjpHlpupUrnoAm}iL??rXoaBvb@syA|k@goA|s@wbAlz@it@f_Aqd@lbAsSvcAiBbcAdMt`Ah^l|@nn@pv@j}@bo@rjAjf@vuAr\\p~A~QtdBzFbhBoBthBuMlfBygoAp|hL??uVdcB}`@x{Akj@zqAor@veAiy@rw@o~@|g@}aAbWscAtEkcA}IiaAi[k}@}k@yw@g{@sp@aiAch@wtAm^e~A}S{dB}H}hBn@_jBvKehB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=902.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.487709,-118.375188),new google.maps.LatLng(50.032311,-115.985776))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V343 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V343 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Hay River, NT VOR to Fort Smith, NT VOR"
po.paths=google.maps.geometry.encoding.decodePath("odurJp}naUv~}@aswHpqJ_jdA~|Ooo_AnecAcnnH??hc@}|Bvm@inBrv@g|Az}@ogAfcAmp@nfA_XpgAHlfAlXbcAzp@v}@vgApv@j|Apm@dnBdc@r|BxWdgCpKvmC?|oCqKtmCwWfgCm}bApqmHiuJhycAyuObs_Aaw}@hsvH??o_@zcCgj@jvBus@deBq{@~pAqaAdz@qeAra@mgA~GcgA_PodAki@}_AsaAgy@ywA{p@ikB_g@o{By[}gCwOepCgC}sClGesCzS}mC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=866.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.953733,-115.939904),new google.maps.LatLng(60.902853,-111.83656))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V347 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V347 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Port Hardy, BC VOR to Powol, BC Intxn to Vancouver, BC VOR to Garre, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("i{vtHvyehWdhk@mazFzZmtEro@ekEddn@anwF??`ZugBfe@w~Aho@{rApomEgqcHempC{{vB??q{@a}@ws@mlAij@qyAm_@{cBwSakBiGcoBjCqoBzOwlB|[ofB~f@a}A|p@ypAhy@abA|_Aiq@pdA}^bgAwKlgAzEpeAjYnaAzk@xu`D|sdC??bw@vu@vp@tbA~h@zmAf`@`wApV~}AjLpbBxAndB{FzcBiQt`Bg[~zAqd@~rAyl@vhAymxEf_sHu_m@buqFyZzsEmo@tjEidk@hmyF??gV~dBo`@r}A}i@rsAer@jgAay@by@i~@fi@{aAhXqcApFmcAkImaA_[q}@{k@ax@q{@_q@siAoh@quA{^g_BmTgfBkImjB^skBfK}iB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=777.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.010779,-127.471084),new google.maps.LatLng(50.750974,-122.362455))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V348 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V348 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Thunder Bay, ON VOR to Griby, ON Intxn to Sault Ste. Marie, MI USA VOR"
po.paths=google.maps.geometry.encoding.decodePath("eh|eHhdw`Ppwb@sfqFbeF_ffAzvMuncAtyf@_knF??dPylAzVwhAf]kcA`c@{|@|~sBqykDllKaaTtoMg|PvquBuagD??jt@}}@vz@ip@p_Aka@pbAmQtcAaA`cAhMn`Al]b|@pl@bv@nz@rn@zfAxe@dqA|[jyAjQ~~AbF`bBcCjbBkN``BeYb{Aic@rsAml@xiAekuBdbgDclKh_TonM`~PaiqBlbhDsze@zvhFckFp{eAaoMnncAutb@|spF??eT`gB}_@~_Bsj@~uAat@hiAy{@jz@waAri@ueArWogAxD_gAeLmdAy^u_Amp@}x@q`Aop@wnAqf@mzAk[mcBiOiiBwB_lBzGgkB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=753.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.34546,-89.537361),new google.maps.LatLng(48.320339,-84.218481))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V349 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V349 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whatcom, WA USA VORTAC to Williams Lake, BC VOR to Grande Prairie, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("mrwiHh_xkVaycDkdRqt|C`QcwzCs|e@mwcDegT??_~@iOw{@{^ax@um@wglCcklCgbzCaneCamjCugrDwiiCcd|C??_u@siAgm@exAed@kdBeZwmBmOctBcDgwBdEawBjPusBd[_mB`e@icB~m@_wAru@ehAv{@kw@f`Aae@|bAuQvcAb@tbAzSx_Abg@d{@dy@taiCfp|CdzxCbrkCfekCd}lDbmiC~djC~t`D~rTnt|CvXztzC`}e@~wcDbzR??pfAbQlcAvc@d~@fu@`w@beAdn@xrA|c@~}AnXffBjLnkBXhmByJzkB_W`gBqb@f_B_m@jtA_v@|fAm}@jw@{bA~e@gfApSqgAh@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=594.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.878877,-122.680378),new google.maps.LatLng(55.240879,-118.913383))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V353 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V353 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Langruth, MB VOR to Brandon, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("odlrH`}eyQd~bBfomF??f`@j|AzUncB|J~gBRriBuIhhBuTddBc_@f}Auh@xsAcq@~gAex@fz@s}@zj@oaAhZmcA|HqcAuFyaAcXg~@}h@}x@ox@ar@qfAwi@urAuecBkymF??y`@{cBeUskBwH_pBzA}pBjNmnBpZqhBve@k_Bxo@isAlx@sdAf_A}s@ddAqa@zfAeNngArCzeAhWbbAfj@h|@z{@tt@pkAjk@~xA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=933.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.843466,-100.049083),new google.maps.LatLng(50.488888,-98.61927))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V356 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V356 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Lumsden, SK VORTAC to Prince Albert, SK VOR"
po.paths=google.maps.geometry.encoding.decodePath("wpdtHtmy_SooaDd~n@}etArhd@uwvApwNkhaDtxr@??icApKscAiEcbAeXu~@gj@oy@g{@yr@qjAuj@ywAia@sbB_WwjBaL{oBy@}qBrH{pBtSulBd^meBzg@m{Alp@{nArw@e`Af}@uo@daA{]hkaDu_r@hgtAcmd@jyvAyyMdraDsgn@??hgAmIhgAlHbeAb\\|`A|n@rz@b`Apr@noAzh@h|A~]jfBdRhmBvExpB}D|pBiQrmBg]zfBgh@b}A}q@lpAcz@faAq`A`p@}dAl]")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=835.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.600398,-105.777659),new google.maps.LatLng(53.282911,-104.784642))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V357 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V357 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: La Ronge, SK VOR to Thompson, MB VOR<br>Airway Path: Pesac, QC Intxn to Quebec, QC VORTAC to Gadal, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("qy`pIlrsaSgi_@ix{G_b}@munLe_Noy}L{gQyncH??e@oyBbIgxBfTqsBv^ukBhh@{`Bzp@ksA|w@scAn}@{q@jaA{^lcA_KpcAdG|aAd[j~@jn@by@f`Ahr@hpAbj@d~At`@niBjVzqBnKbwBzeQlobHh}t@fvqLt{U`}wLxe_@p{zG??tG||B_Cp}BoOnzBm[rsBsf@fiBqp@t{A_y@dkAu_Anx@mdA~c@_gAjNogAwEseAu[yaAwp@y{@kdA_t@{uAqj@udBy_@kpBaTwxB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=735.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.09171,-105.383317),new google.maps.LatLng(55.87746,-97.706682))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V360 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V360 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Pesac, QC Intxn to Quebec, QC VORTAC to Gadal, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("csn{GbeywLko\\uwhBimiAcdgB??un@koAod@kzAcYqbB}LugBk@uiBhJmhBpV}cBbb@k|Arl@}qAvu@_eAd}@}u@vbAge@ffAiSngA{@tfAtOrcAta@l~@rr@lw@~aAzjkAv_jB??`g@`_Aj`@tfA~XzlA~n]xklB??pTrcBdHpgBkBfhB}NxeB_[f`Bcf@vwAep@nlAux@~~@m_Alo@gdAn^}fAnLogAyCyeAaV}aAsg@c|@}w@kt@qfA_k@}rAi`@{|A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=933.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.482423,-72.283678),new google.maps.LatLng(47.163113,-70.980736))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V360 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V360 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Elinu, QC Intxn to Wabush, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("}om{Hv`tpKibqEnk}E??k{@pu@}_Ajd@ybAbRwcAHybAmQc`Awc@q{@au@iu@}dAum@{rAwd@q~AwZqgB_PwmByD{pBpD}pBxOymBpZwgBpd@u~Apm@csAfu@eeAhmqEa{|E??n_A}t@hdA{a@|fA{MngArDveA|X|aAll@`|@n~@ht@rnA|j@l|Ah`@hgBpT`oBfHlsBkBftB{NnqB{ZjkBcf@zaBcp@luAsx@jfA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=912.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.816953,-66.964106),new google.maps.LatLng(53.026714,-65.608739))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V365 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V365 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Val-dâ€™Or, QC VOR to Munbi, QC Intxn to Rouyn, QC NDB"
po.paths=google.maps.geometry.encoding.decodePath("}irdHbizyM`rKjc~A??lFbmAf@xmA}CpmAqdK~{yB??}PxqB_^jkBaj@taByt@`uA_~@veAgeAht@kjAfa@cmAbMsmAmEukA{YkgAkm@}`As_Amx@yoAen@q}Aob@ohByUcpBiHktBlCauBpyJcpvBkcK}uzA??gGknBdCynBhOilBb[wfBbf@i~A`p@ksArx@afAt_Ayv@zdAcf@fhAgTpiA}AzhApNbfAp`@naArq@`{@haA|r@doAli@zzAx^`dBfSnjB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=945.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.038279,-79.046942),new google.maps.LatLng(48.24732,-77.712559))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V367 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V367 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: International Falls, MN USA VOR to Sioux Lookout, ON NDB"
po.paths=google.maps.geometry.encoding.decodePath("u|sgHfmtyP_|gCw}`CqcO_wKgmMo{Oy}fC{peC??cz@_fAyq@gtAch@c`Bi]miBuQyoBoEasBzDesB~PapBt\\yiBpg@w`Bjq@_uAty@yfAn`Awv@leAce@phAoRriAIphAxQreAjd@v`A~u@xvfCzzeCrbOxyKrlM|zOhugCrgaC??zz@`bAxr@`pAfi@v{Ar^~dB`SlkB|F|nBiCjoBqOvlBg[dgBef@v~Acp@vsAux@lfAs_Abw@}dAhf@ehAlTsiA|A{hAuNcfA{`@oaAar@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.493555,-93.514702),new google.maps.LatLng(50.190541,-91.785463))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V368 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V368 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sandspit, BC VOR to Kitimat, BC NDB to Houston, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("ysldIflxcXa}`AomvFylPsfu@smJauy@ga}@qb|F??gFu_@k{lAu}iK??oPicC{BmfCzHseCfVq`C~b@swBtn@}jBvx@a{AfaAihArgAks@vkAy\\tmAmE`mAbPdjAdg@~dA||@r}@zpAnt@hbBpi@tpBn]r{BtolAdhhK`w|@`}zF`gPxhu@lpJriy@pv`AxyuF??jYxzB`Lp`CQjbCeMd`CkZdzByf@jpB}q@bcBs{@|rAkcA``AeiAhk@qlAbUwmAUmlAqVyhAul@_cAoaA_{@itAgq@mdB}e@oqB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=792.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.180162,-131.927518),new google.maps.LatLng(54.524573,-126.526661))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V369 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V369 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Princeton, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("cgtmHrqygVlpZ{zeI??dNcfB`Y{`Bbc@{xAhl@onAft@}aArz@qs@n_Auc@nbA{RvcAqA`cAzMn`Az^f|@~n@fv@v}@xn@zjA~e@xuAd\\p~AnQpdBlFxgB}BhhB_nZd_eI??uLrfBqWxaBya@fzAak@dpAcs@~cAyy@xu@y~@ff@ebAnUucAdDicAiK_aAo\\_}@yl@gw@}{@}o@miAkg@{tAs]}}A_SmdB}GchBjA_iB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=925.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.314946,-122.14768),new google.maps.LatLng(49.588889,-120.271648))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V371 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V371 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Tetag, AB Intxn to Whitecourt, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("_{rhIxmtwT_nM`rcI??_I|rBaTpnBq^bgBeh@||Asp@`pAyw@`aAk}@hp@iaA`^kcA`KscAkF_bAoYo~@_l@gy@i}@or@{lAij@izA{`@geBqVmmBqKqrBi@qtBnoMgsdI??rK}xBzWisBjc@ejBtm@w}Atv@knAz}@u|@fcAci@nfAgTpgAFlfAtTbcAni@v}@~|@nv@pnApm@t}Afc@~iBvWbsBnKpxB?nzB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=932.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.00512,-115.910881),new google.maps.LatLng(54.212133,-114.019517))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V372 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V372 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Rouyn, QC NDB to Ovuni, QC Intxn to Val-dâ€™Or, QC VOR to Taget, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("imleHr_baNqaYcooA??}VqyAaNw}A{Da`BjBk`BrKs~A`tXuaiC??xWecB~a@a|Ahk@srA~vmB{bnDfhLmqWn~NivSploBwjiD??zz@{iAxbAoy@vhAig@llA_TvmA]rlA`RdiAle@ncAtw@v{@dhAdr@nvA|f@bbBrZvjBlM`pBV`rB{KlpBeYnkBue@fcB}p@|wAqeoB`jiD_hL|nW{|NpxSuekBdjjDmgVpd|BzuVdehA??bZ`gBhNhlBbBpnBcHzmBgT`jBu_@lcBgj@~yAus@dnAs{@``A}aAhp@mfA`_@_iA`MqiAkC_hAwUqdAog@e_Acx@_x@egAgo@ktAie@c_B")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=836.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.811786,-79.046898),new google.maps.LatLng(48.378528,-75.714654))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V380 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V380 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Mepna, QC Intxn to Avron, QC Intxn to Gaspe, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("}jzjHxl`jKnfXkf^x|d@mpm@??~w@oy@n}@kj@jaAeZlcAgIpcA~E|aA`Wj~@jg@by@rv@hr@hdAbj@dpAt`@xyAjV~`BlKleBb@bgBcI~eBeTbbBu^l{Agh@jrAwp@|fAyzd@vqm@ceXfg^??_{@f}@caAll@keAfZigAdGegAcJ{dAc]i`Aeo@{y@y_Asq@onAwg@wzAw\\edByPqjBgDsmBjFkmBzRuiBr^ybBpi@{xA`s@elA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=964.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.69668,-64.904743),new google.maps.LatLng(49.152874,-64.303639))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V381 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V381 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Deer Lake, NL VOR to St. Anthony, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("wurkHllx|Imb|CminAiwv@ykTi{s@qbb@sr{Cu~rA??kaA_n@i{@y_Ais@qoAyi@_}A__@qgBcS{nBwFwrB|CesBlPapBl\\miBng@s_Bhq@yrAty@mcAd`Acr@vdAc_@dgAeKjgA`GjeA`[`n{CzqsA`uv@h}Tlzs@|}a@d~{Cj{nA??j~@xg@by@fw@fr@`eA`j@~pAr`@tzAjVzaBjKlfBb@bhBeI~fBgT~bBu^h|Aih@`sAyp@pgA{w@`z@m}@|j@kaArZkcAnIscAyE}aAaW")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=853.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.165905,-57.315259),new google.maps.LatLng(51.460507,-55.977025))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V382 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V382 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Deer Lake, NL VOR to Gander, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("oo{kHdbb|Ibi\\aaxFz^c|LblAaoLvi_@_ivF??|SyhBt_@saBnj@owAzs@sjAv{@o{@taAmj@reAeXlgAcE`gAbLldAz^v_Avp@by@baAtp@joAvf@f{Ar[hdBpOfjBbC`mBoGnlBcg_@`uuF__@xzLukAbnLsf\\tlwF??cPxdB{Zd_Byd@xvAum@blAmu@j_Aq{@vp@a`Az`@{bA`PwcAIwbAuP_`Aoa@i{@mq@cu@_`Akm@wlAmd@mwAkZu_BsOieBkDchB~D_hB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=883.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.833122,-57.31495),new google.maps.LatLng(49.298963,-54.433624))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V384 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V384 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Deer Lake, NL VOR to Torbay, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("u_zkHft{{I|kqA_wyE~fhAa{_F|n`Bw~gEbmwAawnE??lk@_tAtt@ggAj|@ix@dbAsg@|eAwUngAeCzfApM`dAv_@f_A~p@jx@t`Avo@jnAve@vyAnZfbBlNvgBzAdjBuHfiBaUdeBu`@~}AagwAlnnEw`jAjz{E}h~A~kkEyeqAblyE??}g@pzAwq@jnA_z@r_Am`A`o@{dA|\\egAzIkgAmGieAqZaaA{l@{z@y}@{r@ylAgi@myAi^kcBoRcjBaFwmBrD}mBbQwjB`]gdB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=786.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.418832,-57.315268),new google.maps.LatLng(49.298961,-52.753808))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V385 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V385 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: High Level, AB VOR to Fort Smith, NT VOR"
po.paths=google.maps.geometry.encoding.decodePath("anvdJhwajUi{sAo_qGodgAenmEwxs@sydFq|kAeqbH??cYo~BiNkeC_CshChFahCpQycCd\\w{B~e@mpBzn@}aBhv@ypAh|@k}@p`Agh@bcAcRtcArBnbAdYl_A~n@pz@ncAdt@dvAfl@lfBbc@xsBxskAhyaHnbeAvcqEbmu@jc`FlrsA|lpG??f_@j{BnSddCbG|hCoCpiC_P|eC}[h~Bag@xrB}p@xcBiy@tqA{_A`}@qdArf@cgAxNkgAkGseAk_@qaAkv@o{@ykAss@y~Aej@}nB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=809.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(58.487668,-117.220649),new google.maps.LatLng(60.086667,-111.836287))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V428 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V428 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Haines, AK USA NDB to Whitehorse, YT VOR<br>Airway Path: Victoria, BC VOR to Nanoo, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("ygmhJxwmzXmyqGczv@??ihAe[_eAms@{_AgjAyx@c_Bkp@gqBkf@i`Cm[{kCuOosCmCcwC|FovC~RyqCr^_iChi@m|Bzr@mlB|z@oyAnaA_dAbfAwl@zhAgTpiAzBnuqGjey@??hlAb\\nhA|u@pbA|mAnz@pcBtp@bvBhe@beCxX~oCpKpvCc@lxCwMvuC}ZpnCgg@|bCkr@jsB}{@f`BscAbjAiiAxq@ulAzWwmA{@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=905.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.14002,-135.571636),new google.maps.LatLng(60.691134,-134.991837))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V440 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V440 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Victoria, BC VOR to Nanoo, BC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("imbhHxxdqVsxgBrksC??my@`fAe`Alv@ieAde@mhA~RsiAd@uhAsPyeA_c@}`Amt@kz@idAar@mrAkh@e~As]kgB_RumByE_qBnDeqBtPenBj\\ehBfg@i_Bbq@ysAf_hBcjsC??l}@wgAxdAev@bjA{b@`mAqNrmAdDzkAzXtgArl@laA`_A`y@poA|n@n}Ajc@vhBvVrpBjIbuBiB`vB}OlsB_]dmBci@tcBat@`wA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=944.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.654864,-124.354616),new google.maps.LatLng(49.336428,-123.375054))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V440 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V440 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Port Hardy, BC VOR to Bella Bella, BC NDB to Sandspit, BC VOR to Biorka Island, AK USA VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("eeftHxm`iWmi~GhvnCycdAvsbFos[fs{Bmwg@lsrBezaAx`sF??sa@biBik@n~A{s@pqAc{@jbA_ikCvaeCugjE`dwFsp~E~hbE}vgCt}yC??{dAbaAejA~i@amAnQsmAoEykAo^ugAkv@iaAwlA}x@u`Bwn@sqBcc@e_CmVuhC_IcnCvBcoCjPwkCl]_dCri@ixBnt@yhBt}@cvAx_hC}myCxuhEavbGt{`F}fuDlmgCcx`Cnc`AinlF`c[w||Bpnh@w{qBd`gAqwkF??nd@ubBtm@wwAvu@qjAh|@m{@laAyj@vfdHujpC??`lAqXtmAaC|lApPxiAre@ldApy@||@rkAps@j{Arh@hhBj\\brBhOjxBtA~zB_JxyBiW~tB_d@plBmo@x`Boy@brAwaAz`A}gApm@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=518.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.612365,-135.68338),new google.maps.LatLng(56.931615,-127.252087))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V487 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V487 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ulbux, QC Intxn to Val-dâ€™Or, QC VOR to Rouyn, QC NDB"
po.paths=google.maps.geometry.encoding.decodePath("wvx`HbasvMyjxB`uuBnMjvmE??aEptBqRdqBo_@jjBmk@h`Bav@hsA__AvcA}eAbr@yjAx^kmAtJomA}GgkAg\\wfAuo@_`AuaAgw@sqA{l@a_Baa@qiBcT{pBuFstBqLusyE??jEmmBfQmjBt\\odBjg@y{Azp@wpAby@kcAhz~B{t{B??ndAuu@|iA{b@|lAcOtmAdC~kAjW|gAvj@vaAx|@ny@~lAjo@xzA|c@zeBhWtmB~IhrBwAjsBiOzpBm\\~jBuh@vaBqs@tuA_}@xfA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=907.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.448808,-79.046992),new google.maps.LatLng(48.247347,-77.074855))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V488 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V488 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oloka, QC Intxn to Baie-Comeau, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("_teiHlkw`Lckx@qsW??k_A{c@qz@qs@at@{aAcl@inA_c@sxAyXo`B}MueBwBahBtFqgBxQgdBl\\a~Aff@iuA`o@gjAnv@a}@j|@gn@t`Ac^bcAeMvcAbBlbAlStix@bzW??zbAdf@f}@lw@|u@~fAzl@jtAjb@b_BzV~fBrJrkB]bmBoLdkBuX|eBad@t}Akn@nrAcw@vdAg~@|t@ocAlc@sfAzPogAi@ifAmS")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=971.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.77394,-68.449631),new google.maps.LatLng(49.200603,-68.120375))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="V495 VHF/UHF Airway<br>Class E<br>2200ft AGL to 18000ft"
mt="V495 VHF/UHF Airway<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Seattle, WA USA VORTAC to Victoria, BC VOR to Whatcom, WA USA VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("m`i`Hbb`jVqb{FjvdF??mz@fm@o~@f^aaAlNyaAW{`A}Og~@u_@}y@un@et@k|@_m@ohAsd@wrAk[yzAsti@}~oD??qQ}iB_EgmBrEemB`RuiB|]acB|h@iyAnr@ylAtz@}}@|`Aem@beAa[jgAaHfgAfI|dAb\\r`Adn@fz@v~@`r@lmAhh@tyAj]dcBn`d@jbyCj}mFarwE??j`Aum@xdAe\\dgAyIjgA|FheAhYdaA~j@~z@f{@~r@tiAni@|uAp^l_BxR`fBjFriBgDxiBuP|fBs\\v`Bug@vwAoq@|kAyy@|}@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=887.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.368782,-123.585199),new google.maps.LatLng(49.011889,-122.211168))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="AWY VHF"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T407 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T407 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Zomta, MB Intxn to Winnipeg, MB VORTAC"
po.paths=google.maps.geometry.encoding.decodePath("{y~iHvnkqQwctDj|T??{jD]mhD{k@iaDuvA{uCe_CefCedDyrBwdEi|A{_FecA{tFeh@acGaLejGlNyiGlj@ebGjeAksFf~A{}EptBgbErgCgaD~vC}{BbbDgsAvhDgh@tftDg`S??zjD~AdhD`m@|`DxvAfuC`~BleCxaDbrBbaEp{Ab{EnbAdoFtg@t|FvKlcGqN~bGmj@t{FceAlmF}}AxxEetBd~DegCl~CsvCfzByaDvrAuhDxh@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.833498,-97.497144),new google.maps.LatLng(50.094226,-96.878731))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T601 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T601 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sasug, NS Intxn to Gander, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("uxnyGvzmnJkwxOwpv`@??axAcpFe{@cdGm\\epGbAysGv`@_oGh_A{aGx{AwlFpuBkpErkCumDl}CseCjjDqyA`rDyj@jtDdCdqD~r@nhDdaBvzCflCfhC~rDrqBhtEr_vOx_t`@??pbBhyExfAxnF|h@`}FtIrcGySjbGur@fyFapAthF{jB|pEqbC|rDgvCloCgeDngBkoDj|@_tDfOisDk\\}lDeiAmaDysB{pC{zC{{Bk}D")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=694.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.986947,-60.296067),new google.maps.LatLng(49.065728,-54.282255))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T602 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T602 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Novar to Itrit to Uksap, AB Intxn to Rovma, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}|enHx|lhVmp`Fgyra@??CUtu}@yfZt`_Fxela@??jk@|}FpOreGuJffGuf@x_GsaAhrFuzAh~EiqBddEydCvdDwtCx`Cq`DdyAahDbo@yjDrC_iD_f@obDupAqwCeyBkhCm~CouBg_Ei_B}zEofAopF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=753.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.35587,-122.301096),new google.maps.LatLng(50.833844,-116.320492))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T602 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T602 Fixed RNAV Route<br>MEA 13400<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Novar to Itrit to Uksap, AB Intxn to Rovma, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("onguHzayeU??CUm}a@yumE??Gu@b~}@axXjua@lilE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=946.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.512778,-116.459989),new google.maps.LatLng(51.012858,-115.269222))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="13400"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T602 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T602 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Novar to Itrit to Uksap, AB Intxn to Rovma, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("imjvHthj_U??Iw@ajQy{qB??AKmyDskd@??{Zu|GvBa`Hhb@qzGv`AklGf}A}uFvvB_xEtlCisDd~CiiC|jDc{AhrDcj@jtD|ExpDzw@|gDzgBzyCrtCfgCx|DjpBf_FbvAzzFhy@|nGbxDpcd@veQfbqB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=950.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.690439,-115.401231),new google.maps.LatLng(51.141137,-114.293862))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T603 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T603 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Gadal, QC Intxn to Keslu, QC Intxn to Baie-Comeau, QC VOR to Tabru, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("smd_Hrm{qLmzlAirqBuo~HyaxL??}z@a}Aw_vEkw{J??chBwfFylA}_Gao@kqG{OkzGzMqzGbm@erG~jAiaGpfBqhFz~BshEhsCqbDfcDswBbnDaiAtsDgXtsDbWhnDvgArcDbvBzsCt`Dr_ClfEx_tEhwyJvz|Hv~wL??jl@z~@lemAhsrB??fnB|~DfwA`wEz}@hiFvb@fuFtFlzFsSzxFio@ppFwiAtaFcbBvlE{wBbrDgjCtrC}xCboBmcDphAkiDz_@yjDyGmgDeq@o_DkyAesCc_CybCkaD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=704.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.930278,-71.322642),new google.maps.LatLng(50.398616,-66.013424))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T604 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T604 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Wabush, NL VOR to Pekro, NL Intxn to Goose, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("o~fcIdygwKmne@olzO??Ck@y__@yqiV??pEu_Hxa@yyGb}@glGvvAgwF|mBm{E`bCqyDrrCsrCb_DugBfgDaz@vjDyJniDtb@vcD`qAlyCb}BzjCveDrxBtiE`cBfhFxjAj`Glp@pqGvTh{Gzw^hycV~de@vivO??`HrjHmUthHgt@x}GmqAjjGelBvnFscC|kEawC|bD{eDxtBuoDbcActDdOasDgc@qlDwvAw`DugC}oCmtDwzBy{EwaBm|FweAguGqg@seH")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=741.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.793719,-67.130156),new google.maps.LatLng(53.486061,-60.01622))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T606 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T606 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Heire, BC Intxn to Elidi, BC Intxn to Keinn, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ayl}HhfcgVzocGlaoDfamDbekB??|DrB`gd@z~U??baD||BppClfDp{BxjE|bB|hFdgAb`Gfi@noGbJtvGmSjuGgr@xkGsoA`zFqjBv`FebCt`E}uCrzCceDzoBgoDpaA_tDfQisDy]cmD{mAcgd@asU_rmDcviB??sIwEuldGuylD??o_DkiCinC_uDyxBc{Eo_BszFgcAkrG}d@waHmEchHfXmeHdw@syGjtAgeG|nBwhFbfCeeE`yCs{CjgDgmBppDw{@htDkHprDdi@jkDf{A")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=817.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.649798,-123.990213),new google.maps.LatLng(52.403393,-121.897108))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T608 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T608 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Hocke, MI USA Intxn to Katno, ON Intxn to Bosep, ON Intxn to Havok, ON Intxn to Derlo, ON Intxn to Bimro, ON Intxn to Uknix, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mv_hG~klwNjyOsjjAj{Lsm|@llM_|dA}aGsmyA??}Ek`Cr@u`CdoFonwC???CdcOyzpG??j\\}fF|w@c}EzqAemEriBqwDj~B}|CroC_~B~|Cq{A~eDwv@jjDiPdjDjTfeDpz@x{C~~A`nCz`Cp|Bb_DngB|xDvoAxmEtu@`}EdZffF_@biFk`OzkoG_hF|rrCtoGn}}A??`Gd}DsI||Dc\\hyDehOd|mA??sGvf@w}L~x|@??Ip@wvO~_jA??mbAteFs~AdrE{wBhxDomCzxCy~CvtBikD|lAorDvb@itDqFspDuq@ogDm{AeyCibCifCgeDeoBecEstAa{Eow@ilFuXivF`EsxFld@ksF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=810.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.779675,-82.938908),new google.maps.LatLng(43.428312,-78.690761))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T609 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T609 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nagli, BC Intxn to Rolbu, BC Intxn to Segex, BC Intxn to Vibga, BC Intxn to Dasmu, BC Intxn to Noxag, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("uyikHf`b_W|u\\kfdBeoDmdz@???EkiA}oXi|Cuav@amOm|cE??kE{eG~T{cGzp@wzFhkAsjFvcB_tEhyBswDpkCevC|yCspB`dDahAviDq]rjDxK~fDrv@r~C|_B`rCpfClaCjiDfmBrgEbvAj`Fr|@~rFla@~~FriOnsbEf{Cjvu@zhAtjXdyE|_hA??tIh~EgIh~E{]|yE_r@bqEyl`@zzpB??cqAvdFwhBdmEs}B~oD}nC`nCm|C`hBseDf_AijDrTgjDwTseDo_Ak|CshBynC{nCi}BgqDkhBynEopAqfFkv@axFyZubGRcfG~[kbGpw@mwF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=882.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.717076,-126.201971),new google.maps.LatLng(49.221263,-123.31809))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T610 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T610 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Boopy, BC Intxn to Gabin, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("onxqHxfkwVbd]e}eU??b_@kuGv}@khGlzAesFhtBqvEpjCksDr|CwjCziD{}AxqDgn@ltDx@lqDrq@`iD|`Bp{CbmChiC~tDzrBfwE~xA`sFh|@lgGz]xsGO|wGo}\\`aaU??gT~gG}o@~~FgjAboFubBtxEgxBl|DsjCzzCeyCduBscDblAmiD~`@wjDgIkgDeu@g_Dy_B}rCygCkbCalDknBukEewAseFs}@kyFib@afGaFukG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=837.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.779361,-124.851263),new google.maps.LatLng(50.265528,-120.706546))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T611 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T611 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Volox, BC Intxn to Sensa, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ylzsH~`a|Ut{{FrotE??~vCzvCpcCx|D`lB`}EhqApvFbt@rhGhUrrGgHjtGmg@vmGmeA`_GgaBnhFgzB~jEmoChgDg`Dj~BglDrqA}rDfb@etDgL}oDm|@ifD{jBkv|FayrE??snCitCa}BywDahBgvEepA{nFav@y`GkZwkG^goGj\\ekG|w@y_G|qAimFtiBitEl~BouDtoCsqC~|C{iB~eDe_AljD{RbjD|WfeD|cAv{C`nB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=884.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.22013,-121.679756),new google.maps.LatLng(50.849514,-120.072495))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T612 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T612 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ikuro, PE Intxn to Umeti, NL Intxn to Gander, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("iknzGtv|`KedzF}xrV??AG}oaGyx{[??go@wzFiSmcGbGaeGjc@k_Gp~@srFbxAg_FboBseE`cCufDjsCccCt_D_|AngDkr@xjDkGjiDra@fcDxkAvxCtsB`jClxCnwB|xDxaBjtEjiA~iFj~_Grfw[jwxFtqoV??vcAfqFre@x~FjFndGaWlbG{u@pxF_sA`gFqmBtnEydCzoD_xCxkCsfDjcBapDxw@gtDnJ{rDga@_lD_nA{_DmxB{nCe_DmyBcaEi`Be}E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=593.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.131311,-63.360464),new google.maps.LatLng(49.066096,-54.281921))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T614 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T614 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vindi, QC Intxn to Derdo, QC Intxn to Daxug, QC Intxn to Mutib, QC Intxn to Pupov, QC Intxn to Savex, ON Intxn to Kanur, ON Intxn to Tukir, ON Intxn to Gotip, ON Intxn to Debum, ON Intxn to Ilusi, ON Intxn to Menti, ON Intxn to Iklen, ON Intxn to Bolmo, ON Intxn to Nuber, ON Intxn to Derlo, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("gtvtGzqnmLut@`cs@byFv~uB|~DbgtAbyE~qzA??vDvwBtrJxsyKrmNxtlBp|`@`gaFnwt@|rfCbv}@|ayC??HXjr_BxpdF??vy@b}Clk@zeDh\\blDhmOnz`C??lJ~pBrN`yEdsSxrs@znnAhjx@??~dCjqB|vBzkC`fB`cDxgkAv`kC??vzAneEpaAjwEtf@hcFvJ`iFsOphFok@raFcfAttEy~AxaE_uBviD}gC~lCcwCjlBebDthA{hD~b@yjDwAehDoh@}`DanAcuCsqBkeC_rCyqBmnDqbgAu~bCwvpAcoy@??aaCmnB}sBygCedBg~CirAgqDmr[kygA??ux@omDsg@qvDyUm|Dm_@ocMwgNilwBi}|Ag_~E_`~@_ryCejw@s~lC??s~@kaEej@mlEwcb@ubiF??Gu@{~NippB??gQcoEuwJ{m}KwuEsfyAc`EewtA{`G}xyB??eByfEbx@_qv@??lUqsFdq@}jFtkAu{E~cBofEpyBykDvkCklCbzCeiBddDacAtiDc[tjDlKzfDts@p~CjzAzqCp~BdaCh_D~lBp{DxuAvrEf|@bdFba@loF~D`tF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=495.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.899899,-81.32262),new google.maps.LatLng(45.846622,-70.281532))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T615 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T615 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Duteg, ON Intxn to Vesru, ON Intxn to Itbin, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("g`chHhbroPgcmEzgwE??qfBfaBg|oFtwlE??udDdtB_oDzdA_tDdSksDc]kmDsnAabDw}BuqCciD}|BkoEgdBgoFmhAwgGmj@gxGcKa`HrR__Hvq@cuGhoAsbGljBihFfbCwfE~uCg_Dh`oFoviEhjlE_ttE??luCm}B`aD_vAfhDgl@zjDgAvhDrg@`bDjqA|vCxxBrgC||CrtBr|Dn~AhwEteA|kF`k@hzFfOvaGaKhbGag@x{F}aAnnF_{AtzEqqBz`EaeCzaD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=812.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.607616,-94.057983),new google.maps.LatLng(51.233555,-91.386811))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T616 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T616 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Pentu, QC Intxn to Aplak, QC Intxn to Urvas, QC Intxn to Catog, QC Intxn to Obtax, QC Intxn to Montreal, QC VOR to Seles, ON Intxn to Letak, ON Intxn to Deski, ON Intxn to Dugbu, ON Intxn to Kenlu, ON Intxn to Tonny, ON Intxn to Agdut, ON Intxn to Revud, ON Intxn to Lepos, ON Intxn to Hocke, MI USA Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{skzG|zysLf}Rzrc@dcjAbxfCnp]`gu@zgj@`}iA??dqAnaDfaAvoD~o@xzDz]nbEbkNrygC??zEzdA`z`@ttuJbgF|b_Al|A`wKfzp@nkgC??~F|Tf`zC|mbL??fz@rvDn{Xf{_B|x`@~o|A??x_@dbB~ac@~jvB??`Hp]~qm@l|~C??@Hts}@xjnE??vv@lkF`X`uFmEfwFwd@~qF{bAleFa_BxqEexB|wDymCjxC__DdtBmkDhlAsrDdb@gtDgGqpDir@igD_|A}xC{bC_fCweDynBqcEgtAk{Ey}}@qfoEeum@_c_Dctb@gytBsda@om}A??aj@khCwyXsp_BksyCq{`Lkdr@}yjC??s~@_xEooCmuR??sd@i{EwvFukcA??uAuXy~`@ycwJi}LewzBuwd@ig`A??kCsFew]umu@snjAk_gCg`S}tc@??k~AqoEmeAscFqj@qqFqNuxF|KayF`h@mrF~bAeeFd|AsqEtrBixD`fCyyCvuCgwBhaDkqAjhDii@zjDc@thD~f@xaD~nApvCttBdgCfwCbtBpuD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=467.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.095764,-82.938941),new google.maps.LatLng(46.728725,-71.480236))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T617 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T617 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kedem, SK Intxn to Dusmo, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("srrpIfrcaS|x{Ay{}T??n{@}gHjxA_qGnrBwqF`iC}jEn{Cc~C~hDmlBlqDow@ltDaAxqDls@ziDfhBv|CryCxjCjfEttB`mF~zAjlGr~@vcHd`@drH|@nwHo\\hsHca{ArpxT??wn@x~GeiAhmGsaBntFkwBbuE{iCvoDsxCreCecDxwAiiDjg@yjDeHqgDsy@y_DqiBosCuvCgcCs_EioBmcFgxA}`Gy~@mwGoc@afHgGwlHdS}jH")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=848.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.512036,-105.558002),new google.maps.LatLng(55.31774,-101.394838))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T618 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T618 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Victoria, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("qtq}Hvp`gVt~kTvncG??lkDhtA`_Df`CxmCdhDfxB~jEb_BpgF~bAd}Fzd@`kGpE|pG{WnnGsv@|cGusAnqFcnBvwEkeCjwDkxCnqC{fD`gBgpDjy@gtD|IyrD_d@qbmTmo|F??_bD_xA{vCwbCmgCajDktBslE_~AqiFaeAe`Gej@uoGaNqwGjL{wGph@kpGncAgaGp|AekFbsBonEjfCglD`vCeeCnaDszAnhDqm@zjDKphDzl@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=759.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.560763,-123.736634),new google.maps.LatLng(52.403616,-121.89759))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T620 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T620 Fixed RNAV Route<br>MEA 14000<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Omsik, BC Intxn to Nugar to Mekpi, AB Intxn to Dumra, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("yluqHx_o~TaoNoneA??k@iEweIcwn@|so@wmkA??nhBn_EbtAtvEp}@rhF~gNpvfAdkNj~dA??li@vaGnM~hGyLdiGuh@~aGocA|sFm|Af_FyrBjdEcfCfdDwuCn_CgaDfwAkhDnl@{jDn@uhDsi@{aDutAqvCo}BcgC{bD_tBycEq}Ai_FsdAwtF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=947.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.926049,-115.435269),new google.maps.LatLng(50.381769,-114.2637))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="14000"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T620 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T620 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Omsik, BC Intxn to Nugar to Mekpi, AB Intxn to Dumra, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_eorHzqxzT_q|@wi^??o}C{gBmpCwoCi_CysDsjB{rEcsAclFcy@{~Fu]sjGiA_oGbYykGxt@iaG~nAsoF`gBkwEd|BeyDzmC{uCt{CqnBdeDedAdjDaXjjDtR`fDz~@~`lAz}f@??xtCx`BhiC|cCjzBvcD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=952.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.132653,-114.655181),new google.maps.LatLng(50.811384,-113.982432))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T622 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T622 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Birko, AB Intxn to Borix, AB Intxn to Ovata, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("cqdzH`ptrTaxpAos~R??Ce@eqg@u_gK??aKewGlOqvGlk@gnGffAm~Fb_BugFhuBojEfhCygDlwCm`ClbDuuA~hDqh@zjDpC~gDnq@t`D~}AxtCxgC~dCzmDnqB`oEzzAvjFxaAz_G|f@dnGrgg@~edKdepAdfzR??|Wn~GoE~`Hyd@xzG}bAblGa_BjuFexB`wEwmCfrD__D~gCmkDpyAqrDdh@itDoHopD}z@kgDukB_yCeyC}eC_bE{nB_eFetA}`Gaw@}tG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=777.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.309543,-113.5306),new google.maps.LatLng(52.266494,-107.729537))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T624 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T624 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vidgo, QC Intxn to Datab, QC Intxn to Obret, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mjbxGzycgMympAibF{{gBeiH??krDif@akDqsAk~Ce~B{lC_eDawB{fEq}AsbFcaAkwFwb@qdGeCwiGlZwfGhy@s{FfvAyhFtpBynEngConDdzC{hCdhDc_B~pDmr@htDiDnzgBdgIvlpA`yF??frDzf@vjD`sA`~Cp|BllCfbDtvB|bEf}Av}E~`AxqFtb@n~FjClcGaZt`Gwx@`vFsuA~cF}oB`kEyfC|kDqyClgCwgD|~AwpDhs@itDbF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=919.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.879822,-74.735825),new google.maps.LatLng(47.166163,-74.164461))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T628 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T628 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Lethbridge, AB VOR to Swift Current, SK VOR"
po.paths=google.maps.geometry.encoding.decodePath("iy|nHng`oTwz`Cwen]??eN}kGjLelGlh@_eGjcAsvFn|AmaF`sB_fEhfCeeD~uCy_ClaD_wAnhDyk@zjDOphDvj@taDvuAjvCh~BzfChcDxsB|cEn}A`_FrdAdtF|i@rbGt~_C~{g]??jYhdGy@ngG_]lcGkx@hxFerApfFwiBlnEk~BvpDsoCbnC}|CpgB}eDd~@kjD~RejD{VieDcbA{{CskBcnCerCo|BwtDkgBmrEkoAgjFgu@s{F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=780.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.46831,-112.924861),new google.maps.LatLng(50.46356,-107.431085))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T629 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T629 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Williams Lake, BC VOR to Cogle, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("uyv}Hnc_gV~ahRbzoA??zqD`m@|iDt{Av|CjgC|jC|nDvtB`qE`{A|lFt~@naGf`@hnG|@~rGo\\joGa{@ncGwwAvoF{qBztEkhCjsD{zCllCshDbaBeqDzr@ktDxBcmhR{~hA??shD_l@yaDcyAovC{cC_gC}jDysBomEk}AgjFkdAu`Goi@}oGiMwwGbMwwGfi@apGddAy`Gd}AmjFrsBumEzfCikDjvCcdCvaDoyArhDkl@zjDZ")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=787.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.910647,-122.818508),new google.maps.LatLng(52.403618,-121.897548))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T634 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T634 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Iklax, ON Intxn to Reedo, ON Intxn to Vibru, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mnbqGpnalM~fq@p|g@vy~@pjF??phDhf@raDvlAfvC|pBvfCbrCtsBboDh}AlgEldAfzEti@bgFvMvmFoL|mFoh@pgFgcA|zEg|AlhEwrBhpD_fClsCsuCprBgaDjnAihD`h@{jDp@_cfAmsF??_vCc_@_qC}}@{hCk{Aavw@mwl@??qlCaiCozBkhDceB}bE}lAexEqr@ogFyVkpFtCsrFz_@gnFj{@ecF~tA}qEllByzDx`Cu~CpqCa~Bj~CczAxfDus@rjDyKviDfZhdDpaAhzC~fB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=933.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.172744,-76.254356),new google.maps.LatLng(45.159581,-75.511321))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T636 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T636 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Dicen, QC Intxn to Mator, QC Intxn to Tamko, QC Intxn to Kanur, ON Intxn to Kemvi, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("g|w{GjcmwL~yuAf|iEz`y@ndmBtewB~_|E??|CzGpz`@zs|@??~aBlvEbfAlkFdh@fyF~Hp_GqTb~Fms@`uFupAndFokB~lEacChoDsvCflCseDzdBooDhz@atD|MesD}\\wlDaiAaaD{rBmpCiyCk{Ba{De}`@}r|@ouwByh|E??KWmdz@m~nB??up@yfB}_wAkflE??wlAq_Fkr@ioFsVmxFzCwzFb`@cvFn{@ujFduAyxErlB{`Ez`CucDvqCabCl~Cy|AxfDcu@tjD}KviDn[fdD`dAdzCvjB|kCjnCzyBdnDndBbiE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=814.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.09119,-75.595998),new google.maps.LatLng(46.966341,-72.045824))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T639 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T639 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Exdee, AB Intxn to Tetag, AB Intxn to Arouk, AB Intxn to Peace River, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("cfweIpfcuT{irA`dxB??CDohg@lxz@urvJ`rwQ??qlCnjE_~Cn{CyjDvgBgrDtp@ktD_F}pDq~@ahDiuBazCuhDigCyvEkpBm~F}uAi~G{x@kuH_Z}bItCmfIfc@}_IraAqoH`~AwuGpwBqsFpvxJg{vQfog@_uz@rwrAo|wB??lsCgoDjcDy`CdnDonAtsD{YtsDlYfnDzmAncDz_CvsCvmDn_ClvEjgBlxFblA~rGpn@beHpOpnH{MvnH_m@|eHsjAbtGafB`zFi~BhxE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=765.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.477161,-117.810526),new google.maps.LatLng(56.373107,-113.23198))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T644 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T644 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Birko, AB Intxn to Ilada, AB Intxn to Shawi, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{fezHxycrTdo_@qjqMfqMijlD??~g@gzG`fAmjGbbBmrF~zB}rEdpCcmDz`D{aCtlD{rAbsDia@btDdOpoD`aAveD|pBzvCd}ChcCrdEzkBbfFbqAn`Gzs@dsG~Tp}GmHh_H{mMfckDwg_@d`nM??g]tmGsx@`bGkrApoF}iBlvEq~BlwDwoCnsCa}ClkB}eDh`AmjDlScjDeXgeDeeAw{CipBanCkxCi|Bi|DegBc{EeoA{sF_u@{eGgYupGbA}sG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=854.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.069261,-113.530991),new google.maps.LatLng(51.641927,-109.734194))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T645 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T645 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nanoo, BC Intxn to Comox, BC TACAN to Campbell River, BC NDB to Kelsy, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("qt~jHnwmvVq~uAnp}Bu}w@l{xA??iFnJokvAnkiC??w`CroDoqC|kCg~CjdBwfDzy@sjDxMyiDy\\kdDshAkzCorBelCiyC_zB_|DqdBkyEilA{pFyq@waGaVmkGjDymGt`@shGb|@c|FvuAwhF`mB}nEvuvAgfiCzmx@_gyA??~Te`@vvvAo~}B??bfCcbDxuCs}BhaDuuAjhDmk@zjDc@thDfi@xaDjsAnvCb{BbgCl_D`tBj_Ex}A`zE`eAxnFfj@`}FlNldG{KvdGyg@~}FsbAjpFu{Ad|EerB`bE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=871.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.097664,-126.327533),new google.maps.LatLng(50.621287,-123.989798))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T646 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T646 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Princeton, BC VOR to Pnask, BC Intxn to Wtman, BC Intxn to Humek, BC Intxn to Endby, BC Intxn to Athur, BC Intxn to Cranbrook, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("{k~lHnp~~UskhAubnA}e`Bi{iB??mAwAovRqdUqf~@ilfA??q`C}mDylBgmE}uA}fFy|@kzF_b@cgGeFqlGvS{jGdo@waGhiAyqFd~_C}lmIz{}@efpG??rgAopFh`BqzEjvBq~DdiCm}C`xC{wB|bDcoAdiDgd@xjDrEvgDbq@b`Dh{AdtCxbC~cCxfDlpBbfEryA~_Fl`AzsFne@`aGnIfgGwPhfGsl@f~Fst~@x~sG??qj@tdDcv@d|CecrBn{hHtbf@fkk@??nAxA|sRhgUvx_B`hjB??`@d@`chApmnA??xiC|qDpsB~sEryAroFb}@~cGt^lpGHttGc^rpGs|@fdGeyA`pFasBptEoiCprDu{CdkCciDl_BoqDtp@ktDj@yqDan@wiDe}Ao|CmiC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=780.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.215629,-120.628676),new google.maps.LatLng(50.844208,-115.526058))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T647 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T647 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Irkes, ON Intxn to Vesru, ON Intxn to Omveg, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{uahHrlkzPkrkFivyB??anCi~AicCo~BouB{{CceBuuDkrAmkEqjv@uacD??edAkeG{e@gtGmFszGfWgxGdv@kmGnsAczFbnBe_FjeCm}DpxC{uC~fDyiBjpDqz@ftDsItrDte@tkDruAj_DzbChnC`lDzxB~oEv_BpmFv`p@n{pC|__FnfuB??p|CvfBboCjlCx}BbnD~hBbkEjqApbFpw@xsF`\\l~F\\bbGiZz~Fwu@vtFwoAxcFqgBzlEq|BdpDanCtnC{{ChiBeeD|`AejDtVmjDgR}eDu|@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=866.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.455405,-93.629214),new google.maps.LatLng(50.280438,-91.646139))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T649 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T649 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Keska, QC Intxn to Bipko, QC Intxn to Boklu, QC Intxn to Kisuk, QC Intxn to Sasid, QC Intxn to Epres, QC Intxn to Junis, QC Intxnto Rezin, QC Intxn to Ebdog, QC Intxn to Rouyn, QC NDB"
po.paths=google.maps.geometry.encoding.decodePath("_xqtGlbldMucTpsh@y~Qzge@}hHtju@yzYb~`D??}k@xnEk`AhcEqsAtsDydBd`Di{^|yj@}`rBvo`DuxuDtxuG}jr@|epA??CD_nb@dyw@??}}BjlDgoCzjCs|CpeBweDj}@ijDjSgjDcUoeDe_Ac|CogBqnCamC}|BwnD}gBskEapA}bF{u@_tFiZg~Fd@qaGn\\w}F~w@yrF`rAiaFtiBqiEjsb@ezw@trr@igpA??FMpzvDefvG??xMkTfxrB}x`D??FIv|W{ca@rxWuctCdzIcg~@??bf@ypDdu@khDlcAi}ChvU{ul@??pC_HdiTa{h@??roB}xDpcCw{CvsCgzB|_DmuAtgDgn@xjD}EfiDr`@`cDbhAlxCrmBpiC~oC`wBnnDdaBdhEthAl|Efn@pjFlRlrF{GtsF{c@hnF}~@lbFgxAlpE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=723.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.448017,-79.188317),new google.maps.LatLng(48.33894,-73.908977))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T650 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T650 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Volox, BC Intxn to Stumm, BC Intxn to Kelowna, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("uj}mHvy`iVmibFkzlI??enBafEoxA}_Fk`A{sFqf@maGwKehGlM}gGhh@y`G~aAwrF|yAm~EpoBedE|k_Ay~}Alix@kdsA??~eCaeDtuC_`ChaDkwAjhDol@zjDm@rhDti@zaDltArvCz|BfgCzaDftBhbE|}An}EdeArrFnj@baGrNthGsKbiGsg@fbGmbAntFo{A~_F_rBleEmcx@`jsA??kD~Foof@bky@jyhE`zgH??|rB~aEp|An|EpcA~pFzh@|~FzL~eGkM~eGii@v~F_dAvpF_}A`|EgsBnaEofCpaDavCb}BmaDjuAohD`k@{jDNqhDcj@uaDqtAivC{|BwfCuaD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=849.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.355854,-122.300805),new google.maps.LatLng(50.850005,-119.157798))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T652 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T652 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Antid, AB Intxn to Sekan, AB Intxn to Amuno, AB Intxn to Advox, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("upmaIhjwvTnrcEnyhBvfG}dH??FGxlTwwV??~|CwnC`jDc`B|qDyn@jtD~AhqDrt@zhDleBd{CdsCzhCf|DhrBt_FjxAd|Ft{@bqGd]x}Ge@xaHq_@b}G}}@zoGozAfzFetBd}EmjChyDyiTb{VyjThaW??{gCvaCqrCt~A{yChy@s}CpRq}CwRyyCsy@kksE{rnB??o}CimBkpCiwCg_Ca}DsjBw}E_sAixFcy@alGq]kxGeA{|GfYqyG|t@mnGboAy{FbgBibFh|BmbE~mCm}Cv{C_tBdeDogAdjDaYjjD~S~eDjbA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=893.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.412031,-115.101735),new google.maps.LatLng(53.049432,-113.979358))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T654 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T654 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Igsub, ON Intxn to Mepka, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("uf|bHr{ggNwbcBoceE??i~AegF_bAu|Fuc@mjGcD_pGpYcmGjx@_bGnuA}nF|oBqtE|fCssDvyCimCxgDsbBxpD}t@jtDyEjrDpg@|jDpuAh~Cz`C|lCdhDdwBljEfrbBjudE??l{AvuEjbAdiFpg@lvFpKx|FwNn|Fqj@fuFieAjgFa~AdsEitBdyDigCdzCuvC|vB}aDhpAuhDng@{jDq@khDsj@eaDosAsuCczB}eCq}CorBo|D")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.528416,-80.095601),new google.maps.LatLng(48.37241,-78.586227))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T656 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T656 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sasob, ON Intxn to Kebma, ON Intxn to Fralk, ON Intxn to Budag, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("i}fmHnmduNbrcDahtE??tkC_uCbzCwoBfdDkgAtf`Ia|}A??rBa@v{y@imO??nsDsYzsDjRznDx_AldDbkB`uCbsCbaCrvDhiBptEdnA|kFvp@h|FvQzdGuKteG{j@p~FuhAtoFidBpyEy|Bz|DqqCjzC{aDbsBgmDhhAwwy@z|OsuwHhf~Awq|CdrlE??uqCrbD_bDfyBimD`lAksDl\\_tDeRaoDebAwdDkpBouCa{CoaCaaEqiBgaFknAmzFyp@_lGsQguGbLavGlk@enGjiAa~F`eBefFr}BcgE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=793.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.459072,-82.725433),new google.maps.LatLng(49.578071,-80.555404))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T660 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T660 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Alido, QC Intxn to Semro, QC Intxn to Nosut, QC Intxn to Dicen, QC Intxn to Udbam, QC Intxn to Quebec, QC VORTAC to Fleur, QC Intxn to Anati, QC Intxn to Modas, QC Intxn to Epmal, QC Intxn to Kisuv, QC Intxn to Bubix, QC Intxn to Tabru, QC Intxn to Wabush, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("giawGrhrmMcihBwp~G??U}@gbOypl@??ci@yfC}auAwpiI??cg@_iEuSioE[mqE|QsoEdoGqh{@??Dc@lbGwcw@i_p@_khEcomCgx`D??qrBszCe{hBiogD??a@u@qmNscX??GKadk@kqgAyrhCo|~C??CEageDekhE{{eO`qpB??qjDbO{iD_^mdDklAozCwxBilCwaDgzBmfEwdBueFolAo~Fcr@mpGgVyzGdDi}Gn`@}wGz{@wjGpuAivF|lB_{EdaCuyD|qCksCr~C{hB|fDw{@~`tOwfmB??jeDkJldDd]d_D~eA|uCzlBvhC|pCfhoDvivEhmjC|bbD??nhAt{AnbAjeBr}l@tzjApjN|aXbufB`wdDbyrCrugD??xpB|rCx`BniDznAl|Db{@jkEvbv@dtaF??~f@hjEbSjpECnrEgSjpE__IxadAorE|wm@dzpAddyHzgNvgj@xvgBll}G??rfAdmFrh@f{FlItaG_Tl`G_s@hwFgpAvfFakBfoEwbChqDkvC`nCkeDjfBkoDp{@atDxNgsDq\\{lD}hAiaDisBwpCazCu{Bc|D{bBoxE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=405.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.57412,-75.917942),new google.maps.LatLng(53.126387,-66.013595))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T662 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T662 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Montreal, QC VOR to Maire, QC Intxn to Okopo, QC Intxn to Ombre, QC Intxn to Silvi, QC Intxn to Vikbu, QC Intxn to Ilero, QC Intxn to Odbos, QC Intxn to Depri, ME USA Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ullvGv{ubM{cQe}dD???IwiBa{^_`Cobf@anFajiA???E_nE{qaAifIaolB??Ci@y{Iou{B??yC}eAqrDwmrB??zBudGjb@s_Gx`AyrFf}Ao~ExvBmcErlCgbDf~Ce|BzjDmrAjrDcf@jtDhExpDnr@|gD~}AzyCpfCdgC~jDjpBdjEbvAhcFfy@juFrZb`GtoDptpBtvIjzyBjdIlzkB??@VxlExeaArlFh|hAf_Cn{e@??@DbiBbu^l`Qt~cD??fLz`GiQh`Ggp@zwFwmA~gF{hBbqEw`CxsDytC~pCgdDxiBwnDh_A{sDvRosDoXumD}dAqbDmoBkrCmvCu}B}xDgeByuEqiAalFsk@a{F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=820.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.449259,-74.208951),new google.maps.LatLng(46.119842,-70.017599))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T663 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T663 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Pembroke, ON NDB to Agnex, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ml|vGn_}tM~rn@wqX??jdDwaAziD{YpjDrLvfDvt@d~Cj{AlqCj_Cr`Cz_DjlB|{D`uA|rEn{@bdFf`@doFbDrsFcVpqFwq@xhFalAzyEedB|dEuyBrjDwkCrkCazCvhBwon@b|X??mmDhfAmsDzY}sDmQ_oDi~@qdDiiBguCcqCeaCqtDiiBkrE_nAyiFmp@czFgQsbGlLicGvk@{{FtiAylFheBkvEx}BmyDlrCyvCrbDsoB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=957.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.393334,-77.45704),new google.maps.LatLng(45.969687,-76.848664))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T664 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T664 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sandspit, BC VOR to Prince Rupert, BC NDB to Itket, BC Intxn to Nuguv, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("m~sdI|gydXk~dEkxlG??o}BkrEyfBgtFamAaoGcq@}aH{xf@ysdJm{t@oe{G??qf@_sH_GgzHtV{wHtu@{kH|rAqvGvmBwxF~dCksEhxCmgDxfDovBfpD_bAftDsKvrDbi@xkDj~Ar_DvpCrnCn~DfyBnfFf`BlgGfdAj`Hfgu@tf}G??~e@jdGlsd@|zrIxc{Dl~`G??`|BncE`gB~bFdoAf|Fbu@rnGtYtyGq@d}Gu\\zxGax@~lG{qAxyFmiBz_Fc~Bv_EmoClzCy|CxpByeD~cAkjDfUejDeXkeD_gAa|C_tBinCy}C")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=784.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.086138,-132.08544),new google.maps.LatLng(54.913796,-126.819587))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T672 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T672 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Halifax, NS VOR to Igtas, NS Intxn to Notop, NS Intxn to Perlu, NL Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_jbrGndrbKuk\\sdvAm`hA}mtD??}}@a|Ds|fJgyvo@??k`@ufGy@gkGx\\sgGn{@{{FjxAkhFnrBwmE`iCylDl{CsfC~hDi|AlqDgo@jtD{@zqDrk@ziDrxAv|CxbCzjC~hDttB~iE~zAzdFp~@vxFr_dJzwko@dfgA|srD??`g@dkBfy\\tpwA??x~@dnFj`@`zF`Al~Fm\\b{F_{@bpFuwAz}EyqB|dEkhC~eDyzC|aCshDxyAeqD~n@ktDrBarD_h@ijDisAi}Cg|BokCiaDmuBoaEu{Ay{E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=560.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.757029,-63.636754),new google.maps.LatLng(47.456148,-53.801477))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T674 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T674 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Boxon, BC Intxn to Whats, BC Intxn to Endby, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ikclHluxmUabdBfdgC??cjAn|AkoAhqA}xiCxuaC??uxCdxBgcDxnAkiDbc@wjDqGqgDct@w_Di_BmsC{gCccC{lDeoB_mEexAqgFu~@y{Fmc@}hGeG}nGfSgmGdo@gdGviA_tFhbBa}E`xB_`EpjCu}CvugCqn~BxgbB_{cC??prCoaDtbDmwBxmDwiApsDyYxsDxTrnDtdAbdDlrBptCn|Cp`CzaEphBfaFnmAxyF|o@xjG|PtsGoLhtGsk@plGmiAt|F{dBdeFk}BtfE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=881.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.280561,-119.201198),new google.maps.LatLng(50.844238,-117.318904))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T675 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T675 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kebmo, ON Intxn to Vesru, ON Intxn to Aglin, ON Intxn to Ruxdu, ON Intxn to Nojje, ON Intxn to Nubam, ON Intxn to Bbigg, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("iw{oHr|__Q{mG_k|H??dGq`Gla@g{Fzz@koFtrAo}EfanHi|yRv}DiiyBlfFkzcCxol@kiyR??ve@wgGxcAsyF|_BycF|xBcgEhnCidDj_Do|BlkD_qAt_yG{~zA??|rDo`@dtDjK~oDxx@jfDndBtwC`mCldCdqDbmB|oEnrAhhFhu@vyFpVpcG}FneGef@p_GgdA|qFi`Bz|EiyBfaEunCp_Du_D`yB{kDznAmobGpxuAyji@bxsQ_eF`_cCwqEjbgC??eTr_Fwi@rxEg~@dmEqqAh}DyelHxhvRjaGzriH??eDdhGk`@hcGq{@hwFcuAvdFklBxkEu`ChmDkqCdjCg~C`cBufDfy@sjDxM{iDe\\kdDmgAmzCypBglC_wCczBeyDsdBgvEklAmmF_r@c~FeVugG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=526.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.341343,-94.620922),new google.maps.LatLng(49.997958,-84.103853))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T676 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T676 Fixed RNAV Route<br>MEA 12800<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Meryt, BC Intxn to Nadpi, BC Intxn to Andie, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mlrpHjdhbVcfzIo~bU???A~js@uf}@tgxIjkaU??pdBxgF`iAn_Gfk@loGdLdwGkQlvGip@jmGwmAb|F{hBdcFy`ClcEytCt}CgdD`sBwnDzdA{sDnTosDuZumD_kAobDeyBkrCucDw}BeiE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=803.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.775177,-121.219544),new google.maps.LatLng(51.848419,-117.181142))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="12800"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T676 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T676 Fixed RNAV Route<br>MEA 14100<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Meryt, BC Intxn to Nadpi, BC Intxn to Andie, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("qsm{HxddlU??AA{fxFir`Q??ksAqxFoy@olG}]{xGsAq}GxXkzGpt@ioGxnAw|FxfBecF~{BmcEvmCk~Cr{C{tBbeDihAbjDyYljDjS`fDzaAd}CnnB~oC~wCz~Bh}DfjBj}E|uvFdy~P")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=844.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.58025,-117.499811),new google.maps.LatLng(53.152792,-114.110649))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="14100"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T677 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T677 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Maire, QC Intxn to Takin, QC Intxn to Ukpam, QC Intxn to Misop, QC Intxn to Igter, QC Intxn to Obtek, QC Intxn to Simto, QC Intxn to Mivax, QC Intxn to Anati, QC Intxn to Baie-Comeau, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("eiyvGdec~L_eXcjt@_gY}cw@ie\\yjs@iqp@yayAy{jAmhaB??u{AwhCgbs@wvwA??o@oAy}iAk|aC??w@aBgzy@gthBmfhGodeG??qeCubDcrBqbEo{A_}EibAmqFig@g_GcK{eGjOkeGjk@s}FdfAynF`_BoyEduBc~DfhCo}CjwCuxBjbDqpA~hDef@xjDbC`hDdn@t`D`xA|tCh_CbqkGrpjG??x_ClqCznBfmDpw|@pinBtpiAtsaCrnq@zhuAxekAbdbB??baA`|Ad{@bdB~br@|e|Az}\\x{t@??nu@~iBj|Ybvx@~`Xlet@??dwAlaFjz@vsFx[v~FuA|aG_a@l}Fi_AdqFw{At}EkuBlcEkkCfcDe}C|}BejDztA_rDbi@ktD_BgqDco@whD{zA}zCwcCqhCwhDyqBqhE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=686.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.542347,-73.361484),new google.maps.LatLng(49.300522,-67.968114))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T678 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T678 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Iluki, SK Intxn to Mutur, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wttsHvot~RwbbDqmnL??uhA_xF_n@chGaR_qGlHgrGrd@}kGx_Ag~FdyAqiFbpBknE|cComD`tC}gCd`Du~AvgD{r@xjDwEdiDpe@zbDtqAdxCn{BfiCzaDpvBvcEv`Bh`FzbaDjwlL??jpAv|F`s@znGdTzxGgIhzGoh@hsGmfA|cGebBtlF_{BhnEapCriDw`Dt_CqlDzqAasDja@ctDgNwoDm_A{eDwnB}vCyzCmcCcbEykBocF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=875.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.265763,-104.927303),new google.maps.LatLng(51.431247,-102.19568))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T679 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T679 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kirod, MB Intxn to Duxip, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("inihItm|uQkrgJ|cE??mjDeU_fDegAa}CiwBwoCedDo~BulEwiBqoF_rAykG}w@u`Hm\\qmH_@crHlZenH`v@{aHfpAqmGbhBwqFb}BioEtnCggDh|CqzBneDujAhjDwXzrgJc^??tsDlYhnDdnApcDn`CxsCznDr_CxwEpgBdzFflAztGvn@hgHvOxpHwM`qHyl@dhHmjAhvG{eBb|Fe~BdzEurCrqDubDrcCymDnqAosDx\\")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=868.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.791773,-98.158669),new google.maps.LatLng(55.970653,-97.561169))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T680 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T680 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Dicen, QC Intxn to Letak, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("khv{GvnqwLdhoGribW??zfApkF|h@ryFxId`GwSz~Fur@~uF}oApeF{jBfnEobCrpDevCpmCgeDdfBioDp{@atDdOgsD}[_mDchAmaDcrB}pCyxC}{BuzDccB}vEewpGileW??i|@gjF{`@{uFuDuzFxUsxFrq@uoF~kAa`FhdBijExyB_oD~kC{nCfzC{jBhdD}cAxiDc[rjDhLvfDhu@l~Cx|ArqCvaC|`C~bDtlBz_EnuAjwE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=788.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.235779,-76.483131),new google.maps.LatLng(46.966383,-72.045814))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T681 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T681 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Bilii, ON Intxn to Ovora, ON Intxn to Nubam, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("igekH~rkyOfku@w|yJ??lk@_yEr_A}lElrAq|DlfzCwdeH??~uBqxDzhCqxCzwCmtBtbDcmAbiDuc@zjDpDzgDvn@h`DlwAjtCv}BjdCp`DvpBz~D`zA`xEz`AhkF|e@dxF~If~FkPn}Fcl@zuFwfAngFm_BzrE}`uCba|Gqls@x`mJ??sr@hgG{oAzuFyjBz|EobCb}DcvCvwCeeDpmBioD~_AatDlPgsDy]amDcmAmaDezB_qCscD_|B}gEecBgfFigAm}Fgi@}lGyI_tGxSurG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=822.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.784188,-88.515527),new google.maps.LatLng(49.187388,-84.574661))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T682 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T682 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whitecourt, AB VOR to Exdee, AB Intxn to Ryley, AB Intxn to Wainn, AB Intxn to Omreg, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_~ljIh_eaUflaBar~L??zi@m_DxzeAixbFzbi@oeeGqzm@{j_C??}nAopGkq@wcHgRanHnKaoHzj@wfHzhAguGrdBi{Ff}BuyE~qCiqDdbDscCpmD_rAlsD{]|sD~TznDdiAndD~zBduC|hDfaCvqEliB`tFx~t@|}rC??llAt|Fjr@hnGzVnxGiCb{Gi_@dvGsqm@nk`H??ud@dcEmr@lzDwmfAp|dF{a`BvdyL??keAviGe~AprFitBxtEkgCdqDuvCthC{aDj|AwhDnm@{jDw@ihDcq@gaDe`BquCslC}eCiuDmrB_yE{{AwvFubAwmGug@e}GoK{dH~NidH~j@w{G")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=760.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.8671,-116.080637),new google.maps.LatLng(54.312165,-109.795511))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T683 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T683 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ovora, ON Intxn to Eptos, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}vbhHjkioOaegEx``C??cbDvrAwhDbh@{jDsAghDmm@_aDaxAiuCi`CoeCaeD_rBgeEi{Ac`FcbAwtFcg@sbG}JkiGpOyhGpk@{`GjfA{qFd_Bc|EjuBm`EhhCk_DnwC_zBtugEgn~B??|bDomAdiDkc@xjDrEvgDjp@b`DtyA`tCn`C~cCvcDhpBnbEpyA|{Eh`AhoFle@f|FjIhbG}PjaGul@lyFigAxjF{_BtuE}uBvzDshCvzCuwCnvB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=906.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.57695,-87.241459),new google.maps.LatLng(49.936215,-86.075496))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T684 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T684 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Lyton, BC Intxn to Vidri, BC Intxn to Durak, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("uvurHtpofV|sCaxbA~zN_csE??hb@kfGr}@qyFdwA{eFhnB}kElbCglDzrC}gCf_D{_BhgDiu@vjDgIniD|`@rcDdlAdyCfuBrjC`{ChxBp|DrbB|xEhjAhoF|o@f_GhTfhGaF`jGowNztqE???H}rCjibA??ma@ptGy_AbgGc|AvqFuuB|tEskCvqDm}CbiCijDb|AarDjl@ktD}BeqDet@qhD}cBwzCspCghC}xDoqBs{EewAswFiz@_lGo[exGdBs{G")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.978609,-122.104861),new google.maps.LatLng(50.415821,-120.157321))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T685 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T685 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Midland, ON DME to Loyed, ON Intxn to Oxasa, ON Intxn to Lunge, ON Intxn to Kebma, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("eyfoGhzlgNuk`BoxQ??gDa@eonFwmp@go}E|v`E??i@d@y}dErisD??exCttB{bDdmAeiDlc@yjDkEygDcp@c`DoyAatCo`C{cCadDcpBacEgyAu|Ey_AipFsd@g}FmHecG~Q_bG|m@uyFrhAkjFfaBwtEdwBcyDxiCoxCjreEygrDjahFu{gE??t}CmkB`hDccAnmD}X`nDzO`oyF|{t@pf`BrpR??pfDnt@`~ClzAdqCv}Bh`Cr}C|kBfyDttAtoE~z@n`Fx_@fkFrCnoFsVjmFgr@tdFmlAzuEsdBdaE_zBdgDalCthCizChfBgdDbaAyiDbZsjDwK")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=722.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.415554,-81.627852),new google.maps.LatLng(48.737109,-79.182972))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T686 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T686 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Olimi, AB Intxn to Vimba, AB Intxn to Amuno, AB Intxn to Advox, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}``aIb~zuTvrpC|`nA??HD|}y@hg^peGuaH??~|CwnC`jDc`B|qDyn@jtD~AhqDrt@zhDleBd{CdsCzhCf|DhrBt_FjxAd|Ft{@bqGd]x}Ge@xaHq_@b}G}}@zoGozAfzFetBd}EmjChyD}iTf{V??{gC|`CqrC|}AyyCtx@m}CbRm}CaSuyCyy@ukiAooe@q}pCyolA??k}CmmBipCiwCa_Ca}DojBs}EyrAcxF{x@ukGk]_xG}@m|GlYayGbu@{mGhoAg{FhgBuaFl|B}aE`nC{|Cz{CosBfeDagAdjDuXjjDhT|eDrbA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=897.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.412031,-114.978082),new google.maps.LatLng(52.980529,-113.833959))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T687 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T687 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Volox, BC Intxn to Kegpi, BC Intxn to Endby, BC Intxn to Chite, BC Intxn to Skookum, BC NDB<br>Airway Path: Nakbu, ON Intxn to Walac, ON Intxn to Wiarton, ON VOR to Walpp, ON Intxn to Kicks, ON Intxn "
po.paths=google.maps.geometry.encoding.decodePath("osjuH~cn}U|Ao|`C???_@r_@wxnC??|Mo{Fhf@ytFxk{Bqz`PhgPimeA??ziAgpFhbBqyEdxB_}DpjCe{CfyCauBrcD}kAniDs`@vjDlIfgDdu@h_Dj_BzrC|fCnbCrjDnnBviEpwAfcFd~@tvF`c@hcG`G|hGgSjgG}n@t~FwcP|`eAi~xBhevOy\\vyeC}An~_C??qLllGoh@jeGicAbwFg|AdbFsrBbgE_fCnfDsuClaCeaDtxAkhDlm@{jDz@uhDyi@}aDmuAuvCy~BggCsdDetBafEw}A}aFydAwwF{i@qfGyMenG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=796.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.788515,-120.597318),new google.maps.LatLng(50.850006,-115.533753))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T688 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T688 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nakbu, ON Intxn to Walac, ON Intxn to Wiarton, ON VOR to Walpp, ON Intxn to Kicks, ON Intxn "
po.paths=google.maps.geometry.encoding.decodePath("k}lzGr|suNhonB{~_Bp~dE}juD`wd@ysy@~zc@wy{@??j`CcqDptCynCbdDchBrnDk~@zsDsRpsDnWvmD|bAtbDflBrrCbrCb~BpsDxeBpoEhjAbeFrl@xsFpMb{F_PzzFao@|rFqlAtcFygBpmEuad@~j|@??aWte@s{g@zw~@??qbBpgCqnBvsBwqhEb`zD??ac@t_@mvnBn_aB??gaDhtB{lDziAgsD`]atDuNmoDa|@meDugBivCcpCubCetD{jByrE{oA{jFkr@y{FiS}dGlJafGxi@e_GxgAkpFrcBezEj|Bk}DhqCuzC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=823.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.178219,-82.802199),new google.maps.LatLng(46.518041,-80.23107))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T688 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T688 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Tovum, AB Intxn to Ebgal, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}vhkHznaqT}`{GnfmB??ohDxk@{jDDqhDok@saDawAevCi`CsfCafDisBegE{|A_cFycAmxF{h@cgGwLmnGvMgnGxi@wfGtdAywFt}AcbF`tBefEfgCydDrvC}~B|aDquA~o{GemjB??lrDwg@htDpFvpDtv@tgD~dBryC`pCxfCxvD|oBzwEruAjrFvx@peG`ZxpGiCzsGub@nnG}`A`aGe}AxkFsvBhoEklCrlD_~CrdCwjDlxA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=885.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.075213,-113.633988),new google.maps.LatLng(50.863507,-112.560141))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T690 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T690 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ebgal, AB Intxn to Vesdo, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_niuHfyerTt}kCecqK??b`Be|EbvBa`E|hCw~C~wCayBxbDapAbiD}d@xjDbExgD~p@f`Dj{AhtCfcCfdClgDrpB`gE|yAbaFt`AduFxe@nbGxIxhGoP|gGgl@~_G{fA~pFcbkC~koK??q{A~bFarB~gEoeCpgDguCrbC{`DzyAehDvn@{jDbB{hDqh@ebDgtAawCu}BwgCucDwtBeeEm~AkaFqeAgwFuj@ifGsNenGzKqnG~g@kgG~bAayF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=883.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.811024,-113.634207),new google.maps.LatLng(50.863502,-111.059042))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T691 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T691 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Brandon, MB VOR to Mutur, SK Intxn to Amagu, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{pznHrz`bRm|fGx}iN??_qAnmCuxzJlfrR??mfC~gEiyCz}CogD`oBspDp|@itDfHorDoj@gkDa~Aw~CynCkmCe{DswB}aFc~AwaGyaAsyGkc@}hH{C_oHzYwkHtx@g_HvuA}iGdpBmlFvm{JydpRncgGojhN??lbCuaEbvC_{CheDuoBjoD}`A`tDkPfsDv^|lDvnAlaDf|B|pC~eD`|BnjElcBzhFvgAf`Gzi@voGvJbwGwR`vGuq@rlG_oA|zFajBxaF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=680.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.743423,-105.950584),new google.maps.LatLng(53.380783,-99.687196))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T692 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T692 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince George, BC VOR to Figgi, BC Intxn to Stahl, BC Intxn to Kiskk, BC Intxn to Rolla, BC Intxn to Peace River, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("ygphIt{xkVoshAogzAgivAuqmB??m@}@}f`Boj~B??sGsJoujBmdtC??slByqDc}A_lEwkA}aFwx@gsFy~uAm`gN??sb@snHgFauHdT_sH`p@khHrjAquGbcBc{FxxBuyEbkCkrDryCefCzcDivAriDed@vjDxL`gDh_A|~C`pBjrCp}C|aCvfExmBjjFxvAtgGj}@x}GrfrAnlsMtpbB|ziChr_Bbs~Bt{uA|_nB??n@z@dihArtzA??~`Ch}DvlBv~EpuA`zF`|@rnG|`@z{GxDhaHmU`_Haq@~tGkkAjcGqcBvjFcyBtkEgkCbgDwyCz}B{cDbqAsiD`b@ujDaLcgD{{@{~CejBirCsuC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=752.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.727967,-122.737999),new google.maps.LatLng(56.373288,-117.212652))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T693 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T693 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Montreal, QC VOR to Sinro, QC Intxn to Lokbu, QC Intxn to Novid, QC Intxn to Berut, QC Intxn to Igsas, QC Intxn to Iptal, QC Intxn to Kisuv, QC Intxn to Wopac, QC Intxn to Ubtev, QC Intxn to Gaspe, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("cocvGzaocMalv@ubpA??{FwJ}u^o`o@uaPynA??ufCa`@mbCuy@}{BkrAgsBqiBupdCgnnCuxrEwmlF??{mBurCu~A}hDomAu{DqsjCmj{K??e|@qhF_c@mtF}H_zFlOgyFrfUubsDwyGa~gD???EaePki}L???GwdBkizB??nHwrG|g@}kGbfA_}F`bBcfF~zBkhEbpCkdDz`Dk{BrlDwnAbsDs_@btDfNroDv}@xeDbkBxvCfuCjcCvzD|kBnzE`qAtsF|s@jeG~TfoG`dBhoyBlaPpkzLbdH`tmD??hApwEmP~uEo`TnwhDnyaCbvaK`llEbtfFb~|BjjgCfiSjcB??ppCrd@jkC|aAjcCz}AtxBxwBrkBjoChvf@zn{@n`v@f|oA??tlBx{DjuAzrEz{@ddFt`@foFnDzsFwUzqFkq@fiFskAhzE}cBneEkyBdkDokCdlC}yCjiB_dDrcAuiDz[ujDsJ_gD}r@u~C{yAcrCi~BkaCm_D")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=540.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.449453,-74.208818),new google.maps.LatLng(48.929544,-64.152192))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T694 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T694 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Igsod, AB Intxn to Obnap, AB Intxn to Vokim, AB Intxn to Tamvu, AB Intxn to Agmak, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ob~_InylbUtkmC_qaDdyo@mfu@fgf@gbj@|dHglX??haBw`FfwBscExiCcaDrxCezBfcD_pAjiDqc@vjDrGpgDtt@v_D``BnsCxhChcCtmDpoBzmErxAjhFl_Ap|Fjd@|iGhH~oG{QvnGum@dfGehAlvFeyKfqb@??avAjlEihBpuDaxBrzCuel@x_q@??EFwro@lnu@axlCxgbD??a{CrvCuhD~gBgqDdv@ktDrB_rDgo@ejDwaBc}CgqCikCk|DauByaFg{Ai`Gu~@_wGc`@_eHo@ajHb]{eHz{@sxGtxAybGxrB_eFhiCg`E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=876.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.050502,-116.401582),new google.maps.LatLng(52.657652,-114.312851))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T695 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T695 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Princeton, BC VOR to Kepna, BC Intxn to Ambro, BC Intxn to IIcola, BC Intxn to Chapt, BC Intxn to Volox, BC Intxn to Floon, BC Intxn to Mibti, BC Intxn to Altag, BC Intxn to Williams Lake, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("yillHlmg_VoeeAso@??G?uso@ua@q`b@eX??iCCez{@yw@er[sU}zt@xg}@??qDlEoktArgbBccuAhcfB??GFepcAn{rA??oxCp|C{fDxnBipDv}@gtDpJwrDag@wkDoyAo_DkiCinC_uDwxBc{Eo_BszFgcAmrG}d@uaHmEchHfXmeHdw@uyGltAeeG|nBwhF`fCeeE|ycA_rrA`puAmxeB??bAmAjutAqyaBxy}@c~fA??rnCugCpzCkaBrbDox@hfDgNbof@jl@??`BBhy{@bmAh~a@fd@jso@jr@~deAdgA??~iDfZtdD~dA|zCxmB~lCpsCb{BduDzeBzqE|mAzhFxs@lyFfXfcG_B`fGc^xaGmy@nvFcsAndFsjBhlEe_CnnDgpC|kCk}CleBefDb|@mjDbQ")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=789.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.215374,-122.440163),new google.maps.LatLng(52.403393,-120.072553))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T696 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T696 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Ameki, AB Intxn to Tagot, SK Intxn to Kenru, MB Intxn to Kirod, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}wtvHtne_Tw{tFiz~R??oA_Fey}Ikama@??_v@clFma@cwFeLa}FppAmu{R??jRmbHhn@{xG|hAugGpaBaoFlwB_pE`jCckDxxCsaChcDutAliDke@vjDzHngDtx@p_DzfBjsCdrCbcClyDfoBn{EjxAtwFb_A`mG`d@b{G`HpaHosAlqjRdixIht|`@tisF~g|R??xsAr|Fvv@|oG~W~zGmEr}Gud@nwGybA~hG}~AprFexBrtEumCfpD}~CnfCkkDpxAqrDzg@itDeHqpDcz@kgDgjBayCewCafCs_E{nBcbF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=494.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.759853,-110.253315),new google.maps.LatLng(54.137764,-97.56151))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T697 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T697 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Wabush, NL VORto Denso, NL Intxnto Goose, NL VOR<br>Airway Path: Derdo, QC Intxn to Ebgix, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("mudcIrpuwKqqzBg}_O??yk@s|FuTeeGz@wgGhbt@etcW??ne@oxGt`A{iG~yA{sFxpBgwEndCstDptCcmCl`DwaB~gDys@xjDmD`iD|h@pbD`wAvwCxbCthCxjD|uBbnE|_BxkFjgA`cGxl@hsG`Q~{GgIb}Gi`s@fgqVb`wB~bqN??pt@bmGbY~wGcAd{Gg]xvGqx@zjGkrAtwF}iBv}Eq~Bv}DwoCpxC_}CdoB}eDpbAmjDbTcjD}XgeDogAy{CctB_nCq}Ck|BwbEegBsbFeoAe|F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=738.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.794014,-67.1303),new google.maps.LatLng(53.756728,-60.016543))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T698 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T698 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Derdo, QC Intxn to Ebgix, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("w_yvGdhkoLa|G}nnA??wKguFvN{tFxj@ymFreAa`Fn~AelEvtBwrDxgCitCbwCyqBdbDilAxhDud@zjDzAdhDjj@|`DpqAduClvBleCbxC`rBnuDn{A~mEnbAx`Fpg@pmFjzGj`nA??nLpsFwMjsFui@plFmdAl_Fi}AdlEssBhsDyfCpuCgvCtsBsaDpnAqhDfg@{jDEohDug@oaDeoAavCotBofCsvCesButDu|AwmEscAcaFuh@knF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=957.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.513772,-71.040858),new google.maps.LatLng(45.892251,-70.159554))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T698 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T698 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Acton, ME USA Intxn to Bemek, NB Intxn to Itpax, NB Intxn to Ebdad, NB Intxn to Ikuro, PE Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ge`yG`}w|Km}Fi{bGw~Dee|F??I}WaLqhyAgab@}ilH??yKywFtNowFvj@ipFpeAmbFn~AknEttButDxgC}uC`wCasBdbDemAxhDee@zjDzAdhDvj@|`DhrAfuCtwBneCpyC`rBjwDp{AbpEnbAbcFtg@~oFhjb@~qnH??bOx`GfLtl|An}D|lzF??FvH`|FjnaG??eDvuFi`@fqFq{@`fFauAvtEklBp}Du`CfaDmqCl`Cg~C`|AufDdu@sjDtLyiDeZmdDkbAmzCyhBelCklCczBclDudBcgEklAu|E_r@elFgVauF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=783.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.876444,-68.020807),new google.maps.LatLng(46.46414,-62.879308))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T699 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T699 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Embes, QC Intxn to Igsas, QC Intxn to Karot, QC Intxn to Otput, QC Intxn<br>Airway Path: Govad, BC Intxn to Sigta, BC Intxn to Foche, BC Intxn to Anvap, BC Intxn to Arrue, BC Intxn to Casdy, BC Intxn to Faxto, BC Intxn to Vancouver, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("yfbhHdciwLlifBulgE??`jBqmDnzBcsCbhCeuBnrCutAlyCer@z|CoNn{oD|uAl|m@bU??psDvXvmDbfArbDjqBrrC|xC`~Bz{DveBbyEhjAvoFrl@`_GnMtfG_PjfG_o@`~FslAdnFygB`wE{_ChyD_tC~uCwcD~mBknDrbAysD`Uq|m@kG??E?w|_Dq]a~{AfftD??{xBliEinCrfDm_Dv~BukDzrAurDjd@itDiIipDux@_gDofBoxCeqCmeCmwDcnBcxEmsAgrFev@ydGiWmoGlFsqGze@okGddAc}Ff`B{fF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=865.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.704663,-72.545615),new google.maps.LatLng(48.711132,-71.020367))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T701 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T701 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Govad, BC Intxn to Sigta, BC Intxn to Foche, BC Intxn to Anvap, BC Intxn to Arrue, BC Intxn to Casdy, BC Intxn to Faxto, BC Intxn to Vancouver, BC VOR "
po.paths=google.maps.geometry.encoding.decodePath("q}jkH~nh~VqlAgziB??E_Lm]}{eAeh@}~aBaNad^??EcVeCeu]kQor|A??As@eCuobA??bMkeGfi@e~FbdA_pFd}Ac{ErsBe`ExfCc`DjvCq{BtaDusArhDoi@zjDTlhDzj@laDttA|uCd|BlfCf`DdsBz_Ez|AdzE|cArnFdi@p|FfMrcGbCn`bAjQhc|A??@hJ`Cvh]zM~w]??D`K~g@xsaB??B`Gd]njeAzkA~|hB??sF`dGub@t~Fy}@jrFewAl_FenBjfEgbC~gDurC|dCc_Dd~AegDxt@wjDzIqiDk_@ucD{iAmyCkrByjCywCmxB_yDubBeuEgjAokFuo@i{FwScdG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.880447,-125.958018),new google.maps.LatLng(49.243842,-122.895674))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T701 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T701 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Princeton, BC VOR to Amedi, BC Intxn to Tenya, BC Intxn to Whats, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_simHrpi~Ui`h@srqC{neAe|cD??ygAwjEgt@ayEq_@wbFgJugF?wtzA??vMcjGzi@sbGvdA_tFt}Aq~EbtBccEfgCebDtvC}|BzaDgtAvhDii@zjDx@hhDrl@daDhwAtuCj_C~eC~cDvrB`dEf|Av~EhcAlsFph@laGrLlhGYhckAnpaAhyzC??pq@l`Cli@bgCp~h@jfuC??jv@dxFzZrbGIbfGo[nbG{v@xwFypAnfFqhBznEk}BnqDwnCjoCi|CfiBqeDb`AgjDfUijDkTueDo_Ao|C{hB_oCmoCo}BarDshB{oEypA{gF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=884.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.215563,-120.629542),new google.maps.LatLng(50.132339,-118.01356))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T702 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T702 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Otlur, MB Intxn to Kebmo, ON Intxn to Duteg, ON Intxn to Aglin, ON Intxn to Ovora, ON Intxn to Imixa, ON Intxn to Rabav, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("iospHhylpQhyVsxrP??dUi|Eth@muEl{@ijEx|cEuuoOhg`BqwzKymzAq|cQgmcEyihI??meBwpE_ngHwrjW??wfAsyF}k@eiG}OoqGpJgrGvf@ikGvaAa}F`{A{gFtqBelEheC}jDbuCaeCz`Do{AdhDqo@zjDiBxhD|h@fbD~tAdwCp~B|gCtdD`uBffE|~AhbFhgdHrbdW|xfEd}nI??fwAjcDzgAtsDfw@x`Ere@ljEri~Arp|Q??|Z|hFzBnlFeStjF{j@lcFeidBvxkL??cg@dwCgq@`pCgfaEvvhOuaVvkdP??aUxfGup@r}F_kAtmFgcBbwE{xBxzDakChyCqyCrsBycDtjAqiDp_@wjDkJcgDgv@__Dq`BorCihC{aCilDwmBukEovAkeF}|@wxFqa@keGgEsjG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=307.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.087465,-97.498239),new google.maps.LatLng(51.457876,-80.341628))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T703 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T703 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cilli, BC Intxn to Membo to Noret to AMITO to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("uskkH~updVwybGsed_@??Ii@|k|@qs`@ndaGfr~^??pu@|vFbZdaGc@ldGg\\t`Guw@zuFoqAjdFeiBvlE}}BnoDeoClmCs|ClgBweDn~@kjDzSgjDoUmeDg`Ae|CkiBqnCooC_}B{qD}gBgoEapA_gF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=761.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.897864,-121.649402),new google.maps.LatLng(50.547161,-116.054164))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T703 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T703 Fixed RNAV Route<br>MEA 13400<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cilli, BC Intxn to Membo to Noret to AMITO to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wnosH`nkdU??Gk@ik\\smeC`r|@a{_@??Ht@be\\xtdC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=957.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.232775,-116.226411),new google.maps.LatLng(50.697653,-115.369447))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="13400"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T703 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T703 Fixed RNAV Route<br>MEA 13500<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cilli, BC Intxn to Membo to Noret to AMITO to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("i{ltH`~d`UssOyslA??QqA|u|@sj_@|oOfdlA??Jt@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=968.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.382289,-115.537772),new google.maps.LatLng(50.782967,-114.974097))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="13500"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T703 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T703 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Cilli, BC Intxn to Membo to Noret to AMITO to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("op}tHtfw}T??QsAmfOebmA??qf@ahGkJwnG`P_nGbl@yeGzfAivFt_Ba`FxuBucErhCyaDvwCs{BrbDarA`iDif@zjDlD|gD~p@l`Db|AntCrdCpdCliD~pBriEhzAddFdaAtxFlbOpplA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.466975,-115.139792),new google.maps.LatLng(50.874318,-114.395583))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T705 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T705 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Mutna, QC Intxn to Ebdot, QC Intxn to Dunup, QC Intxn to Tamko, QC Intxn to Livba, QC Intxn to Nosut, QC Intxn to Iknar, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wrrqGtqkaMioOl{@??K@sdc@rcC}boC~||@??}pCln@k`d@bbG??{BZuzVtbD}naDvcc@??mjDrPcjDcWaeDi`Am{CygBsmCklC{{BgmDsfBgiEsnAy_Fit@epFuX{yFvAu|Fb^oxFpy@omFlsA}{E~jBgdEp_CegDrpCseCt}Ci`BjfDmx@buaDsva@??zAQxzVc|Chua@ehFvkpCog|@??|hBqb@zjBuR~qf@ueCjoOcw@??jtDdBfqDrn@thDpyA~zCvaCrhC|eD~qB|dE~wA~}Ef{@jpFt\\j{Fu@x~Fc`@nzFo~@tnF}zAr{EstBzaEyjCbbDw|Cp}B{iD`uA{qDzi@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=842.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.839772,-74.403736),new google.maps.LatLng(47.359303,-73.322853))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T706 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T706 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Iluki, SK Intxn to Emlik, SK Intxn to Brandon, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("apysHdqw}RnsMyzgL??vIkrCfRepC|uvA{bsN??z|@yxFlvAmeFtmBukEzaCmlDlrCkhC~~Cu`BbgDiv@vjDoJpiDn_@xcDpjAryCnsBbkCfyCzxBvzDhcBbwE`kApmFvp@r}F`UxfGcEvhGia@tcG{kuAppkNwiMph`L??{UpxGst@bnGyqAp{FolBlaF}cCh`EgwClyCafDxmByoDt~@etDrM_sD_b@mlDurAo`Dy`CuoCekDmzBepEkaB}nFkeAkfGcg@suGwGo|G")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=792.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.743562,-104.927284),new google.maps.LatLng(50.598572,-99.687313))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T707 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T707 Fixed RNAV Route<br>MEA 14000<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Antak, BC Intxn to Sigpa, BC Intxn to Tulob, AB Intxn to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("moulHzcocUa{tCwz`C}c|AudrAln_@mwwA??@@ty{AxwrA|jtC~xaC??lmCjrCv{BbtDrfB|pEtnA`hFrt@zxF`Y|bGaA|eGi]zaGsx@vvFmrA~dF}iB~lEq~BjoDyoC~lC_}CpfB_fDl}@kjDjRejDcWgeDcbAw{CkkB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=892.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.184181,-116.11337),new google.maps.LatLng(50.675431,-114.536164))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="14000"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T707 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T707 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Antak, BC Intxn to Sigpa, BC Intxn to Tulob, AB Intxn to Igvep, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mphtHlbz|T_qUylS??olCmyCkzBk|D_eBazEwlAyqFkr@{bGsVylGzCgoGd`@ejGp{@{}FhuAmjFrlBqpE~`C_qDvqCqlCn~CgdBzfDiy@rjDyLviD|]ddDxiAdzCrsBpnUpqS??@@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=968.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.509125,-114.990639),new google.maps.LatLng(50.874093,-114.395201))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T709 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T709 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Pigna, QC Intxn to Satot, QC Intxn to Empek, QC Intxn to Vidgo, QC Intxn to Olasi, QC Intxn to Ikmol, QC Intxn to Taget, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}truG`rvdMsiPxcSgoMd}O??EDwpV`sZ_xt@|urA}veA~hoBgfd@fa{@??qcCxsD_wCnoC{eD|fBuoD~z@etDhMasD}^qlDilAu`DkwB_pCy~CyzBmaEyaBc~EyeAatFug@mbGeH{hGlUegGlt@k}FxqAwkFtlB}rEtkd@}b{@jafA{koB??JSdpv@cbuA??bfBmiCjjXiq\\`qMg|O??FGxkPsbS??vuCwoC`eD{gBdoDy|@~sD}OhsDh[dmDtgAtaDxqBhqCjxCp|BfzD|cBnvEjhAblFlj@tzFjKraGeRv`Gcq@bxFqnA~gFsiBzpEkaChsD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=875.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.586578,-76.063538),new google.maps.LatLng(47.05023,-73.916424))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T713 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T713 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Booth, BC Intxn to Spuzz, BC Intxn to Meryt, BC Intxn to IIcola, BC Intxn to Bulie, BC Intxn to Stumm, BC Intxn to Suvak, BC Intxn to Endby, BC Intxn to Ragut, BC Intxn to Wellf, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("obcnHd`vhVqnp@my}Bqs_@qitA??GQ{rk@ibvB??CKuxRwxt@sjOkyk@??ACamk@iyzB??g@qBm~Q_du@??qeAmxFkj@ogGyf\\ig|Gu{N{wkD??kHi_HhUo}Gjt@{rGvqAy_GplB{dFbdC_cEnwCa{CffDmnB|oDq~@dtDyL|rDhc@flDdtAh`DjbCnoCrlDfzBnqEjaB|oFneAdgGpg@lvGbxNtqjDxb[vzqGffOdjm@vck@|fzBrgOzsk@??H^~tRbrt@bjk@vruBnm_@f_tA??FRjep@rj}B??rkAhkFhq@h{FtUrdGqDtfGu`@xaG{{@xuFmuAdcFslBjjE{`C~kDsqC|hCk~C`bBwfDlx@sjDdMyiDq\\idDqgAizCspB_lCuvC{yBoxDkdBmuE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=749.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.356062,-122.30153),new google.maps.LatLng(51.07454,-116.337838))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T715 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T715 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vetbi, AB Intxn to Sesda, AB Intxn to Rabox, AB Intxn to Gudog, AB Intxn to Imota, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ewoxHbibsTlyAifg@``QcgoFeuoAoslJ??CQqmmAizfK??}c@cpGwGivGtR{tGtn@ukGhiAc{FxaBscFvwB{eEfjCwbD|xCa{BlcDepAliDac@vjD|HlgDpv@l_DrbBdsC|kC|bCfqD|nBxqEbxAplFv~@z`G|{lAnkdKh{qArivJ??tk@x}FrQveG_GbgGm|QrdzF??IzB}xAd_g@??y_@fkGa{@d_GutA`lF_lBprEi`CfsDcqC`oC_~C|fBsfDz{@qjD`O{iDe\\qdDyhAuzCmsBqlC_{CozBg~DaeBi|EylAktFor@seGuVsoGvCerG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=767.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.924134,-113.689278),new google.maps.LatLng(52.083089,-107.730347))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T717 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T717 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oxasa, ON Intxn to Setvo, QC Intxn to Epres, QC Intxn to Bemog, QC Intxn to Udgak, QC Intxn to Vidgo, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("q}~zGf|wcNna@sutJ??dI_{Ddv^ogmHlzGaxlAvyG{s|A??Ba@lrJmksB??bf@ypFfaAcdFnzAeqEhqBkxDzdCszCxtCoxBr`DgsA`hDuk@zjD{B|hDxc@lbDrkAlwCbqBjhCrsCnuB|qDn_BlkEvfAj_Fdl@fmFjPrtF}IjuFcpJdurBizGnz|A??cDfp@q{G`bmA_g^~qhHg`@`ooJ??yKrvFwg@fpFqbAjcFu{AfpEcrBnwDqeCtyCguCtwB_aDhrAehDrj@{jDtAyhDie@ebDkmA_wCmsBugCevCutB_uDk~AunEoeAybFsj@spFqNywF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=772.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.879522,-79.66489),new google.maps.LatLng(46.530336,-74.257))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T719 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T719 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Katub, BC Intxn to Kixet, BC Intxn to Senri, BC Intxn to Itmav, BC Intxn to Comox, BC TACAN to Port Hardy, BC VOR to Sandspit, BC VOR to Mocha, BC Intxn to Eever, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wcfjHrbvsVsgLz`Oo}Ujm\\??aaBznBsxVn`W{ci@fz~B??wr@zkC_i|Dzx`N??ugAbhDotAtxCocsNvbbZ??s}BdjEipC|cDgpsF~_mF}_N|dN??ybDjeCymDlrAqsD|\\ysDsWsnDqmA_dDeaCmtC}pDe`Ck{EahB__GulA}zG{n@cnHuO}wH`NexHhm@{nHfkAa|GtfBu`G`_Ci}EnsCgsD|aNcaN|soFsqfFbhoNedwYbnzDw{zMzql@yzhC??`~AegFhvBsjEdkCehD|l\\mo\\`|Tu|Z??dTiYftLolO??pnCsoCd|CiiBpeDe`AfjDkUhjD~SteDv~@r|CtgBdoCvmCx}BxoDbiBbmElqAxdFpw@fvFd\\~`G^vdGeZnaGuu@fwFuoAffFogB|nEo|BbrD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=496.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.961954,-133.385703),new google.maps.LatLng(54.750339,-123.527463))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T721 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T721 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Talno, QC Intxn to Eptul, QC Intxn to Ebdot, QC Intxn to Toxal, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("qcrrGrffeMslOwswA??wSslC{IwnC}rAmsaA??EwDwgIgxcK??hJm`Gri@uyFvgAgkFncBquEf|BmyDdqCqwCraDaqBbmDcgAhsDc[`tDtOdoD~{@beDffBzuCnmCdbCfpDnjBtmEpoAxdFfr@~tFfSz}FveIbmaKllAdt|@`pNdyrA??|]`{FMv~F{^xzFi}@foF}yAl|EusB|bE_jClcDc|C`_CmiDtvAsqDpk@mtD@sqDok@oiDyvAa|Cm_C}iCidDmsBadEqyAy}Ew|@{pF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=859.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.82717,-74.594475),new google.maps.LatLng(45.309233,-71.346214))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T722 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T722 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sasid, QC Intxn to Epres, QC Intxn to Pelsu, QC Intxn to Mixak, QC Intxn to Val-dâ€™Or, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("}jgwGttknMm{^`zj@??kvA~jBa~An|AwbeClouBmfdAtk`A_|tDrfpD??muCj{BcaDttAghDrk@{jDhAwhDgg@abDspA{vC}wBmgC}{CmtBw{Da~AgvEceAakFgj@eyFeNq`GfLy`Gjh@}yFjcAelFl|A{wE~rBu}DhfCg~CppuDgloD??POzvdA{i`A??jPyNxubCwlrBzk\\efg@??fmCmaDt~Cc{BdkDeqAnrDyd@htDvFrpDzs@rgDl_BjyC|gCpfChlDpoBjkEhuAfdFhx@dvFtYt`GyClcGcc@f~FkaApqFq}Aj}E_wBnbE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=818.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.866577,-78.06976),new google.maps.LatLng(48.341588,-75.509727))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T723 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T723 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sedog, ON Intxn to Tangi, ON Intxn to Udmug, ON Intxn to Rosvo, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("sh}kGdsafNmlhAkob@??w`Bqv@g|AedAq~_B{zpA??qwBcwBijBcnC}zAgbD}yiCkxdH??kqAcwEkw@ugFy[{qFMiuF~ZarFnv@ahFtpAuwElhBmaEl}BueDznCqeCl|CwaBreDg{@hjDeSfjDjSreDj{@j|CpaBznCbeCn}B|dDthBh`EveeCpy{GrzvA~viAddeAjma@??z{Cl`BfnCxbCv|BtaDtgB`|D|oAhqE~u@x`FlZfjFWhmF}[|iFkw@b`FgqAhpE}hBxzDw}Bb`DaoCbaCo|Cl~AueDfy@ijDjRijDcSoeDcz@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=841.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.843723,-79.816233),new google.maps.LatLng(45.756221,-77.241226))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T725 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T725 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Miglo, ON Intxn to Reedo, ON Intxn to Igvud, ON Intxn to Epmok, ON Intxn to Arvie, ON Intxn to Habbs, ON Intxn to Comau, ON Intxn to Mitig, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("m}jpGjnupM_fLoxk@??wJ}h@woYqzbBgmZcq`BkpWmu|@ewOshe@??g@{Aw~Zo|_AqpNodS??ctBurDw}A}kEydAq_F{i@}lF{MysFrL_tFth@kmFtcAg`Ft|A}lEfsB}sDnfC_vC`vC_tBnaD{nAnhDog@zjDEphDdg@raDfnAfvCfsBvfC~tCv|QdtW??|dBvwCttAtjDbg]tieAj`Pb`f@??bWzx@v{Xne`A??l}@hxDfh[ttcB??xH~b@fjYxhbBt}Kn}j@??rs@hdF~WhmFgBxoFk^xkFuy@jaFmsAzpE{jBrzDk_Ch_DkpCp_Co}Ch|AifDnv@ojDbO_jDyV}dDc~@g{CucBimCsfCo{B{eDgfBq`EcnA_vE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=864.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.469664,-76.444493),new google.maps.LatLng(45.624284,-73.6935))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T727 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T727 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vobuk, AB Intxn to Gadki, AB Intxn to Rigad, AB Intxn to Ukram, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("u}bnHnflsTw}vDv~~AcflEfjfC??{}C~rAedD|h@efDg@}cDok@}wkEactA??ajD}bB}|CurC_kCc~DwtBucF_{AgbGi~@_yGu_@_gHc@}kHp]ugHd|@gzG`yAcdG`sBafFriC}`Ex{C{uChiDmfBpqDws@ltDUtqDhr@z{`Eh_rAducEsm~B??d{@ua@`ixDkx}A??xoDy}@dtDiM~rDpa@llDfqAn`Dl~BxoCrgDtzBvkExaBpiF~eAj`G`h@joGxHdvGuTrtGos@tjGwpArxFqkBb_FccCz~DsvCrxCseDxmB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=787.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.549416,-114.649675),new google.maps.LatLng(52.934013,-112.943204))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T728 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T728 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Brandon, MB VOR to Iknal, MB Intxn to Otran, MB Intxn to Amenu, MB Intxn to Kenru, MB Intxn to Dusmo, MB Intxn to Mitob, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wcqoHn`rbRq|_Ah`EsnfBxxHww|@feE_aiPrujEmneC|hpB??mqCreBwxCh~@o|ChUu|CeRkhjLudrB??coDsnA{dDqeCquCqxDuaC}eFuiBilGqnAmjH{p@m_IuQqjI`LmkIjk@ebIliA{nH`eBirGt}BimFhrCaaEpbD_oCrmDsxApsDs_@zsDfXxs_LdvuBtb`Cs~iB??pkB{jA|oBou@j}oP{lfE??dyCk_@rg_A_vD??nAEbqfBktGj}_A}iD??ftDxHlpDly@fgDfhBzxCxsC|eCzzD|nB`|EltAtvFnw@xiGxXztGsDpwG}c@zqGcbAzcGi~A~mFqwBzpEgmClmDs~CtdCckDxwAmrDbh@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=555.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.743642,-101.969875),new google.maps.LatLng(57.030876,-99.687467))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T731 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T731 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Takol, QC Intxn to Estel, QC Intxn to Tamko, QC Intxn to Agluk, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wspvGbnqjMmx|@kseE??CGaeO_lt@??CKwp^{zhB??kw@yxFqXicGdEyeGrd@e`G|bAurFd_By}EnxBabE`nCm`Dh_D{yBrkDuoAtrD_c@ftDrHjpD|u@bgDnaBtxC~iCreCfnDrnBdmEbtAzeF`k^lkhBdbObdt@rm|@pwdE??b{@bsFn\\h~F{@taGg`@j}Fs~@hqFc{A~}EwtB|cE}jCzcDy|Cx~B}iDxuA{qD`j@ktD}@kqD_n@_iDuyAk{CwbC_iCugDmrBugEgxAoaF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=890.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.484121,-75.43591),new google.maps.LatLng(46.375713,-73.129697))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T735 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T735 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Dulba, NB Intxn to Irduv, NB Intxn to Ikuro, PE Intxn to Sasug, NS Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}rbzGbaxtK}vIsg_G??_@ga@_sCinnK??d@inAhg[ifwQ??d\\gtFtw@{iFvqAcyEliBgbEd~BcfDpoCmeC||CcaB|eDez@jjDqQdjDhUfeDt}@|{CddBdnC|gCt|B|gDtgBhcEzoAhyE|u@liFlZdsFYjvFo`[rkrQrqChhjKftIfe}F??kArvFo]vrF}x@fhFsrAlwEejBt`Ey~BxdD}oCfdCe}Cd`BafDhy@mjDxPcjDgVceDs~@s{CmeBymCmiCa|BwiD}fBieE}nAo{Eut@ukF_YguF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=712.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.987388,-66.707582),new google.maps.LatLng(46.464144,-59.81542))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T736 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T736 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Mutur, SK Intxn to Kenru, MB Intxn to Mitob, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("szdxHfz|qRslkOqeeG_aoPxg@??ijDqXueD{kAm|Cg}B}nCekDo}BqtEohBaxFupAwtGqv@yiH{ZuvHNyzH|[ivHpw@eiHpqAysGjiB{vFd~BcsEnoCsiDz|Cm{B|eDajAjjDsVn`tP|bF??~|CjUbyCv}@j_oOtnmG??ngDfjBhyCbwClfCj_EnoBxaFduAh}Fdx@dqGrYv|G{Cv_Hec@`zGkaAzkGs}AruF_wBxwEwlCpsDe~CtiC{jDr{AirDrj@ktDwE{pDax@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=637.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.0986,-102.726895),new google.maps.LatLng(57.030366,-100.771508))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T737 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T737 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Avvon, ON Intxn to Vikno, ON Intxn to Lafit, ON Intxn to Puxer, QC Intxn to Pusod, QC Intxn to Omali, QC Intxn to Reven, QC Intxn<br>Airway Path: Olaba, ON Intxn to Aloni, ON Intxn to Katek, ON Intxn "
po.paths=google.maps.geometry.encoding.decodePath("}ctsGfhliMeqP_tqAiqHwrl@??}V}iCkMqlCiaQemiHixRoqhG??AS{bAmm^u|Fk_{B??YeuFrZ}qFfv@ahFjpAywEdhBoaEf}B_fDtnC{eCf|CabBpeDu{@hjDsSfjD|RteDxz@p|CbaB`oCrdCt}BndD|hBz_EfqA|uEjw@ffF|[fpFd{FdhzBnbAdg^xvRz{gG??vBtv@zuPpcdHbsG~bh@??Fd@dnPdgqA??fc@rlFbGxqFcSlpF{n@lhFkiAfzEwaB`fEowBllDajCbnCuxCxkBicDrfAkiDj_@wjD{FqgD{n@s_DuuAmsCczBacCi{CeoBcxDcxA_pEs~@abF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=793.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.002484,-75.273651),new google.maps.LatLng(45.71869,-70.462746))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T739 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T739 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Olaba, ON Intxn to Aloni, ON Intxn to Katek, ON Intxn <br>Airway Path: Talno, QC Intxn to Eptul, QC Intxn to Rabik, QC Intxn to Mobal, QC Intxn to Antov, QC Intxn to Kervo, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("{okoGj}tpMmt`@gwjB??sO{w@}`EwcU??go@sgFiSwoF`GcqFhc@}kFp~@e`F~wAgnE`oBuvD~bCazCjsCgyBr_DauAngDsn@xjD_GjiD|^hcDzeAxxCvjB`jCxlCrwBzjDxaBfdEliAhxE`xD|cTdf`@rliB??bw@`bFv[xkFPdoFuZ`lFev@pbFcpAxrE{gBj}D{|BvbDknCrcC_|C|`BkeDl{@ejDhTkjDoQyeDwx@y|Cs~AmoCyaCa~BqaDeiBw|DoqA{rE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=942.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.310407,-76.436684),new google.maps.LatLng(44.845678,-75.305759))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T739 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T739 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Talno, QC Intxn to Eptul, QC Intxn to Rabik, QC Intxn to Mobal, QC Intxn to Antov, QC Intxn to Kervo, QC Intxn "
po.paths=google.maps.geometry.encoding.decodePath("qcrrGrffeMslOwswA??{@qIcnj@s~|F??eWg{EssFmhoCygPetaD??oGipBckBs}gA??hBstFp^opF`z@weF|sAqtEjkBq}Dz_CiaDzpCw`Cz}Cs|AnfD}u@pjD{M|iDrXtdDf`AxzCbfBzlCdiC|zBhhDveB|bEtmAfxEps@rgF|WrpFxgBjweArePl|`D??zHl{BboFh}lClsi@vaxFthOv_wA??|]`{FMv~F{^xzFi}@foF}yAl|EusB|bE_jClcDc|C`_CmiDtvAsqDpk@mtD@sqDok@oiDyvAa|Cm_C}iCidDmsBadEqyAy}Ew|@{pF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=817.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.82717,-74.594475),new google.maps.LatLng(45.611114,-70.413508))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T739 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T739 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Danol, NB Intxn to Puxop, NB Intxn to Emlob, NB Intxn to Omvev, NB Intxn to Itpax, NB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("kr{vGx~e}Kgoo@u~iG??oJohAsoFq|u@mxHidhAuyNopyB??{OidGxMsdG`m@y|F|jAimFnfBmvEx~BcyDfsC_vCdcDmnB`nDocAtsDoVvsDbUjnD~aArcDvlBzsCbtCv_C~vDrgBftEjlA~jFxn@tzFtvNbzxBrvHbwgAbiF|mt@|_o@jlgG??x]jpFrAhtFqXrqFct@jhFgnAxxEgfBhcEk{BlhDemC`iCa{CxeBydDt_A_jDzWqjDyNkfDaw@s}C{}AqpCabCm_CwbD}jB__EksA}uEmy@agF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=862.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.530951,-68.04166),new google.maps.LatLng(46.280449,-64.920198))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T740 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T740 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Swift Current, SK VOR to Tagot, SK Intxn to Amagu, SK Intxn to Kenru, MB Intxn to Duxip, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}jhrHh~xqSaloJ}yzD??ykBgdAkfBwwAkfiE}wjE??svBsoCciBsjDoyAcbEchAwuEcu@aeFubqCanqZoj_JeojR??ojBknF{rA}jG}x@a`Hm]imH_AarHlYonH`u@mbHjoAknGhgB{rFl|BupEbnCwhDz{Cg|BfeDklAdjDqZjjD~U|eDvgA||ClwBtoCxcDl~BrkEx_dJ~ouR??l`B~wDfpAdmEl~@j~Ejk@bkF|snCjsgZ|a{Dhj~DnbkJpq|D??jfDllBtwC~wCldC|~D`mB``FnrAhzFju@~lGpVrwG{FtyGef@jsGedArdGe`B`nFgyBfpEsnCblDu_DrbCykDduAwrD~d@gtDmJgpDq{@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=488.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.130705,-107.951255),new google.maps.LatLng(55.970725,-97.566156))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T741 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T741 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Tabru, QC Intxn to Odkap, QC Intxn to Elinu, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ooxqHv{`uKok~Bufh@??YIgkbEez`A??qcDioAeyCgzBqjC}aDaxBceEibB_cFwiAqzFco@gkGgSqtGfGcvGlc@cpGv~@obGdxAwmFfoBorEdcCkqDlsCokCv_DyaBpgDmu@xjDuGhiDdd@jabE`~bAde~B~pi@??plDlqAv`Db_C`pCzhD`{BlmEfbBtkFlfAxbGnh@brGhIdyGeTrwGas@vmGipAt{FekB~aFybClaEkvC~zCkeDtoBmoD~`AatDbPgsDg_@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=874.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.065679,-66.533928),new google.maps.LatLng(52.049905,-65.44716))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T743 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T743 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kodit, AB Intxn to Matir, AB Intxn to Alsiv, AB Intxn to Sekan, AB Intxn to Amuno, AB Intxn to Advox, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("cfy`Inwj`UliwBmtiCljT}cW??X[ljTu}VpmTu}V??FGxlTwwV??~|CwnC`jDc`B|qDyn@jtD~AhqDrt@zhDleBd{CdsCzhCf|DhrBt_FjxAd|Ft{@bqGd]x}Ge@xaHq_@b}G}}@zoGozAfzFetBd}EmjChyDyiTb{VyjThaW??QRogT`aWkgTdgW??ST_yvB`hjC??irCrpC{~CzfBagDfz@ujD|KsiDy`@}cDwnAuyCozBgkCacD}xBcgEicBueFyjA_~Fip@goGmTayG~E_{Ghb@euGr}@sgGbwA{rFjnBkwEjbC_vD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=895.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.412031,-116.065257),new google.maps.LatLng(52.796638,-114.320358))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T744 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T744 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oxasa, ON Intxn to Otona, ON Intxn to Rosvo, ON Intxn to Agnex, ON Intxn to Oligo, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mpyzGfn}bN`qlCcjlHxhCwox@???E`_E{|kAptLyybD??hb@soFr}@_dFdwA}qEhnBgzDjbCk}CxrCg|Bh_DswAhgDup@vjDoHniD~]pcDneAfyC`kBtjCrmChxBhlDrbBffEhjAxzE~o@jiFdTpqF_FfsF_rLr{aD}}DtnkAscD~}cA??e_@xqF_{@|fFauAruEeqpCphuH??soBplEofCjmDmyCvhCqgD~_BspDdt@itDvForD_e@gkDuqAs~C}{BimCkbDowB}cEa~Am_FuaAetFkc@iaGyCqfGzYwcGtx@}xFtuAofF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=831.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.323442,-79.665108),new google.maps.LatLng(46.530032,-76.012686))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T745 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T745 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oxasa, ON Intxn to Igsub, ON Intxn to Kebma, ON Intxn to Imixa, ON Intxn to Eptos, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_qwyGzqeeNikxFhroAy}`DlhzGu|dFzgcRnu@hhdM??{JhvGaj@|nG}gAj_GqcB`hFe|BviEaqCfeDoaDt{B_mDhnAgsDj^atDqPioDaaAgeDqoBavCyzCgbCgaEojB{aFkoAq{F{q@omGwRcwGgs@e`tM??tNoeG~i@_~FbdAsoFfokFu`tR??h~A}gEzmjDeqiH??luByiD`fCwkChsCcjBx|CyeAvccG_zpA??`sDw^btD~LvoDhz@zeDxeBbwC`nCrcC|qDdlBjpElqAphFft@pyFlU`cGcHvdGig@n~FkeArpFgaBl{EezBp_EkoCx}Cg`DhwBelD~lA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=606.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.197439,-87.242061),new google.maps.LatLng(49.944553,-79.183072))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T747 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T747 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: High Level, AB VOR to Bispo, AB Intxn to Obtup, AB Intxn to Mooto, AB Intxn to Exdee, AB Intxn to Omrir, AB Intxn to Omreg, AB Intxn to Libub, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wnwdJpyzgU`d{HsveF`t_IeswEhhrGognE~u\\i}Vfet@exnNr{GonoC??p`@s_H||@_rGtciBsheJ??h_B}}FpxBe~EdnCowDh_DmkCtkD_{AtrD}g@htDhJhpD`~@~fDxoBrxCb~CreCngEnnBxjF~sA|fG`w@b{GhXvfHaEniHmd@hcHobAhtGi`fBbb{IokGj{gC??_N|hDuxv@p`jO??of@npGa`AlbG{wAvmFmmBxrEe`ClrDqoCjmCcrl@bfd@??{e@h]q~rGrjrE??__Apm@uw_Iti|E??iDxBsdzHtajF??glD~eB}rD|j@etDqO}oDwkAifDueCowCu{DcdCalFqlBcuGuqAyuHit@{lIeUwyIpH{{I~g@isIdfAe`IdbBicHb{Bk}FhpCyoE|`D{{C")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=514.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.60284,-117.411947),new google.maps.LatLng(58.720655,-107.969604))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T749 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T749 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Mivok, ON Intxn to Kanik, ON Intxn to Lanrk, ON Intxn to Takol, QC Intxn to Kisuk, QC Intxn to Vidgo, QC Intxn to Livba, QC Intxn to Sokye, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ejrnG`|iyMkew@ynyBk}v@sjkBqkfC}jbF}gl@czr@??whBakCgzAw~CcjAmoDor\\wlqAwrd@esiB??e{@yqEqd@s|EysVenvE??oJcfGdS_eGhr@{{FvoA}jFzjB{rEpbCktDhvCgpCjeDwgBloDg|@`tDyNdsD|\\|lDviAhaDftBvpC`{C|{Bf}DdcBpyEngAfoFri@v}FjuUddnE|db@`ybBzhY`lhA`ki@fwo@??|mAfcBnfA`nBjxhC`egF??|t@|_Bjbx@d{mB??xd@zlAxnw@rkzB??`pAlrE`v@bbFpZrkFStnF{[jkFgw@paFcqArqE{hB~{Ds}BdaD_oC~aCo|Cf_BseDvy@ijDrRijDaSqeDgz@i|C}_BwnC_cCg}BkbDihBm}D")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=739.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.194066,-77.821946),new google.maps.LatLng(46.525265,-72.610322))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T751 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T751 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whitehorse, YT VOR to Omvan, YT Intxn to Watson Lake, YT VOR"
po.paths=google.maps.geometry.encoding.decodePath("eg}qJp~bwX|gtAw|iMt{OelmV??h\\ygJ`{@{wI~wAi}HdrBayGzhCelFh{CcxD|hDq~BjqDcaAjtD_BzqDd{@~iDhxBz|CtqD`kCleF|tBhrGj{AtvH~~@xqIt`@tbJjAzhJgyO~xqV??oH~yFmWzuFcf@fnF_tuAzgqM??meA`}Hg~AlaHitB~}FkgCpsEwvChcD{aDnnBuhDnv@{jDaAkhDyz@eaDasBsuCehD{eCyxEmrBqcGy{AcgHsbAsbIog@cuIkKg~IdOq}Ifk@esI")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=787.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(59.920475,-135.477276),new google.maps.LatLng(60.785386,-128.524738))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T753 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T753 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oilrs, AB Intxn to Mirek, AB Intxn to Bitga, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("mb}_Ih{frThnbEh|oAnoWvsG??hcD`pAvxCfzB~iC|`DpwBfcExaBf`FjiA~vF|n@dgGfSbpG_GvqGac@|kGe~@z~FowA|jFonBnpEobCjpD{rCnkCg_DrbBggD`w@wjDzIoiDua@_`XipG??e]cJuhcE}|mA??ojDo`Bs}CipC{kCw{DyuBoaFa|Ag`Gs_AgwG_a@seHmA}jHd\\agH|z@azGzwAkdG`rBufFthC_bEd{CkwCxhDchBhqDyu@jtD{A|qD~o@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=905.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.325543,-114.24079),new google.maps.LatLng(52.790219,-113.245975))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T755 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T755 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whitecourt, AB VOR to Wylde, AB Intxn to Grong, AB Intxn to Yegga, AB Intxn to Jedii, AB Intxn to Camra, AB Intxn to Wainn, AB Intxn to Tagot, SK Intxn to Mutur, SK Intxn to Kobid, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("wmejI`qp`Uh|dB}zkD`~k@ymjB~_`@manAp|Q}nhD??LaCplHehnAcLsraI??lKmzFda@wtFlveDaucXzarDyy~XnzcDq_zU??bjAkrFrbBo{EhxBo~DxjCk|ChyC{uBtcDelApiDq`@vjD`JfgDbv@b_Dx`BvrCphChbCtlDhnB`lEhwAveFz}@dyFxb@|eGxFpkGqS|iGeo@`aGs~bDzzvU??}NvfAwjqDde|X??qPjrAulcDxixW|Np~|H??iCzuD}N`tDy_IbhsAe`S~}rD??ed@hrF{x@zfFklArvEc`d@fzwA??yD~Lanm@~lnB??qx@x}Bc_ArtBmmfBvkoD??whC`hEa{Cl|CwhD`lBiqDfx@ktDpB_rDiq@cjDweBc}CewCekC_dE_uB}jFe{AsjGq~@ebH_`@wpHk@}uHh]qqH|{@ycHxxA_mG|rB}mF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=311.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.255969,-116.080656),new google.maps.LatLng(54.311643,-98.46258))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T757 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T757 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Aplig, BC Intxn to Kalts, BC Intxn to Fried, BC Intxn to Mocha, BC Intxn to Bokma, BC Intxn to Omseb, BC Intxn to Estit, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("imtbIf`prXydxBmfd@q~sBgz_@??eqCo{@ojCa_B_aCs`CutBo_D{eBa{D{xv@gqvB??k|AaoFydAafGmk@cvG{Py~GuoAcalG??|LepHxj@qgHhgAivGtaB{|FfyBc|EdmC{tD~|CohCrleEsydCdamL}g|N??n|CgoCtiDcaBxqDcp@jtDf@nqDpr@diDbcBv{CtpCpiCvyDdsB`}EfyAtyFv|@tnGf^r{GEz_Ho^n{G}|@pnGqyAlyFksBx|EwiChyDmunLtxbO??utB|`Cc~BbeBoptDri{Bz`A|lqEh`h@thwAb`hBfz]??rShEpixBvye@??tdDdkAxzCfwBxlC~_D|zBjdEveBfcFtmA~{Fps@|mG`XnxGeBl{Gi^vvGqy@njGisA`wFwjBz|Eg_Cr|DipCdwCm}CrmBgfD|`AmjDjRajDwZ")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=688.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.102918,-134.276646),new google.maps.LatLng(54.686086,-128.043341))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T759 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T759 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oilrs, AB Intxn to Bisno, AB Intxn to Kersa, AB Intxn to Pevlu, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("yyk_IbeyrTlpNxs^z}aD`f_A??RF|`UzoG??fbDhuAdwCd_C~gCjeD`uBbgE~~AjcFhfAlyFtk@thGxOxpGmJpqGkf@xjGkaA||FkzA`hFcqB~lEsdCflDqtCvfCo`Dp}A}gDtq@yjDlDaiDeg@{aUchGg|lDkqaA??{_DcuAeuC__CsfCoeDktBugEsqUgvl@??sdBiwF{hA{pG{j@abHoKejHdRiiHjq@c_H|nAclGbjB}pF|aCknExuCkeD`eDqwBdoD_fA~sDmRhsDr_@dmDrrAtaD|bChqCfoDp|BbvE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=903.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.339625,-114.4092),new google.maps.LatLng(52.790646,-113.245218))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T761 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T761 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Alkik, AB Intxn to Rodku, AB Intxn to Pepgo, AB Intxn to Saxol, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("gp~`I`_zoTbadCrms@dvjBndh@hqPvfE??`lDfvA~_D~dC`oCpoDxyBvtEx`BnsFzdAxjGzf@`zGrGx`H{Uz~Gst@dtGyqAfaGolBlfF{cCvdEiwCz|CafDhpBwoDd`AetD~M_sDyb@wxPybE??{KqCsbkB}`g@??QEyhdCe}q@??ikDy|Ay~CcmComCcyDwwBo_Fi~Aa_G}aAyvGsc@}eH_D_lHrY{hHnx@q|GruAmgG`pBijF~fC_fEzyCq{CzgDqlBzpDez@htDcFjrD~k@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=893.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.300566,-113.899611),new google.maps.LatLng(52.959266,-112.852973))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T765 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T765 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Whitecourt, AB VOR to Obtup, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("k||iIthicUun_FedeE??qpC{_Do_CchEyjBwjFisAagGky@a|Gy]eiHoAcnH|XsjHtt@{~G|nAgkG|fBepFb|BqnEzmCggDt{Ck{BbeDelAdjD_[jjDxT`fD~eAb}CduBxs~E|fgE??fqCzxCj`Cp_EblB`aFztAh|Ff{@xpG~_@x}G~CdcHiVp`H{q@dvGclAhdGidBhkFuyB|kEwkC|fDczCh}BcdDfpAwiDx`@sjDsM}fDu}@q~CelB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=895.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.979399,-116.081316),new google.maps.LatLng(55.459034,-114.484801))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T767 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T767 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nubam, ON Intxn to Imixa, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{}vcHnjffOg_dJymj@??qhDoj@saDguAgvCs}BufCwbDmsBgcE_}Ao~E}cAqsF_i@_bG{LeiGrMciGti@uaGpdAcsFp}A{}E~sBobEbgCyaDpvCw|BzaDctAthDmi@zjDn@zxcJd`n@??vqDjm@riDzzAh|CpeCjjCblD`tBhmEhzAjhFx}@j|Fj_@rhG^|lGk]diG}{@j}FqxAxiFqrBhoE_iCjnDk{CbhC{hDv}AkqDhp@ktDjA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=867.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.784713,-85.070644),new google.maps.LatLng(49.944563,-84.334027))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T768 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T768 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Arbby, ON Intxn to Duteg, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("iaxhHbg}vPag\\ylkG??kK_dG`OocGbk@{{F|eAgmFx~AcxE~tB_}D`hCw|CfwCexBhbDipA|hDkf@zjDtBbhDnm@v`D|vA~tC`~BfeCpaDvqBt`Ed{AnzEdbAhnFfg@v{F|`\\jviG??jNbaG{KlaG{g@xzFubAhmFu{AhyEerBn_EseCj`DiuCz|B_aDzuAehDnl@{jDvAyhDcg@cbD_qA_wCsxBugC_}CstBa}Dg~A_xEmeA}lFoj@i{F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=920.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.45833,-93.26003),new google.maps.LatLng(48.940609,-91.386717))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T769 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T769 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Govad, BC Intxn to Comox, BC TACAN"
po.paths=google.maps.geometry.encoding.decodePath("kn~jHrvm_WggaC}||C??obCw`EwjBiaFsoAa{Fcr@amG_SyvGtJ{wGbj@mpG`hAq`G|cBwhFr|B{iElqC{dDzaDwzBfmD_mAjsD{\\~sD~Q`oDfbA|dDhpBruC~zCxu`Cri}C??dcC`|DtkB~{EzpAfuFts@~fGxTxpGwHlrG{g@xkG{eA||FwaBpfFqzBbiEwoCneDm`Dz|BklDhpA_sDfa@etD{LyoDy|@cfDyjBiwCuuC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=921.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.88042,-125.95806),new google.maps.LatLng(49.878825,-124.637074))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T770 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T770 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Kebmo, ON Intxn to Itbin, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("{~coHbzm`Qw~xFubmB??{_Dm_BusCmhCmcCwmDqoBgnEqxAeiFa_As}F{c@akGuGeqGzRsoGvn@ufGhiAkvF|aBi_FxwBcbEfjCq_D~xCuxBlcDqnAniDgb@vjDzHjgDtu@loxFtpoB??|_Dj|AxsC|cCtcCzgD|oBdgEbyA~`F|_AvtFzd@vaG|HzgGkQxfGem@r~FugAloFi`BzyEevBh~D}hCn}C}wCjxBwbDzoAaiDde@{jDuD{gDop@")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=895.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.621877,-94.620534),new google.maps.LatLng(51.233502,-93.528376))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T771 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T771 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Empress, AB DME to Swift Current, SK VOR"
po.paths=google.maps.geometry.encoding.decodePath("}pwvHlqu}SpgzBwcaM??lrA}jFbjB_rEx~BgsD`pCuoCf}CchBbfDy}@ljDyQbjDrX`eDfdAn{C~mBvmCrtC`|B`wD`gBrtEboAflFbu@p}FrYzgGq@bkGy\\`gGcx@|{F_nyBvw~L??irAx}F_mBfcFgdCtaEswCjzCgfDbnB}oDn~@etDzL}rDgc@glDktAg`DacCkoCsmD_zBasE}`B_rFydAoiGsf@yxGcGq_HpVi}Gpu@mrG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=878.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.130995,-110.253518),new google.maps.LatLng(51.092495,-107.430256))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T773 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T773 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Nosiv, AB Intxn to Odlan, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}vqvH~ptqTzvjCeisJ??jdBmxEzyBe{D~kCyxCfzCgrBhdDshAxiDa]rjDhMvfDdy@j~CjcBtqCxjCz`CjnDtlBbmEluAhfF|{@fyFv`@jeGrDjjGsUfhGiq@z~FqkArnFy{iC~yqJ??efBxjFq~BbkE}rCbeD{bD`zB{mDhkAssD~YysDaVqnDsgA{cDawBgtCybD_`CuiE{gBmjFolA_dGun@ouGmOo~GfNs~Gnm@_vGjkAydG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=888.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.026199,-113.555708),new google.maps.LatLng(51.07234,-111.129196))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T774 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T774 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sensa, BC Intxn to Spuzz, BC Intxn to Kroft, BC Intxn to Williams Lake, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("afnlHhqteVi{jAk|C??_FOiymD_oLcrdHv}bD??qnDhiAysDlVssDg[ymDanAwbDs~BurCkkDa~B}rEseBatF_jAsmG_l@__HwLmgH~P{fHdp@c}GzmAujG`iB_pFbaC}mEbuCseDpdDgxBxekHyecD??~}Bgt@faCmZlbCi@`{sDj}N`wjApuD??trDvd@vkD~sAn_Dp`ClnCfiD`yBtlE|_BxiF|cA~_Gze@hnGpFltG{VjrGsu@zgGwrAluFkmBp{EsdC~zD{wCvtCofD|iB_pDt{@gtDtK")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=802.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.22019,-122.44047),new google.maps.LatLng(52.403607,-121.057806))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T775 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T775 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Treel, BC Intxn to Nutbe, BC Intxn to Bajol, BC Intxn to Varsy, BC Intxn to Basra, BC Intxn to Mills, BC Intxn to Frase, BC Intxn to Pitt Meadows, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("s|fmHfsvrV`~D{nq@|fBmcZtjCo`c@???MrvE_ru@vqAqtS???CjyAokUbx@gaM??fq@wjGxnAcyF|iB{_FxaCy_EtuC{yC~dDgoBdoDiaA~sDkQhsD`]dmDjlAxaDjyBlqCrbDr|BvfEbdB|dFnhAb|Ftj@rkGpKbsG}QhrGww@n~L??AJyxA`gUeqAhpS???JeuEzfu@yiCbyb@gfBj~Y??CZy|D|dq@??kn@|jG}kAlzFggBhbFk_CfcEusCj~CkcDltBgnD`gAusDfWusDeWgnDegAkcD{tBqsCe_De_CqdEyfB_dFkkAk|Fqm@amGgNmuGlOguG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=929.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.049463,-124.121189),new google.maps.LatLng(49.522895,-122.460039))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T776 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T776 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Omveg, ON Intxn to Itbin, ON Intxn"
po.paths=google.maps.geometry.encoding.decodePath("euapHpg}pPsrxDfhoJ??yyBxrEcoC~mD_`DtcCclDluAyrDjd@gtD{KapD{}@ofD}mB{wCwzCodC}bEamBaeFirAg`G}t@qsG}Uk~GxGk`Hdg@oyGleA{iGlaBerFpsyDg`pJ??rvB_`EhiCm~CfxCoxB~bDmoAdiDad@xjDbFvgD`r@~_Dp|A~sCldCzcCthDbpBdhElyAhbFb`AfvFfe@lcGdIriGcQrhG{l@l`GmgAhqF_`Br{E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=880.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.947648,-94.057781),new google.maps.LatLng(51.233463,-91.646224))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T781 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T781 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Bluez, MI USA Intxn to Axobu, ON Intxn to Havok, ON Intxn to Derlo, ON Intxn to Olamo, ON Intxn to Davsi, ON Intxn to Tesuk, ON Intxn to Taleb, ON Intxn to Bomet, ON Intxn to Nopot, ON Intxn to Tiget, ON Intxn to Iptos, ON Intxn to Verti, ON Intxn to Agluk, QC Intxn to Novid, QC Intxn to Sokye, QC Intxn to Ketru, QC Intxn to Pesac, QC Intxn to Quebec, QC VORTAC to Pinte, QC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("iscfGnetvNpNcaUwrMijvC??EeAsuG}_`B_{c@at}Ec}nAkmxB??otAkuCkeAwcDci[kgmAq`_@m~qA{d]ofnA??ks@{`D{~UsetAiiQencAipcB}spD??c~AsjEaeAe~Esd}@ircG}tuDq_wG??elBukEirAycFikG{z[syS_ogAcpQqh_AotQmt`A??AI{r]owlB??wn@a{EiWacFM{eFpVicFtyq@atsH??nv@ykFrpAc{EjhBodEj}BkhDznCwgCj|CkcBreDg|@hjDsSfjDrSreDf|@l|C~bBznCbgCp}BngDthBdcE`qAryEbw@bjFt[dtFNtwFuZltFkgo@pncH|sYvn~A`qQlj`A`nQjc_A??nArG`wSnhgA`dErfT|bvDtkxG??b`BvgDrmA~yDjy@jhEti}@h}dG``cBhapD??z|An`EneA|rEjaSdcjA??\\nBzdUfhqApb\\jokA??FPtc_@bjrA??rN|h@xmYrghA|qqA|v|B??~sAbqCleA`_Dnu@fjDvd@nrDt}e@~rjF??`SlzCzzGx|aBz{MjeyC??bHdkFeQ|sX??aTntF}r@xkFgpA`|EckBpeEwbC~hDkvCjgCkeDpaBmoDtx@atD~MgsDe[{lDseAiaD{mBupC{rCu{BisD{bBknE}fAacF{h@wpFqIawF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=397.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.777878,-82.754183),new google.maps.LatLng(46.871364,-69.80871))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T783 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T783 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Halifax, NS VOR to Igtas, NS Intxn to Notop, NS Intxn to Silro, NL Intxn to Tigor, NL Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_jbrGndrbKuk\\sdvAijgAevrDiemH_~{S??e_A_oD_o@yyDa^oaEajpAkrjZ??sB{kG~ZuhGxy@i}FxvAgjFbqB}oEzgCgoDnzCgiCjhDa_B`qD_r@jtDoCdrD`i@njDhvAr}Cx`C|kCjgDbvBvhEp|A`dFd`AlxF~a@deGfxnA~}{Yt`iHpssS??dn@hkBbjhA|nuD??`g@dkBfy\\tpwA??x~@dnFj`@`zF`Al~Fm\\b{F_{@bpFuwAz}EyqB|dEkhC~eDyzC|aCshDxyAeqD~n@ktDrBarD_h@ijDisAi}Cg|BokCiaDmuBoaEu{Ay{E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=560.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.757029,-63.636754),new google.maps.LatLng(47.581323,-53.868462))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T785 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T785 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Prince Rupert, BC NDB to Daxex, BC Intxn"
po.paths=google.maps.geometry.encoding.decodePath("gxdiIpp_{WdkDbtiI??qGxsHwf@rlHwdAl|Gw`BrcGuyB|bF_oCj{D{_D~mC_lDf|A{rDpg@etDoLcpDebAsfD}uB}wCgfDsdCmqEgmBgvFmrAqsGcu@mhHcVatHqlDyilI??~K_vHhk@kmHhiAi{G`eBu`Gp}Bc~EhrCwtDlbD{eCrmDasApsDw]zsDlVvnDvkAhdDp~BztCpmD|`CdwE`iBdzF|mApuGnp@thHrQtrH")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=918.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.069292,-132.408371),new google.maps.LatLng(54.429819,-130.138878))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T789 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T789 Fixed RNAV Route<br>MEA 12700<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vidri, BC Intxn to Romra, BC Intxn to Ellks, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_ejrHz`qeV}mcJagoV??EKt}s@uk|@flaJxjmV??zbB`kF`gAjbGfi@xqG~I`yGmSvwGkr@`nGuoAb|FqjBtbFgbCdbE_vCz{CceDvpBgoD`bA_tDhQisDc^cmDunAqaD}|BcqCigDe|BwlE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=795.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.059522,-121.759476),new google.maps.LatLng(52.1813,-117.4958))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="12700"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T789 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T789 Fixed RNAV Route<br>MEA 14500<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vidri, BC Intxn to Romra, BC Intxn to Ellks, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("ctn}Hlx`nU??CIypoFomcQ??wtAekGsw@i`HwXmlH~DkoHnd@{hHzbAkyGb_BcaGlxB}`F`nC_zDf_DgmCrkDm|AtrDuh@htDbJjpDp~@`gDzpBtxCv_DveCtiErnBhmFj`nFxnaQ")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=846.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.910156,-117.810158),new google.maps.LatLng(53.439871,-114.407467))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="14500"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T797 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T797 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Vetbi, AB Intxn to Sesda, AB Intxn to Rabox, AB Intxn to Libos, SK Intxn to Durur, SK Intxn to Emlik, SK Intxn to Langruth, MB VOR"
po.paths=google.maps.geometry.encoding.decodePath("ewoxHbibsTlyAifg@v`Ru{{F??DmApbu@cdyPnm[m~`X??bM{cDtuz@mzlMmnKe|{U??pNu{Gxm@_sGtkA{aGbgByhFj_CshEvsCibDncDcwBhnDghAvsDgWtsDhXbnDbiAfcDpwBnsChbDb_C~gE~fBrgFtkAf`G`n@~pG~NryG~rK`t}U??cApyEwSdwEc}z@p~mMwd[dk|W??mMteFsbu@pwxPk|QhczF??IzB}xAd_g@??y_@fkGa{@d_GutA`lF_lBprEi`CfsDcqC`oC_~C|fBsfDz{@qjD`O{iDe\\qdDyhAuzCmsBqlC_{CozBg~DaeBi|EylAktFor@seGuVsoGvCerG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=419.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.191219,-113.689278),new google.maps.LatLng(51.368476,-98.462352))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T798 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T798 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Otlur, MB Intxn to Kenru, MB Intxn to Kedem, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}hcoH|i{qQqfoWb|iVgp`Fl__X??arAjeGqiBdjFi~BphEooClaD{|CzuB{eD~fAkjD~UejDuYieDwjA_|CyyBgnCqeDq|B}lEqgBqnFooAuiGku@o}GuYkiHx@_mHb]khHtx@m{GnifFy{pX??ngA_hEnvAuuD~cBc`DroBwgCbvyW}llV??d|CgkBleDmaAfjD}UjjDbTveDr_Ar|CdiBfoCxoC|}BprDdiBfpEpqAjhFvw@bzFh\\beGd@|hGaZteGqu@h{FqoA`jFigBlrEk|BbuD_nCzrC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=542.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.74386,-105.558392),new google.maps.LatLng(55.317402,-96.981335))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T799 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T799 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Lyton, BC Intxn to Guchy, BC Intxn to Chapt, BC Intxn to Felko, BC Intxn to Endby, BC Intxn to Howzr, BC Intxn to Farns, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("w|trHjjagVmxf@_|_GkqDwvd@kaQcv|BumSectC??{Ro~EIw`FxgZgz}N~j`AgqM??`IpdEgD~dEirZny_OrkRzflCl}P`|{BbpDznd@xof@jg~F??~ZhgGEzjGk[dgGyv@j|FwpAvjFmhBtrEg}B|tDwnCbrCg|ChkBoeDnaAgjDzUijDsTweDm`Ao|CqjBaoC}qCs}BeuDwhBosE{pAalFyv@a~F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=771.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.083767,-122.105561),new google.maps.LatLng(50.843972,-116.231136))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T799 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T799 Fixed RNAV Route<br>MEA 13400<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Lyton, BC Intxn to Guchy, BC Intxn to Chapt, BC Intxn to Felko, BC Intxn to Endby, BC Intxn to Howzr, BC Intxn to Farns, AB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_entHx}zdUg_g@e`~C??cr@asG_S}|GtJe~G`j@ovGbhAgfGzcB_nFr|BknElqCohDzaDo}BfmDwnAjsDo]~sDjRboDvcAzdDzrBruCj~CzaCbeEbjBteFdoAl_G`wi@r{hD??~f@`{DdXdaE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=944.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.369606,-116.305736),new google.maps.LatLng(50.920547,-115.132331))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
a.mea="13400"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T800 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T800 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Govad, BC Intxn to Avumu, BC Intxn to Omvin, BC Intxn to Dutok, BC Intxn to Vixor, BC Intxn to Liano, BC Intxn to Vancouver, BC VOR to Ferry, BC Intxn to Haras, BC Intxn to Sensa, BC Intxn to Princeton, BC VOR to Skaha, BC Intxn to Goate, BC Intxn to Locan, BC Intxn to Ervyn, BC Intxn to Boxat, BC Intxn to Aldda, BC Intxn to Cranbrook, BC VOR"
po.paths=google.maps.geometry.encoding.decodePath("kijkHht|}VzpO{kxB??@Qrq[}_eEbdIkkbAz`AkoL{eK{pJ??_CyBqoc@ubb@??gxB}gC_jBiaDoyAmwDcgAsiEes@mwEimUkcxBwaPeq}A??c@mEk`TscyB??eXigEkGujEt]qqjEo_FgnvCkvDoz~A??c@qT{uKc|lHgmBe}bB??jE{pGjc@ckGj`As}Fn{AshFzsBylExhCakDvyCidCdfDwyAlbVceHqpc@elc@??qcCo|CoqBm{Dk|AouE}dA}iFqk@ixFaQe`GyYieq@??nJ_wGzi@soGzgAy_GvcBghFl|BmiEjqCqdDvaDuzBdmD_mAjsDc]~sDpQboDvaA~dDtoBvuCdzC~aC|_EhjBz_FjoA|xF|q@njGbS|sGdK|tVdnsAxasA??fgCz~CbtBt~Dx}AhyE~dA|mFfj@d|FhNncGaLxcG_h@~|F{bAjoF}{Ad{EkrB`aEyeCraDquCt}BeaDjvAskdAd_[paAdyy@??B`BtrKzqjH|uDjr~A??lAfm@nbFzlxC??|AdoCa^xaeE~yRfcrBx}Ox||A??H|@l|Q`leB~|XfcX|y^ni]??x`CppClpB~lDh}AleEzgA|xExp@hgFlXbpFPbsFmWjpF}hFbwn@??C\\cbIr~aAsk[pxcEkmOjswB??}n@`zFkiAtjFwaB~tEqwBnyD_jCzxCwxC`tBicD~kAiiDva@yjDmGogDor@u_Dg|AmsCocCacCcgDcoBgfEaxA}_Fs~@isFkc@e`GcGyeGhSgdG")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=597.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.561007,-125.957909),new google.maps.LatLng(49.720736,-115.831692))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T801 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T801 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sensa, BC Intxn to Kelowna, BC NDB"
po.paths=google.maps.geometry.encoding.decodePath("kmimHbjzdVmbcCo_hK??gbAgfG{c@stGiDmzGhYowGdx@alGhuAixFvoB}|ExfCwzDryC_sCvgDufBxpDiw@htDkFlrDxh@~jDpxAl~CpeC~lClnDhwBzqE~}A`oFxhbCtgfK??fcAppFnh@l~FnLheGwMdeGsi@|}FkdAxoFg}Ad{EssBp`EufCr`DgvCj|BqaDntAqhDjj@{jDAohDoj@qaD}tAavC_}BqfCwaDgsB}aEw|A}|E")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=885.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.220022,-121.679088),new google.maps.LatLng(50.227089,-119.157508))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T802 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T802 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Durur, SK Intxn to Mutur, SK Intxn to Amenu, MB Intxn to Kobid, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("k~duHpxx_SyctBmszM??ej@{mFqSquFrAuwFb__@c_wM??fZu}E`m@uuE|~@qiEtoAsyDn_dCs|bG??j~BijExrCidD|bDeyBzmDqjArsDsYxsD~UnnDzfA|cDluBhtCj`Dd`ChfEdhBhfF`mAd_Gno@lpGnPlyG}LzyGcl@zqGwiApaGieBliFks}BpawFm~\\tqyLnxpB|{lM??tr@v`G`WpjGeCdmGg_@jhGqz@p|FetAxiFqkBtpE}_CzqD{pCbnCy}CpfBmfD~{@qjDvO}iD_[wdDcgA{zCiqB{lCmxC{zBm{DoeBgyEkmAcqF")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=737.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.255862,-105.152368),new google.maps.LatLng(51.431034,-98.462357))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T803 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T803 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oxasa, ON Intxn to Rezin, QC Intxn to Val-dâ€™Or, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("wynzGpg`eNwuiGsfgF??{AqA{rvAa`oA??oiC}wCyvBexDy`BosEehA{hFom@}wFoQa`G|HcaGbe@c{Ff`AcnFryAszEnpB_aEddCebDhtC{~Bh`DcxAzgD_o@xjDsDbiDxc@vbDfmA|wCltB|gvA~loAbyhGrphF??trCjwCd~B`zDzeB~vEjjAlmFvl@r|FrMddG}O~cG{n@v{FolA`lFwgBbuEy_CtwD}sCttCucDbmBknDbbAysD~TssDwVanD}cAccDcoB")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=846.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.197329,-79.66551),new google.maps.LatLng(48.341538,-77.571522))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T804 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T804 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Notop, NS Intxn to Sasug, NS Intxn to Torbay, NL VOR"
po.paths=google.maps.geometry.encoding.decodePath("keiuGjmdzJkfhCyx}J??_{@etEw|cGezak@??eVy{FdD_~Fn`@gyF|{@qmFpuAi{EzlB_cEfaCkeDzqCgcCr~Co}A|fDeu@tjDoKtiDl\\bdDpeA~yCtlBvkCxpCpyBzpDddB`lE|kAxaFtq@fqFxraG`svj@rkfCdbyJ??jbAv_Fpg@llFrKrrFwNfrFqj@jkFieA|}Ea~ArjEitBtqDkgCzsCuvC`rB}aD~lAuhDxe@{jDq@khDyh@eaDcpAsuCeuB{eCcwCorBytD}{AsmE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=577.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.286139,-62.248583),new google.maps.LatLng(47.65164,-52.605994))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T812 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T812 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Rubsu, AB Intxn to Resax, AB Intxn to Cacho, AB Intxn to Letrm, AB Intxn to Fort McMurray, AB VOR"
po.paths=google.maps.geometry.encoding.decodePath("osofIzontTgn_Aswd@{g|DyeqB??kmAyu@waaE}j{CcarCcl{B??m{CifDciCquEorBi~FkxAe_Hm{@kwHw\\}eI|@kjIp`@udIb_A{tHv{Au{GluBuyFrkCcpEj}Cc`DjjDkkB`rDms@ltD|CbqDb}@nhDftBxoqCz_}B??HHpe_Ebn|ChpzDrrrB??b@Tji_Azne@??ddDd}BttChkDt`CdtEvhBrvFrmApqGdp@ddHfQ~mHgLtnHkk@jfHciA~tGudBl{Fc}B`zEyqCdrDabDvdCimDfsAmsD~^}sDgTaoD_iA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=776.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.439897,-113.635867),new google.maps.LatLng(56.813684,-110.820401))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T818 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T818 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Sasug, NS Intxn to Umeti, NL Intxn"
po.paths=google.maps.geometry.encoding.decodePath("}v`yG~r|nJc}uGmwyC??wyC_nBikCkrC_yB{rDmcBinE}jAedFop@wsFuTq|FxEm~F`b@eyFj}@cmF~vAqzE`nByaEfbC}cDtrCmaCd_Dm{AhgD_s@vjDeIniDx^tcD|gAjiuG~w{C??bzCviBxkC~lCtyBjlDhdB|fEblAb|Ezq@hkFfVbtFaDfvFc`@vqFk{@rfF_uAhuEglB`~Dq`CvaDkqCz`Cc~Cn|AufDnu@sjD|LyiD_ZodDibA")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=882.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.987118,-60.296059),new google.maps.LatLng(47.746352,-59.01158))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T820 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T820 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Oxasa, ON Intxn to Suxeb, ON Intxn to Rouyn, QC NDB"
po.paths=google.maps.geometry.encoding.decodePath("ubdzGr}eeNqopGarfAo_oAytT??}mD_gA}bDosB_sCu|Cm~BaaE_fBm_FmjAcwFql@cgGgMaoGlPsnGro@{eGhmAauFrhBw|Et`Cs}DvtCwxChdDeoBvnDibA|sDoSnsD|Yn|nAflUvepGl~hA??~dDr_Aj{CdfBpmC|iCx{BziDvfBbeExnA~zEvt@zjFdYltF_AhwFe]lsFqx@`iFirAfxE{iBpaEq~BreDwoC`eC_}Cz`B_fD~y@kjDlQejDwU")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=865.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.197744,-79.665502),new google.maps.LatLng(48.339418,-78.688977))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T821 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T821 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Amagu, SK Intxn to Dusmo, MB Intxn"
po.paths=google.maps.geometry.encoding.decodePath("_qsdI`j|dSyx}G}blW??wlAo{Gao@wnH{OsxH|M_yHfm@qoH`kA{|GrfBmaG|~B_~ElsC{sDfcDgdCdnDupAtsDwZvsD~YfnDvoAncDzbCxsC`rDp_Cv{EngBr~Fvz{Gj{hW??nqA|yFtw@~lGf\\vxGb@||GcZjyGqu@dnGqoAt{FigBhbFk|BxbE_nC~}Cu{CttBeeDfhAcjDrYmjDwSafDubAa}CyoByoC_zCo~B{_EwiBs`F")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=806.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.048558,-105.951017),new google.maps.LatLng(54.844561,-101.393898))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T822 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T822 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Durur, SK Intxn to Tagot, SK Intxn"
po.paths=google.maps.geometry.encoding.decodePath("qrssHjpn`ScbfHx_eJ??iwCj_DafD~qByoDdaAetDbN_sDmc@mlD}uAo`D}eCsoC}qDmzBkxEkaBkxFgeAupGcg@q`HsGsgH`VoeH`u@mzGlrAqfGdmBujFpdCsgEtkgHsycJ??tqColCn~CgdBzfDiy@rjDyLviDz]fdDtiAdzClsBzkC~yCzyBd|DldBfyEflAlpF`r@`aGlVvjGwC`mG}_@fhGc{@d|FwtAhiFalB`pEi`CbqD")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=858.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.50074,-106.991183),new google.maps.LatLng(52.347597,-104.627151))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T825 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T825 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Itmav, BC Intxn to Mobid, BC Intxn to Comox, BC TACAN"
po.paths=google.maps.geometry.encoding.decodePath("konlHrkhvVuej@l`d@z_Jxve@??bw@jyFt[ddGP|gGuZldGev@|yFapAthF{gB~pEy|BtsDinClqC_|C`kBieDzaAgjDrVkjDgS{eDu~@y|CkhBmoCkoCa~BirDiiBopEoqA{hFw}Ua}oA??ev@myFc[edGGygGrZidGtu@wyFjoAkhFvfBwpEn{BosDvlCkqCfedA{zy@??`|CojBleDcaAdjD_VjjDtSxeDv~@t|C~gBjoCjnC`~BtpDhiBhnEtqAdfFzw@xwFn\\tbGj@rfG}YlcGku@byFkoA`hFggBvpEg|BvsD{mCtqC")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.30982,-125.152025),new google.maps.LatLng(49.995523,-123.922357))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T827 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T827 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Halifax, NS VOR to Paulo, NS Intxn to Nutby, NS Intxn to Ikuro, PE Intxn"
po.paths=google.maps.geometry.encoding.decodePath("iqiqGnvkcKum_AywKs{sAu~OyevBwhW??uoDqz@yeDefB}vCwnCicC}rDwkBuqEypA}iFks@c{FiTodGlI}eGvh@g_GzfAwpFxbByzEr{Be~DrpCw{CfaDstBzlD{iAfsD_]`tDxNpbvBthXrysA|tP??NBhl_AlhL??nfDpu@x}Ct{AzpCd_C|_Cd_DpkBxzDbtAhqEpz@bbFd_@vlFbC|pFeWtnFwr@xeF}lAvvEaeBzaEmzBtgDklCxhCozCffBmdDv`AyiDnYsjDqL")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=893.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.756835,-63.6373),new google.maps.LatLng(46.464071,-62.878786))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="T838 Fixed RNAV Route<br>Class E<br>2200ft AGL to 18000ft"
mt="T838 Fixed RNAV Route<br>Class B above 12500ft or MEA whichever is higher<br>Airway Path: Tabru, QC Intxn to Mepna, QC Intxn to Avron, QC Intxn to Gaspe, QC VOR"
po.paths=google.maps.geometry.encoding.decodePath("o}frHzehrKdh_Fo}}GngXwe^j~d@mom@??nmC}pCl{CekB`eDobA`jDaXljD`QdfDn{@j}ChdBdpCfjCb_CllDnjBziEbsAvaFjy@nsF~]r~FzAzbGiX``G}s@hvF_nAzeF_fBdoEe{BxrDiyd@trm@_dXzg^yh~Eno~G??wrCbcDybDvxBymDpjAqsDbZ{sDkUqnDefAadD{tBktCe`De`CofEchByfFulAa`G_o@kqGwOkzG|MqzGfm@erGbkAgaGpfBmhF|~BohE")
po.strokeColor="#2D2D5C"
po.fillColor="#2D2D5C"
po.zIndex=857.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.596991,-66.534012),new google.maps.LatLng(50.398616,-64.152089))
a.airClass="E"
a.altLow="2200AGL"
a.altHigh="18000"
a.airType="RNAV RT"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD101 PACIFIC OCEAN (Near Tofino, BC)<br>Class F<br>FL230 to FL600"
mt="Danger Area<br>Designated Altitude - FL230 to FL600<br>Time of Designation - Ocsl by NOTAM 36 hours PN<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_sdpHrpgmWteaCsodIhb`A??~s`Bib`A~}cHueaC??kb`A")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=902.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.0,-128.5),new google.maps.LatLng(50.0,-126.5))
a.airClass="F"
a.altLow="23000"
a.altHigh="60000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD106 PACIFIC OCEAN (Near Tofino, BC)<br>Class F<br>Surface to FL230"
mt="Danger Area<br>Designated Altitude - Surface to FL230<br>Time of Designation - Cont<br>User/Controlling Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ilblH~_bcWd`rD?xgO~}cHuygOn`bb@_hgNrqkJnyo@cl|KnljB{|pBtm}GivfMh{oFe_wMteaCsodI")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=537.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.333333,-135.616667),new google.maps.LatLng(53.5,-126.5))
a.airClass="F"
a.altLow="0"
a.altHigh="23000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD111 PACIFIC OCEAN (Near Tofino, BC)<br>Class F<br>FL230 to FL310"
mt="Danger Area<br>Designated Altitude - FL230 to FL310<br>Time of Designation - Ocsl by NOTAM, 28 days PN<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kevuHpd_xWjqpD}rvI?jb`AteaC?hb`A_~cH?_t`Bz|pB?xgO~}cHojhHp`bRqvlE_{iF")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=763.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.333333,-131.128578),new google.maps.LatLng(50.909181,-126.5))
a.airClass="F"
a.altLow="23000"
a.altHigh="31000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD703 HALIFAX, NS<br>Class F<br>Surface to FL300"
mt="Danger Area<br>Designated Altitude - Surface to FL300<br>Time of Designation - Ocsl by NOTAM, 48 hours PN<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("crnmG~~reK`{|CpfaFfn~@lkcD~bmA?eii@_seKcd`G?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=873.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.783333,-66.0),new google.maps.LatLng(44.316667,-64.0))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD734 HALIFAX, NS<br>Class F<br>Surface to FL200, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL200, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("crnmG~~reK?oyo@nh\\??nyo@oh\\?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.166667,-64.0),new google.maps.LatLng(44.316667,-63.75))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD735 HALIFAX, NS<br>Class F<br>Surface to FL200, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL200, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("crnmGndbdK?oyo@nh\\??nyo@oh\\?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.166667,-63.75),new google.maps.LatLng(44.316667,-63.5))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD736 HALIFAX, NS<br>Class F<br>Surface to FL200, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL200, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("shqlG~~reK?oyo@rp_@??nyo@sp_@?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.0,-64.0),new google.maps.LatLng(44.166667,-63.75))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD737 HALIFAX, NS<br>Class F<br>Surface to FL200, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL200, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("shqlGndbdK?oyo@rp_@??nyo@sp_@?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.0,-63.75),new google.maps.LatLng(44.166667,-63.5))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD738 HALIFAX, NS<br>Class F<br>Surface to FL200, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL200, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("crnmG~iqbK?_t`Bbz|@??~s`Bcz|@?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=971.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.0,-63.5),new google.maps.LatLng(44.316667,-63.0))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD739 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_wpkG~~reK?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.5,-64.0),new google.maps.LatLng(44.0,-63.5))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD740 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_wpkG~iqbK?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.5,-63.5),new google.maps.LatLng(44.0,-63.0))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD741 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_wpkG~to_K?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.5,-63.0),new google.maps.LatLng(44.0,-62.5))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD742 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_wpkG~_n|J?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.5,-62.5),new google.maps.LatLng(44.0,-62.0))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD743 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_bohG~~reK?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.0,-64.0),new google.maps.LatLng(43.5,-63.5))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD744 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_bohG~iqbK?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.0,-63.5),new google.maps.LatLng(43.5,-63.0))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD745 HALIFAX , NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_bohG~to_K?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.0,-63.0),new google.maps.LatLng(43.5,-62.5))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD746 HALIFAX, NS<br>Class F<br>Surface to FL300, Ocsl higher by NOTAM"
mt="Danger Area<br>Designated Altitude - Surface to FL300, Ocsl higher by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_bohG~_n|J?_t`B~s`B??~s`B_t`B?")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=963.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.0,-62.5),new google.maps.LatLng(43.5,-62.0))
a.airClass="F"
a.altLow="0"
a.altHigh="30000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD751 HALIFAX, NS<br>Class F<br>Surface to 5000ft"
mt="Danger Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("crnmG~_n|Jbz|@??~s`Bcz|@??_t`B")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=971.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.0,-63.0),new google.maps.LatLng(44.316667,-62.5))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYD752 HALIFAX, NS<br>Class F<br>Surface to 5000ft"
mt="Danger Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person should operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_mmeG~iqbKtp_@??~s`Bup_@??_t`B")
po.strokeColor="#800000"
po.fillColor="#800000"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.833333,-64.0),new google.maps.LatLng(43.0,-63.5))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYD"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR103 BENTINCK ISLAND, BC<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont Designated Altitude - Above 1500ft to 3000ft Time of Designation - Ocsl by NOTAM<br>User Agency - Range Control, Base Operations Centre, CFB Esquimalt (250) 391-4164/ 4162, (CSN) 255-2000 (ask operator for 391-4164/4162)<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("eb_fH~{_qVp@eZtCkYtFwWjIiUzKiRzMsNlOqJnP_F`QkA`QjApP`FlOnJxMtNxKfRlIjUtFtWtCjYp@dZq@bZuCjYuFtWmIjUyKfRyMtNmOnJqP`FaQjAaQkAoP_FmOqJ{MsN{KiRkIiUuFwWuCkY")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.300016,-123.565038),new google.maps.LatLng(48.333317,-123.514962))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR104 ESQUIMALT, BC<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Maritime Operations Centre, CFB Esquimalt (250) 363-2425/5848, (CSN) 255-2425<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("intfH|kmpVpUw|ArNtGqUv|AsNuG")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.436667,-123.446667),new google.maps.LatLng(48.442778,-123.430278))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR107 STRAIT OF GEORGIA, BC<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont Designated Altitude - Above 1000ft to 13500ft Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorizedby the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gx`lHnm|rV~uJxgOypCnh\\ilIdxU{gO?~oRojcA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.265,-124.2),new google.maps.LatLng(49.425,-123.85))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR108 MARY HILL, BC (Near Victoria, BC)<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Range Control, Base Operations Centre, CFB Esquimalt (250) 391-4164/ 4162, (CSN) 255-2000 (ask operator for 391-4164/4162<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("isdfHnzaqVr@gZtCkYtFuWjIkUxKiRzMsNlOqJpPaF`QkA`QjAnPbFlOnJzMtNxKhRlIhUrFvWtCjYr@dZs@bZuCjYsFvWmIhUyKhR{MtNmOnJoPbFaQjAaQkAqPaFmOqJ{MsNyKiRkIkUuFuWuCkY")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.328349,-123.575052),new google.maps.LatLng(48.361651,-123.524948))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR109 JUAN DE FUCA STRAIT, BC<br>Class F<br>Surface to unlimited"
mt="Restricted Area<br>Designated Altitude - Surface to unlimited<br>Time of Designation - Ocsl by NOTAM, 48 hours PN<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("srefHbnisVlwO?klB~oRe~Mvut@c{Q?foSwfhA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.280833,-124.291667),new google.maps.LatLng(48.471667,-123.916667))
a.airClass="F"
a.altLow="0"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR114 VICTORIA, BC<br>Class F<br>Surface to 500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 500ft<br>Time of Designation - Cont<br>User/Controlling Agency - District Director, Vancouver Island Regional Correctional Center (250) 727-5059<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("sz}fHttfpVXsLhAgLzBkKdDgJjEsHlF{FfGwDvGqB`He@~Gd@vGpBfGvDlFzFjEtHfDdJxBjKhAfLXrLYrLiAdLyBlKgDdJkEtHmFxFgGxDwGpB_Hd@aHe@wGqBgGwDmF{FkEuHeDeJ{BmKiAeL")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.474175,-123.423393),new google.maps.LatLng(48.490825,-123.398273))
a.airClass="F"
a.altLow="0"
a.altHigh="500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR115 WHITE LAKE, BC (Near Penticton)<br>Class F<br>Surface to 2700ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2700ft<br>Time of Designation - Cont Designated Altitude - Above 2700ft to 3200ft Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Operations Manager, Dominion Radio Astrophysical Observatory (250) 497-2313<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("geblHtkdyUp@wZtC{YtFgXlIwUxKuRzM_OlOwJnPeF`QkA`QlApPdFlOvJxM~NzKrRjIxUtFfXtCxYp@vZq@tZuCzYuFfXkIvU{KtRyM|NmOxJqPdFaQlAaQmAoPeFmOwJ{M}NyKuRmIyUuFeXuC{Y")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.298905,-119.656375),new google.maps.LatLng(49.332206,-119.605291))
a.airClass="F"
a.altLow="0"
a.altHigh="2700"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR130 VALEMOUNT, BC<br>Class F<br>18000ft to FL230"
mt="Restricted Area<br>Designated Altitude - 18000ft to FL230<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889- 0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("c}_eIh~fqUoh\\hrxJn_eDjhuDhhuDuvtCdkpAiwaDuas@oalEyqrEux{D_vgCnnqC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=813.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.366667,-121.2),new google.maps.LatLng(53.566667,-117.583333))
a.airClass="F"
a.altLow="18000"
a.altHigh="23000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR138 KENT MOUNTAIN, BC (Near Agassiz)<br>Class F<br>Surface to 1100ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1100ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Kent Mountain Institution (604) 796-2231<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("qsvkHdaufVuGiW??iFkX{BeZWwZlAqZnDoYjGsWbJ_UjLwQjNyMvOqIvP}DbQc@|PtBhPlG`OzKhM~OfKnSfHxVtG`Y??`F`W|BtX`@jYw@hYsClXgF|VwHxT}J~Q{LvNiN`KmO|FaPvBgPU}O_DeOgH}MeLiLwOiJ}RcGeV")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.241686,-121.860192),new google.maps.LatLng(49.276355,-121.80507))
a.airClass="F"
a.altLow="0"
a.altHigh="1100"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR139 WILLIAM HEAD, BC (Near Victoria, BC)<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, William Head Institution (250) 380-4642<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cgdfH|`~pVp@eZtCkYtFwWlIkUxKgRzMuNlOoJnPaF`QkA`QjApP`FlOpJxMrNzKhRjIjUtFvWtChYp@dZq@dZuCjYuFtWkIjU{KhRyMrNmOpJqP`FaQjAaQkAoPaFmOoJ{MuNyKgRmIkUuFwWuCkY")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.326405,-123.555607),new google.maps.LatLng(48.359706,-123.505504))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR140 MISSION, BC<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Mission Institution (604) 826-1231<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("iqdkHd_kiVp@uZtCyYtFcXjIwUxKqRzM}NlOuJpPeF`QmA`QlAnPdFlOvJzMzNxKrRlIvUrFbXtCxYr@rZs@rZuCvYsFbXmIvUyKrR{MzNmOvJoPdFaQlAaQmAqPcFmOwJ{M{NyKsRkIwUuFcXuCyY")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.147238,-122.311575),new google.maps.LatLng(49.18054,-122.260647))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR141 MATSQUI, BC (Abbotsford, BC)<br>Class F<br>Surface to 300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 300ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Pacific Institution (604) 870-7755<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("uxfjHlijiVjj@sG??vLa@rLnAdLzDlK`HfJ`KvHvM`G~ObEvQ~B`Sx@xSO|SwAnS{CrR_F`QyG`OmItLwJxIyKvFmLlCkj@tG??oM^kM}A{LsE{KgIoJmLyHkOwFsQqDoScBsTSaUz@_UjCaTvEsRxGqPtI}MfK{JlLoGdMwC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.006139,-122.323073),new google.maps.LatLng(49.039696,-122.28109))
a.airClass="F"
a.altLow="0"
a.altHigh="300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR156 ALBERT HEAD, BC (Near Victoria, BC)<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Range Control, Base Operations Centre, CFB Esquimalt (250) 391-4164/ 4162, (CSN) 255-2000 (ask operator for 391-4164/4162)<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}|lfHbpspVr@eZtCmYtFwWjIkUxKiRzMuNlOoJpPaF`QkA`QjAnP`FlOpJzMtNxKhRlIjUrFvWtCjYr@dZs@dZuCjYsFvWmIjUyKhR{MtNmOpJoP`FaQjAaQiAqPaFmOqJ{MuNyKiRkIkUuFwWuCkY")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.370849,-123.50174),new google.maps.LatLng(48.404151,-123.451594))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR157 COMOX, BC<br>Class F<br>7000ft to 17000ft"
mt="Restricted Area<br>Designated Altitude - 7000ft to 17000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 19 Wing Operations Centre, Comox (250) 339-8231 (CSN) 252-8231<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("y~g|Hx}sfWl_sDiaeJj`K?~bmAhdgBsvtCngaIeii@tp_@_cmAe|cB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=879.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.6,-127.6),new google.maps.LatLng(51.983333,-125.25))
a.airClass="F"
a.altLow="7000"
a.altHigh="17000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR160 WILLIAMS LAKE, BC (Chilcotin Military Reserve)<br>Class F<br>Surface to 10000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Base Operations, CFB Chilliwack (604) 858-1003, (CSN) 252-1003<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kvi|HvaajV?l_v@eee@?t@}{u@nce@oB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.992222,-122.680833),new google.maps.LatLng(52.187778,-122.399167))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR163 COMOX, BC<br>Class F<br>18000ft to unlimited"
mt="Restricted Area<br>Designated Altitude - 18000ft to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 19 Wing Operations Centre, Comox (250) 339-8231 (CSN) 252-8231<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("smm`InzcgW?ocdIrodI??reaCcbyEtghDoljBdtX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=882.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.0,-127.164722),new google.maps.LatLng(52.666667,-125.5))
a.airClass="F"
a.altLow="18000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR164 COMOX, BC<br>Class F<br>18000ft to unlimited"
mt="Restricted Area<br>Designated Altitude - 18000ft to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 19 Wing Operations Centre, Comox (250) 339-8231 (CSN) 252-8231<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("smm`I~u~|V?kpqIrodIt_L?todIsodI?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=881.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.0,-125.5),new google.maps.LatLng(52.666667,-123.766667))
a.airClass="F"
a.altLow="18000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR165 CHILLIWACK, BC<br>Class F<br>Surface to 4000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Mainland BC Range control, CFB Chilliwack, DND; (604) 858 - 1011 ext. 1123; (604) 798 - 3628, MainLandBC.RangeControl@forces.gc.ca<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("qmrjHjcteVd`BedFbfH??fxGuzF?qU`tAegBg_A{L{gA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.025,-121.699444),new google.maps.LatLng(49.087778,-121.640833))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR166 COMOX, BC<br>Class F<br>18000ft to unlimited"
mt="Restricted Area<br>Designated Altitude - 18000ft to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 19 Wing Operations Centre Comox (250) 339-8231 (CSN) 252-8231<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cangInq{hWbz|@oz{JjwaDkpqI?ztvSor_F~uv@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=851.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.666667,-127.45),new google.maps.LatLng(53.816667,-123.766667))
a.airClass="F"
a.altLow="18000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR172 WHISTLER, BC<br>Class F<br>Surface to 6000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Whistler Blackcomb Holdings Inc. (604) 938-7208<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and military aircraft on official duty flights."
po.paths=google.maps.geometry.encoding.decodePath("kbrpHzjomViuFidK|fAidBdoFtsJy`A|tB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.058492,-122.963825),new google.maps.LatLng(50.108439,-122.885325))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR203 CAMP WAINWRIGHT, AB<br>Class F<br>Surface to 17000ft, Ocsl higher by NOTAM"
mt="Restricted Area<br>Designated Altitude - Surface to 17000ft, Ocsl higher by NOTAM<br>Time of Designation - Cont<br>User Agency - Base Operations, Camp Wainwright (780) 842-1363 Ext 1202, (CSN) 530-1202<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oaraInqseTnp]?MksVryDAUsxIhyDCv@iaMnzAAf@g`MOghHMghIa@enG~k@BKikAok@O\\alVel@@C{iAwfFb@AjTauGHo@nmi@tzAE?|wCNzwGhAjVwhZ?}iBpeG?dbt@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.616275,-111.188889),new google.maps.LatLng(52.854167,-110.580878))
a.airClass="F"
a.altLow="0"
a.altHigh="17000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR204 COLD LAKE, AB AIR WEAPONS RANGE:<br>Class F<br>Surface to unlimited"
mt="Restricted Area<br>Designated Altitude - Surface to unlimited<br>Time of Designation - Cont<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake Terminal (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("srgmIr}fvS?~{|FhoE??nyo@ioE??zqrEutmB??{crP~bmA?tp_@nyo@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=894.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.733333,-111.3),new google.maps.LatLng(55.333333,-108.416667))
a.airClass="F"
a.altLow="0"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR208 BOWDEN, AB<br>Class F<br>Surface to 4100ft"
mt="Restricted Area<br>Designated Altitude - Surface to 4100ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Bowden Correctional Institute (403) 227-3391<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("m{i|Hj~yvTp@k\\tCm[tFuYjIcWzKySxM{OlOmKpPsF`QqA`QpAnPrFlOlKzM|OxKxSlIbWrFtYtCl[r@h\\s@h\\uCl[sFtYmIbWyKxS{MzOmOnKoPrFaQpAaQqAqPsFmOmKyM{O{KySkIcWuFuYuCm[")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.959738,-114.033975),new google.maps.LatLng(51.99304,-113.979913))
a.airClass="F"
a.altLow="0"
a.altHigh="4100"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR211 DRUMHELLER, AB<br>Class F<br>Surface to 3800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3800ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Drumheller Institution (403) 823-5101<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ie~xHpjynTr@_\\tCc[tFkYjIyVxKqSzMuOlOiKpPoF`QoA`QnAnPpFlOhKzMtOxKpSlIxVrFjYtCb[r@|[s@~[uC`[sFjYmIxVyKpS{MtOmOhKoPpFaQnAaQoAqPoFmOiK{MuOyKqSkIyVuFkYuCc[")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.408349,-112.719759),new google.maps.LatLng(51.441651,-112.666352))
a.airClass="F"
a.altLow="0"
a.altHigh="3800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR212 EDMONTON, AB<br>Class F<br>Surface to 3200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3200ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Edmonton Institution (780) 472-6052<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("m|ufI~nwrTp@o]tCq\\tFyZjIaXzKsTxMqPlO}KpP}F`QuA`QtAnP|FlO|KzMrPxKrTlI`XrFvZtCp\\r@n]s@n]uCp\\sFvZmIbXyKrT{MpPmO|KoP|FaQtAaQsAqP}FmO}KyMqP{KsTkIcXuFwZuCq\\")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.659738,-113.366999),new google.maps.LatLng(53.69304,-113.310779))
a.airClass="F"
a.altLow="0"
a.altHigh="3200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR220 GRANDE CACHE, AB<br>Class F<br>Surface to 4900ft"
mt="Restricted Area<br>Designated Altitude - Surface to 4900ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Grande Cache Institution (780) 827-4200<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ua{gInnfvUp@u]tCw\\tF{ZjIeXzKwTzMsPlO_LnP_G`QsA`QtApP|FlO`LxMrPxKvTlIdXtFzZtCt\\p@t]q@r]uCt\\uFzZmIdXyKvTyMrPmO`LqP|FaQtAaQsAoP_GmO_L{MsP{KwTkIeXuF{ZuCw\\")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.850016,-119.178238),new google.maps.LatLng(53.883317,-119.121762))
a.airClass="F"
a.altLow="0"
a.altHigh="4900"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR221 COLD LAKE, AB<br>Class F<br>7000ft to unlimited"
mt="Restricted Area<br>Designated Altitude - 7000ft to unlimited<br>Time of Designation - Cont 14Z Mon - 01Z Sat, O/T by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake ATC (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ojdmIh~djTstmBoyo@emwBwfhAi`Ymen@?oqdOhfnC??zcrPttmB?bgBhuzB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=856.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.75,-111.933333),new google.maps.LatLng(56.066667,-108.416667))
a.airClass="F"
a.altLow="7000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR222 COLD LAKE, AB<br>Class F<br>18000ft to unlimited"
mt="Restricted Area<br>Designated Altitude - 18000ft to unlimited<br>Time of Designation - Cont 14Z Mon - 01Z Sat O/T by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake ATC (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("soeuIru{dTkssAsvtC?{npMfbnAyqrE|y`J?xgOtp_@?ru|H??ivZ}fGwd[gIe|ZbuEkzYhqM?g{Cup_@oyo@_cmA?ifnC??nqdO")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=800.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.2,-111.066667),new google.maps.LatLng(56.5,-106.833333))
a.airClass="F"
a.altLow="18000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR223 COLD LAKE, AB<br>Class F<br>7000ft to 18000ft"
mt="Restricted Area<br>Designated Altitude - 7000ft to 18000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake ATC (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("soeuIru{dTkssAsvtC?{npMfbnAyqrE|y`J?xgOtp_@?ru|H??ivZ}fGwd[gIe|ZbuEkzYhqM?g{Cup_@oyo@_cmA?ifnC??nqdO")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=800.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.2,-111.066667),new google.maps.LatLng(56.5,-106.833333))
a.airClass="F"
a.altLow="7000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR224 COLD LAKE, AB<br>Class F<br>12500ft to FL290"
mt="Restricted Area<br>Designated Altitude - 12500ft to FL290<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake ATC (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_}xiIrc_vS?su|HygOup_@}y`J?|z{@iwaDdbyE?rx{D~s`B?l|zN??s}Sij_@iuVepYkuX{pSuhZmbL")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=821.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.7,-109.100556),new google.maps.LatLng(56.095,-106.0))
a.airClass="F"
a.altLow="12500"
a.altHigh="29000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR225 COLD LAKE, AB<br>Class F<br>18000ft to FL290"
mt="Restricted Area<br>Designated Altitude - 18000ft to FL290<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake ATC (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_dzwIbntqS_ibEomvLdmwBybfF~yuEdfgH}z{@hwaDgbnAxqrE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=847.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(55.783333,-107.916667),new google.maps.LatLng(57.5,-104.483333))
a.airClass="F"
a.altLow="18000"
a.altHigh="29000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR229 SUFFIELD, AB<br>Class F<br>Surface to unlimited"
mt="Restricted Area<br>Designated Altitude - Surface to unlimited<br>Time of Designation - Cont 0000Z(DT2300Z) 1 Apr - 0700Z(DT0600Z) 1 Dec Designated Altitude - Surface to 15000ft or as specified by NOTAM Time of Designation - Cont 0701Z(DT0601Z) 1 Dec - 2359Z(DT2259Z) 31 Mar<br>User/Controlling Agency - Operations Officer, CFB Suffield (403) 544-4310/4313, (CSN) 520-4310/ 4313<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kpfrHrfoeTm_o@?i`YygO?_g{C~oR?~`f@h`YhoEnwH?zzVl}Gzn@?fjnB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=959.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.3375,-111.166667),new google.maps.LatLng(50.716667,-110.283333))
a.airClass="F"
a.altLow="0"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR230 SUFFIELD, AB<br>Class F<br>Surface to unlimited or as specified by NOTAM"
mt="Restricted Area<br>Designated Altitude - Surface to unlimited or as specified by NOTAM<br>Time of Designation - Cont<br>User/Controlling Agency - Operations Officer, CFB Suffield (403) 544-4310/4313, (CSN) 520-4310/ 4313<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("omuqHrfoeT{aP??gjnBfrVv|B?vvaBkoEvtG")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=977.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.216667,-111.166667),new google.maps.LatLng(50.3375,-110.596547))
a.airClass="F"
a.altLow="0"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR231 SUFFIELD, AB<br>Class F<br>Surface to 6000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Operations Officer, CFB Suffield (403) 544-4310/4313, (CSN) 520-4310/ 4313<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ymbrHxnreTvC}sA`MiqA`VelAd^wdApe@g{@pk@wo@jp@}b@ps@}Tdu@kFfu@nFps@bUfp@`c@pk@zo@le@d{@d^tdA~UblA`MbqAvCvsAwCtsAaMdqA_VblAe^tdAme@d{@qk@zo@gp@`c@qs@`Ugu@nFeu@iFqs@}Tkp@}b@qk@yo@qe@e{@e^wdAaVglAaMiqA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.216714,-111.261479),new google.maps.LatLng(50.316619,-111.105187))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR232 NAMAO, AB<br>Class F<br>Surface to 3000ft, Ocsl Surface to below 3400ft by NOTAM"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft, Ocsl Surface to below 3400ft by NOTAM<br>Time of Designation - Cont<br>User Agency - 408 THS Ops, CFB Edmonton (780) 973-4011 Ext 4163, (CSN) 528-4163<br>Controlling Agency - SATCO, 408 Sqn Edmonton (780) 973-4011 Ext 4108<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("utmfIjmusTccL???oEiuApA{uA|IatA`RyoAtYmiAp`@}`Anf@wv@lk@_k@`o@a^nq@gPlr@aB`r@hJxo@fZ?~nQ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.650833,-113.492222),new google.maps.LatLng(53.71909,-113.391337))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR233 NAMAO, AB<br>Class F<br>Surface to 3400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3400ft<br>Time of Designation - Cont<br>User Agency - Garrison Ops, CFB Edmonton (780) 973-1624, (CSN) 528-4108<br>Controlling Agency - SATCO, 408 Sqn Edmonton (780) 973-4011 Ext 4108<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("csqfItqksTSco@c|D{UEl`C||Dmy@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.671067,-113.451067),new google.maps.LatLng(53.701453,-113.430353))
a.airClass="F"
a.altLow="0"
a.altHigh="3400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR234 FOREMOST, AB<br>Class F<br>Surface to 10000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - Ocsl by NOTAM, August 1 to May 31, 24 hr PN<br>User Agency - The Village of Foremost (403) 488-7208 or (406) 890-4514<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oqgmHf}wiT?g_LfuD??glW~~A{aP?et[dwAY`p[{I?xq|@udE?bMx}T}fa@K")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.318889,-111.866664),new google.maps.LatLng(49.523603,-111.438889))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR235 FOREMOST, AB<br>Class F<br>4000ft to 10000ft"
mt="Restricted Area<br>Designated Altitude - 4000ft to 10000ft<br>Time of Designation - Ocsl by NOTAM, August 1 to May 31, 24 hr PN<br>User Agency - The Village of Foremost (403) 488-7208 or (406) 890-4514<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ac|lHzvdgT?wvj@ewA??u`k@hxAqhIwAg|kAv|f@?cFngf@dpJ?cFlwfC_mUqJap[zI")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=961.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.202869,-111.440736),new google.maps.LatLng(49.479083,-110.544589))
a.airClass="F"
a.altLow="4000"
a.altHigh="10000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR236 FOREMOST, AB<br>Class F<br>10000ft to 18000ft"
mt="Restricted Area<br>Designated Altitude - 10000ft to 18000ft<br>Time of Designation - Ocsl by NOTAM, August 1 to May 31, 24 hr PN<br>User Agency - The Village of Foremost (403) 488-7208 or (406) 890-4514<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oqgmHf}wiT?g_LfuD??glW~~A{aP?et[dwAY?wvj@ewA??u`k@hxAqhIwAg|kAv|f@?cFngf@dpJ?cFlwfC_mUqJ?xq|@udE?bMx}T}fa@K")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=945.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.202869,-111.866664),new google.maps.LatLng(49.523603,-110.544589))
a.airClass="F"
a.altLow="10000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR251 LETHBRIDGE, AB<br>Class F<br>Surface to 12000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 12000ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Lethbridge Rocketry Association (403) 382-0746<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("aewlHp`gkTdBqv@jH{t@jNqq@xSul@tXmf@t\\}^|_@qV~a@kMdc@{Cbc@|C`b@lMz_@rVt\\|^rXlf@xStl@hNnq@jHxt@dBnv@eBnv@kHzt@iNnq@ySrl@sXlf@u\\~^{_@pVab@nMcc@zCec@yC_b@kM}_@qVu\\}^uXmf@ySul@kNqq@kH{t@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.373087,-112.158956),new google.maps.LatLng(49.43969,-112.056599))
a.airClass="F"
a.altLow="0"
a.altHigh="12000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR252 LETHBRIDGE, AB<br>Class F<br>Surface to FL230"
mt="Restricted Area<br>Designated Altitude - Surface to FL230<br>Time of Designation - Ocsl daylight by NOTAM<br>User/Controlling Agency - Lethbridge Rocketry Association (403) 382-0746 or (403) 380-0240<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}qjmHbmsjT|FejCnV_fCle@s}B`s@kqBd_AuaBjiA}nAhqAyy@rvA{b@jyA}JhyAjKpvAhc@dqAbz@diAboA`_AtaB|r@dqBhe@h}BlVpeCzFviC{FxiCmVpeCie@h}B}r@dqBa_AtaBeiAboAeqAbz@qvAhc@iyAjKkyA}JsvA{b@iqA{y@kiA}nAe_AsaBas@kqBme@s}BoV_fC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.372524,-112.135464),new google.maps.LatLng(49.539031,-111.879313))
a.airClass="F"
a.altLow="0"
a.altHigh="23000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR268 COLD LAKE, AB Air Combat Manoeuvering Range:<br>Class F<br>7000ft to FL260"
mt="Restricted Area<br>Designated Altitude - 7000ft to FL260<br>Time of Designation - 15-01Z (DT 14-2359Z) Mon - Fri. O/T Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake Terminal Control (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("asxeIfw_cThtCy||Csqg@iwcCwqw@~}uAh`YzziAegBn{vA|udAv}g@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=939.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.519167,-110.759722),new google.maps.LatLng(54.016667,-109.271389))
a.airClass="F"
a.altLow="7000"
a.altHigh="26000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR269 COLD LAKE, AB Air Combat Manoeuvering Range:<br>Class F<br>7000ft to FL260"
mt="Restricted Area<br>Designated Altitude - 7000ft to FL260<br>Time of Designation - 15-01Z (DT 14-2359Z) Mon - Fri. O/T Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake Terminal Control (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("skxiIf_|vSor{A`s@ruVtpwBnyo@?jaSwdyB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=964.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.197222,-109.4),new google.maps.LatLng(54.671389,-108.774444))
a.airClass="F"
a.altLow="7000"
a.altHigh="26000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR270 COLD LAKE, AB<br>Class F<br>7000ft to FL260"
mt="Restricted Area<br>Designated Altitude - 7000ft to FL260<br>Time of Designation - 15-01Z (DT 14-2359Z) Mon - Fri. O/T Ocsl by NOTAM<br>User Agency - 4 Wing Operations, CFB Cold Lake (780) 840-8000 Ext 8595, (CSN) 690-8595<br>Controlling Agency - Cold Lake Terminal Control (780) 840-8594, (CSN) 690-8594<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("arxkIrmuiTt|HcpiCl_q@woJzr^lm~B_qzAlrU")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=961.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.057133,-111.853864),new google.maps.LatLng(54.525939,-111.085569))
a.airClass="F"
a.altLow="7000"
a.altHigh="26000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR301 CAMP DUNDURN, SK<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont Designated Altitude - South of latitude N51Â°54', above 3000ft to FL280 Time of Designation - Ocsl by NOTAM<br>User Agency - 17 Wing Operations, Winnipeg (204) 833-2700, (CSN) 257-2700<br>Controlling Agency - Winnipeg ACC (204) 983-8338<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("wjf|HfvkjS?s|]t_LwtGnh\\??jrf@eii@?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.758333,-106.725),new google.maps.LatLng(51.975,-106.522222))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR302 REGIONAL PSYCHIATRIC CENTRE, SK (Saskatoon, SK)<br>Class F<br>Surface to 1900ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1900ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Regional Psychiatric Centre (306) 975-5400<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}il}HrqsiSXuMhAiMxBkLfDcKjEmIlFoGfGgEvGyB~Gi@`Hh@vGxBfGfElFnGjElIdDbKzBjLhAhMXtMYvMiAfM{BlLeDbKkElImFnGgGfEwGxBaHh@_Hi@wGyBgGgEmFoGkEmIgDcKyBkLiAiM")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.152786,-106.61496),new google.maps.LatLng(52.169436,-106.587817))
a.airClass="F"
a.altLow="0"
a.altHigh="1900"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR303 MOOSE JAW, SK<br>Class F<br>Surface to 10000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Twr is open. O/T Ocsl by NOTAM<br>User/Controlling Agency - Moose Jaw Tower, 15 Wing Moose Jaw (306) 694-2222 Ext 5574, (CSN) 826-5574<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("yjapHrrweS?cpnAdxUebDbxUg^?jax@??ytAbb@koAty@wgA`nA_~@b`Bkr@joBie@f{B_WrcCcH~gCbG|gCup_@?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=978.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.75,-105.966667),new google.maps.LatLng(49.983333,-105.528333))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR309 PRINCE ALBERT, SK<br>Class F<br>Surface to 1900ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1900ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Saskatchewan Penitentiary (306) 765-8000<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("suvcIl`zdSVaNjAsMxBwLfDkKjEuIlFuGfGmEvG{B~Gi@`Hh@vGzBfGlEjFtGlEtIdDlKzBtLhArMX`NYbNiArM{BtLeDjKmEvIkFtGgGjEwG|BaHh@_Hi@wG}BgGkEmFuGkEuIgDmKyBuLkAsM")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.188897,-105.829175),new google.maps.LatLng(53.205548,-105.80138))
a.airClass="F"
a.altLow="0"
a.altHigh="1900"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR316 MAPLE CREEK, SK<br>Class F<br>Surface to 5000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, OKIMAW OHCI Healing Lodge<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cqxnHd`|ySp@_[tCcZtFmXjIaVzKyRxMcOlO{JpPgF`QmA`QlAnPhFlOzJzMbOxKxRlI~UrFlXvCbZp@~Zq@|ZwCbZsFlXmI~UyKzR{M`OmOzJoPhFaQlAaQmAqPgFmO{JyMcO{KyRkI_VuFoXuCcZ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.741127,-109.291885),new google.maps.LatLng(49.774429,-109.240337))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR401 PINAWA, MB<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Manager, Protective Services Branch (204) 753-2311 Ext 2224<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gpqqHv{~hQ~BseAvJocAdRe_A~Xay@b_@aq@bd@sg@bh@{\\xj@iQdl@cEdl@fEvj@jQbh@~\\bd@rg@`_@`q@~X~x@bRd_AvJjcA|BneA}BneAwJjcAcRb_A_Y~x@a_@`q@cd@tg@ch@|\\wj@jQel@fEel@cEyj@gQch@{\\cd@sg@c_@aq@_Yay@eRg_AwJmcA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.146707,-96.074737),new google.maps.LatLng(50.22996,-95.944707))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR402 CAMP SHILO, MB<br>Class F<br>Surface to 3000ftASL"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ftASL<br>Time of Designation - Cont<br>User/Controlling Agency - Range Control Commissionaire (204) 765-3000 Ext 3333, (CSN) 258-3333<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}c}nH`ik_RHwdAnyAEEldAsyAN")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.783389,-99.677778),new google.maps.LatLng(49.797917,-99.666583))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR405 STONY MOUNTAIN, MB<br>Class F<br>Surface to 1800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1800ft<br>Time of Designation - Cont<br>User Agency - Warden, Stony Mountain Institution (204) 344-5111<br>Controlling Agency - Winnipeg ACC (204) 983-8337<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("emupHn_mpQv@skCdhCu@w@fzBkq@`RyuA?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.063889,-97.228889),new google.maps.LatLng(50.086111,-97.206111))
a.airClass="F"
a.altLow="0"
a.altHigh="1800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR406 CAMP SHILO, MB<br>Class F<br>Surface to 4000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Range Control Commissionaire (204) 765-3000 Ext 3333, (CSN) 258-3333<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cxfoHjj`_Rua@ezIvmGifKwAr_VihFz@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.809458,-99.621667),new google.maps.LatLng(49.852778,-99.503503))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR409 STONY MOUNTAIN, MB<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont<br>User/Controlling Agency - Bristol Aerospace Ltd., Rockwood Plant, Safety Officer or Administrative Services Manager (204) 344-5545<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oe_qHttapQjAii@~E_h@pJme@pNya@fR_]hUiWtW}PfY}IbZuBbZvBfY~ItW|PfUhWfR~\\rNva@lJle@`F~g@jAfi@kAfi@aF|g@mJle@sNva@gR~\\gUjWuW|PgY~IcZtBcZsBgY_JuW{PiUkWgR_]qNwa@qJme@_Fah@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.086135,-97.209779),new google.maps.LatLng(50.136087,-97.131887))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR410 CAMP SHILO, MB<br>Class F<br>Surface to FL280"
mt="Restricted Area<br>Designated Altitude - Surface to FL280<br>Time of Designation - Cont Designated Altitude - Surface to FL350 Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Range Control Commissionaire (204) 765-3000 Ext 3333, (CSN) 258-3333<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gj_oHvu|}QdfAgsPnqP{LuG}}KnnMf_AtdC~wEgyAlp]ckFvrLaoJbaQ}sOvbAdDgbi@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.613611,-99.654722),new google.maps.LatLng(49.81,-99.280278))
a.airClass="F"
a.altLow="0"
a.altHigh="28000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR412 ROLAND, MB<br>Class F<br>Surface to 8800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 8800ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 17 Wing Operations, Winnipeg (204) 833-2700, 1-877-283-6827 (CSN) 257-2700 User/Controlling Agency - Manitoba Rocketry Group (204) 227-8004<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oltlH~ulsQdBqv@jH{t@jNoq@xSul@rXmf@v\\}^z_@qV`b@kMbc@yCdc@zC~a@nMz_@pVv\\~^rXjf@xStl@hNnq@jHxt@bBlv@cBnv@kHxt@iNnq@ySrl@sXlf@w\\~^{_@pV_b@lMec@|Ccc@yCab@mM{_@oVw\\__@sXkf@ySul@kNqq@kH{t@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.358921,-97.770053),new google.maps.LatLng(49.425524,-97.667725))
a.airClass="F"
a.altLow="0"
a.altHigh="8800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR501 MEAFORD RANGE, ON<br>Class F<br>Surface to 12000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 12000ft<br>Time of Designation - Cont Designated Altitude - Above 12000ft to 15000ft Time of Designation - Ocsl by NOTAM<br>User Agency - MTFC Meaford Range Control (519) 538-1371 Ext 6738/6991 (CSN) 260-6738/6991<br>Controlling Agency - Toronto ACC (905) 676-4509<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ia|oGvi~kNmaE`R?yfU`YkiF|cDu~CzjDkPftCvyE`xEfnRwuOdeG")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.627778,-80.772778),new google.maps.LatLng(44.744444,-80.593056))
a.airClass="F"
a.altLow="0"
a.altHigh="12000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR502 CFB BORDEN, ON<br>Class F<br>Surface to 7000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Base Ops/Duty Watch Officer (705) 424-1200 Ext 1381/2445 (CSN) 270-1381/2445, Range Control 24/7 (CSN) 270-2164<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("izqmGxvdgN?ygOnwH?dgBhoE`s@nwHwsM?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.258333,-79.983333),new google.maps.LatLng(44.333333,-79.9))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR504 JOYCEVILLE, ON<br>Class F<br>Surface to 1400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1400ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Joyceville Institution (613) 542-4554<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("s~ymGxs_qMp@gXvCoWrF_VlIySxK}PzMqMlOuInPqE`QgAbQfAnPpElOvIzMpMxK|PjIvStF~UtCnWp@fXq@hXuCnWuF|UkIxSyK|P{MpMmOtIoPrEcQdAaQeAoPqEmOwI{MoMyK}PmIySsF_VwCoW")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.341683,-76.376066),new google.maps.LatLng(44.374984,-76.329489))
a.airClass="F"
a.altLow="0"
a.altHigh="1400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR505 MILLHAVEN, ON (Bath, ON)<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Millhaven Institution (613) 352-3371<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("elzlGxwmsMp@eXtCmWtF}UjIwSzK{PxMoMnOuInPqE`QeA`QdApPpElOtIxMpMxKzPlItStF|UtClWp@dXq@dXuClWuF|UmIvSyKzPyMnMmOtIqPpEaQfAaQeAoPqEoOuIyMoM{K}PkIuSuF}UuCmW")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.180016,-76.776002),new google.maps.LatLng(44.213317,-76.729553))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR506 WARKWORTH, ON<br>Class F<br>Surface to 1400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1400ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Warkworth Institution (705) 924-2210<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("of}lG`}{yMr@gXtCmWrF}UlIwSxK{PzMoMlOuInPqEbQeA`QdAnPpElOtIzMpMxKzPjIvStF|UtClWp@dXq@dXuClWuF|UkIvSyKzP{MnMmOvIoPnEaQfAcQeAoPqEmOuI{MoMyK}PmIuSsF}UuCoW")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.19446,-77.831563),new google.maps.LatLng(44.227762,-77.785103))
a.airClass="F"
a.altLow="0"
a.altHigh="1400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR507 COLLINS BAY, ON (Kingston, ON)<br>Class F<br>Surface to 520ft"
mt="Restricted Area<br>Designated Altitude - Surface to 520ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Collins Bay Institution (613) 545-8598<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("azamG`{frMr@gXtCmWrF_VlIwSxK{PzMoMlOuInPqEbQeA`QdAnPpElOtIzMpMxKzPjIvStF|UtClWp@fXq@dXuClWuF|UkIvSyK|P{MnMmOtIoPpEaQfAcQgAoPoEmOwI{MoMyK{PmIwSsF}UuCoW")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.218071,-76.57685),new google.maps.LatLng(44.251373,-76.530372))
a.airClass="F"
a.altLow="0"
a.altHigh="520"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR508 HAZELDEAN, ON<br>Class F<br>Surface to 1400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1400ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Natural Resources Canada, CANMET Facility (613) 995-1275<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_etsGdmbnMRgIz@_I`BkHdCmGbDiF|D{DpEkC~EuAfF[fFZ~EtApEjC|DzDbDhFdClG`BjHz@~HRfIShI{@|HaBjHeClGcDhF}DzDqEjC_FtAgFZgF[_FuAqEkC}D{DcDiFeCmGaBkH{@}H")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.315006,-75.885028),new google.maps.LatLng(45.328327,-75.866083))
a.airClass="F"
a.altLow="0"
a.altHigh="1400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR510 CHALK RIVER, ON<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont<br>User/Controlling Agency - General Manager, Facilities & Support, AECL (613) 584-3311 Ext 44476 (days)/44400 (24hrs)<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("q}zwGrqpwM??ei@hQwj@fFak@mB_j@cMug@kWgd@}`@w_@qi@iZ{p@aT{v@eMc{@}Ew}@Nq~@|Fo}@dNuz@|Tcv@`[_p@l`@mh@xd@u_@`h@_Vdj@uK`k@_Apj@rHyuAddFfzBjcN")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.018333,-77.4266),new google.maps.LatLng(46.074848,-77.306792))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR511 CFB PETAWAWA, ON<br>Class F<br>Surface to FL200"
mt="Restricted Area<br>Designated Altitude - Surface to FL200<br>Time of Designation - Cont<br>User/Controlling Agency - Duty Centre (CSN) 677-5088, Range Control 24/7 (CSN) 677-5203<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ykhwGxfwvMpsDlhEpqIxph@acZ`lNufEyfUp\\qmE}dEojW|cDyrLrgFtaGl~HitC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.840278,-77.616667),new google.maps.LatLng(46.038056,-77.275278))
a.airClass="F"
a.altLow="0"
a.altHigh="20000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR512 CFB PETAWAWA, ON<br>Class F<br>Surface to 2800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2800ft<br>Time of Designation - Cont<br>User/Controlling Agency - Duty Centre (CSN) 677-5088, Range Control 24/7 (CSN) 677-5203<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ax`wGliewMl@iEg@kJnI{QrAiMd@i[~D_Sl@id@~CwK{Iaz@if@acBad@uZ}w@{w@ya@w_AuzA`FpsDlhEd~@dxF")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.880025,-77.364875),new google.maps.LatLng(45.923333,-77.291647))
a.airClass="F"
a.altLow="0"
a.altHigh="2800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR514 IPPERWASH, ON<br>Class F<br>Surface to 6000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Department of National Defence ContaminatedSites.SitesContamines@forces.gc.ca (613) 850-3907<br>Controlling Agency - Toronto ACC (905) 676-4509<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ci`gGjkasNvCmiA`MegA~UwbAf^c|@ne@ys@rk@yi@hp@o^rs@iRdu@mEdu@pEps@jRhp@r^pk@xi@le@xs@d^b|@~UrbA`MbgAvChiAwChiAaM`gA_VrbAe^b|@me@xs@qk@zi@ip@p^qs@jReu@pEeu@mEss@gRip@o^sk@yi@oe@ys@g^e|@_VubAaMegA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.160603,-82.000759),new google.maps.LatLng(43.260508,-81.863686))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR518 NIAGARA FALLS, ON<br>Class F<br>Surface to 3500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Transport Canada, Hamilton TC Centre (905) 679-3477<br>Operating Procedures - No person shall operate an aircraft, including model aircraft, within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and military aircraft on official duty flights.<br>Excluding that portion outside of Canadian airspace."
po.paths=google.maps.geometry.encoding.decodePath("}edfG`asaNdBqp@jH_o@hN_l@zSug@rXcb@v\\o[z_@_T`b@yKbc@iCbc@jC`b@zKz_@~St\\n[tXbb@vStg@jN~k@jH|n@bBnp@cBlp@kH|n@kN~k@wStg@uXbb@u\\n[{_@~Sab@|Kcc@hCcc@iCab@yK{_@_Tw\\m[sXcb@{Swg@iN_l@kH_o@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.050032,-79.119207),new google.maps.LatLng(43.116635,-79.028015))
a.airClass="F"
a.altLow="0"
a.altHigh="3500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR531 CONNAUGHT RANGE, ON<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Connaught Range Control (613) 991-5740 (CSN) 991-5740<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_ebtGbnjnMjoEioEbgBhoEioEjoEegBkoE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.35,-75.95),new google.maps.LatLng(45.4,-75.883333))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR533 KITCHENER, ON<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Grand Valley Institution<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ee_hG|c~iNp@{WtCcWtFuUlImSxKsPzMiMlOqInPmE`QeA`QdApPlElOpIxMhMzKtPjIlStFrUtCbWp@zWq@xWuCbWuFrUkIlS{KtPyMhMmOpIqPlEaQdAaQcAoPoEmOoI{MiMyKuPmImSuFsUuCcW")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.385294,-80.464029),new google.maps.LatLng(43.418595,-80.418194))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR536 DWYER HILL, ON<br>Class F<br>Surface to 2500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Dwyer Hill Training Centre D Ops O Air Aviation (613) 838-4756 Ext 2580<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("izsrG~_onMvsF}`H~~E`oJipF`qEmbFe_H")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.087778,-75.986111),new google.maps.LatLng(45.162778,-75.893611))
a.airClass="F"
a.altLow="0"
a.altHigh="2500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR537 PARLIAMENT HILL, ON<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Parliamentary Protective Service Operational Support Center (613) 992- 7217 or requestscyr537demandes@pps-spp.parl.gc.ca<br>Operating Procedures - No person shall operate an aircraft, including model aircraft, within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and military aircraft on official duty flights and IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("eihtGh~_mMRiIz@_I`BkHdCmGbDiF|D}DpEkC~EuAfF[fFZ~EtApEjC|D|DbDhFdCnG`BhHz@~HRhIShI{@|HaBjHeCnGcDhF}D|DqEjC_FrAgF\\gF[_FuAqEkC}D}DcDiFeCoGaBiH{@_I")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.418076,-75.708584),new google.maps.LatLng(45.431396,-75.689605))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR538 RIDEAU HALL, ON<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont<br>User/Controlling Agency - RCMP Ottawa Operational Communication Centre (613) 952-4204 or Protective_Policing@rcmp-grc.gc.ca<br>Operating Procedures - No person shall operate an aircraft, including model aircraft, within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and military aircraft on official duty flights and IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("mbltGtz}lMRiIz@}H`BkHbCoGdDiF|D}DpEkC~EuAfF[dFZ~EtArEjC|D|DbDhFbCnG`BjH|@|HRhIShI}@~HaBjHcClGcDhF}D|DsEjC_FtAeF\\gF]_FuAqEkC}D{DeDiFcCoGaBkH{@_I")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.437479,-75.697771),new google.maps.LatLng(45.450799,-75.678785))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR540 CFB PETAWAWA, ON<br>Class F<br>3000ft to FL180"
mt="Restricted Area<br>Designated Altitude - 3000ft to FL180<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Petawawa Military Flight Advisory Unit (MFAU), (613) 687-5511 Ext 7789/ 7702 or CFB Petawawa Range Control (613) 687-5511 Ext 5203<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("yd{xGnrwzM?shi@dkpA_jm@koElim@yziAdii@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=969.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.766667,-77.95),new google.maps.LatLng(46.183333,-77.496142))
a.airClass="F"
a.altLow="3000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR541 CFB PETAWAWA, ON<br>Class F<br>3000ft to FL180"
mt="Restricted Area<br>Designated Altitude - 3000ft to FL180<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Petawawa Military Flight Advisory Unit (MFAU), (613) 687-5511 Ext 7789/ 7702 or CFB Petawawa Range Control (613) 687-5511 Ext 5203<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("yd{xGzhmyM?qaf@n}`@}dGcI|eAtfExfUa{f@vxU")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.979167,-77.733425),new google.maps.LatLng(46.183333,-77.491425))
a.airClass="F"
a.altLow="3000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR542 CFB PETAWAWA, ON<br>Class F<br>1000ft to FL180"
mt="Restricted Area<br>Designated Altitude - 1000ft to FL180<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Petawawa Military Flight Advisory Unit (MFAU), (613) 687-5511 Ext 7789/ 7702 or CFB Petawawa Range Control (613) 687-5511 Ext 5203<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kg|vGfbwwMvmQ}kC?pgKakMdcGuaCy~N")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.766667,-77.537778),new google.maps.LatLng(45.861186,-77.433333))
a.airClass="F"
a.altLow="1000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR543 CFB PETAWAWA, ON<br>Class F<br>4500ft to FL180"
mt="Restricted Area<br>Designated Altitude - 4500ft to FL180<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Petawawa Military Flight Advisory Unit (MFAU), (613) 687-5511 Ext 7789/ 7702 or CFB Petawawa Range Control (613) 687-5511 Ext 5203<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cdnxG|qquM~`f@s_Luh@ntq@m~HhtCsgFuaGgmB`bH_aPogC?aaf@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.916667,-77.321844),new google.maps.LatLng(46.116667,-77.033333))
a.airClass="F"
a.altLow="4500"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR544 CFB PETAWAWA, ON<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Duty Centre (CSN) 677-5088, Range Control 24/7 (CSN) 677-5203<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cpewGv_wvMi\\ipA_MuLgPfKc^xxAtzAaF")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.908669,-77.292778),new google.maps.LatLng(45.923333,-77.276442))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR601 MIRABEL, QC<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont daylight, O/T by NOTAM<br>User Agency - Bell Helicopter/Textron (450) 437-8039<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("iz_uG|`_cM_vVm{Rde@maEcbCk_FoNsjH??d|BMfzB|_@ntBr}@dkBnyAx~ArrBpoAhhCz}@|yCjj@~fDdVboD??jH|F??nf@raCzXnhCvKdlC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.551897,-74.055994),new google.maps.LatLng(45.690686,-73.839145))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR602 VALCARTIER, QC<br>Class F<br>7000ft to 17000ft"
mt="Restricted Area<br>Designated Altitude - 7000ft to 17000ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - G3 AIR, Valcartier, QC (418) 844-5000 Ext 6189 (Office), (418) 844-5000 Ext 6099 (Twr) or (418) 561-6876 (Cell)<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("c_e_Hbf}uL?{__Bbii@cs@tcI|eFwsM|~EciKbbRd_OfkVtqY}pZ|aBvwCsz[dn`@?vg]cii@?")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=970.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.852222,-71.916667),new google.maps.LatLng(47.216667,-71.416667))
a.airClass="F"
a.altLow="7000"
a.altHigh="17000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR603 VALCARTIER, QC<br>Class F<br>Surface to 17000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 17000ft<br>Time of Designation - Cont Designated Altitude - Above 17000ft to FL270 Time of Designation - Ocsl by NOTAM<br>User Agency - Range and Training Area Control, ASU Valcartier (418) 844-3710, (CSN) 666-3710<br>Controlling Agency - Surface to 17000ft, Base Operations, Valcartier (CTSE) (418) 844-5000 Ext 3710, (CSN) 666-3710, Above 17000ft to FL270, Quebec Terminal Control (514) 633-3671<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("i|`}GluxsLuqY|pZe_OgkVbiKcbRvsM}~E~rNj|T")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.868056,-71.706944),new google.maps.LatLng(47.086111,-71.453611))
a.airClass="F"
a.altLow="0"
a.altHigh="17000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR604 ST FRÃ‰DÃ‰RIC, QC<br>Class F<br>Surface to 4000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - SÃ»retÃ© du QuÃ©bec, Coordinator airlift program (450) 445-5097 or (514) 247-7563<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cdlyGlbrpLr@cYtCkXrFwVlIoTxKqQzMaNlOaJnPyEbQgA`QhAnPvElObJzM`NxKpQjIlTtFxVtChXp@bYq@bYuChXuFxVkInTyKnQ{M`NmObJoPvEaQhAcQgAoPyEmOaJ{MaNyKqQmIoTsFwVuCkX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.23696,-71.064636),new google.maps.LatLng(46.270262,-71.016475))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR605 FARNHAM, QC<br>Class F<br>Surface to 1200ft, Ocsl Surface to 3500ft by NOTAM"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft, Ocsl Surface to 3500ft by NOTAM<br>Time of Designation - Cont User<br>Controlling Agency - Farnham Range, Control Officer (450) 293-8163 Ext 5225 (CSN) 273-5225.<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency"
po.paths=google.maps.geometry.encoding.decodePath("}elsGhlo|LgeAlf@cTwf@{sBzGyh@kWowAaGqDnmAj^~t@pj@nCxYfnFb{AyCjgCqeElMcbBQ{p@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.287428,-73.049231),new google.maps.LatLng(45.342578,-72.989031))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR606 LAC SAINT PIERRE, QC<br>Class F<br>Surface to 10000ft, Ocsl higher by NOTAM"
mt="Restricted Area<br>Designated Altitude - Surface to 10000ft, Ocsl higher by NOTAM<br>Time of Designation - Cont 13-01Z (DT12-00Z) Mon - Fri O/T by NOTAM<br>User Agency - The Superintendent, Proof and Experimental Test Establishment (819) 293-2004<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("oehyGvemzL?bjLfxGflPzpCbhQdbDvrEpmE{iCylFsv^dgBskCcmH}wLwzFw}BklBppA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.1225,-72.938889),new google.maps.LatLng(46.25,-72.640833))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR608 DONNACONA, QC<br>Class F<br>Surface to 1200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Donnacona Institution (418) 285-2455<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("qda|Gd_qtLp@iYtCqXtF_WjIsTxKwQzMcNlOeJpPyE`QiA`QhAnPzElObJzMdNxKtQlItTrF|VtCpXr@hYs@jYuCnXsF~VmIrTyKtQ{MdNmOdJoPzEaQhAaQiAqP{EmOcJ{MeNyKuQkIuTuF}VuCqX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.672238,-71.714551),new google.maps.LatLng(46.70554,-71.666004))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR610 COWANSVILLE, QC<br>Class F<br>Surface to 600ft"
mt="Restricted Area<br>Designated Altitude - Surface to 600ft<br>Time of Designation - Cont<br>User/Controlling Agency - Operations Centre, Cowansville Institution (450) 263-3073 Ext. 2930<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("aabsGzhg{Lp@uXtC{WtFkVjIaTxKgQzMwMlO{IpPuE`QeA`QfAnPrElO|IzMvMxKdQlIbTrFhVtCzWr@tXs@rXuCzWsFhVmIbTyKdQ{MvMmO|IoPrEaQfAaQeAqPuEmO{I{MwMyKgQkIaTuFkVuC{W")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.202238,-72.811138),new google.maps.LatLng(45.23554,-72.763862))
a.airClass="F"
a.altLow="0"
a.altHigh="600"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR612 VALCARTIER, QC<br>Class F<br>Surface to 2700ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2700ft<br>Time of Designation - Cont<br>User Agency - Range and Training Area Control, ASU Valcartier (418) 844-3710, (CSN) 666-3710<br>Controlling Agency - Base Operations, Valcartier (CTSE) (418) 844-5000 Ext 3710, (CSN) 666-3710<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("uo||G~mtsLskClfC_sNk|T~yGauB|bCix@t`FhdV")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.845556,-71.565833),new google.maps.LatLng(46.948056,-71.425556))
a.airClass="F"
a.altLow="0"
a.altHigh="2700"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR613 ARCHAMBAULT (Ste-Anne-des-Plaines, QC)<br>Class F<br>Surface to 800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 800ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Archambault Institution (450) 478-5960 - Warden, Regional Reception Centre (450) 478-5977<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by both User/Controlling agencies."
po.paths=google.maps.geometry.encoding.decodePath("w}ivGrfxaMp@}XvCcXrFqVlIgTxKmQzM{MlO_JnPuE`QiAbQhAnPvElO|IzM|MxKjQjIhTtFpVtC`Xp@|Xq@zXuCbXuFpVkIfTyKjQ{M|MmO~IoPvEcQfAaQgAoPwEmO}I{M}MyKkQmIiTsFqVwCcX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.734183,-73.881085),new google.maps.LatLng(45.767484,-73.83336))
a.airClass="F"
a.altLow="0"
a.altHigh="800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR614 LECLERC (St-Vincent-de-Paul, QC)<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Federal Training Centre (450) 661-7786 Ext 4100<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by both User/Controlling agencies."
po.paths=google.maps.geometry.encoding.decodePath("y{iuGl}n`M??r@lXa@jXaCxW}ElVsHlTaKvQcMnNwNzJ_PxFsPrByPWmPcDqOgHgNeLoLuOgJwRuGeU_E_W_BcX@oX`BcX~D}VxGeUbJ}R`pDtiA")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.603078,-73.674325),new google.maps.LatLng(45.636314,-73.633889))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR615 LA MACAZA, QC<br>Class F<br>Surface to 1800ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1800ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, La Macaza Institution (819) 275-2315<br>Operating Procedures - Except for IFR traffic above 1200ft, no person shall operate an aircraft within the area described unless the flight has been authorized by the User/ Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("irdzGrhlgMsb@jDe`BiWobAsl@??lA_YpD_XjGeV`JwSjLuPhNaMvO}HrPsDbQc@|PlBfP|F~N`KjM~NfKhRvHbU|EdW|BrXZdYiA~XiD`X")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.394196,-74.78),new google.maps.LatLng(46.427467,-74.745875))
a.airClass="F"
a.altLow="0"
a.altHigh="1800"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR617 PORT CARTIER, QC<br>Class F<br>Surface to 400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 400ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Port Cartier Institution (418) 766-7070<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gempHttbwKsU~zAiq@zoB{m@~y@??qMqN_KgSsHaV_FkXcCwYe@qZz@kZvCqYrF{WfIoUnKoRlM{N~N{J~OmFrP{ArPx@dPlEfOzIdNlM")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.043889,-66.907778),new google.maps.LatLng(50.070814,-66.860183))
a.airClass="F"
a.altLow="0"
a.altHigh="400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR618 DRUMMOND, QC<br>Class F<br>Surface to 900ft"
mt="Restricted Area<br>Designated Altitude - Surface to 900ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Drummond Institution (819) 477-5112<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}s}vG`yjyLp@}XtCeXtFqVjIkTzKkQxM}MnO_JnPwE`QgA`QfApPvElO~IxM|MxKlQlIhTtFrVtCbXp@|Xq@|XuCdXuFpVmIjTyKjQyM|MmO~IqPvEaQhAaQgAoPwEoO_JyM}M{KmQkIiTuFsVuCcX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.835016,-72.501683),new google.maps.LatLng(45.868317,-72.453872))
a.airClass="F"
a.altLow="0"
a.altHigh="900"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR620 HARRINGTON LAKE, QC (Lac Mousseau)<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Cont<br>User/Controlling Agency - RCMP Ottawa Operational Communication Centre (613) 952-4204 or Protective_Policing@rcmp-grc.gc.ca<br>Operating Procedures - No person shall operate an aircraft, including model aircraft, within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}`cuGf|lnMp@yXtC_XtFoVjIgTzKiQxMyMnO}InPwE`QgA`QhApPtElO|IxMzMxKhQlIfTtFlVtC~Wp@xXq@xXuC~WuFnVmIdTyKhQyMzMmO|IqPvEaQfAaQgAoPuEoO}IyM{M{KiQkIgTuFmVuCaX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.535016,-75.952944),new google.maps.LatLng(45.568317,-75.905389))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR624 STE-THÃ‰RÃˆSE, QC<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont daylight, O/T by NOTAM<br>User/Controlling Agency - Bell Helicopter/Textron (450) 437-8039<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("iqwuGndkbMijBi}BisAy_D}mDemI??pqAup@ruAy_@|wAsMnNrjHbbCj_Fee@laE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.667222,-73.954167),new google.maps.LatLng(45.731989,-73.839211))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR625 JOLIETTE, QC<br>Class F<br>Surface to 725ft"
mt="Restricted Area<br>Designated Altitude - Surface to 725ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Joliette Institution<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kh_xGvza_MVaLjAsKxByJfDuIjEgHlFoFfGoDvGkB~Ge@`Hd@vGjBfGnDjFnFlEfHdDtIzBxJhArKX`LY~KiArK{BxJeDtImEfHkFnFgGnDwGjBaHd@_He@wGkBgGoDmFoFkEgHgDuIyByJkAsK")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.023897,-73.426992),new google.maps.LatLng(46.040548,-73.403008))
a.airClass="F"
a.altLow="0"
a.altHigh="725"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR626 CHUTE MONTMORENCY, QC<br>Class F<br>Surface to 600ft"
mt="Restricted Area<br>Designated Altitude - Surface to 600ft<br>Time of Designation - Cont<br>User/Controlling Agency - Director, Parc de la Chute-Montmorency (418) 663-3330<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cne}GryfqLJsEd@kE|@_EpAmDfBuCtByBbCyAjCw@nCQpCPjCv@`CxAvBxBdBtCrAlDz@~Dd@jELrEMrEe@jE{@`EsAlDeBtCwBxBaCxAkCt@qCPoCQkCu@cCyAuByBgBuCqAmD}@aEe@kE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.88306,-71.152757),new google.maps.LatLng(46.891385,-71.140576))
a.airClass="F"
a.altLow="0"
a.altHigh="600"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR628 BAGOTVILLE, QC<br>Class F<br>8000ft to FL310"
mt="Restricted Area<br>Designated Altitude - 8000ft to FL310<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}}stH~nmvL~gaJ?xfQ}u]??~wMrtPnmOjyLNbzz@gl|Dx~hIqmd@?_|oD_seK")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=850.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.666586,-74.0),new google.maps.LatLng(50.733919,-71.842733))
a.airClass="F"
a.altLow="8000"
a.altHigh="31000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR629 BAGOTVILLE, QC<br>Class F<br>18000ft to FL310"
mt="Restricted Area<br>Designated Altitude - 18000ft to FL310<br>Time of Designation - 14-06Z (DT13-05Z) Mon - Fri excluding hols; O/T by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kghvHlatrLvH}dxI|n{EpbjHr|zCts@??ngCxw]lbFjo\\fxHpsZrgKveXbtMx~TyfQ|u]_haJ?mhs@qlxB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=840.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.826586,-72.0),new google.maps.LatLng(51.001664,-69.610967))
a.airClass="F"
a.altLow="18000"
a.altHigh="31000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR630 BAGOTVILLE, QC<br>Class F<br>6000ft to FL310"
mt="Restricted Area<br>Designated Altitude - 6000ft to FL310<br>Time of Designation - 14-06Z (DT13-05Z) Mon - Fri; 14-23Z (DT13-22Z) Sat, Sun and hols; O/T by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kjpwH~f`~KhrtB?|b\\poCfuvF`u|BjanBfhqH??{qMvhMixKd{PoyIrtSgrGh~UmdEpvW{qBx{Xm\\~lYlx@piY}{{Ds~@g{cGwacJMit`G")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=803.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.618808,-71.152597),new google.maps.LatLng(51.206944,-68.0))
a.airClass="F"
a.altLow="6000"
a.altHigh="31000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR631 STE-THÃ‰RÃˆSE, QC<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont daylight, O/T by NOTAM<br>User/Controlling Agency - Bell Helicopter/Textron (450) 437-8039<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("{_cvGdwwaMmGchA?isBw{@mzKbmAwa@lIwyEd`B}f@pUth@hFvjW??cjAt[ifAdk@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.708553,-73.854753),new google.maps.LatLng(45.743056,-73.711667))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR651 ALMA, QC<br>Class F<br>Surface to 6000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gmigHrx|tLxhLutk@??pnAh`AfeAruAbz@rfBjm@ntBd_@z~B|OfeCf@tgCoM~eCy\\b`Cek@jvBgx@`iBscAlxAylAfeAwsAvo@axAxXuyAbAqxAuTgtAmm@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.433087,-71.761568),new google.maps.LatLng(48.550122,-71.521911))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR652 ALMA, QC<br>Class F<br>3500ft to 12500ft"
mt="Restricted Area<br>Designated Altitude - 3500ft to 12500ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("s~xfH|tntLtdAkcKbgI~fCsdA~bKegIsfC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.402217,-71.700092),new google.maps.LatLng(48.465864,-71.616258))
a.airClass="F"
a.altLow="3500"
a.altHigh="12500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR653 ALMA, QC<br>Class F<br>2000ft to 8000ft"
mt="Restricted Area<br>Designated Altitude - 2000ft to 8000ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("e}ugHzcgvLxnTkrgAp{R`gGasJ|e`AeyG~qE??}eFiUm`FqpAwtEweC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.402217,-72.005686),new google.maps.LatLng(48.614117,-71.595767))
a.airClass="F"
a.altLow="2000"
a.altHigh="8000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR654 ALMA, QC<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Ocsl by NOTAM, September 1 to May 31, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("e}ugHzcgvL`cI_ja@v_CdgBjcGas@`cJr_L}sBzpSeyG~qE??}eFiUm`FqpAwtEweC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.443039,-72.005686),new google.maps.LatLng(48.614117,-71.791667))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR655 ALMA, QC<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Ocsl by NOTAM, September 1 to May 31, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cykgHzxduLzjAg_G??riAdi@fmAzUtnAnCdnA}LlkAw`@liIjhLip@vtGacJs_LkcG`s@w_CegB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.435144,-71.866667),new google.maps.LatLng(48.562267,-71.750661))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR656 ALMA, QC<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Ocsl by NOTAM June 1 to August 31 - Tuesday, Wednesday, Thursday, O/T Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7407, (CSN) 661-7407<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ai}fHnn}tL??pjAqp@xcAqcAv{@asAfr@o`Bfg@okB~hDfeAegChzVmiIkhL")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.41335,-71.822222),new google.maps.LatLng(48.488017,-71.688856))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR657 ALMA, QC<br>Class F<br>4000ft to 18000ft"
mt="Restricted Area<br>Designated Altitude - 4000ft to 18000ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cz{eH|fm{L??~xImpKndHgfNliF_iPxoaCnfw@cdn@hwaDyziAmen@yxb@uu}B")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=934.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.508547,-73.708333),new google.maps.LatLng(48.316667,-72.587081))
a.airClass="F"
a.altLow="4000"
a.altHigh="18000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR658 ALMA, QC<br>Class F<br>FL180 to FL280"
mt="Restricted Area<br>Designated Altitude - FL180 to FL280<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - Alma UAS Centre of Excellence - (418) 669-5129 info@cedalma.com<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("cz{eH|fm{L??~xImpKndHgfNliF_iPxoaCnfw@cdn@hwaDyziAmen@yxb@uu}B")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=934.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.508547,-73.708333),new google.maps.LatLng(48.316667,-72.587081))
a.airClass="F"
a.altLow="18000"
a.altHigh="28000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR664 BAGOTVILLE, QC<br>Class F<br>FL310 to unlimited"
mt="Restricted Area<br>Designated Altitude - FL310 to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("}}stH~nmvL~gaJ?xfQ}u]??~wMrtPnmOjyLNbzz@gl|Dx~hIqmd@?_|oD_seK")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=850.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.666586,-74.0),new google.maps.LatLng(50.733919,-71.842733))
a.airClass="F"
a.altLow="31000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR665 BAGOTVILLE, QC<br>Class F<br>FL310 to unlimited"
mt="Restricted Area<br>Designated Altitude - FL310 to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kghvHlatrLvH}dxI|n{EpbjHr|zCts@??ngCxw]lbFjo\\fxHpsZrgKveXbtMx~TyfQ|u]_haJ?mhs@qlxB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=840.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.826586,-72.0),new google.maps.LatLng(51.001664,-69.610967))
a.airClass="F"
a.altLow="31000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR666 BAGOTVILLE, QC<br>Class F<br>FL310 to unlimited"
mt="Restricted Area<br>Designated Altitude - FL310 to unlimited<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - Bagotville Military Terminal Control (418) 677-4000 Ext 661-7944, (CSN) 661-7944, MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kjpwH~f`~KhrtB?|b\\poCfuvF`u|BjanBfhqH??{qMvhMixKd{PoyIrtSgrGh~UmdEpvW{qBx{Xm\\~lYlx@piY}{{Ds~@g{cGwacJMit`G")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=803.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.618808,-71.152597),new google.maps.LatLng(51.206944,-68.0))
a.airClass="F"
a.altLow="31000"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR667 HULL, QC<br>Class F<br>Surface to 1200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("kbjtG~ximMd@iRnBwQvDqPxF{NrHuLdJcJhKeGbLaDpLs@pLt@bL~ChKdGdJbJrHtLvFzNvDpPpBvQd@hRe@hRqBtQwDpPwF|NsHtLeJbJiKdGcL~CqLt@qLu@cL_DiKeGeJcJsHuLyF{NwDqPoBwQ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.415568,-75.767239),new google.maps.LatLng(45.440544,-75.73165))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR668 RIVIÃˆRE-DES-PRAIRIES, QC<br>Class F<br>Surface to 1100ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1100ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("{gxuGhoy_M??|@qXxCyWvFeVlI}SxKaQvMsMhOyIjPqEzPgA|PdAjPrEhOvIxMpMvK`QnIzSvFdVzCvWz@pXi@rXiC|WgFnV_IjTmKrQmMfNaOnJgPhFyP`B}Pm@mPcEa]ul@eEgh@wb@mw@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.643629,-73.560201),new google.maps.LatLng(45.676942,-73.512565))
a.airClass="F"
a.altLow="0"
a.altHigh="1100"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR669 SHERBROOKE, QC<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("cdctGxtuuLp@wXvC}WrFmVlIcTxKgQzM{MlO{InPuE`QgAbQfAnPtElO|IzMxMxKfQjIdTtFjVtC|Wp@vXq@vXuC|WuFjVkIdTyKfQ{MxMmO|IoPtEcQfAaQgAoPuEmO{I{MyMyKiQmIcTsFmVwC}W")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.371683,-71.901764),new google.maps.LatLng(45.404984,-71.854347))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR670 SOREL, QC<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("gp`xG`_`}Lp@_YtCgXtFuVjImTzKmQxM_NlOaJpPwE`QgA`QhAnPvElO`JzM|MxKnQlIjTrFtVvCfXp@~Xq@`YwCdXsFtVmIlTyKlQ{M~MmO`JoPvEaQhAaQiAqPwEmO_JyM_N{KoQkIkTuFuVuCgX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.013627,-73.101761),new google.maps.LatLng(46.046929,-73.053795))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR671 TROIS-RIVIÃˆRES, QC<br>Class F<br>Surface to 700ft"
mt="Restricted Area<br>Designated Altitude - Surface to 700ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("ur`zGdxgzLXcLjAuKxB}JdDwIlEiHlFoFdGqDvGmB`Hc@~Gb@xGlBdGpDlFnFlEhHdDvIxB|JjAtKVbLW`LkAtKyB|JeDvImEhHmFnFeGpDyGlB_Hb@aHc@wGmBeGoDmFqFmEiHeDwIyB}JkAuK")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.358341,-72.638176),new google.maps.LatLng(46.374992,-72.614046))
a.airClass="F"
a.altLow="0"
a.altHigh="700"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR672 ORSAINVILLE, QC<br>Class F<br>Surface to 1200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("}}g}Gt|grLr@oYtCsXtFaWjIwTxKwQzMgNlOeJpP{E`QiA`QhAnPzElOfJzMfNxKvQlIvTrF`WtCrXr@lYs@lYuCrXsF~VmIvTyKxQ{MdNmOfJoPzEaQhAaQiAqP{EmOeJ{MgNyKwQkIwTuFaWuCsX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.870849,-71.340474),new google.maps.LatLng(46.904151,-71.291748))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR673 SAINT-JÃ‰RÃ”ME, QC<br>Class F<br>Surface to 1400ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1400ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("knrvGjpwbMX_LhAqKzByJdDsIlEeHlFoFdGoDvGkB`Hc@~Gb@xGjBdGnDlFnFlEdHdDrIxBxJjApKV~KW|KkApKyBxJeDrImEdHmFnFeGnDyGjB_Hb@aHc@wGkBeGoDmFoFmEeHeDsI{ByJiAqK")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.794452,-74.029442),new google.maps.LatLng(45.811103,-74.005558))
a.airClass="F"
a.altLow="0"
a.altHigh="1400"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR674 RIMOUSKI, QC<br>Class F<br>Surface to 500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("yhyfHhsaaLJyEd@sE|@eEpAsDfByCtB}BbC{AjCy@nCQnCPlCx@`CzAvB|BdBxCrArDz@dEd@rEJxEKxEe@pE{@dEsArDeBxCwB|BaCzAmCx@oCPoCQkCw@cC}AuB{BgB{CqAqD}@gEe@qE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.459171,-68.504889),new google.maps.LatLng(48.467496,-68.492333))
a.airClass="F"
a.altLow="0"
a.altHigh="500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR675 BAIE-COMEAU, QC<br>Class F<br>Surface to 1100ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1100ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("_vnkHvn}~Kd@wSnBcSvD{QxFaPrHwMbJ}JjKyGbLkDpLy@pLx@bLjDhKxGbJ|JrHvMxF`PvDzQnBbSd@vSe@vSoB`SwDzQyF`PsHvMcJ|JiKxGcLlDqLx@qLy@cLkDkKyGcJ}JsHwMyFaPwD{QoBcS")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.207512,-68.168842),new google.maps.LatLng(49.232488,-68.130603))
a.airClass="F"
a.altLow="0"
a.altHigh="1100"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR676 AMOS, QC<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Cont<br>User/Controlling Agency - Deputy Director General of security, Correctional Services at (514) 864- 8010 ext 50502<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency, except for medical, police and state aircraft on official duty flights or any IFR flights."
po.paths=google.maps.geometry.encoding.decodePath("gurgHrd|{Md@oSnB{RvDsQxF{OrHqMbJwJjKuGbLiDpLy@pLx@bLhDhKtGbJxJrHnMxFzOvDrQnBzRd@nSe@lSoBzRwDrQyFzOsHpMcJvJiKvGcLhDqLx@qLy@cLiDkKuGcJyJsHqMyFyOwDsQoB{R")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.572512,-78.1561),new google.maps.LatLng(48.597488,-78.118344))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR701 GOOSE BAY, NL<br>Class F<br>Surface to FL280"
mt="Restricted Area<br>Designated Altitude - Surface to FL280<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("imthI~mhyJzNqrHbn@aiH|kAmvGjgBi{Fr_CmxE|sC}nDtcDc`ClnDqmAvsDqXrsD~Z`nDroAbcDtaCfsCxoD|~BlxEtfBlzFjkAztGxm@~fHvNbpHwN`pHym@~fHkkAztGufBlzF}~BlxEgsCxoDccDtaCanDroAssD~ZwsDqXmnDqmAucDc`C}sC}nDs_CmxEkgBi{F}kAmvGcn@aiH")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.680159,-62.262239),new google.maps.LatLng(54.013174,-61.697761))
a.airClass="F"
a.altLow="0"
a.altHigh="28000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR704 HALIFAX, NS<br>Class F<br>3000ft to 5000ft"
mt="Restricted Area<br>Designated Altitude - 3000ft to 5000ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("mcekGjpzkK~|h@gg`@hvEppHcqj@|jb@ebDgtJ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.691389,-65.081389),new google.maps.LatLng(43.940556,-64.851389))
a.airClass="F"
a.altLow="3000"
a.altHigh="5000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR705 HALIFAX, NS<br>Class F<br>Surface to 5000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Ocsl by NOTAM, 48 hrs prior notice<br>User Agency - ACCE(A) (902) 427-2510, (CSN) 427-2510<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("o_flG|vtlK`{_@qeYvlT`vo@}o`@fhZ{wSwxp@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.830833,-65.410833),new google.maps.LatLng(44.108889,-65.021667))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR706 CAMP ALDERSHOT, NS<br>Class F<br>Surface to 1000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1000ft<br>Time of Designation - Cont<br>User Agency - Army Reserve Training Centre, Camp Alsershot (902) 678-7930 Ext 130, (CSN) 568-5355<br>Controlling Agency - 14 Wg Greenwood (902) 765-1494 Ext 5457, (CSN) 568-5457<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("azjrGnl~hKr@sXtC{WtFgVjIaTxKeQzMwMlOyIpPuE`QeA`QfAnPrElOzIzMvMxKdQlI~SrFhVtCxWr@rXs@pXuCxWsFhVmI~SyKdQ{MvMmOzIoPrEaQfAaQeAqPuEmOyI{MwMyKeQkIaTuFgVuC{W")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.083349,-64.573589),new google.maps.LatLng(45.116651,-64.526411))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR711 SPRINGHILL, NS<br>Class F<br>Surface to 1600ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1600ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Springhill Institution (902) 597-3755<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ikquGz~`fKr@yXtCaXtFqVjIgTxKiQzM{MlO}IpPwE`QgA`QhAnPtElO~IzMzMxKhQlIfTrFnVtC`Xr@xXs@xXuC`XsFnVmIfTyKjQ{MzMmO|IoPvEaQfAaQgAqPuEmO_J{M{MyKiQkIgTuFoVuCaX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.608349,-64.095475),new google.maps.LatLng(45.641651,-64.047858))
a.airClass="F"
a.altLow="0"
a.altHigh="1600"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR717 HALIFAX, NS<br>Class F<br>Surface to 1700ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1700ft<br>Time of Designation - Cont<br>User Agency - RJOC(A) (902) 427-2502, (CSN) 427-2502<br>Controlling Agency - Moncton ACC (506) 867-7178/7173<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("uf~oGfrkcKd@aRpBoQvDkPvFuNrHoLdJ_JhKaGbL_DpLs@pLr@bL~CjK`GbJ~IrHpLxFrNvDjPnBnQd@`Re@`RoBnQwDhPyFtNsHpLcJ~IkK`GcL|CqLt@qLs@cL_DiKaGeJ_JsHoLwFuNwDkPqBoQ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=998.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.699456,-63.652017),new google.maps.LatLng(44.724432,-63.616872))
a.airClass="F"
a.altLow="0"
a.altHigh="1700"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR720 FREDERICTON/GAGETOWN, NB<br>Class F<br>Surface to FL250"
mt="Restricted Area<br>Designated Altitude - Surface to FL250<br>Time of Designation - Ocsl by NOTAM, 24 hrs prior notice<br>User/Controlling Agency - CTC Gagetown Range Control Officer (506) 422-2000 Ext 3774/2387, (CSN) 432-3774/2387<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("gtntGxo~sKqxBt`y@exUhql@wda@}hlAbdT|uQ`dTowHhmQogb@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=971.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.463889,-66.883333),new google.maps.LatLng(45.775,-66.352778))
a.airClass="F"
a.altLow="0"
a.altHigh="25000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR721 FREDERICTON/GAGETOWN, NB<br>Class F<br>6000ft to 14000ft"
mt="Restricted Area<br>Designated Altitude - 6000ft to 14000ft<br>Time of Designation - Ocsl by NOTAM, 24 hrs prior notice<br>User/Controlling Agency - CTC Gagetown Range Control Officer (506) 422-2000 Ext 3774/2387, (CSN) 432-3774/2387<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("iyvvGvjisKioEkrf@bii@adTjoEn`b@oh\\l}Nu_LnwH")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.616667,-66.244444),new google.maps.LatLng(45.866667,-65.933333))
a.airClass="F"
a.altLow="6000"
a.altHigh="14000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR722 FREDERICTON/GAGETOWN, NB<br>Class F<br>Surface to 1200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft<br>Time of Designation - Cont<br>User/Controlling Agency - CTC Gagetown Range Control Officer (506) 422-2000 Ext 3774/2387, (CSN) 432-3774/2387<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("{qyvGzhetKxZmI|E~y@wZcK_Fmc@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.841944,-66.395278),new google.maps.LatLng(45.8475,-66.385833))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR724 FREDERICTON/GAGETOWN, NB<br>Class F<br>Surface to FL250"
mt="Restricted Area<br>Designated Altitude - Surface to FL250<br>Time of Designation - Cont<br>User/Controlling Agency - CTC Gagetown Range Control Officer (506) 422-2000 Ext 3774/2387, (CSN) 432-3774/2387<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ed{vG|rlsKpjPu_Lp{c@kaS`dTzy\\va@`dTimQngb@adTnwHcdT}uQg{CuG_rFskJegBsp_@")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=969.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.463889,-66.583333),new google.maps.LatLng(45.855556,-66.091667))
a.airClass="F"
a.altLow="0"
a.altHigh="25000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR725 FREDERICTON/GAGETOWN, NB<br>Class F<br>Surface to 2000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 2000ft<br>Time of Designation - Cont<br>User/Controlling Agency - CTC Gagetown Range Control Officer (506) 422-2000 Ext 3774/2387, (CSN) 432-3774/2387<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("_wotGvjisKptEnwHyqDpkJwa@adT")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.435278,-66.352778),new google.maps.LatLng(45.469444,-66.244444))
a.airClass="F"
a.altLow="0"
a.altHigh="2000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR726 GOOSE BAY, NL<br>Class F<br>Surface to 3000ft"
mt="Restricted Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency.<br>Excluding CYR727."
po.paths=google.maps.geometry.encoding.decodePath("wkeaIv``sJ~n@g_[jmCccZjgFykX~yHe{UzbKatRt_MwyNnnNmpJdnOq|Er}OubAp|OjvA`kOxmFziNh}J|yLr`Ov|J`tRhtHhtUtbF~~WhjCxqYzm@pkZ{m@rkZijCxqYubF~~WitHhtUw|J`tR}yLp`O{iNh}JakOzmFq|OhvAs}OsbAenOq|EonNmpJu_MwyN{bKatR_zHe{UkgFykXkmCccZ")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=915.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.7902,-61.770508),new google.maps.LatLng(52.789244,-60.137269))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR727 GOOSE BAY, NL AREA 1:<br>Class F<br>Surface to 12500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 12500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kjd_Iv``sJxNogHbn@m~G|kAolGjgBirFr_CupEzsCwhDtcDs{BjnDwjAxsDwWrsD|Y`nDtlAbcD`}BfsCniD|~BtpEvfBpqFjkA`kGxm@n|GvNheHwNjeHym@n|GkkA`kGwfBpqF}~BtpEgsCniDccD`}BanDtlAssD|YysDwWknDyjAucDs{B{sCuhDs_CupEkgBirF}kAolGcn@m~G")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.123215,-61.226106),new google.maps.LatLng(52.45623,-60.681672))
a.airClass="F"
a.altLow="0"
a.altHigh="12500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR727 GOOSE BAY, NL AREA 2:<br>Class F<br>Surface to FL280"
mt="Restricted Area<br>Designated Altitude - Surface to FL280<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency.<br>Excluding the area within CYR750."
po.paths=google.maps.geometry.encoding.decodePath("yzw_Iv``sJlXozMpjAykMhzB{nLhfDudKbmEonIpmFenGtfGueExwGiwBf`Hqe@~_Hbk@|vGh|BjeGhiE|kFbpGjkEnnIrdDvbK~xBdkLtiA|fMbXztMcX|tMuiAzfM_yBfkLsdDvbKkkEnnI}kFbpGkeGhiE}vGf|B_`Hdk@g`Hqe@ywGiwBufGueEqmFenGcmEqnIifDsdKizB{nLqjAykM")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=955.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.023311,-61.389432),new google.maps.LatLng(52.556134,-60.518345))
a.airClass="F"
a.altLow="0"
a.altHigh="28000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR728 DORCHESTER, NB<br>Class F<br>Surface to 1200ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1200ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Dorchester Penitentiary (506) 379-2471<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ogiwGlyvhKr@_YtCeXrFsVlIkTxKmQzM}MlO_JnPwEbQiA`QhAnPvElO~IzM~MxKlQjIhTtFrVtCdXp@~Xq@|XuCdXuFrVkIjTyKjQ{M~MmO~IoPvEaQhAcQgAoPwEmOaJ{M}MyKmQmIkTsFsVuCeX")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.89446,-64.535042),new google.maps.LatLng(45.927762,-64.48718))
a.airClass="F"
a.altLow="0"
a.altHigh="1200"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR729 ATLANTIC (Near Chatham, NB)<br>Class F<br>Surface to 600ft"
mt="Restricted Area<br>Designated Altitude - Surface to 600ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Atlantic Institution (506) 622-2894<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("idt|GxespKJsEd@kE|@_ErAmDdBuCtByBbCyAjCu@nCQpCPjCt@bCxAtBxBdBtCrAlD|@~Db@jELrEMpEc@lE}@~DsAlDeBtCuBvBcCxAkCv@qCPoCQkCw@cCyAuBwBeBuCsAmD}@_Ee@mE")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.794448,-65.809414),new google.maps.LatLng(46.802774,-65.797253))
a.airClass="F"
a.altLow="0"
a.altHigh="600"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR747 TRURO, NS<br>Class F<br>Surface to 1300ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1300ft<br>Time of Designation - Cont<br>User/Controlling Agency - Warden, Nova Institution (902) 897-1750<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("ec{sGhyjaKr@uXtC}WrFmVlIcTxKgQzMyMlO{InPuEbQgA`QfAnPtElO|IzMxMxKfQjIbTtFjVtC|Wp@tXq@vXuCzWuFlVkIbTyKfQ{MxMmOzIoPtEaQfAcQeAoPuEmO}I{MwMyKiQmIcTsFkVuC}W")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.330571,-63.326469),new google.maps.LatLng(45.363873,-63.279086))
a.airClass="F"
a.altLow="0"
a.altHigh="1300"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR748 HALIFAX, NS<br>Class F<br>Surface to 1500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - 12 Wing Air Traffic Control (902) 720-1292, (CSN) 720-1292<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kgfoGtsdbKzbJowAlyQe`n@up_@e{QqqBfn~@|dEreD")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.448333,-63.435),new google.maps.LatLng(44.633333,-63.083333))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR750 GOOSE BAY, NL<br>Class F<br>12500ft to FL600"
mt="Restricted Area<br>Designated Altitude - 12500ft to FL600<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("abt~Hv``sJ|F_sCnVmnCje@qeCbs@qxBd_A{gBjiA}sAhqAo}@rvAce@jyAsKjyAdLpvAre@bqAx}@diAbtA`_AzgB|r@jxBfe@deClV~mC|FlrC}FnrCmV|mCge@feC}r@jxBa_AxgBeiAdtAcqAx}@qvAre@kyAdLkyAsKsvAce@iqAo}@kiA}sAe_A{gBcs@qxBke@qeCoVonC")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(52.206469,-61.089998),new google.maps.LatLng(52.372976,-60.81778))
a.airClass="F"
a.altLow="12500"
a.altHigh="60000"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYR754 CONFEDERATION BRIDGE, PE<br>Class F<br>Surface to 500ft"
mt="Restricted Area<br>Designated Altitude - Surface to 500ft<br>Time of Designation - Cont<br>User/Controlling Agency - Strait Crossing Bridge Limited (902) 437-7349<br>Operating Procedures - No person shall operate an aircraft within the area described unless the flight has been authorized by the User/Controlling Agency."
po.paths=google.maps.geometry.encoding.decodePath("kcvxGrfmdK_sGe{JasGowHubApqB~rGnwHzmG~uJzgAklB")
po.strokeColor="#6E4500"
po.fillColor="#6E4500"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.1575,-63.824167),new google.maps.LatLng(46.256667,-63.695833))
a.airClass="F"
a.altLow="0"
a.altHigh="500"
a.airType="CYR"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA102 (M) BLACK ROCK, BC<br>Class F<br>Surface to 10000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889-0073<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("cnkfH`troVb`PovNjdO|_z@uySfxGo}@qpHm}GatHuaGu_EprCqkJf_AymN")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=982.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.226667,-123.575),new google.maps.LatLng(48.430556,-123.227778))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA105 (A,T,H) CHILLIWACK, BC<br>Class F<br>Surface to 8000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 8000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding CYR165."
po.paths=google.maps.geometry.encoding.decodePath("_vpjHv|{cVol`@`hQdgB`ug@leWhq_@?udTfjG?kkAwjeA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.066667,-121.858431),new google.maps.LatLng(49.25,-121.389722))
a.airClass="F"
a.altLow="0"
a.altHigh="8000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA110 (H) VICTORIA, BC<br>Class F<br>Surface to 2500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 2500ft<br>Time of Designation - Ocsl by NOTAM<br>Controlling Agency - Victoria Tower (250) 655-2866<br>Operating Procedures - All operations in accordance with User/Controlling Agency Letter of Agreement. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("{lkgHxm`qVkUatD{hI??n|N??tbBsp@~{AwhAbtAg|AliAynB")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.560303,-123.595408),new google.maps.LatLng(48.616667,-123.513889))
a.airClass="F"
a.altLow="0"
a.altHigh="2500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA113 (A,T,H) NANAIMO, BC<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yv|hHljltVmoc@t}I?y~ZvsOucWv|VrqMvnBcc@ypFhvZ")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.774081,-124.151389),new google.maps.LatLng(48.999722,-123.884422))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA116 (H) PEMBERTON, BC<br>Class F<br>Surface to 10000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("wyqsHzdlmV`qEjaLzsd@_|g@_}CchJ}gf@vbf@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=983.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.332778,-123.014444),new google.maps.LatLng(50.559167,-122.747222))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA117 (H) OLIVER, BC<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("kuokHvp`zU?sv^~vE???vh@rg@tl@h\\do@zPjp@~Djp@_Ebo@{Ptl@i\\vh@sg@xyTr_Lwcg@~uQ")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.031944,-119.775),new google.maps.LatLng(49.2375,-119.6125))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA118 (A,T,H) DUNCAN, BC<br>Class F<br>Surface to 3000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("cfdhH|cksVsmShrEw|VsqMpfIgxMqfKikY|_GarFzaHrtItDvqD`sCp@xiZl|^_{ApoG")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.6725,-123.959089),new google.maps.LatLng(48.924722,-123.634722))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA119 (A,T) VANDERHOOF, BC<br>Class F<br>Surface to 6500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6500ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("knfhIbckvV?ckpAhoE??ez|@vsM??hfnCadT?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=973.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.833333,-124.416667),new google.maps.LatLng(53.941667,-123.683333))
a.airClass="F"
a.altLow="0"
a.altHigh="6500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA120 (A) PENTICTON, BC<br>Class F<br>Surface to 4000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_|{kHj~rxU?q|]boh@??p|]kbF???iImnAsRkjAuZcdA_b@a|@eh@ar@im@uf@_q@eZgs@yLat@Ais@tLaq@`Zim@rf@gh@`r@_b@`|@wZfdAuRljAgIrnAuaN?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.0875,-119.541667),new google.maps.LatLng(49.3,-119.383333))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA121 (A,S) HOPE, BC<br>Class F<br>Surface to 7000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("aaqlHfhocVxgO??f}j@ygO??g}j@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=990.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.325,-121.55),new google.maps.LatLng(49.408333,-121.325))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA122 (A,H) VERNON, BC<br>Class F<br>Surface to 6200ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6200ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("iverH~`{rUtp_@??rtmBup_@i`Y?issA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.166667,-119.166667),new google.maps.LatLng(50.333333,-118.6))
a.airClass="F"
a.altLow="0"
a.altHigh="6200"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA124 (M) TEXADA ISLAND, BC<br>Class F<br>Surface to 1000ft Ocsl to 5000ft by NOTAM"
mt="Advisory Area<br>Designated Altitude - Surface to 1000ft Ocsl to 5000ft by NOTAM<br>Time of Designation - Cont<br>User Agency - 19 Wing Operations, CFB Comox (250) 339-8231, (CSN) 252-8231<br>Controlling Agency - Comox IFRCC (250) 339-8115, (CSN) 252-8115<br>Operating Procedures - The rules for Class G airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("wtxnHho|xV?up_@nwH?~`f@_cmAg{C~`f@g}j@trfA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=973.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.525,-124.833333),new google.maps.LatLng(49.775,-124.266667))
a.airClass="F"
a.altLow="0"
a.altHigh="1000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA131 (M) VALEMOUNT, BC<br>Class F<br>10000ft to 18000ft"
mt="Advisory Area<br>Designated Altitude - 10000ft to 18000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - ACCE(P) Esquimalt (RCAF Detachment) ACCEPacificOPS@forces.gc.ca (250) 363-1050 (CSN) 333-1050 M-F 0800-1600 lcl. After hours (250) 889- 0073<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("c}_eIh~fqUoh\\hrxJn_eDjhuDhhuDuvtCdkpAiwaDuas@oalEyqrEux{D_vgCnnqC")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=813.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.366667,-121.2),new google.maps.LatLng(53.566667,-117.583333))
a.airClass="F"
a.altLow="10000"
a.altHigh="18000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA133 (H) VANCOUVER, BC<br>Class F<br>Surface to 5000ft, Ocsl higher by NOTAM"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft, Ocsl higher by NOTAM<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}yglHx}ymV?l|MwtGvyE??eSojAoJunAoAqpAnE_pAhNcmAvV_hAn^w`Afe@qw@|j@yl@jo@s`@lr@qSzs@_D")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=995.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.361111,-123.129444),new google.maps.LatLng(49.411028,-123.018056))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA135 (H) LAKE COWICHAN, BC<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("wf}iH~{utV|n_@qpHexUjqqAwuH??y_hA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.812778,-124.518056),new google.maps.LatLng(48.979167,-124.095278))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA145 (H) VICTORIA/SALTSPRING ISLAND, BC<br>Class F<br>Surface to 2500ft, Ocsl 4000ft by NOTAM"
mt="Advisory Area<br>Designated Altitude - Surface to 2500ft, Ocsl 4000ft by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("itphHlfypVu|LtwK??muAweHd~HawQziC~|B??pY`xDnn@`nD")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.750931,-123.571225),new google.maps.LatLng(48.836078,-123.428056))
a.airClass="F"
a.altLow="0"
a.altHigh="2500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA158 (P) WILLIAMS LAKE, BC<br>Class F<br>Surface to 7000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Ocsl by NOTAM<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("gna|HxkchVbBsy@lH{w@hNit@xSgo@tXqh@v\\w`@z_@yW`b@eNbc@aDbc@dD`b@fNz_@zWt\\v`@rXph@xSdo@hNht@jHvw@dBpy@eBpy@kHvw@iNht@ySbo@sXrh@u\\v`@{_@zWab@fNcc@dDcc@aDab@eN{_@{Ww\\u`@uXsh@ySeo@iNit@mH{w@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.883365,-122.137323),new google.maps.LatLng(51.949968,-122.029343))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA159 (S) SMITHERS, BC<br>Class F<br>12500ft to as specified by NOTAM"
mt="Advisory Area<br>Designated Altitude - 12500ft to as specified by NOTAM<br>Time of Designation - Ocsl daylight by NOTAM<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("a}dqIvkygW|__BcyuBvuyA}aBvfc@`~_Dc{|Cb`rDib`AcbyE")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=909.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.266667,-128.391667),new google.maps.LatLng(55.408333,-126.650833))
a.airClass="F"
a.altLow="12500"
a.altHigh="24000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA167 (S) GOLDEN, BC<br>Class F<br>18000ft to FL250"
mt="Advisory Area<br>Designated Altitude - 18000ft to FL250<br>Time of Designation - Oscl by NOTAM<br>User Agency - Invermere Soaring Centre Ltd. (250) 342-7228<br>Controlling Agency - Vancouver ACC (604) 586-4500<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yifyHniliUxiv@_ry@~oRn}}Bsp_@hoEeii@yziA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=966.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.1,-117.433333),new google.maps.LatLng(51.483333,-116.75))
a.airClass="F"
a.altLow="18000"
a.altHigh="25000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA168 (H) TERRACE, BC<br>Class F<br>Surface to 10000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 10000ft<br>Time of Designation - Ocsl by NOTAM<br>Controlling Agency - Terrace FSS (250) 635-2110<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("wmvkIhdooWxoI_uIxkLvrE?qv^wzd@?b}Lxxb@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.3925,-128.533333),new google.maps.LatLng(54.586389,-128.35))
a.airClass="F"
a.altLow="0"
a.altHigh="10000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA184 (A,T,H) CHILLIWACK, BC<br>Class F<br>Surface to 5500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5500ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("icjjHvghgV_gJ???o@}jAeGyiA{N{fAaVcbAy\\u{@_c@cs@zgA_fC?udTfjG?jj@vda@|yAnxB")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=991.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.045178,-121.944444),new google.maps.LatLng(49.121081,-121.75))
a.airClass="F"
a.altLow="0"
a.altHigh="5500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA185 (A,T,H) ALOUETTE LAKE, BC<br>Class F<br>Surface to 4000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_lvlHpm_kVtv@sxFjyK`|BdkSmlm@p~KkZewFph{@o{ExcDouC?shA|zV}uJ??koIaqMqsZ")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=977.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.190278,-122.75),new google.maps.LatLng(49.435686,-122.292672))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA186 (A,T,H) DICKSON LAKE, BC<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}`mlHpvuiVnmIq|XvvCksn@k|KmmWdoOk|InwH?f{Cdii@`lGvpQn~Ap_ZsfEzqJq~KjZerX~qG")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=974.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.158333,-122.34105),new google.maps.LatLng(49.387833,-121.783333))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA188 (A,T) GLEN VALLEY, BC<br>Class F<br>Surface to 5500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5500ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("albkHjhojVbhBitL|cCyiCrsC???|K`{A~RbxArY|sA?vkWm}KciBy^skJ")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.098056,-122.547222),new google.maps.LatLng(49.169458,-122.379722))
a.airClass="F"
a.altLow="0"
a.altHigh="5500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA201 (S) COWLEY, AB<br>Class F<br>18000ft to as specified by NOTAM"
mt="Advisory Area<br>Designated Altitude - 18000ft to as specified by NOTAM<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Alberta Soaring Council (403) 813-6658<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("sm|lH~rxvT?~s`ButmB?owHup_@?y|pBtrfA??nyo@nyo@?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=953.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.466667,-114.5),new google.maps.LatLng(50.083333,-113.75))
a.airClass="F"
a.altLow="18000"
a.altHigh="24000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA202 (S) CHIPMAN, AB<br>Class F<br>Surface to 9500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 9500ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Edmonton Soaring Club (780) 363-3860<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("oxjgIhumnT|F_xCpVisCje@ajCbs@u|Bd_AkkBjiAyvAhqAq_ArvAmf@jyAaLjyAtLpvA|f@bqA|_AdiA`wA`_AjkB|r@l|Bfe@tiClVxrCzFjwC{FjwCmVxrCge@tiC}r@l|Ba_AjkBeiA~vAcqA~_AqvA|f@kyArLkyAaLsvAkf@iqAs_AkiAwvAe_AkkBcs@u|Bke@cjCqVgsC")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.633413,-112.774017),new google.maps.LatLng(53.79992,-112.49265))
a.airClass="F"
a.altLow="0"
a.altHigh="9500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA209 (T) EDMONTON, AB<br>Class F<br>Surface to 9000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 9000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding CYA218(P)."
po.paths=google.maps.geometry.encoding.decodePath("cpzfIrf`yT?yxb@nh\\??xxb@oh\\?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=989.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.566667,-114.366667),new google.maps.LatLng(53.716667,-114.183333))
a.airClass="F"
a.altLow="0"
a.altHigh="9000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA210 (T) LETHBRIDGE, AB<br>Class F<br>Surface to 9500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 9500ft<br>Time of Designation - Cont<br>Operating Procedures - The rules for Class G airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("otelHrzuqT?cz|@tp_@??bz|@up_@?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.183333,-113.166667),new google.maps.LatLng(49.35,-112.85))
a.airClass="F"
a.altLow="0"
a.altHigh="9500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA214 (M) REDWATER, AB<br>Class F<br>Surface to 3200ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3200ft<br>Time of Designation - Cont<br>User/Controlling Agency - 408 Tac Hel Squadron (780) 973-4108, (CSN) 528-4108<br>Operating Procedures - The rules for Class G airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("irnhIrxnpT|FsxCnV_tCle@ujC`s@e}Bf_A{kBjiAewAfqA{_AtvAqf@jyAcLhyAvLpvA`g@bqAf`AfiAlwA`_AxkB|r@~|Bfe@hjClVlsCzF`xC{F`xCmVlsCge@hjC}r@~|Ba_AzkBgiAjwAcqAf`AqvAbg@iyAtLkyAcLuvAqf@gqA{_AkiAewAg_AykBas@g}Bme@ujCoV}sC")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.816746,-113.107967),new google.maps.LatLng(53.983254,-112.825366))
a.airClass="F"
a.altLow="0"
a.altHigh="3200"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA215 (S) GRANDE PRAIRIE, AB<br>Class F<br>18000ft to as specified by NOTAM"
mt="Advisory Area<br>Designated Altitude - 18000ft to as specified by NOTAM<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Alberta Soaring Council (403) 813-6658<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_pskI~ag}U?{dmGdkpA??jfnCekpAn}}B")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=945.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(54.083333,-120.3),new google.maps.LatLng(54.5,-118.916667))
a.airClass="F"
a.altLow="18000"
a.altHigh="24000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA218 (P) EDMONTON/EDEN, AB<br>Class F<br>Surface to 9000ft, Ocsl higher by NOTAM"
mt="Advisory Area<br>Designated Altitude - Surface to 9000ft, Ocsl higher by NOTAM<br>Time of Designation - Cont daylight<br>Controlling Agency - Edmonton Terminal (780) 890-8397<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_rnfIrdywTdB_|@jHcz@jNmv@xScq@rXgj@v\\ab@z_@yX`b@yNdc@iDbc@jD~a@zNz_@|Xv\\`b@rXfj@xSbq@hNjv@jH`z@bBz{@cBz{@kH`z@iNlv@yS`q@sXfj@w\\bb@{_@zX_b@zNcc@jDec@iDab@wN{_@yXw\\cb@sXgj@yScq@kNmv@kHcz@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.588921,-114.222814),new google.maps.LatLng(53.655524,-114.110519))
a.airClass="F"
a.altLow="0"
a.altHigh="9000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA226 (T) CALGARY, AB<br>Class F<br>Surface to 11000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 11000ft<br>Time of Designation - Cont 13-07Z (DT12-06Z)<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ciyxH~|{|T?ojcAxxb@??xxb@nwH??tp_@iql@?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=981.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.183333,-115.0),new google.maps.LatLng(51.416667,-114.65))
a.airClass="F"
a.altLow="0"
a.altHigh="11000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA227 (T) CALGARY, AB<br>Class F<br>7000ft to 11000ft"
mt="Advisory Area<br>Designated Altitude - 7000ft to 11000ft<br>Time of Designation - Cont 13-07Z (DT12-06Z)<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yvkwHhk{{TowH??yxb@nwH??xxb@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.183333,-114.833333),new google.maps.LatLng(51.233333,-114.65))
a.airClass="F"
a.altLow="7000"
a.altHigh="11000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA228 (H) CALGARY, AB<br>Class F<br>Surface to 6500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6500ft<br>Time of Designation - Ocsl by NOTAM<br>Controlling Agency - Springbank Tower (403) 216-7130<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yvkwHrwsyTelF??kcGdlF??jcG")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.183333,-114.466667),new google.maps.LatLng(51.221283,-114.425))
a.airClass="F"
a.altLow="0"
a.altHigh="6500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA263 (S) BLACK DIAMOND, AB<br>Class F<br>Surface to 8000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 8000ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Cu Nim Gliding Club (403) 969-0776 or (587) 328-0747<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ym_uHpdgxTflWduY??flD{iStlBgkTgb[}yN??{x@fwNajBrbN")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=985.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.6225,-114.375),new google.maps.LatLng(50.792778,-114.080278))
a.airClass="F"
a.altLow="0"
a.altHigh="8000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA264 (P) BEISEKER, AB<br>Class F<br>Surface to 7000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Skydive Extreme Calgary (778) 214-9444<br>Controlling Agency - Edmonton ACC (780) 890-8397<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("mg{xHrnqsTdB}x@jHgw@hNus@zSun@rXah@v\\k`@z_@oW`b@aNbc@_Ddc@bD~a@`Nz_@rWt\\h`@tXbh@vSrn@jNts@jHbw@bBzx@cBzx@kHbw@kNts@wSrn@uX`h@u\\j`@{_@rW_b@`Nec@bDcc@_Dab@aN{_@oWw\\k`@sXch@{Ssn@iNus@kHgw@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.360032,-113.525315),new google.maps.LatLng(51.426635,-113.418574))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA304 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL190"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL190<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_lkrHpnteS??|yFzU|xFum@xpFykBpbF}fDlnEq}EpsDipGj}{@nnrA??e{Np_WgjQfkReeSdiMsmT~xGkbUzmAo~A_icAolA}gz@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=956.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.833025,-106.603925),new google.maps.LatLng(50.362403,-105.823225))
a.airClass="F"
a.altLow="6000"
a.altHigh="19000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA305 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL190"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL190<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding CYR303"
po.paths=google.maps.geometry.encoding.decodePath("w}`qHbr{dS??nnCg_H|oBw~HbpAguIpn@gdJ|KekJ_UejJuw@}`JxilAk{e@??|bD`ca@zf@~}a@wsAdxa@ymEvq`@_bI~k^apLtc[k}{@onrA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=952.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.665407,-106.250667),new google.maps.LatLng(50.145083,-105.241917))
a.airClass="F"
a.altLow="6000"
a.altHigh="19000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA306 (T) DELISLE, SK<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yzj|Hj_|kSpwf@??jf{Aqwf@??kf{A")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=979.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(51.794444,-107.444444),new google.maps.LatLng(51.998056,-106.972222))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA307 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL190"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL190<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("k~vpHh}pbS??ahBy_K}pCe~IcuDkrHatEq}FylFcaEq~F{~BuhGux@ujGxSp|Ooja@vuU{|tA??rjS|bJzwQzrOpwOzcTzhM~aXzmJ`j[rhG`z]yilAj{e@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=948.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.698017,-105.441011),new google.maps.LatLng(50.36165,-104.560022))
a.airClass="F"
a.altLow="6000"
a.altHigh="19000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA308 (S) STRAWBERRY LAKES, SK<br>Class F<br>Surface to 4000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont daylight 1 Apr - 31 Oct<br>User/Controlling Agency - Regina Soaring Club<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("y~urHntfxRvCctA`MoqA`VklAd^{dApe@k{@pk@{o@jp@_c@ps@_Udu@kFfu@pFps@bUfp@bc@pk@~o@le@h{@d^zdA~UflA`MhqAvC|sAwCzsAaMhqA_VflAe^zdAme@h{@qk@~o@gp@bc@qs@bUgu@pFeu@kFqs@_Ukp@_c@qk@{o@qe@k{@e^{dAaVklAaMoqA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.316714,-103.828311),new google.maps.LatLng(50.416619,-103.671689))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA310 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL300"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL300<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("__frHnatiS??jbU{mArmT_yGdeSeiMfjQgkRd{Nq_W`ghA~gbB??ac[dri@oq_@nla@uac@~rWkzaAmew@iuDmgb@w{@}mg@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=934.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.457975,-107.279417),new google.maps.LatLng(50.334722,-106.250667))
a.airClass="F"
a.altLow="6000"
a.altHigh="30000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA311 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL300"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL300<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("k_doHraogS??pnIwwSppGqxUlqEohWznCqkXjo~Avs]??}yFl~j@amJhci@ozMhrf@gfQpdc@aghA_hbB")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=946.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.189856,-106.758983),new google.maps.LatLng(49.833025,-105.773169))
a.airClass="F"
a.altLow="6000"
a.altHigh="30000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA315 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL300"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL300<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}{enHfyqdS??fsA{va@ag@u|a@ybDwaa@p}{Aepl@??`yGzcz@lbAxp{@asCpf{@ko~Aws]")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=952.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.16617,-105.930083),new google.maps.LatLng(49.698017,-105.008761))
a.airClass="F"
a.altLow="6000"
a.altHigh="30000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA316 (M) MOOSE JAW, SK<br>Class F<br>6000ft to FL300"
mt="Advisory Area<br>Designated Altitude - 6000ft to FL300<br>Time of Designation - 1400-0030Z Mon-Fri (fr Nov 1 to Feb 15 1430-0100Z Mon-Fri) when Moose Jaw Terminal is open. O/T Ocsl by NOTAM.<br>User/Controlling Agency - Moose Jaw Terminal, 15 Wing Moose Jaw, (306) 694-2222, Ext 5572 (CSN) 826-5572<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("qsinH|`jaS??shGaz]{mJaj[{hM_bXqwO{cT{wQ{rOsjS}bJriBcvJj{qC???|~Qltn@`vLhur@q}{Adpl@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=937.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.222081,-105.241917),new google.maps.LatLng(50.158725,-104.5))
a.airClass="F"
a.altLow="6000"
a.altHigh="30000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA317 (P) ESTEVAN, SK<br>Class F<br>Surface to 11500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 11500ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Estevan Regional Airport Authority (306) 634-8668<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("i{pkHlomsRbBkv@lHut@hNiq@xSol@tXif@t\\y^|_@mV`b@kMbc@yCbc@zC`b@lMz_@nVt\\z^rXff@xSnl@hNfq@jHrt@dBhv@eBfv@kHrt@iNhq@ySnl@sXff@u\\z^{_@nVab@jMcc@zCcc@wCab@kM}_@mVu\\{^uXgf@ySol@iNkq@mHst@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.176976,-103.016809),new google.maps.LatLng(49.243579,-102.914858))
a.airClass="F"
a.altLow="0"
a.altHigh="11500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA403 (T) BRANDON, MB<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_sqnHrwpbRbxU??men@cxU??len@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.622222,-100.197222),new google.maps.LatLng(49.738889,-99.955556))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA404 (T) WINNIPEG, MB<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont daylight<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("uxrrHzqglQ[wrIbvDeD?uqYhk{@bl@oBhtY_{A?aEdxgAyaAsj@_aAeDsbHweLquFiCgg`@ii^wtGyhP")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=972.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.061944,-96.870861),new google.maps.LatLng(50.400417,-96.354444))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA407 (M) SOUTHPORT, MB<br>Class F<br>Surface to 8000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 8000ft<br>Time of Designation - 14-23Z (DT13-22Z) Mon - Fri excluding hols O/T by NOTAM<br>User/Controlling Agency - Southport Tower Manager (204) 428-2467<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("mwroHvko{Qwv@u{B_oDamE}NcuCmgAwuGc@kjRm}A}}IrAsmX??dfFhyA`mFfZ|lFm\\hgFgtAfzE}oC|_WvfiA??clVtzFo|Vdz@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=975.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.666219,-99.043328),new google.maps.LatLng(49.975067,-98.613467))
a.airClass="F"
a.altLow="0"
a.altHigh="8000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA408 (S) STARBUCK, MB<br>Class F<br>Surface to 3000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont daylight 1 Apr - 31 Dec<br>User/Controlling Agency - Winnipeg Gliding Club<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("kmwnHvayrQvra@wBa@nc^ao\\vBwsAqdH~@{_JkZ{mEos@enC")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.591469,-97.777803),new google.maps.LatLng(49.768708,-97.617767))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA411 (F) STONY MOUNTAIN, MB<br>Class F<br>Surface to 1500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 1500ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Loewen Aviation Ltd (Micropilot) (204) 344-5558<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}ftpH`wupQXcMjAsLxByKdDqJlE_IlFcGdG}DvGuB`Hg@~Gf@xGtBdG|DlFbGlE~HdDpJxBxKjArLVbMW`MkArLyBxKeDpJmE~HmFbGeG|DyGtB_Hf@aHg@wGsBeG_EmFcGmE}HeDsJyByKkAsL")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.063341,-97.286582),new google.maps.LatLng(50.079992,-97.26064))
a.airClass="F"
a.altLow="0"
a.altHigh="1500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA413 (M) SOUTHPORT, MB<br>Class F<br>5000ft to 8000ft"
mt="Advisory Area<br>Designated Altitude - 5000ft to 8000ft<br>Time of Designation - 14-23Z (DT13-22Z) Mon - Fri excluding hols, O/T by NOTAM<br>User/Controlling Agency - Southport Tower Manager (204) 428-2467<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("km{nHdn{xQta\\dvxA??ncOyxMpeMy}Qb_K_gUrnH{|W|uEo}YvwBeg[fVay[cjAsr[ws~@zqS??l_@~iK_IxlKas@~dKw{AtrJ{aCfvIodDrpHubEtbGc}EvhE")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=952.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.317437,-99.073025),new google.maps.LatLng(49.789186,-98.081847))
a.airClass="F"
a.altLow="5000"
a.altHigh="8000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA420 (T) GIMLI, MB<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Interlake Aviation<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("sdbuHb{urQxSeqhA`rk@?_YvfhA{lk@lI")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=980.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.575,-97.601944),new google.maps.LatLng(50.806667,-97.225278))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA509 (P) COOKSTOWN, ON<br>Class F<br>Surface to 4500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4500ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User/Controlling Agency - Skydive Toronto Inc.<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("atbmG~maeNp@eXtCoWtF}UjIwSxK{PzMqMlOuIpPqE`QeA`QfAnPpElOtIzMnMxK|PlIvSrF|UtClWr@dXs@fXuClWsF|UmIvSyKzP{MpMmOtIoPpEaQdAaQeAqPoEmOwI{MoMyK{PkIwSuF_VuCmW")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=997.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.222238,-79.66213),new google.maps.LatLng(44.25554,-79.615648))
a.airClass="F"
a.altLow="0"
a.altHigh="4500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA513 (P) PORT COLBORNE, ON<br>Class F<br>Surface to 11500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 11500ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User/Controlling Agency - St. Catharines Parachute Club<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}c}dGl`icNdBip@jH{n@hN{k@xSqg@tX_b@v\\k[z_@}S`b@yKbc@gCbc@hC`b@zKz_@|St\\j[tX~a@vSpg@jNzk@jHxn@bBfp@cBhp@kHxn@kNzk@wSpg@uX~a@u\\j[{_@|Sab@zKcc@hCcc@gCab@yK{_@}Sw\\k[uX_b@ySqg@iN{k@kH{n@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=994.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(42.850032,-79.395448),new google.maps.LatLng(42.916635,-79.304552))
a.airClass="F"
a.altLow="0"
a.altHigh="11500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA515 (M) THUNDER BAY, ON<br>Class F<br>Surface to 3000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 435 Squadron Operations, 17 Wing Winnipeg (204) 833-2500 Ext 5036, (204) 612-2423<br>Controlling Agency - Winnipeg ACC (204) 983-8338<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ypbdHr`}`Piql@iovAxaW}Ehb[|lbAyrEhhS")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.989444,-89.446667),new google.maps.LatLng(48.256667,-88.9975))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA516 (M) THUNDER BAY, ON<br>Class F<br>3000ft to 5000ft"
mt="Advisory Area<br>Designated Altitude - 3000ft to 5000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 435 Squadron Operations, 17 Wing Winnipeg (204) 833-2500 Ext 5036, (204) 612-2423<br>Controlling Agency - Winnipeg ACC (204) 983-8338<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ypbdHr`}`Piql@iovAxaW}Ehb[|lbAyrEhhS")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=976.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(47.989444,-89.446667),new google.maps.LatLng(48.256667,-88.9975))
a.airClass="F"
a.altLow="3000"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA521 (M) NORTH BAY, ON<br>Class F<br>7000ft to FL250"
mt="Advisory Area<br>Designated Altitude - 7000ft to FL250<br>Time of Designation - Ocsl by NOTAM<br>User Agency - Canadian Air Defence Sector, Senior Director (705) 494-2011 Ext 6480 (CSN) 628-6480<br>Controlling Agency - Toronto ACC (905) 676-4509<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ym`{GnplfNoelAbepDeatApeRyzpAmrnCn`nAy|_@d}}A}~q@bqj@ypJtqYhui@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=910.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.538056,-80.865),new google.maps.LatLng(47.788056,-79.640833))
a.airClass="F"
a.altLow="7000"
a.altHigh="25000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA524 (S) HAWKESBURY, ON<br>Class F<br>Surface to 7000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - MontrÃ©al Soaring Club (514) 667-0400<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class E airspace apply when the area is active. When not active the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("sgvuGf{xfM?qeYnxBu{GzgO?dzIr_LhoE|zO??ufKnlCuqKxv@orKs]")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=986.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.475,-74.684626),new google.maps.LatLng(45.666667,-74.5))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA528 (S,T) KEMPTVILLE, ON<br>Class F<br>Surface to 4000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Rideau Valley Soaring<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to and when approved by Ottawa Terminal. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("gpgrGplnmM~~Ew{@hrA}aBziC{hPrgMc`P??j`@cbBjh@y{Avp@esA??usB{cNqbDahMioEgbLuyF{pJy|Jf}tAv|ArbO")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=975.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(44.935358,-75.773056),new google.maps.LatLng(45.114722,-75.250511))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA529 (P) GRAND BEND, ON<br>Class F<br>Surface to 12500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 12500ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User/Controlling Agency - Grand Bend Sport Parachute Club<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("{sigGbhwqNjAgd@~Ecc@nJ{`@rNs]fRmYhUmTrWwNhYuHbZgB`ZhBhYtHrWxNhUlTfRlYpNp]nJz`@`Fbc@jAdd@kAfd@aF`c@oJz`@qNr]gRlYiUlTsWxNiYtHaZfBcZgBiYsHsWyNiUmTgRmYsNs]oJ{`@_Fcc@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=996.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.258357,-81.750976),new google.maps.LatLng(43.308309,-81.682358))
a.airClass="F"
a.altLow="0"
a.altHigh="12500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA530 (M) LAKE ONTARIO, ON<br>Class F<br>3000ft to FL500"
mt="Advisory Area<br>Designated Altitude - 3000ft to FL500<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Canadian Air Defence Sector, Senior Director (705) 494-2011 Ext 6480 (CSN) 628-6480<br>Controlling Agency - Toronto ACC (905) 676-4509<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ouhiG|fh_Nsfc@}zeCegB{_jFxnf@?AB@rzpJ?`@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=917.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(43.631125,-78.690556),new google.maps.LatLng(43.833333,-76.796661))
a.airClass="F"
a.altLow="3000"
a.altHigh="50000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA534 (S) KARS, ON<br>Class F<br>Surface to 2500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 2500ft<br>Time of Designation - Ocsl daylight by NOTAM<br>User Agency - Rideau Valley Soaring<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to and when approved by Ottawa Terminal. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("yajrGjn`mMeKmdAjlBs}W??yt@t@ws@lNcq@~Z_m@xf@mg@nq@u`@pz@_YzaAoPhgAmGljAXjkAbI`jA~QlfAlZv`A~a@`y@ph@ro@xm@xd@xq@hX")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.097222,-75.701667),new google.maps.LatLng(45.149826,-75.562778))
a.airClass="F"
a.altLow="0"
a.altHigh="2500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA616 (T) QUÃ‰BEC, QC<br>Class F<br>Surface to 4000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 4000ft<br>Time of Designation - Cont daylight<br>Controlling Agency - Montreal ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ias{GrtcpL~oRyxb@jtBt~_@??tHrqGrg@nkGreA`~FtaBniF~zBpnEzpC|mDvbDnhC~pDd{AzdR|_VpsDhz`@sqg@dbDml`@eqmB")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=962.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.254444,-71.532778),new google.maps.LatLng(46.633333,-70.783333))
a.airClass="F"
a.altLow="0"
a.altHigh="4000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA619 (H) MONT GRAND MORNE, QC<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Cont daylight 1 Apr - 30 Nov<br>User/Controlling Agency - Club de vol libre de Thetford Mines (418) 335-7945<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("od{xGxmzpLvCimA`M}jA`VefAf^k_Ane@ov@pk@al@jp@c`@ps@gSdu@wEfu@zEps@jSfp@f`@pk@`l@ne@pv@d^h_A|UbfAbMvjAtCdmAuCbmAcMxjA}UbfAe^h_Aoe@nv@qk@bl@gp@d`@qs@jSgu@|Eeu@wEqs@gSkp@e`@qk@_l@oe@qv@g^i_AaVgfAaM{jA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.083381,-71.155416),new google.maps.LatLng(46.183286,-71.01125))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA621 (H) MONT YAMASKA, QC<br>Class F<br>Surface to 7000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 7000ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Association QuÃ©bÃ©coise de vol libre (514) 279-2750<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("kxvtGrwv{LvCilA`M_jA`VkeAd^q~@ne@{u@rk@ok@hp@w_@rs@_Sdu@uEfu@xEns@dShp@x_@pk@nk@le@zu@d^n~@~UheA`MziAvCdlAwCflAaMziA_VfeAe^n~@me@zu@qk@pk@ip@x_@os@bSgu@xEeu@uEss@_Sip@w_@sk@ok@oe@yu@e^s~@aVieAaM_jA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=992.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.405603,-72.937878),new google.maps.LatLng(45.505508,-72.795455))
a.airClass="F"
a.altLow="0"
a.altHigh="7000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA623 (H) ROUGEMONT, QC<br>Class F<br>Surface to 3000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Association QuÃ©bÃ©coise de vol libre (514) 279-2750<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ekctGj{x{LsjBxz]??cKpfA}RzbAoZf}@ka@|u@eg@bm@al@`c@qo@~Wwq@fLsr@d@ar@_Jap@{Uyl@ca@eh@mk@ob@ot@y[c|@kTabAkLefA{CkhAzCghArjBi~]??{CfhAtCjhAbLffAdTdbAt[f|@jb@tt@`h@rk@tl@ha@~o@dV~q@fJtr@Yxq@_Lro@wWbl@yb@hg@{l@na@wu@tZa}@dSwbAlKkfA")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=988.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.406111,-73.096072),new google.maps.LatLng(45.522726,-72.855556))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA627 (S) ST-DOMINIQUE, QC<br>Class F<br>Surface to 3000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 3000ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Association de vol Ã  voile Champlain (450) 771-0500<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("c~xtGfb`|LgzIlfCceNta@irAajL|bCsjBwZc|YjcG||JvvIfxGjoEfxG?fxG")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.516667,-72.941667),new google.maps.LatLng(45.663333,-72.718333))
a.airClass="F"
a.altLow="0"
a.altHigh="3000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA632 (P) JOLIETTE, QC<br>Class F<br>Surface to 12500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 12500ft<br>Time of Designation - Ocsl daylight by NOTAM April 10 - Oct 31<br>User Agency - Ã‰cole de Parachute Voltige<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to, and when approved by Montreal Area Control Centre. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("e{txGxfi_M~Be`AvJg~@bRiz@`Yqt@`_@im@dd@od@bh@qZxj@}Odl@sDbl@vDxj@~Obh@rZbd@pd@`_@fm@|Xpt@dRfz@vJb~@|Bb`A}Bb`AwJb~@eRfz@}Xrt@a_@fm@cd@nd@ch@tZyj@~Ocl@vDel@uDyj@{Och@sZed@od@a_@gm@aYst@cRiz@wJe~@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.067818,-73.512821),new google.maps.LatLng(46.151071,-73.392735))
a.airClass="F"
a.altLow="0"
a.altHigh="12500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA633 (P) JOLIETTE, QC<br>Class F<br>12500ft to 13500ft Ocsl to below FL180"
mt="Advisory Area<br>Designated Altitude - 12500ft to 13500ft Ocsl to below FL180<br>Time of Designation - Ocsl daylight by NOTAM April 10 - Oct 31<br>User Agency - Ã‰cole de Parachute Voltige<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to and when approved by MontrÃ©al ACC. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("mo}xGzpw~LxrE?fnKpmE??dd@pSna@p[`^xb@|Ydi@bUpn@zO|r@dJ~u@dC|w@jPfwFskCr_SyrEbmAakMcgn@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=987.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(46.065278,-73.604167),new google.maps.LatLng(46.195278,-73.362222))
a.airClass="F"
a.altLow="12500"
a.altHigh="13500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA640 (M) BAGOTVILLE, QC<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("_gk|H~btbM?_{rc@r{yC?Lht`Ghkg@d~w@wH|dxIledFp`_OaegL?")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=738.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(49.82815,-74.0),new google.maps.LatLng(52.0,-68.0))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA641 (M) BAGOTVILLE, QC<br>Class F<br>Surface to 8000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 8000ft<br>Time of Designation - Ocsl by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("}}stH~nmvL~gaJ?xfQ}u]??~wMrtPnmOjyLNbzz@gl|Dx~hIqmd@?_|oD_seK")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=850.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.666586,-74.0),new google.maps.LatLng(50.733919,-71.842733))
a.airClass="F"
a.altLow="0"
a.altHigh="8000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA642 (M) BAGOTVILLE, QC<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - 14-06Z (DT13-05Z) Mon - Fri excluding hols; O/T by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("kghvHlatrLvH}dxI|n{EpbjHr|zCts@??ngCxw]lbFjo\\fxHpsZrgKveXbtMx~TyfQ|u]_haJ?mhs@qlxB")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=840.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.826586,-72.0),new google.maps.LatLng(51.001664,-69.610967))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA643 (M) BAGOTVILLE, QC<br>Class F<br>Surface to 6000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 6000ft<br>Time of Designation - 14-06Z (DT13-05Z) Mon - Fri; 14-23Z (DT13-22Z) Sat, Sun and hols; O/T by NOTAM<br>User Agency - 3 Wing Operations, CFB Bagotville (418) 677-4000 Ext 661-7283, (CSN) 661-7283<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("kjpwH~f`~KhrtB?|b\\poCfuvF`u|Bzc~A~nfG??krSppS_xP~_YqrMjh]k_Jxt`@uaFtac@i}Ahld@fh@jsd@s|zCus@g{cGwacJMit`G")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=806.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(48.700328,-71.150847),new google.maps.LatLng(51.206944,-68.0))
a.airClass="F"
a.altLow="0"
a.altHigh="6000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA644 (P) ST-ESPRIT, QC<br>Class F<br>Surface to 12500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 12500ft<br>Time of Designation - Ocsl daylight by NOTAM April 10 - Oct 31<br>User Agency - Parachute MontrÃ©al<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to, and when approved by Montreal Area Control Centre. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("ienwGbdt`M|B_`AvJ_~@dRcz@~Xkt@b_@cm@bd@kd@bh@oZxj@yOdl@sDdl@tDxj@|O`h@pZbd@ld@`_@`m@~Xjt@bR`z@vJz}@|B|_A}Bz_AwJz}@cR`z@_Yjt@a_@`m@cd@ld@ah@pZyj@|Oel@tDel@sDyj@yOch@oZcd@kd@c_@cm@_Ykt@eRcz@wJ_~@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=993.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.869762,-73.732328),new google.maps.LatLng(45.953016,-73.612672))
a.airClass="F"
a.altLow="0"
a.altHigh="12500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA645 (P) ST-ESPRIT, QC<br>Class F<br>12500ft to 16000ft Ocsl to below FL180"
mt="Advisory Area<br>Designated Altitude - 12500ft to 16000ft Ocsl to below FL180<br>Time of Designation - Ocsl daylight by NOTAM April 10 - Oct 31<br>User Agency - Parachute MontrÃ©al<br>Controlling Agency - MontrÃ©al ACC 1 (800) 633-1353<br>Operating Procedures - Activated on request to and when approved by MontrÃ©al ACC. The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("g~`xG~uj`MzjDomSpkXdsR??~b@z_@l^jh@hYdo@pStt@`kDzdP_wKbiDwpQlBalGghZ")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=984.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.845833,-73.763889),new google.maps.LatLng(46.049167,-73.519444))
a.airClass="F"
a.altLow="12500"
a.altHigh="16000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA702 (P) GREENWOOD, NS<br>Class F<br>Surface to 500ft"
mt="Advisory Area<br>Designated Altitude - Surface to 500ft<br>Time of Designation - Cont daylight<br>User/Controlling Agency - Sky Venture Atlantic (902) 848-6605<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply."
po.paths=google.maps.geometry.encoding.decodePath("c_brGb_`jKXyKjAkKxBsJdDqIlEaHlFkFdGmDvGiB`Hc@`Hb@vGhBdGlDlFjFlE`HdDpIxBrJjAjKVxKWxKkAjKyBrJeDpImE`HmFjFeGjDwGjBaHb@aHc@wGiBeGmDmFkFmEaHeDqIyBsJkAkK")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=999.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(45.05473,-64.733731),new google.maps.LatLng(45.071381,-64.710158))
a.airClass="F"
a.altLow="0"
a.altHigh="500"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA731 (M) GOOSE BAY, NL<br>Class F<br>Surface to 5000ft"
mt="Advisory Area<br>Designated Altitude - Surface to 5000ft<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - High speed, low level jet traffic operating in all weather conditions. When the area is active the rules for Class G airspace apply, except that, unless authorized and coordinated with the User/Controlling Agency, civil aircraft VFR weather limits are 1500ft and 3NM. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding: i) The airspace within the area bounded by a circle of 22 miles radius centred on N53:33:43.00 W064:06:23.00 (Churchill Falls, NL - AD) and ii) CYR726 and CYR727."
po.paths=google.maps.geometry.encoding.decodePath("gfzbI|phlJrud@msR~`f@oyo@hlcG?~s`B~s`B?x{uKy|pBdjuJu|iG?e`rDb`rDc~jCdkpAueaCoyo@ib`AilcGbkpAocsFdn`@_~cHd}aF?hoEmtZ??rmIb|MzxJ`uJzxK`dGdmLdlCduLzPxpLmhB``Lc`FtcK}pIj|IywLhkH_rOzqFg}QxqDkwSrlBe_Upd@msUqb@usUwjB_`U}oDwxSgpF__RimH}mO")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=654.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.833333,-65.333333),new google.maps.LatLng(55.416667,-59.5))
a.airClass="F"
a.altLow="0"
a.altHigh="5000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA732 (M) GOOSE BAY, NL<br>Class F<br>5000ft to FL280 Ocsl FL600 by NOTAM"
mt="Advisory Area<br>Designated Altitude - 5000ft to FL280 Ocsl FL600 by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding CYR701."
po.paths=google.maps.geometry.encoding.decodePath("{pteIbj~uJsnk@~~xFygOdwzHh`Yx|pBc~jCdkpAueaCoyo@ib`AilcGbkpAocsF|ld@uodIfb_Dqvl@??tpDpp_@lqGtq]lgJp|ZptL~qW~vNztSjmPlhOlyQf}I")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=800.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(53.522222,-65.333333),new google.maps.LatLng(55.416667,-60.599167))
a.airClass="F"
a.altLow="5000"
a.altHigh="28000"
a.airType="CYA"
attach(a,ib,iw,tt,mt)
cdah.push(a)


tt="CYA733 (M) GOOSE BAY, NL<br>Class F<br>5000ft to FL280 Ocsl FL600 by NOTAM"
mt="Advisory Area<br>Designated Altitude - 5000ft to FL280 Ocsl FL600 by NOTAM<br>Time of Designation - Ocsl by NOTAM<br>User/Controlling Agency - Wing Operations Centre 5 Wing, CFB Goose Bay (709) 896-6900 Ext 555- 7331, (CSN) 555-7331, 1-800-563-2390<br>Operating Procedures - The rules for Class G airspace apply when the area is active. When not active, the rules for the applicable surrounding airspace apply.<br>Excluding CYR727 and CYR750."
po.paths=google.maps.geometry.encoding.decodePath("iot`IlslmJhx{CmpgBttmB?~s`B~s`B?x{uKmqhBvsxIaevGalgP??|}Igt[f~Fof^j}C}z_@rx@kv`@mk@}w`@gtCa~_@")
po.strokeColor="#0A5700"
po.fillColor="#0A5700"
po.zIndex=800.0
a=new google.maps.Polygon(po)
a.bounds=new google.maps.LatLngBounds(new google.maps.LatLng(50.833333,-63.853056),new google.maps.LatLng(52.803333,-59.5))
a.airClass="F"
a.altLow="5000"
a.altHigh="28000"
a.airType="CYA"
a.trsp=""
attach(a,ib,iw,tt,mt)
cdah.push(a)


return cdah
}
